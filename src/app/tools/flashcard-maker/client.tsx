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
        'term-definition': 'Each card has a TERM on the front and its DEFINITION on the back.',
        'question-answer': 'Each card has a QUESTION on the front and the ANSWER on the back.',
        'concept-example': 'Each card has a CONCEPT on the front and a REAL-WORLD EXAMPLE on the back.',
    };

    return `You are a friendly study coach creating flashcards that make memorization FUN! 🧠✨

YOUR STYLE:
- Keep front cards SHORT and punchy (easy to read at a glance)
- Make back cards clear and memorable
- Use simple language that sticks in the brain
- Add fun memory tricks that actually help!

FORMATTING RULES (VERY IMPORTANT):
- Do NOT use markdown symbols like #, ##, ###, **, ***, or ----
- Use EMOJIS to make each card visually distinct
- Use clear labels for each part of the card
- Separate each card with a blank line

Create ${cardCount} flashcards.
Style: ${styleDescriptions[style]}

FORMAT EACH CARD EXACTLY LIKE THIS:

🃏 CARD 1:

📌 FRONT:
[Short, clear term/question/concept]

✅ BACK:
[Clear, memorable answer or definition]

${includeHints ? `💡 MEMORY TIP:
[A fun trick, rhyme, or association to remember this easily]` : ''}

════════════════════

[Continue with Card 2, Card 3, etc.]

End with:
🎉 You now have ${cardCount} flashcards! Study tip: Review these cards before bed - your brain processes memories while you sleep! 😴💭

Content to turn into flashcards:
${input}

Now create amazing, memorable flashcards! 🚀`;
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
