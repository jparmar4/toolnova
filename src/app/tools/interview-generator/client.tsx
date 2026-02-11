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
  Users,
  MessageCircle,
  Star,
  Zap,
  CheckCircle,
  TrendingUp,
  HelpCircle,
} from "lucide-react";

const toolOptions = [
  {
    id: "roleType",
    label: "Role Type",
    type: "select" as const,
    options: [
      { value: "technical", label: "💻 Technical" },
      { value: "behavioral", label: "🤝 Behavioral" },
      { value: "managerial", label: "👔 Managerial" },
      { value: "creative", label: "🎨 Creative" },
      { value: "general", label: "📋 General" },
    ] as const,
    defaultValue: "general",
  },
  {
    id: "difficulty",
    label: "Difficulty",
    type: "select" as const,
    options: [
      { value: "entry", label: "🌱 Entry Level" },
      { value: "mid", label: "📈 Mid Level" },
      { value: "senior", label: "🎯 Senior Level" },
    ] as const,
    defaultValue: "mid",
  },
  {
    id: "includeAnswers",
    label: "Include Sample Answers",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const roleType = options?.roleType || "general";
  const difficulty = options?.difficulty || "mid";
  const includeAnswers = options?.includeAnswers !== false;

  const roleGuidance: Record<string, string> = {
    technical:
      "Focus on coding problems, system design, algorithms, technical concepts, and problem-solving abilities.",
    behavioral:
      "Focus on past experiences, teamwork, conflict resolution, leadership, and soft skills using STAR method.",
    managerial:
      "Focus on leadership style, team management, strategic thinking, decision-making, and people management.",
    creative:
      "Focus on portfolio, creative process, design thinking, innovation, and project examples.",
    general:
      "Include a balanced mix covering experience, skills, motivation, and cultural fit.",
  };

  return `Generate 10 ${roleType} interview questions appropriate for ${difficulty} level positions.
${includeAnswers ? "For each question, provide a strong sample answer using the STAR method (Situation, Task, Action, Result) where applicable. Make answers specific and include metrics/outcomes." : "Only provide the questions without answers."}

Question type guidance: ${roleGuidance[roleType]}

Requirements:
1. Mix of common and challenging questions
2. Questions specific to the role/industry mentioned
3. Progressive difficulty (easier to harder)
4. Include questions that reveal candidate's thinking process
${includeAnswers ? "5. Sample answers should be 100-150 words each\n6. Include tips for answering each question effectively" : "5. Provide brief tips on what interviewers look for"}

Job/Role details:
${input}

Generate the interview questions${includeAnswers ? " with detailed sample answers" : ""}:`;
};

const stats = [
  { icon: Users, label: "320K+", sublabel: "Interviews Prepped" },
  { icon: Star, label: "4.9/5", sublabel: "Success Rate" },
  { icon: Zap, label: "10 Questions", sublabel: "Per Session" },
];

const features = [
  {
    icon: Target,
    title: "Role-Specific Questions",
    description:
      "Get technical, behavioral, managerial, creative, or general questions tailored to your target position.",
  },
  {
    icon: CheckCircle,
    title: "STAR Method Answers",
    description:
      "Sample answers using the proven STAR framework with specific examples and measurable results.",
  },
  {
    icon: TrendingUp,
    title: "Level-Appropriate",
    description:
      "Questions matched to entry, mid, or senior level expectations with appropriate difficulty and depth.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Role",
    desc: "Describe the position you're interviewing for",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Options",
    desc: "Choose question type and difficulty",
    icon: Target,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Practice",
    desc: "Review questions and ace your interview",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Interview Question Generator?",
    answer:
      "The Interview Question Generator is an AI-powered interview prep tool that creates role-specific, level-appropriate interview questions with optional sample answers. It helps job candidates prepare for technical, behavioral, managerial, creative, or general interviews by providing realistic questions they're likely to face, complete with STAR-method answers and expert tips.",
  },
  {
    question: "What's the STAR method?",
    answer:
      "STAR stands for Situation, Task, Action, Result - a proven framework for answering behavioral interview questions. Situation: describe the context. Task: explain what needed to be done. Action: detail what YOU specifically did. Result: share the measurable outcome. This method helps you give structured, compelling answers that demonstrate your capabilities with concrete examples.",
  },
  {
    question: "How many questions do I get?",
    answer:
      "You receive 10 carefully selected interview questions tailored to your role and experience level. Questions range from common interview queries to more challenging, role-specific ones. When sample answers are enabled, each question includes a detailed response with tips on what interviewers look for. You can generate multiple sets for comprehensive preparation.",
  },
  {
    question: "What role types are available?",
    answer:
      "Choose from five types: Technical (coding, system design, problem-solving), Behavioral (past experiences, soft skills, teamwork), Managerial (leadership, team management, strategy), Creative (portfolio, design process, innovation), or General (balanced mix covering all aspects). Each type focuses on questions relevant to that interview format.",
  },
  {
    question: "How do difficulty levels work?",
    answer:
      "Entry Level questions focus on education, basic skills, potential, and learning ability. Mid Level emphasizes proven experience, specific accomplishments, and technical depth. Senior Level questions probe leadership, strategic thinking, complex problem-solving, and industry expertise. The AI adjusts question complexity and expected answer depth accordingly.",
  },
  {
    question: "Is the Interview Generator free?",
    answer:
      "Yes! The Interview Question Generator is completely free to use. Generate unlimited question sets for any role or interview type without any cost. Perfect for job seekers, career changers, or anyone preparing for important interviews who wants to practice with realistic questions.",
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
    name: "Resume Bullets",
    slug: "resume-bullets",
    icon: Target,
    color: "text-purple-600",
  },
  {
    name: "Goal Planner",
    slug: "goal-planner",
    icon: Lightbulb,
    color: "text-green-600",
  },
  {
    name: "Email Writer",
    slug: "email-writer",
    icon: MessageCircle,
    color: "text-orange-600",
  },
];

export default function InterviewGeneratorClient() {
  return (
    <PremiumToolWrapper
      toolName="Interview Question Generator"
      toolSlug="interview-generator"
      tagline="Prepare for any interview with confidence"
      description="Get role-specific interview questions with expert sample answers using the STAR method. Practice makes perfect!"
      badge="Interview Prep"
      category="Career Tools"
      categorySlug="career-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "Practiced with these questions the night before and nailed my Google interview! The STAR method answers were incredibly helpful. Got the offer!",
        author: "Mike Chen",
        role: "Software Engineer",
        initial: "M",
      }}
      relatedTools={relatedTools}
      ctaTitle="Ace Your Interview"
      ctaDescription="Confidence comes from preparation. Start practicing now!"
      ctaButtonText="Generate Questions"
      ctaIcon={HelpCircle}
    >
      <EnhancedToolLayout
        toolSlug="interview-generator"
        toolName="Interview Question Generator"
        placeholder={`💼 Describe the role you're interviewing for...

Examples:

Position: Software Engineer at a fintech startup
Tech stack: React, Node.js, PostgreSQL, AWS
Team size: 15 engineers
Responsibilities: Building payment processing features, API development, code reviews
Company: Fast-growing startup (Series B), focus on innovation

OR

Position: Marketing Manager at Fortune 500 company
Industry: Consumer electronics
Team: Managing 8 direct reports
Responsibilities: Campaign strategy, brand management, budget oversight ($5M), cross-functional collaboration
Focus: Digital transformation and growth initiatives

OR

Position: Senior Product Designer at design agency
Specialization: UX/UI for mobile apps
Experience needed: 5+ years, portfolio review required
Tools: Figma, Sketch, prototyping, user research
Projects: E-commerce and SaaS products

💡 Tip: Include role details, tech stack, team size, and key responsibilities for the most relevant questions!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📋 Interview Questions & Answers"
        generateButtonText="🎯 Generate Questions"
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
