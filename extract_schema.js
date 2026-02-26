const fs = require('fs');
const html = fs.readFileSync('test.html', 'utf8');
const rx = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let m;
while ((m = rx.exec(html)) !== null) {
    try {
        const j = JSON.parse(m[1]);
        const str = JSON.stringify(j);
        if (str.includes('AggregateRating')) {
            console.log('--- MATCH MULTIPLE AGGREGATE RATINGS ---');
            console.log(JSON.stringify(j, null, 2));
        }
    } catch (e) { }
}
