import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import CoverLetterWriterClient from './client';

export const metadata: Metadata = {
    title: 'Cover Letter Writer – Generate Cover Letters Free | AI Career Tools',
    description: 'Create compelling cover letters for job applications instantly. Free AI-powered cover letter generator.',
    keywords: ['cover letter writer', 'cover letter generator', 'job application', 'professional cover letter', 'AI cover letter'],
    alternates: { canonical: 'https://aimultitools.com/tools/cover-letter-writer' },
};

const toolSchema = getToolSchema('Cover Letter Writer', 'Generate compelling cover letters for job applications', 'https://aimultitools.com/tools/cover-letter-writer');

export default function CoverLetterWriterPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <CoverLetterWriterClient />
        </>
    );
}
