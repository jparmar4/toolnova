import { NextResponse } from "next/server";
import { optimizedToolMetadata } from "@/lib/tool-metadata";
import { siteConfig } from "@/config/site";

export async function GET() {
    const tools = Object.values(optimizedToolMetadata).map((tool) => ({
        slug: tool.slug,
        name: tool.name,
        description: tool.description,
        url: `${siteConfig.url}/tools/${tool.slug}`,
        keywords: tool.keywords,
    }));

    return NextResponse.json({
        tools,
        meta: {
            total: tools.length,
            generated_at: new Date().toISOString(),
        },
    });
}
