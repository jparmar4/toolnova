"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  Target,
  Calendar,
  Rocket,
  CheckCircle,
  Lightbulb,
  Trophy,
  Users,
  Star,
  Zap,
  TrendingUp,
  Award,
  Sparkles,
} from "lucide-react";

const toolOptions = [
  {
    id: "category",
    label: "Goal Category",
    type: "select" as const,
    options: [
      { value: "career", label: "💼 Career" },
      { value: "personal", label: "🌟 Personal Growth" },
      { value: "fitness", label: "💪 Health & Fitness" },
      { value: "financial", label: "💰 Financial" },
      { value: "learning", label: "📚 Learning" },
    ] as const,
    defaultValue: "career",
  },
  {
    id: "timeframe",
    label: "Timeframe",
    type: "select" as const,
    options: [
      { value: "30days", label: "📅 30 Days" },
      { value: "90days", label: "📅 90 Days" },
      { value: "6months", label: "📅 6 Months" },
      { value: "1year", label: "📅 1 Year" },
    ] as const,
    defaultValue: "90days",
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const category = options?.category || "career";
  const timeframe = options?.timeframe || "90days";

  const timeframeText: Record<string, string> = {
    "30days": "30 days (1 month)",
    "90days": "90 days (3 months)",
    "6months": "6 months",
    "1year": "1 year",
  };

  const categoryGuidance: Record<string, string> = {
    career:
      "Focus on professional development, skill acquisition, promotions, projects, networking, and career milestones.",
    personal:
      "Focus on habits, relationships, mindfulness, hobbies, personal development, and life satisfaction.",
    fitness:
      "Focus on exercise routines, nutrition, physical achievements, health markers, and wellness habits.",
    financial:
      "Focus on savings, investments, debt reduction, income growth, budgeting, and financial literacy.",
    learning:
      "Focus on skills acquisition, courses, certifications, reading, practice projects, and knowledge milestones.",
  };

  return `Create a comprehensive SMART goal plan for the following ${category} goal to be achieved in ${timeframeText[timeframe]}.

Category guidance: ${categoryGuidance[category]}

Your plan should include:

1. **SMART Goal Breakdown**:
   - Specific: Clearly define what will be accomplished
   - Measurable: Include concrete metrics and KPIs
   - Achievable: Realistic given the timeframe and resources
   - Relevant: Aligned with broader objectives
   - Time-bound: Clear deadline and milestones

2. **Milestone Timeline**:
   - Break down into weekly or monthly checkpoints
   - Include specific deliverables for each milestone
   - Set realistic dates for each phase

3. **Action Items**:
   - List 5-10 specific, actionable steps
   - Prioritize by importance and sequence
   - Include daily/weekly habits if applicable
   - Assign time estimates where relevant

4. **Success Metrics**:
   - Define how progress will be measured
   - Set quantifiable targets
   - Include tracking methods

5. **Potential Obstacles**:
   - Identify 3-5 likely challenges
   - Provide solutions or mitigation strategies for each
   - Include contingency plans

6. **Resources Needed**:
   - Tools, materials, or support required
   - Budget considerations if applicable
   - Learning resources or mentors

7. **Motivation Strategies**:
   - Rewards for hitting milestones
   - Accountability methods
   - Visual tracking or progress celebration ideas

Goal to plan:
${input}

Create a detailed, actionable SMART goal plan:`;
};

const stats = [
  { icon: Users, label: "280K+", sublabel: "Goals Achieved" },
  { icon: Star, label: "4.8/5", sublabel: "Success Rate" },
  { icon: Zap, label: "SMART", sublabel: "Framework" },
];

const features = [
  {
    icon: Target,
    title: "SMART Goal Framework",
    description:
      "Create Specific, Measurable, Achievable, Relevant, and Time-bound goals with structured planning.",
  },
  {
    icon: TrendingUp,
    title: "Milestone Tracking",
    description:
      "Break down big goals into manageable milestones with clear checkpoints and progress indicators.",
  },
  {
    icon: CheckCircle,
    title: "Action-Oriented Plans",
    description:
      "Get specific action items, success metrics, obstacle solutions, and motivation strategies.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "State Goal",
    desc: "Describe what you want to achieve",
    icon: Target,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Timeline",
    desc: "Choose category and timeframe",
    icon: Calendar,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Plan",
    desc: "Receive your actionable roadmap",
    icon: Rocket,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Goal Planner?",
    answer:
      "The Goal Planner is an AI-powered tool that transforms your aspirations into structured, actionable plans using the SMART framework. It creates comprehensive roadmaps with milestones, action items, success metrics, obstacle solutions, and motivation strategies. Perfect for career goals, personal development, fitness targets, financial objectives, or learning ambitions.",
  },
  {
    question: "What's a SMART goal?",
    answer:
      "SMART is the gold standard for goal setting: Specific (clearly defined), Measurable (with concrete metrics), Achievable (realistic and attainable), Relevant (aligned with broader objectives), and Time-bound (with clear deadlines). This framework dramatically increases the likelihood of goal achievement by providing structure and accountability.",
  },
  {
    question: "What goal categories are available?",
    answer:
      "Choose from five categories: Career (promotions, skills, projects), Personal Growth (habits, relationships, development), Health & Fitness (exercise, nutrition, wellness), Financial (savings, investments, debt reduction), or Learning (skills, courses, certifications). Each category provides tailored guidance and relevant metrics.",
  },
  {
    question: "How detailed is the plan?",
    answer:
      "Very detailed! Each plan includes: SMART goal breakdown, milestone timeline with dates, 5-10 specific action items, success metrics and KPIs, potential obstacles with solutions, required resources, and motivation strategies. You get everything needed to turn your goal from dream to reality.",
  },
  {
    question: "What timeframes can I choose?",
    answer:
      "Select from four timeframes: 30 Days (for quick wins and habit formation), 90 Days (ideal for substantial progress), 6 Months (for significant transformations), or 1 Year (for major life changes). The plan adjusts milestone frequency and action item pacing based on your chosen timeline.",
  },
  {
    question: "Is the Goal Planner free?",
    answer:
      "Yes! The Goal Planner is completely free to use. Create unlimited goal plans for any objective without any cost. Perfect for ambitious individuals, career professionals, students, or anyone serious about achieving their goals with a structured, proven approach.",
  },
];

const relatedTools = [
  {
    name: "Revision Planner",
    slug: "revision-planner",
    icon: Calendar,
    color: "text-blue-600",
  },
  {
    name: "Todo List",
    slug: "todo-list-generator",
    icon: CheckCircle,
    color: "text-purple-600",
  },
  {
    name: "Interview Prep",
    slug: "interview-generator",
    icon: Lightbulb,
    color: "text-green-600",
  },
  {
    name: "Cover Letter",
    slug: "cover-letter-writer",
    icon: Trophy,
    color: "text-orange-600",
  },
];

export default function GoalPlannerClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Goal Planner"
      toolSlug="goal-planner"
      tagline="Turn dreams into actionable plans"
      description="Create SMART goal plans with milestones, action items, success metrics, and progress tracking strategies. Achieve what matters most!"
      badge="Achievement Unlock"
      category="Career Tools"
      categorySlug="career-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "This helped me create a 90-day plan that actually worked. Got promoted ahead of schedule! The milestone tracking kept me accountable.",
        author: "David Park",
        role: "Senior Developer",
        initial: "D",
      }}
      relatedTools={relatedTools}
      ctaTitle="Plan Your Success"
      ctaDescription="A goal without a plan is just a wish. Start achieving today!"
      ctaButtonText="Create Plan"
      ctaIcon={Rocket}
    >
      <EnhancedToolLayout
        toolSlug="goal-planner"
        toolName="Goal Planner"
        placeholder={`🎯 Describe your goal in detail...

Examples:

Career Goal:
Get promoted to Senior Engineer within 6 months by demonstrating technical leadership, completing 2 major projects, and obtaining AWS certification

Personal Growth Goal:
Build a daily meditation habit and improve mental clarity by practicing 20 minutes daily for 90 days, reading 3 books on mindfulness, and joining a meditation community

Fitness Goal:
Run a half marathon (21km) in 3 months by following a structured training plan, running 4x per week, improving pace to sub-6 min/km, and maintaining proper nutrition

Financial Goal:
Save $10,000 for home down payment in 1 year by cutting unnecessary expenses, starting a side freelance business, automating savings, and investing $500 monthly

Learning Goal:
Learn conversational Spanish in 6 months by completing Duolingo course, practicing with native speakers 3x/week, watching Spanish shows, and passing DELE A2 exam

💡 Tip: Include specific targets, metrics, and context for the most comprehensive action plan!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📋 Your SMART Goal Plan"
        generateButtonText="🚀 Create Goal Plan"
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
