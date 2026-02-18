import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/data/blog";
import { siteConfig } from "@/config/site";

/**
 * News Sitemap for Google Discover
 * Follows Google News sitemap guidelines for maximum visibility
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
 */

export default function newsSitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  // Get all blog posts
  const blogPosts = getAllBlogPosts();

  // Filter posts from the last 2 years for news sitemap (Google News requirement)
  const twoYearsAgo = new Date();
  twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

  const recentPosts = blogPosts.filter((post) => {
    const postDate = new Date(post.date);
    return postDate >= twoYearsAgo;
  });

  // News sitemap entries
  const newsUrls: MetadataRoute.Sitemap = recentPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
    changeFrequency: "daily" as const,
    priority: 0.9,
    // News-specific metadata (handled via alternates in sitemap)
  }));

  // Also include tool pages as "news" for Discover (new tools, updates)
  const toolUrls: MetadataRoute.Sitemap = [
    // Featured/Popular tools for Discover visibility
    "homework-solver",
    "essay-writer",
    "flashcard-maker",
    "quiz-generator",
    "text-summarizer",
    "paraphraser",
    "grammar-fix",
  ].map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...newsUrls,
    ...toolUrls,
  ];
}

// Force dynamic generation
export const dynamic = "force-dynamic";
