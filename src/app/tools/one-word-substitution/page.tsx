import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import OneWordSubstitutionClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
    title: 'One Word Substitution – Replace Phrases with Single Words | ToolNova',
    description: 'Find one word substitutions for phrases. Essential for competitive exams like SSC, Bank, and UPSC.',
    keywords: ['one word substitution', 'competitive exams', 'SSC vocabulary', 'English for exams', 'word meanings'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/one-word-substitution' },
};

export default function OneWordSubstitutionPage() {
    const toolData = getToolData('one-word-substitution');

    const toolSchema = getToolSchema(
        toolData?.name || 'one-word-substitution',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/one-word-substitution'
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
                            url: `https://www.toolnovahub.com/tools/one-word-substitution#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <OneWordSubstitutionClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="one-word-substitution" category="Language" />
        </>
    );
}
