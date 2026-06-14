'use client';

import { useEffect } from 'react';
import { adsenseConfig, shouldShowAds } from '@/config/adsense';

export interface AdUnitProps {
    slot: string;
    format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
    fullWidthResponsive?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * Reusable AdSense Ad Unit Component
 * - Automatically handles ad loading and refresh
 * - Supports responsive sizing
 * - Fallback for when ads are disabled
 */
export function AdUnit({
    slot,
    format = 'auto',
    fullWidthResponsive = true,
    className = '',
    style = {},
}: AdUnitProps) {
    const showAds = shouldShowAds();
    const validSlot = /^\d+$/.test(slot);

    useEffect(() => {
        if (!showAds || !validSlot) return;
        try {
            window.adsbygoogle = window.adsbygoogle || [];
            window.adsbygoogle.push({});
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, [showAds, validSlot]);

    if (!showAds || !validSlot) {
        return null;
    }

    return (
        <div className={`adsense-container ${className}`} style={style}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client={adsenseConfig.publisherId}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
}

/**
 * In-Article Ad Unit (Native format)
 */
export function InArticleAd({ className = '' }: { className?: string }) {
    if (!shouldShowAds()) return null;

    return (
        <div className={`my-8 ${className}`}>
            <p className="text-xs text-muted-foreground text-center mb-2">Advertisement</p>
            <AdUnit
                slot={adsenseConfig.adUnits.toolInContent}
                format="auto"
                fullWidthResponsive={true}
                className="max-w-3xl mx-auto"
            />
        </div>
    );
}

/**
 * Sidebar Ad Unit (Sticky on desktop)
 */
export function SidebarAd({ className = '' }: { className?: string }) {
    if (!shouldShowAds()) return null;

    return (
        <div className={`sticky top-20 ${className}`}>
            <p className="text-xs text-muted-foreground text-center mb-2">Advertisement</p>
            <AdUnit
                slot={adsenseConfig.adUnits.toolSidebar}
                format="vertical"
                fullWidthResponsive={false}
                style={{ minHeight: '600px', minWidth: '300px' }}
            />
        </div>
    );
}

/**
 * Top Banner Ad (Above the fold)
 */
export function TopBannerAd({ className = '' }: { className?: string }) {
    if (!shouldShowAds()) return null;

    return (
        <div className={`my-4 ${className}`}>
            <p className="text-xs text-muted-foreground text-center mb-2">Advertisement</p>
            <div className="hidden md:block">
                <AdUnit
                    slot={adsenseConfig.adUnits.toolTopBanner}
                    format="horizontal"
                    fullWidthResponsive={true}
                    style={{ minHeight: '90px' }}
                />
            </div>
            <div className="md:hidden">
                <AdUnit
                    slot={adsenseConfig.adUnits.mobileInFeed}
                    format="auto"
                    fullWidthResponsive={true}
                    style={{ minHeight: '50px' }}
                />
            </div>
        </div>
    );
}

/**
 * Bottom Box Ad (After content)
 */
export function BottomBoxAd({ className = '' }: { className?: string }) {
    if (!shouldShowAds()) return null;

    return (
        <div className={`my-8 ${className}`}>
            <p className="text-xs text-muted-foreground text-center mb-2">Advertisement</p>
            <AdUnit
                slot={adsenseConfig.adUnits.toolBottomBox}
                format="rectangle"
                fullWidthResponsive={true}
                style={{ minHeight: '250px' }}
                className="max-w-md mx-auto"
            />
        </div>
    );
}

/**
 * Multiplex Ad (Footer recommendations)
 */
export function MultiplexAd({ className = '' }: { className?: string }) {
    if (!shouldShowAds()) return null;

    return (
        <div className={`my-8 ${className}`}>
            <p className="text-xs text-muted-foreground text-center mb-3">Recommended</p>
            <AdUnit
                slot={adsenseConfig.adUnits.homeFooter}
                format="auto"
                fullWidthResponsive={true}
                style={{ minHeight: '300px' }}
            />
        </div>
    );
}

/**
 * Mobile Anchor Ad (Sticky bottom on mobile)
 */
export function MobileAnchorAd() {
    if (!shouldShowAds()) return null;

    return (
        <div className="md:hidden">
            <AdUnit
                slot={adsenseConfig.adUnits.mobileAnchor}
                format="auto"
                fullWidthResponsive={true}
            />
        </div>
    );
}
