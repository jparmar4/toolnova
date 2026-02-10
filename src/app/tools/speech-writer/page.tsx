import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import SpeechWriterClient from './client';

export const metadata: Metadata = {
  title: 'AI Speech Writer – Write Speeches Free | ToolNova',
  description: 'Write compelling speeches for any occasion with our free AI speech writer. Wedding, graduation, business and more.',
  keywords: ['AI speech writer', 'speech generator', 'wedding speech', 'graduation speech'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/speech-writer' },
};

const toolSchema = getToolSchema('AI Speech Writer', 'Write compelling speeches for any occasion', 'https://www.toolnovahub.com/tools/speech-writer');

export default function SpeechWriterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <SpeechWriterClient />
    </>
  );
}
