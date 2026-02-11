"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  Target,
  FileText,
  Briefcase,
  Lightbulb,
  Award,
  Rocket,
  Users,
  Star,
  Zap,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const toolOptions = [
  {
    id: "industry",
    label: "Industry",
    type: "select" as const,
    options: [
      { value: "tech", label: "💻 Technology" },
      { value: "marketing", label: "📈 Marketing" },
      { value: "finance", label: "💰 Finance" },
      { value: "healthcare", label: "🏥 Healthcare" },
      { value: "education", label: "🎓 Education" },
      { value: "general", label: "📋 General" },
    ] as const,
    defaultValue: "general",
  },
  {
    id: "style",
    label: "Bullet Style",
    type: "select" as const,
    options: [
      { value: "action", label: "⚡ Action-Oriented" },
      { value: "impact", label: "📊 Impact-Focused" },
      { value: "skills", label: "🛠️ Skills-Based" },
    ] as const,
    defaultValue: "impact",
  },
  {
    id: "bulletCount",
    label: "Number of Bullets",
    type: "select" as const,
    options: [
      { value: "3", label: "3 Bullets" },
      { value: "5", label: "5 Bullets" },
      { value: "7", label: "7 Bullets" },
    ] as const,
    defaultValue: "5",
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const industry = options?.industry || "general";
  const style = options?.style || "impact";
  const bulletCount = options?.bulletCount || "5";

  const styleDescriptions: Record<string, string> = {
    action:
      "Start each bullet with a powerful action verb (Led, Developed, Achieved, Implemented, etc.). Focus on what you DID.",
    impact:
      "Focus on quantifiable achievements and measurable results. Include metrics, percentages, and numbers to demonstrate impact.",
    skills:
      "Highlight specific skills, technologies, and competencies demonstrated in this role. Showcase your technical and professional abilities.",
  };

  const industryGuidance: Record<string, string> = {
    tech: "Use technical terminology, highlight programming languages, frameworks, and technical achievements. Emphasize innovation and problem-solving.",
    marketing:
      "Focus on campaign results, engagement metrics, ROI, and brand impact. Highlight creativity and data-driven decisions.",
    finance:
      "Emphasize financial metrics, cost savings, revenue growth, and risk management. Use precise numbers and percentages.",
    healthcare:
      "Highlight patient care improvements, compliance, safety metrics, and quality of care. Emphasize compassion and expertise.",
    education:
      "Focus on student outcomes, curriculum development, engagement metrics, and teaching innovations. Highlight impact on learning.",
    general:
      "Use professional language applicable across industries. Focus on leadership, collaboration, and measurable achievements.",
  };

  return `Generate ${bulletCount} powerful, ATS-friendly resume bullet points for a role in the ${industry} industry.

Style: ${styleDescriptions[style]}
Industry guidance: ${industryGuidance[industry]}

IMPORTANT REQUIREMENTS:
- Each bullet must be concise (1-2 lines maximum)
- Start with strong action verbs (past tense for previous roles, present tense for current)
- Include specific metrics, numbers, or percentages where possible
- Quantify achievements (team size, budget, time saved, percentage improvement, etc.)
- Avoid generic statements - be specific and impactful
- Use industry-relevant keywords for ATS optimization
- Focus on achievements and results, not just responsibilities
- Each bullet should demonstrate value added to the organization

Job/Experience details:
${input}

Generate ${bulletCount} distinct resume bullets:`;
};

const stats = [
  { icon: Users, label: "180K+", sublabel: "Resumes Improved" },
  { icon: Star, label: "4.9/5", sublabel: "User Rating" },
  { icon: TrendingUp, label: "3x More", sublabel: "Interviews" },
];

const features = [
  {
    icon: Target,
    title: "ATS-Optimized",
    description:
      "Bullets formatted to pass Applicant Tracking Systems with industry-relevant keywords and proper structure.",
  },
  {
    icon: CheckCircle,
    title: "Quantifiable Results",
    description:
      "Focus on metrics and measurable achievements that demonstrate your impact and value to employers.",
  },
  {
    icon: Award,
    title: "Industry-Specific",
    description:
      "Tailored for Tech, Marketing, Finance, Healthcare, Education, or General industries with appropriate terminology.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Share Experience",
    desc: "Describe your role and achievements",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Pick Style",
    desc: "Choose industry and bullet format",
    icon: Target,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Bullets",
    desc: "Copy to your resume instantly",
    icon: Award,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Resume Bullet Generator?",
    answer:
      "The Resume Bullet Generator is an AI-powered tool that transforms your job experiences into powerful, achievement-focused resume bullet points. It creates ATS-optimized bullets with strong action verbs, quantifiable results, and industry-specific keywords that help you stand out to recruiters and hiring managers.",
  },
  {
    question: "What makes a good resume bullet?",
    answer:
      "Great resume bullets start with strong action verbs, include quantifiable results (numbers, percentages, metrics), demonstrate impact and value, use industry-relevant keywords for ATS, and focus on achievements rather than just responsibilities. For example: 'Led team of 10 engineers to deliver product 3 weeks ahead of schedule, reducing costs by 25%' instead of 'Responsible for managing team.'",
  },
  {
    question: "What bullet styles are available?",
    answer:
      "Choose from three styles: Action-Oriented (starts with powerful action verbs like Led, Developed, Achieved), Impact-Focused (emphasizes measurable results and metrics), or Skills-Based (highlights specific technical and professional competencies). Select based on what aspect of your experience you want to emphasize.",
  },
  {
    question: "How do I add numbers and metrics?",
    answer:
      "Include any measurable data in your input: team size ('managed 10 people'), budget ('$500K budget'), time saved ('reduced processing time by 40%'), revenue impact ('increased sales by $2M'), percentage improvements ('improved efficiency by 30%'), or volumes ('processed 500+ applications'). Numbers make your achievements tangible and impressive.",
  },
  {
    question: "What industries are supported?",
    answer:
      "We support six industries: Technology (for engineers, developers, IT professionals), Marketing (for marketers, content creators, brand managers), Finance (for accountants, analysts, financial advisors), Healthcare (for nurses, doctors, healthcare administrators), Education (for teachers, professors, administrators), and General (applicable across all fields).",
  },
  {
    question: "Is the Resume Bullet Generator free?",
    answer:
      "Yes! The Resume Bullet Generator is completely free to use. Create unlimited professional resume bullets without any cost. Perfect for job seekers, career changers, students, or anyone looking to improve their resume and increase interview callbacks.",
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
    name: "Interview Prep",
    slug: "interview-generator",
    icon: Lightbulb,
    color: "text-purple-600",
  },
  {
    name: "Bio Generator",
    slug: "bio-generator",
    icon: Award,
    color: "text-green-600",
  },
  {
    name: "Goal Planner",
    slug: "goal-planner",
    icon: Rocket,
    color: "text-orange-600",
  },
];

export default function ResumeBulletsClient() {
  return (
    <PremiumToolWrapper
      toolName="Resume Bullet Generator"
      toolSlug="resume-bullets"
      tagline="Create impactful resume bullets that get noticed"
      description="Transform your job experience into powerful, achievement-focused resume bullet points. ATS-optimized with quantifiable results and industry-specific keywords."
      badge="Career Booster"
      category="Writing Tools"
      categorySlug="writing-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "My resume went from boring to impressive! Got 3x more interview callbacks after using these bullets. The metrics focus really made a difference.",
        author: "Kevin O'Brien",
        role: "Software Developer",
        initial: "K",
      }}
      relatedTools={relatedTools}
      ctaTitle="Upgrade Your Resume"
      ctaDescription="Stand out from the competition with powerful resume bullets!"
      ctaButtonText="Generate Bullets"
      ctaIcon={Target}
    >
      <EnhancedToolLayout
        toolSlug="resume-bullets"
        toolName="Resume Bullet Generator"
        placeholder={`💼 Describe your job responsibilities and achievements...

Examples:
• Job Title: Sales Manager at ABC Corp (2020-2023)
• Led a team of 10 sales representatives across 3 regions
• Increased regional sales from $2M to $3.5M annually (75% growth)
• Implemented new CRM system that reduced response time by 40%
• Trained and mentored 15 new hires with 90% retention rate

OR

• Software Engineer role developing web applications
• Built features using React, Node.js, and PostgreSQL
• Improved application performance and reduced load time
• Collaborated with cross-functional team of 12 people
• Deployed features that increased user engagement

💡 Tip: Include numbers, metrics, team sizes, percentages, and specific achievements for better results!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="🎯 Your Resume Bullets"
        generateButtonText="✨ Generate Bullets"
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
