'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import {
    BookOpen,
    Brain,
    Lightbulb,
    Calculator,
    Calendar,
    Clock,
    Target
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'duration',
        label: 'Study Duration',
        type: 'select',
        options: [
            { value: '1week', label: '📅 1 Week' },
            { value: '2weeks', label: '📅 2 Weeks' },
            { value: '1month', label: '📅 1 Month' },
            { value: '3months', label: '📅 3 Months' },
        ],
        defaultValue: '2weeks',
    },
    {
        id: 'hoursPerDay',
        label: 'Hours Per Day',
        type: 'select',
        options: [
            { value: '2', label: '⏰ 2 Hours' },
            { value: '4', label: '⏰ 4 Hours' },
            { value: '6', label: '⏰ 6 Hours' },
            { value: '8', label: '⏰ 8 Hours' },
        ],
        defaultValue: '4',
    },
    {
        id: 'includeBreaks',
        label: 'Schedule Breaks',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const duration = options?.duration || '2weeks';
    const hoursPerDay = options?.hoursPerDay || '4';
    const includeBreaks = options?.includeBreaks !== false;

    const durationText: Record<string, string> = {
        '1week': '1 week',
        '2weeks': '2 weeks',
        '1month': '1 month',
        '3months': '3 months',
    };

    return `Create a detailed revision/study plan for the following subjects/topics.
Duration: ${durationText[duration]}
Study time: ${hoursPerDay} hours per day
${includeBreaks ? 'Include short breaks and rest days in the schedule.' : ''}

Create a day-by-day plan with:
- Specific topics to cover each day
- Time allocation for each topic
- Review sessions for previously covered material
- Practice/revision days before completion

Subjects/Topics to cover:
${input}

Revision Plan:`;
};

const faqs = [
    { question: "Can I customize the study hours?", answer: "Yes! Choose from 2, 4, 6, or 8 hours per day based on your availability." },
    { question: "Does it include revision time?", answer: "Absolutely! The plan includes spaced repetition and review sessions." },
    { question: "What if I have multiple subjects?", answer: "List all subjects with their topics - the planner will distribute time appropriately." },
];

const relatedTools = [
    { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-blue-600' },
    { name: 'Quiz Generator', slug: 'quiz-generator', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Flashcard Maker', slug: 'flashcard-maker', icon: Brain, color: 'text-purple-600' },
    { name: 'Chapter Summary', slug: 'chapter-summary', icon: Calculator, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'List Topics', desc: 'Enter subjects to study', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Schedule', desc: 'Choose duration and hours', icon: Clock, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Plan', desc: 'Receive your study schedule', icon: Calendar, color: 'from-green-500 to-emerald-600' },
];

export default function RevisionPlannerClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Revision Planner"
            toolSlug="revision-planner"
            tagline="Create your perfect study schedule"
            description="Generate personalized day-by-day revision plans based on your subjects and available time."
            badge="Study Scheduler"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Used this to plan my CPA exam prep. Having a clear daily plan kept me on track for 3 months!",
                author: "Jennifer Wu",
                role: "Accounting Graduate",
                initial: "J"
            }}
            relatedTools={relatedTools}
            ctaTitle="Plan Your Success"
            ctaDescription="A structured plan is half the battle won."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📚 List the subjects and topics you need to study...

Example:
• Mathematics: Calculus, Linear Algebra, Statistics
• Physics: Mechanics, Thermodynamics, Optics
• Chemistry: Organic Chemistry, Inorganic Chemistry"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="revision-planner"
                toolOptions={toolOptions}
                resultLabel="📅 Your Revision Plan"
                generateButtonText="📆 Create Plan"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
