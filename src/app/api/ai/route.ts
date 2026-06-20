import { NextRequest, NextResponse } from 'next/server';
import { runAI, MODEL_FREE, MODEL_PREMIUM } from '@/lib/ai';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { DAILY_FREE_LIMIT } from '@/lib/limits';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { prompt, systemPrompt, toolSlug = "unknown" } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      console.error('API: Invalid prompt received', { prompt });
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      );
    }


    // 1. Check Authentication
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user || !user.email) {
      console.error('API: Auth failed, no session');
      return NextResponse.json(
        { error: 'Authentication required to use AI tools' },
        { status: 401 }
      );
    }
    // We expect user.id to be populated by our NextAuth callback
    const userId = (user as any).id;
    console.log('API: User authenticated', { userId });

    // Ensure user exists in Hostinger MySQL (Prisma) — use email as stable lookup key
    const dbUser = await db.user.upsert({
      where: { email: user.email },
      create: {
        email: user.email,
        name: user.name || null,
        image: user.image || null,
      },
      update: {
        name: user.name || null,
        image: user.image || null,
      },
    });
    const resolvedUserId = dbUser.id;

    // 2. Check Subscription & Usage Limits
    const subscription = await db.subscription.findFirst({
      where: {
        userId: resolvedUserId,
        status: 'active',
      },
    });

    const isPremium = !!subscription;
    const model = isPremium ? MODEL_PREMIUM : MODEL_FREE;

    console.log('API: Processing request', { promptLength: prompt.length, model });

    if (!isPremium) {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);

      // Get current usage from GenerationHistory in MySQL
      const currentCount = await db.generationHistory.count({
        where: {
          userId: resolvedUserId,
          createdAt: {
            gte: startOfToday,
          },
        },
      });

      if (currentCount >= DAILY_FREE_LIMIT) {
        return NextResponse.json(
          { error: `Daily limit reached (${DAILY_FREE_LIMIT} prompts). Upgrade to Premium for unlimited access.` },
          { status: 429 }
        );
      }
    }

    console.log('API: Calling runAI...');
    const result = await runAI(prompt, systemPrompt, model);
    console.log('API: runAI result:', result);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'AI generation failed' },
        { status: 500 }
      );
    }

    // 3. Log to History
    try {
      await db.generationHistory.create({
        data: {
          userId: resolvedUserId,
          toolSlug: toolSlug,
          prompt: JSON.stringify({ prompt, systemPrompt }),
          response: result.content || ""
        }
      });
    } catch (historyError) {
      console.error('Error saving history:', historyError);
      // We don't fail the request if history logging fails
    }

    return NextResponse.json({
      success: true,
      result: result.content
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
