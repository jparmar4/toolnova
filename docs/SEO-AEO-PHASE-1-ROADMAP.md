# ToolNovaHub SEO/AEO Phase 1 Roadmap (Approved & Started)

Date: 2026-02-27
Site: https://www.toolnovahub.com
Project path: D:\Web\aimultitools

## Guardrails
- No deletions without explicit owner confirmation.
- All ranking-impacting code changes are reversible and tracked.

## Phase 1 Objectives
1. Fix crawl/indexing blockers.
2. Remove broken discovery signals.
3. Establish a measurable baseline for search and AI visibility.
4. Prepare the next implementation batch for topical authority gains.

## Phase 1 Changes Applied

### 1) robots.txt cleanup (completed)
- Removed disallow rule for `/_next/` to avoid accidental crawler rendering/indexing degradation.
- Removed broken sitemap reference:
  - `https://www.toolnovahub.com/sitemap-videos.xml` (currently 404)

### 2) High-priority technical notes (identified)
- Current metadata strategy appears over-broad in some places (keyword over-expansion risk).
- AI-search readiness exists (llms.txt + schema), but needs cleaner intent clustering and authoritative landing pages.

## Next Actions (Phase 2 candidates)

### A. Search Console + Bing Webmaster baseline
- Verify both property types (domain + URL prefix if needed).
- Submit only valid sitemaps:
  - `/sitemap.xml`
  - `/sitemap-news.xml` (only if actually valid/current)
  - `/sitemap-images.xml`
- Record index coverage, crawl stats, and top queries baseline.

### B. Information architecture for ranking lift
- Build/upgrade high-intent pillar pages:
  - AI Writing Tools
  - PDF Tools
  - Study Tools
  - Career Tools
- Add internal linking blocks from homepage + blog to top money pages.

### C. Content and programmatic SEO quality
- Prioritize 20 pages by opportunity (volume × ranking gap × conversion intent).
- Add unique use-cases, FAQs, examples, and comparison snippets per tool page.
- Strengthen E-E-A-T signals (about, trust, author/editor transparency where relevant).

### D. AI search (AEO/GEO) optimization
- Keep structured data valid and minimal-noise.
- Expand llms.txt with clearer sectioning and canonical references.
- Add answer-ready short sections ("What is", "How to", "Best for", "When not to use").

### E. Measurement
- Weekly KPI tracker:
  - Indexed pages
  - Impressions
  - CTR
  - Avg position
  - Non-brand query growth
  - AI referral mentions/citations (where detectable)

## Success Criteria for next 30 days
- +40–80% impressions from non-brand queries.
- Top 30 rankings for at least 15 priority pages.
- Improved crawl consistency and zero broken sitemap declarations.

---
Owner note: No files/pages were deleted during this phase.
