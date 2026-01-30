import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import TextSimplifierClient from './client';

export const metadata: Metadata = {
    title: 'Text Simplifier – Simplify Complex Text Free | AI Writing Tools',
    description: 'Simplify complex text into easy-to-understand language. Free AI tool for making content accessible.',
    keywords: ['text simplifier', 'simplify text', 'plain language', 'easy to read', 'simplify content'],
    alternates: { canonical: 'https://aimultitools.com/tools/text-simplifier' },
};

const toolSchema = getToolSchema('Text Simplifier', 'Simplify complex text into easy-to-understand language', 'https://aimultitools.com/tools/text-simplifier');

export default function TextSimplifierPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <TextSimplifierClient />
        </>
    );
}
