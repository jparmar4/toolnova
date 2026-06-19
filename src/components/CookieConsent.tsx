"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "accepted");
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
            });
        }
        window.dispatchEvent(new Event("cookie-consent-changed"));
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookie_consent", "declined");
        window.dispatchEvent(new Event("cookie-consent-changed"));
        setIsVisible(false);
    };

    const dismissConsent = () => {
        localStorage.setItem("cookie_consent", "dismissed");
        window.dispatchEvent(new Event("cookie-consent-changed"));
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 animate-slide-up">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">We value your privacy</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                        By clicking "Accept All", you consent to our use of cookies.
                        <a href="/privacy" className="text-primary hover:underline ml-1">Read our Privacy Policy</a>.
                    </p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <Button variant="outline" onClick={declineCookies} className="flex-1 md:flex-none">
                        Decline
                    </Button>
                    <Button onClick={acceptCookies} className="flex-1 md:flex-none px-8">
                        Accept All
                    </Button>
                </div>
                <button
                    onClick={dismissConsent}
                    className="absolute top-4 right-4 md:hidden text-muted-foreground"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
