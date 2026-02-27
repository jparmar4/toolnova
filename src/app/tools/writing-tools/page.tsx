import Link from 'next/link';
import { WritingToolsClient } from './client';

export const metadata = {
    title: 'AI Writing Tools - Essay Writer, Email Generator & More | ToolNova',
    description: 'Free AI writing tools: essay writer, story generator, email writer, grammar checker, paraphraser, and more.',
    alternates: { canonical: 'https://www.toolnovahub.com/tools/writing-tools' },
    openGraph: {
        title: 'AI Writing Tools - Essay Writer, Email Generator & More | ToolNova',
        description: 'Explore free AI writing tools for essays, emails, grammar fixes, paraphrasing, and more.',
        url: 'https://www.toolnovahub.com/tools/writing-tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Writing Tools | ToolNova',
        description: 'Free writing tools for essays, emails, grammar and paraphrasing.',
    },
};

const tools = [
    { name: 'Essay Writer', slug: 'essay-writer', description: 'Generate structured essays on any topic', icon: 'FileText', badge: 'Popular', badgeColor: 'bg-purple-500' },
    { name: 'Paragraph Generator', slug: 'paragraph-generator', description: 'Create paragraphs for various purposes', icon: 'Edit3' },
    { name: 'Story Generator', slug: 'story-generator', description: 'Create engaging stories with AI', icon: 'BookOpen', badge: 'New', badgeColor: 'bg-green-500' },
    { name: 'Speech Writer', slug: 'speech-writer', description: 'Write compelling speeches for any occasion', icon: 'Mic' },
    { name: 'Email Writer', slug: 'email-writer', description: 'Draft professional emails instantly', icon: 'Mail', badge: 'Top Rated', badgeColor: 'bg-pink-500' },
    { name: 'Grammar Fix', slug: 'grammar-fix', description: 'Fix grammar and improve writing quality', icon: 'Edit3' },
    { name: 'Paraphraser', slug: 'paraphraser', description: 'Rewrite text while keeping the meaning', icon: 'MessageSquare' },
    { name: 'Resume Bullets', slug: 'resume-bullets', description: 'Generate impactful resume bullet points', icon: 'FileText' },
    { name: 'Bio Generator', slug: 'bio-generator', description: 'Create social media bios instantly', icon: 'UserCircle' },
    { name: 'Caption Generator', slug: 'caption-generator', description: 'Generate catchy social media captions', icon: 'Instagram' },
];

export default function WritingToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <WritingToolsClient tools={tools} />
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
