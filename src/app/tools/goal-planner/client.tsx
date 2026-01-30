'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { Target, Calendar, Rocket, CheckCircle, Lightbulb, Trophy } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'category',
        label: 'Goal Category',
        type: 'select',
        options: [
            { value: 'career', label: '💼 Career' },
            { value: 'personal', label: '🌟 Personal Growth' },
            { value: 'fitness', label: '💪 Health & Fitness' },
            { value: 'financial', label: '💰 Financial' },
            { value: 'learning', label: '📚 Learning' },
        ],
        defaultValue: 'career',
    },
    {
        id: 'timeframe',
        label: 'Timeframe',
        type: 'select',
        options: [
            { value: '30days', label: '📅 30 Days' },
            { value: '90days', label: '📅 90 Days' },
            { value: '6months', label: '📅 6 Months' },
            { value: '1year', label: '📅 1 Year' },
        ],
        defaultValue: '90days',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const category = options?.category || 'career';
    const timeframe = options?.timeframe || '90days';

    const timeframeText: Record<string, string> = {
        '30days': '30 days',
        '90days': '90 days (3 months)',
        '6months': '6 months',
        '1year': '1 year',
    };

    return `Create a detailed SMART goal plan for ${category} goal over ${timeframeText[timeframe]}.

Include:
- SMART goal breakdown (Specific, Measurable, Achievable, Relevant, Time-bound)
- Weekly/monthly milestones
- Specific action items
- Potential obstacles and solutions
- Metrics for tracking progress
- Motivation strategies

Goal:
${input}

Goal Plan:`;
};

const faqs = [
    { question: "What's a SMART goal?", answer: "Specific, Measurable, Achievable, Relevant, and Time-bound - the gold standard for goal setting." },
    { question: "How detailed is the plan?", answer: "Includes milestones, action items, obstacles, metrics, and motivation strategies." },
];

const relatedTools = [
    { name: 'Revision Planner', slug: 'revision-planner', icon: Calendar, color: 'text-blue-600' },
    { name: 'Resume Bullets', slug: 'resume-bullets', icon: Target, color: 'text-purple-600' },
    { name: 'Interview Prep', slug: 'interview-generator', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Cover Letter', slug: 'cover-letter-writer', icon: Trophy, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'State Goal', desc: 'Describe what you want', icon: Target, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Timeline', desc: 'Choose your timeframe', icon: Calendar, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Plan', desc: 'Receive your roadmap', icon: Rocket, color: 'from-green-500 to-emerald-600' },
];

export default function GoalPlannerClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Goal Planner"
            toolSlug="goal-planner"
            tagline="Turn dreams into actionable plans"
            description="Create SMART goal plans with milestones, action items, and progress tracking strategies."
            badge="Achievement Unlock"
            category="Career Tools"
            categorySlug="career-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "This helped me create a 90-day plan that actually worked. Got promoted ahead of schedule!",
                author: "David Park",
                role: "Senior Developer",
                initial: "D"
            }}
            relatedTools={relatedTools}
            ctaTitle="Plan Your Success"
            ctaDescription="A goal without a plan is just a wish."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="🎯 Describe your goal...

Examples:
• Get promoted to Senior Engineer within 6 months
• Learn Spanish to conversational level
• Save $10,000 for home down payment
• Run a half marathon"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="goal-planner"
                toolOptions={toolOptions}
                resultLabel="📋 Your Goal Plan"
                generateButtonText="🚀 Create Plan"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
