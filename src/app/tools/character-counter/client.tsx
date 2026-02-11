"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import {
  Hash,
  Type,
  Zap,
  Users,
  Star,
  Clock,
  Twitter,
  MessageSquare,
  FileText,
  BarChart2,
} from "lucide-react";

// Non-AI Handler Function
function characterCounterHandler(input: string): string {
  const totalChars = input.length;
  const charsNoSpaces = input.replace(/\s+/g, "").length;
  const spaces = totalChars - charsNoSpaces;
  const words = input
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const lines = input.split("\n").length;
  const sentences = input
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;
  const paragraphs = input
    .split(/\n\n+/)
    .filter((p) => p.trim().length > 0).length;

  const twitterRemaining = 280 - totalChars;
  const facebookLimit = 63206;
  const smsCount = Math.ceil(totalChars / 160);
  const instagramCaptionLimit = 2200;

  return `📊 **Complete Character Analysis**

✅ **Character Counts:**
- Total Characters: ${totalChars}
- Characters (no spaces): ${charsNoSpaces}
- Spaces: ${spaces}
- Words: ${words}
- Lines: ${lines}
- Sentences: ${sentences}
- Paragraphs: ${paragraphs}

📱 **Social Media Limits:**
${
  twitterRemaining >= 0
    ? `🐦 Twitter: ${twitterRemaining} characters remaining (${totalChars}/280)`
    : `🐦 Twitter: ${Math.abs(twitterRemaining)} characters over limit (${totalChars}/280)`
}
${
  totalChars <= instagramCaptionLimit
    ? `📸 Instagram: ${instagramCaptionLimit - totalChars} characters remaining (${totalChars}/2200)`
    : `📸 Instagram: ${totalChars - instagramCaptionLimit} characters over limit (${totalChars}/2200)`
}
${
  totalChars <= facebookLimit
    ? `📘 Facebook: Within limit (${totalChars}/63,206)`
    : `📘 Facebook: Over limit (${totalChars}/63,206)`
}
💬 SMS: ${smsCount} message${smsCount > 1 ? "s" : ""} (160 chars/message)

${words > 0 ? `📈 **Statistics:**\n- Average word length: ${(charsNoSpaces / words).toFixed(1)} characters\n- Average sentence length: ${(words / Math.max(sentences, 1)).toFixed(1)} words` : ""}`;
}

const stats = [
  { value: "Instant", label: "Analysis", icon: Clock },
  { value: "200K+", label: "Daily Users", icon: Users },
  { value: "4.9/5", label: "User Rating", icon: Star },
];

const features = [
  {
    icon: Hash,
    title: "Comprehensive Counting",
    description:
      "Count total characters, characters without spaces, words, lines, sentences, and paragraphs all at once",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: MessageSquare,
    title: "Social Media Limits",
    description:
      "Instantly check character limits for Twitter, Instagram, Facebook, and SMS messages",
    gradient: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "See character counts update instantly as you type - no need to click any buttons",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Paste Text",
    desc: "Add your content to the text area",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Instant Count",
    desc: "See all character statistics immediately",
    icon: BarChart2,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Check Limits",
    desc: "Verify social media platform requirements",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-600",
  },
];

const relatedTools = [
  {
    name: "Word Counter",
    slug: "word-counter",
    icon: FileText,
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
    icon: BarChart2,
    color: "text-green-600",
  },
  {
    name: "Paraphraser",
    slug: "paraphraser",
    icon: MessageSquare,
    color: "text-orange-600",
  },
];

const faqs = [
  {
    question: "How is this different from Word Counter?",
    answer:
      "Character Counter focuses specifically on character counts and social media limits, while Word Counter emphasizes word count and reading time. Both provide comprehensive text analysis.",
    category: "Comparison",
  },
  {
    question: "Does it count spaces as characters?",
    answer:
      "Yes! We show both total characters (including spaces) and characters without spaces, so you can see both counts clearly.",
    category: "Features",
  },
  {
    question: "Are the social media limits accurate?",
    answer:
      "Yes, we use current platform limits: Twitter (280 chars), Instagram captions (2,200 chars), Facebook posts (63,206 chars), and SMS (160 chars per message).",
    category: "Accuracy",
  },
  {
    question: "Can I use this for Twitter threads?",
    answer:
      "Absolutely! It's perfect for checking if each tweet in your thread is within the 280-character limit before posting.",
    category: "Usage",
  },
  {
    question: "Does it work offline?",
    answer:
      "Once the page loads, all counting happens in your browser locally, so you don't need an internet connection to use the tool.",
    category: "Technical",
  },
  {
    question: "Is there a character limit for the tool itself?",
    answer:
      "No, you can analyze texts of any length. The tool will count everything you paste, regardless of size.",
    category: "Usage",
  },
];

export default function CharacterCounterClient() {
  return (
    <PremiumToolWrapper
      toolName="Character Counter"
      toolSlug="character-counter"
      tagline="Count characters instantly with social media limits"
      description="Professional character counting tool with real-time analysis. Check Twitter, Instagram, Facebook, and SMS character limits instantly. Perfect for social media managers and content creators."
      badge="Utility Tool"
      category="Utility Tools"
      categorySlug="utility-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "Essential for my social media work! I use this daily to check Twitter character limits and SMS lengths. So fast and accurate!",
        author: "Amy Rodriguez",
        role: "Social Media Manager",
        initial: "A",
      }}
      relatedTools={relatedTools}
      ctaTitle="Count Your Characters Now"
      ctaDescription="Perfect for social media posts, SMS, and content creation"
      ctaIcon={Hash}
    >
      <EnhancedToolLayout
        toolSlug="character-counter"
        toolName="Character Counter"
        placeholder={`📝 Paste or type your text here...

Instantly get:
• Total character count (with and without spaces)
• Word, line, sentence, and paragraph counts
• Twitter character limit check (280 chars)
• Instagram caption limit check (2,200 chars)
• Facebook post limit check (63,206 chars)
• SMS message count (160 chars per message)

Try typing a tweet or social media post to see the limits!`}
        promptTemplate={(input) => input}
        inputRows={12}
        isNonAITool={true}
        nonAIHandler={characterCounterHandler}
        resultLabel="📊 Character Analysis"
        generateButtonText="📊 Count Characters"
        inputLabel="📝 Your Text"
        showAdvancedOptions={false}
        maxHistoryItems={5}
      />
      <div className="px-6 pb-6">
        <FAQSection faqs={faqs} />
      </div>
    </PremiumToolWrapper>
  );
}
