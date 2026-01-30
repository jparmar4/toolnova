import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import SynonymFinderClient from './client';

export const metadata: Metadata = {
    title: 'Synonym Finder – Find Similar Words Free | AI Vocabulary Tools',
    description: 'Find synonyms for any word to enhance your vocabulary and writing. Free synonym finder for students and writers.',
    keywords: ['synonym finder', 'similar words', 'thesaurus', 'vocabulary', 'word alternatives'],
    alternates: { canonical: 'https://aimultitools.com/tools/synonym-finder' },
};

const toolSchema = getToolSchema('Synonym Finder', 'Find similar words and enhance your vocabulary', 'https://aimultitools.com/tools/synonym-finder');

export default function SynonymFinderPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <SynonymFinderClient />
        </>
    );
}
