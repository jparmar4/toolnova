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
  FileText,
  ClipboardList,
  List,
  Users,
  Star,
  Zap,
  Target,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const toolOptions = [
  {
    id: "length",
    label: "Summary Length",
    type: "select" as const,
    options: [
      { value: "brief", label: "⚡ Brief (1-2 paragraphs)" },
      { value: "medium", label: "📝 Medium (3-5 paragraphs)" },
      { value: "detailed", label: "📚 Detailed (Full summary)" },
    ] as const,
    defaultValue: "medium",
  },
  {
    id: "format",
    label: "Format",
    type: "select" as const,
    options: [
      { value: "paragraph", label: "📄 Paragraph Style" },
      { value: "bullets", label: "• Bullet Points" },
      { value: "outline", label: "🔢 Numbered Outline" },
    ] as const,
    defaultValue: "bullets",
  },
  {
    id: "highlightKeyTerms",
    label: "Highlight Key Terms",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const length = options?.length || "medium";
  const format = options?.format || "bullets";
  const highlightKeyTerms = options?.highlightKeyTerms !== false;

  const lengthStyles: Record<string, string> = {
    brief:
      "Create a very brief summary in 1-2 short paragraphs capturing only the most essential points.",
    medium:
      "Create a moderate summary in 3-5 paragraphs covering main points, key concepts, and important details.",
    detailed:
      "Create a comprehensive summary covering all key topics, concepts, examples, and important details from the chapter.",
  };

  const formatStyles: Record<string, string> = {
    paragraph:
      "Write in flowing paragraph format with smooth transitions between ideas.",
    bullets:
      "Use clear bullet points for easy scanning and quick reference. Group related points together.",
    outline:
      "Use a numbered outline structure with main topics and subtopics clearly organized hierarchically.",
  };

  return `Summarize the following chapter or content section.

${lengthStyles[length]}
${formatStyles[format]}
${highlightKeyTerms ? "Use **bold** to highlight key terms, important concepts, and critical vocabulary throughout the summary." : "Present information clearly without special formatting for terms."}

Your summary should include:
1. **Main Topic/Theme**: What is this chapter primarily about?
2. **Key Concepts**: The most important ideas or principles covered
3. **Important Details**: Supporting facts, examples, or data that matter
4. **Connections**: How concepts relate to each other
5. **Takeaways**: What students should remember from this chapter

Content to summarize:
${input}

Provide a clear, well-organized summary:`;
};

const stats = [
  { icon: Users, label: "600K+", sublabel: "Chapters Summarized" },
  { icon: Star, label: "4.9/5", sublabel: "Student Rating" },
  { icon: Zap, label: "Hours Saved", sublabel: "Study Efficiency" },
];

const features = [
  {
    icon: Target,
    title: "Flexible Length Options",
    description:
      "Choose from brief overview to comprehensive summary based on your study needs and time available.",
  },
  {
    icon: List,
    title: "Multiple Formats",
    description:
      "Get summaries as flowing paragraphs, scannable bullet points, or organized numbered outlines.",
  },
  {
    icon: CheckCircle,
    title: "Key Terms Highlighted",
    description:
      "Important concepts and vocabulary are emphasized to help you focus on what matters most.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Paste Content",
    desc: "Add your chapter text or notes",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Choose Format",
    desc: "Select length and style preference",
    icon: List,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Summary",
    desc: "Receive condensed, organized notes",
    icon: ClipboardList,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Chapter Summary tool?",
    answer:
      "The Chapter Summary tool is an AI-powered study assistant that transforms lengthy textbook chapters into concise, organized summaries. It extracts main concepts, key terms, and important details while maintaining the essential information you need to learn. Perfect for exam preparation, quick reviews, or creating study notes from dense reading materials.",
  },
  {
    question: "How long can my chapter content be?",
    answer:
      "You can paste entire chapters or long sections - the AI is designed to handle extensive content. Whether it's a 20-page textbook chapter, multiple pages of lecture notes, or a long article, the tool will intelligently identify and extract the most important information. There's no strict length limit, though very long texts may take slightly longer to process.",
  },
  {
    question: "What subjects work best with this tool?",
    answer:
      "All subjects work excellently! History, Biology, Chemistry, Physics, Business, Literature, Psychology, Economics, and more. The AI adapts to different subject matters and academic writing styles. Whether you're summarizing scientific concepts, historical events, literary analysis, or theoretical frameworks, you'll get accurate, subject-appropriate summaries.",
  },
  {
    question: "What's the difference between summary lengths?",
    answer:
      "Brief (1-2 paragraphs) gives you a quick overview of the main idea - great for last-minute reviews. Medium (3-5 paragraphs) covers main points and key concepts - ideal for regular study sessions. Detailed provides comprehensive coverage of all important information - perfect when you need thorough notes or missed class. Choose based on your time and depth needed.",
  },
  {
    question: "How does key term highlighting work?",
    answer:
      "When enabled, the AI identifies and bolds important vocabulary, concepts, definitions, and critical information throughout the summary. This makes it easy to spot what you need to memorize, understand, or review. Terms are highlighted based on their importance to understanding the chapter, not just frequency of appearance.",
  },
  {
    question: "Is the Chapter Summary tool free?",
    answer:
      "Yes! The Chapter Summary tool is completely free to use. Summarize unlimited chapters from any textbook or subject without any cost. Perfect for students preparing for exams, catching up on readings, or creating efficient study materials from lengthy course content.",
  },
];

const relatedTools = [
  {
    name: "Notes Generator",
    slug: "notes-generator",
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
    name: "Quiz Generator",
    slug: "quiz-generator",
    icon: Lightbulb,
    color: "text-green-600",
  },
  {
    name: "Revision Planner",
    slug: "revision-planner",
    icon: Calculator,
    color: "text-orange-600",
  },
];

export default function ChapterSummaryClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Chapter Summary"
      toolSlug="chapter-summary"
      tagline="Summarize any chapter in seconds"
      description="Transform lengthy chapters into concise, easy-to-review summaries with key points highlighted. Perfect for exam prep and quick reviews."
      badge="Quick Review Tool"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "I summarized all 15 chapters of my textbook before finals. Saved me dozens of hours and helped me ace the exam! This tool is a lifesaver.",
        author: "David Chen",
        role: "MBA Student",
        initial: "D",
      }}
      relatedTools={relatedTools}
      ctaTitle="Summarize Your Content"
      ctaDescription="Save hours of reading time with instant, accurate AI summaries!"
      ctaButtonText="Create Summary"
      ctaIcon={BookOpen}
    >
      <EnhancedToolLayout
        toolSlug="chapter-summary"
        toolName="Chapter Summary"
        placeholder={`📚 Paste your chapter content here...

You can paste:
• Textbook chapters (any subject)
• Lecture notes and transcripts
• Academic articles and papers
• Study materials from PDFs
• Online course content
• Research papers and reports

Examples of what to paste:
• "Chapter 5: The French Revolution began in 1789... [entire chapter text]"
• "Photosynthesis is the process by which plants... [biology chapter content]"
• "Supply and demand are fundamental economic principles... [economics chapter]"
• "The Civil War (1861-1865) was a pivotal moment... [history chapter content]"

💡 Tip: The more complete content you provide, the better and more comprehensive the summary will be!`}
        inputRows={12}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📋 Your Chapter Summary"
        generateButtonText="📝 Summarize Chapter"
        showCopyButton={true}
        showDownloadButton={true}
        showWordCount={true}
        showFeedbackButtons={true}
      />
      <div className="px-6 pb-6">
        <FAQSection faqs={faqs} />
      </div>
    </PremiumToolWrapper>
  );
}
