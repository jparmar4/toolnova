import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import ConceptExplainerClient from './client';

export const metadata: Metadata = {
    title: 'AI Concept Explainer – Simplify Complex Topics Free | AI Study Tools',
    description: 'Break down complex concepts into simple explanations with our free AI concept explainer. Perfect for students at any level.',
    keywords: ['concept explainer', 'explain topics simply', 'learning tool', 'study help', 'simplify concepts'],
    alternates: { canonical: 'https://aimultitools.com/tools/concept-explainer' },
};

const toolSchema = getToolSchema('AI Concept Explainer', 'Break down complex topics into simple explanations', 'https://aimultitools.com/tools/concept-explainer');

export default function ConceptExplainerPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <ConceptExplainerClient />
        </>
    );
}
