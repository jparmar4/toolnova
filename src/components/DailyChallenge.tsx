'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getDailyChallenge, completeDailyChallenge, type DailyChallenge as DailyChallengeType } from '@/lib/usage-tracker';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Daily Challenge Component
 * Shows today's challenge to increase engagement
 */

export default function DailyChallenge() {
    const [challenge, setChallenge] = useState<DailyChallengeType | null>(null);

    useEffect(() => {
        const loadChallenge = () => {
            const dailyChallenge = getDailyChallenge();
            setChallenge(dailyChallenge);
        };

        loadChallenge();

        // Check every hour for new day
        const interval = setInterval(loadChallenge, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    if (!challenge) return null;

    const handleComplete = () => {
        completeDailyChallenge();
        setChallenge({ ...challenge, completed: true });
    };

    return (
        <Card className={`glass-card ${challenge.completed ? 'border-green-500/30 bg-green-500/5' : 'border-primary/30'}`}>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        <CardTitle className="text-lg">Daily Challenge</CardTitle>
                    </div>
                    {challenge.completed && (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                </div>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-1">{challenge.toolName}</h4>
                        <p className="text-sm text-muted-foreground">
                            {challenge.description}
                        </p>
                    </div>

                    {challenge.completed ? (
                        <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                            <CheckCircle2 className="h-4 w-4" />
                            Challenge completed! Come back tomorrow for a new one.
                        </div>
                    ) : (
                        <Button
                            asChild
                            className="w-full bg-gradient-primary group"
                        >
                            <Link href={`/tools/${challenge.toolSlug}`} onClick={handleComplete}>
                                <span>Try it now</span>
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
