import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import IdiomsPhrasesClient from './client';

export const metadata: Metadata = {
    title: 'Idioms & Phrases Tool – Learn English Expressions Free | ToolNova',
    description: 'Learn common idioms and phrases with meanings and examples. Free tool for English language learning and exam preparation.',
    keywords: ['idioms and phrases', 'English idioms', 'common phrases', 'language learning', 'English expressions'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/idioms-phrases' },
};

const toolSchema = getToolSchema('Idioms & Phrases Tool', 'Learn idioms and phrases with meanings and examples', 'https://www.toolnovahub.com/tools/idioms-phrases');

export default function IdiomsPhrasesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <IdiomsPhrasesClient />
        </>
    );
}
