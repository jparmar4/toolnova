import Link from 'next/link';
import {
    Image as ImageIcon,
    ArrowRight,
    FileText,
    Merge,
    Scissors,
    ImagePlus,
    Shrink,
    ArrowRightLeft
} from 'lucide-react';

export const metadata = {
    title: 'Image & PDF Tools - Merge, Split, Compress & Convert | ToolNova',
    description: 'Free image and PDF tools: merge PDF, split PDF, image to PDF, image compressor, JPG to PNG, PNG to JPG.',
    alternates: { canonical: 'https://www.toolnovahub.com/tools/image-pdf-tools' },
    openGraph: {
        title: 'Image & PDF Tools - Merge, Split, Compress & Convert | ToolNova',
        description: 'Use free image and PDF tools to merge, split, compress, and convert files instantly.',
        url: 'https://www.toolnovahub.com/tools/image-pdf-tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Image & PDF Tools | ToolNova',
        description: 'Merge, split, compress, and convert image/PDF files for free.',
    },
};

const tools = [
    { name: 'Merge PDF', slug: 'merge-pdf', description: 'Combine multiple PDFs into one file', icon: Merge },
    { name: 'Split PDF', slug: 'split-pdf', description: 'Extract pages or split PDFs', icon: Scissors },
    { name: 'Image to PDF', slug: 'image-to-pdf', description: 'Convert images to PDF documents', icon: ImagePlus },
    { name: 'Image Compressor', slug: 'image-compressor', description: 'Reduce image file size', icon: Shrink },
    { name: 'JPG to PNG', slug: 'jpg-to-png', description: 'Convert JPG images to PNG format', icon: ArrowRightLeft },
    { name: 'PNG to JPG', slug: 'png-to-jpg', description: 'Convert PNG images to JPG format', icon: ArrowRightLeft },
];

export default function ImagePDFToolsPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary">Home</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary">Tools</Link>
                    <span className="text-muted-foreground/50 text-sm">/</span>
                    <span className="text-primary text-sm font-semibold">Image & PDF Tools</span>
                </div>

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 dark:text-red-400 text-sm font-semibold mb-5">
                        <ImageIcon className="h-4 w-4" />
                        {tools.length} Free Tools
                    </div>
                    <h1 className="text-foreground text-4xl md:text-5xl font-black tracking-tight mb-4">Image & PDF Tools</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Merge, split, convert, and compress files - all processed locally for privacy.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50/50 dark:from-red-900/20 dark:to-orange-900/10 border border-red-100 dark:border-red-800/30 hover:shadow-2xl shadow-red-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-600 text-white shadow-lg group-hover:scale-110 transition-transform">
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

                <div className="mt-10 p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-200 dark:border-green-800">
                    <p className="text-center text-green-700 dark:text-green-400 font-medium">
                        🔒 All files are processed locally in your browser - nothing is uploaded to any server.
                    </p>
                </div>
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
