import Link from 'next/link';
import { CareerToolsClient } from './client';

export const metadata = {
    title: 'Career Tools - Cover Letter, Interview Prep & More | ToolNova',
    description: 'Free career tools: cover letter writer, interview question generator, goal planner, timetable generator, to-do list generator.',
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
        </div>
    );
}
