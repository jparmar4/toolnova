'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import {
    BookOpen,
    Brain,
    Lightbulb,
    FileText,
    Calculator,
    Layers,
    ClipboardList
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'cardCount',
        label: 'Number of Cards',
        type: 'select',
        options: [
            { value: '5', label: '5 Cards' },
            { value: '10', label: '10 Cards' },
            { value: '15', label: '15 Cards' },
            { value: '20', label: '20 Cards' },
        ],
        defaultValue: '10',
    },
    {
        id: 'style',
        label: 'Card Style',
        type: 'select',
        options: [
            { value: 'term-definition', label: '📖 Term → Definition' },
            { value: 'question-answer', label: '❓ Question → Answer' },
            { value: 'concept-example', label: '💡 Concept → Example' },
        ],
        defaultValue: 'term-definition',
    },
    {
        id: 'includeHints',
        label: 'Add Memory Hints',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const cardCount = options?.cardCount || '10';
    const style = options?.style || 'term-definition';
    const includeHints = options?.includeHints !== false;

    const styleDescriptions: Record<string, string> = {
        'term-definition': 'Each card should have a term on the front and its definition on the back.',
        'question-answer': 'Each card should have a question on the front and the answer on the back.',
        'concept-example': 'Each card should have a concept on the front and a practical example on the back.',
    };

    return `Create ${cardCount} flashcards from the following content.
${styleDescriptions[style]}
${includeHints ? 'Include a memory hint or mnemonic for each card.' : ''}

Format each card as:
FRONT: [content]
BACK: [content]
${includeHints ? 'HINT: [memory tip]' : ''}
---

Content:
${input}

Flashcards:`;
};

const faqs = [
    { question: "What flashcard styles are available?", answer: "Choose from Term→Definition, Question→Answer, or Concept→Example formats." },
    { question: "Can I add memory hints?", answer: "Yes! Enable the hints option to get mnemonics and memory tips for each card." },
    { question: "How do I study with these cards?", answer: "Cover the back of each card and try to recall the answer from memory, then check if you're correct." },
];

const relatedTools = [
    { name: 'Quiz Generator', slug: 'quiz-generator', icon: Lightbulb, color: 'text-green-600' },
    { name: 'MCQ Generator', slug: 'mcq-generator', icon: ClipboardList, color: 'text-blue-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-purple-600' },
    { name: 'Homework Solver', slug: 'homework-solver', icon: Calculator, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Add Content', desc: 'Paste your study material', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Choose Style', desc: 'Pick your flashcard format', icon: Layers, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Study Cards', desc: 'Start memorizing effectively', icon: Brain, color: 'from-green-500 to-emerald-600' },
];

export default function FlashcardMakerClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Flashcard Maker"
            toolSlug="flashcard-maker"
            tagline="Create digital flashcards for effective memorization"
            description="Turn any content into study-ready flashcards with memory hints and multiple formats."
            badge="Memory Booster"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "The memory hints are amazing! I memorized 200+ terms for my biology exam in just a week.",
                author: "Ryan Kim",
                role: "College Freshman",
                initial: "R"
            }}
            relatedTools={relatedTools}
            ctaTitle="Create Your Flashcards"
            ctaDescription="Study smarter with AI-generated flashcards."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📚 Paste your study content here...

Examples:
• Chapter content from your textbook
• Key terms and vocabulary lists
• Lecture notes or summaries"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="flashcard-maker"
                toolOptions={toolOptions}
                resultLabel="🃏 Your Flashcards"
                generateButtonText="🧠 Create Flashcards"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
