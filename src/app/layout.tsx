import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Geist_Mono } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";
import "./accessibility.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { SkipLinks } from "@/components/SkipLinks";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";
import {
  generateWebSiteSchema,
  generateSoftwareApplicationSchema,
  generateGeoMetaTags,
  generateAIMetaTags,
  generateDiscoverMetaTags,
} from "@/lib/seo-advanced";
import {
  generateEnhancedOrganizationSchema,
  generateEnhancedWebSiteSchema,
  generateEntityData,
  generateServiceSchema,
  generateDatasetSchema,
  generateKnowledgeGraphSchema,
  generateAllToolsItemListSchema,
} from "@/lib/seo-worldclass";

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
    default: "Free AI Tools for Students 2026 - 50+ Tools | ToolNova",
    template: "%s | ToolNova",
  },
  description:
    "Access 50+ free AI-powered tools for students and professionals. Merge PDFs, create flashcards, fix grammar, write essays, solve homework. No sign-up required. Try now!",
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
    title: "Free AI Tools for Students 2026 - 50+ Tools | ToolNova",
    description:
      "Access 50+ free AI-powered tools for students and professionals. Merge PDFs, create flashcards, fix grammar, write essays, solve homework. No sign-up required. Try now!",
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
    title: "Free AI Tools for Students 2026 - 50+ Tools | ToolNova",
    description:
      "Access 50+ free AI-powered tools for students and professionals. Merge PDFs, create flashcards, fix grammar, write essays, solve homework. No sign-up required!",
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
  // Additional metadata
  other: {
    "revisit-after": "3 days",
    language: "en",
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
        {/* RSS Feed autodiscovery for feed readers and search engines */}
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

        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Material Symbols Outlined - loaded via Client Component to prevent Server Component errors */}
        <MaterialSymbols />



        {/* Enhanced WebSite Schema with Search Action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />

        {/* SoftwareApplication Schema for AI Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSoftwareApplicationSchema()),
          }}
        />

        {/* World-Class SEO: Enhanced Organization Schema for AI Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateEnhancedOrganizationSchema()),
          }}
        />

        {/* World-Class SEO: Enhanced Website Schema for AI Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateEnhancedWebSiteSchema()),
          }}
        />

        {/* World-Class SEO: Entity Data for Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateEntityData()),
          }}
        />

        {/* World-Class SEO: Service Schema for AI Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema()),
          }}
        />

        {/* World-Class SEO: Dataset Schema for AI Training Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateDatasetSchema()),
          }}
        />

        {/* World-Class SEO: Knowledge Graph Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateKnowledgeGraphSchema()),
          }}
        />

        {/* World-Class SEO: All Tools ItemList for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateAllToolsItemListSchema()),
          }}
        />

        {/* Speakable Specification for Voice Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SpeakableSpecification",
              cssSelector: [".hero-text", ".tool-description", ".speakable-content"],
              xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
            }),
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1328083083403070"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-display antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-58TZZZDYJ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-58TZZZDYJ7');
          `}
        </Script>


      </body>
    </html>
  );
}
