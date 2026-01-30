'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import {
    BookOpen,
    Brain,
    Lightbulb,
    Calculator,
    FileText,
    ClipboardList,
    List
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'length',
        label: 'Summary Length',
        type: 'select',
        options: [
            { value: 'brief', label: '⚡ Brief (1-2 paragraphs)' },
            { value: 'medium', label: '📝 Medium (3-5 paragraphs)' },
            { value: 'detailed', label: '📚 Detailed (Full summary)' },
        ],
        defaultValue: 'medium',
    },
    {
        id: 'format',
        label: 'Format',
        type: 'select',
        options: [
            { value: 'paragraph', label: '📄 Paragraph Style' },
            { value: 'bullets', label: '• Bullet Points' },
            { value: 'outline', label: '🔢 Numbered Outline' },
        ],
        defaultValue: 'bullets',
    },
    {
        id: 'highlightKeyTerms',
        label: 'Highlight Key Terms',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const length = options?.length || 'medium';
    const format = options?.format || 'bullets';
    const highlightKeyTerms = options?.highlightKeyTerms !== false;

    const lengthStyles: Record<string, string> = {
        brief: 'Create a very brief summary in 1-2 short paragraphs.',
        medium: 'Create a moderate summary covering main points.',
        detailed: 'Create a comprehensive summary covering all key topics.',
    };

    const formatStyles: Record<string, string> = {
        paragraph: 'Write in flowing paragraph format.',
        bullets: 'Use bullet points for easy scanning.',
        outline: 'Use a numbered outline structure.',
    };

    return `Summarize the following chapter/content.
${lengthStyles[length]}
${formatStyles[format]}
${highlightKeyTerms ? 'Bold or highlight key terms and important concepts.' : ''}

Include:
- Main themes and concepts
- Key facts and figures
- Important takeaways

Content:
${input}

Summary:`;
};

const faqs = [
    { question: "How long can my chapter content be?", answer: "You can paste entire chapters! The AI will extract the most important information." },
    { question: "What subjects work best?", answer: "Any subject! History, science, literature, business - all work great." },
    { question: "Will it miss important details?", answer: "The AI focuses on key concepts. For comprehensive coverage, choose 'Detailed' length." },
];

const relatedTools = [
    { name: 'Notes Generator', slug: 'notes-generator', icon: ClipboardList, color: 'text-blue-600' },
    { name: 'Flashcard Maker', slug: 'flashcard-maker', icon: Brain, color: 'text-purple-600' },
    { name: 'Quiz Generator', slug: 'quiz-generator', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Revision Planner', slug: 'revision-planner', icon: Calculator, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Paste Content', desc: 'Add your chapter text', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Choose Format', desc: 'Select length and style', icon: List, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Summary', desc: 'Receive condensed notes', icon: ClipboardList, color: 'from-green-500 to-emerald-600' },
];

export default function ChapterSummaryClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Chapter Summary"
            toolSlug="chapter-summary"
            tagline="Summarize any chapter in seconds"
            description="Transform lengthy chapters into concise, easy-to-review summaries with key points highlighted."
            badge="Quick Review Tool"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "I summarized all 15 chapters of my textbook before finals. This tool is a lifesaver!",
                author: "David Chen",
                role: "MBA Student",
                initial: "D"
            }}
            relatedTools={relatedTools}
            ctaTitle="Summarize Your Content"
            ctaDescription="Save hours of reading time with AI summaries."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📚 Paste your chapter content here...

Simply copy and paste the text from your textbook, PDF, or online resource."
                promptTemplate={generatePrompt}
                inputRows={6}
                toolSlug="chapter-summary"
                toolOptions={toolOptions}
                resultLabel="📋 Chapter Summary"
                generateButtonText="📝 Summarize Chapter"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
