
import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import CharacterCounterClient from './client';

export const metadata: Metadata = {
  title: 'Character Counter Free – Count Characters Online | AI Study Tools',
  description: 'Free character counter. Count characters with or without spaces instantly. Perfect for Twitter, SMS, and word limits.',
  keywords: ['character counter', 'char count', 'text length counter', 'Twitter character counter'],
  alternates: { canonical: 'https://aimultitools.com/tools/character-counter' },
};

const toolSchema = getToolSchema('Character Counter', 'Count characters, words, and check social media limits', 'https://aimultitools.com/tools/character-counter');

export default function CharacterCounterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <CharacterCounterClient />
    </>
  );
}
