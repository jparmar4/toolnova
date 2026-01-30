import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import ParaphraserClient from './client';

export const metadata: Metadata = {
  title: 'AI Paraphraser – Rewrite Text Instantly Free | AI Study Tools',
  description: 'Paraphrase any text instantly with our free AI paraphraser. Rewrite sentences, paragraphs, and essays while keeping the same meaning. Perfect for students.',
  keywords: [
    'AI paraphraser free',
    'paraphrasing tool',
    'rewrite text',
    'rephrase sentences',
    'article rewriter',
  ],
  alternates: {
    canonical: 'https://aimultitools.com/tools/paraphraser',
  },
};

export default function ParaphraserPage() {
  const toolData = getToolData('paraphraser');

  if (!toolData) return <ParaphraserClient />;

  const toolSchema = getToolSchema(toolData.name, toolData.description, 'https://aimultitools.com/tools/paraphraser');

  const howToSchema = getHowToSchema(
    `How to use ${toolData.name}`,
    toolData.description,
    toolData.howItWorks.map(step => ({
      name: step.title,
      text: step.desc,
      url: `https://aimultitools.com/tools/paraphraser#step-${step.step}`
    }))
  );

  const faqSchema = getFAQSchema(toolData.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }} />
      <ParaphraserClient />
    </>
  );
}
