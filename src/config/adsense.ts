/**
 * AdSense Configuration
 * Keep publisher identity and ad slot IDs in one place.
 */

const isValidPublisherId = (id?: string) => /^ca-pub-\d{16}$/.test(id ?? "");
const envPublisherId = process.env.NEXT_PUBLIC_ADSENSE_ID;

export const adsenseConfig = {
    publisherId: isValidPublisherId(envPublisherId)
        ? envPublisherId
        : "ca-pub-1328083083403070",

    // Enable/Disable ads globally
    enabled: true,

    // Ad Units by Placement
    adUnits: {
        // Homepage
        homeHero: process.env.NEXT_PUBLIC_ADSENSE_HOME_HERO_SLOT || "",
        homeFooter: process.env.NEXT_PUBLIC_ADSENSE_HOME_FOOTER_SLOT || "",

        // Tool Pages
        toolTopBanner: process.env.NEXT_PUBLIC_ADSENSE_TOOL_TOP_SLOT || "",
        toolSidebar: process.env.NEXT_PUBLIC_ADSENSE_TOOL_SIDEBAR_SLOT || "",
        toolInContent: process.env.NEXT_PUBLIC_ADSENSE_TOOL_CONTENT_SLOT || "",
        toolBottomBox: process.env.NEXT_PUBLIC_ADSENSE_TOOL_BOTTOM_SLOT || "",

        // Blog
        blogSidebar: process.env.NEXT_PUBLIC_ADSENSE_BLOG_SIDEBAR_SLOT || "",
        blogInContent: process.env.NEXT_PUBLIC_ADSENSE_BLOG_CONTENT_SLOT || "",
        blogBottomBox: process.env.NEXT_PUBLIC_ADSENSE_BLOG_BOTTOM_SLOT || "",

        // Mobile
        mobileAnchor: process.env.NEXT_PUBLIC_ADSENSE_MOBILE_ANCHOR_SLOT || "",
        mobileInFeed: process.env.NEXT_PUBLIC_ADSENSE_MOBILE_FEED_SLOT || "",
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
    testMode: process.env.NEXT_PUBLIC_ADSENSE_TEST_MODE === "true",

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
    if (!isValidPublisherId(adsenseConfig.publisherId)) return false;
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
        adsbygoogle: unknown[];
    }
}
