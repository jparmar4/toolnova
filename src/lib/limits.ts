export const DAILY_FREE_LIMIT = 5;

export interface UsageLimit {
    count: number;
    limit: number;
    remaining: number;
    isPremium: boolean;
    date: string;
}

/**
 * Check if the user has reached their daily limit
 */
export function hasReachedLimit(usage: UsageLimit): boolean {
    if (usage.isPremium) return false;
    return usage.count >= usage.limit;
}

/**
 * Get remaining prompts
 */
export function getRemainingPrompts(usage: UsageLimit): number {
    if (usage.isPremium) return Infinity;
    return Math.max(0, usage.limit - usage.count);
}
