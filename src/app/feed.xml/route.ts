import { getAllBlogPosts } from "@/data/blog";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = getAllBlogPosts();
  const baseUrl = siteConfig.url;

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.metaDescription || post.excerpt || ""}]]></description>
      <pubDate>${post.date ? new Date(post.date).toUTCString() : new Date().toUTCString()}</pubDate>
      <author>${siteConfig.author.email} (${post.author || siteConfig.author.name})</author>
      ${post.category ? `<category><![CDATA[${post.category}]]></category>` : ""}
    </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <channel>
    <title>${siteConfig.name} Blog - AI Tools Tips, Guides &amp; Tutorials</title>
    <link>${baseUrl}/blog</link>
    <description>${siteConfig.description}</description>
    <language>${siteConfig.language || "en"}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteConfig.logo}</url>
      <title>${siteConfig.name}</title>
      <link>${baseUrl}</link>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.</copyright>
    <managingEditor>${siteConfig.author.email} (${siteConfig.author.name})</managingEditor>
    <webMaster>${siteConfig.author.email} (${siteConfig.author.name})</webMaster>
    <ttl>60</ttl>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
