'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { User, Instagram, Twitter, Linkedin, Sparkles, FileText } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'platform',
        label: 'Platform',
        type: 'select',
        options: [
            { value: 'instagram', label: '📸 Instagram' },
            { value: 'twitter', label: '🐦 Twitter/X' },
            { value: 'linkedin', label: '💼 LinkedIn' },
            { value: 'tiktok', label: '🎵 TikTok' },
            { value: 'personal', label: '👤 Personal Website' },
        ],
        defaultValue: 'instagram',
    },
    {
        id: 'tone',
        label: 'Tone',
        type: 'select',
        options: [
            { value: 'professional', label: '👔 Professional' },
            { value: 'casual', label: '😊 Casual & Fun' },
            { value: 'creative', label: '🎨 Creative' },
            { value: 'witty', label: '😄 Witty' },
        ],
        defaultValue: 'casual',
    },
    {
        id: 'includeEmojis',
        label: 'Include Emojis',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const platform = options?.platform || 'instagram';
    const tone = options?.tone || 'casual';
    const includeEmojis = options?.includeEmojis !== false;

    const platformLimits: Record<string, string> = {
        instagram: '150 characters max',
        twitter: '160 characters max',
        linkedin: '220 characters max',
        tiktok: '80 characters max',
        personal: 'no character limit',
    };

    return `Create a ${platform} bio with a ${tone} tone.
${includeEmojis ? 'You may use 0-2 relevant emojis total (keep it minimal).' : 'Do not use emojis.'}
Character limit: ${platformLimits[platform]}

Generate 3 different bio options.

About the person:
${input}

Bios:`;
};

const faqs = [
    { question: "How many bios do I get?", answer: "We generate 3 different options so you can pick your favorite!" },
    { question: "What character limits apply?", answer: "Bios are optimized for each platform's specific limits." },
];

const relatedTools = [
    { name: 'Caption Generator', slug: 'caption-generator', icon: Instagram, color: 'text-pink-600' },
    { name: 'Cover Letter', slug: 'cover-letter-writer', icon: FileText, color: 'text-blue-600' },
    { name: 'Resume Bullets', slug: 'resume-bullets', icon: Sparkles, color: 'text-purple-600' },
    { name: 'Email Writer', slug: 'email-writer', icon: Twitter, color: 'text-green-600' },
];

const howItWorks = [
    { step: 1, title: 'Share Info', desc: 'Tell us about yourself', icon: User, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Pick Platform', desc: 'Choose where to use it', icon: Instagram, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Bios', desc: 'Pick from 3 options', icon: Sparkles, color: 'from-green-500 to-emerald-600' },
];

export default function BioGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Bio Generator"
            toolSlug="bio-generator"
            tagline="Create the perfect social media bio"
            description="Generate catchy, platform-optimized bios for Instagram, Twitter, LinkedIn, and more."
            badge="Profile Booster"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Finally found the perfect Instagram bio! The witty option got me so many compliments.",
                author: "Sophia Wang",
                role: "Content Creator",
                initial: "S"
            }}
            relatedTools={relatedTools}
            ctaTitle="Create Your Bio"
            ctaDescription="Stand out on social media."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="👤 Tell us about yourself...

Example:
• Freelance photographer based in NYC
• Specializing in portrait and street photography
• Coffee enthusiast and dog lover"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="bio-generator"
                toolOptions={toolOptions}
                resultLabel="✨ Your Bios"
                generateButtonText="🚀 Generate Bios"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
