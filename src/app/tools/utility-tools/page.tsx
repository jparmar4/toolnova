import Link from 'next/link';
import { UtilityToolsClient } from './client';

export const metadata = {
    title: 'Utility Tools - Word Counter, Case Converter & More | ToolNova',
    description: 'Free utility tools: word counter, character counter, case converter, text summarizer, text simplifier, age calculator.',
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
        </div>
    );
}
