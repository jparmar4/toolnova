"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  BookOpen,
  Brain,
  Lightbulb,
  Calculator,
  Calendar,
  Clock,
  Target,
  Users,
  Star,
  Zap,
  CheckCircle,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

const toolOptions = [
  {
    id: "duration",
    label: "Study Duration",
    type: "select" as const,
    options: [
      { value: "1week", label: "📅 1 Week" },
      { value: "2weeks", label: "📅 2 Weeks" },
      { value: "1month", label: "📅 1 Month" },
      { value: "3months", label: "📅 3 Months" },
    ] as const,
    defaultValue: "2weeks",
  },
  {
    id: "hoursPerDay",
    label: "Hours Per Day",
    type: "select" as const,
    options: [
      { value: "2", label: "⏰ 2 Hours" },
      { value: "4", label: "⏰ 4 Hours" },
      { value: "6", label: "⏰ 6 Hours" },
      { value: "8", label: "⏰ 8 Hours" },
    ] as const,
    defaultValue: "4",
  },
  {
    id: "includeBreaks",
    label: "Schedule Breaks",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const duration = options?.duration || "2weeks";
  const hoursPerDay = options?.hoursPerDay || "4";
  const includeBreaks = options?.includeBreaks !== false;

  const durationText: Record<string, string> = {
    "1week": "1 week",
    "2weeks": "2 weeks",
    "1month": "1 month",
    "3months": "3 months",
  };

  return `Create a comprehensive, day-by-day revision/study plan for the following subjects and topics.

Timeline: ${durationText[duration]}
Daily study time available: ${hoursPerDay} hours per day
${includeBreaks ? "IMPORTANT: Include strategic short breaks (5-10 min every hour) and rest days to prevent burnout and optimize retention." : "Focus on continuous study blocks without break scheduling."}

Your revision plan should include:

1. **Daily Breakdown**:
   - Specific topics/chapters to cover each day
   - Precise time allocation for each topic (be realistic)
   - Study session structure (e.g., 90-min blocks with breaks)

2. **Learning Strategy**:
   - Progressive difficulty (easier topics first to build confidence)
   - Spaced repetition (review previous material at intervals)
   - Active recall sessions (testing yourself, not just reading)

3. **Review & Practice**:
   - Dedicated review days for previously covered material
   - Practice problem/question sessions
   - Mock tests or self-assessment checkpoints

4. **Balance & Wellness**:
   - Rest days to consolidate learning
   - Buffer time for difficult topics
   - Final comprehensive review before exam/deadline

5. **Progress Tracking**:
   - Milestones to hit each week
   - Completion checkpoints
   - Suggested self-assessment points

Subjects/Topics to cover:
${input}

Create a detailed, realistic revision plan:`;
};

const stats = [
  { icon: Users, label: "450K+", sublabel: "Plans Created" },
  { icon: Star, label: "4.8/5", sublabel: "Success Rate" },
  { icon: Zap, label: "Structured", sublabel: "Study System" },
];

const features = [
  {
    icon: CalendarDays,
    title: "Day-by-Day Planning",
    description:
      "Get a complete daily breakdown with specific topics, time allocations, and review sessions structured for optimal learning.",
  },
  {
    icon: TrendingUp,
    title: "Spaced Repetition",
    description:
      "Built-in review sessions use proven spaced repetition techniques to maximize retention and long-term memory.",
  },
  {
    icon: CheckCircle,
    title: "Strategic Breaks",
    description:
      "Scientifically-timed breaks and rest days prevent burnout while keeping you productive and focused.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "List Topics",
    desc: "Enter all subjects and topics to study",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Schedule",
    desc: "Choose duration and daily hours",
    icon: Clock,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Plan",
    desc: "Receive structured study schedule",
    icon: Calendar,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Revision Planner?",
    answer:
      "The Revision Planner is an AI-powered study scheduler that creates personalized day-by-day revision plans based on your subjects, available time, and exam timeline. It uses proven learning techniques like spaced repetition and active recall to structure your study sessions for maximum retention and exam success.",
  },
  {
    question: "Can I customize the study hours?",
    answer:
      "Yes! Choose from 2, 4, 6, or 8 hours per day based on your availability and other commitments. The planner will intelligently distribute your topics across the available time, ensuring comprehensive coverage without overwhelming you. It also adjusts the depth and pace based on your chosen duration.",
  },
  {
    question: "Does it include revision time?",
    answer:
      "Absolutely! The plan incorporates spaced repetition - you'll review previously covered material at strategic intervals to strengthen retention. It also includes dedicated review days, practice sessions, and a final comprehensive review period. This ensures you're not just learning new content but actually remembering it.",
  },
  {
    question: "What if I have multiple subjects?",
    answer:
      "Perfect! List all your subjects with their topics (like 'Mathematics: Calculus, Algebra; Physics: Mechanics, Thermodynamics'). The planner will distribute study time appropriately across subjects, alternate between them to prevent fatigue, and ensure all topics receive adequate coverage before your deadline.",
  },
  {
    question: "How does it handle different durations?",
    answer:
      "The planner adapts to your timeline: 1 Week (intensive, focused on essentials), 2 Weeks (balanced, covers main topics thoroughly), 1 Month (comprehensive, includes deep practice), 3 Months (thorough, allows multiple review cycles and mastery). Choose based on when your exam is and how much preparation you need.",
  },
  {
    question: "Is the Revision Planner free?",
    answer:
      "Yes! The Revision Planner is completely free to use. Create unlimited study plans for any exam or learning goal without any cost. Perfect for students preparing for finals, professionals studying for certifications, or anyone with a structured learning objective.",
  },
];

const relatedTools = [
  {
    name: "Notes Generator",
    slug: "notes-generator",
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    name: "Quiz Generator",
    slug: "quiz-generator",
    icon: Lightbulb,
    color: "text-green-600",
  },
  {
    name: "Flashcard Maker",
    slug: "flashcard-maker",
    icon: Brain,
    color: "text-purple-600",
  },
  {
    name: "Chapter Summary",
    slug: "chapter-summary",
    icon: Calculator,
    color: "text-orange-600",
  },
];

export default function RevisionPlannerClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Revision Planner"
      toolSlug="revision-planner"
      tagline="Create your perfect study schedule"
      description="Generate personalized day-by-day revision plans with spaced repetition, strategic breaks, and comprehensive coverage based on your timeline and subjects."
      badge="Study Scheduler"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "Used this to plan my CPA exam prep. Having a clear daily plan with built-in review sessions kept me on track for 3 months straight. Passed on first attempt!",
        author: "Jennifer Wu",
        role: "Accounting Graduate",
        initial: "J",
      }}
      relatedTools={relatedTools}
      ctaTitle="Plan Your Success"
      ctaDescription="A structured plan is half the battle won. Start your organized study journey!"
      ctaButtonText="Create Plan"
      ctaIcon={Calendar}
    >
      <EnhancedToolLayout
        toolSlug="revision-planner"
        toolName="Revision Planner"
        placeholder={`📚 List the subjects and topics you need to study...

Examples:

• Mathematics: Calculus (derivatives, integrals, limits), Linear Algebra (matrices, vectors), Statistics (probability, distributions)

• Physics: Mechanics (kinematics, dynamics, energy), Thermodynamics (laws, entropy), Optics (reflection, refraction, lenses)

• Chemistry: Organic Chemistry (nomenclature, reactions, mechanisms), Inorganic Chemistry (periodic trends, bonding), Physical Chemistry (thermodynamics, kinetics)

• Biology: Cell Biology (structure, organelles), Genetics (DNA, inheritance), Ecology (ecosystems, populations)

• History: World War II (causes, major events, consequences), Cold War era (1945-1991, key conflicts)

• Computer Science: Data Structures (arrays, trees, graphs), Algorithms (sorting, searching), Object-Oriented Programming (classes, inheritance)

💡 Tip: List all subjects with specific topics/chapters for a more detailed and accurate revision schedule!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📅 Your Revision Plan"
        generateButtonText="📆 Create Study Plan"
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
