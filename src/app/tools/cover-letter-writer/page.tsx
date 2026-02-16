import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import CoverLetterWriterClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
    title: 'Cover Letter Writer – Generate Cover Letters Free | ToolNova',
    description: 'Create compelling cover letters for job applications instantly. Free AI-powered cover letter generator.',
    keywords: ['cover letter writer', 'cover letter generator', 'job application', 'professional cover letter', 'AI cover letter'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/cover-letter-writer' },
};

export default function CoverLetterWriterPage() {
    const toolData = getToolData('cover-letter-writer');

    const toolSchema = getToolSchema(
        toolData?.name || 'cover-letter-writer',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/cover-letter-writer'
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
                            url: `https://www.toolnovahub.com/tools/cover-letter-writer#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <CoverLetterWriterClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="cover-letter-writer" category="Career" />
        </>
    );
}
