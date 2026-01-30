'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { CheckSquare, Calendar, Target, Lightbulb, Clock, List } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: [
            { value: 'work', label: '💼 Work' },
            { value: 'personal', label: '🏠 Personal' },
            { value: 'study', label: '📚 Study' },
            { value: 'project', label: '🚀 Project' },
            { value: 'mixed', label: '🎯 Mixed' },
        ],
        defaultValue: 'mixed',
    },
    {
        id: 'priority',
        label: 'Add Priorities',
        type: 'toggle',
        defaultValue: true,
    },
    {
        id: 'timeEstimates',
        label: 'Time Estimates',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const category = options?.category || 'mixed';
    const priority = options?.priority !== false;
    const timeEstimates = options?.timeEstimates !== false;

    return `Create an organized todo list for ${category} tasks.
${priority ? 'Add priority levels (High, Medium, Low) for each task.' : ''}
${timeEstimates ? 'Include estimated time for each task.' : ''}

Break down larger tasks into smaller, actionable items.
Organize by importance and urgency.

Tasks/Goals:
${input}

Todo List:`;
};

const faqs = [
    { question: "Will tasks be prioritized?", answer: "Yes! Enable the toggle to get High/Medium/Low priority labels." },
    { question: "Are time estimates accurate?", answer: "We provide reasonable estimates that you can adjust to your pace." },
];

const relatedTools = [
    { name: 'Timetable Generator', slug: 'timetable-generator', icon: Calendar, color: 'text-blue-600' },
    { name: 'Goal Planner', slug: 'goal-planner', icon: Target, color: 'text-purple-600' },
    { name: 'Revision Planner', slug: 'revision-planner', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: List, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'List Goals', desc: 'What needs to be done', icon: List, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Options', desc: 'Add priorities & time', icon: Clock, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get List', desc: 'Start checking off!', icon: CheckSquare, color: 'from-green-500 to-emerald-600' },
];

export default function TodoListGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="Todo List Generator"
            toolSlug="todo-list-generator"
            tagline="Turn goals into actionable tasks"
            description="Create organized, prioritized todo lists with time estimates from your goals and projects."
            badge="Productivity Boost"
            category="Utility Tools"
            categorySlug="utility-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "This breaks down my overwhelming projects into manageable tasks. Game changer for productivity!",
                author: "Mike Johnson",
                role: "Project Manager",
                initial: "M"
            }}
            relatedTools={relatedTools}
            ctaTitle="Create Your Todo List"
            ctaDescription="Get things done, one task at a time."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📋 Describe your goals or what you need to accomplish...

Example:
• Launch new website by end of month
• Prepare presentation for client meeting
• Clean and organize home office
• Complete online course certification"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="todo-list-generator"
                toolOptions={toolOptions}
                resultLabel="✅ Your Todo List"
                generateButtonText="📝 Generate List"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
