import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import GrammarFixClient from './client';

export const metadata: Metadata = {
  title: 'AI Grammar Fix – Fix Grammar Errors Free | AI Study Tools',
  description: 'Fix grammar, spelling, and punctuation errors instantly with our free AI grammar checker. Perfect for essays, emails, and documents.',
  keywords: ['AI grammar fix', 'grammar checker', 'spelling correction', 'punctuation fix'],
  alternates: { canonical: 'https://aimultitools.com/tools/grammar-fix' },
};

export default function GrammarFixPage() {
  const toolData = getToolData('grammar-fix');

  if (!toolData) return <GrammarFixClient />;

  const toolSchema = getToolSchema(toolData.name, toolData.description, 'https://aimultitools.com/tools/grammar-fix');

  const howToSchema = getHowToSchema(
    `How to use ${toolData.name}`,
    toolData.description,
    toolData.howItWorks.map(step => ({
      name: step.title,
      text: step.desc,
      url: `https://aimultitools.com/tools/grammar-fix#step-${step.step}`
    }))
  );

  const faqSchema = getFAQSchema(toolData.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }} />
      <GrammarFixClient />
    </>
  );
}
