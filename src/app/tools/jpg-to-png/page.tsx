import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import JPGtoPNGClient from './client';

export const metadata: Metadata = {
    title: 'JPG to PNG Converter – Convert JPEG to PNG Free | ToolNova',
    description: 'Convert JPG/JPEG images to PNG format instantly. Free, lossless conversion with transparency support.',
    keywords: ['jpg to png', 'jpeg to png', 'convert jpg to png', 'image converter', 'png converter'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/jpg-to-png' },
};

const toolSchema = getToolSchema('JPG to PNG Converter', 'Convert JPG/JPEG images to PNG format', 'https://www.toolnovahub.com/tools/jpg-to-png');

export default function JPGtoPNGPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <JPGtoPNGClient />
        </>
    );
}
