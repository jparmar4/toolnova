import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import ParagraphGeneratorClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
    title: 'AI Paragraph Generator – Write Perfect Paragraphs Free | ToolNova',
    description: 'Generate well-structured paragraphs on any topic instantly. Free AI paragraph generator for students and writers.',
    keywords: ['paragraph generator', 'write paragraphs', 'content writing', 'paragraph writer', 'AI writing'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/paragraph-generator' },
};

export default function ParagraphGeneratorPage() {
    const toolData = getToolData('paragraph-generator');

    const toolSchema = getToolSchema(
        toolData?.name || 'paragraph-generator',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/paragraph-generator'
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
                            url: `https://www.toolnovahub.com/tools/paragraph-generator#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <ParagraphGeneratorClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="paragraph-generator" category="Writing" />
        </>
    );
}
