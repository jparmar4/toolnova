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
    // Primary Keywords (High CPC)
    "AI business tools",
    "free AI content generator",
    "ToolNova hub",
    "premium productivity tools",
    "AI study assistant",
    // Secondary Keywords
    "PDF merger high quality",
    "image compressor 4k",
    "text summarizer pro",
    "grammar checker business",
    "paraphrasing tool academic",
    "flashcard maker ai",
    "quiz generator pro",
    // Long-tail Keywords
    "best free AI tools for business",
    "online pdf editor secure",
    "AI-powered workflow automation",
    "professional essay writer",
    "AI tools hub 2026",
    // Tier 1 Country Keywords
    "Enterprise AI automation software",
    "AI customer service solutions",
    "Predictive analytics tools",
    "Automated financial forecasting",
    "Machine learning platforms healthcare",
    "business tools USA",
    "AI productivity UK",
    "free tools hub Canada",
    "AI solutions Australia",
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
        alt: "ToolNova - Premium AI Tools Hub",
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
      "msvalidate.01": "0FEE172B08E59C4D96EC21C37F806047",
    },
    // Add these after setting up
    // google: 'your-google-site-verification',
    // yandex: 'your-yandex-verification',
  },
  alternates: {
    canonical: "https://www.toolnovahub.com",
  },
  category: "Productivity",
};

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

        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Material Symbols Outlined - loaded asynchronously to prevent render blocking */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-ignore - onLoad changes media to 'all' after load
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
        </noscript>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ToolNova",
              url: "https://www.toolnovahub.com",
              logo: "https://www.toolnovahub.com/logo.png",
              description:
                "The ultimate hub for premium AI tools. Edit PDFs, optimize images, and boost productivity with ToolNova's advanced suite.",
              sameAs: [
                "https://twitter.com/toolnovahub",
                "https://github.com/toolnovahub",
                "https://linkedin.com/company/toolnovahub",
              ],
            }),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ToolNova",
              url: "https://www.toolnovahub.com",
              description:
                "The ultimate hub for premium AI tools. Edit PDFs, optimize images, and boost productivity with ToolNova's advanced suite.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.toolnovahub.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
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
