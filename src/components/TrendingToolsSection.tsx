'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Sparkles, Star, ArrowRight, Zap } from 'lucide-react';

interface TrendingTool {
    name: string;
    href: string;
    description: string;
    category: string;
    weeklyUsers: string;
    avgRating: number;
    trend: 'up' | 'hot';
    badge?: string;
}

const trendingTools: TrendingTool[] = [
    {
        name: 'AI Homework Solver',
        href: '/tools/homework-solver',
        description: 'Get step-by-step solutions to any homework problem',
        category: 'AI Study Tools',
        weeklyUsers: '5.2K',
        avgRating: 4.9,
        trend: 'hot',
        badge: '🔥 Most Popular',
    },
    {
        name: 'Essay Writer',
        href: '/tools/essay-writer',
        description: 'Generate well-structured essays on any topic',
        category: 'Writing Tools',
        weeklyUsers: '4.8K',
        avgRating: 4.8,
        trend: 'hot',
        badge: '⭐ Top Rated',
    },
    {
        name: 'Paraphraser',
        href: '/tools/paraphraser',
        description: 'Rewrite text while maintaining original meaning',
        category: 'Writing Tools',
        weeklyUsers: '3.9K',
        avgRating: 4.7,
        trend: 'up',
    },
    {
        name: 'AI Notes Generator',
        href: '/tools/notes-generator',
        description: 'Create comprehensive study notes from any material',
        category: 'AI Study Tools',
        weeklyUsers: '3.5K',
        avgRating: 4.8,
        trend: 'up',
    },
    {
        name: 'MCQ Generator',
        href: '/tools/mcq-generator',
        description: 'Generate practice questions for exam preparation',
        category: 'AI Study Tools',
        weeklyUsers: '2.8K',
        avgRating: 4.6,
        trend: 'up',
    },
    {
        name: 'Text Summarizer',
        href: '/tools/text-summarizer',
        description: 'Summarize long texts in seconds',
        category: 'AI Study Tools',
        weeklyUsers: '2.5K',
        avgRating: 4.7,
        trend: 'up',
    },
];

export default function TrendingToolsSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>

            <div className="container px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-4 mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 mb-4">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-semibold">Trending This Week</span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold">
                        Most Popular <span className="text-gradient">Tools</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of students using these trending tools
                    </p>
                </div>

                {/* Trending Tools Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {trendingTools.map((tool, index) => (
                        <Link key={tool.name} href={tool.href}>
                            <Card
                                className="glass-card h-full hover:shadow-premium-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer group animate-scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            {tool.badge && (
                                                <div className="inline-block px-2 py-1 bg-gradient-primary text-white text-xs font-bold rounded mb-2">
                                                    {tool.badge}
                                                </div>
                                            )}
                                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                {tool.name}
                                            </CardTitle>
                                        </div>
                                        {tool.trend === 'hot' ? (
                                            <Zap className="h-5 w-5 text-orange-500 fill-orange-500 animate-pulse" />
                                        ) : (
                                            <TrendingUp className="h-5 w-5 text-success" />
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {tool.description}
                                    </p>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {/* Stats */}
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                            <span className="font-semibold">{tool.avgRating}</span>
                                            <span className="text-muted-foreground">/5</span>
                                        </div>
                                        <div className="text-muted-foreground">
                                            {tool.weeklyUsers} users/week
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">
                                        <Sparkles className="h-3 w-3" />
                                        {tool.category}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                        <span>Try it now</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* View All Tools Button */}
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-primary/30 hover:bg-primary/10"
                        asChild
                    >
                        <a href="#tools">
                            View All 30+ Tools
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>

                {/* Live Usage Indicator */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    <div className="flex -space-x-2">
                        {['👨‍🎓', '👩‍💻', '👨‍💼', '👩‍🔬', '🧑‍🎓'].map((avatar, i) => (
                            <div
                                key={i}
                                className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-background flex items-center justify-center text-sm"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {avatar}
                            </div>
                        ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">247 students</span> using tools right now
                        <span className="inline-block h-2 w-2 rounded-full bg-success ml-2 animate-pulse"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
