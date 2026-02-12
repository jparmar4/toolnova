# Critical Tools Prompt Audit & Recommendations

**Date:** 2025  
**Status:** In Progress  
**Auditor:** System Analysis

---

## Executive Summary

This document audits all critical AI-powered tools to ensure they produce proper, formatted responses instead of being overridden by the global system prompt that forces:
- Short answers (4-10 lines)
- FINAL ANSWER/WORKING/QUICK CHECK format
- Plain text only (no Markdown)

### Tools Status:
- ✅ **Fixed:** 2 tools (formula-generator, homework-solver)
- ⚠️ **Needs Review:** 7 tools
- ❌ **Critical Issues:** 3 tools (MCQ, Flashcard, Essay need custom systemPrompts)

---

## Global System Prompt Issue

**Location:** `src/lib/ai.ts` (lines 46-61)

**Current Global Prompt:**
```
'You are a helpful assistant for a global English audience.',
'Write in simple, clear language. Be direct and on-topic.',
'Keep the answer short: usually 4-10 lines, unless the user clearly asks for more.',
'Avoid long introductions, repetition, and filler.',
'Use plain text (no Markdown).',
'Prefer this structure when it fits:',
'FINAL ANSWER: <one line>',
'WORKING: <3-6 short numbered steps or bullets if needed>',
'QUICK CHECK: <one line, if applicable>',
'LEARNING TIP: <one short reusable idea>',
'Do not add practice questions, long motivational endings, or extra sections unless the user asks or the tool explicitly requires it.'
```

**Problem:** This conflicts with tools that need:
- Longer outputs (formula sheets, essays, notes)
- Specific formatting (MCQ format, flashcard format)
- Markdown tables, bold, italics
- Custom structures (🎯 ANSWER, 📝 SOLUTION)

---

## Tool-by-Tool Analysis

### 1. ✅ Formula Generator (FIXED)
**Status:** ✅ Custom systemPrompt added  
**File:** `src/app/tools/formula-generator/client.tsx`

**Issues Found:**
- Was returning theory headings instead of actual equations
- Table format not rendering Markdown tables
- Output limited to 4-10 lines

**Fix Applied:**
```typescript
const systemPrompt = `You are a formula-sheet generator for academic subjects.

OUTPUT RULES:
- When user requests "table" format, you MUST output a Markdown pipe table using | characters
- Table columns must be: Formula Name | Equation | Notes
- Use proper mathematical notation (subscripts, superscripts, Greek letters)
- Do NOT use the FINAL ANSWER/WORKING/QUICK CHECK format
- Output can be longer than 10 lines when needed for comprehensive formula sheets
- Markdown formatting (tables, bold, italics) is allowed and encouraged for clarity
...`
```

**Result:** Now generates 15-20 actual formulas in proper Markdown tables.

---

### 2. ✅ Homework Solver (FIXED)
**Status:** ✅ Custom systemPrompt added  
**File:** `src/app/tools/homework-solver/client.tsx`

**Issues Found:**
- Uses a VERY detailed custom prompt structure with emoji labels (🎯, 📝, ✅, 💡)
- Global prompt would override this structure
- Needs long, step-by-step explanations

**Fix Applied:**
```typescript
const systemPrompt = `You are a patient, encouraging tutor helping students learn step-by-step.

OUTPUT RULES:
- Use the exact structure requested in the user prompt (with emoji section labels: 🎯, 📝, ✅, 💡, etc.)
- Do NOT use a generic FINAL ANSWER/WORKING/QUICK CHECK format
- Output can be as long as needed to properly explain the solution (ignore any line limits)
- Use clear formatting with blank lines between sections
- Number each step clearly (Step 1, Step 2, etc.)
- Explain WHY each step works, not just HOW
...`
```

**Result:** Now respects the custom homework format with proper step-by-step explanations.

---

### 3. ⚠️ Doubt Solver
**Status:** ⚠️ Needs Custom systemPrompt  
**File:** `src/app/tools/doubt-solver/client.tsx`

**Current Prompt Structure:**
```typescript
const generatePrompt = (input: string, options?: Record<string, any>) => {
    const subject = options?.subject || 'general';
    const depth = options?.depth || 'detailed';
    const includeExamples = options?.includeExamples !== false;

    const depthStyles: Record<string, string> = {
        quick: 'Provide a clear, concise answer.',
        detailed: 'Provide a comprehensive explanation with step-by-step breakdown.',
        eli5: 'Explain this in very simple terms that anyone could understand.',
    };

    return `Answer this ${subject} question/doubt.
