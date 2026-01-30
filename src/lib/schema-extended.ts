/**
 * Additional Schema.org types for enhanced SEO/AEO/GEO
 */

export interface ReviewSchema {
    '@context': 'https://schema.org';
    '@type': 'Review';
    itemReviewed: {
        '@type': 'SoftwareApplication';
        name: string;
    };
    author: {
        '@type': 'Person';
        name: string;
    };
    reviewRating: {
        '@type': 'Rating';
        ratingValue: number;
        bestRating: number;
    };
    reviewBody: string;
}

export interface ArticleSchema {
    '@context': 'https://schema.org';
    '@type': 'Article';
    headline: string;
    description: string;
    image: string[];
    datePublished: string;
    dateModified: string;
    author: {
        '@type': 'Person' | 'Organization';
        name: string;
    };
    publisher: {
        '@type': 'Organization';
        name: string;
        logo: {
            '@type': 'ImageObject';
            url: string;
        };
    };
    mainEntityOfPage: {
        '@type': 'WebPage';
        '@id': string;
    };
}

export interface CourseSchema {
    '@context': 'https://schema.org';
    '@type': 'Course';
    name: string;
    description: string;
    provider: {
        '@type': 'Organization';
        name: string;
        sameAs: string;
    };
    hasCourseInstance: {
        '@type': 'CourseInstance';
        courseMode: string;
        courseWorkload: string;
    };
}

export interface VideoObjectSchema {
    '@context': 'https://schema.org';
    '@type': 'VideoObject';
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
    contentUrl?: string;
    embedUrl?: string;
}

/**
 * Generate Review schema for testimonials
 */
export function getReviewSchema(
    toolName: string,
    authorName: string,
    rating: number,
    reviewText: string
): ReviewSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
            '@type': 'SoftwareApplication',
            name: toolName,
        },
        author: {
            '@type': 'Person',
            name: authorName,
        },
        reviewRating: {
            '@type': 'Rating',
            ratingValue: rating,
            bestRating: 5,
        },
        reviewBody: reviewText,
    };
}

/**
 * Generate Article schema for blog posts
 */
export function getArticleSchema(
    title: string,
    description: string,
    imageUrl: string,
    publishedDate: string,
    modifiedDate: string,
    authorName: string,
    articleUrl: string
): ArticleSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: [imageUrl],
        datePublished: publishedDate,
        dateModified: modifiedDate,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: 'AI Study Tools',
            logo: {
                '@type': 'ImageObject',
                url: 'https://aimultitools.com/logo.svg',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleUrl,
        },
    };
}

/**
 * Generate Video schema for demo/tutorial videos
 */
export function getVideoSchema(
    name: string,
    description: string,
    thumbnailUrl: string,
    uploadDate: string,
    duration?: string
): VideoObjectSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name,
        description,
        thumbnailUrl,
        uploadDate,
        ...(duration && { duration }),
    };
}

/**
 * Generate ItemList schema for trending tools or tool collections
 */
export function getItemListSchema(
    listName: string,
    items: Array<{ name: string; url: string; description: string }>
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: listName,
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'SoftwareApplication',
                name: item.name,
                url: item.url,
                description: item.description,
            },
        })),
    };
}

/**
 * Generate AggregateRating schema for overall platform rating
 */
export function getAggregateRatingSchema(
    ratingValue: number,
    reviewCount: number,
    bestRating: number = 5
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        ratingValue: ratingValue.toString(),
        reviewCount: reviewCount.toString(),
        bestRating: bestRating.toString(),
        worstRating: '1',
    };
}
