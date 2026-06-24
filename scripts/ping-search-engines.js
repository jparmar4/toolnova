const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.toolnovahub.com';
const INDEXNOW_KEY = "fdcca368392a42d9916dcffd147d6ebf";
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

// Extract slugs robustly without needing TS compilation
function extractSlugs(filePath, prefix) {
    try {
        const fullPath = path.resolve(__dirname, '..', filePath);
        if (!fs.existsSync(fullPath)) return [];

        const content = fs.readFileSync(fullPath, 'utf8');
        const matches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
        return matches.map(m => `${SITE_URL}/${prefix}/${m[1]}`);
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e);
        return [];
    }
}

const toolUrls = extractSlugs('src/data/tools.ts', 'tools');
const blogUrls = extractSlugs('src/data/blog.ts', 'blog');
const categoryUrls = [
    "writing-tools", "study-tools", "exam-prep-tools",
    "image-pdf-tools", "utility-tools", "career-tools"
].map(c => `${SITE_URL}/tools/${c}`);

const urlList = [
    SITE_URL,
    `${SITE_URL}/tools`,
    `${SITE_URL}/blog`,
    `${SITE_URL}/about`,
    ...categoryUrls,
    ...toolUrls,
    ...blogUrls
];

const startTime = Date.now();
console.log(`\n🔍 URL Breakdown: ${toolUrls.length} tools, ${blogUrls.length} blogs, ${categoryUrls.length} categories, 4 static pages`);
console.log(`🚀 Submitting ${urlList.length} total URLs to IndexNow protocol...\n`);

const payload = JSON.stringify({
    host: "www.toolnovahub.com",
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urlList
});

const ENGINES = [
    {
        name: 'IndexNow.org',
        options: {
            hostname: 'api.indexnow.org',
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        }
    },
    {
        name: 'Bing',
        options: {
            hostname: 'www.bing.com',
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        }
    },
    {
        name: 'Yandex',
        options: {
            hostname: 'yandex.com',
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        }
    },
    {
        name: 'Naver',
        options: {
            hostname: 'searchadvisor.naver.com',
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        }
    }
];

let completed = 0;
let errors = 0;

ENGINES.forEach(engine => {
    const req = https.request(engine.options, (res) => {
        if (res.statusCode === 200 || res.statusCode === 202) {
            console.log(`✅ Successfully submitted to ${engine.name} (Status: ${res.statusCode})`);
        } else {
            console.error(`❌ Failed to submit to ${engine.name}. Status: ${res.statusCode}`);
            errors++;
        }

        completed++;
        checkDone();
    });

    req.on('error', (e) => {
        console.error(`❌ Error submitting to ${engine.name}: ${e.message}`);
        errors++;
        completed++;
        checkDone();
    });

    req.write(payload);
    req.end();
});

function pingGoogle() {
    const googleUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITE_URL + '/sitemap.xml')}`;
    console.log(`📡 Pinging Google sitemap...`);

    https.get(googleUrl, (res) => {
        if (res.statusCode === 200) {
            console.log(`✅ Successfully pinged Google sitemap (Status: ${res.statusCode})`);
        } else {
            console.error(`❌ Failed to ping Google sitemap. Status: ${res.statusCode}`);
            errors++;
        }
        logSummary();
    }).on('error', (e) => {
        console.error(`❌ Error pinging Google sitemap: ${e.message}`);
        errors++;
        logSummary();
    });
}

function logSummary() {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n📊 Summary: ${ENGINES.length + 1} engines pinged, ${completed - errors} IndexNow success, ${errors} errors`);
    console.log(`⏱️  Completed in ${elapsed}s`);
    process.exit(errors > 0 ? 1 : 0);
}

function checkDone() {
    if (completed === ENGINES.length) {
        console.log(`\n✅ IndexNow submissions complete. Success: ${completed - errors}, Errors: ${errors}`);
        pingGoogle();
    }
}
