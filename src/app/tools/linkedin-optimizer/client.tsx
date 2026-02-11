"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  Linkedin,
  Target,
  Briefcase,
  Award,
  FileText,
  Users,
  Star,
  Clock,
  Zap,
  TrendingUp,
  Search,
  Eye,
} from "lucide-react";

const toolOptions: ToolOption[] = [
  {
    id: "section",
    label: "Section to Optimize",
    type: "select" as const,
    options: [
      { value: "headline", label: "📰 Headline" },
      { value: "about", label: "📝 About/Summary" },
      { value: "experience", label: "💼 Experience" },
      { value: "full", label: "✨ Full Profile" },
    ],
    defaultValue: "full",
  },
  {
    id: "industry",
    label: "Industry",
    type: "select" as const,
    options: [
      { value: "tech", label: "💻 Technology" },
      { value: "finance", label: "💰 Finance" },
      { value: "marketing", label: "📈 Marketing" },
      { value: "healthcare", label: "🏥 Healthcare" },
      { value: "sales", label: "🤝 Sales" },
      { value: "general", label: "📋 General" },
    ],
    defaultValue: "general",
  },
  {
    id: "experienceLevel",
    label: "Experience Level",
    type: "select" as const,
    options: [
      { value: "entry", label: "🌱 Entry Level (0-2 years)" },
      { value: "mid", label: "📈 Mid-Level (3-5 years)" },
      { value: "senior", label: "🎯 Senior (6-10 years)" },
      { value: "executive", label: "👔 Executive (10+ years)" },
    ],
    defaultValue: "mid",
  },
  {
    id: "focus",
    label: "Optimization Focus",
    type: "select" as const,
    options: [
      { value: "keywords", label: "🔍 SEO Keywords" },
      { value: "engagement", label: "💬 Engagement" },
      { value: "achievements", label: "🏆 Achievements" },
      { value: "network", label: "🤝 Networking" },
    ],
    defaultValue: "keywords",
  },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const section = options?.section || "full";
  const industry = options?.industry || "general";
  const experienceLevel = options?.experienceLevel || "mid";
  const focus = options?.focus || "keywords";

  return `Optimize the LinkedIn ${section} section for a ${experienceLevel} professional in the ${industry} industry, with focus on ${focus}.

Include:
- SEO-optimized keywords that recruiters search for
- Compelling, professional language
- Strong action verbs and quantified achievements
- ATS-friendly formatting
- Industry-specific terminology
- Engaging storytelling elements

Current profile content:
${input}

Provide optimized LinkedIn content that will:
1. Increase profile visibility in recruiter searches
2. Showcase unique value proposition
3. Drive engagement and connection requests
4. Position as an industry expert

Optimized content:`;
};

const stats = [
  { value: "250K+", label: "Professionals", icon: Users },
  { value: "4.9/5", label: "Rating", icon: Star },
  { value: "<3min", label: "Optimize", icon: Clock },
];

const features = [
  {
    icon: Search,
    title: "SEO-Optimized Keywords",
    desc: "Include industry-specific keywords that recruiters and hiring managers actively search for on LinkedIn.",
  },
  {
    icon: TrendingUp,
    title: "ATS-Friendly Format",
    desc: "Content structured to pass Applicant Tracking Systems and rank higher in LinkedIn search results.",
  },
  {
    icon: Award,
    title: "Achievement-Focused",
    desc: "Highlight measurable accomplishments and unique value proposition that make you stand out.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Input Content",
    desc: "Paste your current LinkedIn section or describe your professional background",
    icon: Linkedin,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Select Options",
    desc: "Choose your industry, experience level, and optimization focus",
    icon: Target,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Optimized",
    desc: "Receive SEO-optimized, recruiter-friendly LinkedIn content instantly",
    icon: Award,
    color: "from-green-500 to-emerald-600",
  },
];

const testimonial = {
  text: "After optimizing my LinkedIn profile, I went from 2 profile views per week to over 50! I started getting contacted by recruiters from top tech companies within days. This tool is a game-changer for career advancement.",
  author: "Sarah Mitchell",
  role: "Senior Product Manager",
  initial: "S",
};

const relatedTools = [
  {
    name: "Resume Bullets",
    slug: "resume-bullets",
    icon: Target,
    color: "text-amber-600",
  },
  {
    name: "Cover Letter Writer",
    slug: "cover-letter-writer",
    icon: FileText,
    color: "text-yellow-600",
  },
  {
    name: "Interview Generator",
    slug: "interview-generator",
    icon: Briefcase,
    color: "text-orange-600",
  },
  {
    name: "Bio Generator",
    slug: "bio-generator",
    icon: Users,
    color: "text-purple-600",
  },
];

