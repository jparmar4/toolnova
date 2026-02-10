import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import ImageCompressorClient from './client';

export const metadata: Metadata = {
    title: 'Image Compressor – Reduce Image Size Free Online | ToolNova',
    description: 'Compress images without losing quality. Reduce JPG, PNG file size instantly. Free, private, and fast.',
    keywords: ['image compressor', 'compress image', 'reduce image size', 'image optimizer', 'compress jpg png'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/image-compressor' },
};

const toolSchema = getToolSchema('Image Compressor', 'Reduce image file size while maintaining quality', 'https://www.toolnovahub.com/tools/image-compressor');

export default function ImageCompressorPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <ImageCompressorClient />
        </>
    );
}
