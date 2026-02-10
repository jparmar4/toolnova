import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import ImageToPDFClient from './client';

export const metadata: Metadata = {
    title: 'Image to PDF Converter – Convert JPG, PNG to PDF Free | ToolNova',
    description: 'Convert images to PDF instantly. Support for JPG, PNG and multiple image formats. Free, private, no upload needed.',
    keywords: ['image to pdf', 'jpg to pdf', 'png to pdf', 'convert image to pdf', 'photo to pdf'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/image-to-pdf' },
};

const toolSchema = getToolSchema('Image to PDF', 'Convert JPG, PNG images to PDF instantly', 'https://www.toolnovahub.com/tools/image-to-pdf');

export default function ImageToPDFPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <ImageToPDFClient />
        </>
    );
}
