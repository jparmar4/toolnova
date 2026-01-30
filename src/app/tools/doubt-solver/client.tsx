'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import {
    BookOpen,
    Brain,
    Lightbulb,
    Calculator,
    HelpCircle,
    MessageCircle,
    ClipboardList
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'subject',
        label: 'Subject Area',
        type: 'select',
        options: [
            { value: 'general', label: '📚 General' },
            { value: 'math', label: '🔢 Mathematics' },
            { value: 'science', label: '🔬 Science' },
            { value: 'history', label: '📜 History' },
            { value: 'programming', label: '💻 Programming' },
        ],
        defaultValue: 'general',
    },
    {
        id: 'depth',
        label: 'Answer Depth',
        type: 'select',
        options: [
            { value: 'quick', label: '⚡ Quick Answer' },
            { value: 'detailed', label: '📝 Detailed Explanation' },
            { value: 'eli5', label: '🧒 Simple (ELI5)' },
        ],
        defaultValue: 'detailed',
    },
    {
        id: 'includeExamples',
        label: 'Include Examples',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const subject = options?.subject || 'general';
    const depth = options?.depth || 'detailed';
    const includeExamples = options?.includeExamples !== false;

    const depthStyles: Record<string, string> = {
        quick: 'Provide a clear, concise answer.',
        detailed: 'Provide a comprehensive explanation with step-by-step breakdown.',
        eli5: 'Explain this in very simple terms that anyone could understand.',
    };

    return `Answer this ${subject} question/doubt.
${depthStyles[depth]}
${includeExamples ? 'Include relevant examples to illustrate.' : ''}

Question/Doubt:
${input}

Answer:`;
};

const faqs = [
    { question: "What types of doubts can I ask?", answer: "Any academic question from math, science, history, programming, or general topics." },
    { question: "How detailed are the answers?", answer: "Choose from Quick, Detailed, or Simple (ELI5) explanation styles based on your needs." },
    { question: "Is this available 24/7?", answer: "Yes! Get instant answers anytime, anywhere - no waiting for tutors." },
];

const relatedTools = [
    { name: 'Homework Solver', slug: 'homework-solver', icon: Calculator, color: 'text-orange-600' },
    { name: 'Concept Explainer', slug: 'concept-explainer', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Formula Generator', slug: 'formula-generator', icon: Calculator, color: 'text-blue-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-purple-600' },
];

const howItWorks = [
    { step: 1, title: 'Ask Doubt', desc: 'Type your question clearly', icon: HelpCircle, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Depth', desc: 'Choose explanation level', icon: MessageCircle, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Answer', desc: 'Receive clear explanation', icon: Lightbulb, color: 'from-green-500 to-emerald-600' },
];

export default function DoubtSolverClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Doubt Solver"
            toolSlug="doubt-solver"
            tagline="Get instant answers to your study questions"
            description="Ask any academic question and receive clear, detailed explanations 24/7."
            badge="Instant Help"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "It's like having a personal tutor available anytime! Saved me during late-night study sessions.",
                author: "Jake Martinez",
                role: "Engineering Student",
                initial: "J"
            }}
            relatedTools={relatedTools}
            ctaTitle="Ask Your Doubt Now"
            ctaDescription="No question too big or small - get answers instantly."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="❓ Type your question or doubt here...

Examples:
• Why does the sky appear blue?
• How do I solve quadratic equations?
• What caused the French Revolution?"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="doubt-solver"
                toolOptions={toolOptions}
                resultLabel="💡 Answer"
                generateButtonText="🎓 Solve My Doubt"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
