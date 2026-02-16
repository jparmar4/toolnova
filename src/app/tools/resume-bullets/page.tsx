import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import ResumeBulletsClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
  title: 'AI Resume Bullets – Create Resume Points Free | ToolNova',
  description: 'Generate powerful resume bullet points instantly with our free AI resume writer. ATS-friendly and impactful.',
  keywords: ['AI resume bullets', 'resume writer', 'resume generator', 'job application'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/resume-bullets' },
};

export default function ResumeBulletsPage() {
    const toolData = getToolData('resume-bullets');

    const toolSchema = getToolSchema(
        toolData?.name || 'resume-bullets',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/resume-bullets'
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
                            url: `https://www.toolnovahub.com/tools/resume-bullets#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <ResumeBulletsClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="resume-bullets" category="Career" />
        </>
    );
}
