"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import {
  FileText,
  Zap,
  Target,
  Sparkles,
  Users,
  Star,
  Clock,
  BookOpen,
  Lightbulb,
  List,
  AlignLeft,
} from "lucide-react";

const systemPrompt = `You are an expert text summarization assistant.

OUTPUT RULES:
- Create clear, concise summaries that capture the main points
- Preserve the original meaning and key information
- Use proper formatting and structure
- Make summaries easy to read and understand
- Focus on the most important information

QUALITY STANDARDS:
- Accurate representation of original content
- Logical flow and organization
- Appropriate length based on requirements
- Clear and professional language`;

const toolOptions = [
  {
    id: "length",
    label: "Summary Length",
    type: "select" as const,
    options: [
      { value: "brief", label: "⚡ Brief (1-2 sentences)" },
      { value: "short", label: "📝 Short (1 paragraph)" },
      { value: "medium", label: "📄 Medium (2-3 paragraphs)" },
      { value: "detailed", label: "📚 Detailed (comprehensive)" },
    ],
    defaultValue: "short",
  },
  {
    id: "style",
    label: "Output Style",
    type: "select" as const,
    options: [
      { value: "paragraph", label: "📄 Paragraph" },
      { value: "bullets", label: "• Bullet Points" },
      { value: "numbered", label: "🔢 Numbered List" },
      { value: "keypoints", label: "🎯 Key Points Only" },
    ],
    defaultValue: "paragraph",
  },
  {
    id: "tone",
    label: "Tone",
    type: "select" as const,
    options: [
      { value: "neutral", label: "⚖️ Neutral" },
      { value: "academic", label: "🎓 Academic" },
      { value: "simple", label: "😊 Simple/Easy" },
      { value: "professional", label: "💼 Professional" },
    ],
    defaultValue: "neutral",
  },
  {
    id: "includeKeyTerms",
    label: "Highlight Key Terms",
    type: "toggle" as const,
    defaultValue: false,
  },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const length = options?.length || "short";
  const style = options?.style || "paragraph";
  const tone = options?.tone || "neutral";
  const includeKeyTerms = options?.includeKeyTerms ?? false;

  const lengthInstructions: Record<string, string> = {
    brief:
      "Create a very brief summary in just 1-2 sentences. Capture only the absolute core message.",
    short:
      "Create a concise summary in one clear paragraph. Include the main points and key takeaways.",
    medium:
      "Create a comprehensive summary in 2-3 paragraphs. Cover all major points with supporting details.",
    detailed:
      "Create a detailed summary that thoroughly covers all important aspects. Multiple paragraphs with full explanations.",
  };

  const styleInstructions: Record<string, string> = {
    paragraph:
      "Write in flowing paragraphs with smooth transitions between ideas.",
    bullets:
      "Format as bullet points (•) with each major point on a separate line.",
    numbered:
      "Format as a numbered list (1, 2, 3) with each key point clearly numbered.",
    keypoints:
      "Present only the essential key points in the most concise format possible.",
  };

  const toneInstructions: Record<string, string> = {
    neutral: "Use neutral, balanced language suitable for general audiences.",
    academic:
      "Use formal, academic language appropriate for scholarly or educational contexts.",
    simple:
      "Use simple, easy-to-understand language. Explain concepts clearly as if for a general audience.",
    professional:
      "Use professional business language appropriate for workplace or formal settings.",
  };

  let prompt = `Summarize the following text:

${input}

Instructions:
- Length: ${lengthInstructions[length]}
- Style: ${styleInstructions[style]}
- Tone: ${toneInstructions[tone]}

${includeKeyTerms ? "After the summary, add a 'KEY TERMS:' section listing important terms or concepts mentioned." : ""}

Important:
- Capture the main ideas accurately
- Preserve the original meaning
- Make it clear and easy to understand
- Focus on the most important information

Provide ONLY the summary (and key terms if requested) without any additional labels or explanations.`;

  return prompt;
};

const stats = [
  { value: "300K+", label: "Texts Summarized", icon: FileText },
  { value: "4.8/5", label: "User Rating", icon: Star },
  { value: "<10 sec", label: "Avg Time", icon: Clock },
];

