'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    university: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Computer Science Student',
        university: 'MIT',
        content: 'This platform saved me countless hours on assignments. The AI homework solver explains everything step-by-step, making complex topics easy to understand!',
        rating: 5,
        avatar: '👩‍💻',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Engineering Major',
        university: 'Stanford',
        content: 'I went from struggling with essays to getting A grades. The essay writer tool helped me structure my thoughts perfectly. Absolutely game-changing!',
        rating: 5,
        avatar: '👨‍🎓',
    },
    {
        id: 3,
        name: 'Emma Williams',
        role: 'Medical Student',
        university: 'Harvard',
        content: 'The flashcard maker and quiz generator are perfect for exam prep. I aced my last 3 exams using these tools. Highly recommend to all students!',
        rating: 5,
        avatar: '👩‍⚕️',
    },
    {
        id: 4,
        name: 'David Rodriguez',
        role: 'Business Student',
        university: 'UCLA',
        content: 'Free, fast, and incredibly accurate. Used it for my thesis and saved weeks of work. The export to Word feature is brilliant!',
        rating: 5,
        avatar: '👨‍💼',
    },
    {
        id: 5,
        name: 'Olivia Taylor',
        role: 'Literature Major',
        university: 'Oxford',
        content: 'The paraphraser and grammar checker are lifesavers. My writing improved dramatically, and my professors noticed the difference!',
        rating: 5,
        avatar: '📚',
    },
    {
        id: 6,
        name: 'James Anderson',
        role: 'High School Senior',
        university: 'Lincoln High',
        content: 'As a high schooler preparing for college, these tools gave me an edge. The homework solver taught me concepts my teachers couldn\'t explain!',
        rating: 5,
        avatar: '🎓',
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-rotate testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-20 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>

            <div className="container px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-4 mb-16 animate-fade-in">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold">
                        Loved by <span className="text-gradient">10,000+ Students</span> Worldwide
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See what students from top universities are saying about AI Study Tools
                    </p>
                </div>

                {/* Main Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <Card
                        className="glass-card shadow-premium-lg border-primary/20 animate-scale-in relative"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <CardContent className="p-8 md:p-12">
                            {/* Quote Icon */}
                            <div className="absolute top-8 left-8 opacity-10">
                                <Quote className="h-20 w-20 text-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6 justify-center relative z-10">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-scale-in"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <blockquote className="text-lg md:text-xl text-center mb-8 leading-relaxed relative z-10">
                                "{currentTestimonial.content}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4 relative z-10">
                                <div className="text-4xl">{currentTestimonial.avatar}</div>
                                <div className="text-left">
                                    <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{currentTestimonial.role}</div>
                                    <div className="text-xs text-primary font-medium">{currentTestimonial.university}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Grid of smaller testimonials */}
                <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            className="glass-card hover:shadow-premium-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => setCurrentIndex(index)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="p-6">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm mb-4 line-clamp-3">{testimonial.content}</p>
                                <div className="flex items-center gap-2">
                                    <div className="text-2xl">{testimonial.avatar}</div>
                                    <div>
                                        <div className="font-semibold text-sm">{testimonial.name}</div>
                                        <div className="text-xs text-muted-foreground">{testimonial.university}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success border border-success/20">
                        <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                        <span className="text-sm font-medium">Trusted by students from 50+ countries</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
