'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { FileText, Lightbulb, BookOpen, Target, List, ClipboardList } from 'lucide-react';
import { QuickAnswerBox } from '@/components/aeo/QuickAnswerBox';
import { HowItWorksSection } from '@/components/aeo/HowItWorksSection';
import { FAQAccordion } from '@/components/aeo/FAQAccordion';
import { getToolAEOContent } from '@/lib/tool-aeo-content';

const toolOptions: ToolOption[] = [
    {
        id: 'length',
        label: 'Summary Length',
        type: 'select',
        options: [
            { value: 'brief', label: '⚡ Brief (1-2 sentences)' },
            { value: 'short', label: '📝 Short (1 paragraph)' },
            { value: 'medium', label: '📄 Medium (2-3 paragraphs)' },
            { value: 'detailed', label: '📚 Detailed' },
        ],
        defaultValue: 'short',
    },
    {
        id: 'style',
        label: 'Style',
        type: 'select',
        options: [
            { value: 'paragraph', label: '📄 Paragraph' },
            { value: 'bullets', label: '• Bullet Points' },
            { value: 'key-points', label: '🎯 Key Points Only' },
        ],
        defaultValue: 'paragraph',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const length = options?.length || 'short';
    const style = options?.style || 'paragraph';

    const lengthDescriptions: Record<string, string> = {
        brief: 'Give a super quick TL;DR in just 1-2 sentences.',
        short: 'Create a concise summary in one clear paragraph.',
        medium: 'Provide a comprehensive summary in 2-3 paragraphs.',
        detailed: 'Give a detailed summary covering all major points.',
    };

    const styleDescriptions: Record<string, string> = {
        paragraph: 'Write in flowing, easy-to-read paragraphs.',
        bullets: 'Use bullet points for easy scanning.',
        'key-points': 'List only the most essential key points.',
    };

    return [
        'Summarize the text clearly and concisely.',
        '',
        'FORMAT:',
        'SUMMARY:',
        '[Your summary here]',
        '',
        'KEY TERMS:',
        '[Important terms from the text]',
        '',
        'TIP:',
        '[One helpful tip or key takeaway]',
        '',
        `Length: ${lengthDescriptions[length]}`,
        `Style: ${styleDescriptions[style]}`,
        '',
        'Text to summarize:',
        input
    ].join('\n');
};

const faqs = [
    { question: "How short can the summary be?", answer: "Choose 'Brief' for a 1-2 sentence TL;DR version." },
    { question: "Will it preserve the main ideas?", answer: "Yes! Our AI captures the key points while condensing content." },
];

const relatedTools = [
    { name: 'Notes Generator', slug: 'notes-generator', icon: ClipboardList, color: 'text-blue-600' },
    { name: 'Chapter Summary', slug: 'chapter-summary', icon: BookOpen, color: 'text-purple-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Text Simplifier', slug: 'text-simplifier', icon: Target, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Paste Text', desc: 'Add your content', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Length', desc: 'Choose summary size', icon: List, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Summary', desc: 'Condensed content ready', icon: ClipboardList, color: 'from-green-500 to-emerald-600' },
];

export default function TextSummarizerClient() {
    // Get AEO content for this tool
    const aeoContent = getToolAEOContent('text-summarizer');

    return (
        <PremiumToolWrapper
            toolName="Text Summarizer"
            toolSlug="text-summarizer"
            tagline="Summarize any text in seconds"
            description="Condense long articles, documents, and content into clear summaries at your preferred length."
            badge="Condensed Reading"
            category="Utility Tools"
            categorySlug="utility-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "I summarize research papers in minutes instead of hours. Essential for my PhD work!",
                author: "Dr. Emily Chen",
                role: "Research Scientist",
                initial: "E"
            }}
            relatedTools={relatedTools}
            ctaTitle="Summarize Now"
            ctaDescription="Too long; get it summarized."
        >
            {/* AEO: Quick Answer Box */}
            <div className="px-6 pt-6">
                <QuickAnswerBox
                    question={aeoContent.quickAnswer.question}
                    answer={aeoContent.quickAnswer.answer}
                />
            </div>

            {/* Main Tool Interface */}
            <ToolLayout
                title=""
                description=""
                placeholder="📄 Paste the text you want summarized...

Works great with:
• News articles
• Research papers  
• Long emails
• Blog posts"
                promptTemplate={generatePrompt}
                inputRows={6}
                toolSlug="text-summarizer"
                toolOptions={toolOptions}
                resultLabel="✨ Summary"
                generateButtonText="📝 Summarize"
            />

            {/* AEO: How It Works Section */}
            <div className="px-6 pb-6">
                <HowItWorksSection steps={aeoContent.howItWorks} />
            </div>

            {/* AEO: FAQ Accordion */}
            <div className="px-6 pb-6">
                <FAQAccordion
                    faqs={aeoContent.faqs}
                    title="Frequently Asked Questions"
                />
            </div>
        </PremiumToolWrapper>
    );
}
