import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

// Keep this synced with the file in /public/[KEY].txt
const INDEXNOW_KEY = "e8f9b90c102b4d91a7e4b5c6d7e8f9a0";
const INDEXNOW_KEY_LOCATION = `${siteConfig.url}/${INDEXNOW_KEY}.txt`;

// IndexNow endpoints
const ENDPOINTS = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow"
];

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Ensure URLs are provided
        if (!body.urlList || !Array.isArray(body.urlList) || body.urlList.length === 0) {
            return NextResponse.json({ error: "Missing or invalid urlList array" }, { status: 400 });
        }

        const urlList = body.urlList;
        const host = new URL(siteConfig.url).host;

        const payload = {
            host: host,
            key: INDEXNOW_KEY,
            keyLocation: INDEXNOW_KEY_LOCATION,
            urlList: urlList
        };

        const results: any[] = [];

        // Push to each endpoint concurrently
        const promises = ENDPOINTS.map(async (endpoint) => {
            try {
                const res = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                });

                results.push({
                    endpoint,
                    status: res.status,
                    ok: res.ok
                });
            } catch (error) {
                results.push({
                    endpoint,
                    error: error instanceof Error ? error.message : "Unknown error"
                });
            }
        });

        await Promise.all(promises);

        return NextResponse.json({
            success: true,
            submittedUrls: urlList.length,
            results
        });

    } catch (error) {
        console.error("Error pushing IndexNow:", error);
        return NextResponse.json({ error: "Failed to submit IndexNow request" }, { status: 500 });
    }
}
