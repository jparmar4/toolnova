import Link from 'next/link';
import { StudyToolsClient } from './client';

export const metadata = {
    title: 'AI Study Tools - Homework Solver, Notes Generator & More | ToolNova',
    description: 'Free AI-powered study tools: homework solver, notes generator, flashcard maker, quiz generator, formula generator, and more.',
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
        </div>
    );
}
