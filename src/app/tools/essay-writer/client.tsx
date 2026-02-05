'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { FileText, Pencil, BookOpen, Lightbulb, MessageSquare, AlignLeft } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'essayType',
        label: 'Essay Type',
        type: 'select',
        options: [
            { value: 'argumentative', label: '⚔️ Argumentative' },
            { value: 'expository', label: '📖 Expository' },
            { value: 'narrative', label: '📝 Narrative' },
            { value: 'descriptive', label: '🎨 Descriptive' },
            { value: 'persuasive', label: '💪 Persuasive' },
        ],
        defaultValue: 'argumentative',
    },
    {
        id: 'length',
        label: 'Essay Length',
        type: 'select',
        options: [
            { value: 'short', label: '📄 Short (300-500 words)' },
            { value: 'medium', label: '📑 Medium (500-800 words)' },
            { value: 'long', label: '📚 Long (800-1200 words)' },
        ],
        defaultValue: 'medium',
    },
    {
        id: 'academicLevel',
        label: 'Academic Level',
        type: 'select',
        options: [
            { value: 'high-school', label: '🎓 High School' },
            { value: 'college', label: '🏛️ College' },
            { value: 'professional', label: '💼 Professional' },
        ],
        defaultValue: 'college',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const type = options?.essayType || 'argumentative';
    const length = options?.length || 'medium';
    const level = options?.academicLevel || 'college';

    const lengthWords: Record<string, string> = {
        short: '300-500 words',
        medium: '500-800 words',
        long: '800-1200 words',
    };

    return `You are a helpful writing tutor creating a well-structured essay for a student! ✍️📚

YOUR STYLE:
- Write in a clear, engaging, and appropriate academic voice
- Use vivid examples and smooth transitions
- Make the essay flow naturally from beginning to end
- Keep language accessible and avoid unnecessarily complex words

FORMATTING RULES (VERY IMPORTANT):
- Do NOT use markdown symbols like #, ##, ###, **, ***, or ----
- Use EMOJIS and CAPITAL LETTERS for section labels (example: "📌 INTRODUCTION:")
- Write in natural paragraph format
- Add blank lines between paragraphs for easy reading

Write a ${type} essay at ${level} level.
Length: ${lengthWords[length]}

STRUCTURE YOUR ESSAY LIKE THIS:

📌 INTRODUCTION:
[Hook to grab attention + background context + clear thesis statement]

📝 BODY PARAGRAPH 1:
[Topic sentence + supporting evidence + explanation + transition]

📝 BODY PARAGRAPH 2:
[Topic sentence + supporting evidence + explanation + transition]

📝 BODY PARAGRAPH 3:
[Topic sentence + supporting evidence + explanation + (transition if needed)]

🎯 CONCLUSION:
[Restate thesis differently + summarize key points + memorable closing thought]

End with:
💡 WRITING TIP: [Give one helpful tip about essay writing that relates to this type of essay]

Topic to write about:
${input}

Now write an engaging, well-structured essay! 🚀`;
};

const faqs = [
    { question: "What essay types are available?", answer: "Argumentative, Expository, Narrative, Descriptive, and Persuasive essays." },
    { question: "Is this plagiarism-free?", answer: "Yes! Each essay is uniquely generated based on your topic and requirements." },
    { question: "Can I use this for school assignments?", answer: "Use it for inspiration and learning. Always add your own voice and cite sources." },
];

const relatedTools = [
    { name: 'Paragraph Generator', slug: 'paragraph-generator', icon: AlignLeft, color: 'text-blue-600' },
    { name: 'Paraphraser', slug: 'paraphraser', icon: MessageSquare, color: 'text-purple-600' },
    { name: 'Grammar Fix', slug: 'grammar-fix', icon: Pencil, color: 'text-green-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Topic', desc: 'Type your essay topic', icon: Lightbulb, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Options', desc: 'Choose type and length', icon: FileText, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Essay', desc: 'Receive structured essay', icon: Pencil, color: 'from-green-500 to-emerald-600' },
];

export default function EssayWriterClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Essay Writer"
            toolSlug="essay-writer"
            tagline="Write professional essays in minutes"
            description="Generate well-structured essays with introductions, body paragraphs, and conclusions on any topic."
            badge="Academic Assistant"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "This helped me understand how to structure my essays properly. The flow and transitions are excellent!",
                author: "Michael Brown",
                role: "College Sophomore",
                initial: "M"
            }}
            relatedTools={relatedTools}
            ctaTitle="Start Writing"
            ctaDescription="Create compelling essays for any assignment."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="✍️ Enter your essay topic...

Examples:
• The impact of social media on modern communication
• Why renewable energy is essential for the future
• The benefits and drawbacks of remote learning"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="essay-writer"
                toolOptions={toolOptions}
                resultLabel="📝 Your Essay"
                generateButtonText="✨ Write Essay"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
