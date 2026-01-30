'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { toolFAQs } from '@/lib/content-database';
import { FileText, Hash, Twitter, MessageSquare, Type, BarChart2 } from 'lucide-react';

function characterCounter(input: string): string {
    const totalChars = input.length;
    const charsNoSpaces = input.replace(/\s+/g, '').length;
    const spaces = totalChars - charsNoSpaces;
    const words = input.trim().split(/\s+/).filter(word => word.length > 0).length;
    const lines = input.split('\n').length;

    const twitterRemaining = 280 - totalChars;
    const smsCount = Math.ceil(totalChars / 160);

    return `📊 **Character Count Results**

✅ **Total Characters:** ${totalChars}
✅ **Characters (no spaces):** ${charsNoSpaces}
✅ **Spaces:** ${spaces}
✅ **Words:** ${words}
✅ **Lines:** ${lines}

**📱 Social Media:**
${twitterRemaining >= 0
            ? `🐦 Twitter: ${twitterRemaining} characters remaining`
            : `🐦 Twitter: ${Math.abs(twitterRemaining)} characters over limit`}
📱 SMS: ${smsCount} message${smsCount > 1 ? 's' : ''}`;
}

const relatedTools = [
    { name: 'Word Counter', slug: 'word-counter', icon: FileText, color: 'text-blue-600' },
    { name: 'Case Converter', slug: 'case-converter', icon: Type, color: 'text-purple-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: MessageSquare, color: 'text-green-600' },
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: BarChart2, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Paste Text', desc: 'Add your content', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Get Count', desc: 'See all characters', icon: Hash, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Check Limits', desc: 'Twitter/SMS ready!', icon: Twitter, color: 'from-green-500 to-emerald-600' },
];

const customFeatures = [
    { icon: Hash, title: 'Character Count', desc: 'With & without spaces' },
    { icon: Twitter, title: 'Twitter Limit', desc: '280 char checker' },
    { icon: MessageSquare, title: 'SMS Counter', desc: 'Message count' },
];

export default function CharacterCounterClient() {
    return (
        <PremiumToolWrapper
            toolName="Character Counter"
            toolSlug="character-counter"
            tagline="Count characters & check social limits"
            description="Count characters, check Twitter/SMS limits, and analyze your text instantly."
            badge="Writing Tool"
            category="Utility Tools"
            categorySlug="utility-tools"
            features={customFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Perfect for crafting tweets that fit! Never exceed limits again.",
                author: "Sarah Chen",
                role: "Social Media Manager",
                initial: "S"
            }}
            relatedTools={relatedTools}
            ctaTitle="Count Characters"
            ctaDescription="Perfect for Twitter, SMS, and meta descriptions."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📝 Paste or type your text here...

Check limits for:
• Twitter (280 chars)
• SMS messages
• Meta descriptions"
                promptTemplate={(input) => input}
                inputRows={6}
                isNonAITool={true}
                nonAIHandler={characterCounter}
                toolSlug="character-counter"
                resultLabel="📊 Character Statistics"
                generateButtonText="📊 Count Characters"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={toolFAQs['character-counter']} />
            </div>
        </PremiumToolWrapper>
    );
}