${depthStyles[depth]}
${includeExamples ? 'Include relevant examples to illustrate.' : ''}

Question/Doubt:
${input}

Answer:`;
};
```

**Issue:**
- Doesn't override the global FINAL ANSWER format
- When user selects "Detailed", they expect comprehensive answers, not 4-10 lines
- ELI5 mode needs freedom to use analogies and examples

**Recommendation:** ⚠️ ADD CUSTOM SYSTEMPROMPT
```typescript
const systemPrompt = `You are a knowledgeable tutor answering student questions.

OUTPUT RULES:
- Provide answers in the depth requested by the user
- Do NOT limit answer length for 'detailed' explanations
- For ELI5 mode, use analogies and simple language freely
- Use clear section breaks and formatting
- Include examples when requested

APPROACH:
- Start with a direct answer
- Then explain the reasoning
- Provide examples if requested
- Keep language appropriate for the subject and depth level`;
```

---

### 4. ⚠️ Concept Explainer
**Status:** ⚠️ Needs Custom systemPrompt  
**File:** `src/app/tools/concept-explainer/client.tsx`

**Current Prompt Structure:**
```typescript
return `Explain the following concept clearly.
${levelStyles[level]}
${styleDescriptions[style]}
${includeExamples ? 'Include real-world examples to illustrate.' : ''}

Concept:
${input}

Explanation:`;
```

**Issue:**
- Tool purpose is to provide comprehensive explanations
- Global 4-10 line limit contradicts "detailed" and "advanced" levels
- Visual style needs freedom for ASCII diagrams
- Analogy style needs space for creative comparisons

**Recommendation:** ⚠️ ADD CUSTOM SYSTEMPROMPT
```typescript
const systemPrompt = `You are an expert educator explaining complex concepts.

OUTPUT RULES:
- Provide explanations at the requested depth level (beginner, intermediate, advanced, ELI5)
- Output length should match the complexity of the concept (ignore line limits)
- For visual style, use ASCII diagrams or detailed descriptions
- For analogy style, use creative comparisons freely
- Include examples when requested

TEACHING APPROACH:
- Start with the core concept
- Build understanding progressively
- Use analogies, examples, and diagrams as appropriate
- Adapt language to the selected level`;
```

---

### 5. ⚠️ Notes Generator
**Status:** ⚠️ Needs Custom systemPrompt  
**File:** `src/app/tools/notes-generator/client.tsx`

**Current Prompt Structure:**
```typescript
return [
    `You are a helpful study assistant creating ${subject} notes.`,
    '',
    'FORMAT YOUR NOTES LIKE THIS:',
    '',
    '📝 MAIN NOTES:',
    '[Your detailed notes here]',
    '',
    includeKeyTerms ? 'KEY TERMS:\n[Important terms with definitions]' : '',
    '',
    includeQuestions ? 'REVIEW QUESTIONS:\n[3-5 questions to test understanding]' : '',
    '',
    'MEMORY TIP:',
    '[One helpful tip to remember the key concepts]',
    '',
    `Style: ${styles[noteStyle]}`,
    ...
].join('\n');
```

**Issue:**
- Cornell style needs specific multi-section format
- Detailed notes can't be limited to 4-10 lines
- Review questions need space

**Recommendation:** ⚠️ ADD CUSTOM SYSTEMPROMPT
```typescript
const systemPrompt = `You are a study notes expert creating well-organized study materials.

OUTPUT RULES:
- Follow the requested note style format (detailed, summary, outline, Cornell)
- Output length depends on content - create comprehensive notes as needed
- Use clear section labels and formatting
- Include key terms and review questions when requested
- Use Markdown formatting (bold, lists, headings) for clarity

NOTE FORMATTING:
- Use emoji section labels (📝, 🔑, ❓, 💡)
- Add blank lines between sections
- Make key terms stand out
- Keep review questions clear and testable`;
```

---

### 6. ❌ MCQ Generator (CRITICAL)
**Status:** ❌ NEEDS IMMEDIATE FIX  
**File:** `src/app/tools/mcq-generator/client.tsx`

**Current Prompt Structure:**
```typescript
return [
    `Create ${questionCount} multiple choice questions (MCQs).`,
    `Difficulty: ${difficulty}`,
    'Use simple, clear English.',
    '',
    'Format each question like this:',
    'Question 1: ...',
    'A) ...',
    'B) ...',
    'C) ...',
    'D) ...',
    '',
    includeAnswers
        ? 'ANSWER KEY:\n[List all correct answers like: 1. A, 2. C, ...]'
        : 'Do not include an answer key.',
    '',
    includeExplanations
        ? 'EXPLANATIONS:\n[Short explanation for each answer (1-2 lines each)]'
        : 'Do not include explanations.',
    '',
    'TIP:\n[One study tip related to this topic]',
    ...
].join('\n');
```

