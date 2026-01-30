import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import DoubtSolverClient from './client';

export const metadata: Metadata = {
    title: 'AI Doubt Solver – Get Instant Answers Free | AI Study Tools',
    description: 'Get instant answers to any academic question with our free AI doubt solver. Perfect for students needing quick, accurate explanations.',
    keywords: ['AI doubt solver', 'ask questions online', 'instant answers', 'study help', 'homework help'],
    alternates: { canonical: 'https://aimultitools.com/tools/doubt-solver' },
};

const toolSchema = getToolSchema('AI Doubt Solver', 'Get instant answers to any study-related question', 'https://aimultitools.com/tools/doubt-solver');

export default function DoubtSolverPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <DoubtSolverClient />
        </>
    );
}
