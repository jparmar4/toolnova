'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { Mail, Send, FileText, Lightbulb, MessageSquare, Briefcase } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'emailType',
        label: 'Email Type',
        type: 'select',
        options: [
            { value: 'professional', label: '💼 Professional/Business' },
            { value: 'followup', label: '🔄 Follow-Up' },
            { value: 'request', label: '📋 Request' },
            { value: 'apology', label: '🙏 Apology' },
            { value: 'thank-you', label: '🙌 Thank You' },
            { value: 'introduction', label: '👋 Introduction' },
        ],
        defaultValue: 'professional',
    },
    {
        id: 'tone',
        label: 'Tone',
        type: 'select',
        options: [
            { value: 'formal', label: '👔 Formal' },
            { value: 'friendly', label: '😊 Friendly' },
            { value: 'persuasive', label: '💪 Persuasive' },
            { value: 'urgent', label: '⚡ Urgent' },
        ],
        defaultValue: 'formal',
    },
    {
        id: 'length',
        label: 'Length',
        type: 'select',
        options: [
            { value: 'brief', label: '⚡ Brief' },
            { value: 'medium', label: '📝 Medium' },
            { value: 'detailed', label: '📚 Detailed' },
        ],
        defaultValue: 'medium',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const type = options?.emailType || 'professional';
    const tone = options?.tone || 'formal';
    const length = options?.length || 'medium';

    return `Write a ${type} email with a ${tone} tone.
Length: ${length}

Include:
- Appropriate greeting
- Clear main message
- Professional closing
- Include subject line suggestion

Context:
${input}

Email:`;
};

const faqs = [
    { question: "What email types can I create?", answer: "Professional, follow-up, request, apology, thank you, and introduction emails." },
    { question: "Will it include a subject line?", answer: "Yes! Each email comes with a suggested subject line optimized for opens." },
];

const relatedTools = [
    { name: 'Cover Letter', slug: 'cover-letter-writer', icon: FileText, color: 'text-blue-600' },
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: MessageSquare, color: 'text-purple-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Bio Generator', slug: 'bio-generator', icon: Briefcase, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Describe Need', desc: 'Tell us about your email', icon: Lightbulb, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Tone', desc: 'Choose type and style', icon: FileText, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Send It', desc: 'Copy and use your email', icon: Send, color: 'from-green-500 to-emerald-600' },
];

export default function EmailWriterClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Email Writer"
            toolSlug="email-writer"
            tagline="Write professional emails in seconds"
            description="Generate polished, effective emails for any situation - from business requests to thank-you notes."
            badge="Email Pro"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "As a non-native speaker, this helps me write confident professional emails. Essential tool!",
                author: "Yuki Tanaka",
                role: "Marketing Manager",
                initial: "Y"
            }}
            relatedTools={relatedTools}
            ctaTitle="Compose Your Email"
            ctaDescription="Professional communication made easy."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📧 Describe what you need to communicate...

Examples:
• Follow up on job interview I had last week with hiring manager Sarah
• Request a meeting with my professor to discuss thesis progress
• Thank client for their business and introduce new services"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="email-writer"
                toolOptions={toolOptions}
                resultLabel="📧 Your Email"
                generateButtonText="✉️ Write Email"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
