"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  Calculator,
  Sigma,
  FileText,
  ClipboardList,
  Users,
  Star,
  Zap,
  BookOpen,
  Brain,
  Lightbulb,
  Beaker,
  TrendingUp,
} from "lucide-react";

const toolOptions = [
  {
    id: "subject",
    label: "Subject",
    type: "select" as const,
    options: [
      { value: "math", label: "🔢 Mathematics" },
      { value: "physics", label: "⚛️ Physics" },
      { value: "chemistry", label: "🧪 Chemistry" },
      { value: "economics", label: "📊 Economics" },
    ] as const,
    defaultValue: "math",
  },
  {
    id: "format",
    label: "Output Format",
    type: "select" as const,
    options: [
      { value: "list", label: "📋 List Format" },
      { value: "table", label: "📊 Table Format" },
      { value: "explained", label: "📝 With Explanations" },
    ] as const,
    defaultValue: "explained",
  },
  {
    id: "includeExamples",
    label: "Include Examples",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const systemPrompt = `You are a formula-sheet generator for academic subjects.

OUTPUT RULES:
- When user requests "table" format, you MUST output a Markdown pipe table using | characters
- Table columns must be: Formula Name | Equation | Notes
- Use proper mathematical notation (subscripts, superscripts, Greek letters)
- Do NOT use the FINAL ANSWER/WORKING/QUICK CHECK format
- Output can be longer than 10 lines when needed for comprehensive formula sheets
- Markdown formatting (tables, bold, italics) is allowed and encouraged for clarity

CONTENT RULES:
- Include ALL relevant formulas for the topic
- Show actual mathematical equations, not just descriptions
- Keep explanations concise but complete
- Use standard notation for the subject area`;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const subject = options?.subject || "math";
  const format = options?.format || "explained";
  const includeExamples = options?.includeExamples !== false;

  const formatStyles: Record<string, string> = {
    list: "Present formulas in a clear bullet list format with proper mathematical notation.",
    table:
      "Present formulas as a Markdown pipe table with columns: Formula Name | Equation | Notes. Use | characters to separate columns. Include proper table header with separators (e.g., | --- | --- | --- |).",
    explained:
      "Present each formula with its equation followed by a clear explanation of when and how to use it.",
  };

  return `Generate a complete formula sheet for ${subject} on the following topic.
${formatStyles[format]}
${includeExamples ? "Include a brief example for each formula showing how to apply it." : "Focus on the formulas themselves without examples."}
${format === "table" ? "\nIMPORTANT: Output must be a valid Markdown table using pipe | characters." : ""}

Topic:
${input}`;
};

const stats = [
  { icon: Users, label: "200K+", sublabel: "Students Helped" },
  { icon: Star, label: "4.9/5", sublabel: "Student Rating" },
  { icon: Zap, label: "Instant", sublabel: "Formula Sheets" },
];

const features = [
  {
    icon: Sigma,
    title: "Multi-Subject Support",
    description:
      "Get formulas for Math, Physics, Chemistry, Economics, and more with accurate notation.",
  },
  {
    icon: ClipboardList,
    title: "Multiple Formats",
    description:
      "Choose between list, table, or explained formats to match your study style.",
  },
  {
    icon: FileText,
    title: "Examples Included",
    description:
      "Understand how to apply each formula with practical examples and use cases.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Topic",
    desc: "Type your formula topic or chapter",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Choose Format",
    desc: "Select list, table, or explained",
    icon: ClipboardList,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Formulas",
    desc: "Receive organized formula sheet",
    icon: Sigma,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Formula Generator?",
    answer:
      "The Formula Generator is an AI-powered tool that creates comprehensive formula sheets for various subjects including Mathematics, Physics, Chemistry, and Economics. It organizes all relevant formulas for any topic with proper mathematical notation and optional explanations.",
  },
  {
    question: "What subjects are covered?",
    answer:
      "We currently support Mathematics (algebra, calculus, geometry, trigonometry), Physics (mechanics, thermodynamics, electromagnetism), Chemistry (equations, constants, conversions), and Economics (financial formulas, ratios). More subjects are being added regularly.",
  },
  {
    question: "Can I get explanations with formulas?",
    answer:
      "Yes! Choose the 'With Explanations' format to get each formula with a clear explanation of when and how to use it. This helps you understand the context and application of each formula, not just memorize it.",
  },
  {
    question: "Are examples included?",
    answer:
      "You can enable the 'Include Examples' toggle to get practical examples showing how to apply each formula. This is especially helpful for understanding problem-solving techniques and exam preparation.",
  },
  {
    question: "What output formats are available?",
    answer:
      "Choose from three formats: List Format (simple bullet list), Table Format (organized Markdown table), or Explained Format (formulas with detailed explanations). Pick the format that works best for your study notes or revision materials.",
  },
  {
    question: "Is the Formula Generator free to use?",
    answer:
      "Yes! The Formula Generator is completely free. You can generate unlimited formula sheets for any subject or topic without any cost. Perfect for students, teachers, and anyone needing quick formula references.",
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
    name: "Doubt Solver",
    slug: "doubt-solver",
    icon: Brain,
    color: "text-purple-600",
  },
  {
    name: "Notes Generator",
    slug: "notes-generator",
    icon: BookOpen,
    color: "text-blue-600",
  },
];

export default function FormulaGeneratorClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Formula Generator"
      toolSlug="formula-generator"
      tagline="Get all the formulas you need for any topic"
      description="Generate comprehensive formula sheets for Math, Physics, Chemistry, and more with explanations and examples. Perfect for exam preparation and quick reference."
      badge="Formula Reference"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "I created formula sheets for all my STEM subjects in minutes! Perfect for exam revision and saved me hours of manual work.",
        author: "Aisha Patel",
        role: "Engineering Student",
        initial: "A",
      }}
      relatedTools={relatedTools}
      ctaTitle="Generate Your Formula Sheet"
      ctaDescription="Never forget a formula again. Get organized formula sheets instantly!"
      ctaButtonText="Start Generating"
      ctaIcon={Sigma}
    >
      <EnhancedToolLayout
        toolSlug="formula-generator"
        toolName="Formula Generator"
        placeholder={`📐 Enter your topic for formula generation...

Examples:
• Trigonometry identities
• Kinematics and motion equations
• Chemical equilibrium formulas
• Financial ratios and calculations
• Integration formulas
• Thermodynamics laws

💡 Tip: Be specific about the topic or chapter for more relevant formulas!`}
        inputRows={8}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        systemPrompt={systemPrompt}
        resultLabel="📊 Your Formula Sheet"
        generateButtonText="📐 Generate Formulas"
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
