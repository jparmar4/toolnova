import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import RevisionPlannerClient from './client';

export const metadata: Metadata = {
    title: 'AI Revision Planner – Create Study Schedule Free | ToolNova',
    description: 'Create a personalized study schedule for exam preparation. Free AI revision planner with day-by-day planning.',
    keywords: ['revision planner', 'study schedule', 'exam preparation', 'study plan', 'revision timetable'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/revision-planner' },
};

const toolSchema = getToolSchema('AI Revision Planner', 'Create personalized study schedules for exam preparation', 'https://www.toolnovahub.com/tools/revision-planner');

export default function RevisionPlannerPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <RevisionPlannerClient />
        </>
    );
}
