import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import QuizGeneratorClient from './client';

export const metadata: Metadata = {
  title: 'AI Quiz Generator – Create Practice Quizzes Free | AI Study Tools',
  description: 'Generate practice quizzes instantly from any topic with our free AI quiz generator. Perfect for exam prep and self-testing.',
  keywords: ['AI quiz generator', 'quiz maker', 'practice test generator', 'study quiz'],
  alternates: { canonical: 'https://aimultitools.com/tools/quiz-generator' },
};

const toolSchema = getToolSchema('AI Quiz Generator', 'Generate practice quizzes from any topic or study material', 'https://aimultitools.com/tools/quiz-generator');

export default function QuizGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <QuizGeneratorClient />
    </>
  );
}
