import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import GoalPlannerClient from './client';

export const metadata: Metadata = {
    title: 'Goal Planner – Break Down Goals Into Steps Free | ToolNova',
    description: 'Create actionable goal plans with milestones and weekly tasks. Free AI goal planning tool.',
    keywords: ['goal planner', 'goal setting', 'action plan', 'SMART goals', 'productivity'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/goal-planner' },
};

const toolSchema = getToolSchema('Goal Planner', 'Break down goals into actionable steps', 'https://www.toolnovahub.com/tools/goal-planner');

export default function GoalPlannerPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <GoalPlannerClient />
        </>
    );
}
