import { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";
import { processContent, extractYoutubeVideoIds } from "@/lib/content-processor";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { siteConfig } from "@/config/site";
import {
    FaArrowLeft,
    FaCalendar,
    FaClock,
    FaChevronRight,
    FaRocket,
} from "react-icons/fa";
import ShareButtons from "@/components/blog/ShareButtons";

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for each blog post
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found | ToolNova Blog",
        };
    }

    return {
        title: `${post.title} | ToolNova Blog`,
        description: post.metaDescription,
        keywords: post.keywords,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            url: `${siteConfig.url}/blog/${post.slug}`,
            images: [
                {
                    url: post.coverImage || `${siteConfig.url}/og-image.png`,
                    alt: post.imageAlt || post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.metaDescription,
            images: [post.coverImage || `${siteConfig.url}/og-image.png`],
        },
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug, 2);
    const youtubeIds = extractYoutubeVideoIds(post.content);

    // Generate Schema.org structured data
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: post.coverImage || `${siteConfig.url}/og-image.png`,
        author: {
            "@type": "Person",
            name: post.author,
            jobTitle: post.authorRole,
        },
        publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.png`,
            },
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/blog/${post.slug}`,
        },
        keywords: post.keywords.join(", "),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteConfig.url,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${siteConfig.url}/blog`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `${siteConfig.url}/blog/${post.slug}`,
            },
        ],
    };

    const faqSchema = post.faq?.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        }
        : null;

    // Video schema if YouTube embeds exist
    const videoSchema =
        youtubeIds.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: post.title,
                description: post.metaDescription,
                thumbnailUrl: `https://img.youtube.com/vi/${youtubeIds[0]}/maxresdefault.jpg`,
                uploadDate: post.date,
                embedUrl: `https://www.youtube.com/embed/${youtubeIds[0]}`,
            }
            : null;

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            )}
            {videoSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(videoSchema),
                    }}
                />
            )}

            <div className="min-h-screen bg-slate-50">
                {/* Header */}
                <header className="py-12 lg:py-20 relative overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        {/* Back Link */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 text-sm font-medium mb-8 transition-colors"
                        >
                            <FaArrowLeft className="text-xs" />
                            Back to Blog
                        </Link>

                        {/* Category Badge */}
                        <div className="flex justify-center mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-wide">
                                {post.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            {post.excerpt}
                        </p>

                        {/* Author & Meta */}
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-slate-900">
                                        {post.author}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        {post.authorRole}
                                    </div>
                                </div>
                            </div>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <span className="flex items-center gap-1.5">
                                <FaCalendar className="text-purple-500" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaClock className="text-purple-500" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Article Column */}
                        <div className="lg:col-span-2">
                            {/* Featured Image */}
                            {post.coverImage && (
                                <div className="mb-10 relative rounded-2xl overflow-hidden shadow-xl shadow-purple-900/10">
                                    <NextImage
                                        src={post.coverImage}
                                        alt={post.imageAlt || post.title}
                                        width={800}
                                        height={450}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Article Content */}
                            <article className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100">
                                <div className="prose prose-lg prose-slate max-w-none">
                                    {processContent(post.content)}
                                </div>

                                {/* Keywords/Tags */}
                                {post.keywords?.length > 0 && (
                                    <div className="mt-12 pt-8 border-t border-slate-200">
                                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                                            Related Topics
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {post.keywords.slice(0, 8).map((keyword) => (
                                                <span
                                                    key={keyword}
                                                    className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer"
                                                >
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Share Buttons */}
                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                                        Share this article
                                    </h3>
                                    <ShareButtons
                                        url={`${siteConfig.url}/blog/${post.slug}`}
                                        title={post.title}
                                    />
                                </div>
                            </article>

                            {/* FAQ Section */}
                            {post.faq?.length > 0 && (
                                <div className="mt-12 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-8">
                                        Frequently Asked Questions
                                    </h2>
                                    <div className="space-y-6">
                                        {post.faq.map((item, index) => (
                                            <div
                                                key={index}
                                                className="border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                                            >
                                                <h3 className="text-lg font-bold text-slate-900 mb-3">
                                                    {item.question}
                                                </h3>
                                                <p className="text-slate-600 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="mt-12">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-8">
                                        Related Articles
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {relatedPosts.map((relatedPost) => (
                                            <Link
                                                key={relatedPost.slug}
                                                href={`/blog/${relatedPost.slug}`}
                                                className="group"
                                            >
                                                <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                    <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                                                        {relatedPost.category}
                                                    </span>
                                                    <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-purple-700 transition-colors line-clamp-2">
                                                        {relatedPost.title}
                                                    </h3>
                                                    <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                                                        {relatedPost.excerpt}
                                                    </p>
                                                    <div className="mt-4 flex items-center gap-1 text-purple-600 text-sm font-medium">
                                                        Read more
                                                        <FaChevronRight className="text-xs" />
                                                    </div>
                                                </article>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="hidden lg:block lg:col-span-1">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-900/30">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <FaRocket className="text-4xl mb-6 mx-auto text-purple-200" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to Level Up?
                                </h2>
                                <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                                    Try our free AI-powered tools and start saving time today.
                                    No sign-up required.
                                </p>
                                <Link
                                    href="/tools"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg shadow-black/10"
                                >
                                    Explore Free Tools
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
