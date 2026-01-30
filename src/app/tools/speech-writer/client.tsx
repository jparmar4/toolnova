'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { FileText, Mic, Lightbulb, MessageSquare, Users, Target } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'occasion',
        label: 'Occasion',
        type: 'select',
        options: [
            { value: 'graduation', label: '🎓 Graduation' },
            { value: 'wedding', label: '💒 Wedding' },
            { value: 'business', label: '💼 Business/Conference' },
            { value: 'award', label: '🏆 Award Ceremony' },
            { value: 'memorial', label: '🕊️ Memorial' },
            { value: 'motivational', label: '💪 Motivational' },
        ],
        defaultValue: 'graduation',
    },
    {
        id: 'duration',
        label: 'Duration',
        type: 'select',
        options: [
            { value: '2min', label: '⏱️ 2 Minutes' },
            { value: '5min', label: '⏱️ 5 Minutes' },
            { value: '10min', label: '⏱️ 10 Minutes' },
        ],
        defaultValue: '5min',
    },
    {
        id: 'tone',
        label: 'Tone',
        type: 'select',
        options: [
            { value: 'formal', label: '👔 Formal' },
            { value: 'heartfelt', label: '❤️ Heartfelt' },
            { value: 'humorous', label: '😄 Humorous' },
            { value: 'inspirational', label: '✨ Inspirational' },
        ],
        defaultValue: 'heartfelt',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const occasion = options?.occasion || 'graduation';
    const duration = options?.duration || '5min';
    const tone = options?.tone || 'heartfelt';

    const durationWords: Record<string, string> = {
        '2min': 'approximately 300-400 words',
        '5min': 'approximately 700-900 words',
        '10min': 'approximately 1400-1600 words',
    };

    return `Write a ${occasion} speech with a ${tone} tone.
Duration: ${durationWords[duration]}

Include:
- Powerful opening hook
- Personal anecdotes or examples
- Key message or theme
- Memorable closing with call-to-action

Details:
${input}

Speech:`;
};

const faqs = [
    { question: "What occasions are covered?", answer: "Graduations, weddings, business events, awards, memorials, and motivational speeches." },
    { question: "How do I personalize it?", answer: "Include specific names, memories, or details in your input for a personalized speech." },
];

const relatedTools = [
    { name: 'Essay Writer', slug: 'essay-writer', icon: FileText, color: 'text-blue-600' },
    { name: 'Email Writer', slug: 'email-writer', icon: MessageSquare, color: 'text-purple-600' },
    { name: 'Bio Generator', slug: 'bio-generator', icon: Users, color: 'text-green-600' },
    { name: 'Cover Letter', slug: 'cover-letter-writer', icon: Target, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Share Details', desc: 'Describe your speech needs', icon: Lightbulb, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Tone', desc: 'Choose occasion and style', icon: Target, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Practice', desc: 'Get your speech ready', icon: Mic, color: 'from-green-500 to-emerald-600' },
];

export default function SpeechWriterClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Speech Writer"
            toolSlug="speech-writer"
            tagline="Write memorable speeches for any occasion"
            description="Create powerful, personalized speeches for graduations, weddings, business events, and more."
            badge="Public Speaking"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Used this for my best man speech. Everyone was in tears - the good kind! Absolutely perfect.",
                author: "Robert Miller",
                role: "Happy Best Man",
                initial: "R"
            }}
            relatedTools={relatedTools}
            ctaTitle="Write Your Speech"
            ctaDescription="Make an unforgettable impression."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="🎤 Describe your speech requirements...

Examples:
• Graduation speech for Class of 2026, theme: resilience and new beginnings
• Best man speech for my brother John, include story about fishing trip
• Motivational speech for sales team Q4 kickoff meeting"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="speech-writer"
                toolOptions={toolOptions}
                resultLabel="🎤 Your Speech"
                generateButtonText="✨ Write Speech"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
