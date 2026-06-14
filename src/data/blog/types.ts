// Blog post type definitions
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    dateModified?: string;
    category: string;
    author: string;
    authorSlug?: string;
    authorRole: string;
    readTime: string;
    wordCount?: number;
    content: string;
    metaDescription: string;
    keywords: string[];
    coverImage: string;
    imageAlt: string;
    faq: {
        question: string;
        answer: string;
    }[];
}
