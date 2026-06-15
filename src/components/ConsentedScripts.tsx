"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

/**
 * Loads Google Analytics only after cookie consent is given.
 * AdSense is loaded unconditionally in layout.tsx for bot detection.
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
      {/* Google Analytics - only after consent */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${siteConfig.googleAnalyticsId}', {
                        anonymize_ip: true
                    });
                `}
      </Script>
    </>
  );
}
