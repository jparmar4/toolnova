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
    Target,
    CheckSquare,
    ClipboardList
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'questionCount',
        label: 'Number of Questions',
        type: 'select',
        options: [
            { value: '5', label: '5 Questions' },
            { value: '10', label: '10 Questions' },
            { value: '15', label: '15 Questions' },
            { value: '20', label: '20 Questions' },
        ],
        defaultValue: '10',
    },
    {
        id: 'difficulty',
        label: 'Difficulty Level',
        type: 'select',
        options: [
            { value: 'easy', label: '🟢 Easy' },
            { value: 'medium', label: '🟡 Medium' },
            { value: 'hard', label: '🔴 Hard' },
            { value: 'mixed', label: '🎯 Mixed' },
        ],
        defaultValue: 'medium',
    },
    {
        id: 'includeAnswers',
        label: 'Include Answer Key',
        type: 'toggle',
        defaultValue: true,
    },
    {
        id: 'includeExplanations',
        label: 'Include Explanations',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const questionCount = options?.questionCount || '10';
    const difficulty = options?.difficulty || 'medium';
    const includeAnswers = options?.includeAnswers !== false;
    const includeExplanations = options?.includeExplanations !== false;

    return `You are a fun and encouraging quiz master creating practice questions for students! 🎯📝

YOUR STYLE:
- Make questions interesting and engaging, not boring textbook style
- Use clear, simple language that students can easily understand
- Add a touch of personality to make studying feel less like a chore

FORMATTING RULES (VERY IMPORTANT):
- Do NOT use markdown symbols like #, ##, ###, **, ***, or ----
- Use EMOJIS and NUMBERS for questions (example: "📝 Question 1:")
- Use letters with parentheses for options: A) B) C) D)
- Add blank lines between questions for easy reading

Create ${questionCount} multiple choice questions (MCQs).
Difficulty level: ${difficulty}

FORMAT EACH QUESTION LIKE THIS:

📝 Question 1:
[Write an interesting, clear question here]

A) [Option A]
B) [Option B]
C) [Option C]
D) [Option D]

${includeAnswers ? `
✅ ANSWER KEY:

After all questions, list answers like this:
1. [Correct letter] 
2. [Correct letter]
...and so on` : ''}

${includeExplanations ? `
💡 EXPLANATIONS:

After the answer key, explain each answer briefly:
1. [Why this is correct - keep it short and helpful]
2. [Why this is correct]
...and so on` : ''}

End with:
🌟 Great job practicing! Keep up the good work! 🎉

Topic/Content to create MCQs from:
${input}

Now create fun, challenging questions that help students learn! 🚀`;
};

const faqs = [
    { question: "How many questions can I generate?", answer: "You can generate 5, 10, 15, or 20 questions at once based on your study needs." },
    { question: "What difficulty levels are available?", answer: "Choose from Easy, Medium, Hard, or Mixed difficulty to match your preparation level." },
    { question: "Are explanations included?", answer: "Yes! Toggle the option to include detailed explanations for each correct answer." },
];

const relatedTools = [
    { name: 'Quiz Generator', slug: 'quiz-generator', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Flashcard Maker', slug: 'flashcard-maker', icon: Brain, color: 'text-purple-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: ClipboardList, color: 'text-blue-600' },
    { name: 'Homework Solver', slug: 'homework-solver', icon: Calculator, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Topic', desc: 'Type your study topic or paste content', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Options', desc: 'Choose count as difficulty', icon: Target, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get MCQs', desc: 'Practice with generated questions', icon: CheckSquare, color: 'from-green-500 to-emerald-600' },
];

export default function MCQGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="AI MCQ Generator"
            toolSlug="mcq-generator"
            tagline="Generate practice MCQs instantly for any topic"
            description="Create multiple choice questions with answer keys and explanations to test your knowledge."
            badge="Exam Prep Essential"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "I used this to prepare for my board exams. The mixed difficulty questions really helped me identify my weak areas!",
                author: "Priya Sharma",
                role: "12th Grade Student",
                initial: "P"
            }}
            relatedTools={relatedTools}
            ctaTitle="Start Practicing Now"
            ctaDescription="Generate unlimited MCQs to ace your exams."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📝 Enter your topic or paste content for MCQ generation...

Examples:
• Photosynthesis and cellular respiration
• World War II causes and effects
• Quadratic equations and their applications"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="mcq-generator"
                toolOptions={toolOptions}
                resultLabel="📋 Your MCQs"
                generateButtonText="🎯 Generate MCQs"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
