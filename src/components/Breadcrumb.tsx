'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
                {/* Home */}
                <li>
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={isLast ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                                    {item.label}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

/**
 * Generate breadcrumb schema for SEO
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[], baseUrl: string = 'https://toolnovahub.com') {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl,
            },
            ...items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: item.label,
                ...(item.href && { item: `${baseUrl}${item.href}` }),
            })),
        ],
    };
}
