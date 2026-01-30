'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import {
    BookOpen,
    Brain,
    Lightbulb,
    Calculator,
    GraduationCap,
    Layers,
    HelpCircle
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'level',
        label: 'Explanation Level',
        type: 'select',
        options: [
            { value: 'beginner', label: '🌱 Beginner' },
            { value: 'intermediate', label: '📚 Intermediate' },
            { value: 'advanced', label: '🎓 Advanced' },
            { value: 'eli5', label: '🧒 ELI5 (Super Simple)' },
        ],
        defaultValue: 'intermediate',
    },
    {
        id: 'style',
        label: 'Explanation Style',
        type: 'select',
        options: [
            { value: 'detailed', label: '📝 Detailed' },
            { value: 'analogy', label: '🎭 With Analogies' },
            { value: 'visual', label: '📊 Visual/Diagram' },
        ],
        defaultValue: 'detailed',
    },
    {
        id: 'includeExamples',
        label: 'Real-World Examples',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const level = options?.level || 'intermediate';
    const style = options?.style || 'detailed';
    const includeExamples = options?.includeExamples !== false;

    const levelStyles: Record<string, string> = {
        beginner: 'Explain for someone with no prior knowledge.',
        intermediate: 'Explain for someone with basic understanding.',
        advanced: 'Explain with technical depth and nuance.',
        eli5: 'Explain like I\'m 5 years old - use very simple words and analogies.',
    };

    const styleDescriptions: Record<string, string> = {
        detailed: 'Provide a comprehensive breakdown.',
        analogy: 'Use creative analogies and comparisons to explain.',
        visual: 'Include ASCII diagrams or visual descriptions where helpful.',
    };

    return `Explain the following concept clearly.
${levelStyles[level]}
${styleDescriptions[style]}
${includeExamples ? 'Include real-world examples to illustrate.' : ''}

Concept:
${input}

Explanation:`;
};

const faqs = [
    { question: "What's ELI5?", answer: "ELI5 stands for 'Explain Like I'm 5' - it breaks down complex topics into super simple terms anyone can understand." },
    { question: "Can this explain any topic?", answer: "Yes! From quantum physics to philosophy, our AI can simplify any concept." },
    { question: "What's the best level to choose?", answer: "Start with Intermediate, then adjust based on your familiarity with the topic." },
];

const relatedTools = [
    { name: 'Doubt Solver', slug: 'doubt-solver', icon: HelpCircle, color: 'text-orange-600' },
    { name: 'Formula Generator', slug: 'formula-generator', icon: Calculator, color: 'text-blue-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-purple-600' },
    { name: 'Homework Solver', slug: 'homework-solver', icon: Brain, color: 'text-green-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Concept', desc: 'Type the topic to explain', icon: Lightbulb, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Level', desc: 'Choose complexity level', icon: Layers, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Understand', desc: 'Get clear explanation', icon: GraduationCap, color: 'from-green-500 to-emerald-600' },
];

export default function ConceptExplainerClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Concept Explainer"
            toolSlug="concept-explainer"
            tagline="Understand any concept in minutes"
            description="Break down complex topics into crystal-clear explanations at your preferred level."
            badge="Learning Made Easy"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "The ELI5 mode finally helped me understand quantum mechanics! Amazing tool for visual learners.",
                author: "Thomas Lee",
                role: "Physics Student",
                initial: "T"
            }}
            relatedTools={relatedTools}
            ctaTitle="Start Understanding"
            ctaDescription="No concept too complex - we'll break it down for you."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="🧠 Enter a concept you want explained...

Examples:
• Blockchain technology
• DNA replication
• Supply and demand
• Machine learning algorithms"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="concept-explainer"
                toolOptions={toolOptions}
                resultLabel="📖 Explanation"
                generateButtonText="💡 Explain Concept"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
