'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { FileText, Lightbulb, Sparkles, BookOpen, Eye, CheckCircle } from 'lucide-react';

const generatePrompt = (input: string) => {
    return `Simplify the following text so it's easy to understand for anyone.

- Use simple, everyday words
- Break down complex sentences
- Explain technical terms
- Keep the main meaning intact
- Make it readable at a 6th-grade level

Text to simplify:
${input}

Simplified version:`;
};

const faqs = [
    { question: "What reading level does it target?", answer: "Approximately 6th-grade level - clear enough for anyone to understand." },
    { question: "Will the meaning change?", answer: "No! The core message stays the same, just in simpler words." },
];

const relatedTools = [
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: CheckCircle, color: 'text-blue-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: Sparkles, color: 'text-purple-600' },
    { name: 'Concept Explainer', slug: 'concept-explainer', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Essay Writer', slug: 'essay-writer', icon: FileText, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Paste Text', desc: 'Add complex content', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Simplify', desc: 'AI rewrites clearly', icon: Eye, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Use It', desc: 'Easy to understand!', icon: Sparkles, color: 'from-green-500 to-emerald-600' },
];

export default function TextSimplifierClient() {
    return (
        <PremiumToolWrapper
            toolName="Text Simplifier"
            toolSlug="text-simplifier"
            tagline="Make any text easy to understand"
            description="Transform complex text into simple, clear language that anyone can comprehend."
            badge="Clarity Tool"
            category="Utility Tools"
            categorySlug="utility-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Perfect for simplifying our legal documents for customers. Clarity improved dramatically!",
                author: "Karen White",
                role: "UX Writer",
                initial: "K"
            }}
            relatedTools={relatedTools}
            ctaTitle="Simplify Your Text"
            ctaDescription="Clarity is the ultimate form of intelligence."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📄 Paste complex text to simplify...

Works great with:
• Legal documents
• Technical documentation
• Academic papers
• Medical information"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="text-simplifier"
                resultLabel="✨ Simplified Text"
                generateButtonText="🔄 Simplify"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
