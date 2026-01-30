'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { BookOpen, Lightbulb, Search, Sparkles, ArrowLeftRight } from 'lucide-react';

const generatePrompt = (input: string) => {
    return `Find antonyms (opposite meanings) for the following word or phrase.

Provide:
1. Multiple antonyms grouped by context
2. Brief definition of each antonym
3. Example sentence for top 3 antonyms
4. Related opposite expressions

Word/Phrase:
${input}

Antonyms:`;
};

const faqs = [
    { question: "What are antonyms?", answer: "Words with opposite meanings, like 'hot' and 'cold'." },
    { question: "How are they grouped?", answer: "By context - the same word can have different opposites in different contexts." },
];

const relatedTools = [
    { name: 'Synonym Finder', slug: 'synonym-finder', icon: Search, color: 'text-blue-600' },
    { name: 'Vocabulary Builder', slug: 'vocabulary-builder', icon: BookOpen, color: 'text-purple-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: Sparkles, color: 'text-green-600' },
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: Lightbulb, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Word', desc: 'Type any word', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Get Opposites', desc: 'Receive antonyms', icon: ArrowLeftRight, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Learn Pairs', desc: 'Master vocabulary', icon: Sparkles, color: 'from-green-500 to-emerald-600' },
];

export default function AntonymFinderClient() {
    return (
        <PremiumToolWrapper
            toolName="Antonym Finder"
            toolSlug="antonym-finder"
            tagline="Find opposite meanings instantly"
            description="Discover antonyms with definitions and examples - perfect for vocabulary building and exams."
            badge="Word Pairs"
            category="Exam Prep Tools"
            categorySlug="exam-prep-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "The contextual grouping is brilliant! Now I understand why 'small' isn't always opposite to 'big'.",
                author: "James Wilson",
                role: "Language Teacher",
                initial: "J"
            }}
            relatedTools={relatedTools}
            ctaTitle="Find Antonyms"
            ctaDescription="Understand words through their opposites."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="🔤 Enter a word to find antonyms...

Examples:
• Happy
• Large
• Success
• Increase"
                promptTemplate={generatePrompt}
                inputRows={2}
                toolSlug="antonym-finder"
                resultLabel="📚 Antonyms"
                generateButtonText="🔍 Find Antonyms"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
