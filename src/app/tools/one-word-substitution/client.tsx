'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { BookOpen, Lightbulb, MessageCircle, Sparkles, Type as TypeIcon } from 'lucide-react';

const generatePrompt = (input: string) => {
    return `Provide one-word substitutions for the following phrases or descriptions.

For each phrase, provide:
1. The phrase or description
2. The one-word substitute
3. Part of speech
4. Usage example
5. Memory tip

Phrases:
${input}

One-Word Substitutions:`;
};

const faqs = [
    { question: "What are one-word substitutions?", answer: "Single words that can replace entire phrases, essential for competitive exams." },
    { question: "How do I use these?", answer: "Great for making writing more concise and scoring in vocabulary sections." },
];

const relatedTools = [
    { name: 'Idioms & Phrases', slug: 'idioms-phrases', icon: BookOpen, color: 'text-blue-600' },
    { name: 'Vocabulary Builder', slug: 'vocabulary-builder', icon: Sparkles, color: 'text-purple-600' },
    { name: 'Synonym Finder', slug: 'synonym-finder', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Antonym Finder', slug: 'antonym-finder', icon: MessageCircle, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Phrases', desc: 'Type descriptions', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Get Words', desc: 'Receive one-word subs', icon: TypeIcon, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Apply', desc: 'Use in exams & writing', icon: Sparkles, color: 'from-green-500 to-emerald-600' },
];

export default function OneWordSubstitutionClient() {
    return (
        <PremiumToolWrapper
            toolName="One Word Substitution"
            toolSlug="one-word-substitution"
            tagline="Master concise vocabulary for exams"
            description="Find single words that replace entire phrases - perfect for competitive exams and effective writing."
            badge="Exam Essential"
            category="Exam Prep Tools"
            categorySlug="exam-prep-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Scored full marks in the vocabulary section of my government exam! This tool is gold.",
                author: "Rahul Verma",
                role: "SSC Candidate",
                initial: "R"
            }}
            relatedTools={relatedTools}
            ctaTitle="Find Substitutions"
            ctaDescription="One word is worth a thousand phrases."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📚 Enter phrases you want one-word substitutes for...

Examples:
• A person who writes dictionaries
• The study of birds
• Someone who loves books
• A fear of heights"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="one-word-substitution"
                resultLabel="📝 One-Word Substitutions"
                generateButtonText="🔤 Find Words"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
