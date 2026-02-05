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

    return [
        `Create ${questionCount} multiple choice questions (MCQs).`,
        `Difficulty: ${difficulty}`,
        'Use simple, clear English.',
        '',
        'Format each question like this:',
        'Question 1: ...',
        'A) ...',
        'B) ...',
        'C) ...',
        'D) ...',
        '',
        includeAnswers
            ? 'After all questions, add an Answer Key like: 1. A, 2. C, ...'
            : 'Do not include an answer key.',
        includeExplanations
            ? 'After the answer key, add short explanations per question (1-2 lines each).'
            : 'Do not include explanations.',
        '',
        'Topic/Content:',
        input
    ].join('\n');
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
