'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { BookOpen, Brain, Lightbulb, BookMarked, Target, ClipboardList } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'wordCount',
        label: 'Word Count',
        type: 'select',
        options: [
            { value: '10', label: '10 Words' },
            { value: '20', label: '20 Words' },
            { value: '30', label: '30 Words' },
            { value: '50', label: '50 Words' },
        ],
        defaultValue: '20',
    },
    {
        id: 'level',
        label: 'Vocabulary Level',
        type: 'select',
        options: [
            { value: 'basic', label: '📚 Basic' },
            { value: 'intermediate', label: '📖 Intermediate' },
            { value: 'advanced', label: '🎓 Advanced' },
            { value: 'competitive', label: '🏆 Competitive Exams' },
        ],
        defaultValue: 'intermediate',
    },
    {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: [
            { value: 'general', label: '📋 General' },
            { value: 'academic', label: '🎓 Academic' },
            { value: 'business', label: '💼 Business' },
            { value: 'gre-sat', label: '📝 GRE/SAT' },
        ],
        defaultValue: 'general',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const wordCount = options?.wordCount || '20';
    const level = options?.level || 'intermediate';
    const category = options?.category || 'general';

    return `Generate ${wordCount} ${level}-level vocabulary words for ${category} learning.

For each word, provide:
1. The word
2. Part of speech
3. Definition
4. Example sentence
5. Memory tip or mnemonic

Topic focus:
${input}

Vocabulary list:`;
};

const faqs = [
    { question: "What levels are available?", answer: "Basic, Intermediate, Advanced, and Competitive Exam (GRE/SAT) levels." },
    { question: "How are words selected?", answer: "AI selects high-value words relevant to your topic and selected level." },
];

const relatedTools = [
    { name: 'Flashcard Maker', slug: 'flashcard-maker', icon: Brain, color: 'text-purple-600' },
    { name: 'Synonym Finder', slug: 'synonym-finder', icon: BookOpen, color: 'text-blue-600' },
    { name: 'Antonym Finder', slug: 'antonym-finder', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Idioms & Phrases', slug: 'idioms-phrases', icon: BookMarked, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Topic', desc: 'Choose your focus area', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Level', desc: 'Pick difficulty', icon: Target, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Learn Words', desc: 'Study with examples', icon: Brain, color: 'from-green-500 to-emerald-600' },
];

export default function VocabularyBuilderClient() {
    return (
        <PremiumToolWrapper
            toolName="Vocabulary Builder"
            toolSlug="vocabulary-builder"
            tagline="Expand your vocabulary effortlessly"
            description="Learn new words with definitions, examples, and memory tips tailored to your level."
            badge="Word Power"
            category="Exam Prep Tools"
            categorySlug="exam-prep-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Improved my GRE verbal score by 5 points! The memory tips are incredibly helpful.",
                author: "Daniel Kim",
                role: "Grad School Applicant",
                initial: "D"
            }}
            relatedTools={relatedTools}
            ctaTitle="Build Your Vocabulary"
            ctaDescription="Words are the building blocks of success."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📚 Enter a topic or domain to learn vocabulary for...

Examples:
• Business and finance
• Science and technology
• Literature and arts
• Current affairs"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="vocabulary-builder"
                toolOptions={toolOptions}
                resultLabel="📖 Vocabulary List"
                generateButtonText="📚 Generate Words"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
