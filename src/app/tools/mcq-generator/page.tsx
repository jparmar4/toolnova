import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import MCQGeneratorClient from './client';

export const metadata: Metadata = {
  title: 'AI MCQ Generator – Create Multiple Choice Questions Free | AI Study Tools',
  description: 'Generate multiple choice questions instantly with our free AI MCQ generator. Perfect for teachers, students, and exam prep.',
  keywords: ['AI MCQ generator', 'multiple choice generator', 'quiz question maker', 'test generator'],
  alternates: { canonical: 'https://aimultitools.com/tools/mcq-generator' },
};

const toolSchema = getToolSchema('AI MCQ Generator', 'Generate multiple choice questions from any topic', 'https://aimultitools.com/tools/mcq-generator');

export default function MCQGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <MCQGeneratorClient />
    </>
  );
}
