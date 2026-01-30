'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { toolFAQs } from '@/lib/content-database';
import { FileText, Hash, Clock, BarChart2, Type, Target } from 'lucide-react';

function wordCounter(input: string): string {
    const words = input.trim().split(/\s+/).filter(word => word.length > 0);
    const characters = input.length;
    const charactersNoSpaces = input.replace(/\s+/g, '').length;
    const sentences = input.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = input.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    const readingTime = Math.ceil(words.length / 200);

    return `📊 **Word & Character Count**

✅ **Words:** ${words.length}
✅ **Characters:** ${characters}
✅ **Characters (no spaces):** ${charactersNoSpaces}
✅ **Sentences:** ${sentences}
✅ **Paragraphs:** ${paragraphs}
⏱️ **Reading Time:** ~${readingTime} ${readingTime === 1 ? 'minute' : 'minutes'}

${words.length > 0 ? `**Average word length:** ${(charactersNoSpaces / words.length).toFixed(1)} characters` : ''}`;
}

const relatedTools = [
    { name: 'Character Counter', slug: 'character-counter', icon: Hash, color: 'text-blue-600' },
    { name: 'Case Converter', slug: 'case-converter', icon: Type, color: 'text-purple-600' },
    { name: 'Text Summarizer', slug: 'text-summarizer', icon: FileText, color: 'text-green-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: Target, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Paste Text', desc: 'Add your content', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Instant Count', desc: 'See all stats', icon: BarChart2, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Use Data', desc: 'Optimize writing!', icon: Clock, color: 'from-green-500 to-emerald-600' },
];

const customFeatures = [
    { icon: BarChart2, title: 'Complete Stats', desc: 'Words, chars, sentences' },
    { icon: Clock, title: 'Reading Time', desc: 'Estimate read duration' },
    { icon: Hash, title: '100% Free', desc: 'No limits or signup' },
];

export default function WordCounterClient() {
    return (
        <PremiumToolWrapper
            toolName="Word Counter"
            toolSlug="word-counter"
            tagline="Count words, characters & reading time"
            description="Instantly analyze your text with word count, character count, sentence count, and estimated reading time."
            badge="Writing Tool"
            category="Utility Tools"
            categorySlug="utility-tools"
            features={customFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Essential tool for bloggers! Helps me stay within word limits every time.",
                author: "David Miller",
                role: "Content Writer",
                initial: "D"
            }}
            relatedTools={relatedTools}
            ctaTitle="Count Your Words"
            ctaDescription="Perfect for essays, blogs, and social media posts."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📝 Paste or type your text here...

Instantly see:
• Word count
• Character count  
• Reading time
• Paragraph count"
                promptTemplate={(input) => input}
                inputRows={6}
                isNonAITool={true}
                nonAIHandler={wordCounter}
                toolSlug="word-counter"
                resultLabel="📊 Word Statistics"
                generateButtonText="📊 Count Words"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={toolFAQs['word-counter']} />
            </div>
        </PremiumToolWrapper>
    );
}
