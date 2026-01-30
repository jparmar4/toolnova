'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import {
    BookOpen,
    Brain,
    Lightbulb,
    Calculator,
    Image,
    FileText,
    Activity
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'subject',
        label: 'Subject',
        type: 'select',
        options: [
            { value: 'biology', label: '🧬 Biology' },
            { value: 'chemistry', label: '🧪 Chemistry' },
            { value: 'physics', label: '⚛️ Physics' },
            { value: 'geography', label: '🌍 Geography' },
            { value: 'general', label: '📚 General' },
        ],
        defaultValue: 'biology',
    },
    {
        id: 'detail',
        label: 'Detail Level',
        type: 'select',
        options: [
            { value: 'basic', label: '📋 Basic Overview' },
            { value: 'detailed', label: '📝 Detailed Analysis' },
            { value: 'comprehensive', label: '📚 Comprehensive' },
        ],
        defaultValue: 'detailed',
    },
    {
        id: 'labelParts',
        label: 'Label All Parts',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const subject = options?.subject || 'biology';
    const detail = options?.detail || 'detailed';
    const labelParts = options?.labelParts !== false;

    const detailStyles: Record<string, string> = {
        basic: 'Provide a basic overview of the main components.',
        detailed: 'Provide detailed explanation of all parts and their functions.',
        comprehensive: 'Provide comprehensive analysis including relationships and processes.',
    };

    return `Explain the following ${subject} diagram/visual concept.
${detailStyles[detail]}
${labelParts ? 'Label and explain each part/component clearly.' : ''}

Include:
- What the diagram represents
- Each component and its function
- How the parts work together
- Key takeaways

Diagram/Visual:
${input}

Explanation:`;
};

const faqs = [
    { question: "What types of diagrams can I explain?", answer: "Cell structures, chemical reactions, physics diagrams, geographical maps, flowcharts, and more!" },
    { question: "How do I describe my diagram?", answer: "Simply describe what you see - the shapes, labels, arrows, and any text in the diagram." },
    { question: "What if I can upload an image?", answer: "Currently, describe your diagram in text. We'll explain all the parts and relationships." },
];

const relatedTools = [
    { name: 'Concept Explainer', slug: 'concept-explainer', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Homework Solver', slug: 'homework-solver', icon: Calculator, color: 'text-orange-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-purple-600' },
    { name: 'Formula Generator', slug: 'formula-generator', icon: Brain, color: 'text-blue-600' },
];

const howItWorks = [
    { step: 1, title: 'Describe Diagram', desc: 'Describe what you see', icon: Image, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Select Subject', desc: 'Choose the field', icon: FileText, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Explanation', desc: 'Understand every part', icon: Activity, color: 'from-green-500 to-emerald-600' },
];

export default function DiagramExplainerClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Diagram Explainer"
            toolSlug="diagram-explainer"
            tagline="Understand any diagram or visual concept"
            description="Get detailed explanations of diagrams, charts, and visual representations from any subject."
            badge="Visual Learning"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Finally understood the Krebs cycle diagram that confused me all semester! The part-by-part breakdown was perfect.",
                author: "Maria Santos",
                role: "Biology Major",
                initial: "M"
            }}
            relatedTools={relatedTools}
            ctaTitle="Decode Any Diagram"
            ctaDescription="Visual concepts made crystal clear."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📊 Describe the diagram you want explained...

Examples:
• Cell structure diagram with nucleus, mitochondria, and ribosomes
• Water cycle showing evaporation, condensation, precipitation
• Circuit diagram with resistors and capacitors
• Heart anatomy showing chambers and valves"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="diagram-explainer"
                toolOptions={toolOptions}
                resultLabel="📖 Diagram Explanation"
                generateButtonText="🔍 Explain Diagram"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
