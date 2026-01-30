/**
 * SEO Metadata utilities for optimal search engine and social media performance
 */

import { Metadata } from 'next';

interface SEOConfig {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    twitterCard?: 'summary' | 'summary_large_image';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    category?: string;
}

const BASE_URL = 'https://aimultitools.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'AI Study Tools';

/**
 * Generate comprehensive metadata for a page
 */
export function generateMetadata(config: SEOConfig): Metadata {
    const {
        title,
        description,
        keywords = [],
        canonical,
        ogImage = DEFAULT_OG_IMAGE,
        ogType = 'website',
        twitterCard = 'summary_large_image',
        publishedTime,
        modifiedTime,
        author,
        category,
    } = config;

    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = canonical || BASE_URL;

    return {
        title: fullTitle,
        description,
        keywords: keywords.join(', '),
        authors: author ? [{ name: author }] : undefined,
        category,

        // Canonical URL
        alternates: {
            canonical: url,
        },

        // Open Graph (Facebook, LinkedIn, etc.)
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: SITE_NAME,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_US',
            type: ogType,
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },

        // Twitter Card
        twitter: {
            card: twitterCard,
            title: fullTitle,
            description,
            images: [ogImage],
            creator: '@AIStudyTools', // Update with actual Twitter handle
        },

        // Additional meta tags
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Verification tags (add your verification codes)
        verification: {
            // google: 'your-google-verification-code',
            // bing: 'your-bing-verification-code',
        },
    };
}

/**
 * Tool page metadata template
 */
export function generateToolMetadata(
    toolName: string,
    description: string,
    toolSlug: string,
    keywords: string[]
): Metadata {
    return generateMetadata({
        title: `${toolName} Free – AI-Powered Online Tool`,
        description: `${description}. Free, fast, and accurate. No signup required. Trusted by 10,000+ students worldwide.`,
        keywords: [
            ...keywords,
            'free online tool',
            'AI tool',
            'student tools',
            'study helper',
            'homework help',
        ],
        canonical: `${BASE_URL}/tools/${toolSlug}`,
        ogImage: `${BASE_URL}/og-images/tools/${toolSlug}.png`,
        category: 'Education',
    });
}

/**
 * Blog post metadata template
 */
export function generateBlogMetadata(
    title: string,
    description: string,
    slug: string,
    keywords: string[],
    publishedDate: string,
    modifiedDate: string,
    author: string = 'AI Study Tools Team',
    category: string = 'Education'
): Metadata {
    return generateMetadata({
        title,
        description,
        keywords,
        canonical: `${BASE_URL}/blog/${slug}`,
        ogImage: `${BASE_URL}/og-images/blog/${slug}.png`,
        ogType: 'article',
        publishedTime: publishedDate,
        modifiedTime: modifiedDate,
        author,
        category,
    });
}

/**
 * Homepage metadata
 */
export function getHomepageMetadata(): Metadata {
    return generateMetadata({
        title: 'AI Study Tools - Free AI Homework Solver, Essay Writer & Study Helper | 30+ Tools',
        description: 'Transform your studies with 30+ free AI-powered tools. Get instant homework help, generate perfect essays, create study notes, and ace your exams. Trusted by 10,000+ students worldwide. Fast, accurate, and completely free.',
        keywords: [
            'AI study tools',
            'homework solver',
            'essay writer',
            'AI homework help',
            'free study tools',
            'AI essay generator',
            'study helper',
            'exam preparation',
            'AI notes generator',
            'student AI tools',
            'free essay writer',
            'homework help AI',
            'study notes generator',
            'AI paraphraser',
            'grammar checker',
            'MCQ generator',
            'flashcard maker',
            'quiz generator',
            'text summarizer',
            'AI writing tools',
        ],
        canonical: BASE_URL,
        ogImage: `${BASE_URL}/og-image.png`,
    });
}

/**
 * Generate JSON-LD script tag content
 */
export function generateJSONLD(schema: object): string {
    return JSON.stringify(schema);
}

/**
 * Common keywords for different tool categories
 */
export const KEYWORD_SETS = {
    aiStudy: [
        'AI study tools',
        'homework solver',
        'study helper',
        'AI tutor',
        'exam prep',
        'study notes',
    ],
    writing: [
        'AI writing',
        'essay writer',
        'paraphraser',
        'grammar checker',
        'content writer',
        'AI editor',
    ],
    creative: [
        'AI story generator',
        'creative writing',
        'content generator',
        'AI creativity',
    ],
    utility: [
        'text tools',
        'word counter',
        'case converter',
        'text utilities',
        'online tools',
    ],
};

/**
 * High-value, high-CPC keywords for SEO targeting
 */
export const HIGH_VALUE_KEYWORDS = [
    // Education (High CPC: $5-15)
    'online tutoring',
    'homework help',
    'test prep',
    'study guide',
    'essay writing service',

    // AI/Technology (High CPC: $10-30)
    'AI essay writer',
    'AI homework solver',
    'AI study assistant',
    'machine learning tools',

    // Student Tools (Medium-High CPC: $3-8)
    'free essay writer',
    'plagiarism free paraphraser',
    'grammar checker free',
    'citation generator',
    'note taking app',
];
