/* eslint-disable @next/next/google-font-preconnect */
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { ConsentedScripts } from "@/components/ConsentedScripts";
import Script from "next/script";
import "./globals.css";
import "./accessibility.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { SkipLinks } from "@/components/SkipLinks";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { VitalsInitializer } from "@/components/VitalsInitializer";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toolnovahub.com"),
  title: {
    default: "Free AI Tools for Students 2026 - 46+ Tools | ToolNova",
    template: "%s | ToolNova",
  },
  description:
    "Access 46+ free AI-powered tools for students and professionals. Merge PDFs, create flashcards, fix grammar, write essays, solve homework. No sign-up required. Try now!",
  keywords: [
    "free AI tools",
    "AI tools for students",
    "AI writing tools",
    "study tools",
    "PDF tools",
    "homework solver",
    "flashcard maker",
    "grammar checker",
    "paraphrasing tool",
    "essay writer",
    "image to PDF",
    "merge PDF",
    "resume tools",
    "productivity tools",
    "ToolNova",
  ],
  authors: [{ name: "ToolNova Team", url: "https://www.toolnovahub.com" }],
  creator: "ToolNova",
  publisher: "ToolNova",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.toolnovahub.com",
    siteName: "ToolNova",
    title: "Free AI Tools for Students 2026 - 46+ Tools | ToolNova",
    description:
      "Access 46+ free AI-powered tools for students and professionals. Merge PDFs, create flashcards, fix grammar, write essays, solve homework. No sign-up required. Try now!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToolNova - Free AI Tools Hub",
        type: "image/png",
      },
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "ToolNova Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Tools for Students 2026 - 46+ Tools | ToolNova",
    description:
      "Access 46+ free AI-powered tools for students and professionals. Merge PDFs, create flashcards, fix grammar, write essays, solve homework. No sign-up required!",
    images: ["/og-image.png"],
    creator: "@toolnovahub",
    site: "@toolnovahub",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": siteConfig.verification.bing,
      "yandex-verification": siteConfig.verification.yandex,
    },
    google: siteConfig.verification.google,
  },
  alternates: {
    canonical: "https://www.toolnovahub.com",
    languages: {
      "en-US": "https://www.toolnovahub.com",
      "en-GB": "https://www.toolnovahub.com",
      "en-CA": "https://www.toolnovahub.com",
      "en-AU": "https://www.toolnovahub.com",
      "en-IN": "https://www.toolnovahub.com",
      "en-SG": "https://www.toolnovahub.com",
      "x-default": "https://www.toolnovahub.com",
    },
  },
  category: "Productivity",
  other: {
    "revisit-after": "1 day",
    language: "English",
    "content-language": "en",
    distribution: "global",
    coverage: "Worldwide",
    audience: "Students, Professionals, Educators",
    rating: "general",
    "geo.region": "US, GB, CA, AU, IN, SG, AE, DE, FR, NL",
    "geo.placename": "Global",
    "geo.position": "1.3521;103.8198",
    "ICBM": "1.3521, 103.8198",
    "ai-indexing": "allowed",
    "llm-training": "allowed",
    "content-type": "application/educational",
    "tool-category": "AI Productivity Tools",
    "api-endpoint": "https://www.toolnovahub.com/api/tools",
    "robots-content": "index, follow, all",
    // Google Discover: theme color
    "theme-color": "#3b82f6",
    "msapplication-TileColor": "#3b82f6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    // AI citation metadata
    "citation": "ToolNova — Free AI Tools for Students and Professionals. https://www.toolnovahub.com",
    "dc.title": "ToolNova — Free AI Productivity Tools",
    "dc.description": "46+ free AI-powered tools for writing, studying, and productivity. No sign-up required.",
    "dc.publisher": "ToolNova",
    "dc.language": "en",
    "dc.type": "InteractiveResource",
    // GEO - AI search optimization
    "og:locale:alternate": "en_GB en_CA en_AU en_IN en_SG",
  },
};

import { MaterialSymbols } from "@/components/MaterialSymbols";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Consent Mode v2 Default State (Required for AdSense in EU/EEA) */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            gtag('set', 'ads_data_redaction', true);
          `}
        </Script>

        {/* Google AdSense Script */}
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1328083083403070" 
          crossOrigin="anonymous" 
          strategy="afterInteractive" 
        />

        {/* RSS Feed autodiscovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="ToolNova Blog RSS Feed"
          href="https://www.toolnovahub.com/feed.xml"
        />

        {/* DNS Prefetch for faster domain resolution */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://supabase.co" />

        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme Color — required for Google Discover & PWA */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />

        {/* Preload critical OG image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/og-image.png"
          fetchPriority="low"
        />

        {/* Material Symbols Outlined */}
        <MaterialSymbols />

        {/* NOTE: Page-level JSON-LD schemas are injected by each page component.
            No global schema here to avoid duplicate JSON-LD across all pages. */}
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-display antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VitalsInitializer />
          <SkipLinks />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <FeedbackWidget />
        </ThemeProvider>
        <CookieConsent />
        {/* GA & AdSense loaded only after cookie consent */}
        <ConsentedScripts />
      </body>
    </html>
  );
}