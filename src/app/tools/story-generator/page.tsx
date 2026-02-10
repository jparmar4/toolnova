import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import StoryGeneratorClient from './client';

export const metadata: Metadata = {
  title: 'AI Story Generator – Create Stories Free | ToolNova',
  description: 'Generate captivating stories in any genre with our free AI story generator. Fantasy, sci-fi, mystery, romance and more.',
  keywords: ['AI story generator', 'story writer', 'creative writing AI', 'fiction generator'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/story-generator' },
};

const toolSchema = getToolSchema('AI Story Generator', 'Generate creative stories in any genre', 'https://www.toolnovahub.com/tools/story-generator');

export default function StoryGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <StoryGeneratorClient />
    </>
  );
}
