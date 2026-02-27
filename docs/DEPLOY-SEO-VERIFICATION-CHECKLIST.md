# Deploy + SEO Verification Checklist (ToolNova)

## 1) Pre-deploy (local)
- [ ] `public/robots.txt` does **not** contain `Disallow: /_next/`
- [ ] `public/robots.txt` does **not** contain `sitemap-videos.xml`
- [ ] Every important page has:
  - [ ] canonical URL
  - [ ] openGraph title/description/url
  - [ ] twitter card/title/description
- [ ] `src/app/sitemap.ts` builds valid URLs only

## 2) Build sanity
- [ ] `npm run build` completes without blocking errors
- [ ] No runtime 404 for sitemap endpoints referenced in robots

## 3) Post-deploy (live URL checks)
- [ ] `https://www.toolnovahub.com/robots.txt` returns 200
- [ ] `https://www.toolnovahub.com/sitemap.xml` returns 200
- [ ] `https://www.toolnovahub.com/sitemap-news.xml` returns 200 or is removed from robots/sitemaps list
- [ ] `https://www.toolnovahub.com/sitemap-images.xml` returns 200 or is removed from robots/sitemaps list
- [ ] Homepage source includes canonical + OG + Twitter tags

## 4) Search Console / Bing steps
- [ ] Submit valid sitemap(s)
- [ ] Inspect 10 priority URLs and request indexing
- [ ] Confirm no “Submitted URL not found (404)” for declared sitemaps
- [ ] Confirm no robots blocked resources for critical pages

## 5) CTR optimization loop (weekly)
- [ ] Export top queries + pages
- [ ] Find pages with high impressions + low CTR
- [ ] Rewrite title/meta for those pages
- [ ] Re-evaluate after 7 days

## 6) Rank growth KPI (weekly)
- [ ] Indexed pages
- [ ] Impressions
- [ ] Clicks
- [ ] Avg position
- [ ] CTR
- [ ] Non-brand traffic share
