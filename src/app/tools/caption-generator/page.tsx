import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import CaptionGeneratorClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
  title: 'AI Caption Generator – Create Social Media Captions Free | ToolNova',
  description: 'Generate engaging captions for Instagram, TikTok, Twitter and more with our free AI caption generator. Includes hashtags and emojis.',
  keywords: ['AI caption generator', 'Instagram caption generator', 'TikTok captions', 'social media captions'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/caption-generator' },
};

export default function CaptionGeneratorPage() {
    const toolData = getToolData('caption-generator');

    const toolSchema = getToolSchema(
        toolData?.name || 'caption-generator',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/caption-generator'
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
                            url: `https://www.toolnovahub.com/tools/caption-generator#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <CaptionGeneratorClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="caption-generator" category="Writing" />
        </>
    );
}
