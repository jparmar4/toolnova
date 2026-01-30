'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle2, Book, Sparkles, Download } from 'lucide-react';
import { useState } from 'react';

const steps = [
    {
        number: '01',
        title: 'Choose Your Tool',
        description: 'Browse our collection of 30+ AI-powered and utility tools designed for students',
        icon: Book,
    },
    {
        number: '02',
        title: 'Enter Your Input',
        description: 'Type or paste your content - homework question, essay topic, or any text you need help with',
        icon: Sparkles,
    },
    {
        number: '03',
        title: 'Get Instant Results',
        description: 'Our AI processes your request in seconds and delivers high-quality, accurate results',
        icon: CheckCircle2,
    },
    {
        number: '04',
        title: 'Export & Share',
        description: 'Download in multiple formats (PDF, DOCX, TXT) or share directly to social media',
        icon: Download,
    },
];

export default function HowItWorksSection() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
            <div className="container px-4 md:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16 animate-fade-in">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold">
                        How It <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get started in 4 simple steps - no signup, no credit card required
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                    {/* Video/Demo Placeholder */}
                    <div className="order-2 lg:order-1">
                        <Card className="glass-card overflow-hidden shadow-premium-lg group cursor-pointer">
                            <div
                                className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                                onClick={() => setShowVideo(!showVideo)}
                            >
                                {!showVideo ? (
                                    <>
                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-black/30 transition-all">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl animate-pulse"></div>
                                                <Button
                                                    size="lg"
                                                    className="relative rounded-full h-20 w-20 bg-gradient-primary hover:scale-110 transition-transform shadow-glow-lg"
                                                >
                                                    <Play className="h-8 w-8 ml-1" fill="currentColor" />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Thumbnail Preview */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                            <div>
                                                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                                                    2 min demo
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                                                    See AI Study Tools in Action
                                                </h3>
                                                <p className="text-white/90 text-sm mt-2 drop-shadow">
                                                    Watch how students use our platform to ace their studies
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center p-8 text-center">
                                        <div>
                                            <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
                                            <p className="text-lg font-medium">Video Coming Soon!</p>
                                            <p className="text-sm text-muted-foreground mt-2">
                                                In the meantime, try our tools below
                                            </p>
                                            <Button className="mt-4" asChild>
                                                <a href="#tools">Explore Tools</a>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>

                        {/* Stats Below Video */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <Card className="glass-card text-center p-4">
                                <div className="text-2xl font-bold text-primary">30+</div>
                                <div className="text-xs text-muted-foreground">AI Tools</div>
                            </Card>
                            <Card className="glass-card text-center p-4">
                                <div className="text-2xl font-bold text-primary">10K+</div>
                                <div className="text-xs text-muted-foreground">Happy Users</div>
                            </Card>
                            <Card className="glass-card text-center p-4">
                                <div className="text-2xl font-bold text-primary">1M+</div>
                                <div className="text-xs text-muted-foreground">Tasks Done</div>
                            </Card>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <Card
                                    key={step.number}
                                    className="glass-card hover:shadow-premium-lg transition-all duration-300 hover:scale-105 animate-slide-in-left"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <CardContent className="p-6 flex gap-4">
                                        {/* Step Number */}
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-glow-sm">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-mono text-primary font-bold">
                                                    {step.number}
                                                </span>
                                                <h3 className="font-heading text-lg font-bold">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        className="bg-gradient-primary hover:opacity-90 shadow-glow-md text-lg px-8 py-6"
                        asChild
                    >
                        <a href="#tools">
                            <Sparkles className="mr-2 h-5 w-5" />
                            Start Using Tools Now - It's Free!
                        </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                        No signup required • No credit card • Unlimited access
                    </p>
                </div>
            </div>
        </section>
    );
}
