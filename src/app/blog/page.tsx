import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts, getAllCategories } from "@/data/blog";
import { FaArrowRight, FaCalendar, FaClock, FaRocket, FaChevronRight } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Blog - AI Tools Guides, Tips & Expert Reviews 2026 | ToolNova",
    description: "Expert guides on AI tools, productivity, writing, study tips, and business technology. Learn how to use free AI tools effectively to boost your productivity and achieve your goals.",
    keywords: ["AI tools blog", "productivity tips", "study guides", "writing tips", "AI guides", "free tools tutorials", "AI tool reviews", "business technology guides", "cloud software reviews"],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
        },
    },
    openGraph: {
        title: "Blog - AI Tools Guides, Tips & Expert Reviews 2026 | ToolNova",
        description: "Expert guides on AI tools, productivity, writing, and study tips.",
        url: `${siteConfig.url}/blog`,
        type: "website",
        images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: "ToolNova Blog" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - AI Tools Guides, Tips & Expert Reviews 2026 | ToolNova",
        description: "Expert guides on AI tools, productivity, writing, and study tips.",
        images: [`${siteConfig.url}/og-image.png`],
        creator: "@toolnovahub",
        site: "@toolnovahub",
    },
    alternates: {
        canonical: `${siteConfig.url}/blog`,
        languages: {
            "en-US": `${siteConfig.url}/blog`,
            "en-GB": `${siteConfig.url}/blog`,
            "en-CA": `${siteConfig.url}/blog`,
            "en-AU": `${siteConfig.url}/blog`,
            "en-DE": `${siteConfig.url}/blog`,
            "en-SG": `${siteConfig.url}/blog`,
            "en-AE": `${siteConfig.url}/blog`,
            "x-default": `${siteConfig.url}/blog`,
        },
    },
};

export default function BlogPage() {
    const blogPosts = getAllBlogPosts();
    const categories = getAllCategories();
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);

    // CollectionPage + Blog + ItemList schema for AI search engines
    const blogCollectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "ToolNova Blog - AI Tools Guides & Expert Reviews",
        description: "Expert guides on AI tools, productivity, writing, study tips, and business technology.",
        url: `${siteConfig.url}/blog`,
        publisher: {
            "@type": "Organization",
            name: "ToolNova",
            url: siteConfig.url,
            logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
        },
        mainEntity: {
            "@type": "ItemList",
            name: "ToolNova Blog Articles",
            numberOfItems: blogPosts.length,
            itemListElement: blogPosts.slice(0, 20).map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${siteConfig.url}/blog/${post.slug}`,
                name: post.title,
            })),
        },
    };

    return (
        <>
            {/* CollectionPage + Blog Schema for AI Search */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
            />
            <div className="min-h-screen bg-slate-50 pt-24">
                {/* Featured Post */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href={`/blog/${featuredPost.slug}`} className="block group">
                            <article className="grid lg:grid-cols-2 gap-8 items-center p-8 bg-white border border-slate-100 rounded-[2rem] shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                {/* Gradient accent */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 blur-2xl pointer-events-none" />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-purple-500/20">
                                            ⭐ Featured
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                                            {featuredPost.category}
                                        </span>
                                    </div>
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors leading-tight">
                                        {featuredPost.title}
                                    </h1>
                                    <p className="text-slate-600 mb-6 text-lg leading-relaxed line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                                        <span className="flex items-center gap-1.5">
                                            <FaCalendar className="text-purple-500" />
                                            {featuredPost.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <FaClock className="text-purple-500" />
                                            {featuredPost.readTime}
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-purple-600 font-bold group-hover:gap-3 transition-all">
                                        Read Article
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                            <FaArrowRight className="text-xs" />
                                        </div>
                                    </div>
                                </div>

                                {/* Visual Element */}
                                <div className="relative hidden lg:block">
                                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center overflow-hidden">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
                                            <FaRocket className="text-white text-4xl" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </div>
                </section>

                {/* Other Posts Grid */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
                            Latest Articles
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group h-full"
                                >
                                    <article className="h-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                                        {/* Category Badge */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2 leading-tight">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                            <span className="text-slate-500 text-xs flex items-center gap-1.5">
                                                <FaCalendar className="text-purple-400" />
                                                {post.date}
                                            </span>
                                            <span className="text-slate-500 text-xs flex items-center gap-1.5">
                                                <FaClock className="text-purple-400" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Read More */}
                                        <div className="mt-4 flex items-center gap-1 text-purple-600 text-sm font-medium group-hover:gap-2 transition-all">
                                            Read more
                                            <FaChevronRight className="text-xs" />
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Popular Topics */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                            Popular Topics
                        </h2>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {["AI Tools", "Productivity", "Writing Tips", "Study Guides", "PDF Tools", "Content Creation"].map((topic) => (
                                <span
                                    key={topic}
                                    className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-900/30">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <FaRocket className="text-4xl mb-6 mx-auto text-purple-200" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to Boost Your Productivity?
                                </h2>
                                <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                                    Try our free AI-powered tools to write better, study smarter,
                                    and save hours every week. No sign-up required.
                                </p>
                                <Link
                                    href="/tools"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg shadow-black/10"
                                >
                                    Explore Free Tools
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

