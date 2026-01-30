'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { FileText, Briefcase, Target, Lightbulb, Users, MessageCircle } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'roleType',
        label: 'Role Type',
        type: 'select',
        options: [
            { value: 'technical', label: '💻 Technical' },
            { value: 'behavioral', label: '🤝 Behavioral' },
            { value: 'managerial', label: '👔 Managerial' },
            { value: 'creative', label: '🎨 Creative' },
            { value: 'general', label: '📋 General' },
        ],
        defaultValue: 'general',
    },
    {
        id: 'difficulty',
        label: 'Difficulty',
        type: 'select',
        options: [
            { value: 'entry', label: '🌱 Entry Level' },
            { value: 'mid', label: '📈 Mid Level' },
            { value: 'senior', label: '🎯 Senior Level' },
        ],
        defaultValue: 'mid',
    },
    {
        id: 'includeAnswers',
        label: 'Include Sample Answers',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const roleType = options?.roleType || 'general';
    const difficulty = options?.difficulty || 'mid';
    const includeAnswers = options?.includeAnswers !== false;

    return `Generate 10 ${roleType} interview questions for ${difficulty} level.
${includeAnswers ? 'Include strong sample answers with the STAR method where applicable.' : ''}

Include:
- Mix of common and challenging questions
- Questions specific to the role/industry
- Tips for answering each question

Job/Role:
${input}

Interview Questions:`;
};

const faqs = [
    { question: "What's the STAR method?", answer: "Situation, Task, Action, Result - a framework for answering behavioral questions." },
    { question: "How many questions do I get?", answer: "10 questions tailored to your role and experience level." },
];

const relatedTools = [
    { name: 'Cover Letter', slug: 'cover-letter-writer', icon: FileText, color: 'text-blue-600' },
    { name: 'Resume Bullets', slug: 'resume-bullets', icon: Target, color: 'text-purple-600' },
    { name: 'LinkedIn Optimizer', slug: 'linkedin-optimizer', icon: Users, color: 'text-green-600' },
    { name: 'Goal Planner', slug: 'goal-planner', icon: Lightbulb, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Role', desc: 'Describe the position', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Level', desc: 'Choose difficulty', icon: Target, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Practice', desc: 'Nail your interview', icon: MessageCircle, color: 'from-green-500 to-emerald-600' },
];

export default function InterviewGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="Interview Question Generator"
            toolSlug="interview-generator"
            tagline="Prepare for any interview with confidence"
            description="Get role-specific interview questions with sample answers using the STAR method."
            badge="Interview Prep"
            category="Career Tools"
            categorySlug="career-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Practiced with these questions the night before and nailed my Google interview! Life-changing.",
                author: "Mike Chen",
                role: "Software Engineer",
                initial: "M"
            }}
            relatedTools={relatedTools}
            ctaTitle="Prepare for Your Interview"
            ctaDescription="Confidence comes from preparation."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="💼 Describe the role you're interviewing for...

Example:
• Position: Software Engineer at a startup
• Tech stack: React, Node.js, AWS
• Team size: 5 engineers
• Focus: Building user-facing features"
                promptTemplate={generatePrompt}
                inputRows={4}
                toolSlug="interview-generator"
                toolOptions={toolOptions}
                resultLabel="📋 Interview Questions"
                generateButtonText="🎯 Generate Questions"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
