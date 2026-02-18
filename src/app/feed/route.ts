import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { getAllBlogPosts } from "@/data/blog";

export async function GET() {
  const blogPosts = getAllBlogPosts();
  const currentDate = new Date().toUTCString();

  // Featured tools for Google Discover
  const featuredTools = [
    { slug: "text-summarizer", name: "Text Summarizer", description: "Summarize articles and documents instantly with AI" },
    { slug: "paraphraser", name: "Paraphrasing Tool", description: "Rewrite text while preserving meaning" },
    { slug: "grammar-fix", name: "Grammar Checker", description: "Fix grammar, spelling, and punctuation errors" },
    { slug: "homework-solver", name: "Homework Solver", description: "Solve problems with step-by-step explanations" },
    { slug: "flashcard-maker", name: "Flashcard Maker", description: "Create digital flashcards from notes" },
    { slug: "essay-writer", name: "Essay Writer", description: "Generate well-structured essays" },
    { slug: "resume-bullets", name: "Resume Builder", description: "Generate professional resume bullet points" },
    { slug: "merge-pdf", name: "Merge PDF", description: "Combine multiple PDFs into one" },
  ];

  const rssItems = [
    // Blog posts
    ...blogPosts.slice(0, 10).map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt || "")}</description>
      <pubDate>${post.date ? new Date(post.date).toUTCString() : currentDate}</pubDate>
      <author>support@toolnovahub.com (ToolNova Team)</author>
      <category>Blog</category>
    </item>`).join(""),
    // Featured tools
    ...featuredTools.map((tool) => `
    <item>
      <title>${escapeXml(tool.name)} - Free AI Tool | ToolNova</title>
      <link>${siteConfig.url}/tools/${tool.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/tools/${tool.slug}</guid>
      <description>${escapeXml(tool.description)}. Free to use, no sign-up required.</description>
      <pubDate>${currentDate}</pubDate>
      <author>support@toolnovahub.com (ToolNova Team)</author>
      <category>AI Tools</category>
    </item>`).join(""),
  ];

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>ToolNova - Free AI Tools Hub</title>
    <link>${siteConfig.url}</link>
    <atom:link href="${siteConfig.url}/feed" rel="self" type="application/rss+xml"/>
    <description>Access 50+ free AI-powered tools for students and professionals. Writing tools, study aids, PDF tools, career tools, and more. No sign-up required.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <generator>ToolNova RSS Generator</generator>
    <managingEditor>support@toolnovahub.com (ToolNova Team)</managingEditor>
    <webMaster>support@toolnovahub.com (ToolNova Team)</webMaster>
    <category>Technology</category>
    <category>Education</category>
    <category>Productivity</category>
    <image>
      <url>${siteConfig.url}/logo.png</url>
      <title>ToolNova</title>
      <link>${siteConfig.url}</link>
      <width>512</width>
      <height>512</height>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} ToolNovaHub. All rights reserved.</copyright>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
