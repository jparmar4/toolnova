import { Metadata } from 'next';
import Link from 'next/link';
import { getToolSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { generateBreadcrumbSchema } from '@/lib/seo-advanced';
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
  openGraph: {
    title: toolMeta?.title || 'Free AI Essay Writer – Generate Essays Instantly | ToolNova',
    description: toolMeta?.description || 'Write perfect essays instantly with our free AI essay writer.',
    url: 'https://www.toolnovahub.com/tools/essay-writer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Essay Writer | ToolNova',
    description: 'Generate structured essays instantly with intro, body, and conclusion.',
  },
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.toolnovahub.com' },
    { name: 'Tools', url: 'https://www.toolnovahub.com/tools' },
    { name: 'Writing Tools', url: 'https://www.toolnovahub.com/tools/writing-tools' },
    { name: toolData.name, url: 'https://www.toolnovahub.com/tools/essay-writer' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(breadcrumbSchema) }} />
      <EssayWriterClient />

      <ToolRichContent
        title={toolData.name}
        description={toolData.description}
        steps={toolData.howItWorks}
        benefits={toolData.benefits}
        faq={toolData.faqs}
      />



      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-xl font-semibold mb-3">Related guides and tools</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/tools" className="underline underline-offset-4">All AI tools</Link>
          <Link href="/tools/writing-tools" className="underline underline-offset-4">Writing tools</Link>
          <Link href="/tools/study-tools" className="underline underline-offset-4">Study tools</Link>
          <Link href="/blog" className="underline underline-offset-4">Blog guides</Link>
        </div>
      </section>

      <RelatedTools currentTool="essay-writer" category="Writing" />
    </>
  );
}
