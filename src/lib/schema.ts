/**
 * Schema.org structured data utilities for SEO/AEO/GEO optimization
 */

export interface OrganizationSchema {
    '@context': 'https://schema.org';
    '@type': 'Organization';
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string[];
    contactPoint?: {
        '@type': 'ContactPoint';
        email: string;
        contactType: string;
    };
}

export interface WebSiteSchema {
    '@context': 'https://schema.org';
    '@type': 'WebSite';
    name: string;
    url: string;
    description: string;
    potentialAction: {
        '@type': 'SearchAction';
        target: {
            '@type': 'EntryPoint';
            urlTemplate: string;
        };
        'query-input': string;
    };
}

export interface SoftwareApplicationSchema {
    '@context': 'https://schema.org';
    '@type': 'SoftwareApplication';
    name: string;
    description: string;
    url: string;
    applicationCategory: string;
    offers: {
        '@type': 'Offer';
        price: string;
        priceCurrency: string;
    };
    aggregateRating?: {
        '@type': 'AggregateRating';
        ratingValue: string;
        ratingCount: string;
    };
}

export interface FAQPageSchema {
    '@context': 'https://schema.org';
    '@type': 'FAQPage';
    mainEntity: Array<{
        '@type': 'Question';
        name: string;
        acceptedAnswer: {
            '@type': 'Answer';
            text: string;
        };
    }>;
}

export interface HowToSchema {
    '@context': 'https://schema.org';
    '@type': 'HowTo';
    name: string;
    description: string;
    step: Array<{
        '@type': 'HowToStep';
        name: string;
        text: string;
        url?: string;
    }>;
}

export interface BreadcrumbListSchema {
    '@context': 'https://schema.org';
    '@type': 'BreadcrumbList';
    itemListElement: Array<{
        '@type': 'ListItem';
        position: number;
        name: string;
        item: string;
    }>;
}

/**
 * Generate Organization schema for the website
 */
export function getOrganizationSchema(): OrganizationSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AI Study Tools',
        url: 'https://aimultitools.com',
        logo: 'https://aimultitools.com/logo.svg',
        description: '30+ free AI-powered tools for students. Get instant homework help, generate essays, create study notes, and ace your exams.',
        sameAs: [
            'https://twitter.com/aistudytools',
            'https://github.com/aistudytools',
            'https://linkedin.com/company/aistudytools',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'hello@aimultitools.com',
            contactType: 'Customer Service',
        },
    };
}

/**
 * Generate WebSite schema for search functionality
 */
export function getWebSiteSchema(): WebSiteSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'AI Study Tools',
        url: 'https://aimultitools.com',
        description: '30+ free AI-powered tools for students',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://aimultitools.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

/**
 * Generate SoftwareApplication schema for a tool
 */
export function getToolSchema(
    toolName: string,
    description: string,
    url: string
): SoftwareApplicationSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: toolName,
        description,
        url,
        applicationCategory: 'EducationalApplication',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
        },
    };
}

/**
 * Generate FAQ schema for a page
 */
export function getFAQSchema(
    faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate HowTo schema for step-by-step guides
 */
export function getHowToSchema(
    title: string,
    description: string,
    steps: Array<{ name: string; text: string; url?: string }>
): HowToSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: title,
        description,
        step: steps.map((step) => ({
            '@type': 'HowToStep',
            name: step.name,
            text: step.text,
            url: step.url,
        })),
    };
}

/**
 * Generate Breadcrumb schema for navigation
 */
export function getBreadcrumbSchema(
    breadcrumbs: Array<{ name: string; url: string }>
): BreadcrumbListSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
        })),
    };
}

/**
 * Convert schema object to JSON-LD script tag string
 */
export function schemaToJsonLd(schema: any): string {
    return JSON.stringify(schema);
}
