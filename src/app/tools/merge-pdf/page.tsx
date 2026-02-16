import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import MergePDFClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
    title: 'Merge PDF Files Free Online – Combine PDFs Instantly | ToolNova',
    description: 'Merge multiple PDF files into one document for free. Upload, reorder, and combine PDFs instantly in your browser. No signup, 100% private.',
    keywords: ['merge pdf', 'combine pdf', 'pdf merger', 'join pdf files', 'merge pdf online free', 'combine pdf files'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/merge-pdf' },
};

export default function MergePDFPage() {
    const toolData = getToolData('merge-pdf');

    const toolSchema = getToolSchema(
        toolData?.name || 'merge-pdf',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/merge-pdf'
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
                            url: `https://www.toolnovahub.com/tools/merge-pdf#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <MergePDFClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="merge-pdf" category="PDF" />
        </>
    );
}
