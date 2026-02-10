import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import TimetableGeneratorClient from './client';

export const metadata: Metadata = {
    title: 'Timetable Generator – Create Study Schedule Free | ToolNova',
    description: 'Generate a structured weekly timetable for study or work. Free AI-powered schedule maker.',
    keywords: ['timetable generator', 'study schedule', 'weekly planner', 'schedule maker', 'time management'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/timetable-generator' },
};

const toolSchema = getToolSchema('Timetable Generator', 'Create structured weekly schedules', 'https://www.toolnovahub.com/tools/timetable-generator');

export default function TimetableGeneratorPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <TimetableGeneratorClient />
        </>
    );
}
