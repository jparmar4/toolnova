"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  BookOpen,
  Brain,
  Lightbulb,
  FileText,
  Calculator,
  HelpCircle,
  ClipboardList,
  Users,
  Star,
  Zap,
  CheckCircle,
  Target,
} from "lucide-react";

const toolOptions = [
  {
    id: "questionCount",
    label: "Number of Questions",
    type: "select" as const,
    options: [
      { value: "5", label: "5 Questions" },
      { value: "10", label: "10 Questions" },
      { value: "15", label: "15 Questions" },
      { value: "20", label: "20 Questions" },
    ] as const,
    defaultValue: "10",
  },
  {
    id: "questionTypes",
    label: "Question Types",
    type: "select" as const,
    options: [
      { value: "mixed", label: "🎯 Mixed Types" },
      { value: "short", label: "📝 Short Answer" },
      { value: "true-false", label: "✅ True/False" },
      { value: "fill-blank", label: "📋 Fill in the Blanks" },
    ] as const,
    defaultValue: "mixed",
  },
  {
    id: "includeAnswers",
    label: "Include Answer Key",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const questionCount = options?.questionCount || "10";
  const questionTypes = options?.questionTypes || "mixed";
  const includeAnswers = options?.includeAnswers !== false;

  const typeDescriptions: Record<string, string> = {
    mixed:
      "Create a mix of short answer, true/false, and fill-in-the-blank questions.",
    short: "Create short answer questions requiring brief explanations.",
    "true-false": "Create true/false questions with clear statements.",
    "fill-blank": "Create fill-in-the-blank questions with key terms missing.",
  };

  return `Create a ${questionCount}-question quiz based on the following topic/content.
${typeDescriptions[questionTypes]}
${includeAnswers ? "Include a complete answer key at the end with detailed explanations." : ""}

Make questions clear, challenging, and educational.

Topic/Content:
${input}

Quiz:`;
};

const stats = [
  { icon: Users, label: "300K+", sublabel: "Quiz Takers" },
  { icon: Star, label: "4.8/5", sublabel: "Student Rating" },
  { icon: Zap, label: "Instant", sublabel: "Quiz Creation" },
];

const features = [
  {
    icon: Target,
    title: "Custom Question Types",
    description:
      "Choose from short answer, true/false, fill-in-the-blanks, or mixed formats to match your study needs.",
  },
  {
    icon: CheckCircle,
    title: "Answer Keys Included",
    description:
      "Get detailed answer keys with explanations to help you understand why each answer is correct.",
  },
  {
    icon: Brain,
    title: "Smart Question Generation",
    description:
      "AI generates relevant, well-structured questions that test key concepts and understanding.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Topic",
    desc: "Add your study content or topic",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Pick Format",
    desc: "Choose question types and count",
    icon: HelpCircle,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Take Quiz",
    desc: "Test your knowledge instantly",
    icon: Lightbulb,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Quiz Generator?",
    answer:
      "The Quiz Generator is an AI-powered tool that creates custom practice quizzes based on any topic or content you provide. It generates various question types including short answer, true/false, and fill-in-the-blanks to help you test your knowledge and prepare for exams.",
  },
  {
    question: "What question types are available?",
    answer:
      "We offer four question formats: Mixed Types (combination of different formats), Short Answer (requiring brief explanations), True/False (statement-based questions), and Fill in the Blanks (testing key terms and concepts). Choose based on your learning preference and exam format.",
  },
  {
    question: "Can I get answer keys with my quiz?",
    answer:
      "Yes! Toggle 'Include Answer Key' to receive detailed answers with explanations for each question. This helps you understand not just what the correct answer is, but why it's correct, making it a powerful learning tool.",
  },
  {
    question: "How many questions can I generate?",
    answer:
      "You can generate quizzes with 5, 10, 15, or 20 questions depending on how much time you have to study. Shorter quizzes are great for quick reviews, while longer ones are perfect for comprehensive test preparation.",
  },
  {
    question: "Can I use this for test prep?",
    answer:
      "Absolutely! The Quiz Generator is perfect for exam preparation. Create multiple quizzes on the same topic to reinforce learning, identify weak areas, and build confidence before your actual test. Many students use it for daily practice leading up to exams.",
  },
  {
    question: "Is the Quiz Generator free?",
    answer:
      "Yes! The Quiz Generator is completely free to use. Create unlimited quizzes for any subject or topic without any cost. Perfect for students, teachers creating practice materials, or anyone who wants to test their knowledge.",
  },
];

const relatedTools = [
  {
    name: "MCQ Generator",
    slug: "mcq-generator",
    icon: ClipboardList,
    color: "text-blue-600",
  },
  {
    name: "Flashcard Maker",
    slug: "flashcard-maker",
    icon: Brain,
    color: "text-purple-600",
  },
  {
    name: "Notes Generator",
    slug: "notes-generator",
    icon: BookOpen,
    color: "text-green-600",
  },
  {
    name: "Homework Solver",
    slug: "homework-solver",
    icon: Calculator,
    color: "text-orange-600",
  },
];

export default function QuizGeneratorClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Quiz Generator"
      toolSlug="quiz-generator"
      tagline="Test your knowledge with custom quizzes"
      description="Generate practice quizzes with various question types to reinforce your learning. Perfect for exam prep, self-testing, and knowledge retention."
      badge="Self-Test Tool"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "I quiz myself every day before exams. This tool makes it so easy to create fresh questions! My grades improved significantly.",
        author: "Emma Wilson",
        role: "High School Senior",
        initial: "E",
      }}
      relatedTools={relatedTools}
      ctaTitle="Generate Your Quiz"
      ctaDescription="Test yourself and track your progress with custom quizzes!"
      ctaButtonText="Start Creating"
      ctaIcon={HelpCircle}
    >
      <EnhancedToolLayout
        toolSlug="quiz-generator"
        toolName="Quiz Generator"
        placeholder={`📖 Enter your topic or paste study content...

Examples:
• The American Civil War and its causes
• Newton's Laws of Motion explained
• Cell structure and organelle functions
• World War II major events timeline
• Photosynthesis process in plants
• Shakespeare's Romeo and Juliet themes

💡 Tip: Provide detailed content for more specific and challenging questions!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📝 Your Quiz"
        generateButtonText="🎯 Generate Quiz"
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
