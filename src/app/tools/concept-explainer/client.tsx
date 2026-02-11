"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  BookOpen,
  Brain,
  Lightbulb,
  Calculator,
  GraduationCap,
  Layers,
  HelpCircle,
  Users,
  Star,
  Zap,
  Target,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const toolOptions = [
  {
    id: "level",
    label: "Explanation Level",
    type: "select" as const,
    options: [
      { value: "beginner", label: "🌱 Beginner" },
      { value: "intermediate", label: "📚 Intermediate" },
      { value: "advanced", label: "🎓 Advanced" },
      { value: "eli5", label: "🧒 ELI5 (Super Simple)" },
    ] as const,
    defaultValue: "intermediate",
  },
  {
    id: "style",
    label: "Explanation Style",
    type: "select" as const,
    options: [
      { value: "detailed", label: "📝 Detailed" },
      { value: "analogy", label: "🎭 With Analogies" },
      { value: "visual", label: "📊 Visual/Diagram" },
    ] as const,
    defaultValue: "detailed",
  },
  {
    id: "includeExamples",
    label: "Real-World Examples",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const level = options?.level || "intermediate";
  const style = options?.style || "detailed";
  const includeExamples = options?.includeExamples !== false;

  const levelStyles: Record<string, string> = {
    beginner:
      "Explain for someone with no prior knowledge. Use simple language and basic terminology. Break down complex terms into everyday language.",
    intermediate:
      "Explain for someone with basic understanding of the topic. Use appropriate terminology but clarify technical concepts. Assume foundational knowledge.",
    advanced:
      "Explain with technical depth and nuance. Use specialized terminology, discuss subtle distinctions, and explore advanced implications.",
    eli5: "Explain like I'm 5 years old - use very simple words, basic concepts, and easy-to-understand analogies. Avoid all technical jargon.",
  };

  const styleDescriptions: Record<string, string> = {
    detailed:
      "Provide a comprehensive, step-by-step breakdown. Explain the what, why, and how of the concept.",
    analogy:
      "Use creative analogies and real-world comparisons to explain. Make abstract concepts concrete through familiar examples.",
    visual:
      "Include descriptions that help visualize the concept. Describe how it looks, works, or can be represented visually.",
  };

  return `Explain the following concept clearly and accurately.

Explanation level: ${levelStyles[level]}
Style: ${styleDescriptions[style]}
${includeExamples ? "Include 2-3 relevant real-world examples to illustrate the concept and make it more concrete." : "Focus on the core explanation without examples."}

Structure your explanation:
1. Start with a clear definition
2. Break down the key components or aspects
3. Explain how it works or why it matters
4. ${includeExamples ? "Provide practical examples" : "Summarize key takeaways"}
5. End with a brief summary or key insight

Concept to explain:
${input}

Provide a clear, engaging explanation:`;
};

const stats = [
  { icon: Users, label: "500K+", sublabel: "Concepts Explained" },
  { icon: Star, label: "4.9/5", sublabel: "Student Rating" },
  { icon: Zap, label: "Any Topic", sublabel: "Any Complexity" },
];

const features = [
  {
    icon: Layers,
    title: "4 Complexity Levels",
    description:
      "From ELI5 (super simple) to Advanced - choose the perfect depth for your understanding level.",
  },
  {
    icon: Sparkles,
    title: "Multiple Explanation Styles",
    description:
      "Get detailed breakdowns, creative analogies, or visual descriptions based on your learning preference.",
  },
  {
    icon: CheckCircle,
    title: "Real-World Examples",
    description:
      "Understand concepts through practical examples and applications that make abstract ideas concrete.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Concept",
    desc: "Type the topic you want explained",
    icon: Lightbulb,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Level",
    desc: "Choose complexity and style",
    icon: Layers,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Understand",
    desc: "Get crystal-clear explanation",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Concept Explainer?",
    answer:
      "The Concept Explainer is an AI-powered learning tool that breaks down complex topics into crystal-clear explanations at your preferred level. Whether you need a simple overview or advanced technical depth, it adapts to your learning needs with multiple explanation styles and optional real-world examples.",
  },
  {
    question: "What does ELI5 mean?",
    answer:
      "ELI5 stands for 'Explain Like I'm 5 years old.' This mode uses the simplest possible language and analogies to explain complex concepts. It's perfect when you're encountering a topic for the first time and need to understand the basic idea without any technical jargon or assumed knowledge.",
  },
  {
    question: "Can this explain any topic?",
    answer:
      "Yes! The Concept Explainer can tackle topics from any field - quantum physics, philosophy, economics, computer science, biology, history, and more. Simply enter the concept you want to understand, select your preferred complexity level, and get a clear explanation tailored to your needs.",
  },
  {
    question: "What explanation styles are available?",
    answer:
      "Choose from three styles: Detailed (comprehensive step-by-step breakdown), Analogy-Based (uses creative comparisons and familiar examples), or Visual (includes descriptions that help you picture how the concept works). Select the style that matches your learning preference.",
  },
  {
    question: "How do I choose the right complexity level?",
    answer:
      "Start with Intermediate if you have basic familiarity with the topic. Choose Beginner if it's completely new to you, Advanced if you want technical depth, or ELI5 if you want the simplest possible explanation. You can always regenerate with a different level if needed.",
  },
  {
    question: "Is the Concept Explainer free?",
    answer:
      "Yes! The Concept Explainer is completely free to use. Get unlimited explanations for any concept without any cost. Perfect for students, lifelong learners, professionals expanding their knowledge, or anyone curious about understanding complex topics better.",
  },
];

const relatedTools = [
  {
    name: "Doubt Solver",
    slug: "doubt-solver",
    icon: HelpCircle,
    color: "text-orange-600",
  },
  {
    name: "Formula Generator",
    slug: "formula-generator",
    icon: Calculator,
    color: "text-blue-600",
  },
  {
    name: "Notes Generator",
    slug: "notes-generator",
    icon: BookOpen,
    color: "text-purple-600",
  },
  {
    name: "Homework Solver",
    slug: "homework-solver",
    icon: Brain,
    color: "text-green-600",
  },
];

export default function ConceptExplainerClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Concept Explainer"
      toolSlug="concept-explainer"
      tagline="Understand any concept in minutes"
      description="Break down complex topics into crystal-clear explanations at your preferred level. From beginner to advanced, with examples and analogies."
      badge="Learning Made Easy"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "The ELI5 mode finally helped me understand quantum mechanics! The analogies made everything click. Perfect for visual learners like me.",
        author: "Thomas Lee",
        role: "Physics Student",
        initial: "T",
      }}
      relatedTools={relatedTools}
      ctaTitle="Start Understanding"
      ctaDescription="No concept too complex - we'll break it down for you!"
      ctaButtonText="Explain Concept"
      ctaIcon={Brain}
    >
      <EnhancedToolLayout
        toolSlug="concept-explainer"
        toolName="Concept Explainer"
        placeholder={`🧠 Enter a concept you want explained...

Examples:
• Blockchain technology and how it works
• DNA replication process in molecular biology
• Supply and demand in economics with real examples
• Machine learning algorithms and neural networks
• Photosynthesis - the process plants use to create energy
• Quantum entanglement explained simply
• How does the stock market actually work?
• The theory of relativity for beginners

💡 Tip: Be specific about what aspect confuses you for more targeted explanations!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📖 Your Explanation"
        generateButtonText="💡 Explain Concept"
        showCopyButton={true}
        showDownloadButton={true}
        showWordCount={false}
        showFeedbackButtons={true}
      />
      <div className="px-6 pb-6">
        <FAQSection faqs={faqs} />
      </div>
    </PremiumToolWrapper>
  );
}
