
import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import CaseConverterClient from './client';

export const metadata: Metadata = {
  title: 'Case Converter Free – Change Text Case Online | AI Study Tools',
  description: 'Free case converter. Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more. Instant conversion.',
  keywords: ['case converter', 'text case changer', 'uppercase converter', 'lowercase converter'],
  alternates: { canonical: 'https://aimultitools.com/tools/case-converter' },
};

const toolSchema = getToolSchema('Case Converter', 'Convert text to various cases: uppercase, lowercase, title case, and more', 'https://aimultitools.com/tools/case-converter');

export default function CaseConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <CaseConverterClient />
    </>
  );
}
