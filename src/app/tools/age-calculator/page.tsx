
import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import AgeCalculatorClient from './client';

export const metadata: Metadata = {
  title: 'Age Calculator Free – Calculate Exact Age Online | AI Study Tools',
  description: 'Free age calculator. Calculate your exact age in years, months, and days. Find age difference between two dates instantly.',
  keywords: ['age calculator', 'calculate age', 'age from date of birth', 'age difference calculator'],
  alternates: { canonical: 'https://aimultitools.com/tools/age-calculator' },
};

const toolSchema = getToolSchema('Age Calculator', 'Calculate exact age in years, months, and days from birth date', 'https://aimultitools.com/tools/age-calculator');

export default function AgeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <AgeCalculatorClient />
    </>
  );
}
