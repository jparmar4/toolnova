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
    HelpCircle,
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
        ],
        defaultValue: '10',
    },
    {
        id: 'questionTypes',
        label: 'Question Types',
        type: 'select',
        options: [
            { value: 'mixed', label: '🎯 Mixed Types' },
            { value: 'short', label: '📝 Short Answer' },
            { value: 'true-false', label: '✅ True/False' },
            { value: 'fill-blank', label: '📋 Fill in the Blanks' },
        ],
        defaultValue: 'mixed',
    },
    {
        id: 'includeAnswers',
        label: 'Include Answer Key',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const questionCount = options?.questionCount || '10';
    const questionTypes = options?.questionTypes || 'mixed';
    const includeAnswers = options?.includeAnswers !== false;

    const typeDescriptions: Record<string, string> = {
        mixed: 'Create a mix of short answer, true/false, and fill-in-the-blank questions.',
        short: 'Create short answer questions requiring brief explanations.',
        'true-false': 'Create true/false questions with clear statements.',
        'fill-blank': 'Create fill-in-the-blank questions with key terms missing.',
    };

    return `Create a ${questionCount}-question quiz based on the following topic/content.
${typeDescriptions[questionTypes]}
${includeAnswers ? 'Include a complete answer key at the end.' : ''}

Topic/Content:
${input}

Quiz:`;
};

const faqs = [
    { question: "What question types are available?", answer: "We offer Mixed Types, Short Answer, True/False, and Fill in the Blanks formats." },
    { question: "Can I use this for test prep?", answer: "Absolutely! Generate quizzes to test your understanding before exams." },
    { question: "How accurate are the questions?", answer: "Our AI creates relevant, well-structured questions based on your content." },
];

const relatedTools = [
    { name: 'MCQ Generator', slug: 'mcq-generator', icon: ClipboardList, color: 'text-blue-600' },
    { name: 'Flashcard Maker', slug: 'flashcard-maker', icon: Brain, color: 'text-purple-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-green-600' },
    { name: 'Homework Solver', slug: 'homework-solver', icon: Calculator, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Topic', desc: 'Add your study content', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Pick Format', desc: 'Choose question types', icon: HelpCircle, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Take Quiz', desc: 'Test your knowledge', icon: Lightbulb, color: 'from-green-500 to-emerald-600' },
];

export default function QuizGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Quiz Generator"
            toolSlug="quiz-generator"
            tagline="Test your knowledge with custom quizzes"
            description="Generate practice quizzes with various question types to reinforce your learning."
            badge="Self-Test Tool"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "I quiz myself every day before exams. This tool makes it so easy to create fresh questions!",
                author: "Emma Wilson",
                role: "High School Senior",
                initial: "E"
            }}
            relatedTools={relatedTools}
            ctaTitle="Generate Your Quiz"
            ctaDescription="Test yourself and track your progress."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📖 Enter your topic or paste study content...

Examples:
• The American Civil War and its causes
• Newton's Laws of Motion
• Cell structure and functions"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="quiz-generator"
                toolOptions={toolOptions}
                resultLabel="📝 Your Quiz"
                generateButtonText="🎯 Generate Quiz"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
