import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import NotesGeneratorClient from './client';

export const metadata: Metadata = {
  title: 'AI Notes Generator – Create Study Notes Free | ToolNova',
  description: 'Generate organized study notes instantly with our free AI notes generator. Cornell method, bullet points, outlines and more.',
  keywords: ['AI notes generator', 'study notes maker', 'note taking AI', 'lecture notes'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/notes-generator' },
};

const toolSchema = getToolSchema('AI Notes Generator', 'Generate organized study notes from any content', 'https://www.toolnovahub.com/tools/notes-generator');

export default function NotesGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <NotesGeneratorClient />
    </>
  );
}
