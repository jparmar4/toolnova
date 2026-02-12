import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import LinkedInOptimizerClient from './client';

export const metadata: Metadata = {
    title: 'LinkedIn Profile Optimizer – Boost Your Profile Free | ToolNova',
    description: 'Optimize your LinkedIn profile for recruiters and SEO. Free AI-powered LinkedIn headline, about section, and experience optimizer.',
    keywords: ['linkedin optimizer', 'linkedin profile optimization', 'linkedin headline generator', 'linkedin SEO', 'recruiter visibility', 'AI linkedin tool'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/linkedin-optimizer' },
};

const toolSchema = getToolSchema('LinkedIn Profile Optimizer', 'Optimize your LinkedIn profile for recruiters and maximum visibility', 'https://www.toolnovahub.com/tools/linkedin-optimizer');

export default function LinkedInOptimizerPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <LinkedInOptimizerClient />
        </>
    );
}
