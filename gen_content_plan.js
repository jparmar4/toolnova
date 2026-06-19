// Generate ToolNova blog content plan as XLSX
const XLSX = require('xlsx');
const fs = require('fs');

// ---- Data: each row is one blog topic ----
// vol = estimated global monthly searches (range string)
// cpc = estimated AdSense CPC USD (Tier-1 weighted)
// cpm = estimated display CPM USD (Tier-1 weighted)
// diff = keyword difficulty 1-100 (lower = easier to rank)
// geo = primary target geography for best CPM
const rows = [
  // === Tier A — Tool-funnel (rank fast + convert) ===
  { tier:'A — Tool-Funnel', rank:1, title:'How to Compress a PDF to 1MB Online (Free, No Sign-up)', primaryKW:'compress pdf', vol:'5M–7M', cpc:3, cpm:4.5, diff:28, geo:'Global (US/UK/IN)', toolLink:'Image Compressor / Split PDF', intent:'Tool-use', why:'Highest-volume PDF query on the web; you can rank page-1 fast.' },
  { tier:'A — Tool-Funnel', rank:2, title:'Merge PDF Files Without Losing Quality (2026 Guide)', primaryKW:'merge pdf', vol:'5M–10M', cpc:4, cpm:5, diff:30, geo:'Global (US/IN/UK)', toolLink:'Merge PDF', intent:'Tool-use', why:'Top-3 PDF query globally; builds directly on your existing tool.' },
  { tier:'A — Tool-Funnel', rank:3, title:'Paraphrase Like a Pro: 7 Techniques to Avoid AI Detection', primaryKW:'how to paraphrase', vol:'1M–2M', cpc:6, cpm:8, diff:34, geo:'US/UK/PH/IN', toolLink:'Paraphrasing Tool', intent:'Tool-use', why:'Massive student traffic; edu RPM $5–15; recurring exam-season spikes.' },
  { tier:'A — Tool-Funnel', rank:4, title:'How to Summarize an Article in 30 Seconds with AI', primaryKW:'summarize article', vol:'500K–1M', cpc:5, cpm:7, diff:32, geo:'US/IN/UK', toolLink:'Text Summarizer', intent:'Tool-use', why:'Spikes every exam season; on-brand; links to summarizer.' },
  { tier:'A — Tool-Funnel', rank:5, title:'JPG to PNG (and Back): The Complete Image Conversion Guide', primaryKW:'jpg to png', vol:'2M–4M', cpc:2.5, cpm:3.5, diff:29, geo:'Global', toolLink:'JPG↔PNG Converters', intent:'Tool-use', why:'Evergreen utility searches; pure global volume.' },
  { tier:'A — Tool-Funnel', rank:6, title:'How to Write a Professional Email with AI (with Examples)', primaryKW:'professional email examples', vol:'300K–700K', cpc:9, cpm:11, diff:36, geo:'US/UK/CA', toolLink:'AI Email Writer', intent:'Tool-use', why:'"Email" keywords = millions/mo; B2B intent = good CPC.' },
  { tier:'A — Tool-Funnel', rank:7, title:'AI Resume Bullet Points That Get Past ATS (2026)', primaryKW:'resume bullet points', vol:'300K–600K', cpc:14, cpm:16, diff:38, geo:'US/UK/CA/AU', toolLink:'AI Resume Bullets + LinkedIn Optimizer', intent:'Tool-use', why:'Jobs/Career = high-CPC Tier-1 vertical.' },
  { tier:'A — Tool-Funnel', rank:8, title:'How to Make Flashcards from Any Text in 1 Click (AI Method)', primaryKW:'flashcard maker', vol:'200K–500K', cpc:5, cpm:7, diff:31, geo:'US/UK/IN', toolLink:'AI Flashcard Maker', intent:'Tool-use', why:'Student mass-volume; links to study tools.' },

  // === Tier B — High-CPM intent (finance / jobs / SaaS / edu) ===
  { tier:'B — High-CPM Intent', rank:9, title:'Best Remote Jobs Hiring Globally in 2026 (No Degree Needed)', primaryKW:'remote jobs', vol:'2M–4M', cpc:28, cpm:22, diff:55, geo:'US/UK/CA/AU', toolLink:'AI Resume Bullets / Cover Letter', intent:'Commercial', why:'Remote work = Tier-1 high-CPC; recurring evergreen traffic.' },
  { tier:'B — High-CPM Intent', rank:10, title:'Best AI Side Hustles to Start in 2026 (Full Breakdown)', primaryKW:'ai side hustle', vol:'200K–500K', cpc:35, cpm:26, diff:48, geo:'US/UK/CA', toolLink:'AI Writing Tools', intent:'Commercial', why:'"Make money online" = top AdSense niche (Publift #8).' },
  { tier:'B — High-CPM Intent', rank:11, title:'Best Free Website Builders 2026: Tested & Compared', primaryKW:'free website builder', vol:'500K–1M', cpc:42, cpm:30, diff:62, geo:'US/UK/CA/AU', toolLink:'—', intent:'Commercial', why:'SaaS review = high CPC; huge global volume.' },
  { tier:'B — High-CPM Intent', rank:12, title:'Best Online Coding Bootcamps 2026 (With Job Guarantee)', primaryKW:'coding bootcamp', vol:'300K–600K', cpc:65, cpm:38, diff:58, geo:'US/UK/CA', toolLink:'—', intent:'Commercial', why:'Education + SaaS; top-5 AdSense niche.' },
  { tier:'B — High-CPM Intent', rank:13, title:'Best Accounting Software for Freelancers & Solopreneurs', primaryKW:'best accounting software', vol:'400K–800K', cpc:65, cpm:40, diff:60, geo:'US/UK/CA/AU', toolLink:'—', intent:'Commercial', why:'High CPC; better framing than your old "small business" slot.' },
  { tier:'B — High-CPM Intent', rank:14, title:'How to File Taxes Online for Free (2026 Guide)', primaryKW:'file taxes online free', vol:'1M–3M', cpc:45, cpm:32, diff:52, geo:'US (primary)', toolLink:'PDF tools', intent:'Commercial', why:'Finance/Tax = top-3 CPC vertical globally.' },
  { tier:'B — High-CPM Intent', rank:15, title:'Best Online Degrees That Actually Pay (2026 ROI Ranking)', primaryKW:'best online degrees', vol:'200K–500K', cpc:95, cpm:50, diff:54, geo:'US/UK/CA', toolLink:'—', intent:'Commercial', why:'Education lead-gen; very high CPC.' },
  { tier:'B — High-CPM Intent', rank:16, title:'Best Business Credit Cards for Startups 2026', primaryKW:'best business credit card', vol:'300K–600K', cpc:58, cpm:34, diff:57, geo:'US/UK/CA', toolLink:'—', intent:'Commercial', why:'Finance vertical; evergreen high CPC.' },
  { tier:'B — High-CPM Intent', rank:17, title:'Cheap Car Insurance for New Drivers (2026 Comparison)', primaryKW:'cheap car insurance', vol:'1M–2M', cpc:72, cpm:42, diff:60, geo:'US/UK/CA/AU', toolLink:'—', intent:'Commercial', why:'Insurance = #1 AdSense niche (Publift/EastonDev).' },
  { tier:'B — High-CPM Intent', rank:18, title:'Best Personal Finance Apps 2026 (Reviewed)', primaryKW:'best finance apps', vol:'500K–1M', cpc:45, cpm:30, diff:50, geo:'US/UK/CA/AU', toolLink:'—', intent:'Commercial', why:'From your unpublished list — keep it, high value.' },

  // === Tier C — Mass-volume trending (AI lists) ===
  { tier:'C — Mass-Volume AI', rank:19, title:'Best Free AI Image Generators in 2026 (Tested)', primaryKW:'ai image generator free', vol:'2M–5M', cpc:18, cpm:14, diff:45, geo:'US/UK/IN/PH', toolLink:'Image tools', intent:'Comparison', why:'Massive volume; AI RPM rising fast in 2026.' },
  { tier:'C — Mass-Volume AI', rank:20, title:'100+ Best AI Tools Everyone Should Use in 2026', primaryKW:'best ai tools', vol:'2M–4M', cpc:12, cpm:10, diff:50, geo:'Global', toolLink:'All AI tools hub', intent:'Comparison', why:'Mega top-of-funnel; AI niche RPM climbing.' },
  { tier:'C — Mass-Volume AI', rank:21, title:'Best Free AI Tools for Students 2026 (Save 20 Hrs/Week)', primaryKW:'free ai tools for students', vol:'500K–1M', cpc:9, cpm:8, diff:40, geo:'US/IN/UK/PH', toolLink:'Study Tools cluster', intent:'Comparison', why:'Directly on-brand + high student volume.' },
  { tier:'C — Mass-Volume AI', rank:22, title:'ChatGPT vs Claude vs Gemini vs Copilot (2026 Showdown)', primaryKW:'chatgpt vs claude', vol:'500K–1M', cpc:8, cpm:9, diff:42, geo:'US/UK/IN', toolLink:'—', intent:'Comparison', why:'Extend your existing ChatGPT-vs to 4-way for freshness.' },
  { tier:'C — Mass-Volume AI', rank:23, title:'Best AI Writing Tools 2026 (Free & Paid)', primaryKW:'ai writing tools', vol:'500K–1M', cpc:11, cpm:10, diff:44, geo:'US/UK/IN', toolLink:'8 Writing Tools', intent:'Comparison', why:'On-brand; links to your writing tools.' },
  { tier:'C — Mass-Volume AI', rank:24, title:'How to Use AI for Content Creation (2026 Playbook)', primaryKW:'ai content creation', vol:'300K–700K', cpc:14, cpm:12, diff:43, geo:'US/UK/CA', toolLink:'AI Caption / Story / Email writers', intent:'Informational', why:'From your unpublished list — keep it.' },
  { tier:'C — Mass-Volume AI', rank:25, title:'Best Free AI Tools for Teachers in 2026', primaryKW:'ai tools for teachers', vol:'150K–400K', cpc:9, cpm:8, diff:38, geo:'US/UK/CA/AU', toolLink:'Quiz/MCQ/Notes generators', intent:'Comparison', why:'Untapped angle; edu + AI intersection.' },
  { tier:'C — Mass-Volume AI', rank:26, title:'Best AI Tools for Small Business (2026 — Free & Affordable)', primaryKW:'ai tools for small business', vol:'300K–700K', cpc:45, cpm:30, diff:47, geo:'US/UK/CA/AU', toolLink:'—', intent:'Commercial', why:'Replaces generic AI-automation with strong buying intent.' },
  { tier:'C — Mass-Volume AI', rank:27, title:'Best Productivity Apps & Tools for 2026', primaryKW:'best productivity apps', vol:'500K–1M', cpc:16, cpm:14, diff:48, geo:'US/UK/CA/AU', toolLink:'To-Do List / Goal Planner', intent:'Comparison', why:'Bridges to your utility/career tools; SaaS CPC.' },
  { tier:'C — Mass-Volume AI', rank:28, title:'Best AI Detectors in 2026: Do They Actually Work?', primaryKW:'ai detector', vol:'1M–2M', cpc:9, cpm:9, diff:46, geo:'US/UK/IN/PH', toolLink:'Paraphrasing / Writing tools', intent:'Comparison', why:'Natural pairing with your writing/paraphrase tools.' },
  { tier:'C — Mass-Volume AI', rank:29, title:'How to Remove Background from Image Free (2026)', primaryKW:'remove background from image', vol:'3M–6M', cpc:3, cpm:4, diff:33, geo:'Global', toolLink:'Image tools', intent:'Tool-use', why:'Image-tool funnel; huge global volume.' },
  { tier:'C — Mass-Volume AI', rank:30, title:'Best Grammar Checker 2026: Free Tools That Beat Grammarly', primaryKW:'grammar checker free', vol:'1M–2M', cpc:14, cpm:12, diff:44, geo:'US/UK/IN', toolLink:'AI Grammar Fix', intent:'Comparison', why:'Edu SaaS CPC; links to AI Grammar Fix.' },
];

