import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import EmailWriterClient from './client';

export const metadata: Metadata = {
  title: 'AI Email Writer – Write Professional Emails Free | ToolNova',
  description: 'Write professional emails instantly with our free AI email writer. Perfect for business, job applications, and personal correspondence.',
  keywords: ['AI email writer', 'email generator', 'professional email writer', 'business email'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/email-writer' },
};

const toolSchema = getToolSchema('AI Email Writer', 'Write professional emails for any situation', 'https://www.toolnovahub.com/tools/email-writer');

export default function EmailWriterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <EmailWriterClient />
    </>
  );
}
