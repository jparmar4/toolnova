import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAuthor, getAllAuthors } from '@/data/authors';
import { getPostsByAuthor } from '@/data/blog';
import { schemaToJsonLd } from '@/lib/schema';
import { FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';

interface AuthorPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const authors = getAllAuthors();
    return authors.map((author) => ({
        slug: author.slug,
    }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
    const { slug } = await params;
    const author = getAuthor(slug);

    if (!author) {
        return {
            title: 'Author Not Found | ToolNova',
        };
    }

    return {
        title: `${author.name} - ${author.role} | ToolNova Experts`,
        description: author.bio,
    };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
    const { slug } = await params;
    const author = getAuthor(slug);

    if (!author) {
        notFound();
    }

    const posts = getPostsByAuthor(author.name);

    // Schema.org ProfilePage
    const profileSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
            '@type': 'Person',
            name: author.name,
            jobTitle: author.role,
            description: author.bio,
            image: `https://www.toolnovahub.com/authors/${author.slug}.jpg`, // Placeholder
            sameAs: Object.values(author.socials || {}),
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: schemaToJsonLd(profileSchema) }}
            />
            <div className="container mx-auto px-6 py-24 max-w-5xl">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-20">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-200 flex items-center justify-center text-4xl md:text-6xl font-bold text-slate-500 overflow-hidden relative shadow-xl">
                        {author.image.length <= 2 ? (
                            author.image
                        ) : (
                            <Image
                                src={author.image}
                                alt={author.name}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                            {author.name}
                        </h1>
                        <p className="text-xl text-purple-600 font-medium mb-6">
                            {author.role}
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                            {author.bio}
                        </p>

                        {/* Socials */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            {author.socials?.twitter && (
                                <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-500 transition-colors">
                                    <FaTwitter className="text-xl" />
                                </a>
                            )}
                            {author.socials?.linkedin && (
                                <a href={author.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                                    <FaLinkedin className="text-xl" />
                                </a>
                            )}
                            {author.socials?.website && (
                                <a href={author.socials.website} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                                    <FaGlobe className="text-xl" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Specialties */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Areas of Expertise</h2>
                    <div className="flex flex-wrap gap-3">
                        {author.specialties.map((specialty, i) => (
                            <span key={i} className="px-5 py-2 rounded-full bg-purple-50 text-purple-700 font-medium border border-purple-100">
                                {specialty}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Articles */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                        Latest Articles by {author.name}
                    </h2>
                    {posts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                    <article className="h-full flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                                        <div className="aspect-video bg-slate-100 relative overflow-hidden">
                                            {post.coverImage && (
                                                <Image
                                                    src={post.coverImage}
                                                    alt={post.imageAlt}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            )}
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="text-xs font-bold text-purple-600 mb-3 uppercase tracking-wider">
                                                {post.category}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="text-sm text-slate-400 font-medium mt-auto">
                                                {post.date} • {post.readTime}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-slate-500 italic">No articles found for this author yet.</p>
                    )}
                </div>
            </div>
        </>
    );
}
