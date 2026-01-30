'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { FileText, Pencil, BookOpen, Lightbulb, Sparkles, BookMarked } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'genre',
        label: 'Genre',
        type: 'select',
        options: [
            { value: 'fantasy', label: '🧙 Fantasy' },
            { value: 'scifi', label: '🚀 Sci-Fi' },
            { value: 'romance', label: '❤️ Romance' },
            { value: 'mystery', label: '🔍 Mystery' },
            { value: 'adventure', label: '⚔️ Adventure' },
            { value: 'horror', label: '👻 Horror' },
        ],
        defaultValue: 'adventure',
    },
    {
        id: 'length',
        label: 'Story Length',
        type: 'select',
        options: [
            { value: 'flash', label: '⚡ Flash Fiction (100-300 words)' },
            { value: 'short', label: '📖 Short Story (500-800 words)' },
            { value: 'detailed', label: '📚 Detailed (1000+ words)' },
        ],
        defaultValue: 'short',
    },
    {
        id: 'audience',
        label: 'Audience',
        type: 'select',
        options: [
            { value: 'children', label: '👶 Children' },
            { value: 'teens', label: '👦 Teens' },
            { value: 'adults', label: '👨 Adults' },
        ],
        defaultValue: 'teens',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const genre = options?.genre || 'adventure';
    const length = options?.length || 'short';
    const audience = options?.audience || 'teens';

    const lengthWords: Record<string, string> = {
        flash: '100-300 words',
        short: '500-800 words',
        detailed: '1000+ words',
    };

    return `Write a ${genre} story for ${audience} audience.
Length: ${lengthWords[length]}

Include:
- Engaging opening hook
- Interesting characters
- Rising action and climax
- Satisfying conclusion

Story premise/idea:
${input}

Story:`;
};

const faqs = [
    { question: "What genres are available?", answer: "Fantasy, Sci-Fi, Romance, Mystery, Adventure, and Horror stories." },
    { question: "Can I specify characters?", answer: "Yes! Include character names and traits in your prompt for personalized stories." },
];

const relatedTools = [
    { name: 'Essay Writer', slug: 'essay-writer', icon: FileText, color: 'text-blue-600' },
    { name: 'Speech Writer', slug: 'speech-writer', icon: Lightbulb, color: 'text-purple-600' },
    { name: 'Bio Generator', slug: 'bio-generator', icon: Pencil, color: 'text-green-600' },
    { name: 'Caption Generator', slug: 'caption-generator', icon: Sparkles, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Idea', desc: 'Describe your story premise', icon: Lightbulb, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Pick Genre', desc: 'Choose style and length', icon: BookMarked, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Read Story', desc: 'Enjoy your creation', icon: BookOpen, color: 'from-green-500 to-emerald-600' },
];

export default function StoryGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Story Generator"
            toolSlug="story-generator"
            tagline="Create captivating stories in any genre"
            description="Generate unique short stories, flash fiction, or detailed narratives based on your ideas."
            badge="Creative Writing"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "I use this for creative writing prompts. It sparks amazing ideas and helps me overcome writer's block!",
                author: "Emma Taylor",
                role: "Aspiring Author",
                initial: "E"
            }}
            relatedTools={relatedTools}
            ctaTitle="Start Your Story"
            ctaDescription="Every great story starts with an idea."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="🎭 Enter your story idea or premise...

Examples:
• A young wizard discovers a hidden power on their birthday
• Two strangers meet on a train to Paris
• A detective receives a mysterious letter from the future"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="story-generator"
                toolOptions={toolOptions}
                resultLabel="📖 Your Story"
                generateButtonText="✨ Generate Story"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
