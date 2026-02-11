"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  FileText,
  Briefcase,
  Target,
  Lightbulb,
  Mail,
  Award,
  Users,
  Star,
  Zap,
  CheckCircle,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const toolOptions = [
  {
    id: "jobType",
    label: "Job Type",
    type: "select" as const,
    options: [
      { value: "corporate", label: "🏢 Corporate" },
      { value: "startup", label: "🚀 Startup" },
      { value: "tech", label: "💻 Tech" },
      { value: "creative", label: "🎨 Creative" },
      { value: "academic", label: "🎓 Academic" },
      { value: "nonprofit", label: "🤝 Non-Profit" },
    ] as const,
    defaultValue: "corporate",
  },
  {
    id: "tone",
    label: "Tone",
    type: "select" as const,
    options: [
      { value: "professional", label: "👔 Professional" },
      { value: "enthusiastic", label: "✨ Enthusiastic" },
      { value: "confident", label: "💪 Confident" },
    ] as const,
    defaultValue: "professional",
  },
  {
    id: "experience",
    label: "Experience Level",
    type: "select" as const,
    options: [
      { value: "entry", label: "🌱 Entry Level" },
      { value: "mid", label: "📈 Mid-Level" },
      { value: "senior", label: "🎯 Senior" },
    ] as const,
    defaultValue: "mid",
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const jobType = options?.jobType || "corporate";
  const tone = options?.tone || "professional";
  const experience = options?.experience || "mid";

  const toneGuidance: Record<string, string> = {
    professional:
      "Use formal, polished language. Be respectful and business-appropriate throughout.",
    enthusiastic:
      "Show genuine excitement about the opportunity. Use energetic but professional language.",
    confident:
      "Demonstrate strong self-assurance in your abilities. Be assertive about your value proposition.",
  };

  const experienceGuidance: Record<string, string> = {
    entry:
      "Emphasize education, internships, projects, and transferable skills. Show eagerness to learn and grow.",
    mid: "Highlight relevant work experience, accomplishments with metrics, and proven track record. Balance experience with growth potential.",
    senior:
      "Showcase leadership experience, strategic thinking, significant achievements, and industry expertise. Emphasize value you bring to organization.",
  };

  return `Write a compelling ${tone} cover letter for a ${jobType} ${experience}-level position.

Tone: ${toneGuidance[tone]}
Experience level guidance: ${experienceGuidance[experience]}

Your cover letter should include:

1. **Strong Opening** (1 paragraph):
   - Grab attention immediately
   - Mention the specific position and how you found it
   - Include a compelling hook about why you're interested

2. **Why You're a Great Fit** (2-3 paragraphs):
   - Highlight 3-4 most relevant skills/experiences
   - Provide specific examples with measurable achievements
   - Connect your background directly to job requirements
   - Show understanding of company's mission/values
   - Demonstrate research about the company

3. **Why This Company** (1 paragraph):
   - Explain genuine interest in the organization
   - Reference specific company initiatives, products, or values
   - Show cultural fit and alignment with company goals

4. **Compelling Closing** (1 paragraph):
   - Express enthusiasm for next steps
   - Include clear call-to-action
   - Professional sign-off
   - Mention availability for interview

Keep the letter to 3-4 paragraphs total, approximately 300-400 words. Use specific details from the information provided. Avoid generic statements.

Job and candidate details:
${input}

Write the complete cover letter:`;
};

const stats = [
  { icon: Users, label: "280K+", sublabel: "Letters Written" },
  { icon: Star, label: "4.9/5", sublabel: "Success Rate" },
  { icon: Zap, label: "3x More", sublabel: "Interview Calls" },
];

const features = [
  {
    icon: Target,
    title: "Job-Type Optimized",
    description:
      "Tailored for corporate, startup, tech, creative, academic, or non-profit positions with industry-specific language.",
  },
  {
    icon: TrendingUp,
    title: "Experience-Matched",
    description:
      "Adapts to entry, mid-level, or senior positions, emphasizing appropriate skills and achievements for your level.",
  },
  {
    icon: CheckCircle,
    title: "Results-Focused",
    description:
      "Highlights quantifiable achievements and specific examples that demonstrate your value to potential employers.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Details",
    desc: "Job title, company, and your background",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Preferences",
    desc: "Choose job type, tone, and level",
    icon: Target,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Letter",
    desc: "Receive polished, ready-to-submit letter",
    icon: FileText,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Cover Letter Writer?",
    answer:
      "The Cover Letter Writer is an AI-powered tool that creates personalized, professional cover letters tailored to specific jobs and companies. It generates compelling letters that highlight your relevant skills, experiences, and achievements while demonstrating genuine interest in the position. Perfect for job seekers at any career level who want to stand out from other applicants.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Include: the job title you're applying for, company name, your relevant skills and experiences, specific achievements (with numbers/metrics if possible), why you're interested in this role, and any research you've done about the company. The more specific details you provide, the more personalized and compelling your cover letter will be.",
  },
  {
    question: "What job types are supported?",
    answer:
      "We support six job types: Corporate (traditional businesses and large companies), Startup (fast-paced, entrepreneurial environments), Tech (software, IT, engineering roles), Creative (design, marketing, media positions), Academic (teaching, research, university roles), and Non-Profit (mission-driven organizations). Each type uses appropriate industry language and emphasis.",
  },
  {
    question: "How do the tone options work?",
    answer:
      "Choose from three tones: Professional (formal, polished, business-appropriate), Enthusiastic (energetic, showing genuine excitement while remaining professional), or Confident (assertive, demonstrating strong self-assurance in your abilities). Select the tone that best matches your personality and the company culture.",
  },
  {
    question: "What's the difference between experience levels?",
    answer:
      "Entry Level emphasizes education, internships, projects, and transferable skills with eagerness to learn. Mid-Level highlights relevant work experience, accomplishments, and proven track record. Senior showcases leadership experience, strategic thinking, significant achievements, and industry expertise. The AI adjusts focus and language accordingly.",
  },
  {
    question: "Is the Cover Letter Writer free?",
    answer:
      "Yes! The Cover Letter Writer is completely free to use. Generate unlimited cover letters for any job application without any cost. Perfect for job seekers, career changers, or anyone applying to multiple positions who needs professional, tailored cover letters quickly.",
  },
];

const relatedTools = [
  {
    name: "Resume Bullets",
    slug: "resume-bullets",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    name: "Interview Prep",
    slug: "interview-generator",
    icon: Lightbulb,
    color: "text-purple-600",
  },
  {
    name: "Email Writer",
    slug: "email-writer",
    icon: Mail,
    color: "text-green-600",
  },
  {
    name: "Goal Planner",
    slug: "goal-planner",
    icon: Award,
    color: "text-orange-600",
  },
];

export default function CoverLetterWriterClient() {
  return (
    <PremiumToolWrapper
      toolName="Cover Letter Writer"
      toolSlug="cover-letter-writer"
      tagline="Write compelling cover letters that get interviews"
      description="Generate personalized, professional cover letters tailored to your target job and company. Stand out with results-focused content that showcases your value."
      badge="Career Essential"
      category="Career Tools"
      categorySlug="career-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "Used this for 5 job applications and got 4 interview calls! The company-specific customization really makes a difference. Best cover letter tool I've found.",
        author: "Michael Rodriguez",
        role: "Software Engineer",
        initial: "M",
      }}
      relatedTools={relatedTools}
      ctaTitle="Start Your Application"
      ctaDescription="Get noticed by hiring managers with a standout cover letter!"
      ctaButtonText="Write Cover Letter"
      ctaIcon={FileText}
    >
      <EnhancedToolLayout
        toolSlug="cover-letter-writer"
        toolName="Cover Letter Writer"
        placeholder={`💼 Enter your job application details...

Include:
• Job title and company name
• Your relevant skills and experience
• Specific achievements (with numbers/metrics)
• Why you're interested in this role/company
• Any company research you've done

Example:

Job Title: Senior Product Manager at TechCorp
Company: TechCorp is a leading SaaS company focused on productivity tools

My Background:
• 5 years of product management experience in B2B SaaS
• Led product that grew from 10K to 100K users in 18 months
• Increased customer retention by 35% through feature improvements
• Experience with agile development and cross-functional teams
• MBA from Stanford, BS in Computer Science

Why I'm interested:
• Passionate about TechCorp's mission to empower remote teams
• Impressed by recent launch of AI-powered productivity features
• Want to contribute to scaling products in fast-growing market
• Align with company values of innovation and customer focus

Skills: Product strategy, user research, data analytics, stakeholder management, roadmap planning, A/B testing

💡 Tip: Include specific numbers, achievements, and company research for the most compelling cover letter!`}
        inputRows={12}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📄 Your Cover Letter"
        generateButtonText="✍️ Write Cover Letter"
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
