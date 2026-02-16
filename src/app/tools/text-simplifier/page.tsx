import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import TextSimplifierClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
    title: 'Text Simplifier – Simplify Complex Text Free | ToolNova',
    description: 'Simplify complex text into easy-to-understand language. Free AI tool for making content accessible.',
    keywords: ['text simplifier', 'simplify text', 'plain language', 'easy to read', 'simplify content'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/text-simplifier' },
};

export default function TextSimplifierPage() {
    const toolData = getToolData('text-simplifier');

    const toolSchema = getToolSchema(
        toolData?.name || 'text-simplifier',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/text-simplifier'
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
                            url: `https://www.toolnovahub.com/tools/text-simplifier#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <TextSimplifierClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="text-simplifier" category="Language" />
        </>
    );
}
