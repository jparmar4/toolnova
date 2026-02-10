import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Pencil,
  BookOpen,
  Image as ImageIcon,
  Wrench,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "All Free AI Tools - 50+ Writing, Study, PDF & Career Tools | ToolNova",
  description:
    "Explore 50+ free AI-powered tools for study, writing, exam prep, image editing, PDF management, and career development. No sign-up required.",
  keywords: [
    "free AI tools",
    "online tools",
    "study tools",
    "writing tools",
    "PDF tools",
    "career tools",
    "AI productivity",
    "ToolNova",
  ],
  alternates: {
    canonical: "https://www.toolnovahub.com/tools",
  },
  openGraph: {
    title:
      "All Free AI Tools - 50+ Writing, Study, PDF & Career Tools | ToolNova",
    description:
      "Explore 50+ free AI-powered tools for study, writing, exam prep, image editing, PDF management, and career development.",
    url: "https://www.toolnovahub.com/tools",
    type: "website",
    images: [
      {
        url: "https://www.toolnovahub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToolNova - All Free AI Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free AI Tools - 50+ Tools | ToolNova",
    description: "Explore 50+ free AI-powered tools. No sign-up required.",
    images: ["https://www.toolnovahub.com/og-image.png"],
    creator: "@toolnovahub",
  },
};

const categories = [
  {
    name: "Study Tools",
    slug: "study-tools",
    description:
      "AI-powered tools for homework, notes, flashcards, quizzes, and more.",
    icon: GraduationCap,
    count: 11,
    gradient: "from-blue-500 to-indigo-600",
    bgLight:
      "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/10",
    shadowColor: "shadow-blue-500/20",
  },
  {
    name: "Writing Tools",
    slug: "writing-tools",
    description:
      "Create essays, stories, emails, captions, and professional content.",
    icon: Pencil,
    count: 10,
    gradient: "from-purple-500 to-pink-600",
    bgLight:
      "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10",
    shadowColor: "shadow-purple-500/20",
  },
  {
    name: "Exam Prep Tools",
    slug: "exam-prep-tools",
    description: "Vocabulary, synonyms, idioms, and language learning tools.",
    icon: BookOpen,
    count: 5,
    gradient: "from-green-500 to-emerald-600",
    bgLight:
      "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10",
    shadowColor: "shadow-green-500/20",
  },
  {
    name: "Image & PDF Tools",
    slug: "image-pdf-tools",
    description: "Merge, split, compress PDFs and convert image formats.",
    icon: ImageIcon,
    count: 7,
    gradient: "from-red-500 to-orange-600",
    bgLight:
      "from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/10",
    shadowColor: "shadow-red-500/20",
  },
  {
    name: "Utility Tools",
    slug: "utility-tools",
    description: "Word counter, case converter, text tools, and calculators.",
    icon: Wrench,
    count: 6,
    gradient: "from-cyan-500 to-blue-600",
    bgLight:
      "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/10",
    shadowColor: "shadow-cyan-500/20",
  },
  {
    name: "Career Tools",
    slug: "career-tools",
    description:
      "Cover letters, interview prep, goal planning, and productivity.",
    icon: Briefcase,
    count: 6,
    gradient: "from-amber-500 to-yellow-600",
    bgLight:
      "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10",
    shadowColor: "shadow-amber-500/20",
  },
];

export default function ToolsPage() {
  const totalTools = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            {totalTools}+ Free Tools
          </div>
          <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Tools Library
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive collection of AI-powered tools designed
            for students, writers, and professionals.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              href={`/tools/${category.slug}`}
              key={category.slug}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${category.bgLight} p-8 border border-white/50 dark:border-slate-700/50 hover:shadow-2xl ${category.shadowColor} hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Tool count badge */}
              <div
                className={`absolute top-6 right-6 bg-gradient-to-r ${category.gradient} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}
              >
                {category.count} Tools
              </div>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-xl ${category.shadowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <category.icon className="h-8 w-8" strokeWidth={2} />
                </div>

                {/* Title */}
                <h2 className="text-foreground text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-medium">
                  Explore tools
                </span>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-primary shadow-lg group-hover:bg-gradient-to-r group-hover:${category.gradient} group-hover:text-white group-hover:scale-110 transition-all duration-300`}
                >
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
            <p className="text-3xl font-black text-primary">{totalTools}+</p>
            <p className="text-sm text-muted-foreground font-medium">
              Total Tools
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
            <p className="text-3xl font-black text-green-600">100%</p>
            <p className="text-sm text-muted-foreground font-medium">
              Free to Use
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
            <p className="text-3xl font-black text-purple-600">AI</p>
            <p className="text-sm text-muted-foreground font-medium">Powered</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
            <p className="text-3xl font-black text-orange-600">🔒</p>
            <p className="text-sm text-muted-foreground font-medium">
              Privacy First
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
