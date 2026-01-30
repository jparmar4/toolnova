import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import ChapterSummaryClient from './client';

export const metadata: Metadata = {
    title: 'AI Chapter Summary – Summarize Textbook Chapters Free | AI Study Tools',
    description: 'Turn long textbook chapters into concise, exam-ready summaries. Free AI-powered chapter summarizer for students.',
    keywords: ['chapter summary', 'textbook summary', 'study notes', 'exam revision', 'summarize chapter'],
    alternates: { canonical: 'https://aimultitools.com/tools/chapter-summary' },
};

const toolSchema = getToolSchema('AI Chapter Summary', 'Summarize textbook chapters into exam-ready notes', 'https://aimultitools.com/tools/chapter-summary');

export default function ChapterSummaryPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <ChapterSummaryClient />
        </>
    );
}
