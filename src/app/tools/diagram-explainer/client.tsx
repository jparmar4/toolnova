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
  Image,
  FileText,
  Activity,
  Users,
  Star,
  Zap,
  Target,
  Layers,
  Sparkles,
} from "lucide-react";

const toolOptions = [
  {
    id: "subject",
    label: "Subject",
    type: "select" as const,
    options: [
      { value: "biology", label: "🧬 Biology" },
      { value: "chemistry", label: "🧪 Chemistry" },
      { value: "physics", label: "⚛️ Physics" },
      { value: "geography", label: "🌍 Geography" },
      { value: "general", label: "📚 General" },
    ] as const,
    defaultValue: "biology",
  },
  {
    id: "detail",
    label: "Detail Level",
    type: "select" as const,
    options: [
      { value: "basic", label: "📋 Basic Overview" },
      { value: "detailed", label: "📝 Detailed Analysis" },
      { value: "comprehensive", label: "📚 Comprehensive" },
    ] as const,
    defaultValue: "detailed",
  },
  {
    id: "labelParts",
    label: "Label All Parts",
    type: "toggle" as const,
    defaultValue: true,
  },
] as const;

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const subject = options?.subject || "biology";
  const detail = options?.detail || "detailed";
  const labelParts = options?.labelParts !== false;

  const detailStyles: Record<string, string> = {
    basic:
      "Provide a basic overview of the main components and their primary functions. Keep explanations concise and accessible.",
    detailed:
      "Provide detailed explanation of all parts, their functions, and how they interact. Include technical terminology with clear definitions.",
    comprehensive:
      "Provide comprehensive analysis including all components, their relationships, underlying processes, and biological/chemical/physical significance. Include advanced details.",
  };

  return `Explain the following ${subject} diagram or visual concept in detail.

Detail level: ${detailStyles[detail]}
${labelParts ? "Label and explain each part/component clearly with its specific name and function." : "Focus on the overall concept and main relationships."}

Your explanation should include:
1. **Overview**: What the diagram represents and its purpose
2. **Components**: Each part/element with its name and function
3. **Relationships**: How the parts work together or interact
4. **Process/Flow**: If applicable, explain the sequence or cycle shown
5. **Key Takeaways**: Main concepts to understand from this diagram

Diagram/Visual description:
${input}

Provide a clear, structured explanation:`;
};

const stats = [
  { icon: Users, label: "350K+", sublabel: "Diagrams Explained" },
  { icon: Star, label: "4.9/5", sublabel: "Student Rating" },
  { icon: Zap, label: "All Subjects", sublabel: "Supported" },
];

const features = [
  {
    icon: Target,
    title: "Multi-Subject Support",
    description:
      "Explain diagrams from Biology, Chemistry, Physics, Geography, or any subject with specialized terminology.",
  },
  {
    icon: Layers,
    title: "Flexible Detail Levels",
    description:
      "Choose from basic overview to comprehensive analysis based on your learning needs and time available.",
  },
  {
    icon: Activity,
    title: "Component Breakdown",
    description:
      "Get each part labeled and explained with its function, relationships, and role in the overall process.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Describe Diagram",
    desc: "Describe what you see in the diagram",
    icon: Image,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Select Subject",
    desc: "Choose the subject field",
    icon: FileText,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Explanation",
    desc: "Understand every part clearly",
    icon: Activity,
    color: "from-green-500 to-emerald-600",
  },
];

