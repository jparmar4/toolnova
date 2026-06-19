# Formula Generator Upgrade - Deployment Checklist

## 📋 Pre-Deployment Checklist

### Code Review
- [ ] Review changes in `src/app/tools/formula-generator/client.tsx`
- [ ] Verify `systemPrompt` constant is properly defined
- [ ] Check `generatePrompt` function enhancements
- [ ] Confirm no syntax errors (run `npm run build` or equivalent)
- [ ] Verify no TypeScript errors in the file

### Testing (Local Environment)
- [ ] Start development server (`npm run dev`)
- [ ] Navigate to `/tools/formula-generator`
- [ ] Test Case 1: Chemical Equilibrium (Table Format)
  - Input: "Chemical Equilibrium"
  - Format: Table Format
  - Expected: Markdown table with 15-20 formulas
- [ ] Test Case 2: Trigonometry (List Format)
  - Input: "Trigonometric identities"
  - Format: List Format
  - Expected: Bulleted list with actual equations
- [ ] Test Case 3: Physics (Explained Format)
  - Input: "Kinematics equations"
  - Format: With Explanations
  - Expected: Formulas with explanations
- [ ] Verify no "WORKING" or "FINAL ANSWER" headers appear
- [ ] Confirm table format produces proper Markdown with `|` characters
- [ ] Test with both free and premium accounts (if possible)

### Documentation Review
- [ ] Read `FORMULA-GENERATOR-UPGRADE-SUMMARY.md`
- [ ] Review user guides in `docs/tool-guides/`
- [ ] Verify all links in documentation work
- [ ] Check that examples match expected output

---

## 🚀 Deployment Steps

### Step 1: Backup Current Version
- [ ] Create a git branch for this upgrade: `git checkout -b formula-generator-upgrade`
- [ ] Commit all changes with clear message:
  ```bash
  git add .
  git commit -m "feat: Upgrade Formula Generator with custom system prompt for accurate formula output"
  ```
- [ ] Note current production version/commit hash for potential rollback

### Step 2: Build and Test
- [ ] Run full build: `npm run build` (or your build command)
- [ ] Check for build errors or warnings
- [ ] Run production build locally if possible
- [ ] Test production build with same test cases as above

### Step 3: Deploy
- [ ] Merge to main branch (or deployment branch)
- [ ] Push to repository: `git push origin main`
- [ ] Trigger deployment (manual or CI/CD)
- [ ] Monitor deployment logs for errors
- [ ] Wait for deployment to complete

### Step 4: Verify Deployment
- [ ] Visit production URL: `[your-domain]/tools/formula-generator`
- [ ] Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Test with "Chemical Equilibrium" again
- [ ] Verify output shows actual formulas, not theory
- [ ] Check that table format works correctly
- [ ] Test History feature (should still work)
- [ ] Test Download feature (should still work)

---

## ✅ Post-Deployment Verification

### Functional Testing (Production)
- [ ] Test as free user (5 generations max)
- [ ] Test as premium user (unlimited)
- [ ] Test all 4 subjects: Math, Physics, Chemistry, Economics
- [ ] Test all 3 formats: List, Table, Explained
- [ ] Test with Examples toggle ON and OFF
- [ ] Verify error handling (empty input, rate limits)

### Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari (if Mac/iOS available)
- [ ] Test in Edge
- [ ] Test on mobile device (responsive design)

### Integration Testing
- [ ] Verify other tools still work (Homework Solver, Concept Explainer)
- [ ] Check that global system prompt didn't get affected
- [ ] Test navigation between tools
- [ ] Verify authentication still works
- [ ] Check subscription detection (free vs premium)

---

## 📊 Monitoring (First 24-48 Hours)

### Metrics to Watch
- [ ] Error rate in application logs
- [ ] User completion rate (started vs completed generations)
- [ ] Average processing time
- [ ] API error responses (500s, 429s)
- [ ] User feedback/support tickets

### Key Questions
- [ ] Are users getting actual formulas? (Check random samples)
- [ ] Is table format rendering correctly?
- [ ] Are free users hitting rate limits normally?
- [ ] Are premium users getting better results?
- [ ] Any reports of broken functionality?