const features = [
  {
    icon: Zap,
    title: "Multiple Lengths",
    description:
      "Choose from brief TL;DR to detailed summaries - get exactly what you need",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Flexible Formats",
    description:
      "Output as paragraphs, bullet points, numbered lists, or key points only",
    gradient: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
  },
  {
    icon: Sparkles,
    title: "Smart Extraction",
    description:
      "AI identifies and captures the most important information automatically",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Paste Text",
    desc: "Add the article, document, or content you want summarized",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Choose Options",
    desc: "Select length, format, and tone preferences",
    icon: Target,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Summary",
    desc: "Receive a clear, concise summary instantly",
    icon: Sparkles,
    color: "from-green-500 to-emerald-600",
  },
];

const relatedTools = [
  {
    name: "Text Simplifier",
    slug: "text-simplifier",
    icon: Lightbulb,
    color: "text-blue-600",
  },
  {
    name: "Paraphraser",
    slug: "paraphraser",
    icon: AlignLeft,
    color: "text-purple-600",
  },
  {
    name: "Notes Generator",
    slug: "notes-generator",
    icon: BookOpen,
    color: "text-green-600",
  },
  {
    name: "Chapter Summary",
    slug: "chapter-summary",
    icon: FileText,
    color: "text-orange-600",
  },
];

const faqs = [
  {
    question: "How long can the text be?",
    answer:
      "You can summarize texts of any length - from a few paragraphs to entire articles or research papers. The AI will extract the key information regardless of length.",
    category: "Usage",
  },
  {
    question: "What's the difference between summary lengths?",
    answer:
      "Brief gives you a 1-2 sentence TL;DR. Short provides a paragraph covering main points. Medium offers 2-3 paragraphs with more detail. Detailed gives comprehensive coverage of all major aspects.",
    category: "Features",
  },
  {
    question: "Will the summary be accurate?",
    answer:
      "Yes! Our AI is trained to capture the main ideas and preserve the original meaning. However, we recommend reviewing important summaries to ensure they meet your needs.",
    category: "Accuracy",
  },
  {
    question: "Can I summarize academic papers?",
    answer:
      "Absolutely! Use the 'Academic' tone option for scholarly content. The AI will maintain appropriate terminology and capture research findings accurately.",
    category: "Usage",
  },
  {
    question: "What's the bullet points vs key points difference?",
    answer:
      "Bullet points provide complete ideas in list format. Key points only extracts the most essential information in the most concise way possible - great for quick overviews.",
    category: "Features",
  },
  {
    question: "Can I use this for studying?",
    answer:
      "Yes! It's perfect for quickly understanding long readings, textbook chapters, or articles. Enable 'Highlight Key Terms' to get important vocabulary extracted too.",
    category: "Academic",
  },
];

export default function TextSummarizerClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Text Summarizer"
      toolSlug="text-summarizer"
      tagline="Summarize any text in seconds with AI"
      description="Condense long articles, documents, and content into clear summaries. Choose from brief overviews to detailed summaries in multiple formats."
      badge="AI-Powered"
      category="Utility Tools"
      categorySlug="utility-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "This is a lifesaver for research! I can quickly understand long papers and articles without reading everything. The bullet point format is perfect.",
        author: "Rachel Green",
        role: "PhD Student",
        initial: "R",
      }}
      relatedTools={relatedTools}
      ctaTitle="Ready to Save Time Reading?"
      ctaDescription="Get instant summaries of any text with AI"
      ctaIcon={Zap}
    >
      <EnhancedToolLayout
        toolSlug="text-summarizer"
        toolName="AI Text Summarizer"
        placeholder={`📝 Paste or type the text you want to summarize...

Examples:
• Long articles or blog posts
• Research papers or academic texts
• Book chapters or study materials
• News articles or reports
• Business documents or emails
• Meeting notes or transcripts

The tool works with texts of any length - just paste and summarize!`}
        promptTemplate={generatePrompt}
        inputRows={12}
        toolOptions={toolOptions}
        resultLabel="📄 Summary"
        generateButtonText="✨ Summarize Text"
        inputLabel="📝 Text to Summarize"
        showAdvancedOptions={true}
        maxHistoryItems={10}
      />
      <div className="px-6 pb-6">
        <FAQSection faqs={faqs} />
      </div>
    </PremiumToolWrapper>
  );
}