const faqs = [
  {
    question: "What is the Diagram Explainer?",
    answer:
      "The Diagram Explainer is an AI-powered educational tool that helps you understand visual concepts, diagrams, charts, and illustrations from any subject. Simply describe what you see in the diagram, and the AI will provide a comprehensive explanation of all components, their functions, and how they work together. Perfect for science diagrams, flowcharts, anatomical illustrations, and more.",
  },
  {
    question: "What types of diagrams can I explain?",
    answer:
      "You can explain any type of diagram: Biology (cell structures, body systems, plant anatomy), Chemistry (molecular structures, reaction diagrams, atomic models), Physics (circuit diagrams, force diagrams, wave illustrations), Geography (climate zones, geological formations, maps), and General diagrams (flowcharts, process diagrams, organizational charts). The tool adapts to your subject area.",
  },
  {
    question: "How do I describe my diagram?",
    answer:
      "Simply write what you see in the diagram: the shapes, labels, arrows, colors, and any text present. For example: 'A cell diagram showing nucleus in the center, mitochondria scattered around, cell membrane on the outside, and ribosomes attached to rough ER.' The more details you provide about what you observe, the more accurate and helpful the explanation will be.",
  },
  {
    question: "What detail levels are available?",
    answer:
      "Choose from three levels: Basic (quick overview of main components and their primary functions), Detailed (thorough explanation of all parts with technical terms and interactions), or Comprehensive (in-depth analysis including processes, significance, and advanced details). Select based on your learning goals and how deeply you need to understand the concept.",
  },
  {
    question: "Can I upload an image of my diagram?",
    answer:
      "Currently, the tool works by text description. Describe what you see in your diagram - the components, labels, arrows, relationships, and any text. This description method actually helps you practice observation skills and ensures you're actively engaging with the material, which aids learning and retention.",
  },
  {
    question: "Is the Diagram Explainer free?",
    answer:
      "Yes! The Diagram Explainer is completely free to use. Explain unlimited diagrams from any subject without any cost. Perfect for students studying science, medicine, engineering, or anyone who needs to understand visual concepts better.",
  },
];

const relatedTools = [
  {
    name: "Concept Explainer",
    slug: "concept-explainer",
    icon: Lightbulb,
    color: "text-green-600",
  },
  {
    name: "Homework Solver",
    slug: "homework-solver",
    icon: Calculator,
    color: "text-orange-600",
  },
  {
    name: "Notes Generator",
    slug: "notes-generator",
    icon: BookOpen,
    color: "text-purple-600",
  },
  {
    name: "Formula Generator",
    slug: "formula-generator",
    icon: Brain,
    color: "text-blue-600",
  },
];

export default function DiagramExplainerClient() {
  return (
    <PremiumToolWrapper
      toolName="AI Diagram Explainer"
      toolSlug="diagram-explainer"
      tagline="Understand any diagram or visual concept"
      description="Get detailed explanations of diagrams, charts, and visual representations from any subject. Perfect for science, medicine, engineering, and more."
      badge="Visual Learning"
      category="Study Tools"
      categorySlug="study-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={{
        quote:
          "Finally understood the Krebs cycle diagram that confused me all semester! The part-by-part breakdown with functions was exactly what I needed.",
        author: "Maria Santos",
        role: "Biology Major",
        initial: "M",
      }}
      relatedTools={relatedTools}
      ctaTitle="Decode Any Diagram"
      ctaDescription="Visual concepts made crystal clear with detailed explanations!"
      ctaButtonText="Explain Diagram"
      ctaIcon={Activity}
    >
      <EnhancedToolLayout
        toolSlug="diagram-explainer"
        toolName="Diagram Explainer"
        placeholder={`📊 Describe the diagram you want explained...

Examples:
• Cell structure diagram with nucleus in center, mitochondria scattered around, cell membrane on outside, ribosomes on rough ER, and golgi apparatus near nucleus
• Water cycle showing evaporation from ocean, condensation into clouds, precipitation as rain, and runoff back to ocean with arrows
• Circuit diagram with battery, three resistors in series, a switch, and an LED light bulb
• Heart anatomy showing four chambers - left and right atria on top, left and right ventricles below, with valves between chambers and major blood vessels
• Photosynthesis diagram with chloroplast, showing light reactions in thylakoids and Calvin cycle in stroma
• Nitrogen cycle with bacteria, plants, animals, and atmosphere showing decomposition and nitrogen fixation

💡 Tip: Include labels, arrows, and spatial relationships you see in the diagram for more accurate explanations!`}
        inputRows={10}
        maxHistoryItems={10}
        options={toolOptions}
        generatePrompt={generatePrompt}
        resultLabel="📖 Diagram Explanation"
        generateButtonText="🔍 Explain Diagram"
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
