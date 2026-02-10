import Link from 'next/link';
import {
    GraduationCap,
    ArrowRight,
    Sparkles,
    BookOpen,
    Brain,
    FileQuestion,
    Lightbulb,
    Calculator,
    ClipboardList,
    Calendar,
    HelpCircle,
    FlaskConical
} from 'lucide-react';

export const metadata = {
    title: 'AI Study Tools - Homework Solver, Notes Generator & More | ToolNova',
    description: 'Free AI-powered study tools: homework solver, notes generator, flashcard maker, quiz generator, formula generator, and more.',
};

const tools = [
    { name: 'Homework Solver', slug: 'homework-solver', description: 'Get step-by-step solutions to homework problems', icon: BookOpen },
    { name: 'Notes Generator', slug: 'notes-generator', description: 'Generate comprehensive study notes from any topic', icon: ClipboardList },
    { name: 'MCQ Generator', slug: 'mcq-generator', description: 'Create multiple choice questions for practice', icon: FileQuestion },
    { name: 'Flashcard Maker', slug: 'flashcard-maker', description: 'Create digital flashcards for memorization', icon: Brain },
    { name: 'Quiz Generator', slug: 'quiz-generator', description: 'Generate practice quizzes on any subject', icon: Lightbulb },
    { name: 'Doubt Solver', slug: 'doubt-solver', description: 'Get instant answers to your study questions', icon: HelpCircle },
    { name: 'Formula Generator', slug: 'formula-generator', description: 'Generate formulas for math and science topics', icon: Calculator },
    { name: 'Concept Explainer', slug: 'concept-explainer', description: 'Break down complex topics into simple explanations', icon: Brain },
    { name: 'Diagram Explainer', slug: 'diagram-explainer', description: 'Explain diagrams and visual concepts', icon: FlaskConical },
    { name: 'Chapter Summary', slug: 'chapter-summary', description: 'Summarize chapter content quickly', icon: ClipboardList },
    { name: 'Revision Planner', slug: 'revision-planner', description: 'Create structured study schedules', icon: Calendar },
];

export default function StudyToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary">Home</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary">Tools</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <span className="text-primary text-sm font-semibold">Study Tools</span>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-5">
                        <GraduationCap className="h-4 w-4" />
                        {tools.length} AI Tools
                    </div>
                    <h1 className="text-foreground text-4xl md:text-5xl font-black tracking-tight mb-4">AI Study Tools</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Supercharge your learning with AI-powered tools for homework, notes, quizzes, and more.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-800/30 hover:shadow-2xl shadow-blue-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <tool.icon className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">{tool.name}</h3>
                                    <p className="text-muted-foreground text-sm mt-1">{tool.description}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-end">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
