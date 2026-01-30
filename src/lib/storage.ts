/**
 * LocalStorage utility functions for managing tool history and preferences
 */

export interface GenerationHistoryItem {
    id: string;
    toolName: string;
    input: string;
    result: string;
    timestamp: number;
}

const HISTORY_KEY = 'tool_generation_history';
const MAX_HISTORY_ITEMS = 10;

/**
 * Save a generation to history
 */
export function saveToHistory(toolName: string, input: string, result: string): void {
    try {
        const history = getHistory();
        const newItem: GenerationHistoryItem = {
            id: Date.now().toString(),
            toolName,
            input: input.substring(0, 200), // Save first 200 chars to save space
            result: result.substring(0, 500), //Save first 500 chars
            timestamp: Date.now(),
        };

        const updatedHistory = [newItem, ...history].slice(0, MAX_HISTORY_ITEMS);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
        console.error('Failed to save to history:', error);
    }
}

/**
 * Get all history items
 */
export function getHistory(): GenerationHistoryItem[] {
    try {
        const stored = localStorage.getItem(HISTORY_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Failed to get history:', error);
        return [];
    }
}

/**
 * Get history for a specific tool
 */
export function getToolHistory(toolName: string): GenerationHistoryItem[] {
    return getHistory().filter(item => item.toolName === toolName);
}

/**
 * Clear all history
 */
export function clearHistory(): void {
    try {
        localStorage.removeItem(HISTORY_KEY);
    } catch (error) {
        console.error('Failed to clear history:', error);
    }
}

/**
 * Clear history for a specific tool
 */
export function clearToolHistory(toolName: string): void {
    try {
        const history = getHistory();
        const updated = history.filter(item => item.toolName !== toolName);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    } catch (error) {
        console.error('Failed to clear tool history:', error);
    }
}

/**
 * Delete a specific history item
 */
export function deleteHistoryItem(id: string): void {
    try {
        const history = getHistory();
        const updated = history.filter(item => item.id !== id);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    } catch (error) {
        console.error('Failed to delete history item:', error);
    }
}

/**
 * User preferences management
 */
interface UserPreferences {
    favoriteTools: string[];
    theme?: 'light' | 'dark' | 'system';
    recentTools: string[];
}

const PREFERENCES_KEY = 'user_preferences';

export function getPreferences(): UserPreferences {
    try {
        const stored = localStorage.getItem(PREFERENCES_KEY);
        return stored ? JSON.parse(stored) : { favoriteTools: [], recentTools: [] };
    } catch (error) {
        return { favoriteTools: [], recentTools: [] };
    }
}

export function setPreferences(preferences: UserPreferences): void {
    try {
        localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
    } catch (error) {
        console.error('Failed to save preferences:', error);
    }
}

export function addToFavorites(toolName: string): void {
    const prefs = getPreferences();
    if (!prefs.favoriteTools.includes(toolName)) {
        prefs.favoriteTools.push(toolName);
        setPreferences(prefs);
    }
}

export function removeFromFavorites(toolName: string): void {
    const prefs = getPreferences();
    prefs.favoriteTools = prefs.favoriteTools.filter(t => t !== toolName);
    setPreferences(prefs);
}

export function addToRecentTools(toolName: string): void {
    const prefs = getPreferences();
    prefs.recentTools = [toolName, ...prefs.recentTools.filter(t => t !== toolName)].slice(0, 5);
    setPreferences(prefs);
}
