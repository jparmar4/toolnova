"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import {
  Sparkles,
  Star,
  Brain,
  Zap,
  Shield,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { getBreadcrumbSchema, schemaToJsonLd } from "@/lib/schema";

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
  howItWorks?: {
    step: number;
    title: string;
    desc: string;
    icon: LucideIcon;
    color: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    initial: string;
  };
  relatedTools?: RelatedTool[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaIcon?: LucideIcon;
  expertName?: string;
  expertRole?: string;
}

export function PremiumToolWrapper({
  children,
  toolName,
  toolSlug,
  tagline,
  description,
  badge = "AI-Powered",
  category = "Tools",
  categorySlug = "",
  stats,
  subjectCards,
  features,
  howItWorks,
  testimonial,
  relatedTools,
  ctaTitle,
  ctaDescription,
  ctaIcon: CtaIcon = Sparkles,
  expertName = "Sarah Mitchell",
  expertRole = "Senior AI Researcher",
}: PremiumToolWrapperProps) {
  const router = useRouter();

  const breadcrumbs = [
    { name: "Home", url: "https://www.toolnovahub.com" },
    { name: "Tools", url: "https://www.toolnovahub.com/tools" },
    { name: toolName, url: `https://www.toolnovahub.com/tools/${toolSlug}` },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToJsonLd(breadcrumbSchema) }}
      />

      {/* Soft Indigo/Purple Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[45%] bg-indigo-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[35%] h-[35%] bg-purple-400/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-12 pb-16 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            {/* Verified Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 shadow-sm mb-10 animate-fade-in group hover:scale-[1.02] transition-transform">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white flex items-center justify-center"
                  >
                    <Star className="h-2.5 w-2.5 fill-white text-white" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-black tracking-widest uppercase text-slate-500">
                {badge} • Verified Expert
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Title */}
            <div className="relative mb-8 animate-slide-up">
              <div className="absolute -inset-x-20 -top-10 bottom-0 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 blur-3xl opacity-60" />
              <h1 className="relative text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {toolName}
                </span>
              </h1>
            </div>

            <p
              className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-4 font-medium leading-relaxed animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              {tagline}
            </p>

            <p
              className="text-base text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              {description}
            </p>

            {/* Quick Stats */}
            {stats && stats.length > 0 && (
              <div
                className="flex flex-wrap justify-center gap-4 animate-slide-up"
                style={{ animationDelay: "300ms" }}
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <stat.icon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-black text-slate-900 leading-none">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Tool Section */}
      <div id="tool-input" className="relative">
        <div className="max-w-7xl mx-auto px-4">{children}</div>
      </div>

      {/* Subject/Topic Cards */}
      {subjectCards && subjectCards.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {subjectCards.map((card, i) => (
              <div
                key={card.name}
                className="group relative"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 ${card.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative p-5 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center cursor-pointer">
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <card.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {card.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features Section */}
      {features && features.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Engineered for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Experience the intersection of advanced AI and human-centric
              design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group relative h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-2xl -z-10`}
                />
                <div className="h-full relative p-10 rounded-[2rem] bg-white border border-slate-200 hover-float flex flex-col">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 shadow-xl`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How It Works Section */}
      {howItWorks && howItWorks.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="bg-white/90 rounded-[3rem] p-8 md:p-16 border border-slate-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />

            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl font-black text-slate-900">
                Three Steps to{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Result
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {howItWorks.map((item, idx) => (
                <div key={item.step} className="relative text-center">
                  <div
                    className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl mb-8 relative group hover:rotate-3 transition-transform duration-500`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center text-sm font-black text-slate-900 shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed px-4">
                    {item.desc}
                  </p>

                  {idx < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-px bg-gradient-to-r from-slate-200 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Section */}
      {testimonial && (
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-700" />
            <div className="relative p-12 md:p-16 rounded-[3rem] bg-white border border-slate-200 overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]" />

              <div className="relative text-center">
                <div className="flex justify-center gap-1.5 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 italic mb-10 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-black text-white shadow-xl">
                    {testimonial.initial}
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Tools Section */}
      {relatedTools && relatedTools.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">
              More Essential Tools
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group p-8 rounded-[2rem] bg-white border border-slate-200 hover-float text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <tool.icon className={`h-7 w-7 ${tool.color}`} />
                </div>
                <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {tool.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Final CTA Section */}
      {ctaTitle && (
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="relative group p-12 md:p-20 rounded-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-700"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <CtaIcon className="h-8 w-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                {ctaTitle}
              </h3>
              {ctaDescription && (
                <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                  {ctaDescription}
                </p>
              )}
              <a
                href="#tool-input"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl hover:scale-105 transition-all shadow-2xl"
              >
                Start Calculating Now <ArrowRight className="h-6 w-6" />
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
    title: "AI-Powered",
    description:
      "Advanced AI technology delivers accurate, high-quality results every time.",
    icon: Brain,
    gradient: "from-indigo-500 to-blue-500",
    bgLight: "from-indigo-50 to-blue-50",
  },
  {
    title: "Lightning Fast",
    description:
      "Get results in seconds, not hours. Save time for what matters most.",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
    bgLight: "from-purple-50 to-pink-50",
  },
  {
    title: "100% Free & Private",
    description:
      "No sign-up required. Your data stays completely private and secure.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "from-emerald-50 to-teal-50",
  },
];
