import { db } from './db';
import crypto from 'crypto';

/**
 * Generate SHA-256 hash of the prompt to use as a key
 */
export function hashPrompt(prompt: string): string {
    return crypto.createHash('sha256').update(prompt.trim()).digest('hex');
}

/**
 * Retrieve cached response if it exists
 */
export async function getCachedResponse(prompt: string): Promise<string | null> {
    if (process.env.NODE_ENV === 'development') {
        // Optional: Log cache content in dev
        console.log('Checking cache for prompt:', prompt.substring(0, 50) + '...');
    }

    try {
        const hash = hashPrompt(prompt);
        const cachedItem = await db.aICache.findUnique({
            where: { promptHash: hash },
        });

        if (cachedItem) {
            console.log('HIT: Cache hit for prompt');
            return cachedItem.response;
        }
    } catch (error) {
        console.error('Cache Retrieval Error:', error);
    }

    return null;
}

/**
 * Store AI response in the database
 */
export async function cacheResponse(prompt: string, response: string): Promise<void> {
    try {
        const hash = hashPrompt(prompt);
        // Use upsert to prevent race conditions or duplicates
        await db.aICache.upsert({
            where: { promptHash: hash },
            update: {}, // If exists, do nothing (keep oldest/original) or update if needed
            create: {
                promptHash: hash,
                prompt: prompt.trim(),
                response: response,
            },
        });
        console.log('STORE: Response cached');
    } catch (error) {
        console.error('Cache Storage Error:', error);
    }
}
