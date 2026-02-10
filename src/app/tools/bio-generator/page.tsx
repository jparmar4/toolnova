import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import BioGeneratorClient from './client';

export const metadata: Metadata = {
    title: 'AI Bio Generator – Create Catchy Social Media Bios Free | ToolNova',
    description: 'Generate catchy bios for Instagram, Twitter, LinkedIn, and more. Free AI bio generator for all social media platforms.',
    keywords: ['bio generator', 'Instagram bio', 'Twitter bio', 'LinkedIn bio', 'social media bio'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/bio-generator' },
};

const toolSchema = getToolSchema('AI Bio Generator', 'Create catchy social media bios for any platform', 'https://www.toolnovahub.com/tools/bio-generator');

export default function BioGeneratorPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <BioGeneratorClient />
        </>
    );
}
