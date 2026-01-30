import { Metadata } from 'next';
import { getToolSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import EssayWriterClient from './client';

export const metadata: Metadata = {
  title: 'Free AI Essay Writer – Generate Essays Instantly | AI Study Tools',
  description: 'Write perfect essays instantly with our free AI essay writer. Get well-structured essays with intro, body, and conclusion. For students of all levels. 100% free.',
  keywords: [
    'AI essay writer free',
    'essay generator',
    'write my essay AI',
    'automatic essay writer',
    'free essay writing tool',
    'AI writing assistant',
  ],
  alternates: {
    canonical: 'https://aimultitools.com/tools/essay-writer',
  },
};

const toolSchema = getToolSchema(
  'AI Essay Writer',
  'Generate well-structured essays with introduction, body paragraphs, and conclusion',
  'https://aimultitools.com/tools/essay-writer'
);

const faqSchema = getFAQSchema([
  {
    question: 'Can I use AI-generated essays for school?',
    answer: 'AI essays should be used as learning aids and references. Always review, edit, and personalize content before submitting. Check your school\'s AI usage policy.',
  },
  {
    question: 'How long are the generated essays?',
    answer: 'You can choose from short (300 words), medium (500 words), or long (800 words) essays using the length selector.',
  },
]);

export default function EssayWriterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }} />
      <EssayWriterClient />
    </>
  );
}
