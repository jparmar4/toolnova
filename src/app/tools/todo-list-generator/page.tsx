import { Metadata } from 'next';
import { getToolSchema, schemaToJsonLd } from '@/lib/schema';
import TodoListGeneratorClient from './client';

export const metadata: Metadata = {
    title: 'To-Do List Generator – Create Task Lists Free | AI Productivity Tools',
    description: 'Generate organized to-do lists from your goals. Free AI-powered task planner.',
    keywords: ['to-do list generator', 'task list', 'task planner', 'productivity tool', 'checklist maker'],
    alternates: { canonical: 'https://aimultitools.com/tools/todo-list-generator' },
};

const toolSchema = getToolSchema('To-Do List Generator', 'Generate organized to-do lists from your goals', 'https://aimultitools.com/tools/todo-list-generator');

export default function TodoListGeneratorPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            <TodoListGeneratorClient />
        </>
    );
}
