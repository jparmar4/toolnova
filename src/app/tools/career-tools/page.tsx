import Link from 'next/link';
import {
    Briefcase,
    ArrowRight,
    FileText,
    User,
    Target,
    Calendar,
    CheckSquare
} from 'lucide-react';

export const metadata = {
    title: 'Career Tools - Cover Letter, Interview Prep & More | ToolNova',
    description: 'Free career tools: cover letter writer, interview question generator, goal planner, timetable generator, to-do list generator.',
};

const tools = [
    { name: 'Cover Letter Writer', slug: 'cover-letter-writer', description: 'Generate professional cover letters', icon: FileText },
    { name: 'Interview Generator', slug: 'interview-generator', description: 'Practice with interview questions', icon: User },
    { name: 'Goal Planner', slug: 'goal-planner', description: 'Break down goals into actionable steps', icon: Target },
    { name: 'Timetable Generator', slug: 'timetable-generator', description: 'Create structured weekly schedules', icon: Calendar },
    { name: 'To-Do List Generator', slug: 'todo-list-generator', description: 'Turn goals into organized task lists', icon: CheckSquare },
    { name: 'Resume Bullets', slug: 'resume-bullets', description: 'Generate impactful resume bullet points', icon: FileText },
];

export default function CareerToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary">Home</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary">Tools</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <span className="text-primary text-sm font-semibold">Career Tools</span>
                </div>

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-5">
                        <Briefcase className="h-4 w-4" />
                        {tools.length} Tools
                    </div>
                    <h1 className="text-foreground text-4xl md:text-5xl font-black tracking-tight mb-4">Career & Productivity Tools</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Boost your career with AI-powered tools for job applications and productivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50/50 dark:from-amber-900/20 dark:to-yellow-900/10 border border-amber-100 dark:border-amber-800/30 hover:shadow-2xl shadow-amber-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-lg group-hover:scale-110 transition-transform">
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
