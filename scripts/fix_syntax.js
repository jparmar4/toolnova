const fs = require('fs');
let c = fs.readFileSync('src/data/blog.ts', 'utf8');

c = c.replace('content: \\`\\n> [!IMPORTANT]', 'content: `\\n> [!IMPORTANT]');
c = c.replace('\\`,\\n        faq: [\\n            {\\n                question: "Do employers actually care', '`,\\n        faq: [\\n            {\\n                question: "Do employers actually care');

fs.writeFileSync('src/data/blog.ts', c, 'utf8');
console.log("Fixed syntax");
