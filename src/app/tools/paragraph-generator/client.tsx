'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { FileText, Pencil, BookOpen, Lightbulb, MessageSquare, AlignLeft } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'type',
        label: 'Paragraph Type',
        type: 'select',
        options: [
            { value: 'general', label: '📝 General' },
            { value: 'introduction', label: '👋 Introduction' },
            { value: 'conclusion', label: '🎯 Conclusion' },
            { value: 'body', label: '📄 Body Paragraph' },
            { value: 'creative', label: '🎨 Creative' },
        ],
        defaultValue: 'general',
    },
    {
        id: 'length',
        label: 'Length',
        type: 'select',
        options: [
            { value: 'short', label: '⚡ Short (3-4 sentences)' },
            { value: 'medium', label: '📝 Medium (5-7 sentences)' },
            { value: 'long', label: '📚 Long (8-10 sentences)' },
        ],
        defaultValue: 'medium',
    },
    {
        id: 'tone',
        label: 'Tone',
        type: 'select',
        options: [
            { value: 'formal', label: '👔 Formal' },
            { value: 'casual', label: '😊 Casual' },
            { value: 'academic', label: '🎓 Academic' },
        ],
        defaultValue: 'formal',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const type = options?.type || 'general';
    const length = options?.length || 'medium';
    const tone = options?.tone || 'formal';

    const lengthSentences: Record<string, string> = {
        short: '3-4 sentences',
        medium: '5-7 sentences',
        long: '8-10 sentences',
    };

    return `Write a ${type} paragraph about the following topic.
Tone: ${tone}
Length: ${lengthSentences[length]}

Ensure the paragraph is well-structured with:
- A clear topic sentence
- Supporting details
- Smooth transitions

Topic:
${input}

Paragraph:`;
};

const faqs = [
    { question: "What paragraph types can I create?", answer: "General, Introduction, Conclusion, Body, and Creative paragraphs." },
    { question: "What's the difference between tones?", answer: "Formal is professional, Casual is friendly, Academic is scholarly." },
];

const relatedTools = [
    { name: 'Essay Writer', slug: 'essay-writer', icon: FileText, color: 'text-blue-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: MessageSquare, color: 'text-purple-600' },
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: Pencil, color: 'text-green-600' },
    { name: 'Story Generator', slug: 'story-generator', icon: BookOpen, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Topic', desc: 'Type your paragraph topic', icon: Lightbulb, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Choose Style', desc: 'Select type and tone', icon: AlignLeft, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Result', desc: 'Receive your paragraph', icon: Pencil, color: 'from-green-500 to-emerald-600' },
];

export default function ParagraphGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Paragraph Generator"
            toolSlug="paragraph-generator"
            tagline="Create perfect paragraphs instantly"
            description="Generate well-structured paragraphs for essays, articles, or any content needs."
            badge="Writing Helper"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Perfect for when I'm stuck on how to start a paragraph. The introductions are especially helpful!",
                author: "Lisa Park",
                role: "Content Writer",
                initial: "L"
            }}
            relatedTools={relatedTools}
            ctaTitle="Generate Your Paragraph"
            ctaDescription="Never get stuck on a blank page again."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📝 Enter your paragraph topic...

Examples:
• The importance of time management
• Benefits of regular exercise
• Technology in education"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="paragraph-generator"
                toolOptions={toolOptions}
                resultLabel="📄 Your Paragraph"
                generateButtonText="✍️ Generate Paragraph"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
