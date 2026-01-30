'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import {
    BookOpen,
    Brain,
    Lightbulb,
    Calculator,
    Sigma,
    FileText,
    ClipboardList
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'subject',
        label: 'Subject',
        type: 'select',
        options: [
            { value: 'math', label: '🔢 Mathematics' },
            { value: 'physics', label: '⚛️ Physics' },
            { value: 'chemistry', label: '🧪 Chemistry' },
            { value: 'economics', label: '📊 Economics' },
        ],
        defaultValue: 'math',
    },
    {
        id: 'format',
        label: 'Output Format',
        type: 'select',
        options: [
            { value: 'list', label: '📋 List Format' },
            { value: 'table', label: '📊 Table Format' },
            { value: 'explained', label: '📝 With Explanations' },
        ],
        defaultValue: 'explained',
    },
    {
        id: 'includeExamples',
        label: 'Include Examples',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const subject = options?.subject || 'math';
    const format = options?.format || 'explained';
    const includeExamples = options?.includeExamples !== false;

    const formatStyles: Record<string, string> = {
        list: 'Present formulas in a clear bullet list format.',
        table: 'Present formulas in a table format with formula name and expression.',
        explained: 'Present each formula with a clear explanation of when and how to use it.',
    };

    return `Generate all important ${subject} formulas for the following topic.
${formatStyles[format]}
${includeExamples ? 'Include a simple example for each formula.' : ''}

Topic:
${input}

Formulas:`;
};

const faqs = [
    { question: "What subjects are covered?", answer: "Mathematics, Physics, Chemistry, and Economics formulas are all supported." },
    { question: "Can I get explanations?", answer: "Yes! Choose 'With Explanations' format to understand when and how to use each formula." },
    { question: "Are examples included?", answer: "Enable the toggle to get practical examples for each formula." },
];

const relatedTools = [
    { name: 'Homework Solver', slug: 'homework-solver', icon: Calculator, color: 'text-orange-600' },
    { name: 'Concept Explainer', slug: 'concept-explainer', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Doubt Solver', slug: 'doubt-solver', icon: Brain, color: 'text-purple-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-blue-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Topic', desc: 'Type your formula topic', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Choose Format', desc: 'Select list, table, or explained', icon: ClipboardList, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Formulas', desc: 'Receive organized formulas', icon: Sigma, color: 'from-green-500 to-emerald-600' },
];

export default function FormulaGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Formula Generator"
            toolSlug="formula-generator"
            tagline="Get all the formulas you need for any topic"
            description="Generate comprehensive formula lists for Math, Physics, Chemistry, and more with explanations."
            badge="Formula Reference"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "I created formula sheets for all my STEM subjects in minutes! Perfect for exam revision.",
                author: "Aisha Patel",
                role: "Engineering Student",
                initial: "A"
            }}
            relatedTools={relatedTools}
            ctaTitle="Generate Your Formula Sheet"
            ctaDescription="Never forget a formula again."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📐 Enter your topic for formula generation...

Examples:
• Trigonometry identities
• Kinematics and motion
• Chemical equilibrium
• Financial ratios"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="formula-generator"
                toolOptions={toolOptions}
                resultLabel="📊 Formulas"
                generateButtonText="📐 Generate Formulas"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