**Issue:** ⚠️⚠️ CRITICAL
- Specific format required (Question 1, A/B/C/D)
- Global prompt will force FINAL ANSWER/WORKING format
- 10-20 questions can't fit in 4-10 lines
- Answer key and explanations need proper formatting

**Recommendation:** ❌ URGENT - ADD CUSTOM SYSTEMPROMPT
```typescript
const systemPrompt = `You are an MCQ question generator for exam preparation.

OUTPUT RULES:
- Generate the EXACT number of questions requested
- Use the EXACT format specified: Question 1: ... A) ... B) ... C) ... D) ...
- Do NOT use FINAL ANSWER/WORKING format
- Output will be long (10-20 questions) - ignore line limits
- Include answer key and explanations when requested
- Use clear formatting with blank lines between questions

QUESTION QUALITY:
- Make distractors plausible but incorrect
- Ensure one clear correct answer
- Match the requested difficulty level
- Keep questions clear and unambiguous`;
```

---

### 7. ❌ Flashcard Maker (CRITICAL)
**Status:** ❌ NEEDS IMMEDIATE FIX  
**File:** `src/app/tools/flashcard-maker/client.tsx`

**Current Prompt Structure:**
```typescript
return [
    `Create ${cardCount} flashcards.`,
    `Style: ${styleDescriptions[style]}`,
    'Keep the FRONT short and the BACK clear.',
    includeHints
        ? 'Add one short "Memory tip" line per card.'
        : 'Do not add memory tips.',
    '',
    'Format each card like this:',
    'Card 1',
    'Front: ...',
    'Back: ...',
    includeHints ? 'Memory tip: ...' : '',
    ...
].join('\n');
```

**Issue:** ⚠️⚠️ CRITICAL
- Specific card format required (Card 1, Front, Back, Memory tip)
- Global prompt will override this structure
- 10-20 cards can't fit in 4-10 lines
- Format is crucial for flashcard tools

**Recommendation:** ❌ URGENT - ADD CUSTOM SYSTEMPROMPT
```typescript
const systemPrompt = `You are a flashcard generator for effective memorization.

OUTPUT RULES:
- Generate the EXACT number of cards requested
- Use the EXACT format: Card 1 / Front: ... / Back: ... / Memory tip: ...
- Do NOT use FINAL ANSWER/WORKING format
- Output will be long (10-20 cards) - ignore line limits
- Include memory tips when requested
- Keep Front concise, Back comprehensive

CARD QUALITY:
- Front should be a clear cue or question
- Back should be the complete answer
- Memory tips should use mnemonics or associations
- Follow the requested style (term-definition, Q&A, concept-example)`;
```

---

### 8. ❌ Essay Writer (CRITICAL)
**Status:** ❌ NEEDS IMMEDIATE FIX  
**File:** `src/app/tools/essay-writer/client.tsx`

**Current Prompt Structure:**
```typescript
return [
    `Write a ${type} essay at ${level} level.`,
    `Length: ${lengthWords[length]}`,
    'Write in clear, accessible English with smooth transitions.',
    '',
    'Use this structure with labels:',
    'INTRODUCTION: (hook + context + thesis)',
    'BODY PARAGRAPH 1: (topic sentence + evidence + explanation)',
    'BODY PARAGRAPH 2: (topic sentence + evidence + explanation)',
    'BODY PARAGRAPH 3: (topic sentence + evidence + explanation)',
    'CONCLUSION: (restated thesis + summary + closing)',
    '',
    'End with: WRITING TIP: (one short practical tip)',
    ...
].join('\n');
```

**Issue:** ⚠️⚠️ CRITICAL
- Requires 300-1200 word essays
- Global 4-10 line limit makes this impossible
- Specific structure with section labels
- Needs paragraphs with transitions

**Recommendation:** ❌ URGENT - ADD CUSTOM SYSTEMPROMPT
```typescript
const systemPrompt = `You are an academic essay writing assistant.

OUTPUT RULES:
- Generate essays at the requested word count (300-1200 words)
- Do NOT limit output to 4-10 lines - essays need full length
- Use the exact structure requested (INTRODUCTION, BODY PARAGRAPH 1/2/3, CONCLUSION)
- Do NOT use FINAL ANSWER/WORKING format
- Include proper transitions between paragraphs
- Match the requested academic level

