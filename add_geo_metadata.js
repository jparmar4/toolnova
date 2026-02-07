const fs = require('fs');

// Read the blog.ts file
const filePath = 'd:/Web/aimultitools/src/data/blog.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Define author mappings
const authorMappings = {
    'Sarah Mitchell': 'sarah-mitchell',
    'Marcus Chen': 'marcus-chen',
    'Dr. Emily Parker': 'emily-parker'
};

// Add authorSlug after each author field
for (const [author, slug] of Object.entries(authorMappings)) {
    const regex = new RegExp(`author: "${author}",\\s*\\n(\\s*)authorRole:`, 'g');
    content = content.replace(regex, `author: "${author}",\n$1authorSlug: "${slug}",\n$1authorRole:`);
}

// Add dateModified after each date field (if not already present)
content = content.replace(/date: "([^"]+)",\s*\n(\s*)category:/g, (match, date, indent) => {
    if (!match.includes('dateModified')) {
        return `date: "${date}",\n${indent}dateModified: "Feb 7, 2026",\n${indent}category:`;
    }
    return match;
});

// Add wordCount after readTime based on reading time
const wordCountMap = {
    '15 min read': 3200,
    '12 min read': 2500,
    '10 min read': 2000,
    '8 min read': 1600,
    '7 min read': 1400,
    '6 min read': 1200,
    '5 min read': 1000
};

for (const [readTime, wordCount] of Object.entries(wordCountMap)) {
    const regex = new RegExp(`readTime: "${readTime}",\\s*\\n(\\s*)metaDescription:`, 'g');
    content = content.replace(regex, `readTime: "${readTime}",\n$1wordCount: ${wordCount},\n$1metaDescription:`);
}

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added GEO metadata to all blog posts!');
