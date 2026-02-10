
import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import WordCounterClient from './client';

export const metadata: Metadata = {
  title: 'Word Counter Free – Count Words & Characters | ToolNova',
  description: 'Free word counter tool. Count words, characters, sentences, and paragraphs instantly. Perfect for essays, assignments, and content writing.',
  keywords: ['word counter', 'character counter', 'word count tool', 'text counter'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/word-counter' },
};

const toolSchema = getToolSchema('Word Counter', 'Count words, characters, sentences, and paragraphs in any text', 'https://www.toolnovahub.com/tools/word-counter');

export default function WordCounterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <WordCounterClient />
    </>
  );
}
