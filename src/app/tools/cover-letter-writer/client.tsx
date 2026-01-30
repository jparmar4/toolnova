'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { FileText, Briefcase, Target, Lightbulb, Mail, Award } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'jobType',
        label: 'Job Type',
        type: 'select',
        options: [
            { value: 'corporate', label: '🏢 Corporate' },
            { value: 'startup', label: '🚀 Startup' },
            { value: 'tech', label: '💻 Tech' },
            { value: 'creative', label: '🎨 Creative' },
            { value: 'academic', label: '🎓 Academic' },
        ],
        defaultValue: 'corporate',
    },
    {
        id: 'tone',
        label: 'Tone',
        type: 'select',
        options: [
            { value: 'professional', label: '👔 Professional' },
            { value: 'enthusiastic', label: '✨ Enthusiastic' },
            { value: 'confident', label: '💪 Confident' },
        ],
        defaultValue: 'professional',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const jobType = options?.jobType || 'corporate';
    const tone = options?.tone || 'professional';

    return `Write a ${tone} cover letter for a ${jobType} position.

Include:
- Strong opening that grabs attention
- Relevant skills and experiences
- Specific examples of achievements
- Connection to company values
- Compelling closing with call-to-action

Details:
${input}

Cover Letter:`;
};

const faqs = [
    { question: "What details should I provide?", answer: "Job title, company name, your skills, and relevant experience." },
    { question: "How long will the cover letter be?", answer: "About 3-4 paragraphs - the perfect length for most applications." },
];

const relatedTools = [
    { name: 'Resume Bullets', slug: 'resume-bullets', icon: FileText, color: 'text-blue-600' },
    { name: 'Interview Prep', slug: 'interview-generator', icon: Lightbulb, color: 'text-purple-600' },
    { name: 'Email Writer', slug: 'email-writer', icon: Mail, color: 'text-green-600' },
    { name: 'LinkedIn Optimizer', slug: 'linkedin-optimizer', icon: Award, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Details', desc: 'Job and your background', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Set Tone', desc: 'Choose job type', icon: Target, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Letter', desc: 'Ready to submit!', icon: FileText, color: 'from-green-500 to-emerald-600' },
];

export default function CoverLetterWriterClient() {
    return (
        <PremiumToolWrapper
            toolName="Cover Letter Writer"
            toolSlug="cover-letter-writer"
            tagline="Write compelling cover letters that get interviews"
            description="Generate personalized, professional cover letters tailored to your target job and company."
            badge="Career Essential"
            category="Career Tools"
            categorySlug="career-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Got callbacks from 3 out of 5 applications after using this! The personalization is impressive.",
                author: "Sarah Johnson",
                role: "Marketing Professional",
                initial: "S"
            }}
            relatedTools={relatedTools}
            ctaTitle="Write Your Cover Letter"
            ctaDescription="Land your dream job."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="💼 Provide job and background details...

Example:
• Position: Marketing Manager at TechCorp
• Experience: 5 years in digital marketing
• Key skills: SEO, content strategy, team leadership
• Notable achievement: Increased organic traffic by 300%"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="cover-letter-writer"
                toolOptions={toolOptions}
                resultLabel="📄 Your Cover Letter"
                generateButtonText="✨ Generate Letter"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
