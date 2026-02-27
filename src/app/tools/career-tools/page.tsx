import Link from 'next/link';
import { CareerToolsClient } from './client';

export const metadata = {
    title: 'Career Tools - Cover Letter, Interview Prep & More | ToolNova',
    description: 'Free career tools: cover letter writer, interview question generator, goal planner, timetable generator, to-do list generator.',
    alternates: { canonical: 'https://www.toolnovahub.com/tools/career-tools' },
    openGraph: {
        title: 'Career Tools - Cover Letter, Interview Prep & More | ToolNova',
        description: 'Explore free AI career tools for cover letters, interviews, resumes, and productivity planning.',
        url: 'https://www.toolnovahub.com/tools/career-tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Career Tools | ToolNova',
        description: 'Free career tools for cover letters, interviews, resumes, and planning.',
    },
};

const tools = [
    { name: 'Cover Letter Writer', slug: 'cover-letter-writer', description: 'Generate professional cover letters', icon: 'FileText', badge: 'Popular', badgeColor: 'bg-amber-500' },
    { name: 'Interview Generator', slug: 'interview-generator', description: 'Practice with interview questions', icon: 'User' },
    { name: 'Goal Planner', slug: 'goal-planner', description: 'Break down goals into actionable steps', icon: 'Target', badge: 'Top Rated', badgeColor: 'bg-yellow-500' },
    { name: 'Timetable Generator', slug: 'timetable-generator', description: 'Create structured weekly schedules', icon: 'Calendar' },
    { name: 'To-Do List Generator', slug: 'todo-list-generator', description: 'Turn goals into organized task lists', icon: 'CheckSquare' },
    { name: 'Resume Bullets', slug: 'resume-bullets', description: 'Generate impactful resume bullet points', icon: 'FileText' },
];

export default function CareerToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <CareerToolsClient tools={tools} />
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
