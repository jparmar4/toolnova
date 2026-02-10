import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import VocabularyBuilderClient from './client';

export const metadata: Metadata = {
    title: 'Vocabulary Builder – Learn New Words Daily Free | ToolNova',
    description: 'Build your vocabulary with daily word lessons. Free vocabulary builder for students preparing for exams.',
    keywords: ['vocabulary builder', 'learn words', 'word of the day', 'GRE vocabulary', 'SAT words'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/vocabulary-builder' },
};

const toolSchema = getToolSchema('Vocabulary Builder', 'Learn new words daily and expand your vocabulary', 'https://www.toolnovahub.com/tools/vocabulary-builder');

export default function VocabularyBuilderPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <VocabularyBuilderClient />
        </>
    );
}
