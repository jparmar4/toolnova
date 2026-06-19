"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { toolFAQs } from "@/lib/content-database";
import {
  FileText,
  Hash,
  Clock,
  BarChart2,
  Type,
  Target,
  Users,
  Star,
} from "lucide-react";

// Non-AI Handler Function
function wordCounterHandler(input: string): string {
  const words = input
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const characters = input.length;
  const charactersNoSpaces = input.replace(/\s+/g, "").length;
  const sentences = input
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;
  const paragraphs = input
    .split(/\n\n+/)
    .filter((p) => p.trim().length > 0).length;
  const readingTime = Math.ceil(words.length / 200);
  const speakingTime = Math.ceil(words.length / 130);

  return `📊 **Complete Text Analysis**

✅ **Words:** ${words.length}
✅ **Characters:** ${characters}
✅ **Characters (no spaces):** ${charactersNoSpaces}
✅ **Sentences:** ${sentences}
✅ **Paragraphs:** ${paragraphs}

⏱️ **Reading Time:** ~${readingTime} ${readingTime === 1 ? "minute" : "minutes"}
🗣️ **Speaking Time:** ~${speakingTime} ${speakingTime === 1 ? "minute" : "minutes"}

${words.length > 0 ? `📈 **Average word length:** ${(charactersNoSpaces / words.length).toFixed(1)} characters` : ""}

---

### 📝 Writing Quality Metrics

${
  words.length > 0
    ? `
- **Avg. Sentence Length:** ${(words.length / sentences).toFixed(1)} words
- **Avg. Paragraph Length:** ${(words.length / paragraphs).toFixed(1)} words
- **Character Density:** ${((charactersNoSpaces / characters) * 100).toFixed(1)}% (excluding spaces)
`
    : "_Enter text to see metrics_"
}`;
}


const features = [
  {
    icon: BarChart2,
    title: "Complete Statistics",
    description:
      "Get word count, character count, sentences, paragraphs, and reading time in one place",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Reading & Speaking Time",
    description:
      "Estimate how long it takes to read or speak your content aloud",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
  },
  {
    icon: Hash,
    title: "Always Free",
    description:
      "No signup required, no limits, completely free to use forever",
    gradient: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Paste Text",
    desc: "Copy and paste your content into the text area",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Instant Analysis",
    desc: "Get comprehensive statistics immediately",
    icon: BarChart2,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Optimize Writing",
    desc: "Use the data to improve your content",
    icon: Target,
    color: "from-green-500 to-emerald-600",
  },
];

const relatedTools = [
  {
    name: "Character Counter",
    slug: "character-counter",
    icon: Hash,
    color: "text-blue-600",
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    icon: Type,
    color: "text-purple-600",
  },
  {
    name: "Text Summarizer",
    slug: "text-summarizer",
    icon: FileText,
    color: "text-green-600",
  },
  {
    name: "Paraphraser",
    slug: "paraphraser",
    icon: Target,
    color: "text-orange-600",
  },
];

export default function WordCounterClient() {
  return (
    <PremiumToolWrapper
      toolName="Word Counter"
      toolSlug="word-counter"
      tagline="Count words, characters & reading time instantly"
      description="Professional text analysis tool that counts words, characters, sentences, paragraphs, and estimates reading time. Perfect for essays, blogs, social media, and professional writing."
      badge="Utility Tool"
      category="Utility Tools"
      categorySlug="utility-tools"
      features={features}
      howItWorks={howItWorks}
      relatedTools={relatedTools}
      ctaTitle="Count Your Words Now"
      ctaDescription="Perfect for essays, blogs, articles, and social media posts"
      ctaIcon={BarChart2}
    >
      <EnhancedToolLayout
        toolSlug="word-counter"
        toolName="Word Counter"
        placeholder={`📝 Paste or type your text here...

Instantly get:
• Word count
• Character count (with & without spaces)
• Sentence & paragraph count
• Reading time estimate
• Speaking time estimate
• Writing quality metrics

Try pasting an article, essay, or blog post!`}
        promptTemplate={(input) => input}
        inputRows={12}
        isNonAITool={true}
        nonAIHandler={wordCounterHandler}
        resultLabel="📊 Analysis Results"
        generateButtonText="📊 Analyze Text"
        inputLabel="📝 Your Text"
        showAdvancedOptions={false}
        maxHistoryItems={5}
      />
      <div className="px-6 pb-6">
        <FAQSection
          faqs={
            toolFAQs["word-counter"] || [
              {
                question: "Is the word counter accurate?",
                answer:
                  "Yes! Our tool uses industry-standard algorithms to count words, characters, and sentences accurately. It handles different text formats and punctuation correctly.",
                category: "Usage",
              },
              {
                question: "Does it work offline?",
                answer:
                  "Once the page is loaded, the counting happens entirely in your browser, so you don't need an internet connection to use it.",
                category: "Technical",
              },
              {
                question: "What's the reading time based on?",
                answer:
                  "Reading time is calculated at 200 words per minute, which is the average reading speed for adults. Speaking time is based on 130 words per minute.",
                category: "Features",
              },
              {
                question: "Can I use this for social media posts?",
                answer:
                  "Absolutely! It's perfect for checking if your posts meet platform-specific character limits (Twitter, LinkedIn, Instagram, etc.).",
                category: "Usage",
              },
              {
                question: "Is my text saved or stored anywhere?",
                answer:
                  "No, your text is processed entirely in your browser. We don't send, store, or save any of your content on our servers.",
                category: "Privacy",
              },
            ]
          }
        />
      </div>
    </PremiumToolWrapper>
  );
}
