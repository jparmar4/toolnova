import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllBlogPosts } from "@/data/blog";

/**
 * Image Sitemap for SEO
 * Helps search engines discover and index all images on the site
 * Includes blog post cover images for Google Discover and Google Images visibility
 */

export default function imageSitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  // Tool pages with their images
  const tools = [
    "text-summarizer", "paraphraser", "grammar-fix", "essay-writer",
    "homework-solver", "flashcard-maker", "quiz-generator", "mcq-generator",
    "notes-generator", "concept-explainer", "doubt-solver", "chapter-summary",
    "merge-pdf", "split-pdf", "image-compressor", "image-to-pdf",
    "resume-bullets", "cover-letter-writer", "interview-generator", "bio-generator",
    "word-counter", "character-counter", "case-converter", "age-calculator",
  ];

  // Generate image entries for each tool page
  const imageUrls: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Blog posts — all cover images indexed for Google Images & Discover
  const blogPosts = getAllBlogPosts();
  const blogImageUrls: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.coverImage)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.dateModified
        ? new Date(post.dateModified).toISOString()
        : post.date
          ? new Date(post.date).toISOString()
          : currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));

  // Static pages with images
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [
    ...staticPages,
    ...imageUrls,
    ...blogImageUrls,
    // Logo and brand images
    {
      url: `${baseUrl}/logo.png`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/og-image.png`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

export const dynamic = "force-dynamic";

