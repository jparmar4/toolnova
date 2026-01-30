'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { Linkedin, Target, Briefcase, Award, FileText, Users } from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'section',
        label: 'Section to Optimize',
        type: 'select',
        options: [
            { value: 'headline', label: '📰 Headline' },
            { value: 'about', label: '📝 About/Summary' },
            { value: 'experience', label: '💼 Experience' },
            { value: 'full', label: '✨ Full Profile' },
        ],
        defaultValue: 'full',
    },
    {
        id: 'industry',
        label: 'Industry',
        type: 'select',
        options: [
            { value: 'tech', label: '💻 Technology' },
            { value: 'finance', label: '💰 Finance' },
            { value: 'marketing', label: '📈 Marketing' },
            { value: 'healthcare', label: '🏥 Healthcare' },
            { value: 'general', label: '📋 General' },
        ],
        defaultValue: 'general',
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const section = options?.section || 'full';
    const industry = options?.industry || 'general';

    return `Optimize the LinkedIn ${section} section for ${industry} industry.

Include:
- SEO-optimized keywords for recruiters
- Engaging, professional language
- Action verbs and achievements
- ATS-friendly formatting

Current profile details:
${input}

Optimized content:`;
};

const faqs = [
    { question: "Will this help me get found by recruiters?", answer: "Yes! We include industry-specific keywords that recruiters search for." },
    { question: "What sections should I optimize?", answer: "Start with your headline and About section - they're the most important for visibility." },
];

const relatedTools = [
    { name: 'Resume Bullets', slug: 'resume-bullets', icon: FileText, color: 'text-blue-600' },
    { name: 'Cover Letter', slug: 'cover-letter-writer', icon: Briefcase, color: 'text-purple-600' },
    { name: 'Bio Generator', slug: 'bio-generator', icon: Users, color: 'text-green-600' },
    { name: 'Interview Prep', slug: 'interview-generator', icon: Award, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Share Profile', desc: 'Enter your current info', icon: Linkedin, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Pick Section', desc: 'Choose what to optimize', icon: Target, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Update Profile', desc: 'Copy optimized content', icon: Award, color: 'from-green-500 to-emerald-600' },
];

export default function LinkedInOptimizerClient() {
    return (
        <PremiumToolWrapper
            toolName="LinkedIn Optimizer"
            toolSlug="linkedin-optimizer"
            tagline="Get noticed by recruiters on LinkedIn"
            description="Optimize your LinkedIn profile with SEO keywords and compelling content that attracts opportunities."
            badge="Professional Branding"
            category="Career Tools"
            categorySlug="career-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Profile views increased by 500% in the first week! Started getting recruiter messages daily.",
                author: "Jessica Lee",
                role: "Product Manager",
                initial: "J"
            }}
            relatedTools={relatedTools}
            ctaTitle="Optimize Your LinkedIn"
            ctaDescription="Stand out on the world's largest professional network."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="💼 Paste your current LinkedIn content or describe yourself...

Example:
• Current role and company
• Years of experience
• Key skills and achievements
• Industries you've worked in
• Career goals"
                promptTemplate={generatePrompt}
                inputRows={5}
                toolSlug="linkedin-optimizer"
                toolOptions={toolOptions}
                resultLabel="✨ Optimized LinkedIn Content"
                generateButtonText="🚀 Optimize Profile"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
