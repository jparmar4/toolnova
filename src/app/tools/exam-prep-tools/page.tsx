import Link from 'next/link';
import {
    BookOpen,
    ArrowRight,
    BookA,
    FileSearch,
    Languages,
    Quote,
    Text
} from 'lucide-react';

export const metadata = {
    title: 'Exam Prep Tools - Vocabulary, Synonyms & More | AI Multi Tools',
    description: 'Free exam prep tools: vocabulary builder, synonym finder, antonym finder, idioms & phrases, one word substitution.',
};

const tools = [
    { name: 'Vocabulary Builder', slug: 'vocabulary-builder', description: 'Learn new words with meanings and examples', icon: BookA },
    { name: 'Synonym Finder', slug: 'synonym-finder', description: 'Find synonyms for any word', icon: FileSearch },
    { name: 'Antonym Finder', slug: 'antonym-finder', description: 'Find antonyms for any word', icon: FileSearch },
    { name: 'Idioms & Phrases', slug: 'idioms-phrases', description: 'Learn idioms with meanings and examples', icon: Quote },
    { name: 'One Word Substitution', slug: 'one-word-substitution', description: 'Find single words for phrases', icon: Text },
];

export default function ExamPrepToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary">Home</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary">Tools</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <span className="text-primary text-sm font-semibold">Exam Prep Tools</span>
                </div>

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 text-sm font-semibold mb-5">
                        <BookOpen className="h-4 w-4" />
                        {tools.length} Tools
                    </div>
                    <h1 className="text-foreground text-4xl md:text-5xl font-black tracking-tight mb-4">Exam Prep Tools</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Master vocabulary, idioms, and language skills for competitive exams.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-100 dark:border-green-800/30 hover:shadow-2xl shadow-green-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg group-hover:scale-110 transition-transform">
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
