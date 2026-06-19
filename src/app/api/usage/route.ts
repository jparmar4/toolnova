import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { DAILY_FREE_LIMIT } from '@/lib/limits';
import { db } from '@/lib/db';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        const user = session?.user;

        if (!user || !user.email) {
            return NextResponse.json({ count: 0, limit: DAILY_FREE_LIMIT, remaining: DAILY_FREE_LIMIT, isPremium: false });
        }
        
        const userId = (user as any).id;

        // Ensure user exists in Hostinger MySQL (Prisma)
        await db.user.upsert({
            where: { id: userId },
            create: {
                id: userId,
                email: user.email,
                name: user.name || null,
            },
            update: {
                email: user.email,
                name: user.name || null,
            },
        });

        // Check if premium
        const subscription = await db.subscription.findFirst({
            where: {
                userId: userId,
                status: 'active',
            },
        });

        const isPremium = !!subscription;

        if (isPremium) {
            return NextResponse.json({ count: 0, limit: -1, remaining: -1, isPremium: true });
        }

        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        // Get count from GenerationHistory in MySQL
        const count = await db.generationHistory.count({
            where: {
                userId: userId,
                createdAt: {
                    gte: startOfToday,
                },
            },
        });

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
