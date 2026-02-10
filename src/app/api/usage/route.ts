import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { DAILY_FREE_LIMIT } from '@/lib/limits';

export async function GET() {
    try {
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ count: 0, limit: DAILY_FREE_LIMIT, remaining: DAILY_FREE_LIMIT, isPremium: false });
        }

        // Check if premium
        const { data: subscription } = await supabase
            .from('Subscription')
            .select('status')
            .eq('userId', user.id)
            .eq('status', 'active')
            .maybeSingle();

        const isPremium = !!subscription;

        if (isPremium) {
            return NextResponse.json({ count: 0, limit: -1, remaining: -1, isPremium: true });
        }

        const today = new Date().toISOString().split('T')[0];

        const { data: usageData } = await supabase
            .from('user_usage')
            .select('count')
            .eq('user_id', user.id)
            .eq('date', today)
            .single();

        const count = usageData?.count || 0;

        return NextResponse.json({
            count,
            limit: DAILY_FREE_LIMIT,
            remaining: Math.max(0, DAILY_FREE_LIMIT - count),
            isPremium: false,
        });
    } catch (error) {
        console.error('Usage API Error:', error);
        return NextResponse.json({ count: 0, limit: DAILY_FREE_LIMIT, remaining: DAILY_FREE_LIMIT, isPremium: false });
    }
}
