import Link from 'next/link';
import {
    Pencil,
    ArrowRight,
    FileText,
    Mail,
    BookOpen,
    Mic,
    MessageSquare,
    Sparkles,
    Instagram,
    UserCircle,
    Edit3
} from 'lucide-react';

export const metadata = {
    title: 'AI Writing Tools - Essay Writer, Email Generator & More | ToolNova',
    description: 'Free AI writing tools: essay writer, story generator, email writer, grammar checker, paraphraser, and more.',
};

const tools = [
    { name: 'Essay Writer', slug: 'essay-writer', description: 'Generate structured essays on any topic', icon: FileText },
    { name: 'Paragraph Generator', slug: 'paragraph-generator', description: 'Create paragraphs for various purposes', icon: Edit3 },
    { name: 'Story Generator', slug: 'story-generator', description: 'Create engaging stories with AI', icon: BookOpen },
    { name: 'Speech Writer', slug: 'speech-writer', description: 'Write compelling speeches for any occasion', icon: Mic },
    { name: 'Email Writer', slug: 'email-writer', description: 'Draft professional emails instantly', icon: Mail },
    { name: 'Grammar Fix', slug: 'grammar-fix', description: 'Fix grammar and improve writing quality', icon: Edit3 },
    { name: 'Paraphraser', slug: 'paraphraser', description: 'Rewrite text while keeping the meaning', icon: MessageSquare },
    { name: 'Resume Bullets', slug: 'resume-bullets', description: 'Generate impactful resume bullet points', icon: FileText },
    { name: 'Bio Generator', slug: 'bio-generator', description: 'Create social media bios instantly', icon: UserCircle },
    { name: 'Caption Generator', slug: 'caption-generator', description: 'Generate catchy social media captions', icon: Instagram },
];

export default function WritingToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary">Home</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary">Tools</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <span className="text-primary text-sm font-semibold">Writing Tools</span>
                </div>

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-5">
                        <Pencil className="h-4 w-4" />
                        {tools.length} AI Tools
                    </div>
                    <h1 className="text-foreground text-4xl md:text-5xl font-black tracking-tight mb-4">AI Writing Tools</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Create amazing content with AI-powered writing assistants for essays, emails, and more.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/10 border border-purple-100 dark:border-purple-800/30 hover:shadow-2xl shadow-purple-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg group-hover:scale-110 transition-transform">
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
