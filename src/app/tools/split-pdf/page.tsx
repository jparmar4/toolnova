import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import SplitPDFClient from './client';

export const metadata: Metadata = {
    title: 'Split PDF – Extract Pages Free Online | ToolNova',
    description: 'Split PDF files into individual pages or extract specific page ranges. Free, private, and instant.',
    keywords: ['split pdf', 'extract pdf pages', 'pdf splitter', 'separate pdf pages', 'pdf page extractor'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/split-pdf' },
};

const toolSchema = getToolSchema('Split PDF', 'Split PDF files into individual pages or extract page ranges', 'https://www.toolnovahub.com/tools/split-pdf');

export default function SplitPDFPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <SplitPDFClient />
        </>
    );
}
