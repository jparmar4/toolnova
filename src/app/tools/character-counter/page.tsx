import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import CharacterCounterClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
  title: 'Character Counter Free – Count Characters Online | ToolNova',
  description: 'Free character counter. Count characters with or without spaces instantly. Perfect for Twitter, SMS, and word limits.',
  keywords: ['character counter', 'char count', 'text length counter', 'Twitter character counter'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/character-counter' },
};

export default function CharacterCounterPage() {
    const toolData = getToolData('character-counter');

    const toolSchema = getToolSchema(
        toolData?.name || 'character-counter',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/character-counter'
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
                            url: `https://www.toolnovahub.com/tools/character-counter#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <CharacterCounterClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="character-counter" category="Utility" />
        </>
    );
}