// ---- Build workbook ----
const wb = XLSX.utils.book_new();

// Sheet 1: Main plan
const header = ['Rank','Tier','Blog Title','Primary Keyword','Est. Search Volume (/mo)','Est. CPC (USD)','Est. CPM (USD)','Keyword Difficulty (1–100)','Best GEO (highest CPM)','Internal Tool Link','Search Intent','Why It Works'];
const aoa = [header, ...rows.map(r => [r.rank, r.tier, r.title, r.primaryKW, r.vol, r.cpc, r.cpm, r.diff, r.geo, r.toolLink, r.intent, r.why])];
const ws = XLSX.utils.aoa_to_sheet(aoa);
ws['!cols'] = [{wch:6},{wch:22},{wch:55},{wch:28},{wch:22},{wch:13},{wch:13},{wch:18},{wch:24},{wch:32},{wch:14},{wch:60}];
ws['!freeze'] = { xSplit: 0, ySplit: 1 };
XLSX.utils.book_append_sheet(wb, ws, 'Content Plan');

// Sheet 2: Legend / methodology
const legend = [
  ['ToolNova — Blog Content Plan 2026', ''],
  ['Generated', new Date().toISOString().slice(0,10)],
  ['',''],
  ['COLUMN DEFINITIONS',''],
  ['Est. Search Volume (/mo)','Estimated global monthly Google searches (range). Source: industry SEO data (Ahrefs/Semrush ranges).'],
  ['Est. CPC (USD)','Estimated AdSense cost-per-click for the primary keyword, Tier-1 (US/UK/CA) weighted.'],
  ['Est. CPM (USD)','Estimated display ad CPM for the niche × GEO mix.'],
  ['Keyword Difficulty (1–100)','Lower = easier to rank. ToolNova (a tools site) ranks easier on Tier-A tool-funnel posts.'],
  ['Best GEO','Primary geography for best CPM. US/UK/CA/AU/DE pay 7–15× India CPM.'],
  ['Internal Tool Link','Which of your 45 tools this post should link to (your competitive edge vs review sites).'],
  ['Search Intent','Tool-use / Informational / Comparison / Commercial.'],
  ['',''],
  ['TIER STRATEGY',''],
  ['Tier A — Tool-Funnel','Anchor to your existing 45 tools. Lowest difficulty, drives tool usage + revenue. PUBLISH FIRST.'],
  ['Tier B — High-CPM Intent','Finance / jobs / SaaS / education. Highest CPC but harder to rank. Best for revenue scaling after authority built.'],
  ['Tier C — Mass-Volume AI','Top-of-funnel AI tool lists. Very high volume; AI-niche RPM rising fast in 2026.'],
  ['',''],
  ['RECOMMENDED PUBLISH ORDER',''],
  ['Phase 1 (Weeks 1–4)','Tier A #1–8 — fastest rankings + tool usage'],
  ['Phase 2 (Weeks 5–8)','Tier C #19–24 — mass top-of-funnel volume'],
  ['Phase 3 (Weeks 9–12)','Tier B #9–18 — high-CPC revenue scaling'],
  ['',''],
  ['DATA SOURCES',''],
  ['Niches/RPM','Publift, MonetizePros, EastonDev (2026)'],
  ['CPM by Country','World Population Review, Monetag (2026)'],
  ['Keyword volumes','Ahrefs / Semrush industry ranges (verify in Keyword Planner)'],
];
const ws2 = XLSX.utils.aoa_to_sheet(legend);
ws2['!cols'] = [{wch:32},{wch:90}];
XLSX.utils.book_append_sheet(wb, ws2, 'Legend & Method');

