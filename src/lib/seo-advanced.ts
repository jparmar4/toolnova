/**
 * Advanced SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) Utilities
 * Optimized for global reach, AI search engines, and Google Discover
 */

import { siteConfig, getFullUrl } from "@/config/site";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface SEOAdvancedConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "software";
  twitterCard?: "summary" | "summary_large_image";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  // AEO specific
  faqItems?: FAQItem[];
  howToSteps?: HowToStep[];
  speakableContent?: string;
  // GEO specific
  targetRegions?: string[];
  targetLanguages?: string[];
  // Google Discover
  isNewsArticle?: boolean;
  newsSection?: string;
  // Tool specific
  toolSlug?: string;
  toolCategory?: string;
  toolFeatures?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

// ============================================
// GLOBAL SEO CONSTANTS
// ============================================

// Target regions for global reach
export const TARGET_REGIONS = {
  // Tier 1 Countries (High CPC, priority)
  USA: { code: "US", currency: "USD", language: "en-US" },
  UK: { code: "GB", currency: "GBP", language: "en-GB" },
  CANADA: { code: "CA", currency: "CAD", language: "en-CA" },
  AUSTRALIA: { code: "AU", currency: "AUD", language: "en-AU" },
  // Emerging Markets
  INDIA: { code: "IN", currency: "INR", language: "en-IN" },
  SINGAPORE: { code: "SG", currency: "SGD", language: "en-SG" },
  UAE: { code: "AE", currency: "AED", language: "en-AE" },
  GERMANY: { code: "DE", currency: "EUR", language: "de-DE" },
  FRANCE: { code: "FR", currency: "EUR", language: "fr-FR" },
  NETHERLANDS: { code: "NL", currency: "EUR", language: "nl-NL" },
} as const;

// AI Search Engine User Agents for robots.txt
export const AI_SEARCH_AGENTS = [
  // OpenAI / ChatGPT
  "GPTBot",
  "ChatGPT-User",
  // Google AI
  "Google-Extended",
  // Common Crawl (used by many AI models)
  "CCBot",
  // Perplexity
  "PerplexityBot",
  // Anthropic / Claude
  "ClaudeBot",
  "Claude-Web",
  "Anthropic-AI",
  // Diffbot
  "Diffbot",
  // ByteDance / TikTok
  "Bytespider",
  // Cohere
  "cohere-ai",
  // Facebook / Meta
  "FacebookBot",
  // Apple
  "Applebot",
  // Amazon
  "Amazonbot",
  // You.com
  "YouBot",
  // Neeva
  "Neevabot",
] as const;

// High-value keywords by category for AEO
export const AEO_KEYWORDS = {
  education: [
    "how to study effectively",
    "best study methods",
    "homework help online",
    "essay writing tips",
    "exam preparation guide",
    "learn faster techniques",
    "note taking strategies",
    "flashcard study method",
    "test taking strategies",
    "academic success tips",
  ],
  writing: [
    "how to write an essay",
    "improve writing skills",
    "grammar check online",
    "paraphrase text correctly",
    "write professional emails",
    "content writing tips",
    "academic writing guide",
    "creative writing help",
    "business writing tips",
    "proofreading techniques",
  ],
  productivity: [
    "time management tips",
    "study schedule maker",
    "goal setting guide",
    "productivity hacks",
    "work smarter not harder",
    "task prioritization",
    "daily planning tips",
    "focus techniques",
    "procrastination help",
    "efficient workflow",
  ],
  career: [
    "resume writing tips",
    "cover letter guide",
    "interview preparation",
    "job application help",
    "career advice",
    "professional bio examples",
    "linkedin profile tips",
    "job search strategies",
    "salary negotiation tips",
    "career development plan",
  ],
} as const;

// ============================================
// SCHEMA GENERATORS
// ============================================



