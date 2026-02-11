"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  Calendar,
  Clock,
  Target,
  BookOpen,
  Lightbulb,
  CheckSquare,
  Users,
  Star,
  Zap,
  CalendarDays,
  TrendingUp,
  LayoutGrid,
} from "lucide-react";

const toolOptions = [
  {
    id: "days",
    label: "Days Per Week",
    type: "select" as const,
    options: [
      { value: "5", label: "📅 5 Days (Weekdays)" },
      { value: "6", label: "📅 6 Days" },
      { value: "7", label: "📅 7 Days" },
    ] as const,
    defaultValue: "5",
  },
  {
    id: "format",
    label: "Format",
    type: "select" as const,
    options: [
      { value: "detailed", label: "📋 Detailed Schedule" },
      { value: "simple", label: "📝 Simple Overview" },
      { value: "blocks", label: "🧱 Time Blocks" },
    ] as const,
    defaultValue: "detailed",
  },
  {
    id: "includeBreaks",
    label: "Include Breaks",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const days = options?.days || "5";
  const format = options?.format || "detailed";
  const includeBreaks = options?.includeBreaks !== false;

  const formatStyles: Record<string, string> = {
    detailed:
      "Create a detailed schedule showing exact times, duration, and descriptions for each activity.",
    simple:
      "Create a simple overview listing main activities and their approximate times without excessive detail.",
    blocks:
      "Create a time block schedule organizing activities into morning, afternoon, and evening blocks with clear boundaries.",
  };

  return `Create a ${format} weekly timetable for ${days} days based on the following activities and preferences.

Format style: ${formatStyles[format]}
${includeBreaks ? "IMPORTANT: Include strategic short breaks (10-15 min) between activities to prevent fatigue and maintain productivity. Also schedule buffer time for transitions." : "Schedule activities continuously without break periods."}

Your timetable should:
1. **Balance**: Distribute activities evenly across the week
2. **Realism**: Consider energy levels throughout the day (harder tasks when fresh)
3. **Flexibility**: Leave some buffer time for unexpected events
4. **Consistency**: Keep similar activities at consistent times when possible
5. **Wellness**: Include time for meals, rest, and personal activities
6. **Productivity**: Group similar activities to minimize context switching

Consider:
- Morning hours (6 AM - 12 PM): Best for focused work and study
- Afternoon (12 PM - 5 PM): Good for meetings, lighter tasks, physical activities
- Evening (5 PM - 10 PM): Review, personal time, lighter activities
- Avoid overloading any single day
- Maintain work-life balance

Activities and preferences:
${input}

Create a well-organized, realistic timetable:`;
};

const stats = [
  { icon: Users, label: "380K+", sublabel: "Schedules Created" },
  { icon: Star, label: "4.8/5", sublabel: "User Rating" },
  { icon: Zap, label: "Organized", sublabel: "Life & Work" },
];

const features = [
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    description:
      "Choose 5, 6, or 7-day weeks with detailed, simple, or time-block formats to match your lifestyle.",
  },
  {
    icon: LayoutGrid,
    title: "Balanced Distribution",
    description:
      "Activities intelligently distributed across your week considering energy levels and productivity patterns.",
  },
  {
    icon: Clock,
    title: "Strategic Breaks",
    description:
      "Includes optimal break times and buffer periods to maintain energy and handle unexpected events.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "List Activities",
    desc: "Add everything you need to schedule",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Options",
    desc: "Choose days, format, and preferences",
    icon: Clock,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Schedule",
    desc: "Follow your organized timetable",
    icon: Calendar,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Timetable Generator?",
    answer:
      "The Timetable Generator is an AI-powered scheduling tool that creates balanced, realistic weekly timetables based on your activities, commitments, and preferences. It considers productivity patterns, energy levels, and work-life balance to organize your week optimally. Perfect for students, professionals, or anyone juggling multiple responsibilities.",
  },
  {
    question: "How detailed are the timetables?",
    answer:
      "Choose from three formats: Detailed Schedule (exact times and durations for each activity), Simple Overview (main activities with approximate times for quick reference), or Time Blocks (activities grouped into morning/afternoon/evening blocks). Select based on how much structure you need and your scheduling style.",
  },
  {
    question: "Can I include personal and work activities?",
    answer:
      "Absolutely! Include everything: study time, work hours, gym sessions, hobbies, social activities, meal times, sleep schedule, and more. The more complete your activity list, the better the timetable will balance your commitments. It works for students, professionals, parents, or anyone with a busy schedule.",
  },
  {
    question: "What's the difference between 5, 6, and 7 days?",
    answer:
      "5 Days schedules weekdays (Monday-Friday) leaving weekends free. 6 Days includes Saturday for activities requiring extra time. 7 Days creates a full week schedule including Sunday. Choose based on your commitment patterns - most students and professionals use 5-day schedules with dedicated weekend time for flexibility.",
  },
  {
    question: "How are breaks scheduled?",
    answer:
      "When enabled, the timetable includes strategic 10-15 minute breaks between activities to prevent fatigue and maintain productivity. It also adds buffer time for transitions and unexpected delays. Breaks are positioned based on activity intensity - more breaks after demanding tasks, fewer after lighter activities.",
  },
  {
    question: "Is the Timetable Generator free?",
    answer:
      "Yes! The Timetable Generator is completely free to use. Create unlimited weekly schedules for any purpose without any cost. Perfect for organizing study schedules, work routines, fitness plans, or balancing multiple commitments efficiently.",
  },
];

