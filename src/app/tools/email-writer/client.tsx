"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  Mail,
  Send,
  FileText,
  Lightbulb,
  MessageSquare,
  Briefcase,
  Users,
  Star,
  Zap,
  CheckCircle,
  Target,
  Clock,
} from "lucide-react";

const toolOptions = [
  {
    id: "emailType",
    label: "Email Type",
    type: "select" as const,
    options: [
      { value: "professional", label: "💼 Professional/Business" },
      { value: "followup", label: "🔄 Follow-Up" },
      { value: "request", label: "📋 Request" },
      { value: "apology", label: "🙏 Apology" },
      { value: "thank-you", label: "🙌 Thank You" },
      { value: "introduction", label: "👋 Introduction" },
    ] as const,
    defaultValue: "professional",
  },
  {
    id: "tone",
    label: "Tone",
    type: "select" as const,
    options: [
      { value: "formal", label: "👔 Formal" },
      { value: "friendly", label: "😊 Friendly" },
      { value: "persuasive", label: "💪 Persuasive" },
      { value: "urgent", label: "⚡ Urgent" },
    ] as const,
    defaultValue: "formal",
  },
  {
    id: "length",
    label: "Length",
    type: "select" as const,
    options: [
      { value: "brief", label: "⚡ Brief" },
      { value: "medium", label: "📝 Medium" },
      { value: "detailed", label: "📚 Detailed" },
    ] as const,
    defaultValue: "medium",
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const type = options?.emailType || "professional";
  const tone = options?.tone || "formal";
  const length = options?.length || "medium";

  const lengthGuide: Record<string, string> = {
    brief: "Keep it concise with 3-5 sentences",
    medium: "Use 6-10 sentences for balanced detail",
    detailed: "Write a comprehensive email with 10-15 sentences",
  };

  return `Write a ${type} email with a ${tone} tone.
${lengthGuide[length]}

Requirements:
- Start with an appropriate greeting
- Clearly state the purpose in the opening
- Provide relevant details and context
- Include a clear call-to-action if applicable
- End with a professional closing
- **IMPORTANT**: Include a suggested subject line at the very beginning

Format:
Subject: [Your suggested subject line]

[Email body]

Context/Purpose:
${input}

Email:`;
};

const stats = [
  { icon: Users, label: "600K+", sublabel: "Emails Sent" },
  { icon: Star, label: "4.9/5", sublabel: "User Rating" },
  { icon: Zap, label: "30 Sec", sublabel: "Average Time" },
];

const features = [
  {
    icon: Target,
    title: "Multiple Email Types",
    description:
      "From professional business emails to thank-you notes, generate the perfect email for any situation.",
  },
  {
    icon: CheckCircle,
    title: "Subject Line Included",
    description:
      "Every email comes with an optimized subject line designed to increase open rates and engagement.",
  },
  {
    icon: Clock,
    title: "Tone & Length Control",
    description:
      "Choose from formal to friendly tones and brief to detailed lengths to match your needs perfectly.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Describe Need",
    desc: "Tell us what you need to communicate",
    icon: Lightbulb,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Tone",
    desc: "Choose type, tone, and length",
    icon: FileText,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Send It",
    desc: "Copy and send your polished email",
    icon: Send,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Email Writer?",
    answer:
      "The Email Writer is an AI-powered tool that generates professional, polished emails for any situation. Whether you need to write a business request, follow-up, apology, or thank-you email, our AI creates well-structured messages with appropriate tone and formatting, including subject lines.",
  },
  {
    question: "What email types can I create?",
    answer:
      "You can create six types of emails: Professional/Business (formal correspondence), Follow-Up (checking in on previous communication), Request (asking for information or action), Apology (addressing mistakes or issues), Thank You (expressing gratitude), and Introduction (introducing yourself or others).",
  },
  {
    question: "Will it include a subject line?",
    answer:
      "Yes! Every email generated includes a suggested subject line optimized for clarity and engagement. The subject line is specifically crafted to match your email type and increase the likelihood of your email being opened and read.",
  },
  {
    question: "How do the tone options work?",
    answer:
      "Choose from four tones: Formal (professional and traditional), Friendly (warm and approachable), Persuasive (convincing and compelling), or Urgent (time-sensitive and direct). The tone affects word choice, phrasing, and overall style while maintaining professionalism.",
  },
  {
    question: "Can I control email length?",
    answer:
      "Absolutely! Select Brief for quick, concise emails (3-5 sentences), Medium for balanced detail (6-10 sentences), or Detailed for comprehensive messages (10-15 sentences). Choose based on the complexity of your message and recipient's time.",
  },
  {
    question: "Is the Email Writer free?",
    answer:
      "Yes! The Email Writer is completely free to use. Generate unlimited professional emails for any purpose without any cost. Perfect for business professionals, students, job seekers, or anyone who needs to communicate effectively via email.",
  },
];

const relatedTools = [
  {
    name: "Cover Letter",
    slug: "cover-letter-writer",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    name: "Grammar Fix",
    slug: "grammar-fix",
    icon: MessageSquare,
    color: "text-purple-600",
  },
  {
    name: "Paraphraser",
    slug: "paraphraser",
    icon: Lightbulb,
    color: "text-green-600",
  },
  {
    name: "Bio Generator",
    slug: "bio-generator",
    icon: Briefcase,
    color: "text-orange-600",
  },
];

export default function EmailWriterClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Email Writer"
      toolSlug="email-writer"
      tagline="Write professional emails in seconds"
      description="Generate polished, effective emails for any situation - from business requests to thank-you notes. Includes subject lines and multiple tone options."
      badge="Email Pro"
      category="Writing Tools"
      categorySlug="writing-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "As a non-native speaker, this helps me write confident professional emails. Essential tool that saves me hours every week!",
        author: "Yuki Tanaka",
        role: "Marketing Manager",
        initial: "Y",
      }}
      relatedTools={relatedTools}
      ctaTitle="Compose Your Email"
      ctaDescription="Professional communication made easy. Write better emails faster!"
      ctaButtonText="Start Writing"
      ctaIcon={Mail}
    >
      <EnhancedToolLayout
        toolSlug="email-writer"
        toolName="Email Writer"
        placeholder={`📧 Describe what you need to communicate...

Examples:
• Follow up on job interview I had last week with hiring manager Sarah
• Request a meeting with my professor to discuss thesis progress
• Thank client for their business and introduce new services we're offering
• Apologize for missing deadline and provide new timeline
• Introduce myself to new team members after promotion
• Request time off for family vacation in July

💡 Tip: Include relevant details like names, dates, and specific circumstances for better results!`}
        inputRows={8}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📧 Your Email"
        generateButtonText="✉️ Write Email"
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
