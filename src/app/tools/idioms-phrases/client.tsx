'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { BookOpen, Lightbulb, MessageCircle, Sparkles, Quote } from 'lucide-react';

const generatePrompt = (input: string) => {
    return `Provide idioms and phrases related to the following topic or keyword.

For each idiom/phrase:
1. The idiom or phrase
2. Meaning
3. Origin (if known)
4. Example sentence
5. Similar expressions

Topic/Keyword:
${input}

Idioms and Phrases:`;
};

const faqs = [
    { question: "What's included for each idiom?", answer: "Meaning, origin, example sentence, and similar expressions." },
    { question: "Can I learn idioms for exams?", answer: "Yes! These are great for competitive exams and language tests." },
];

const relatedTools = [
    { name: 'Vocabulary Builder', slug: 'vocabulary-builder', icon: BookOpen, color: 'text-blue-600' },
    { name: 'One Word Sub', slug: 'one-word-substitution', icon: Sparkles, color: 'text-purple-600' },
    { name: 'Synonym Finder', slug: 'synonym-finder', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: MessageCircle, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Topic', desc: 'Type a theme or keyword', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Get Idioms', desc: 'Receive related idioms', icon: Quote, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Learn & Use', desc: 'Apply in your writing', icon: Sparkles, color: 'from-green-500 to-emerald-600' },
];

export default function IdiomsPhrasesClient() {
    return (
        <PremiumToolWrapper
            toolName="Idioms & Phrases"
            toolSlug="idioms-phrases"
            tagline="Master idioms to enrich your language"
            description="Learn idioms with meanings, origins, examples, and similar expressions for any topic."
            badge="Language Master"
            category="Exam Prep Tools"
            categorySlug="exam-prep-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Essential for my IELTS prep! Learning the origins helped me remember them better.",
                author: "Priya Singh",
                role: "IELTS Candidate",
                initial: "P"
            }}
            relatedTools={relatedTools}
            ctaTitle="Learn Idioms Now"
            ctaDescription="Speak and write like a native."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📚 Enter a topic, emotion, or keyword...

Examples:
• Time and patience
• Success and failure
• Weather expressions
• Money and wealth"
                promptTemplate={generatePrompt}
                inputRows={3}
                toolSlug="idioms-phrases"
                resultLabel="💬 Idioms & Phrases"
                generateButtonText="📖 Get Idioms"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