const faqs = [
  {
    question: "What is LinkedIn Profile Optimization and why is it important?",
    answer:
      "LinkedIn Profile Optimization is the process of enhancing your LinkedIn profile to increase visibility, attract recruiters, and showcase your professional brand effectively. It involves strategically incorporating industry-specific keywords, highlighting achievements with quantifiable results, using compelling language, and formatting content to be both human-readable and ATS-friendly. An optimized profile can increase your chances of being discovered by recruiters by up to 40x, as LinkedIn's algorithm prioritizes profiles with complete, keyword-rich content. It's crucial because over 90% of recruiters use LinkedIn to find candidates, and your profile is often the first impression you make on potential employers. A well-optimized profile positions you as an industry expert, increases connection requests from relevant professionals, and opens doors to career opportunities you might not find through traditional job boards. The key is to balance professional credibility with personal authenticity while ensuring your profile appears in relevant searches.",
  },
  {
    question: "How does the LinkedIn Optimizer tool work?",
    answer:
      "Our LinkedIn Optimizer uses advanced AI to analyze your current profile content and transform it into recruiter-friendly, SEO-optimized text. The tool first identifies your industry, experience level, and career goals, then researches the most effective keywords recruiters use when searching for professionals in your field. It restructures your content to lead with impact, using strong action verbs and quantified achievements that demonstrate value. The AI ensures your profile passes Applicant Tracking Systems (ATS) by using standard formatting and relevant terminology. For headlines, it creates attention-grabbing statements that showcase your unique value proposition. For About sections, it crafts compelling narratives that tell your professional story while naturally incorporating keywords. For Experience sections, it transforms job descriptions into achievement-focused bullet points. The tool also suggests strategic improvements like adding industry certifications, skills, and accomplishments that increase profile completeness scores. All optimizations follow LinkedIn's best practices to maximize visibility without appearing spammy or keyword-stuffed.",
  },
  {
    question: "Is this LinkedIn Optimizer tool free to use?",
    answer:
      "Yes, our LinkedIn Optimizer is completely free to use with no hidden fees or premium tiers required. You can optimize your headline, about section, experience sections, or entire profile as many times as you need without any cost. We believe that career advancement tools should be accessible to everyone, regardless of their financial situation. The tool provides professional-quality optimizations that you might otherwise pay hundreds of dollars for through career coaching services or professional LinkedIn profile writers. There are no limits on the number of optimizations you can generate, and you retain full ownership of all content created. We don't require credit card information or email registration to use the basic features. Our goal is to democratize access to career development resources and help professionals at all levels increase their visibility on LinkedIn. The tool saves your optimization history locally in your browser for convenience, but all data remains private and under your control. Future premium features may include personalized coaching or industry-specific templates, but the core optimization functionality will always remain free.",
  },
  {
    question: "What sections of my LinkedIn profile should I optimize first?",
    answer:
      "Start with your headline and About section, as these are the most critical for LinkedIn visibility and recruiter engagement. Your headline appears in search results and is limited to 220 characters, making it prime real estate for keywords and your value proposition. A strong headline should include your current role, key skills, and what makes you unique—avoid generic titles like 'Marketing Professional' and instead use 'Digital Marketing Strategist | SEO Expert | Driving 200% ROI Growth for B2B SaaS Companies.' Next, optimize your About section (formerly Summary), which allows 2,600 characters to tell your professional story. This is where you showcase personality, career highlights, core competencies, and what you're passionate about. After these, optimize your Experience section by transforming job descriptions into achievement-focused bullet points with quantified results. Also ensure your Skills section includes industry-specific keywords (you can add up to 50 skills). Profile completeness matters—LinkedIn profiles with complete information receive 21x more profile views. Don't forget to optimize your profile photo, background banner, and featured section. A complete, keyword-optimized profile ranks higher in recruiter searches and appears more credible to viewers.",
  },
  {
    question:
      "How do I use keywords effectively on LinkedIn to attract recruiters?",
    answer:
      "Effective keyword usage on LinkedIn requires strategic placement, natural integration, and industry relevance. Start by researching job descriptions in your target roles to identify frequently used skills, tools, certifications, and qualifications—these are what recruiters search for. Incorporate primary keywords in your headline, About section, and throughout your Experience sections, but avoid keyword stuffing which LinkedIn's algorithm penalizes. Use variations and related terms (e.g., 'project management,' 'PMP certified,' 'agile methodology') to capture different search queries. Place your most important keywords in the first 2-3 lines of your About section, as this appears in search previews. Include both hard skills (technical abilities like 'Python programming,' 'financial analysis') and soft skills ('leadership,' 'cross-functional collaboration'). Add keywords to your Skills section, as recruiters often filter by specific skills. Use them in job titles when accurate (e.g., 'Senior Data Analyst' not just 'Analyst'). Mention industry-specific tools, software, certifications, and methodologies relevant to your field. Update keywords periodically as industry trends evolve. Remember that LinkedIn's algorithm also considers engagement, so keywords should enhance readability, not replace compelling storytelling about your achievements and career journey.",
  },
  {
    question:
      "Will optimizing my LinkedIn profile help me get more recruiter views and job offers?",
    answer:
      "Yes, optimizing your LinkedIn profile significantly increases recruiter visibility and can directly lead to more job opportunities. Profiles with strategic keyword optimization appear up to 40 times more often in recruiter searches compared to generic profiles. LinkedIn data shows that profiles with complete information and regular activity receive 21x more profile views and 9x more connection requests. Recruiters use LinkedIn's search filters extensively, sorting by industry, skills, experience level, and location—an optimized profile matches these search criteria more effectively. When recruiters find your profile, compelling content and clear value proposition increase the likelihood they'll reach out. Many professionals report receiving 3-5x more InMail messages from recruiters within weeks of optimization. However, profile optimization is just one piece of career success—combine it with active networking, engaging with content, building authentic connections, and applying to positions directly. The most successful LinkedIn users post regularly, comment thoughtfully on industry discussions, and maintain an active presence. Think of your optimized profile as your 24/7 career advocate, working even when you're not actively job searching. It positions you for opportunities you might never discover otherwise, including roles that aren't publicly advertised. Many executive-level positions are filled through LinkedIn outreach, making optimization essential for career advancement.",
  },
];