### Log Monitoring
Check logs for:
- [ ] "AI: Cache hit" vs "AI: Cache miss" ratio (should be normal)
- [ ] "API: Processing request" entries (verify model selection)
- [ ] Any error stack traces related to formula-generator
- [ ] Unusual patterns in user inputs

---

## 📢 User Communication (Optional)

### Internal Team
- [ ] Notify support team about the upgrade
- [ ] Share Quick Fix Guide: `docs/tool-guides/QUICK-FIX-GUIDE.md`
- [ ] Brief them on what changed (formulas vs theory)
- [ ] Provide test cases they can verify

### User Announcement (Optional)
- [ ] Draft announcement for user dashboard/email:
  ```
  🎉 Formula Generator Upgrade!
  
  We've upgraded the Formula Generator to deliver exactly what you need:
  ✅ Actual equations (not theory descriptions)
  ✅ Proper Markdown tables
  ✅ Comprehensive coverage (15-20+ formulas)
  
  Try it now with topics like Chemical Equilibrium, Trigonometry, or Kinematics!
  ```
- [ ] Post to social media (if applicable)
- [ ] Update tool description on website

---

## 🔄 Rollback Plan (If Issues Arise)

### Criteria for Rollback
Rollback if:
- Error rate increases by >50%
- Users report formulas are worse than before
- Table format completely breaks
- Critical bug affects other tools

### Rollback Steps
1. [ ] Revert to previous commit:
   ```bash
   git revert HEAD
   git push origin main
   ```
2. [ ] Or restore from backup:
   ```bash
   git checkout [previous-commit-hash]
   git push origin main --force
   ```
3. [ ] Re-deploy previous version
4. [ ] Verify old version works
5. [ ] Investigate issue in development
6. [ ] Fix and re-test before re-deploying

---

## 🐛 Common Issues & Solutions

### Issue: Still seeing "WORKING" format
**Cause:** Cache serving old responses  
**Solution:** Clear application cache, wait for cache TTL

### Issue: Table not rendering
**Cause:** Markdown renderer doesn't support pipe tables  
**Solution:** Check frontend Markdown parsing library

### Issue: Empty output
**Cause:** Model API issue or rate limits  
**Solution:** Check API logs, verify API key, check quota

### Issue: Generic instead of specific formulas
**Cause:** User input too vague  
**Solution:** Guide users via Quick Fix Guide

---

## ✨ Success Criteria

Deployment is successful when:
- ✅ Users receive actual formulas (not theory headings)
- ✅ Table format produces valid Markdown tables
- ✅ Output length is 15-20 formulas for comprehensive topics
- ✅ No "FINAL ANSWER/WORKING" structure appears
- ✅ Error rate remains stable (<5% increase)
- ✅ User feedback is positive
- ✅ Other tools remain unaffected

---

## 📝 Post-Deployment Tasks

### Within 1 Week
- [ ] Collect user feedback
- [ ] Monitor support tickets
- [ ] Review error logs
- [ ] Document any unexpected issues
- [ ] Update documentation if needed

### Within 1 Month
- [ ] Analyze usage metrics
- [ ] Compare before/after user satisfaction
- [ ] Identify potential improvements
- [ ] Plan next iteration (if needed)

---

## 🎯 Quick Reference

**Files Changed:** 1 code file + 5 docs  
**Risk Level:** Low (isolated, backward compatible)  
**Testing Time:** 15-30 minutes  
**Deployment Time:** 5-15 minutes  
**Rollback Time:** 5 minutes  

**Key Test Input:** "Chemical Equilibrium" with Table Format  
**Expected:** Markdown table with 15-20 actual formula equations

---

## ✅ Sign-Off

**Deployed By:** _________________  
**Date/Time:** _________________  
**Version/Commit:** _________________  
**Issues Found:** _________________  
**Status:** [ ] Success [ ] Partial [ ] Rollback Required  

---

**Last Updated:** 2025  
**Document Version:** 1.0