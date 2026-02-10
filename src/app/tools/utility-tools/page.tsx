import Link from 'next/link';
import {
    Wrench,
    ArrowRight,
    Hash,
    Type,
    AlignLeft,
    FileText,
    Calculator
} from 'lucide-react';

export const metadata = {
    title: 'Utility Tools - Word Counter, Case Converter & More | ToolNova',
    description: 'Free utility tools: word counter, character counter, case converter, text summarizer, text simplifier, age calculator.',
};

const tools = [
    { name: 'Word Counter', slug: 'word-counter', description: 'Count words, characters, sentences & paragraphs', icon: Hash },
    { name: 'Character Counter', slug: 'character-counter', description: 'Count characters with social media limits', icon: Type },
    { name: 'Case Converter', slug: 'case-converter', description: 'Convert text to different cases', icon: AlignLeft },
    { name: 'Text Summarizer', slug: 'text-summarizer', description: 'Summarize long texts into key points', icon: FileText },
    { name: 'Text Simplifier', slug: 'text-simplifier', description: 'Simplify complex text for easy reading', icon: AlignLeft },
    { name: 'Age Calculator', slug: 'age-calculator', description: 'Calculate age from date of birth', icon: Calculator },
];

export default function UtilityToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary">Home</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary">Tools</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <span className="text-primary text-sm font-semibold">Utility Tools</span>
                </div>

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold mb-5">
                        <Wrench className="h-4 w-4" />
                        {tools.length} Tools
                    </div>
                    <h1 className="text-foreground text-4xl md:text-5xl font-black tracking-tight mb-4">Utility Tools</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Handy text tools and calculators for everyday tasks.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50/50 dark:from-cyan-900/20 dark:to-blue-900/10 border border-cyan-100 dark:border-cyan-800/30 hover:shadow-2xl shadow-cyan-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <tool.icon className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">{tool.name}</h3>
                                    <p className="text-muted-foreground text-sm mt-1">{tool.description}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-end">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
