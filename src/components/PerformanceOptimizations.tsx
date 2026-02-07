/**
 * Core Web Vitals Optimization
 * Resource hints and performance improvements
 */

import Script from 'next/script';
import { ReactNode } from 'react';

export function PerformanceOptimizations({ children }: { children: ReactNode }) {
    return (
        <>
            {/* DNS Prefetch for external domains */}
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

            {/* Preconnect to critical origins */}
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Preload critical fonts */}
            <link
                rel="preload"
                href="/fonts/inter-var.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />

            {children}
        </>
    );
}

/**
 * Add to layout.tsx head section for resource hints
 */
export function ResourceHints() {
    return (
        <>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />
        </>
    );
}
