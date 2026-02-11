"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  Image,
  Instagram,
  Camera,
  Lightbulb,
  Sparkles,
  Hash,
  Users,
  Star,
  Zap,
  TrendingUp,
  Target,
  MessageSquare,
} from "lucide-react";

const toolOptions = [
  {
    id: "platform",
    label: "Platform",
    type: "select" as const,
    options: [
      { value: "instagram", label: "📸 Instagram" },
      { value: "facebook", label: "👥 Facebook" },
      { value: "linkedin", label: "💼 LinkedIn" },
      { value: "tiktok", label: "🎵 TikTok" },
      { value: "twitter", label: "🐦 Twitter/X" },
    ] as const,
    defaultValue: "instagram",
  },
  {
    id: "tone",
    label: "Tone",
    type: "select" as const,
    options: [
      { value: "casual", label: "😊 Casual" },
      { value: "professional", label: "👔 Professional" },
      { value: "funny", label: "😂 Funny" },
      { value: "inspirational", label: "✨ Inspirational" },
    ] as const,
    defaultValue: "casual",
  },
  {
    id: "includeHashtags",
    label: "Include Hashtags",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const platform = options?.platform || "instagram";
  const tone = options?.tone || "casual";
  const includeHashtags = options?.includeHashtags !== false;

  const platformGuidance: Record<string, string> = {
    instagram:
      "Instagram captions should be engaging, visual, and encourage interaction. Often include questions or calls-to-action.",
    facebook:
      "Facebook captions can be longer and more conversational. Focus on storytelling and community engagement.",
    linkedin:
      "LinkedIn captions should be professional and value-driven. Share insights, tips, or professional updates.",
    tiktok:
      "TikTok captions should be short, punchy, and trend-aware. Often reference the video content directly.",
    twitter:
      "Twitter captions should be concise and impactful. Stay under 280 characters and make every word count.",
  };

  return `Create 3 ${platform} captions with a ${tone} tone for the following photo/post.

Platform: ${platform}
${platformGuidance[platform]}

${includeHashtags ? "Include 5-10 relevant, trending hashtags with each caption." : "Do not include hashtags."}

Each caption should:
- Be engaging and scroll-stopping
- Match the ${tone} tone perfectly
- Include a call-to-action or question to encourage engagement
- Be optimized for ${platform}'s audience and algorithm
- Be unique and different from the other options

Photo/Post description:
${input}

Generate 3 distinct caption options:

Caption 1:
[First caption with ${includeHashtags ? "hashtags" : "no hashtags"}]

Caption 2:
[Second caption with ${includeHashtags ? "hashtags" : "no hashtags"}]

Caption 3:
[Third caption with ${includeHashtags ? "hashtags" : "no hashtags"}]`;
};

const stats = [
  { icon: Users, label: "500K+", sublabel: "Captions Created" },
  { icon: Star, label: "4.9/5", sublabel: "User Rating" },
  { icon: TrendingUp, label: "3x", sublabel: "Better Engagement" },
];

const features = [
  {
    icon: Target,
    title: "Multi-Platform Support",
    description:
      "Create captions optimized for Instagram, Facebook, LinkedIn, TikTok, and Twitter with platform-specific styles.",
  },
  {
    icon: Hash,
    title: "Smart Hashtag Suggestions",
    description:
      "Get 5-10 relevant, trending hashtags with each caption to boost discoverability and reach.",
  },
  {
    icon: Sparkles,
    title: "Multiple Caption Options",
    description:
      "Receive 3 unique caption variations per generation, each with a different angle and style.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Describe Post",
    desc: "Tell us about your photo or video",
    icon: Camera,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Pick Style",
    desc: "Choose platform and tone",
    icon: Image,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Captions",
    desc: "Copy and post instantly",
    icon: Sparkles,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Caption Generator?",
    answer:
      "The Caption Generator is an AI-powered tool that creates engaging social media captions for your photos and videos. It generates 3 unique captions with relevant hashtags, optimized for each platform's audience and style. Perfect for content creators, businesses, and anyone looking to boost their social media engagement.",
  },
  {
    question: "How many captions do I get?",
    answer:
      "You receive 3 unique caption options with each generation! This gives you multiple choices with different angles, styles, and calls-to-action. Pick your favorite or mix and match elements from different options to create the perfect caption.",
  },
  {
    question: "Are hashtags included?",
    answer:
      "Yes! When enabled, each caption includes 5-10 relevant, trending hashtags optimized for your content and platform. Hashtags are strategically chosen to increase discoverability and reach. You can toggle this feature on or off based on your preference.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "We support Instagram, Facebook, LinkedIn, TikTok, and Twitter/X. Each platform has unique audience expectations and algorithm preferences, which our AI considers when creating captions. For example, Instagram captions focus on visual storytelling while LinkedIn captions are more professional and value-driven.",
  },
  {
    question: "How do the tone options work?",
    answer:
      "Choose from four tones: Casual (friendly and relatable), Professional (business-appropriate), Funny (humorous and entertaining), or Inspirational (motivating and uplifting). The tone affects word choice, emoji usage, and overall messaging style to match your brand voice.",
  },
  {
    question: "Is the Caption Generator free?",
    answer:
      "Yes! The Caption Generator is completely free to use. Create unlimited captions with hashtags for any platform without any cost. Perfect for influencers, businesses, content creators, or anyone looking to improve their social media presence and engagement.",
  },
];

const relatedTools = [
  {
    name: "Bio Generator",
    slug: "bio-generator",
    icon: Instagram,
    color: "text-pink-600",
  },
  {
    name: "Story Generator",
    slug: "story-generator",
    icon: Sparkles,
    color: "text-blue-600",
  },
  {
    name: "Email Writer",
    slug: "email-writer",
    icon: Lightbulb,
    color: "text-purple-600",
  },
  {
    name: "Paraphraser",
    slug: "paraphraser",
    icon: MessageSquare,
    color: "text-green-600",
  },
];

export default function CaptionGeneratorClient() {
  return (
    <PremiumToolWrapper
      toolName="Caption Generator"
      toolSlug="caption-generator"
      tagline="Create engaging social media captions"
      description="Generate scroll-stopping captions with hashtags for Instagram, TikTok, and more. Get 3 unique options every time!"
      badge="Social Media Pro"
      category="Writing Tools"
      categorySlug="writing-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "My engagement went up 200% after using these captions! The hashtag suggestions are spot-on and save me so much research time.",
        author: "Maya Johnson",
        role: "Travel Blogger",
        initial: "M",
      }}
      relatedTools={relatedTools}
      ctaTitle="Create Captions"
      ctaDescription="Boost your social media engagement with perfect captions!"
      ctaButtonText="Start Creating"
      ctaIcon={Camera}
    >
      <EnhancedToolLayout
        toolSlug="caption-generator"
        toolName="Caption Generator"
        placeholder={`📸 Describe your photo or post...

Examples:
• Beach sunset photo with my best friend enjoying vacation
• New product launch for my sustainable fashion line
• Healthy breakfast bowl I made this morning with avocado and eggs
• Behind-the-scenes of my photography studio setup
• Team celebration after completing major project milestone
• Morning workout routine at the gym showing progress
• Travel photo from mountain hiking adventure in Colorado

💡 Tip: Include details about the mood, setting, and context for more relevant captions!`}
        inputRows={8}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📝 Your Captions"
        generateButtonText="✨ Generate Captions"
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
