import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import InterviewGeneratorClient from './client';

export const metadata: Metadata = {
    title: 'Interview Question Generator – Practice Interview Questions Free | ToolNova',
    description: 'Generate interview questions for any role with sample answers. Free AI tool for interview preparation.',
    keywords: ['interview questions', 'interview prep', 'practice interview', 'job interview', 'interview generator'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/interview-generator' },
};

const toolSchema = getToolSchema('Interview Question Generator', 'Generate interview questions with sample answers', 'https://www.toolnovahub.com/tools/interview-generator');

export default function InterviewGeneratorPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <InterviewGeneratorClient />
        </>
    );
}
