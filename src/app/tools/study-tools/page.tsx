import Link from 'next/link';
import { StudyToolsClient } from './client';

export const metadata = {
    title: 'AI Study Tools - Homework Solver, Notes Generator & More | ToolNova',
    description: 'Free AI-powered study tools: homework solver, notes generator, flashcard maker, quiz generator, formula generator, and more.',
    alternates: { canonical: 'https://www.toolnovahub.com/tools/study-tools' },
    openGraph: {
        title: 'AI Study Tools - Homework Solver, Notes Generator & More | ToolNova',
        description: 'Explore free AI study tools for homework, notes, flashcards, quizzes, and revision.',
        url: 'https://www.toolnovahub.com/tools/study-tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Study Tools | ToolNova',
        description: 'Free AI study tools for homework, flashcards, quizzes, and revision.',
    },
};

const tools = [
    { name: 'Homework Solver', slug: 'homework-solver', description: 'Get step-by-step solutions to homework problems', icon: 'BookOpen', badge: 'Popular', badgeColor: 'bg-blue-500' },
    { name: 'Notes Generator', slug: 'notes-generator', description: 'Generate comprehensive study notes from any topic', icon: 'ClipboardList', badge: 'Top Rated', badgeColor: 'bg-green-500' },
    { name: 'MCQ Generator', slug: 'mcq-generator', description: 'Create multiple choice questions for practice', icon: 'FileQuestion' },
    { name: 'Flashcard Maker', slug: 'flashcard-maker', description: 'Create digital flashcards for memorization', icon: 'Brain', badge: 'New', badgeColor: 'bg-purple-500' },
    { name: 'Quiz Generator', slug: 'quiz-generator', description: 'Generate practice quizzes on any subject', icon: 'Lightbulb' },
    { name: 'Doubt Solver', slug: 'doubt-solver', description: 'Get instant answers to your study questions', icon: 'HelpCircle' },
    { name: 'Formula Generator', slug: 'formula-generator', description: 'Generate formulas for math and science topics', icon: 'Calculator' },
    { name: 'Concept Explainer', slug: 'concept-explainer', description: 'Break down complex topics into simple explanations', icon: 'Brain' },
    { name: 'Diagram Explainer', slug: 'diagram-explainer', description: 'Explain diagrams and visual concepts', icon: 'FlaskConical' },
    { name: 'Chapter Summary', slug: 'chapter-summary', description: 'Summarize chapter content quickly', icon: 'ClipboardList' },
    { name: 'Revision Planner', slug: 'revision-planner', description: 'Create structured study schedules', icon: 'Calendar' },
];

export default function StudyToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <StudyToolsClient tools={tools} />
            </div>

            <section className="mx-auto max-w-[1200px] px-6 pb-12">
                <h2 className="text-xl font-semibold mb-3">Explore more categories</h2>
                <div className="flex flex-wrap gap-3 text-sm">
                    <Link href="/tools" className="underline underline-offset-4">All tools</Link>
                    <Link href="/tools/writing-tools" className="underline underline-offset-4">Writing tools</Link>
                    <Link href="/tools/study-tools" className="underline underline-offset-4">Study tools</Link>
                    <Link href="/tools/image-pdf-tools" className="underline underline-offset-4">Image & PDF tools</Link>
                    <Link href="/tools/career-tools" className="underline underline-offset-4">Career tools</Link>
                    <Link href="/blog" className="underline underline-offset-4">Blog</Link>
                </div>
            </section>
        </div>
    );
}
