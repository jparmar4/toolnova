import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import AntonymFinderClient from './client';

export const metadata: Metadata = {
    title: 'Antonym Finder – Find Opposite Words Free | AI Vocabulary Tools',
    description: 'Find antonyms (opposite words) for any word. Free antonym finder for students, writers, and vocabulary building.',
    keywords: ['antonym finder', 'opposite words', 'vocabulary', 'word opposites', 'thesaurus'],
    alternates: { canonical: 'https://aimultitools.com/tools/antonym-finder' },
};

const toolSchema = getToolSchema('Antonym Finder', 'Find opposite words and expand your vocabulary', 'https://aimultitools.com/tools/antonym-finder');

export default function AntonymFinderPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <AntonymFinderClient />
        </>
    );
}
