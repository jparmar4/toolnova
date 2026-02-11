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
  HelpCircle,
  MessageCircle,
  ClipboardList,
  Users,
  Star,
  Zap,
  CheckCircle,
  Target,
  Sparkles,
} from "lucide-react";

const toolOptions = [
  {
    id: "subject",
    label: "Subject Area",
    type: "select" as const,
    options: [
      { value: "general", label: "📚 General" },
      { value: "math", label: "🔢 Mathematics" },
      { value: "science", label: "🔬 Science" },
      { value: "history", label: "📜 History" },
      { value: "programming", label: "💻 Programming" },
    ] as const,
    defaultValue: "general",
  },
  {
    id: "depth",
    label: "Answer Depth",
    type: "select" as const,
    options: [
      { value: "quick", label: "⚡ Quick Answer" },
      { value: "detailed", label: "📝 Detailed Explanation" },
      { value: "eli5", label: "🧒 Simple (ELI5)" },
    ] as const,
    defaultValue: "detailed",
  },
  {
    id: "includeExamples",
    label: "Include Examples",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const subject = options?.subject || "general";
  const depth = options?.depth || "detailed";
  const includeExamples = options?.includeExamples !== false;

  const depthStyles: Record<string, string> = {
    quick:
      "Provide a clear, concise answer that directly addresses the question. Be brief but complete.",
    detailed:
      "Provide a comprehensive explanation with step-by-step breakdown. Include relevant background information, explain the reasoning process, and ensure thorough understanding.",
    eli5: "Explain this in very simple terms that anyone could understand, as if explaining to a 5-year-old. Use everyday analogies and avoid technical jargon.",
  };

  const subjectGuidance: Record<string, string> = {
    general:
      "Provide accurate, well-researched information suitable for general knowledge.",
    math: "Show the mathematical reasoning, include formulas if relevant, and explain each step of the solution clearly.",
    science:
      "Explain the scientific concepts, principles, and laws involved. Include relevant terminology and real-world applications.",
    history:
      "Provide historical context, dates, key figures, and explain cause-and-effect relationships.",
    programming:
      "Include code examples, explain the logic, and discuss best practices if applicable.",
  };

  return `Answer this ${subject} question or doubt clearly and accurately.

${depthStyles[depth]}
${subjectGuidance[subject]}
${includeExamples ? "Include relevant examples or analogies to illustrate key concepts and make the explanation more concrete." : "Focus on the core explanation without examples."}

IMPORTANT REQUIREMENTS:
- Answer must be accurate and factually correct
- Use clear, accessible language appropriate to the depth level
- Break down complex concepts into understandable parts
- If it's a problem-solving question, show the step-by-step process
- End with a brief summary or key takeaway if providing detailed explanation
${depth === "detailed" ? "- Structure the answer with clear sections or bullet points for better readability" : ""}

Question/Doubt:
${input}

Provide a ${depth} answer:`;
};

const stats = [
  { icon: Users, label: "400K+", sublabel: "Doubts Solved" },
  { icon: Star, label: "4.8/5", sublabel: "Student Rating" },
  { icon: Zap, label: "24/7", sublabel: "Available" },
];

const features = [
  {
    icon: Brain,
    title: "All Subjects Covered",
    description:
      "Get help with Math, Science, History, Programming, or General knowledge questions anytime.",
  },
  {
    icon: Target,
    title: "Multiple Answer Depths",
    description:
      "Choose Quick answers, Detailed explanations, or Simple (ELI5) based on your learning needs.",
  },
  {
    icon: CheckCircle,
    title: "Examples Included",
    description:
      "Understand concepts better with relevant examples, analogies, and real-world applications.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Ask Doubt",
    desc: "Type your question clearly",
    icon: HelpCircle,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Depth",
    desc: "Choose explanation detail level",
    icon: MessageCircle,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Answer",
    desc: "Receive clear, accurate explanation",
    icon: Lightbulb,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Doubt Solver?",
    answer:
      "The Doubt Solver is an AI-powered academic assistant that provides instant answers to your study questions 24/7. Whether you need help with Math, Science, History, Programming, or General knowledge, it delivers clear explanations at your preferred depth level. Perfect for homework help, exam preparation, or satisfying your curiosity.",
  },
  {
    question: "What types of doubts can I ask?",
    answer:
      "You can ask any academic question across multiple subjects: Mathematics (algebra, calculus, geometry, statistics), Science (physics, chemistry, biology), History (events, dates, causes and effects), Programming (coding problems, algorithms, debugging), or General topics (language, geography, current affairs). From simple conceptual questions to complex problem-solving.",
  },
  {
    question: "How detailed are the answers?",
    answer:
      "Choose from three depth levels: Quick Answer (brief and concise, gets straight to the point), Detailed Explanation (comprehensive with step-by-step breakdown and thorough reasoning), or Simple/ELI5 (explained in everyday language with easy-to-understand analogies). Select based on your time and learning needs.",
  },
  {
    question: "Will I get examples with explanations?",
    answer:
      "Yes! When enabled, each answer includes relevant examples, analogies, or real-world applications to help you understand the concept better. For math problems, you'll see worked examples. For science concepts, you'll get practical applications. This makes learning more concrete and memorable.",
  },
  {
    question: "Is this available 24/7?",
    answer:
      "Absolutely! Unlike human tutors, the Doubt Solver is available round-the-clock, every day of the year. Get instant answers during late-night study sessions, weekend homework, or whenever questions arise. No appointments needed, no waiting time.",
  },
  {
    question: "Is the Doubt Solver free?",
    answer:
      "Yes! The Doubt Solver is completely free to use. Ask unlimited questions across all subjects without any cost. Perfect for students at all levels, lifelong learners, or anyone seeking quick answers to academic questions.",
  },
];

const relatedTools = [
  {
    name: "Homework Solver",
    slug: "homework-solver",
    icon: Calculator,
    color: "text-orange-600",
  },
  {
    name: "Concept Explainer",
    slug: "concept-explainer",
    icon: Lightbulb,
    color: "text-green-600",
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
];

export default function DoubtSolverClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Doubt Solver"
      toolSlug="doubt-solver"
      tagline="Get instant answers to your study questions"
      description="Ask any academic question and receive clear, detailed explanations 24/7. Perfect for homework help, exam prep, and understanding difficult concepts."
      badge="Instant Help"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "It's like having a personal tutor available anytime! Saved me during late-night study sessions and helped me ace my exams.",
        author: "Jake Martinez",
        role: "Engineering Student",
        initial: "J",
      }}
      relatedTools={relatedTools}
      ctaTitle="Ask Your Doubt Now"
      ctaDescription="No question too big or small - get expert answers instantly!"
      ctaButtonText="Solve Doubt"
      ctaIcon={Brain}
    >
      <EnhancedToolLayout
        toolSlug="doubt-solver"
        toolName="Doubt Solver"
        placeholder={`❓ Type your question or doubt here...

Examples:
• Why does the sky appear blue during the day?
• How do I solve quadratic equations step by step?
• What were the main causes of the French Revolution?
• Explain photosynthesis in simple terms
• How does a for loop work in Python programming?
• What's the difference between speed and velocity?
• Why do we use semicolons in JavaScript?
• Explain Newton's third law with real-world examples

💡 Tip: Be specific with your question for more accurate and helpful answers!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="💡 Your Answer"
        generateButtonText="🎓 Solve My Doubt"
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
