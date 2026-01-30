import { NextRequest, NextResponse } from 'next/server';
import { runAI, MODEL_FREE, MODEL_PREMIUM } from '@/lib/ai';
import { createClient } from '@/utils/supabase/server';
import { DAILY_FREE_LIMIT } from '@/lib/limits';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const { prompt, systemPrompt } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      );
    }

    // 1. Check Authentication
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required to use AI tools' },
        { status: 401 }
      );
    }

    // 2. Check Subscription & Usage Limits
    // TODO: Connect to real subscription table. For now, everyone is Free.
    const isPremium = false;
    const model = isPremium ? MODEL_PREMIUM : MODEL_FREE;

    if (!isPremium) {
      const today = new Date().toISOString().split('T')[0];

      // Get current usage
      const { data: usageData, error: usageError } = await supabase
        .from('user_usage')
        .select('count')
        .eq('user_id', user.id)
        .eq('date', today)
        .single();

      const currentCount = usageData?.count || 0;

      if (currentCount >= DAILY_FREE_LIMIT) {
        return NextResponse.json(
          { error: `Daily limit reached (${DAILY_FREE_LIMIT} prompts). Upgrade to Premium for unlimited access.` },
          { status: 429 }
        );
      }

      // Increment usage
      const { error: updateError } = await supabase
        .from('user_usage')
        .upsert({
          user_id: user.id,
          date: today,
          count: currentCount + 1
        }, { onConflict: 'user_id, date' });

      if (updateError) {
        console.error('Error updating usage:', updateError);
        // Continue anyway, don't block user for logging error
      }
    }

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
