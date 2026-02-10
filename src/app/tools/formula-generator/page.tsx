import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import FormulaGeneratorClient from './client';

export const metadata: Metadata = {
    title: 'AI Formula Generator – Math & Science Formulas Free | ToolNova',
    description: 'Get essential formulas for math, physics, chemistry and more. Free AI-powered formula generator for students and professionals.',
    keywords: ['formula generator', 'math formulas', 'physics formulas', 'chemistry formulas', 'study formulas'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/formula-generator' },
};

const toolSchema = getToolSchema('AI Formula Generator', 'Generate essential formulas for math and science topics', 'https://www.toolnovahub.com/tools/formula-generator');

export default function FormulaGeneratorPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <FormulaGeneratorClient />
        </>
    );
}