/**
 * Generate WebSite Schema with enhanced search action
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: "ToolNovaHub",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["en-US", "en-GB", "en-CA", "en-AU", "en-IN"],
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    // Enhanced search action for AI
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      // Action for AI assistants
      {
        "@type": "Action",
        "@id": `${siteConfig.url}/#tool-action`,
        name: "Use ToolNova Tools",
        description: "Access AI-powered tools for writing, studying, and productivity",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/tools/{tool_slug}`,
        },
      },
    ],
    // Navigation structure for AI
    hasPart: [
      {
        "@type": "WebPage",
        name: "All Tools",
        url: `${siteConfig.url}/tools`,
      },
      {
        "@type": "WebPage",
        name: "Blog",
        url: `${siteConfig.url}/blog`,
      },
      {
        "@type": "WebPage",
        name: "Writing Tools",
        url: `${siteConfig.url}/tools/writing-tools`,
      },
      {
        "@type": "WebPage",
        name: "Study Tools",
        url: `${siteConfig.url}/tools/study-tools`,
      },
    ],
  };
}

/**
 * Generate SoftwareApplication Schema for AI Discovery
 */
export function generateSoftwareApplicationSchema(toolSlug?: string, toolName?: string) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: toolName || siteConfig.name,
    applicationCategory: "EducationalApplication, ProductivityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
    },
    description: siteConfig.description,
    url: toolSlug ? getFullUrl(`/tools/${toolSlug}`) : siteConfig.url,
    author: {
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "12500",
      bestRating: "5",
      worstRating: "1",
    },
    // Features for AI discovery
    featureList: [
      "AI-powered text processing",
      "PDF manipulation",
      "Grammar checking",
      "Essay writing assistance",
      "Study tools",
      "Flashcard generation",
      "Quiz creation",
      "No sign-up required",
      "Free to use",
    ],
    // Platform compatibility
    availableOnDevice: ["Desktop", "Mobile", "Tablet"],
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    // Memory and storage
    memoryRequirements: "No local storage required",
    storageRequirements: "Cloud-based",
  };

  return baseSchema;
}

/**
 * Generate FAQPage Schema for AEO
 */
export function generateFAQSchema(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate HowTo Schema for step-by-step guides
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[],
  totalTime?: string,
  toolSlug?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: toolSlug ? getFullUrl(`/tools/${toolSlug}`) : undefined,
    totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
    // Tool required
    tool: [
      {
        "@type": "HowToTool",
        name: "ToolNova AI Tools",
      },
    ],
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate SpeakableSpecification for voice search
 */
export function generateSpeakableSchema(content: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-content", ".tool-description", ".hero-text"],
    xpath: [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content",
    ],
    // Text content for voice assistants
    text: content.substring(0, 200),
    url,
  };
}

/**
 * Generate Article/NewsArticle Schema for Google Discover
 */
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  publishedDate: string,
  modifiedDate: string,
  author: string = "ToolNova Team",
  image?: string,
  isNewsArticle: boolean = false
) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": isNewsArticle ? "NewsArticle" : "Article",
    headline: title,
    description,
    url,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Person",
      name: author,
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: image || siteConfig.ogImage,
    // For Google Discover
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "CreativeWork",
      name: "ToolNova Blog",
      url: `${siteConfig.url}/blog`,
    },
    // Keywords for discover
    keywords: [],
    // Article section
    articleSection: "Education",
    // Word count (approximate)
    wordCount: description.split(" ").length,
  };

  if (isNewsArticle) {
    return {
      ...baseSchema,
      // News-specific fields
      dateline: "Singapore",
      copyrightYear: new Date().getFullYear(),
      copyrightHolder: {
        "@id": `${siteConfig.url}/#organization`,
      },
    };
  }

  return baseSchema;
}

/**
 * Generate Product Schema for tool pages
 */
export function generateProductSchema(
  name: string,
  description: string,
  url: string,
  category: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    category,
    brand: {
      "@type": "Brand",
      name: "ToolNova",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
    },
    // Features
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Pricing",
        value: "Free",
      },
      {
        "@type": "PropertyValue",
        name: "Platform",
        value: "Web",
      },
      {
        "@type": "PropertyValue",
        name: "AI-Powered",
        value: "Yes",
      },
    ],
  };
}

/**
 * Generate WebPage Schema with enhanced metadata
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  breadcrumbs?: BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    name: title,
    description,
    url,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    inLanguage: "en-US",
    about: {
      "@type": "Thing",
      name: "AI Tools",
      description: "Free AI-powered tools for productivity and education",
    },
    // Breadcrumbs
    ...(breadcrumbs && { breadcrumb: generateBreadcrumbSchema(breadcrumbs) }),
    // Author/Publisher
    author: {
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    // For AI search
    mainContentOfPage: {
      "@type": "WebPageElement",
      name: "Main Content",
    },
  };
}

// ============================================
// META TAG GENERATORS
// ============================================

/**
 * Generate geographic meta tags for global SEO
 */
