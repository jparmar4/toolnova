import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import HomeworkSolverClient from './client';

export const metadata: Metadata = {
  title: 'AI Homework Solver – Get Instant Homework Help Free | AI Multi Tools',
  description: 'Get step-by-step solutions to any homework problem with our free AI homework solver. Supports Math, Science, History, English, Programming and more. Perfect for students of all grades.',
  keywords: [
    'AI homework solver',
    'homework help',
    'math solver',
    'study help',
    'homework answers',
    'step by step solutions',
    'math homework help',
    'science homework help',
    'free homework solver',
    'AI tutor'
  ],
  alternates: { canonical: 'https://aimultitools.com/tools/homework-solver' },
  openGraph: {
    title: 'AI Homework Solver – Get Instant Homework Help Free',
    description: 'Get step-by-step solutions to any homework problem. Math, Science, History, English & more.',
    url: 'https://aimultitools.com/tools/homework-solver',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Homework Solver – Free Homework Help',
    description: 'Get step-by-step solutions to any homework problem with AI.',
  },
};

const toolSchema = getToolSchema(
  'AI Homework Solver',
  'Get step-by-step solutions to homework problems in Math, Science, History, English, Programming and more',
  'https://aimultitools.com/tools/homework-solver'
);

export default function HomeworkSolverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
      <HomeworkSolverClient />
    </>
  );
}