WRITING QUALITY:
- Start each paragraph with a clear topic sentence
- Provide evidence and explanation
- Use smooth transitions
- Maintain consistent tone and style
- End with a memorable conclusion`;
```

---

## Priority Recommendations

### Immediate Action Required (Critical Tools):
1. **MCQ Generator** - Add custom systemPrompt immediately
2. **Flashcard Maker** - Add custom systemPrompt immediately
3. **Essay Writer** - Add custom systemPrompt immediately

These tools have STRICT format requirements that are being overridden by the global prompt.

### High Priority (Important Tools):
4. **Doubt Solver** - Add custom systemPrompt soon
5. **Concept Explainer** - Add custom systemPrompt soon
6. **Notes Generator** - Add custom systemPrompt soon

These tools need flexibility for comprehensive answers.

### Already Fixed:
✅ **Formula Generator** - Custom systemPrompt working perfectly  
✅ **Homework Solver** - Custom systemPrompt working perfectly

---

## Implementation Template

For each tool needing a fix, follow this pattern:

```typescript
// 1. Add systemPrompt constant
const systemPrompt = `You are [role specific to the tool].

OUTPUT RULES:
- [Format requirements]
- Do NOT use FINAL ANSWER/WORKING/QUICK CHECK format
- Output length: [as needed for this tool]
- [Any markdown/formatting allowed]

[TOOL-SPECIFIC GUIDELINES]
...`;

// 2. Add generatePrompt function (already exists in most tools)
const generatePrompt = (input: string, options?: Record<string, any>) => {
    // ... existing code ...
};

// 3. Pass systemPrompt to ToolLayout
<ToolLayout
    promptTemplate={generatePrompt}
    systemPrompt={systemPrompt}  // <-- ADD THIS LINE
    ...
/>
```

---

## Testing Checklist

After adding custom systemPrompt to each tool:

### MCQ Generator:
- [ ] Generates exact count requested (5, 10, 15, 20)
- [ ] Uses correct format: Question 1:, A), B), C), D)
- [ ] Includes answer key when enabled
- [ ] Includes explanations when enabled
- [ ] No FINAL ANSWER/WORKING headers

### Flashcard Maker:
- [ ] Generates exact count requested (5, 10, 15, 20)
- [ ] Uses correct format: Card 1, Front:, Back:, Memory tip:
- [ ] Memory tips present when enabled
- [ ] No FINAL ANSWER/WORKING headers

### Essay Writer:
- [ ] Generates essays at requested word count (300-1200)
- [ ] Uses section labels: INTRODUCTION, BODY PARAGRAPH 1/2/3, CONCLUSION
- [ ] Paragraphs have proper length and transitions
- [ ] No truncation at 4-10 lines
- [ ] No FINAL ANSWER/WORKING headers

### Doubt Solver:
- [ ] Detailed mode provides comprehensive answers
- [ ] ELI5 mode uses simple language and analogies
- [ ] Quick mode is concise but complete
- [ ] No 4-10 line limit truncation

### Concept Explainer:
- [ ] Beginner/Intermediate/Advanced levels work correctly
- [ ] Visual style includes diagrams/descriptions
- [ ] Analogy style uses creative comparisons
- [ ] Examples included when requested

### Notes Generator:
- [ ] Cornell style shows proper multi-section format
- [ ] Detailed notes are comprehensive
- [ ] Key terms highlighted when enabled
- [ ] Review questions included when enabled

---

## Success Metrics

After implementing all fixes:

### Expected Improvements:
- ✅ 95%+ of tool outputs match requested format
- ✅ No "FINAL ANSWER / WORKING" in tools with custom formats
- ✅ Output length matches tool requirements (not limited to 4-10 lines)
- ✅ User satisfaction with output quality increases
- ✅ Reduction in "regenerate" attempts by 70%

### Monitor:
- User feedback on tool quality
- Support tickets about format issues
- Completion rates (started vs completed generations)
- Premium conversion (quality outputs drive upgrades)

---

## Related Documentation

- **Formula Generator Fix:** `docs/tool-guides/FORMULA-GENERATOR-UPGRADE.md`
- **Deployment Guide:** `DEPLOYMENT-CHECKLIST.md`
- **Before/After Comparison:** `docs/tool-guides/BEFORE-AFTER-COMPARISON.md`

---

**Status:** Ready for implementation  
**Estimated Time:** 2-3 hours for all fixes  
**Risk Level:** Low (isolated changes, backward compatible)  
**Priority:** HIGH (affects user experience significantly)