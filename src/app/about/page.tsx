import { Metadata } from "next";
import { Rocket, Heart, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Our Mission & Team | ToolNova",
  description:
    "Learn about ToolNova's mission to democratize AI productivity tools. Meet the team behind 50+ free AI-powered tools for students and professionals.",
  keywords: [
    "about ToolNova",
    "AI tools team",
    "ToolNova mission",
    "free AI tools company",
  ],
  alternates: {
    canonical: "https://www.toolnovahub.com/about",
  },
  openGraph: {
    title: "About Us - Our Mission & Team | ToolNova",
    description:
      "Learn about ToolNova's mission to democratize AI productivity tools for everyone.",
    url: "https://www.toolnovahub.com/about",
    type: "website",
    images: [
      {
        url: "https://www.toolnovahub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About ToolNova - Free AI Tools Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | ToolNova",
    description:
      "Learn about ToolNova's mission to democratize AI productivity tools.",
    images: ["https://www.toolnovahub.com/og-image.png"],
    creator: "@toolnovahub",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-5xl">
      {/* Hero */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Democratizing AI for Everyone
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          ToolNova is an all-in-one platform built to empower students,
          creators, and professionals with professional-grade AI tools.
        </p>
      </div>

      {/* Mission Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          {
            icon: Rocket,
            title: "Our Mission",
            desc: "To provide accessible, high-quality AI tools that simplify complex tasks and boost global productivity.",
          },
          {
            icon: Heart,
            title: "Our Values",
            desc: "We believe in transparency, privacy first, and creating software that delights users through beautiful design.",
          },
          {
            icon: Shield,
            title: "Privacy First",
            desc: "Your data belongs to you. We process files securely and never use your personal content to train our models.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-6">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h2>Our Story</h2>
        <p>
          ToolNova started with a simple idea: AI tools shouldn't be scattered
          across dozens of expensive subscriptions. We wanted to build a single
          "Swiss Army Knife" for the digital age.
        </p>
        <p>
          Founded in 2026, we've grown from a simple PDF merger utility into a
          comprehensive suite used by over 1 million users worldwide. Our team
          is passionate about cutting-edge web technology, user experience, and
          the transformative power of artificial intelligence.
        </p>

        <h2 className="mt-16 mb-8">Meet Our Experts</h2>
        <div className="grid md:grid-cols-3 gap-8 not-prose mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-purple-600 mb-4">
              SM
            </div>
            <h3 className="font-bold text-lg mb-1">Sarah Mitchell</h3>
            <p className="text-sm text-purple-600 font-medium mb-3">
              Education Technology Writer
            </p>
            <p className="text-sm text-muted-foreground">
              Specializes in AI tools for student productivity and learning
              enhancement.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-blue-600 mb-4">
              MC
            </div>
            <h3 className="font-bold text-lg mb-1">Marcus Chen</h3>
            <p className="text-sm text-blue-600 font-medium mb-3">
              Content Strategy Director
            </p>
            <p className="text-sm text-muted-foreground">
              Expert in scaling content production workflows using AI
              technologies.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-emerald-600 mb-4">
              EP
            </div>
            <h3 className="font-bold text-lg mb-1">Dr. Emily Parker</h3>
            <p className="text-sm text-emerald-600 font-medium mb-3">
              Research Consultant
            </p>
            <p className="text-sm text-muted-foreground">
              PhD focus on information synthesis and automated research
              methodologies.
            </p>
          </div>
        </div>

        <h2 className="mt-16 mb-8 text-2xl font-bold text-center">
          Contact Information
        </h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 text-center mb-16 not-prose">
          <p className="text-muted-foreground mb-4">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm font-semibold">
            <div className="flex items-center justify-center gap-2">
              <span className="text-primary">Email:</span>
              <a
                href="mailto:support@toolnovahub.com"
                className="hover:text-primary transition-colors"
              >
                support@toolnovahub.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-primary">Global HQ:</span>
              <span>Singapore</span>
            </div>
          </div>
        </div>

        <h2>Why Choose Us?</h2>
        <p>
          Unlike other platforms that are cluttered with ads and limit free
          features, ToolNova prioritizes the user experience. We offer a
          generous free tier because we believe productivity is a right, not a
          luxury.
        </p>
      </div>
    </div>
  );
}
