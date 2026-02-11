"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  CheckSquare,
  Calendar,
  Target,
  Lightbulb,
  Clock,
  List,
  Users,
  Star,
  Zap,
  TrendingUp,
  ListChecks,
  Sparkles,
} from "lucide-react";

const toolOptions = [
  {
    id: "category",
    label: "Category",
    type: "select" as const,
    options: [
      { value: "work", label: "💼 Work" },
      { value: "personal", label: "🏠 Personal" },
      { value: "study", label: "📚 Study" },
      { value: "project", label: "🚀 Project" },
      { value: "mixed", label: "🎯 Mixed" },
    ] as const,
    defaultValue: "mixed",
  },
  {
    id: "priority",
    label: "Add Priorities",
    type: "toggle" as const,
    defaultValue: true,
  },
  {
    id: "timeEstimates",
    label: "Time Estimates",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const category = options?.category || "mixed";
  const priority = options?.priority !== false;
  const timeEstimates = options?.timeEstimates !== false;

  const categoryGuidance: Record<string, string> = {
    work: "Focus on professional tasks, meetings, deliverables, and work-related priorities.",
    personal:
      "Focus on household tasks, errands, self-care, and personal responsibilities.",
    study:
      "Focus on academic tasks, assignments, reading, research, and study sessions.",
    project:
      "Focus on project deliverables, phases, tasks, and milestone-related activities.",
    mixed:
      "Include a balanced mix of different types of tasks across various life areas.",
  };

  return `Create an organized, actionable todo list for ${category} tasks.
${priority ? "Assign priority levels (High, Medium, Low) to each task based on urgency and importance." : ""}
${timeEstimates ? "Include realistic time estimates for completing each task (e.g., 15 min, 1 hour, 2 hours)." : ""}

Category guidance: ${categoryGuidance[category]}

Requirements:
1. Break down larger goals/projects into smaller, actionable tasks
2. Organize tasks logically (by priority, sequence, or category)
3. Make each task specific and actionable (starts with action verb)
4. Include sub-tasks for complex items when needed
5. Group related tasks together
6. Ensure tasks are concrete and achievable
${priority ? "7. Use High priority for urgent/important, Medium for important but not urgent, Low for nice-to-have" : ""}
${timeEstimates ? "8. Provide realistic time estimates based on task complexity" : ""}

Tasks/Goals/Projects to organize:
${input}

Create a comprehensive, well-organized todo list:`;
};

const stats = [
  { icon: Users, label: "420K+", sublabel: "Lists Created" },
  { icon: Star, label: "4.8/5", sublabel: "User Rating" },
  { icon: Zap, label: "Organized", sublabel: "Productivity" },
];

const features = [
  {
    icon: ListChecks,
    title: "Smart Task Breakdown",
    description:
      "Automatically breaks down large goals into smaller, manageable, actionable tasks you can start immediately.",
  },
  {
    icon: Target,
    title: "Priority Levels",
    description:
      "Assigns High, Medium, or Low priority to each task based on urgency and importance for better focus.",
  },
  {
    icon: Clock,
    title: "Time Estimates",
    description:
      "Provides realistic time estimates for each task to help you plan your day and manage time effectively.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "List Goals",
    desc: "Describe what needs to be done",
    icon: List,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Options",
    desc: "Choose category, priorities, and time estimates",
    icon: Clock,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Organized",
    desc: "Receive structured list and start checking off!",
    icon: CheckSquare,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Todo List Generator?",
    answer:
      "The Todo List Generator is an AI-powered productivity tool that transforms your goals, projects, and vague ideas into organized, actionable todo lists. It breaks down complex objectives into specific tasks, assigns priorities, estimates time requirements, and structures everything for maximum productivity. Perfect for work projects, personal goals, study plans, or any area where you need to get things done.",
  },
  {
    question: "How are tasks prioritized?",
    answer:
      "When priorities are enabled, tasks are assigned High (urgent and important - do these first), Medium (important but not urgent - schedule these), or Low (nice-to-have - do when time permits) levels. The AI considers urgency, importance, dependencies, and impact when assigning priorities to help you focus on what matters most.",
  },
  {
    question: "Are time estimates accurate?",
    answer:
      "Time estimates are based on typical task complexity and provide reasonable benchmarks (e.g., 15 min for quick tasks, 1-2 hours for moderate tasks, half-day for complex tasks). They're meant as guidelines you can adjust based on your own pace, experience level, and working style. Use them for planning and time-blocking your day.",
  },
  {
    question: "What task categories are available?",
    answer:
      "Choose from five categories: Work (professional tasks and deliverables), Personal (household and life tasks), Study (academic assignments and learning), Project (specific project deliverables), or Mixed (combination across life areas). Each category influences how tasks are organized and prioritized.",
  },
  {
    question: "How does task breakdown work?",
    answer:
      "The AI analyzes your input and breaks large goals or vague objectives into specific, actionable tasks. For example, 'Launch website' becomes: create content, design pages, set up hosting, configure domain, test functionality, etc. Each task starts with an action verb and is concrete enough to complete in one session.",
  },
  {
    question: "Is the Todo List Generator free?",
    answer:
      "Yes! The Todo List Generator is completely free to use. Create unlimited todo lists for any purpose without any cost. Perfect for busy professionals, students, project managers, or anyone who wants to stay organized and productive with clear, actionable task lists.",
  },
];

const relatedTools = [
  {
    name: "Timetable Generator",
    slug: "timetable-generator",
    icon: Calendar,
    color: "text-blue-600",
  },
  {
    name: "Goal Planner",
    slug: "goal-planner",
    icon: Target,
    color: "text-purple-600",
  },
  {
    name: "Revision Planner",
    slug: "revision-planner",
    icon: Lightbulb,
    color: "text-green-600",
  },
  {
    name: "Notes Generator",
    slug: "notes-generator",
    icon: List,
    color: "text-orange-600",
  },
];

export default function TodoListGeneratorClient() {
  return (
    <PremiumToolWrapper
      toolName="Todo List Generator"
      toolSlug="todo-list-generator"
      tagline="Turn goals into actionable tasks"
      description="Create organized, prioritized todo lists with time estimates. Break down projects into manageable tasks and boost your productivity!"
      badge="Productivity Boost"
      category="Career Tools"
      categorySlug="career-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "This breaks down my overwhelming projects into manageable tasks. Game changer for productivity! I actually finish what I start now.",
        author: "Mike Johnson",
        role: "Project Manager",
        initial: "M",
      }}
      relatedTools={relatedTools}
      ctaTitle="Get Things Done"
      ctaDescription="Organize your tasks and accomplish more every day!"
      ctaButtonText="Create Todo List"
      ctaIcon={CheckSquare}
    >
      <EnhancedToolLayout
        toolSlug="todo-list-generator"
        toolName="Todo List Generator"
        placeholder={`📋 Describe your goals, projects, or what you need to accomplish...

Examples:

Work Project:
Launch new marketing website by end of month
- Need to finalize design mockups
- Write all page content (homepage, about, services, contact)
- Set up hosting and domain
- Implement SEO best practices
- Test on mobile devices
- Get stakeholder approval

Personal Goals:
Organize and clean home office
- Sort through old papers and files
- Organize desk drawers and supplies
- Clean computer cables and setup
- Donate unused items
- Paint walls and add decorations

Study Tasks:
Prepare for final exams next week
- Review chapters 1-10 of biology textbook
- Complete practice problems for calculus
- Create study notes for history
- Attend review sessions
- Form study group with classmates

Project Launch:
Complete online course platform MVP
- Design user dashboard
- Build authentication system
- Create course upload functionality
- Implement video player
- Add payment integration
- Write documentation

Mixed Daily Tasks:
Tomorrow's schedule: Work presentation, gym, grocery shopping, call mom, finish report, meal prep for week, respond to emails, pay bills

💡 Tip: Include all tasks, big or small - the AI will organize and prioritize everything for you!`}
        inputRows={12}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="✅ Your Organized Todo List"
        generateButtonText="📝 Generate Todo List"
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
