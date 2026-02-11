'use client';

import { useEffect } from 'react';

/**
 * Component to load Material Symbols asynchronously to prevent render blocking
 * and fix the "Event handlers cannot be passed to Server Component" error.
 */
export function MaterialSymbols() {
    useEffect(() => {
        // This is the client-side equivalent of the onLoad="this.media='all'" hack
        const link = document.querySelector('link[href*="Material+Symbols+Outlined"]');
        if (link) {
            (link as HTMLLinkElement).media = 'all';
        }
    }, []);

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
                media="print"
            />
            <noscript>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </noscript>
        </>
    );
}
