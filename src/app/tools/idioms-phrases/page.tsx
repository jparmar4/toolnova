import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import IdiomsPhrasesClient from './client';

export const metadata: Metadata = {
    title: 'Idioms & Phrases Tool – Learn English Expressions Free | AI Study Tools',
    description: 'Learn common idioms and phrases with meanings and examples. Free tool for English language learning and exam preparation.',
    keywords: ['idioms and phrases', 'English idioms', 'common phrases', 'language learning', 'English expressions'],
    alternates: { canonical: 'https://aimultitools.com/tools/idioms-phrases' },
};

const toolSchema = getToolSchema('Idioms & Phrases Tool', 'Learn idioms and phrases with meanings and examples', 'https://aimultitools.com/tools/idioms-phrases');

export default function IdiomsPhrasesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <IdiomsPhrasesClient />
        </>
    );
}