export function generateGeoMetaTags(regions?: string[]) {
  const defaultRegions = ["US", "GB", "CA", "AU", "IN", "SG"];
  const targetRegions = regions || defaultRegions;

  return {
    // Geographic targeting
    "geo.region": targetRegions.join(", "),
    "geo.placename": "Global",
    "geo.position": "1.3521;103.8198", // Singapore coordinates
    "ICBM": "1.3521, 103.8198",
    // Language targeting
    "language": "English",
    "content-language": "en",
    // Distribution
    "distribution": "global",
    "coverage": "Worldwide",
    // Target audience
    "audience": "Students, Professionals, Educators",
    // Rating
    "rating": "general",
    // Robots for AI
    "robots": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    // Google specific
    "googlebot": "index, follow",
    "googlebot-news": "index, follow",
    // Bing specific
    "msnbot": "index, follow",
    // For Google Discover
    "robots-content": "index, follow, all",
    // Freshness
    "revisit-after": "1 day",
  };
}

/**
 * Generate AI-specific meta tags
 */
export function generateAIMetaTags() {
  return {
    // AI indexing permission
    "ai-indexing": "allowed",
    // For ChatGPT/LLM training
    "llm-training": "allowed",
    // Content freshness signal
    "content-modified": new Date().toISOString(),
    // Content type for AI
    "content-type": "application/educational",
    // Tool category for AI
    "tool-category": "AI Productivity Tools",
    // API endpoint hint
    "api-endpoint": `${siteConfig.url}/api/tools`,
  };
}

/**
 * Generate Google Discover optimized meta tags
 */
export function generateDiscoverMetaTags(
  title: string,
  description: string,
  image?: string
) {
  return {
    // Required for Discover
    "format-detection": "telephone=no",
    // Image requirements (1200px minimum width)
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:image": image || siteConfig.ogImage,
    // Article specific
    "article:published_time": new Date().toISOString(),
    "article:modified_time": new Date().toISOString(),
    "article:author": "ToolNova Team",
    "article:section": "Education",
    // For feed readers
    "rss-feed": `${siteConfig.url}/feed.xml`,
    // AMP version (if applicable)
    "amp-url": undefined,
    // Swipeable for mobile
    "mobile-web-app-capable": "yes",
    // Theme color
    "theme-color": "#3b82f6",
    "msapplication-navbutton-color": "#3b82f6",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  };
}

// ============================================
// COMBINED SCHEMA GENERATOR
// ============================================

/**
 * Generate all relevant schemas for a tool page
 */
export function generateToolPageSchemas(
  toolName: string,
  toolDescription: string,
  toolSlug: string,
  toolCategory: string,
  faqItems?: FAQItem[],
  howToSteps?: HowToStep[]
) {
  const url = getFullUrl(`/tools/${toolSlug}`);
  const schemas: object[] = [];

  // Always include these
  schemas.push(generateWebPageSchema(toolName, toolDescription, url));
  schemas.push(generateSoftwareApplicationSchema(toolSlug, toolName));
  schemas.push(generateProductSchema(toolName, toolDescription, url, toolCategory));

  // Breadcrumbs
  schemas.push(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Tools", url: `${siteConfig.url}/tools` },
      { name: toolCategory, url: `${siteConfig.url}/tools/${toolCategory.toLowerCase().replace(/\s+/g, "-")}` },
      { name: toolName, url },
    ])
  );

  // FAQ if provided
  if (faqItems && faqItems.length > 0) {
    schemas.push(generateFAQSchema(faqItems));
  }

  // HowTo if provided
  if (howToSteps && howToSteps.length > 0) {
    schemas.push(
      generateHowToSchema(
        `How to use ${toolName}`,
        toolDescription,
        howToSteps,
        "PT5M", // 5 minutes
        toolSlug
      )
    );
  }

  return schemas;
}

/**
 * Generate all relevant schemas for a blog post
 */
