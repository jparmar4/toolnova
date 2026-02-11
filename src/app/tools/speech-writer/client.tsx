"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  FileText,
  Mic,
  Lightbulb,
  MessageSquare,
  Users,
  Target,
  Star,
  Zap,
  Heart,
  Award,
  Sparkles,
} from "lucide-react";

const toolOptions = [
  {
    id: "occasion",
    label: "Occasion",
    type: "select" as const,
    options: [
      { value: "graduation", label: "🎓 Graduation" },
      { value: "wedding", label: "💒 Wedding" },
      { value: "business", label: "💼 Business/Conference" },
      { value: "award", label: "🏆 Award Ceremony" },
      { value: "memorial", label: "🕊️ Memorial" },
      { value: "motivational", label: "💪 Motivational" },
    ] as const,
    defaultValue: "graduation",
  },
  {
    id: "duration",
    label: "Duration",
    type: "select" as const,
    options: [
      { value: "2min", label: "⏱️ 2 Minutes" },
      { value: "5min", label: "⏱️ 5 Minutes" },
      { value: "10min", label: "⏱️ 10 Minutes" },
    ] as const,
    defaultValue: "5min",
  },
  {
    id: "tone",
    label: "Tone",
    type: "select" as const,
    options: [
      { value: "formal", label: "👔 Formal" },
      { value: "heartfelt", label: "❤️ Heartfelt" },
      { value: "humorous", label: "😄 Humorous" },
      { value: "inspirational", label: "✨ Inspirational" },
    ] as const,
    defaultValue: "heartfelt",
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const occasion = options?.occasion || "graduation";
  const duration = options?.duration || "5min";
  const tone = options?.tone || "heartfelt";

  const durationWords: Record<string, string> = {
    "2min": "approximately 300-400 words (2-minute speech)",
    "5min": "approximately 700-900 words (5-minute speech)",
    "10min": "approximately 1400-1600 words (10-minute speech)",
  };

  const occasionGuidance: Record<string, string> = {
    graduation:
      "Celebrate achievements, inspire future endeavors, and acknowledge the journey.",
    wedding:
      "Express joy, share meaningful stories, and offer heartfelt wishes for the couple.",
    business:
      "Deliver key insights, motivate the audience, and present a clear call-to-action.",
    award:
      "Honor the achievement, acknowledge the effort, and inspire continued excellence.",
    memorial:
      "Pay tribute with respect, share fond memories, and provide comfort to attendees.",
    motivational:
      "Inspire action, share powerful stories, and empower the audience to overcome challenges.",
  };

  return `Write a compelling ${occasion} speech with a ${tone} tone.
Target length: ${durationWords[duration]}

Occasion guidance: ${occasionGuidance[occasion]}

Speech structure requirements:
- Start with a powerful opening hook that captures attention immediately
- Include 2-3 personal anecdotes, examples, or relatable stories
- Develop a clear central theme or key message
- Use rhetorical devices (repetition, questions, metaphors) for impact
- Build emotional connection with the audience
- Include a memorable closing with a strong call-to-action or final thought
- Use transitions to maintain flow between ideas

Speech context and details:
${input}

Write the complete speech now:`;
};

const stats = [
  { icon: Users, label: "150K+", sublabel: "Speeches Created" },
  { icon: Star, label: "4.9/5", sublabel: "User Rating" },
  { icon: Zap, label: "6 Occasions", sublabel: "Covered" },
];

const features = [
  {
    icon: Mic,
    title: "Multiple Occasions",
    description:
      "Create speeches for graduations, weddings, business events, awards, memorials, and motivational talks.",
  },
  {
    icon: Heart,
    title: "Tone Variety",
    description:
      "Choose from formal, heartfelt, humorous, or inspirational tones to match your speaking style.",
  },
  {
    icon: Target,
    title: "Custom Length",
    description:
      "Generate speeches from 2 to 10 minutes with precise word counts for perfect timing.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Share Details",
    desc: "Describe your speech requirements",
    icon: Lightbulb,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Tone",
    desc: "Choose occasion, length, and style",
    icon: Target,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Practice",
    desc: "Get your polished speech",
    icon: Mic,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Speech Writer?",
    answer:
      "The Speech Writer is an AI-powered tool that creates powerful, personalized speeches for any occasion. Whether you need a graduation speech, wedding toast, business presentation, or motivational talk, our AI crafts engaging content with the perfect tone, structure, and length. Perfect for public speaking, special events, or professional presentations.",
  },
  {
    question: "What occasions are covered?",
    answer:
      "We support six major occasions: Graduation (celebrating achievements and new beginnings), Wedding (toasts and vows), Business/Conference (professional presentations), Award Ceremony (honoring achievements), Memorial (paying tribute), and Motivational (inspiring audiences). Each occasion has specific guidance and structure.",
  },
  {
    question: "How do I personalize my speech?",
    answer:
      "Include specific names, personal stories, memories, dates, achievements, and relevant details in your input. The more context you provide (like 'my brother John,' 'fishing trip in 2020,' or 'team sales record'), the more personalized and authentic your speech will be.",
  },
  {
    question: "What speech lengths are available?",
    answer:
      "Choose from three lengths: 2 Minutes (300-400 words, quick and impactful), 5 Minutes (700-900 words, balanced and comprehensive), or 10 Minutes (1400-1600 words, detailed and thorough). Select based on your time slot and how much you want to cover.",
  },
  {
    question: "How do the tone options work?",
    answer:
      "Choose from four tones: Formal (professional and traditional), Heartfelt (emotional and sincere), Humorous (light and entertaining), or Inspirational (motivating and uplifting). The tone affects word choice, storytelling style, and emotional impact throughout the speech.",
  },
  {
    question: "Is the Speech Writer free?",
    answer:
      "Yes! The Speech Writer is completely free to use. Create unlimited speeches for any occasion without any cost. Perfect for best men and maids of honor, business professionals, students, or anyone who needs to deliver a memorable speech.",
  },
];

const relatedTools = [
  {
    name: "Essay Writer",
    slug: "essay-writer",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    name: "Email Writer",
    slug: "email-writer",
    icon: MessageSquare,
    color: "text-purple-600",
  },
  {
    name: "Bio Generator",
    slug: "bio-generator",
    icon: Users,
    color: "text-green-600",
  },
  {
    name: "Cover Letter",
    slug: "cover-letter-writer",
    icon: Target,
    color: "text-orange-600",
  },
];

export default function SpeechWriterClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Speech Writer"
      toolSlug="speech-writer"
      tagline="Write memorable speeches for any occasion"
      description="Create powerful, personalized speeches for graduations, weddings, business events, and more. Choose your tone, length, and let AI craft the perfect words."
      badge="Public Speaking"
      category="Writing Tools"
      categorySlug="writing-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "Used this for my best man speech. Everyone was in tears - the good kind! Absolutely perfect and so personal. Standing ovation!",
        author: "Robert Miller",
        role: "Happy Best Man",
        initial: "R",
      }}
      relatedTools={relatedTools}
      ctaTitle="Write Your Speech"
      ctaDescription="Make an unforgettable impression with words that matter!"
      ctaButtonText="Start Writing"
      ctaIcon={Mic}
    >
      <EnhancedToolLayout
        toolSlug="speech-writer"
        toolName="Speech Writer"
        placeholder={`🎤 Describe your speech requirements...

Examples:
• Graduation speech for Class of 2026, theme: resilience and new beginnings, mention overcoming pandemic challenges
• Best man speech for my brother John's wedding, include story about our fishing trip where he met his bride
• Motivational speech for sales team Q4 kickoff meeting, focus on exceeding targets and teamwork
• Award acceptance speech for Employee of the Year, thank my team and mentor Sarah
• Wedding toast for my daughter Emma, share story about her childhood dream of becoming a doctor
• Business keynote on innovation in AI technology for tech conference with 500 attendees

💡 Tip: Include specific names, stories, themes, and personal details for a more authentic speech!`}
        inputRows={8}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="🎤 Your Speech"
        generateButtonText="✨ Write Speech"
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
