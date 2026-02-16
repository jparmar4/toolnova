import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import DiagramExplainerClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
    title: 'AI Diagram Explainer – Understand Visual Concepts Free | ToolNova',
    description: 'Get detailed explanations of complex diagrams and visual concepts. Perfect for biology, chemistry, physics, and more.',
    keywords: ['diagram explainer', 'explain diagrams', 'visual learning', 'biology diagrams', 'science diagrams'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/diagram-explainer' },
};

export default function DiagramExplainerPage() {
    const toolData = getToolData('diagram-explainer');

    const toolSchema = getToolSchema(
        toolData?.name || 'diagram-explainer',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/diagram-explainer'
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
                            url: `https://www.toolnovahub.com/tools/diagram-explainer#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <DiagramExplainerClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="diagram-explainer" category="Study" />
        </>
    );
}