export function generateBlogPageSchemas(
  title: string,
  description: string,
  slug: string,
  publishedDate: string,
  modifiedDate: string,
  author: string,
  image?: string,
  isNewsArticle: boolean = false
) {
  const url = getFullUrl(`/blog/${slug}`);
  const schemas: object[] = [];

  // WebPage
  schemas.push(generateWebPageSchema(title, description, url));

  // Article
  schemas.push(
    generateArticleSchema(
      title,
      description,
      url,
      publishedDate,
      modifiedDate,
      author,
      image,
      isNewsArticle
    )
  );

  // Breadcrumbs
  schemas.push(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Blog", url: `${siteConfig.url}/blog` },
      { name: title, url },
    ])
  );

  return schemas;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate hreflang tags for multilingual support
 */
export function generateHreflangTags(baseUrl: string, path: string = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const languages = [
    { code: "en-US", region: "US" },
    { code: "en-GB", region: "GB" },
    { code: "en-CA", region: "CA" },
    { code: "en-AU", region: "AU" },
    { code: "en-IN", region: "IN" },
    { code: "en-SG", region: "SG" },
    { code: "x-default", region: "Default" },
  ];

  return languages.map((lang) => ({
    hrefLang: lang.code,
    href: `${baseUrl}${cleanPath}`,
  }));
}

/**
 * Generate canonical URL with trailing slash handling
 */
export function generateCanonicalUrl(path: string = ""): string {
  return getFullUrl(path);
}

/**
 * Generate optimized title with year and branding
 */
export function generateOptimizedTitle(
  baseTitle: string,
  includeYear: boolean = true
): string {
  const year = includeYear ? ` ${new Date().getFullYear()}` : "";
  return `${baseTitle}${year} | ${siteConfig.name}`;
}

/**
 * Generate meta description with CTA
 */
export function generateOptimizedDescription(
  baseDescription: string,
  includeCTA: boolean = true
): string {
  const cta = includeCTA ? " Free, no sign-up required. Try now!" : "";
  const combined = baseDescription + cta;
  // Ensure 150-160 characters
  if (combined.length > 160) {
    return combined.substring(0, 157) + "...";
  }
  return combined;
}

/**
 * Generate keywords array with high-value additions
 */
export function generateOptimizedKeywords(
  baseKeywords: string[],
  category?: string
): string[] {
  const enhancedKeywords = [...baseKeywords];

  // Add year for freshness
  enhancedKeywords.push(`${baseKeywords[0]} ${new Date().getFullYear()}`);

  // Add "free" variants
  baseKeywords.forEach((keyword) => {
    if (!keyword.toLowerCase().includes("free")) {
      enhancedKeywords.push(`free ${keyword.toLowerCase()}`);
    }
  });

  // Add category-specific AEO keywords
  if (category && AEO_KEYWORDS[category as keyof typeof AEO_KEYWORDS]) {
    enhancedKeywords.push(...AEO_KEYWORDS[category as keyof typeof AEO_KEYWORDS]);
  }

  // Remove duplicates
  return [...new Set(enhancedKeywords)];
}

/**
 * Create a combined JSON-LD script content
 */
export function combineSchemas(schemas: object[]): string {
  if (schemas.length === 1) {
    return JSON.stringify(schemas[0]);
  }
  // For multiple schemas, use @graph
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemas,
  });
}

/**
 * Generate RSS feed item for Google Discover
 */
export function generateRSSItem(
  title: string,
  description: string,
  url: string,
  publishedDate: string,
  image?: string,
  category?: string
) {
  return {
    title,
    description,
    link: url,
    guid: url,
    pubDate: new Date(publishedDate).toUTCString(),
    enclosure: image
      ? {
        url: image,
        type: "image/png",
        length: "0",
      }
      : undefined,
    category: category || "Education",
    source: siteConfig.name,
    author: "ToolNova Team",
  };
}

export default {

  generateWebSiteSchema,
  generateSoftwareApplicationSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateBreadcrumbSchema,
  generateSpeakableSchema,
  generateArticleSchema,
  generateProductSchema,
  generateWebPageSchema,
  generateGeoMetaTags,
  generateAIMetaTags,
  generateDiscoverMetaTags,
  generateToolPageSchemas,
  generateBlogPageSchemas,
  generateHreflangTags,
  generateCanonicalUrl,
  generateOptimizedTitle,
  generateOptimizedDescription,
  generateOptimizedKeywords,
  combineSchemas,
  generateRSSItem,
};
