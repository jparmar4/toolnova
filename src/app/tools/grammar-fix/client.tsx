'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { CheckCircle, Pencil, FileText, Lightbulb, MessageSquare, Sparkles } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'level',
        label: 'Fix Level',
        type: 'select',
        options: [
            { value: 'basic', label: '✅ Grammar Only' },
            { value: 'standard', label: '📝 Grammar + Style' },
            { value: 'advanced', label: '✨ Full Enhancement' },
        ],
        defaultValue: 'standard',
    },
    {
        id: 'dialect',
        label: 'English Dialect',
        type: 'select',
        options: [
            { value: 'us', label: '🇺🇸 American English' },
            { value: 'uk', label: '🇬🇧 British English' },
            { value: 'neutral', label: '🌍 Neutral' },
        ],
        defaultValue: 'us',
    },
    {
        id: 'showExplanations',
        label: 'Show Explanations',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const level = options?.level || 'standard';
    const dialect = options?.dialect || 'us';
    const showExplanations = options?.showExplanations !== false;

    const dialectNames: Record<string, string> = {
        us: 'American English',
        uk: 'British English',
        neutral: 'neutral English',
    };

    const levelDescriptions: Record<string, string> = {
        basic: 'Fix only grammar, spelling, and punctuation errors.',
        standard: 'Fix grammar, spelling, punctuation, and improve style and clarity.',
        advanced: 'Fix all errors, improve style, enhance clarity, and make it more engaging.',
    };

    return `Please fix the following text using ${dialectNames[dialect]}.
${levelDescriptions[level]}
${showExplanations ? 'List the key corrections made after the corrected text.' : ''}

Text to fix:
${input}

Corrected text:`;
};

const faqs = [
    { question: "What errors does it fix?", answer: "Grammar, spelling, punctuation, style issues, and awkward phrasing." },
    { question: "Can I learn from corrections?", answer: "Yes! Enable 'Show Explanations' to see what was fixed and why." },
];

const relatedTools = [
    { name: 'Paraphraser', slug: 'paraphraser', icon: MessageSquare, color: 'text-blue-600' },
    { name: 'Essay Writer', slug: 'essay-writer', icon: FileText, color: 'text-purple-600' },
    { name: 'Email Writer', slug: 'email-writer', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Text Simplifier', slug: 'text-simplifier', icon: Sparkles, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Paste Text', desc: 'Add your text with errors', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Options', desc: 'Choose fix level', icon: Lightbulb, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Fixed', desc: 'Receive polished text', icon: CheckCircle, color: 'from-green-500 to-emerald-600' },
];

export default function GrammarFixClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Grammar Fix"
            toolSlug="grammar-fix"
            tagline="Perfect your writing instantly"
            description="Fix grammar, spelling, punctuation, and style errors with AI-powered corrections."
            badge="Error-Free Writing"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "I'm learning English and this tool helps me understand my mistakes. Love the explanations!",
                author: "Carlos Rodriguez",
                role: "ESL Student",
                initial: "C"
            }}
            relatedTools={relatedTools}
            ctaTitle="Fix Your Text"
            ctaDescription="Write with confidence, every time."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📝 Paste your text with errors...

Example:
Their going to the store yesterday and buy many foods..."
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="grammar-fix"
                toolOptions={toolOptions}
                resultLabel="✅ Corrected Text"
                generateButtonText="🔧 Fix Grammar"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
