/**
 * Related Tools Component
 * Shows related tools for internal linking and better UX
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedTool {
    name: string;
    slug: string;
    description: string;
    category: string;
}

interface RelatedToolsProps {
    currentTool: string;
    category?: string;
}

// Related tools mapping for internal linking
const relatedToolsMap: Record<string, string[]> = {
    // Writing Tools
    'text-summarizer': ['paraphraser', 'grammar-fix', 'essay-writer', 'notes-generator'],
    'paraphraser': ['text-summarizer', 'grammar-fix', 'essay-writer', 'text-simplifier'],
    'grammar-fix': ['paraphraser', 'essay-writer', 'email-writer', 'speech-writer'],
    'essay-writer': ['grammar-fix', 'paraphraser', 'text-summarizer', 'paragraph-generator'],

    // Study Tools
    'homework-solver': ['notes-generator', 'concept-explainer', 'doubt-solver', 'formula-generator'],
    'flashcard-maker': ['quiz-generator', 'mcq-generator', 'notes-generator', 'revision-planner'],
    'notes-generator': ['text-summarizer', 'chapter-summary', 'flashcard-maker', 'quiz-generator'],
    'quiz-generator': ['mcq-generator', 'flashcard-maker', 'notes-generator', 'revision-planner'],

    // PDF Tools
    'merge-pdf': ['split-pdf', 'image-to-pdf', 'image-compressor'],
    'split-pdf': ['merge-pdf', 'image-to-pdf'],
    'image-to-pdf': ['merge-pdf', 'split-pdf', 'image-compressor'],

    // Career Tools
    'resume-bullets': ['cover-letter-writer', 'interview-generator', 'bio-generator'],
    'cover-letter-writer': ['resume-bullets', 'interview-generator', 'email-writer'],
    'interview-generator': ['resume-bullets', 'cover-letter-writer', 'bio-generator'],
};

const toolData: Record<string, { name: string; description: string; category: string }> = {
    'text-summarizer': { name: 'Text Summarizer', description: 'Summarize long articles and documents', category: 'Writing' },
    'paraphraser': { name: 'Paraphraser', description: 'Rewrite text while preserving meaning', category: 'Writing' },
    'grammar-fix': { name: 'Grammar Checker', description: 'Fix grammar and spelling errors', category: 'Writing' },
    'essay-writer': { name: 'Essay Writer', description: 'Generate well-structured essays', category: 'Writing' },
    'homework-solver': { name: 'Homework Solver', description: 'Get step-by-step homework help', category: 'Study' },
    'flashcard-maker': { name: 'Flashcard Maker', description: 'Create digital flashcards for studying', category: 'Study' },
    'notes-generator': { name: 'Notes Generator', description: 'Generate organized study notes', category: 'Study' },
    'quiz-generator': { name: 'Quiz Generator', description: 'Create custom quizzes and tests', category: 'Study' },
    'mcq-generator': { name: 'MCQ Generator', description: 'Generate multiple choice questions', category: 'Study' },
    'merge-pdf': { name: 'Merge PDF', description: 'Combine multiple PDFs into one', category: 'PDF' },
    'split-pdf': { name: 'Split PDF', description: 'Split PDF into multiple files', category: 'PDF' },
    'image-to-pdf': { name: 'Image to PDF', description: 'Convert images to PDF format', category: 'PDF' },
    'resume-bullets': { name: 'Resume Bullets', description: 'Generate professional resume points', category: 'Career' },
    'cover-letter-writer': { name: 'Cover Letter Writer', description: 'Write compelling cover letters', category: 'Career' },
    'interview-generator': { name: 'Interview Prep', description: 'Prepare for job interviews', category: 'Career' },
    'concept-explainer': { name: 'Concept Explainer', description: 'Understand complex concepts', category: 'Study' },
    'doubt-solver': { name: 'Doubt Solver', description: 'Get answers to your questions', category: 'Study' },
    'formula-generator': { name: 'Formula Generator', description: 'Generate math and science formulas', category: 'Study' },
    'revision-planner': { name: 'Revision Planner', description: 'Plan your exam revision', category: 'Study' },
    'text-simplifier': { name: 'Text Simplifier', description: 'Simplify complex text', category: 'Writing' },
    'paragraph-generator': { name: 'Paragraph Generator', description: 'Generate well-written paragraphs', category: 'Writing' },
    'email-writer': { name: 'Email Writer', description: 'Write professional emails', category: 'Writing' },
    'speech-writer': { name: 'Speech Writer', description: 'Write compelling speeches', category: 'Writing' },
    'bio-generator': { name: 'Bio Generator', description: 'Create professional bios', category: 'Career' },
    'image-compressor': { name: 'Image Compressor', description: 'Compress images without quality loss', category: 'PDF' },
    'chapter-summary': { name: 'Chapter Summary', description: 'Summarize textbook chapters', category: 'Study' },
};

export function RelatedTools({ currentTool, category }: RelatedToolsProps) {
    const relatedSlugs = relatedToolsMap[currentTool] || [];
    const relatedTools: RelatedTool[] = relatedSlugs
        .map(slug => ({
            slug,
            name: toolData[slug]?.name || '',
            description: toolData[slug]?.description || '',
            category: toolData[slug]?.category || '',
        }))
        .filter(tool => tool.name)
        .slice(0, 4); // Show max 4 related tools

    if (relatedTools.length === 0) return null;

    return (
        <section className="py-12 bg-[#f8f9fb] dark:bg-[#0f1419]">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                    You Might Also Like
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedTools.map((tool) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group bg-background border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                    {tool.category}
                                </span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {tool.name}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {tool.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
