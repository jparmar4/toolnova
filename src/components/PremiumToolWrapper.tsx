'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import {
    Sparkles,
    Star,
    Brain,
    Zap,
    Shield,
    ArrowRight,
    ArrowLeft,
    LucideIcon
} from 'lucide-react';

interface RelatedTool {
    name: string;
    slug: string;
    icon: LucideIcon;
    color: string;
}

interface Stat {
    value: string;
    label: string;
    icon: LucideIcon;
}

interface SubjectCard {
    name: string;
    icon: LucideIcon;
    color: string;
    bgGlow: string;
}

interface FeatureCard {
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    bgLight: string;
}

interface PremiumToolWrapperProps {
    children: ReactNode;
    toolName: string;
    toolSlug: string;
    tagline: string;
    description: string;
    badge?: string;
    category?: string;
    categorySlug?: string;
    stats?: Stat[];
    subjectCards?: SubjectCard[];
    features?: FeatureCard[];
    howItWorks?: { step: number; title: string; desc: string; icon: LucideIcon; color: string }[];
    testimonial?: { quote: string; author: string; role: string; initial: string };
    relatedTools?: RelatedTool[];
    ctaTitle?: string;
    ctaDescription?: string;
    ctaIcon?: LucideIcon;
}

export function PremiumToolWrapper({
    children,
    toolName,
    toolSlug,
    tagline,
    description,
    badge = 'AI-Powered',
    category = 'Tools',
    categorySlug = '',
    stats,
    subjectCards,
    features,
    howItWorks,
    testimonial,
    relatedTools,
    ctaTitle,
    ctaDescription,
    ctaIcon: CtaIcon = Sparkles,
}: PremiumToolWrapperProps) {
    const router = useRouter();

    return (
        <div className="min-h-screen">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-[1100px] mx-auto px-4 pt-8 pb-6">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="group flex items-center gap-2 mb-4 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Back</span>
                    </button>

                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Home</Link>
                        <span className="text-muted-foreground/50 text-sm">/</span>
                        <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Tools</Link>
                        {categorySlug && (
                            <>
                                <span className="text-muted-foreground/50 text-sm">/</span>
                                <Link href={`/tools/${categorySlug}`} className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">{category}</Link>
                            </>
                        )}
                        <span className="text-muted-foreground/50 text-sm">/</span>
                        <span className="text-primary text-sm font-semibold">{toolName}</span>
                    </div>

                    {/* Hero Content */}
                    <div className="text-center mb-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 mb-6">
                            <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {badge}
                            </span>
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {toolName}
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
                            {tagline}
                        </p>
                        <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-6">
                            {description}
                        </p>

                        {/* Stats */}
                        {stats && stats.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-6 mb-8">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm">
                                        <stat.icon className="h-4 w-4 text-primary" />
                                        <span className="font-bold text-foreground">{stat.value}</span>
                                        <span className="text-muted-foreground">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Tool Section */}
            <div id="tool-input" className="relative">
                <div className="max-w-[1000px] mx-auto px-4">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20"></div>
                        <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 shadow-2xl overflow-hidden">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            {/* Subject/Topic Cards */}
            {subjectCards && subjectCards.length > 0 && (
                <div className="max-w-[1000px] mx-auto px-4 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {subjectCards.map((card, i) => (
                            <div key={card.name} className="group relative" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className={`absolute inset-0 ${card.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center cursor-pointer">
                                    <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                        <card.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{card.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Features */}
            {features && features.length > 0 && (
                <div className="max-w-[1000px] mx-auto px-4 py-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-foreground">
                            Why Users <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Love This</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="group relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.bgLight} border border-slate-100 dark:border-slate-800/30 group-hover:bg-transparent group-hover:border-transparent transition-all duration-500`}>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 transition-all`}>
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-3 transition-colors">{feature.title}</h3>
                                    <p className="text-muted-foreground group-hover:text-white/80 transition-colors">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* How It Works */}
            {howItWorks && howItWorks.length > 0 && (
                <div className="max-w-[900px] mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground">
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">How It Works</span>
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-y-1/2 rounded-full"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {howItWorks.map((item) => (
                                <div key={item.step} className="relative text-center">
                                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl mb-5 relative z-10`}>
                                        <item.icon className="h-10 w-10 text-white" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-primary flex items-center justify-center text-sm font-black text-primary">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Testimonial */}
            {testimonial && (
                <div className="max-w-[900px] mx-auto px-4 py-12">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30"></div>
                        <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                            <div className="relative text-center">
                                <div className="flex justify-center gap-1 mb-5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl font-medium italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-lg font-bold">
                                        {testimonial.initial}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Related Tools */}
            {relatedTools && relatedTools.length > 0 && (
                <div className="max-w-[900px] mx-auto px-4 py-12">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-foreground">More Tools You'll Love</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {relatedTools.map((tool) => (
                            <Link
                                key={tool.slug}
                                href={`/tools/${tool.slug}`}
                                className="group p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <tool.icon className={`h-8 w-8 mx-auto mb-3 ${tool.color} group-hover:scale-110 transition-transform`} />
                                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA Section */}
            {ctaTitle && (
                <div className="max-w-[900px] mx-auto px-4 py-12">
                    <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySC0yNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                        <div className="relative">
                            <CtaIcon className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3">{ctaTitle}</h3>
                            {ctaDescription && <p className="text-white/80 mb-6 max-w-md mx-auto">{ctaDescription}</p>}
                            <a href="#tool-input" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors shadow-xl">
                                Get Started <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Default feature cards that can be reused
export const defaultFeatures: FeatureCard[] = [
    {
        title: 'AI-Powered',
        description: 'Advanced AI technology delivers accurate, high-quality results every time.',
        icon: Brain,
        gradient: 'from-blue-500 to-cyan-500',
        bgLight: 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/20',
    },
    {
        title: 'Lightning Fast',
        description: 'Get results in seconds, not hours. Save time for what matters most.',
        icon: Zap,
        gradient: 'from-purple-500 to-pink-500',
        bgLight: 'from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/20',
    },
    {
        title: '100% Free & Private',
        description: 'No sign-up required. Your data stays completely private and secure.',
        icon: Shield,
        gradient: 'from-green-500 to-emerald-500',
        bgLight: 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20',
    },
];