const placeholders = [
  "Software Engineer | Full-Stack Developer | React, Node.js, Python Expert | Building Scalable Solutions",
  "About: Passionate marketing professional with 5+ years driving B2B growth. Led campaigns generating $2M+ revenue. Expertise in content strategy, SEO, and marketing automation. Seeking opportunities to help SaaS companies scale their customer acquisition.",
  "Current role: Product Manager at Tech Startup. 3 years experience launching mobile apps with 1M+ downloads. Strong in user research, agile methodology, and cross-functional team leadership.",
  "Sales professional with 7 years in enterprise B2B. Consistently exceeding quota by 150%. Expert in consultative selling, account management, and building C-suite relationships. Looking to join high-growth fintech company.",
  "Healthcare administrator with MBA and 10+ years hospital management experience. Led department transformations improving patient satisfaction by 40%. Skilled in operations optimization, budgeting, and regulatory compliance.",
  "Tech leader specializing in AI/ML solutions. Built data science teams at Fortune 500 companies. Open to remote CTO or VP Engineering roles. Passionate about using technology to solve complex business problems.",
];

export default function LinkedInOptimizerClient() {
  return (
    <PremiumToolWrapper
      toolName="LinkedIn Profile Optimizer"
      toolSlug="linkedin-optimizer"
      tagline="Get noticed by recruiters on LinkedIn"
      description="Optimize your LinkedIn profile with SEO keywords and compelling content that attracts opportunities and increases visibility."
      badge="Professional Branding"
      category="Career Tools"
      categorySlug="career-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={testimonial}
      relatedTools={relatedTools}
    >
      <EnhancedToolLayout
        toolSlug="linkedin-optimizer"
        toolName="LinkedIn Profile Optimizer"
        placeholder={
          placeholders[Math.floor(Math.random() * placeholders.length)]
        }
        promptTemplate={generatePrompt}
        inputRows={12}
        toolOptions={toolOptions}
        resultLabel="✨ Optimized LinkedIn Content"
        generateButtonText="🚀 Optimize Profile"
        inputLabel="💼 Current LinkedIn Content"
        showAdvancedOptions={true}
        maxHistoryItems={10}
        supportedFormats={["text", "markdown"]}
      />
      <FAQSection faqs={faqs} />
    </PremiumToolWrapper>
  );
}
