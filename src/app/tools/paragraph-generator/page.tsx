import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import ParagraphGeneratorClient from './client';

export const metadata: Metadata = {
    title: 'AI Paragraph Generator – Write Perfect Paragraphs Free | ToolNova',
    description: 'Generate well-structured paragraphs on any topic instantly. Free AI paragraph generator for students and writers.',
    keywords: ['paragraph generator', 'write paragraphs', 'content writing', 'paragraph writer', 'AI writing'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/paragraph-generator' },
};

const toolSchema = getToolSchema('AI Paragraph Generator', 'Generate well-structured paragraphs on any topic', 'https://www.toolnovahub.com/tools/paragraph-generator');

export default function ParagraphGeneratorPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <ParagraphGeneratorClient />
        </>
    );
}