// Sheet 3: Already-published vs unpublished from your docx
const docxData = [
  ['YOUR DOCX CALENDAR — STATUS', '', '', '', ''],
  ['Day','Title','Status','My Verdict',''],
  ['1','Best AI Automation Tools for Small Business 2026','✅ Published (yellow)','—',''],
  ['2','Top 10 Enterprise VPN Solutions for Remote Teams','✅ Published (yellow)','—',''],
  ['3','AI HR Software: Complete Guide for Small Business','✅ Published (yellow)','—',''],
  ['4','Best Help Desk Software for Small Business','✅ Published (yellow)','—',''],
  ['5','Marketing Automation Software','✅ Published (yellow)','—',''],
  ['6','ChatGPT vs Claude vs Gemini','✅ Published (yellow)','—',''],
  ['7','How AI Agents Are Transforming Customer Support','✅ Published (yellow)','—',''],
  ['8','Virtual Data Room Software','✅ Published (yellow)','—',''],
  ['9','Best Cloud Call Center Software','✅ Published (yellow)','—',''],
  ['10','ERP Software Guide','✅ Published (yellow)','—',''],
  ['11','Best Payroll Software for Small Business','✅ Published (yellow)','—',''],
  ['12','AWS vs Azure vs Google Cloud','✅ Published (yellow)','—',''],
  ['13','Best LMS for Training Companies','✅ Published (yellow)','—',''],
  ['14','Top Email Marketing Solutions','✅ Published (yellow)','—',''],
  ['15','Best Online Business Degree Programs','✅ Published (yellow)','—',''],
  ['16','Online MBA Programs','✅ Published (yellow)','—',''],
  ['17','Best Online Programming Courses','✅ Published (yellow)','—',''],
  ['18','AI Tools Every Student Needs 2026','⬜ Unpublished','✅ PUBLISH → see #21',''],
  ['19','Best Personal Finance Apps','⬜ Unpublished','✅ PUBLISH → see #18',''],
  ['20','Cryptocurrency Investment Tools','⬜ Unpublished','⚠️ SKIP — off-brand, volatile',''],
  ['21','Best Retirement Planning Tools','⬜ Unpublished','⚠️ REPLACE → see #9 (Remote Jobs)',''],
  ['22','Best Business Insurance','⬜ Unpublished','⚠️ OFF-NICHE — skip or replace w/ #17',''],
  ['23','Life Insurance Comparison','⬜ Unpublished','⚠️ OFF-NICHE — skip',''],
  ['24','Cybersecurity Insurance','⬜ Unpublished','⚠️ OFF-NICHE — skip',''],
  ['25','Best Legal Software for Small Law Firms','⬜ Unpublished','⚠️ OFF-NICHE — skip',''],
  ['26','Health Insurance for Freelancers','⬜ Unpublished','⚠️ OFF-NICHE — skip',''],
  ['27','Best Accounting Software','⬜ Unpublished','✅ PUBLISH → see #13 (reframe freelancers)',''],
  ['28','AI Tools for Digital Marketing','⬜ Unpublished','✅ PUBLISH — broadens AI cluster',''],
  ['29','AI Image Generators Compared','⬜ Unpublished','✅ PUBLISH → see #19',''],
  ['30','AI for Content Creation Playbook','⬜ Unpublished','✅ PUBLISH → see #24',''],
];
const ws3 = XLSX.utils.aoa_to_sheet(docxData);
ws3['!cols'] = [{wch:6},{wch:48},{wch:24},{wch:42},{wch:8}];
XLSX.utils.book_append_sheet(wb, ws3, 'Your Old Calendar Status');

const outPath = 'D:\\AIdata\\ToolNova_Blog_Content_Plan_2026.xlsx';
XLSX.writeFile(wb, outPath);
console.log('Wrote:', outPath);
console.log('Sheets:', wb.SheetNames.join(', '));
console.log('Topics:', rows.length);
