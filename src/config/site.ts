// Site configuration for ToolNova

export const siteConfig = {
    name: "ToolNova",
    description: "Free AI-powered tools for writing, studying, and productivity. Boost your efficiency with our suite of intelligent tools.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://toolnova.io",
    ogImage: "/og-image.png",
    links: {
        twitter: "https://twitter.com/toolnova",
        github: "https://github.com/toolnova",
    },
    keywords: [
        "AI tools",
        "writing assistant",
        "study tools",
        "productivity",
        "text summarizer",
        "paraphraser",
        "grammar checker",
        "essay writer",
        "free ai tools",
    ],
    author: {
        name: "ToolNova Team",
        email: "contact@toolnova.io",
    },
};

export type SiteConfig = typeof siteConfig;
