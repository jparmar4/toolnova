import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import FlashcardMakerClient from './client';

export const metadata: Metadata = {
  title: 'AI Flashcard Maker – Create Study Flashcards Free | AI Study Tools',
  description: 'Create perfect Q&A flashcards instantly with our free AI flashcard maker. Perfect for memorization and exam preparation.',
  keywords: ['AI flashcard maker', 'flashcard generator', 'study cards', 'quiz cards', 'Anki cards'],
  alternates: { canonical: 'https://aimultitools.com/tools/flashcard-maker' },
};

const toolSchema = getToolSchema('AI Flashcard Maker', 'Generate Q&A flashcards from any text or topic', 'https://aimultitools.com/tools/flashcard-maker');

export default function FlashcardMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <FlashcardMakerClient />
    </>
  );
}
