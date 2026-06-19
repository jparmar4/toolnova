import { Metadata } from 'next';
import Link from 'next/link';
import { getToolSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { generateBreadcrumbSchema } from '@/lib/seo-advanced';
import { getToolData } from '@/data/tools';
import { getOptimizedToolMetadata } from '@/lib/tool-metadata';
import { RelatedTools } from '@/components/RelatedTools';
import PlagiarismCheckerClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

const toolMeta = getOptimizedToolMetadata('plagiarism-checker');

export const metadata: Metadata = {
  title: toolMeta?.title || 'AI Plagiarism Checker – Detect AI Content | ToolNova',
  description: toolMeta?.description || 'Scan your essay for AI-generated footprints and plagiarism. Ensure your writing is 100% original, human-like, and passes university checks.',
  keywords: toolMeta?.keywords || ['AI plagiarism checker', 'AI content detector', 'detect AI writing', 'check for AI', 'AI footprint scanner'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/plagiarism-checker' },
  openGraph: {
    title: toolMeta?.title || 'AI Plagiarism Checker | ToolNova',
    description: toolMeta?.description || 'Scan your essay for AI-generated footprints and plagiarism.',
    url: 'https://www.toolnovahub.com/tools/plagiarism-checker',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Plagiarism Checker | ToolNova',
    description: 'Scan your essay for AI-generated footprints and plagiarism.',
  },
};

export default function PlagiarismCheckerPage() {
  const toolData = getToolData('plagiarism-checker');

  if (!toolData) return <PlagiarismCheckerClient />;

  const toolSchema = getToolSchema(
    toolData.name,
    toolData.description,
    'https://www.toolnovahub.com/tools/plagiarism-checker'
  );

  const faqSchema = getFAQSchema(toolData.faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.toolnovahub.com' },
    { name: 'Tools', url: 'https://www.toolnovahub.com/tools' },
    { name: 'Writing Tools', url: 'https://www.toolnovahub.com/tools/writing-tools' },
    { name: toolData.name, url: 'https://www.toolnovahub.com/tools/plagiarism-checker' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(breadcrumbSchema) }} />
      
      <PlagiarismCheckerClient />

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
          <Link href="/blog" className="underline underline-offset-4">Blog guides</Link>
        </div>
      </section>

      <RelatedTools currentTool="plagiarism-checker" category="Writing" />
    </>
  );
}
