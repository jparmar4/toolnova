/**
 * AdSense Configuration
 * Update these values with your actual AdSense publisher ID and ad unit IDs
 */

export const adsenseConfig = {
    // Your AdSense Publisher ID (format: ca-pub-XXXXXXXXXXXXXXXX)
    // Read from environment variable or use placeholder
    publisherId: process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-XXXXXXXXXXXXXXXX',

    // Enable/Disable ads globally
    enabled: process.env.NEXT_PUBLIC_ADSENSE_ID ? true : false, // Disabled if ID not configured

    // Ad Units by Placement
    adUnits: {
        // Homepage
        homeHero: 'XXXXXXXXXX',
        homeFooter: 'XXXXXXXXXX',

        // Tool Pages
        toolTopBanner: 'XXXXXXXXXX',
        toolSidebar: 'XXXXXXXXXX',
        toolInContent: 'XXXXXXXXXX',
        toolBottomBox: 'XXXXXXXXXX',

        // Blog
        blogSidebar: 'XXXXXXXXXX',
        blogInContent: 'XXXXXXXXXX',
        blogBottomBox: 'XXXXXXXXXX',

        // Mobile
        mobileAnchor: 'XXXXXXXXXX',
        mobileInFeed: 'XXXXXXXXXX',
    },

    // Ad Formats
    formats: {
        displayBanner: {
            desktop: '728x90',
            mobile: '320x50',
        },
        rectangle: '300x250',
        largeRectangle: '336x280',
        skyscraper: '160x600',
        wideSkyscraper: '300x600',
        leaderboard: '728x90',
        mobileLeaderboard: '320x50',
    },

    // Test Mode (use test ads)
    testMode: true, // Set to false in production

    // Tier 1 Countries Targeting (for revenue optimization)
    tier1Countries: ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'NL', 'SE', 'NO', 'DK'],

    // Ad Density Settings (balance between UX and revenue)
    density: {
        homepage: 'medium', // low, medium, high
        toolPages: 'high',
        blogPages: 'high',
    },

    // Auto Ads Settings
    autoAds: {
        enabled: true, // Enable Google Auto Ads
        anchorAds: true, // Enable anchor/sticky ads on mobile
        inPageAds: true, // Enable automatic in-page ads
        matchedContent: true, // Enable matched content recommendations
    },
};

/**
 * Get AdSense script URL
 */
export function getAdsenseScriptUrl(): string {
    return `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.publisherId}`;
}

/**
 * Check if ads should be shown based on environment
 */
export function shouldShowAds(): boolean {
    if (!adsenseConfig.enabled) return false;
    if (typeof window === 'undefined') return false;

    // Don't show ads in development unless explicitly enabled
    if (process.env.NODE_ENV === 'development' && !adsenseConfig.testMode) {
        return false;
    }

    return true;
}

/**
 * Initialize AdSense Auto Ads
 */
export function initializeAutoAds(): void {
    if (!adsenseConfig.autoAds.enabled || !shouldShowAds()) return;

    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: adsenseConfig.publisherId,
            enable_page_level_ads: true,
            overlays: { bottom: adsenseConfig.autoAds.anchorAds },
        });
    } catch (error) {
        console.error('Failed to initialize Auto Ads:', error);
    }
}

// Type declaration for window.adsbygoogle
declare global {
    interface Window {
        adsbygoogle: any[];
    }
}
