import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import PNGtoJPGClient from './client';

export const metadata: Metadata = {
    title: 'PNG to JPG Converter – Convert PNG to JPEG Free | AI Multi Tools',
    description: 'Convert PNG images to JPG format with adjustable quality. Free, fast image format conversion.',
    keywords: ['png to jpg', 'png to jpeg', 'convert png to jpg', 'image converter', 'jpg converter'],
    alternates: { canonical: 'https://aimultitools.com/tools/png-to-jpg' },
};

const toolSchema = getToolSchema('PNG to JPG Converter', 'Convert PNG images to JPG format', 'https://aimultitools.com/tools/png-to-jpg');

export default function PNGtoJPGPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <PNGtoJPGClient />
        </>
    );
}
