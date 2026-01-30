import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import ResumeBulletsClient from './client';

export const metadata: Metadata = {
  title: 'AI Resume Bullets – Create Resume Points Free | AI Study Tools',
  description: 'Generate powerful resume bullet points instantly with our free AI resume writer. ATS-friendly and impactful.',
  keywords: ['AI resume bullets', 'resume writer', 'resume generator', 'job application'],
  alternates: { canonical: 'https://aimultitools.com/tools/resume-bullets' },
};

const toolSchema = getToolSchema('AI Resume Bullets', 'Generate powerful resume bullet points', 'https://aimultitools.com/tools/resume-bullets');

export default function ResumeBulletsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <ResumeBulletsClient />
    </>
  );
}
