"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { adsenseConfig, getAdsenseScriptUrl } from "@/config/adsense";
import { siteConfig } from "@/config/site";

/**
 * Loads Google Analytics and AdSense only after cookie consent is given.
 * Respects GDPR and privacy preferences.
 */
export function ConsentedScripts() {
    const [consented, setConsented] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        setConsented(consent === "accepted");
    }, []);

    useEffect(() => {
        if (!consented) {
            const handler = () => {
                const consent = localStorage.getItem("cookie_consent");
                if (consent === "accepted") setConsented(true);
            };
            window.addEventListener("cookie-consent-changed", handler);
            // Poll for consent change (fallback)
            const interval = setInterval(() => {
                const consent = localStorage.getItem("cookie_consent");
                if (consent === "accepted") {
                    setConsented(true);
                    clearInterval(interval);
                }
            }, 1000);
            return () => {
                window.removeEventListener("cookie-consent-changed", handler);
                clearInterval(interval);
            };
        }
    }, [consented]);

    if (!consented) return null;

    return (
        <>
            {/* Google AdSense */}
            <script
                async
                src={getAdsenseScriptUrl()}
                crossOrigin="anonymous"
            />
            {/* Google Analytics */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${siteConfig.googleAnalyticsId}');
                `}
            </Script>
            {adsenseConfig.autoAds.enabled ? (
                <Script id="adsense-auto-ads" strategy="afterInteractive">
                    {`
                        window.adsbygoogle = window.adsbygoogle || [];
                        try {
                          window.adsbygoogle.push({
                            google_ad_client: '${adsenseConfig.publisherId}',
                            enable_page_level_ads: true
                          });
                        } catch (error) {}
                    `}
                </Script>
            ) : null}
        </>
    );
}
