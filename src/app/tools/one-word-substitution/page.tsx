import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import OneWordSubstitutionClient from './client';

export const metadata: Metadata = {
    title: 'One Word Substitution – Replace Phrases with Single Words | AI Study Tools',
    description: 'Find one word substitutions for phrases. Essential for competitive exams like SSC, Bank, and UPSC.',
    keywords: ['one word substitution', 'competitive exams', 'SSC vocabulary', 'English for exams', 'word meanings'],
    alternates: { canonical: 'https://aimultitools.com/tools/one-word-substitution' },
};

const toolSchema = getToolSchema('One Word Substitution', 'Find single words that replace lengthy phrases', 'https://aimultitools.com/tools/one-word-substitution');

export default function OneWordSubstitutionPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <OneWordSubstitutionClient />
        </>
    );
}
