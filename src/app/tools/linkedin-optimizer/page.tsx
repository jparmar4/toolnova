import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import LinkedInOptimizerClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
    title: 'LinkedIn Profile Optimizer – Boost Your Profile Free | ToolNova',
    description: 'Optimize your LinkedIn profile for recruiters and SEO. Free AI-powered LinkedIn headline, about section, and experience optimizer.',
    keywords: ['linkedin optimizer', 'linkedin profile optimization', 'linkedin headline generator', 'linkedin SEO', 'recruiter visibility', 'AI linkedin tool'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/linkedin-optimizer' },
};

export default function LinkedInOptimizerPage() {
    const toolData = getToolData('linkedin-optimizer');

    const toolSchema = getToolSchema(
        toolData?.name || 'linkedin-optimizer',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/linkedin-optimizer'
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            {toolData && (
                <>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getHowToSchema(
                        `How to use ${toolData.name}`,
                        toolData.description,
                        toolData.howItWorks.map(step => ({
                            name: step.title,
                            text: step.desc,
                            url: `https://www.toolnovahub.com/tools/linkedin-optimizer#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <LinkedInOptimizerClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="linkedin-optimizer" category="Career" />
        </>
    );
}
