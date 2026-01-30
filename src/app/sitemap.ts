import { webCrypto } from 'crypto';
import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/data/blog';

// Force dynamic generation
export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.toolnovahub.com';
    const currentDate = new Date().toISOString();

    // Get all blog posts
    const blogPosts = getAllBlogPosts();

    // Tool pages
    const tools = [
        // Writing Tools
        'text-summarizer',
        'paraphraser',
        'grammar-fix',
        'essay-writer',
        'speech-writer',
        'email-writer',
        'caption-generator',
        'story-generator',
        'paragraph-generator',
        'text-simplifier',

        // Study Tools
        'homework-solver',
        'notes-generator',
        'flashcard-maker',
        'quiz-generator',
        'mcq-generator',
        'concept-explainer',
        'chapter-summary',
        'doubt-solver',
        'diagram-explainer',
        'formula-generator',
        'timetable-generator',
        'revision-planner',
        'goal-planner',
        'todo-list-generator',

        // Language Tools
        'vocabulary-builder',
        'synonym-finder',
        'antonym-finder',
        'idioms-phrases',
        'one-word-substitution',

        // Career Tools
        'resume-bullets',
        'cover-letter-writer',
        'interview-generator',
        'bio-generator',

        // Utility Tools
        'word-counter',
        'character-counter',
        'case-converter',
        'age-calculator',

        // Image & PDF Tools
        'merge-pdf',
        'split-pdf',
        'image-to-pdf',
        'image-compressor',
        'jpg-to-png',
        'png-to-jpg',
    ];

    const toolUrls: MetadataRoute.Sitemap = tools.map((tool) => ({
        url: `${baseUrl}/tools/${tool}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Blog post URLs
    const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        ...toolUrls,
        ...blogUrls,
    ];
}
