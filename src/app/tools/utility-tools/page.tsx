import Link from 'next/link';
import { UtilityToolsClient } from './client';

export const metadata = {
    title: 'Utility Tools - Word Counter, Case Converter & More | ToolNova',
    description: 'Free utility tools: word counter, character counter, case converter, text summarizer, text simplifier, age calculator.',
    alternates: { canonical: 'https://www.toolnovahub.com/tools/utility-tools' },
    openGraph: {
        title: 'Utility Tools - Word Counter, Case Converter & More | ToolNova',
        description: 'Use free utility tools for text counting, formatting, summarizing, and calculations.',
        url: 'https://www.toolnovahub.com/tools/utility-tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Utility Tools | ToolNova',
        description: 'Free utility tools for word count, text formatting, summaries, and more.',
    },
};

const tools = [
    { name: 'Word Counter', slug: 'word-counter', description: 'Count words, characters, sentences & paragraphs', icon: 'Hash', badge: 'Popular', badgeColor: 'bg-cyan-500' },
    { name: 'Character Counter', slug: 'character-counter', description: 'Count characters with social media limits', icon: 'Type' },
    { name: 'Case Converter', slug: 'case-converter', description: 'Convert text to different cases', icon: 'AlignLeft' },
    { name: 'Text Summarizer', slug: 'text-summarizer', description: 'Summarize long texts into key points', icon: 'FileText', badge: 'Top Rated', badgeColor: 'bg-blue-500' },
    { name: 'Text Simplifier', slug: 'text-simplifier', description: 'Simplify complex text for easy reading', icon: 'AlignLeft' },
    { name: 'Age Calculator', slug: 'age-calculator', description: 'Calculate age from date of birth', icon: 'Calculator' },
];

export default function UtilityToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <UtilityToolsClient tools={tools} />
            </div>

            <section className="mx-auto max-w-[1200px] px-6 pb-12">
                <h2 className="text-xl font-semibold mb-3">Explore more categories</h2>
                <div className="flex flex-wrap gap-3 text-sm">
                    <Link href="/tools" className="underline underline-offset-4">All tools</Link>
                    <Link href="/tools/writing-tools" className="underline underline-offset-4">Writing tools</Link>
                    <Link href="/tools/study-tools" className="underline underline-offset-4">Study tools</Link>
                    <Link href="/tools/image-pdf-tools" className="underline underline-offset-4">Image & PDF tools</Link>
                    <Link href="/tools/career-tools" className="underline underline-offset-4">Career tools</Link>
                    <Link href="/blog" className="underline underline-offset-4">Blog</Link>
                </div>
            </section>
        </div>
    );
}
