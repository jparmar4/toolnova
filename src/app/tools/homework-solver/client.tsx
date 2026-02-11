"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { HomeworkResultFormatter } from "@/components/HomeworkResultFormatter";
import {
  BookOpen,
  Brain,
  Calculator,
  Clock,
  GraduationCap,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
  Lightbulb,
  Award,
} from "lucide-react";

const systemPrompt = `You are a patient, encouraging tutor helping students learn step-by-step.

OUTPUT RULES:
- Use the exact structure requested in the user prompt (with emoji section labels: 🎯, 📝, ✅, 💡, etc.)
- Do NOT use a generic FINAL ANSWER/WORKING/QUICK CHECK format
- Output can be as long as needed to properly explain the solution (ignore any line limits)
- Use clear formatting with blank lines between sections
- Number each step clearly (Step 1, Step 2, etc.)
- Explain WHY each step works, not just HOW

TEACHING APPROACH:
- Use warm, encouraging language
- Break down complex problems into simple steps
- Include verification and practice problems when requested
- Keep explanations clear and accessible for the specified grade level`;

const toolOptions = [
  {
    id: "subject",
    label: "Subject Area",
    type: "select" as const,
    options: [
      { value: "math", label: "🔢 Mathematics" },
      { value: "physics", label: "⚛️ Physics" },
      { value: "chemistry", label: "🧪 Chemistry" },
      { value: "biology", label: "🧬 Biology" },
      { value: "history", label: "📜 History" },
      { value: "english", label: "📖 English/Literature" },
      { value: "programming", label: "💻 Programming" },
      { value: "economics", label: "📊 Economics" },
      { value: "geography", label: "🌍 Geography" },
      { value: "general", label: "📚 General" },
    ],
    defaultValue: "general",
  },
  {
    id: "gradeLevel",
    label: "Grade Level",
    type: "select" as const,
    options: [
      { value: "elementary", label: "🎒 Elementary School" },
      { value: "middle", label: "📓 Middle School" },
      { value: "high", label: "🎓 High School" },
      { value: "college", label: "🏛️ College/University" },
    ],
    defaultValue: "high",
  },
  {
    id: "explanation",
    label: "Explanation Style",
    type: "select" as const,
    options: [
      { value: "detailed", label: "📝 Detailed Step-by-Step" },
      { value: "concise", label: "⚡ Concise Answer" },
      { value: "eli5", label: "🧒 Explain Like I'm 5" },
      { value: "visual", label: "📊 With Visual Explanations" },
    ],
    defaultValue: "detailed",
  },
  {
    id: "includeExamples",
    label: "Include Practice Problems",
    type: "toggle" as const,
    defaultValue: true,
  },
  {
    id: "showFormulas",
    label: "Show Relevant Formulas",
    type: "toggle" as const,
    defaultValue: true,
  },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const subject = options?.subject || "general";
  const gradeLevel = options?.gradeLevel || "high";
  const explanation = options?.explanation || "detailed";
  const includeExamples = options?.includeExamples ?? true;
  const showFormulas = options?.showFormulas ?? true;

  const gradeLevelContext: Record<string, string> = {
    elementary:
      "Use simple language appropriate for elementary school students (ages 6-11). Focus on basic concepts with relatable examples.",
    middle:
      "Use clear language for middle school students (ages 11-14). Introduce intermediate concepts with practical examples.",
    high: "Use sophisticated language for high school students (ages 14-18). Cover advanced topics with detailed explanations.",
    college:
      "Use academic language for college/university level. Provide in-depth analysis and complex problem-solving.",
  };

  const explanationStyles: Record<string, string> = {
    detailed:
      "Provide comprehensive step-by-step explanations with detailed reasoning for each step.",
    concise: "Give a clear, direct solution with essential steps only.",
    eli5: "Explain in the simplest terms possible, as if teaching a 5-year-old. Use analogies and simple examples.",
    visual:
      "Include descriptions of diagrams, charts, or visual representations to illustrate concepts.",
  };

  let prompt = `You are helping a ${gradeLevel} student with their homework.

📚 Subject: ${subject}
📝 Grade Level: ${gradeLevelContext[gradeLevel]}
🎯 Explanation Style: ${explanationStyles[explanation]}

Problem: ${input}

Please provide a solution using this EXACT structure (use these emoji labels):

🎯 **ANSWER:**
[Provide the final answer here clearly]

📝 **STEP-BY-STEP SOLUTION:**
Step 1: [First step with explanation]
Step 2: [Second step with explanation]
Step 3: [Continue as needed...]
[Explain WHY each step works, not just HOW]

✅ **VERIFICATION:**
[Show how to check if the answer is correct]
`;

  if (showFormulas && ["math", "physics", "chemistry"].includes(subject)) {
    prompt += `
📐 **KEY FORMULAS/CONCEPTS:**
[List relevant formulas or key concepts used]
`;
  }

  if (includeExamples) {
    prompt += `
💡 **PRACTICE PROBLEMS:**
[Provide 1-2 similar practice problems for the student to try]
`;
  }

  prompt += `
🌟 **PRO TIP:**
[One helpful tip for mastering this type of problem]

Remember: Be encouraging, patient, and focus on teaching understanding, not just providing answers.`;

  return prompt;
};

