"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  User,
  Instagram,
  Twitter,
  Linkedin,
  Sparkles,
  FileText,
  Users,
  Star,
  Zap,
  Target,
  Hash,
  TrendingUp,
} from "lucide-react";

const toolOptions = [
  {
    id: "platform",
    label: "Platform",
    type: "select" as const,
    options: [
      { value: "instagram", label: "📸 Instagram" },
      { value: "twitter", label: "🐦 Twitter/X" },
      { value: "linkedin", label: "💼 LinkedIn" },
      { value: "tiktok", label: "🎵 TikTok" },
      { value: "personal", label: "👤 Personal Website" },
    ] as const,
    defaultValue: "instagram",
  },
  {
    id: "tone",
    label: "Tone",
    type: "select" as const,
    options: [
      { value: "professional", label: "👔 Professional" },
      { value: "casual", label: "😊 Casual & Fun" },
      { value: "creative", label: "🎨 Creative" },
      { value: "witty", label: "😄 Witty" },
    ] as const,
    defaultValue: "casual",
  },
  {
    id: "includeEmojis",
    label: "Include Emojis",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const platform = options?.platform || "instagram";
  const tone = options?.tone || "casual";
  const includeEmojis = options?.includeEmojis !== false;

  const platformLimits: Record<string, string> = {
    instagram: "150 characters max",
    twitter: "160 characters max",
    linkedin: "220 characters max",
    tiktok: "80 characters max",
    personal: "200 characters recommended",
  };

  const platformGuidance: Record<string, string> = {
    instagram:
      "Focus on personality, visual appeal, and what makes them unique. Can include links or handles.",
    twitter:
      "Be concise and punchy. Often includes what they tweet about or their expertise.",
    linkedin:
      "Professional and achievement-focused. Highlight skills, experience, and value proposition.",
    tiktok:
      "Super short and catchy. Focus on content type or personality in just a few words.",
    personal:
      "Comprehensive introduction covering background, expertise, and personality.",
  };

  return `Create 3 different ${platform} bio options with a ${tone} tone.
${includeEmojis ? "You may use 1-2 relevant emojis total per bio (keep it minimal and tasteful)." : "Do not use emojis."}

Platform: ${platform}
Character limit: ${platformLimits[platform]}
${platformGuidance[platform]}

Each bio should:
- Be optimized for ${platform}'s audience and culture
- Capture the person's essence quickly
- Be memorable and engaging
- Stay within the character limit

About the person:
${input}

Generate 3 distinct bio options:

Bio Option 1:
[First bio]

Bio Option 2:
[Second bio]

Bio Option 3:
[Third bio]`;
};

const stats = [
  { icon: Users, label: "350K+", sublabel: "Profiles Created" },
  { icon: Star, label: "4.8/5", sublabel: "User Rating" },
  { icon: Zap, label: "3 Options", sublabel: "Per Generation" },
];

const features = [
  {
    icon: Target,
    title: "Platform-Optimized",
    description:
      "Bios tailored for Instagram, Twitter, LinkedIn, TikTok, and personal websites with proper character limits.",
  },
  {
    icon: Sparkles,
    title: "Multiple Options",
    description:
      "Get 3 different bio variations to choose from, each with a unique angle and style.",
  },
  {
    icon: TrendingUp,
    title: "Tone Variety",
    description:
      "Choose from professional, casual, creative, or witty tones to match your personal brand.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Share Info",
    desc: "Tell us about yourself or interests",
    icon: User,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Pick Platform",
    desc: "Choose where you'll use it",
    icon: Instagram,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get 3 Bios",
    desc: "Pick your favorite option",
    icon: Sparkles,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Bio Generator?",
    answer:
      "The Bio Generator is an AI-powered tool that creates engaging social media bios for various platforms. It generates 3 different bio options optimized for each platform's character limits and audience, helping you craft the perfect introduction for your profile.",
  },
  {
    question: "How many bios do I get?",
    answer:
      "You get 3 different bio options with each generation! This gives you multiple choices with different angles and styles, so you can pick the one that resonates most with your personal brand or combine elements from different options.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "We support Instagram (150 chars), Twitter/X (160 chars), LinkedIn (220 chars), TikTok (80 chars), and Personal Websites (200 chars recommended). Each platform has unique character limits and style considerations that our AI takes into account.",
  },
  {
    question: "What character limits apply?",
    answer:
      "Bios are automatically optimized for each platform's specific limits: Instagram (150), Twitter (160), LinkedIn (220), TikTok (80), and Personal Website (200 recommended). The AI ensures your bio fits perfectly while conveying your message effectively.",
  },
  {
    question: "Can I control the tone?",
    answer:
      "Yes! Choose from four tones: Professional (formal and business-like), Casual & Fun (friendly and approachable), Creative (artistic and unique), or Witty (clever and humorous). You can also toggle emoji usage on or off.",
  },
  {
    question: "Is the Bio Generator free?",
    answer:
      "Yes! The Bio Generator is completely free to use. Create unlimited bios for any platform without any cost. Perfect for influencers, professionals, students, or anyone looking to improve their social media presence.",
  },
];

const relatedTools = [
  {
    name: "Caption Generator",
    slug: "caption-generator",
    icon: Instagram,
    color: "text-pink-600",
  },
  {
    name: "Cover Letter",
    slug: "cover-letter-writer",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    name: "Resume Bullets",
    slug: "resume-bullets",
    icon: Sparkles,
    color: "text-purple-600",
  },
  {
    name: "Email Writer",
    slug: "email-writer",
    icon: Twitter,
    color: "text-green-600",
  },
];

export default function BioGeneratorClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Bio Generator"
      toolSlug="bio-generator"
      tagline="Create the perfect social media bio"
      description="Generate catchy, platform-optimized bios for Instagram, Twitter, LinkedIn, and more. Get 3 unique options every time!"
      badge="Profile Booster"
      category="Writing Tools"
      categorySlug="writing-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "Finally found the perfect Instagram bio! The witty option got me so many compliments. Love having 3 choices to pick from.",
        author: "Sophia Wang",
        role: "Content Creator",
        initial: "S",
      }}
      relatedTools={relatedTools}
      ctaTitle="Create Your Bio"
      ctaDescription="Stand out on social media with a bio that captures who you are!"
      ctaButtonText="Generate Bios"
      ctaIcon={Sparkles}
    >
      <EnhancedToolLayout
        toolSlug="bio-generator"
        toolName="Bio Generator"
        placeholder={`👤 Tell us about yourself...

Examples:
• Freelance photographer based in NYC, specializing in portrait and street photography, coffee enthusiast and dog lover
• Software engineer at tech startup, building AI tools, passionate about open source and teaching
• Travel blogger exploring Southeast Asia, foodie, yoga instructor, sharing adventures daily
• Marketing consultant helping small businesses grow, TEDx speaker, podcast host
• College student studying biology, aspiring doctor, volunteer at local hospital

💡 Tip: Include your profession, interests, location, and what makes you unique!`}
        inputRows={8}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="✨ Your Bio Options"
        generateButtonText="🚀 Generate Bios"
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
