import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import CaptionGeneratorClient from './client';

export const metadata: Metadata = {
  title: 'AI Caption Generator – Create Social Media Captions Free | ToolNova',
  description: 'Generate engaging captions for Instagram, TikTok, Twitter and more with our free AI caption generator. Includes hashtags and emojis.',
  keywords: ['AI caption generator', 'Instagram caption generator', 'TikTok captions', 'social media captions'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/caption-generator' },
};

const toolSchema = getToolSchema('AI Caption Generator', 'Generate engaging social media captions for any platform', 'https://www.toolnovahub.com/tools/caption-generator');

export default function CaptionGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <CaptionGeneratorClient />
    </>
  );
}
