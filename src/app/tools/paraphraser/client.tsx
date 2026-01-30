'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { RefreshCw, Pencil, FileText, Lightbulb, MessageSquare, Sparkles } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'mode',
        label: 'Paraphrase Mode',
        type: 'select',
        options: [
            { value: 'standard', label: '📝 Standard' },
            { value: 'formal', label: '👔 More Formal' },
            { value: 'casual', label: '😊 More Casual' },
            { value: 'shorter', label: '⚡ Shorter' },
            { value: 'creative', label: '✨ Creative' },
        ],
        defaultValue: 'standard',
    },
    {
        id: 'fluency',
        label: 'Fluency Level',
        type: 'select',
        options: [
            { value: 'basic', label: '📋 Basic Changes' },
            { value: 'moderate', label: '📝 Moderate Rewrite' },
            { value: 'extensive', label: '📚 Extensive Rewrite' },
        ],
        defaultValue: 'moderate',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const mode = options?.mode || 'standard';
    const fluency = options?.fluency || 'moderate';

    const modeDescriptions: Record<string, string> = {
        standard: 'Paraphrase while keeping the same meaning.',
        formal: 'Paraphrase to make it more formal and professional.',
        casual: 'Paraphrase to make it more casual and conversational.',
        shorter: 'Paraphrase to make it more concise while keeping key points.',
        creative: 'Paraphrase with a creative, engaging twist.',
    };

    const fluencyDescriptions: Record<string, string> = {
        basic: 'Make minimal vocabulary changes while keeping structure similar.',
        moderate: 'Change both vocabulary and sentence structure.',
        extensive: 'Significantly rewrite while preserving the core meaning.',
    };

    return `${modeDescriptions[mode]}
${fluencyDescriptions[fluency]}

Original text:
${input}

Paraphrased text:`;
};

const faqs = [
    { question: "Will the meaning be preserved?", answer: "Yes! The core meaning stays intact while the wording changes." },
    { question: "Is this unique content?", answer: "Yes, each paraphrase is uniquely generated with fresh wording." },
];

const relatedTools = [
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: Pencil, color: 'text-blue-600' },
    { name: 'Essay Writer', slug: 'essay-writer', icon: FileText, color: 'text-purple-600' },
    { name: 'Text Simplifier', slug: 'text-simplifier', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Caption Generator', slug: 'caption-generator', icon: Sparkles, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Paste Text', desc: 'Add your original text', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Choose Mode', desc: 'Select paraphrase style', icon: Lightbulb, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Result', desc: 'Receive fresh wording', icon: RefreshCw, color: 'from-green-500 to-emerald-600' },
];

export default function ParaphraserClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Paraphraser"
            toolSlug="paraphraser"
            tagline="Rewrite text while keeping the meaning"
            description="Transform any text into fresh, unique wording with our intelligent paraphrasing tool."
            badge="Content Rewriter"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Perfect for avoiding repetition in my essays. The formal mode helps make my writing more academic.",
                author: "Amanda Foster",
                role: "Graduate Student",
                initial: "A"
            }}
            relatedTools={relatedTools}
            ctaTitle="Paraphrase Your Text"
            ctaDescription="Same meaning, fresh words."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📝 Paste the text you want to rephrase...

Paste any sentence, paragraph, or article and get it rewritten with fresh wording."
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="paraphraser"
                toolOptions={toolOptions}
                resultLabel="✨ Paraphrased Text"
                generateButtonText="🔄 Paraphrase"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
