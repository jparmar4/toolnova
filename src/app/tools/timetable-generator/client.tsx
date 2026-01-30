'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { Calendar, Clock, Target, BookOpen, Lightbulb, CheckSquare } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'days',
        label: 'Days Per Week',
        type: 'select',
        options: [
            { value: '5', label: '📅 5 Days (Weekdays)' },
            { value: '6', label: '📅 6 Days' },
            { value: '7', label: '📅 7 Days' },
        ],
        defaultValue: '5',
    },
    {
        id: 'format',
        label: 'Format',
        type: 'select',
        options: [
            { value: 'detailed', label: '📋 Detailed Schedule' },
            { value: 'simple', label: '📝 Simple Overview' },
            { value: 'blocks', label: '🧱 Time Blocks' },
        ],
        defaultValue: 'detailed',
    },
    {
        id: 'includeBreaks',
        label: 'Include Breaks',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const days = options?.days || '5';
    const format = options?.format || 'detailed';
    const includeBreaks = options?.includeBreaks !== false;

    return `Create a ${format} weekly timetable for ${days} days.
${includeBreaks ? 'Include short breaks between activities.' : ''}

Make the schedule:
- Balanced and realistic
- Include time slots for each activity
- Consider energy levels throughout the day
- Allow flexibility where needed

Activities and preferences:
${input}

Timetable:`;
};

const faqs = [
    { question: "How detailed is the timetable?", answer: "Choose from Detailed Schedule, Simple Overview, or Time Blocks format." },
    { question: "Can I include personal activities?", answer: "Absolutely! Add any activities you want scheduled." },
];

const relatedTools = [
    { name: 'Revision Planner', slug: 'revision-planner', icon: BookOpen, color: 'text-blue-600' },
    { name: 'Goal Planner', slug: 'goal-planner', icon: Target, color: 'text-purple-600' },
    { name: 'Todo List', slug: 'todo-list-generator', icon: CheckSquare, color: 'text-green-600' },
    { name: 'Notes Generator', slug: 'notes-generator', icon: Lightbulb, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'List Activities', desc: 'Add what you need to do', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Options', desc: 'Choose days and format', icon: Clock, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Schedule', desc: 'Follow your timetable', icon: Calendar, color: 'from-green-500 to-emerald-600' },
];

export default function TimetableGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="Timetable Generator"
            toolSlug="timetable-generator"
            tagline="Organize your week perfectly"
            description="Create balanced weekly schedules for studying, work, and personal activities."
            badge="Time Manager"
            category="Utility Tools"
            categorySlug="utility-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Finally got my chaotic schedule under control! The time blocks format works perfectly for me.",
                author: "Alex Turner",
                role: "Medical Student",
                initial: "A"
            }}
            relatedTools={relatedTools}
            ctaTitle="Create Your Timetable"
            ctaDescription="Time well spent starts with good planning."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📅 List your activities and preferences...

Example:
• Study time: 4 hours daily for Math and Physics
• Work: Part-time job evenings
• Gym: 1 hour, 3 days a week
• Free time: Gaming and friends"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="timetable-generator"
                toolOptions={toolOptions}
                resultLabel="📆 Your Timetable"
                generateButtonText="📅 Generate Timetable"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
