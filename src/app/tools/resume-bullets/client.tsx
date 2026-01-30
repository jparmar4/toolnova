'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { Target, FileText, Briefcase, Lightbulb, Award, Rocket } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'industry',
        label: 'Industry',
        type: 'select',
        options: [
            { value: 'tech', label: '💻 Technology' },
            { value: 'marketing', label: '📈 Marketing' },
            { value: 'finance', label: '💰 Finance' },
            { value: 'healthcare', label: '🏥 Healthcare' },
            { value: 'education', label: '🎓 Education' },
            { value: 'general', label: '📋 General' },
        ],
        defaultValue: 'general',
    },
    {
        id: 'style',
        label: 'Bullet Style',
        type: 'select',
        options: [
            { value: 'action', label: '⚡ Action-Oriented' },
            { value: 'impact', label: '📊 Impact-Focused' },
            { value: 'skills', label: '🛠️ Skills-Based' },
        ],
        defaultValue: 'impact',
    },
    {
        id: 'bulletCount',
        label: 'Number of Bullets',
        type: 'select',
        options: [
            { value: '3', label: '3 Bullets' },
            { value: '5', label: '5 Bullets' },
            { value: '7', label: '7 Bullets' },
        ],
        defaultValue: '5',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const industry = options?.industry || 'general';
    const style = options?.style || 'impact';
    const bulletCount = options?.bulletCount || '5';

    const styleDescriptions: Record<string, string> = {
        action: 'Start each bullet with a strong action verb.',
        impact: 'Focus on quantifiable achievements and results.',
        skills: 'Highlight specific skills and competencies demonstrated.',
    };

    return `Generate ${bulletCount} powerful resume bullet points for the ${industry} industry.
${styleDescriptions[style]}

Include metrics and numbers where possible.
Use strong action verbs.
Keep each bullet concise but impactful.

Job/Experience details:
${input}

Resume bullets:`;
};

const faqs = [
    { question: "What makes a good resume bullet?", answer: "Strong action verbs, quantifiable results, and specific achievements." },
    { question: "How do I add numbers?", answer: "Include any metrics like % improvement, $ saved, or team size in your input." },
];

const relatedTools = [
    { name: 'Cover Letter', slug: 'cover-letter-writer', icon: FileText, color: 'text-blue-600' },
    { name: 'Interview Prep', slug: 'interview-generator', icon: Lightbulb, color: 'text-purple-600' },
    { name: 'Bio Generator', slug: 'bio-generator', icon: Award, color: 'text-green-600' },
    { name: 'Goal Planner', slug: 'goal-planner', icon: Rocket, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Share Experience', desc: 'Describe your role', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Pick Style', desc: 'Choose bullet format', icon: Target, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Bullets', desc: 'Copy to your resume', icon: Award, color: 'from-green-500 to-emerald-600' },
];

export default function ResumeBulletsClient() {
    return (
        <PremiumToolWrapper
            toolName="Resume Bullet Generator"
            toolSlug="resume-bullets"
            tagline="Create impactful resume bullets"
            description="Transform your job experience into powerful, achievement-focused resume bullet points."
            badge="Career Booster"
            category="Writing Tools"
            categorySlug="writing-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "My resume went from boring to impressive! Got 3x more interview callbacks after using these bullets.",
                author: "Kevin O'Brien",
                role: "Software Developer",
                initial: "K"
            }}
            relatedTools={relatedTools}
            ctaTitle="Upgrade Your Resume"
            ctaDescription="Stand out from the competition."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="💼 Describe your job responsibilities and achievements...

Example:
• Job Title: Sales Manager at ABC Corp
• Led a team of 10 sales reps
• Increased regional sales
• Implemented new CRM system"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="resume-bullets"
                toolOptions={toolOptions}
                resultLabel="🎯 Resume Bullets"
                generateButtonText="✨ Generate Bullets"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
