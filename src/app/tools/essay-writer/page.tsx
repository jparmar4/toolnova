import { Metadata } from 'next';
import { getToolSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { getOptimizedToolMetadata } from '@/lib/tool-metadata';
import { RelatedTools } from '@/components/RelatedTools';
import EssayWriterClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

const toolMeta = getOptimizedToolMetadata('essay-writer');

export const metadata: Metadata = {
  title: toolMeta?.title || 'Free AI Essay Writer – Generate Essays Instantly | ToolNova',
  description: toolMeta?.description || 'Write perfect essays instantly with our free AI essay writer. Get well-structured essays with intro, body, and conclusion. Fast, unique, and for students of all levels.',
  keywords: toolMeta?.keywords || ['AI essay writer free', 'essay generator', 'write my essay AI', 'automatic essay writer', 'free essay writing tool', 'AI writing assistant'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/essay-writer' },
};

export default function EssayWriterPage() {
  const toolData = getToolData('essay-writer');

  if (!toolData) return <EssayWriterClient />;

  const toolSchema = getToolSchema(
    toolData.name,
    toolData.description,
    'https://www.toolnovahub.com/tools/essay-writer'
  );

  const faqSchema = getFAQSchema(toolData.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }} />
      <EssayWriterClient />

      <ToolRichContent
        title={toolData.name}
        description={toolData.description}
        steps={toolData.howItWorks}
        benefits={toolData.benefits}
        faq={toolData.faqs}
      />

      <RelatedTools currentTool="essay-writer" category="Writing" />
    </>
  );
}
