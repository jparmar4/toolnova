import Link from 'next/link';
import { ExamPrepToolsClient } from './client';

export const metadata = {
    title: 'Exam Prep Tools - Vocabulary, Synonyms & More | ToolNova',
    description: 'Free exam prep tools: vocabulary builder, synonym finder, antonym finder, idioms & phrases, one word substitution.',
    alternates: { canonical: 'https://www.toolnovahub.com/tools/exam-prep-tools' },
    openGraph: {
        title: 'Exam Prep Tools - Vocabulary, Synonyms & More | ToolNova',
        description: 'Use free exam prep tools for vocabulary, synonyms, antonyms, idioms, and one-word substitution.',
        url: 'https://www.toolnovahub.com/tools/exam-prep-tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exam Prep Tools | ToolNova',
        description: 'Free AI exam prep tools for vocabulary and language practice.',
    },
};

const tools = [
    { name: 'Vocabulary Builder', slug: 'vocabulary-builder', description: 'Learn new words with meanings and examples', icon: 'BookA', badge: 'Popular', badgeColor: 'bg-green-500' },
    { name: 'Synonym Finder', slug: 'synonym-finder', description: 'Find synonyms for any word', icon: 'FileSearch' },
    { name: 'Antonym Finder', slug: 'antonym-finder', description: 'Find antonyms for any word', icon: 'FileSearch' },
    { name: 'Idioms & Phrases', slug: 'idioms-phrases', description: 'Learn idioms with meanings and examples', icon: 'Quote', badge: 'Top Rated', badgeColor: 'bg-emerald-500' },
    { name: 'One Word Substitution', slug: 'one-word-substitution', description: 'Find single words for phrases', icon: 'Text' },
];

export default function ExamPrepToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <ExamPrepToolsClient tools={tools} />
            </div>

            <section className="mx-auto max-w-[1200px] px-6 pb-12">
                <h2 className="text-xl font-semibold mb-3">Explore more categories</h2>
                <div className="flex flex-wrap gap-3 text-sm">
                    <Link href="/tools" className="underline underline-offset-4">All tools</Link>
                    <Link href="/tools/study-tools" className="underline underline-offset-4">Study tools</Link>
                    <Link href="/tools/writing-tools" className="underline underline-offset-4">Writing tools</Link>
                    <Link href="/tools/image-pdf-tools" className="underline underline-offset-4">Image & PDF tools</Link>
                    <Link href="/blog" className="underline underline-offset-4">Blog</Link>
                </div>
            </section>
        </div>
    );
}
