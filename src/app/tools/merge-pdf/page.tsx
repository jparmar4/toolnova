import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import MergePDFClient from './client';

export const metadata: Metadata = {
    title: 'Merge PDF Files Free Online – Combine PDFs Instantly | AI Multi Tools',
    description: 'Merge multiple PDF files into one document for free. Upload, reorder, and combine PDFs instantly in your browser. No signup, 100% private.',
    keywords: ['merge pdf', 'combine pdf', 'pdf merger', 'join pdf files', 'merge pdf online free', 'combine pdf files'],
    alternates: { canonical: 'https://aimultitools.com/tools/merge-pdf' },
};

const toolSchema = getToolSchema('Merge PDF', 'Merge multiple PDF files into one document for free', 'https://aimultitools.com/tools/merge-pdf');

export default function MergePDFPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <MergePDFClient />
        </>
    );
}