const relatedTools = [
  {
    name: "Revision Planner",
    slug: "revision-planner",
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    name: "Goal Planner",
    slug: "goal-planner",
    icon: Target,
    color: "text-purple-600",
  },
  {
    name: "Todo List",
    slug: "todo-list-generator",
    icon: CheckSquare,
    color: "text-green-600",
  },
  {
    name: "Notes Generator",
    slug: "notes-generator",
    icon: Lightbulb,
    color: "text-orange-600",
  },
];

export default function TimetableGeneratorClient() {
  return (
    <PremiumToolWrapper
      toolName="Timetable Generator"
      toolSlug="timetable-generator"
      tagline="Organize your week perfectly"
      description="Create balanced weekly schedules for studying, work, and personal activities. Intelligent time allocation with strategic breaks and realistic planning."
      badge="Time Manager"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "Finally got my chaotic schedule under control! The time blocks format works perfectly for balancing med school and personal life.",
        author: "Alex Turner",
        role: "Medical Student",
        initial: "A",
      }}
      relatedTools={relatedTools}
      ctaTitle="Create Your Timetable"
      ctaDescription="Time well spent starts with good planning. Organize your week now!"
      ctaButtonText="Generate Schedule"
      ctaIcon={Calendar}
    >
      <EnhancedToolLayout
        toolSlug="timetable-generator"
        toolName="Timetable Generator"
        placeholder={`📅 List your activities and preferences...

Examples:

• Study time: 4 hours daily for Mathematics and Physics (mornings preferred)
• Work: Part-time job 3-6 PM on weekdays
• Gym: 1 hour workout, 3 days a week (evening preferred)
• Classes: University lectures Monday, Wednesday, Friday 9 AM - 2 PM
• Hobbies: Guitar practice 30 min daily, Gaming 2 hours on weekends
• Personal: Meal prep Sundays, Family time Saturday evenings
• Sleep: 7-8 hours, prefer sleeping by 11 PM

OR

• Morning routine: 6-8 AM (workout, breakfast, prepare for day)
• Work: 9 AM - 5 PM Monday to Friday (desk job, remote)
• Lunch break: 1 hour
• Side project: 2 hours daily for app development
• Learning: 1 hour daily for Spanish lessons
• Free time: Reading, Netflix, friends

💡 Tip: Include time preferences (morning/evening), durations, and priorities for the most useful schedule!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📆 Your Weekly Timetable"
        generateButtonText="📅 Generate Timetable"
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