const stats = [
  { value: "100K+", label: "Problems Solved", icon: Calculator },
  { value: "4.9/5", label: "Student Rating", icon: Star },
  { value: "<2 min", label: "Avg Response", icon: Clock },
];

const features = [
  {
    icon: Brain,
    title: "Step-by-Step Solutions",
    description:
      "Get detailed explanations that help you understand the problem, not just the answer",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Multiple Subjects",
    description:
      "Support for Math, Science, History, English, Programming, and more subjects across all grade levels",
    gradient: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
  },
  {
    icon: Lightbulb,
    title: "Practice Problems",
    description:
      "Receive similar practice problems to reinforce your learning and build confidence",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Your Problem",
    desc: "Type or paste your homework question",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Set Preferences",
    desc: "Choose subject, grade level, and explanation style",
    icon: Target,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Solution",
    desc: "Receive structured, verified step-by-step answer",
    icon: Award,
    color: "from-green-500 to-emerald-600",
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
    name: "MCQ Generator",
    slug: "mcq-generator",
    icon: Target,
    color: "text-purple-600",
  },
  {
    name: "Formula Generator",
    slug: "formula-generator",
    icon: Calculator,
    color: "text-green-600",
  },
  {
    name: "Concept Explainer",
    slug: "concept-explainer",
    icon: Lightbulb,
    color: "text-orange-600",
  },
];

const faqs = [
  {
    question: "How does the homework solver work?",
    answer:
      "Our AI analyzes your problem, breaks it down into steps, and provides detailed explanations. It focuses on teaching you the concept, not just giving you the answer.",
    category: "Usage",
  },
  {
    question: "What subjects are supported?",
    answer:
      "We support Math, Physics, Chemistry, Biology, History, English/Literature, Programming, Economics, Geography, and general topics across all grade levels from elementary to college.",
    category: "Features",
  },
  {
    question: "Can I use this for exam preparation?",
    answer:
      "Yes! Enable 'Include Practice Problems' to get similar questions for practice. This helps you understand the concept and prepare for tests.",
    category: "Usage",
  },
  {
    question: "Is the solution always correct?",
    answer:
      "Our AI provides highly accurate solutions, but we recommend verifying important answers. Use the verification section to check your work and learn the problem-solving process.",
    category: "Accuracy",
  },
  {
    question: "Can I adjust the explanation level?",
    answer:
      "Absolutely! Choose from Detailed (comprehensive), Concise (quick), ELI5 (very simple), or Visual (with diagrams). Pick what works best for your learning style.",
    category: "Features",
  },
  {
    question: "Will this help me learn or just give answers?",
    answer:
      "It's designed to teach! Each solution includes step-by-step explanations, verification methods, practice problems, and pro tips to help you truly understand the concept.",
    category: "Learning",
  },
];

export default function HomeworkSolverClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Homework Solver"
      toolSlug="homework-solver"
      tagline="Get instant, step-by-step solutions to any homework problem"
      description="AI-powered homework helper that provides detailed explanations, practice problems, and verification methods. Perfect for students of all grades who want to understand, not just answer."
      badge="AI-Powered"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "This tool changed how I study! The step-by-step explanations help me actually understand the material instead of just memorizing answers.",
        author: "Sarah Johnson",
        role: "11th Grade Student",
        initial: "S",
      }}
      relatedTools={relatedTools}
      ctaTitle="Ready to Solve Smarter?"
      ctaDescription="Get detailed homework help in seconds with AI-powered explanations"
      ctaIcon={Brain}
    >
      <EnhancedToolLayout
        toolSlug="homework-solver"
        toolName="AI Homework Solver"
        placeholder={`✍️ Enter your homework question here...

Examples:
• Solve: 2x² + 5x - 3 = 0
• Explain the process of photosynthesis in plant cells
• What were the main causes of the French Revolution?
• Write a Python function to check if a number is prime
• Calculate the force needed to accelerate a 10kg object at 5m/s²

Be as specific as possible for best results!`}
        promptTemplate={generatePrompt}
        inputRows={10}
        toolOptions={toolOptions}
        resultLabel="📚 Your Solution"
        generateButtonText="🚀 Solve My Homework"
        inputLabel="📝 Your Homework Question"
        showAdvancedOptions={true}
        maxHistoryItems={10}
        customResultRenderer={(result) => (
          <HomeworkResultFormatter result={result} />
        )}
      />
      <div className="px-6 pb-6">
        <FAQSection faqs={faqs} />
      </div>
    </PremiumToolWrapper>
  );
}
