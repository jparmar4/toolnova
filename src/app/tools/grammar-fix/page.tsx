import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { getOptimizedToolMetadata } from '@/lib/tool-metadata';
import { RelatedTools } from '@/components/RelatedTools';
import GrammarFixClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

const toolMeta = getOptimizedToolMetadata('grammar-fix');

export const metadata: Metadata = {
  title: toolMeta?.title || 'AI Grammar Fix – Fix Grammar Errors Free | ToolNova',
  description: toolMeta?.description || 'Fix grammar, spelling, and punctuation errors instantly with our free AI grammar checker. Perfect for essays, emails, and documents. Professional results, fast.',
  keywords: toolMeta?.keywords || ['AI grammar fix', 'grammar checker', 'spelling correction', 'punctuation fix', 'proofreading tool'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/grammar-fix' },
};

export default function GrammarFixPage() {
  const toolData = getToolData('grammar-fix');

  if (!toolData) return <GrammarFixClient />;

  const toolSchema = getToolSchema(toolData.name, toolData.description, 'https://www.toolnovahub.com/tools/grammar-fix');

  const howToSchema = getHowToSchema(
    `How to use ${toolData.name}`,
    toolData.description,
    toolData.howItWorks.map(step => ({
      name: step.title,
      text: step.desc,
      url: `https://www.toolnovahub.com/tools/grammar-fix#step-${step.step}`
    }))
  );

  const faqSchema = getFAQSchema(toolData.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }} />
      <GrammarFixClient />

      <ToolRichContent
        title={toolData.name}
        description={toolData.description}
        steps={toolData.howItWorks}
        benefits={toolData.benefits}
        faq={toolData.faqs}
      />

      <RelatedTools currentTool="grammar-fix" category="Writing" />
    </>
  );
}
