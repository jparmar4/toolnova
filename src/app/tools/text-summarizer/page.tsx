import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import TextSummarizerClient from './client';

export const metadata: Metadata = {
  title: 'AI Text Summarizer – Summarize Any Text Free | AI Study Tools',
  description: 'Summarize long texts instantly with our free AI text summarizer. Get concise summaries of articles, essays, and documents.',
  keywords: ['AI text summarizer', 'summarize text', 'article summarizer', 'summary generator'],
  alternates: { canonical: 'https://aimultitools.com/tools/text-summarizer' },
};

export default function TextSummarizerPage() {
  const toolData = getToolData('text-summarizer');

  if (!toolData) return <TextSummarizerClient />;

  const toolSchema = getToolSchema(toolData.name, toolData.description, 'https://aimultitools.com/tools/text-summarizer');

  const howToSchema = getHowToSchema(
    `How to use ${toolData.name}`,
    toolData.description,
    toolData.howItWorks.map(step => ({
      name: step.title,
      text: step.desc,
      url: `https://aimultitools.com/tools/text-summarizer#step-${step.step}`
    }))
  );

  const faqSchema = getFAQSchema(toolData.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }} />
      <TextSummarizerClient />
    </>
  );
}
