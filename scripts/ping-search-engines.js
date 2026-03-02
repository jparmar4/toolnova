const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.toolnovahub.com';
const INDEXNOW_KEY = "e8f9b90c102b4d91a7e4b5c6d7e8f9a0";
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

console.log(`🚀 Submitting ${urlList.length} total URLs to IndexNow protocol...`);

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

function checkDone() {
    if (completed === ENGINES.length) {
        console.log(`\nDone submitting to IndexNow. Success: ${completed - errors}, Errors: ${errors}`);
        process.exit(errors > 0 ? 1 : 0);
    }
}
