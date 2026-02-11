"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import {
  CheckCircle2,
  Pencil,
  Sparkles,
  Target,
  Zap,
  BookOpen,
  FileText,
  Users,
  Star,
  Clock,
  Shield,
  Lightbulb,
} from "lucide-react";

const systemPrompt = `You are an expert grammar and writing improvement assistant.

OUTPUT RULES:
- Fix ALL grammar, spelling, punctuation, and style errors
- Maintain the original meaning and tone
- Provide clear, corrected text without explanations unless requested
- Use proper formatting and structure
- Ensure clarity and readability

QUALITY STANDARDS:
- Professional-level corrections
- Natural, fluent language
- Consistent style throughout
- Proper sentence structure
- Correct punctuation placement`;

const toolOptions = [
  {
    id: "level",
    label: "Correction Level",
    type: "select" as const,
    options: [
      { value: "basic", label: "📝 Basic (Grammar & Spelling)" },
      { value: "standard", label: "✏️ Standard (+ Punctuation)" },
      { value: "advanced", label: "⚡ Advanced (+ Style & Clarity)" },
      { value: "professional", label: "👔 Professional (Complete Polish)" },
    ],
    defaultValue: "standard",
  },
  {
    id: "tone",
    label: "Writing Tone",
    type: "select" as const,
    options: [
      { value: "maintain", label: "🔄 Maintain Original" },
      { value: "formal", label: "👔 More Formal" },
      { value: "casual", label: "😊 More Casual" },
      { value: "professional", label: "💼 Professional" },
      { value: "friendly", label: "🤝 Friendly" },
    ],
    defaultValue: "maintain",
  },
  {
    id: "showExplanations",
    label: "Show Explanations",
    type: "toggle" as const,
    defaultValue: false,
  },
  {
    id: "improveClarity",
    label: "Improve Clarity & Flow",
    type: "toggle" as const,
    defaultValue: true,
  },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const level = options?.level || "standard";
  const tone = options?.tone || "maintain";
  const showExplanations = options?.showExplanations ?? false;
  const improveClarity = options?.improveClarity ?? true;

  const levelInstructions: Record<string, string> = {
    basic:
      "Fix grammar mistakes and spelling errors only. Keep everything else as is.",
    standard:
      "Fix grammar, spelling, and punctuation errors. Maintain the original style.",
    advanced:
      "Fix grammar, spelling, punctuation, and improve style and clarity. Make sentences more natural.",
    professional:
      "Provide comprehensive corrections including grammar, spelling, punctuation, style, clarity, and professional polish. Ensure perfect readability.",
  };

  const toneInstructions: Record<string, string> = {
    maintain: "Keep the original tone and style of writing.",
    formal:
      "Adjust the tone to be more formal and professional while maintaining meaning.",
    casual: "Make the tone more casual and conversational while staying clear.",
    professional:
      "Use professional business language appropriate for workplace communication.",
    friendly:
      "Make the tone warm, friendly, and approachable while remaining clear.",
  };

  let prompt = `Fix and improve this text:

Original text:
${input}

Instructions:
- Correction Level: ${levelInstructions[level]}
- Tone: ${toneInstructions[tone]}
${improveClarity ? "- Improve clarity and sentence flow" : ""}
${showExplanations ? "\n- After the corrected text, add a brief 'IMPROVEMENTS MADE:' section explaining major changes" : ""}

Provide the corrected text in a clean, professional format.`;

  return prompt;
};

const stats = [
  { value: "250K+", label: "Texts Fixed", icon: CheckCircle2 },
  { value: "4.9/5", label: "User Rating", icon: Star },
  { value: "<10 sec", label: "Avg Time", icon: Clock },
];

