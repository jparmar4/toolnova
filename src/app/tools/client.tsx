"use client";

import { useState, useMemo } from "react";
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
  Zap,
  Star,
  TrendingUp,
  ShieldCheck,
  Rocket,
  Search,
  Filter,
  Calendar,
} from "lucide-react";

// Tool data with categories
const ALL_TOOLS = [
  // Study Tools
  {
    name: "Homework Solver",
    slug: "homework-solver",
    category: "Study Tools",
    description: "Get step-by-step solutions to homework problems",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    name: "Notes Generator",
    slug: "notes-generator",
    category: "Study Tools",
    description: "Generate comprehensive study notes from any topic",
    icon: BookOpen,
    color: "text-indigo-500",
  },
  {
    name: "MCQ Generator",
    slug: "mcq-generator",
    category: "Study Tools",
    description: "Create multiple choice questions for practice",
    icon: Star,
    color: "text-purple-500",
  },
  {
    name: "Flashcard Maker",
    slug: "flashcard-maker",
    category: "Study Tools",
    description: "Create digital flashcards for memorization",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    name: "Quiz Generator",
    slug: "quiz-generator",
    category: "Study Tools",
    description: "Generate practice quizzes on any subject",
    icon: Sparkles,
    color: "text-green-500",
  },
  {
    name: "Doubt Solver",
    slug: "doubt-solver",
    category: "Study Tools",
    description: "Get instant answers to your study questions",
    icon: GraduationCap,
    color: "text-cyan-500",
  },
  {
    name: "Formula Generator",
    slug: "formula-generator",
    category: "Study Tools",
    description: "Generate formulas for math and science topics",
    icon: Wrench,
    color: "text-orange-500",
  },
  {
    name: "Concept Explainer",
    slug: "concept-explainer",
    category: "Study Tools",
    description: "Break down complex topics into simple explanations",
    icon: BookOpen,
    color: "text-teal-500",
  },
  {
    name: "Diagram Explainer",
    slug: "diagram-explainer",
    category: "Study Tools",
    description: "Explain diagrams and visual concepts",
    icon: ImageIcon,
    color: "text-pink-500",
  },
  {
    name: "Chapter Summary",
    slug: "chapter-summary",
    category: "Study Tools",
    description: "Summarize chapter content quickly",
    icon: BookOpen,
    color: "text-violet-500",
  },
  {
    name: "Revision Planner",
    slug: "revision-planner",
    category: "Study Tools",
    description: "Create structured study schedules",
    icon: Calendar,
    color: "text-blue-600",
  },

  // Writing Tools
  {
    name: "Essay Writer",
    slug: "essay-writer",
    category: "Writing Tools",
    description: "Generate structured essays on any topic",
    icon: Pencil,
    color: "text-purple-500",
  },
  {
    name: "Paragraph Generator",
    slug: "paragraph-generator",
    category: "Writing Tools",
    description: "Create paragraphs for various purposes",
    icon: Pencil,
    color: "text-indigo-500",
  },
  {
    name: "Story Generator",
    slug: "story-generator",
    category: "Writing Tools",
    description: "Create engaging stories with AI",
    icon: BookOpen,
    color: "text-green-500",
  },
  {
    name: "Speech Writer",
    slug: "speech-writer",
    category: "Writing Tools",
    description: "Write compelling speeches for any occasion",
    icon: Sparkles,
    color: "text-pink-500",
  },
  {
    name: "Email Writer",
    slug: "email-writer",
    category: "Writing Tools",
    description: "Draft professional emails instantly",
    icon: Sparkles,
    color: "text-blue-500",
  },
  {
    name: "Grammar Fix",
    slug: "grammar-fix",
    category: "Writing Tools",
    description: "Fix grammar and improve writing quality",
    icon: Pencil,
    color: "text-red-500",
  },
  {
    name: "Paraphraser",
    slug: "paraphraser",
    category: "Writing Tools",
    description: "Rewrite text while keeping the meaning",
    icon: Pencil,
    color: "text-cyan-500",
  },
  {
    name: "Resume Bullets",
    slug: "resume-bullets",
    category: "Writing Tools",
    description: "Generate impactful resume bullet points",
    icon: Pencil,
    color: "text-yellow-500",
  },
  {
    name: "Bio Generator",
    slug: "bio-generator",
    category: "Writing Tools",
    description: "Create social media bios instantly",
    icon: Sparkles,
    color: "text-purple-600",
  },
  {
    name: "Caption Generator",
    slug: "caption-generator",
    category: "Writing Tools",
    description: "Generate catchy social media captions",
    icon: Sparkles,
    color: "text-pink-600",
  },

  // Image & PDF Tools
  {
    name: "Merge PDF",
    slug: "merge-pdf",
    category: "Image & PDF Tools",
    description: "Combine multiple PDFs into one file",
    icon: ImageIcon,
    color: "text-red-500",
  },
  {
    name: "Split PDF",
    slug: "split-pdf",
    category: "Image & PDF Tools",
    description: "Extract pages or split PDFs",
    icon: ImageIcon,
    color: "text-orange-500",
  },
  {
    name: "Image to PDF",
    slug: "image-to-pdf",
    category: "Image & PDF Tools",
    description: "Convert images to PDF documents",
    icon: ImageIcon,
    color: "text-amber-500",
  },
  {
    name: "Image Compressor",
    slug: "image-compressor",
    category: "Image & PDF Tools",
    description: "Reduce image file size",
    icon: ImageIcon,
    color: "text-yellow-500",
  },
  {
    name: "JPG to PNG",
    slug: "jpg-to-png",
    category: "Image & PDF Tools",
    description: "Convert JPG images to PNG format",
    icon: ImageIcon,
    color: "text-green-500",
  },
  {
    name: "PNG to JPG",
    slug: "png-to-jpg",
    category: "Image & PDF Tools",
    description: "Convert PNG images to JPG format",
    icon: ImageIcon,
    color: "text-teal-500",
  },

  // Utility Tools
  {
    name: "Word Counter",
    slug: "word-counter",
    category: "Utility Tools",
    description: "Count words, characters, sentences & paragraphs",
    icon: TrendingUp,
    color: "text-cyan-500",
  },
  {
    name: "Character Counter",
    slug: "character-counter",
    category: "Utility Tools",
    description: "Count characters with social media limits",
    icon: Wrench,
    color: "text-blue-500",
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    category: "Utility Tools",
    description: "Convert text to different cases",
    icon: Wrench,
    color: "text-purple-500",
  },
  {
    name: "Text Summarizer",
    slug: "text-summarizer",
    category: "Utility Tools",
    description: "Summarize long texts into key points",
    icon: TrendingUp,
    color: "text-indigo-500",
  },
  {
    name: "Text Simplifier",
    slug: "text-simplifier",
    category: "Utility Tools",
    description: "Simplify complex text for easy reading",
    icon: Wrench,
    color: "text-pink-500",
  },
  {
    name: "Age Calculator",
    slug: "age-calculator",
    category: "Utility Tools",
    description: "Calculate age from date of birth",
    icon: Calendar,
    color: "text-green-500",
  },

  // Career Tools
  {
    name: "Cover Letter Writer",
    slug: "cover-letter-writer",
    category: "Career Tools",
    description: "Generate professional cover letters",
    icon: Briefcase,
    color: "text-amber-500",
  },
  {
    name: "Interview Generator",
    slug: "interview-generator",
    category: "Career Tools",
    description: "Practice with interview questions",
    icon: Briefcase,
    color: "text-blue-500",
  },
  {
    name: "Goal Planner",
    slug: "goal-planner",
    category: "Career Tools",
    description: "Break down goals into actionable steps",
    icon: Rocket,
    color: "text-yellow-500",
  },
  {
    name: "Timetable Generator",
    slug: "timetable-generator",
    category: "Career Tools",
    description: "Create structured weekly schedules",
    icon: Calendar,
    color: "text-purple-500",
  },
  {
    name: "To-Do List Generator",
    slug: "todo-list-generator",
    category: "Career Tools",
    description: "Turn goals into organized task lists",
    icon: ShieldCheck,
    color: "text-green-500",
  },

  // Exam Prep Tools
  {
    name: "Vocabulary Builder",
    slug: "vocabulary-builder",
    category: "Exam Prep Tools",
    description: "Learn new words with meanings and examples",
    icon: BookOpen,
    color: "text-green-500",
  },
  {
    name: "Synonym Finder",
    slug: "synonym-finder",
    category: "Exam Prep Tools",
    description: "Find synonyms for any word",
    icon: Search,
    color: "text-emerald-500",
  },
  {
    name: "Antonym Finder",
    slug: "antonym-finder",
    category: "Exam Prep Tools",
    description: "Find antonyms for any word",
    icon: Search,
    color: "text-teal-500",
  },
  {
    name: "Idioms & Phrases",
    slug: "idioms-phrases",
    category: "Exam Prep Tools",
    description: "Learn idioms with meanings and examples",
    icon: BookOpen,
    color: "text-cyan-500",
  },
  {
    name: "One Word Substitution",
    slug: "one-word-substitution",
    category: "Exam Prep Tools",
    description: "Find single words for phrases",
    icon: Pencil,
    color: "text-blue-500",
  },
];

