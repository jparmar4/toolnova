import { NextRequest, NextResponse } from 'next/server';
import { runAI, MODEL_FREE, MODEL_PREMIUM } from '@/lib/ai';

export async function POST(req: NextRequest) {
  try {
    const { prompt, systemPrompt } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      );
    }

    // TODO: Connect this to real user subscription status
    // For now, we default to Free Tier (GPT-5 Nano)
    // To test Premium, we could check a mock header or cookie
    const isPremium = false;
    const model = isPremium ? MODEL_PREMIUM : MODEL_FREE;

    const result = await runAI(prompt, systemPrompt, model);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'AI generation failed' },
        { status: 500 }
      );
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