const features = [
  {
    icon: Zap,
    title: "Instant Corrections",
    description:
      "Get professional-level grammar, spelling, and punctuation fixes in seconds",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Multiple Levels",
    description:
      "Choose from basic grammar fixes to complete professional polish based on your needs",
    gradient: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
  },
  {
    icon: Sparkles,
    title: "Style Enhancement",
    description:
      "Improve clarity, flow, and readability while maintaining your original meaning",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Paste Your Text",
    desc: "Add the text you want to fix",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Preferences",
    desc: "Choose correction level and tone",
    icon: Target,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Perfect Text",
    desc: "Receive polished, error-free writing",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-600",
  },
];

const relatedTools = [
  {
    name: "Paraphraser",
    slug: "paraphraser",
    icon: Pencil,
    color: "text-blue-600",
  },
  {
    name: "Text Simplifier",
    slug: "text-simplifier",
    icon: Lightbulb,
    color: "text-purple-600",
  },
  {
    name: "Essay Writer",
    slug: "essay-writer",
    icon: BookOpen,
    color: "text-green-600",
  },
  {
    name: "Email Writer",
    slug: "email-writer",
    icon: Sparkles,
    color: "text-orange-600",
  },
];

const faqs = [
  {
    question: "What types of errors does it fix?",
    answer:
      "Our grammar checker fixes spelling mistakes, grammar errors, punctuation issues, verb tense problems, subject-verb agreement, word choice errors, and style inconsistencies. Advanced modes also improve clarity and flow.",
    category: "Features",
  },
  {
    question: "Can I see what was changed?",
    answer:
      "Yes! Enable 'Show Explanations' in the settings to see a summary of major improvements made to your text. This helps you learn from corrections.",
    category: "Usage",
  },
  {
    question: "Will it change the meaning of my text?",
    answer:
      "No, the tool is designed to preserve your original meaning while fixing errors and improving clarity. It corrects mistakes without altering your intended message.",
    category: "Accuracy",
  },
  {
    question: "What's the difference between correction levels?",
    answer:
      "Basic fixes only grammar and spelling. Standard adds punctuation corrections. Advanced improves style and clarity. Professional provides complete polish for business use.",
    category: "Features",
  },
  {
    question: "Can I use this for academic writing?",
    answer:
      "Absolutely! It's perfect for essays, research papers, and assignments. Use the 'Professional' level for academic work and enable explanations to learn from corrections.",
    category: "Usage",
  },
  {
    question: "Does it work for different English variants?",
    answer:
      "Yes, the tool handles American, British, and other English variants. It maintains consistency throughout your text.",
    category: "Features",
  },
];

export default function GrammarFixClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Grammar Fix"
      toolSlug="grammar-fix"
      tagline="Perfect your writing with AI-powered grammar corrections"
      description="Fix grammar, spelling, punctuation, and style errors instantly. Get professional-quality writing with advanced corrections and clarity improvements."
      badge="AI-Powered"
      category="Writing Tools"
      categorySlug="writing-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "This grammar checker is amazing! It catches errors I always miss and explains why. My writing has improved so much!",
        author: "Jessica Martinez",
        role: "Content Writer",
        initial: "J",
      }}
      relatedTools={relatedTools}
      ctaTitle="Ready to Perfect Your Writing?"
      ctaDescription="Get instant grammar corrections and professional polish"
      ctaIcon={CheckCircle2}
    >
      <EnhancedToolLayout
        toolSlug="grammar-fix"
        toolName="AI Grammar Fix"
        placeholder={`📝 Paste or type your text here...

Examples:
• "Me and him went to the store yesterday"
• "The company are planning they're expansion"
• "I would of finished the project but its taking longer then expected"
• "Between you and I, this tool is really helpfull for fixing grammer"

Try pasting text with errors to see instant corrections!`}
        promptTemplate={generatePrompt}
        inputRows={10}
        toolOptions={toolOptions}
        resultLabel="✅ Corrected Text"
        generateButtonText="✨ Fix Grammar"
        inputLabel="📝 Your Text"
        showAdvancedOptions={true}
        maxHistoryItems={10}
      />
      <div className="px-6 pb-6">
        <FAQSection faqs={faqs} />
      </div>
    </PremiumToolWrapper>
  );
}
