'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { Image, Instagram, Camera, Lightbulb, Sparkles, Hash } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'platform',
        label: 'Platform',
        type: 'select',
        options: [
            { value: 'instagram', label: '📸 Instagram' },
            { value: 'facebook', label: '👥 Facebook' },
            { value: 'linkedin', label: '💼 LinkedIn' },
            { value: 'tiktok', label: '🎵 TikTok' },
            { value: 'twitter', label: '🐦 Twitter/X' },
        ],
        defaultValue: 'instagram',
    },
    {
        id: 'tone',
        label: 'Tone',
        type: 'select',
        options: [
            { value: 'casual', label: '😊 Casual' },
            { value: 'professional', label: '👔 Professional' },
            { value: 'funny', label: '😂 Funny' },
            { value: 'inspirational', label: '✨ Inspirational' },
        ],
        defaultValue: 'casual',
    },
    {
        id: 'includeHashtags',
        label: 'Include Hashtags',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const platform = options?.platform || 'instagram';
    const tone = options?.tone || 'casual';
    const includeHashtags = options?.includeHashtags !== false;

    return `Create 3 ${platform} captions with a ${tone} tone.
${includeHashtags ? 'Include 5-10 relevant hashtags with each.' : 'No hashtags needed.'}

Each caption should:
- Be engaging and scroll-stopping
- Include a call-to-action or question
- Match the platform's style

Photo/Post description:
${input}

Captions:`;
};

const faqs = [
    { question: "How many captions do I get?", answer: "We generate 3 unique captions so you have options!" },
    { question: "Are hashtags included?", answer: "Yes, optionally! Enable the toggle to get relevant hashtags with each caption." },
];

const relatedTools = [
    { name: 'Bio Generator', slug: 'bio-generator', icon: Instagram, color: 'text-pink-600' },
    { name: 'Story Generator', slug: 'story-generator', icon: Sparkles, color: 'text-blue-600' },
    { name: 'Email Writer', slug: 'email-writer', icon: Lightbulb, color: 'text-purple-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: Hash, color: 'text-green-600' },
];

const howItWorks = [
    { step: 1, title: 'Describe Post', desc: 'Tell us about your photo', icon: Camera, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Pick Style', desc: 'Choose tone and platform', icon: Image, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Captions', desc: 'Copy and post!', icon: Sparkles, color: 'from-green-500 to-emerald-600' },
];

export default function CaptionGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="Caption Generator"
            toolSlug="caption-generator"
            tagline="Create engaging social media captions"
            description="Generate scroll-stopping captions with hashtags for Instagram, TikTok, and more."
            badge="Social Media Pro"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "My engagement went up 200% after using these captions! The hashtag suggestions are spot-on.",
                author: "Maya Johnson",
                role: "Travel Blogger",
                initial: "M"
            }}
            relatedTools={relatedTools}
            ctaTitle="Create Captions"
            ctaDescription="Boost your social media engagement."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📸 Describe your photo or post...

Example:
• Beach sunset photo with my best friend
• New product launch for my small business
• Healthy breakfast bowl I made this morning"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="caption-generator"
                toolOptions={toolOptions}
                resultLabel="📝 Your Captions"
                generateButtonText="✨ Generate Captions"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
