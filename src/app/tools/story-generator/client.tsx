"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  FileText,
  Pencil,
  BookOpen,
  Lightbulb,
  Sparkles,
  BookMarked,
  Users,
  Star,
  Zap,
  Feather,
  Target,
  Heart,
} from "lucide-react";

const toolOptions = [
  {
    id: "genre",
    label: "Genre",
    type: "select" as const,
    options: [
      { value: "fantasy", label: "🧙 Fantasy" },
      { value: "scifi", label: "🚀 Sci-Fi" },
      { value: "romance", label: "❤️ Romance" },
      { value: "mystery", label: "🔍 Mystery" },
      { value: "adventure", label: "⚔️ Adventure" },
      { value: "horror", label: "👻 Horror" },
    ] as const,
    defaultValue: "adventure",
  },
  {
    id: "length",
    label: "Story Length",
    type: "select" as const,
    options: [
      { value: "flash", label: "⚡ Flash Fiction (100-300 words)" },
      { value: "short", label: "📖 Short Story (500-800 words)" },
      { value: "detailed", label: "📚 Detailed (1000+ words)" },
    ] as const,
    defaultValue: "short",
  },
  {
    id: "audience",
    label: "Audience",
    type: "select" as const,
    options: [
      { value: "children", label: "👶 Children" },
      { value: "teens", label: "👦 Teens" },
      { value: "adults", label: "👨 Adults" },
    ] as const,
    defaultValue: "teens",
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const genre = options?.genre || "adventure";
  const length = options?.length || "short";
  const audience = options?.audience || "teens";

  const lengthWords: Record<string, string> = {
    flash: "100-300 words",
    short: "500-800 words",
    detailed: "1000+ words",
  };

  const audienceGuidance: Record<string, string> = {
    children:
      "Use simple language, positive themes, and age-appropriate content suitable for ages 6-10.",
    teens:
      "Include relatable themes, moderate complexity, and engaging dialogue suitable for ages 13-18.",
    adults:
      "Use sophisticated language, complex themes, and mature storytelling suitable for ages 18+.",
  };

  const genreElements: Record<string, string> = {
    fantasy:
      "Include magical elements, mythical creatures, or supernatural powers. Build a rich fantasy world.",
    scifi:
      "Incorporate futuristic technology, space exploration, or scientific concepts. Create a believable sci-fi setting.",
    romance:
      "Focus on emotional connection, relationship development, and heartfelt moments. Create compelling chemistry.",
    mystery:
      "Include clues, red herrings, and a puzzle to solve. Build suspense and reveal the truth gradually.",
    adventure:
      "Feature exciting journeys, challenges to overcome, and discoveries. Create a sense of exploration.",
    horror:
      "Build tension, create an eerie atmosphere, and include unsettling elements. Focus on fear and suspense.",
  };

  return `Write a captivating ${genre} story for a ${audience} audience.
Target length: ${lengthWords[length]}

Genre-specific guidance: ${genreElements[genre]}
Audience guidance: ${audienceGuidance[audience]}

Story structure requirements:
- Start with a compelling hook that grabs attention immediately
- Introduce interesting, well-developed characters
- Build rising action with increasing tension or stakes
- Include a satisfying climax that resolves the main conflict
- End with a memorable conclusion that leaves an impact

Story premise/idea:
${input}

Write the complete story now:`;
};

const stats = [
  { icon: Users, label: "250K+", sublabel: "Stories Created" },
  { icon: Star, label: "4.8/5", sublabel: "User Rating" },
  { icon: Zap, label: "6 Genres", sublabel: "Available" },
];

const features = [
  {
    icon: BookOpen,
    title: "Multiple Genres",
    description:
      "Choose from Fantasy, Sci-Fi, Romance, Mystery, Adventure, or Horror to match your creative vision.",
  },
  {
    icon: Target,
    title: "Audience-Tailored",
    description:
      "Stories optimized for children, teens, or adults with appropriate language and themes.",
  },
  {
    icon: Feather,
    title: "Flexible Length",
    description:
      "From flash fiction (100 words) to detailed narratives (1000+ words) based on your needs.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Idea",
    desc: "Describe your story premise",
    icon: Lightbulb,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Pick Genre",
    desc: "Choose style, length, and audience",
    icon: BookMarked,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Read Story",
    desc: "Enjoy your unique creation",
    icon: BookOpen,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Story Generator?",
    answer:
      "The Story Generator is an AI-powered creative writing tool that creates original stories based on your ideas. Choose your genre, length, and target audience, and our AI crafts a complete narrative with engaging characters, plot development, and a satisfying conclusion. Perfect for creative writing, entertainment, or overcoming writer's block.",
  },
  {
    question: "What genres are available?",
    answer:
      "We offer six popular genres: Fantasy (magical elements and mythical worlds), Sci-Fi (futuristic technology and space), Romance (love stories and relationships), Mystery (puzzles and detective work), Adventure (exciting journeys and exploration), and Horror (suspenseful and scary tales). Each genre has specific storytelling elements.",
  },
  {
    question: "Can I specify characters and details?",
    answer:
      "Absolutely! Include character names, personality traits, settings, and specific plot points in your premise. The more details you provide, the more personalized your story will be. For example, 'A shy teenage girl discovers she can control fire and must save her village from dark forces.'",
  },
  {
    question: "What story lengths can I choose?",
    answer:
      "Choose from three lengths: Flash Fiction (100-300 words, quick reads), Short Story (500-800 words, balanced narratives), or Detailed (1000+ words, comprehensive tales). Flash fiction is great for quick creative exercises, while detailed stories offer full character development and plot complexity.",
  },
  {
    question: "How does audience selection work?",
    answer:
      "Select Children (ages 6-10) for simple, positive stories with age-appropriate themes. Choose Teens (13-18) for relatable, moderately complex narratives. Select Adults (18+) for sophisticated language and mature themes. The AI adjusts vocabulary, themes, and complexity accordingly.",
  },
  {
    question: "Is the Story Generator free?",
    answer:
      "Yes! The Story Generator is completely free to use. Create unlimited stories in any genre without any cost. Perfect for aspiring writers, creative writing students, parents creating bedtime stories, or anyone who loves imaginative storytelling.",
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
    name: "Speech Writer",
    slug: "speech-writer",
    icon: Lightbulb,
    color: "text-purple-600",
  },
  {
    name: "Bio Generator",
    slug: "bio-generator",
    icon: Pencil,
    color: "text-green-600",
  },
  {
    name: "Caption Generator",
    slug: "caption-generator",
    icon: Sparkles,
    color: "text-orange-600",
  },
];

export default function StoryGeneratorClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Story Generator"
      toolSlug="story-generator"
      tagline="Create captivating stories in any genre"
      description="Generate unique short stories, flash fiction, or detailed narratives based on your ideas. Perfect for creative writing, entertainment, or inspiration."
      badge="Creative Writing"
      category="Writing Tools"
      categorySlug="writing-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "I use this for creative writing prompts. It sparks amazing ideas and helps me overcome writer's block! The stories are always engaging and unique.",
        author: "Emma Taylor",
        role: "Aspiring Author",
        initial: "E",
      }}
      relatedTools={relatedTools}
      ctaTitle="Start Your Story"
      ctaDescription="Every great story starts with an idea. Let AI bring yours to life!"
      ctaButtonText="Create Story"
      ctaIcon={BookOpen}
    >
      <EnhancedToolLayout
        toolSlug="story-generator"
        toolName="Story Generator"
        placeholder={`🎭 Enter your story idea or premise...

Examples:
• A young wizard discovers a hidden power on their 13th birthday and must decide whether to use it for good or evil
• Two strangers meet on a train to Paris and realize they're connected by a mysterious past
• A detective receives a cryptic letter from the future warning about a crime that hasn't happened yet
• In a world where emotions are illegal, a rebel starts feeling again
• A teenage girl finds a portal in her grandmother's attic that leads to a parallel universe
• A group of friends discover their town is built on an ancient burial ground

💡 Tip: Include specific characters, settings, or plot twists for more personalized stories!`}
        inputRows={8}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📖 Your Story"
        generateButtonText="✨ Generate Story"
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
