'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { BookOpen, Lightbulb, Search, Sparkles, RefreshCw } from 'lucide-react';

const generatePrompt = (input: string) => {
    return `Find synonyms for the following word or phrase.

Provide:
1. Multiple synonyms grouped by intensity/formality
2. Brief definition of each synonym
3. Example sentence for top 3 synonyms
4. Related words and expressions

Word/Phrase:
${input}

Synonyms:`;
};

const faqs = [
    { question: "How many synonyms will I get?", answer: "Usually 10-15 synonyms grouped by formality and intensity." },
    { question: "Are examples included?", answer: "Yes! Top synonyms come with usage examples." },
];

const relatedTools = [
    { name: 'Antonym Finder', slug: 'antonym-finder', icon: RefreshCw, color: 'text-blue-600' },
    { name: 'Vocabulary Builder', slug: 'vocabulary-builder', icon: BookOpen, color: 'text-purple-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: Sparkles, color: 'text-green-600' },
    { name: 'One Word Sub', slug: 'one-word-substitution', icon: Lightbulb, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Word', desc: 'Type any word', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Get Results', desc: 'Receive synonyms', icon: Search, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Use Them', desc: 'Enrich your writing', icon: Sparkles, color: 'from-green-500 to-emerald-600' },
];

export default function SynonymFinderClient() {
    return (
        <PremiumToolWrapper
            toolName="Synonym Finder"
            toolSlug="synonym-finder"
            tagline="Find the perfect word alternative"
            description="Discover synonyms with definitions and usage examples to elevate your vocabulary."
            badge="Word Explorer"
            category="Exam Prep Tools"
            categorySlug="exam-prep-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Helped me avoid word repetition in my essays. The grouping by formality is super useful!",
                author: "Sophie Miller",
                role: "English Major",
                initial: "S"
            }}
            relatedTools={relatedTools}
            ctaTitle="Find Synonyms"
            ctaDescription="Never use the same word twice."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="🔤 Enter a word to find synonyms...

Examples:
• Happy
• Important
• Beautiful
• Difficult"
                promptTemplate={generatePrompt}
                inputRows={2}
                toolSlug="synonym-finder"
                resultLabel="📚 Synonyms"
                generateButtonText="🔍 Find Synonyms"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
