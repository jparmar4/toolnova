'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { toolFAQs } from '@/lib/content-database';
import { FileText, Type, ArrowUpDown, Zap, Hash, Sparkles } from 'lucide-react';

function caseConverter(input: string): string {
    const uppercase = input.toUpperCase();
    const lowercase = input.toLowerCase();
    const titleCase = input.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    const sentenceCase = input.toLowerCase().replace(/(^\w|\.\s+\w)/g, char => char.toUpperCase());
    const alternatingCase = input.split('').map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
    const inverseCase = input.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');

    return `📝 **Case Conversion Results**

**UPPERCASE:**
${uppercase}

**lowercase:**
${lowercase}

**Title Case:**
${titleCase}

**Sentence case:**
${sentenceCase}

**aLtErNaTiNg CaSe:**
${alternatingCase}

**iNVERSE cASE:**
${inverseCase}`;
}

const relatedTools = [
    { name: 'Word Counter', slug: 'word-counter', icon: Hash, color: 'text-blue-600' },
    { name: 'Character Counter', slug: 'character-counter', icon: FileText, color: 'text-purple-600' },
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: Sparkles, color: 'text-green-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: Type, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Text', desc: 'Paste content', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Convert', desc: 'See all cases', icon: ArrowUpDown, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Copy', desc: 'Use any format!', icon: Zap, color: 'from-green-500 to-emerald-600' },
];

const customFeatures = [
    { icon: Type, title: '6 Case Types', desc: 'All formats at once' },
    { icon: Zap, title: 'Instant Convert', desc: 'No delays' },
    { icon: ArrowUpDown, title: 'Inverse Case', desc: 'Swap case too' },
];

export default function CaseConverterClient() {
    return (
        <PremiumToolWrapper
            toolName="Case Converter"
            toolSlug="case-converter"
            tagline="Convert text between different cases"
            description="Transform text between UPPERCASE, lowercase, Title Case, Sentence case, and more formats instantly."
            badge="Text Tool"
            category="Utility Tools"
            categorySlug="utility-tools"
            features={customFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Saves me so much time converting headlines and titles. Love the instant results!",
                author: "Mike Johnson",
                role: "Copywriter",
                initial: "M"
            }}
            relatedTools={relatedTools}
            ctaTitle="Convert Text Case"
            ctaDescription="From headlines to code - all case formats in one click."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📝 Enter text to convert...

Get all formats:
• UPPERCASE
• lowercase
• Title Case
• Sentence case
• aLtErNaTiNg CaSe"
                promptTemplate={(input) => input}
                inputRows={5}
                isNonAITool={true}
                nonAIHandler={caseConverter}
                toolSlug="case-converter"
                resultLabel="📝 Converted Text"
                generateButtonText="🔄 Convert Case"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={toolFAQs['case-converter']} />
            </div>
        </PremiumToolWrapper>
    );
}
