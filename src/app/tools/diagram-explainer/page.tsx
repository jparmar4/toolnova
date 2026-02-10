import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import DiagramExplainerClient from './client';

export const metadata: Metadata = {
    title: 'AI Diagram Explainer – Understand Visual Concepts Free | ToolNova',
    description: 'Get detailed explanations of complex diagrams and visual concepts. Perfect for biology, chemistry, physics, and more.',
    keywords: ['diagram explainer', 'explain diagrams', 'visual learning', 'biology diagrams', 'science diagrams'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/diagram-explainer' },
};

const toolSchema = getToolSchema('AI Diagram Explainer', 'Get detailed explanations of visual concepts and diagrams', 'https://www.toolnovahub.com/tools/diagram-explainer');

export default function DiagramExplainerPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <DiagramExplainerClient />
        </>
    );
}