const categories = [
  {
    name: "Study Tools",
    slug: "study-tools",
    description: "AI-powered tools for homework, notes, and exams.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Writing Tools",
    slug: "writing-tools",
    description: "Create essays, stories, and professional content.",
    icon: Pencil,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    name: "Image & PDF Tools",
    slug: "image-pdf-tools",
    description: "Manage PDFs and process images with ease.",
    icon: ImageIcon,
    gradient: "from-red-500 to-orange-600",
  },
  {
    name: "Utility Tools",
    slug: "utility-tools",
    description: "Calculators and text processing utilities.",
    icon: Wrench,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Career Tools",
    slug: "career-tools",
    description: "Cover letters, interviews, and career planning.",
    icon: Briefcase,
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    name: "Exam Prep Tools",
    slug: "exam-prep-tools",
    description: "Vocabulary, synonyms, and language learning.",
    icon: BookOpen,
    gradient: "from-green-500 to-emerald-600",
  },
];

export function ToolsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return ALL_TOOLS.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f1a]">
      {/* Background Ornaments */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Tools
            </span>
            <span className="text-slate-900 dark:text-white"> Library</span>
          </h1>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative flex items-center bg-white dark:bg-slate-900/80 backdrop-blur-3xl rounded-[1.8rem] border border-slate-200 dark:border-slate-800 p-2 shadow-2xl">
                <Search className="text-slate-400 h-6 w-6 ml-6 mr-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 50+ tools... (e.g. 'homework')"
                  className="flex-1 py-4 bg-transparent border-none text-foreground placeholder:text-slate-500 focus:outline-none text-xl font-medium"
                />
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["All", ...categories.map((c) => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-xl shadow-primary/30 active:scale-95"
                    : "bg-white dark:bg-slate-800 text-slate-500 hover:text-primary border border-slate-200 dark:border-slate-700 hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group relative bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/60 p-8 hover-float transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <tool.icon
                      className={`h-8 w-8 ${tool.color}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {tool.category}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 line-clamp-2">
                  {tool.description}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  <span>Open Tool</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                No tools found
              </h3>
              <p className="text-slate-500">
                Try searching for something else or browse categories.
              </p>
            </div>
          )}
        </div>

        {/* Categories Section (Hidden if searching) */}
        {!searchQuery && activeCategory === "All" && (
          <div className="mb-24">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-12 text-center flex items-center justify-center gap-4">
              <Filter className="h-8 w-8 text-primary" /> Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/tools/${category.slug}`}
                  className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary transition-all text-center"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-black text-slate-900 dark:text-white mb-2">
                    {category.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
