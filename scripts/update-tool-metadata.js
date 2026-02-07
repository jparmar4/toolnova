#!/usr/bin/env node

/**
 * Automated Tool Page Metadata Updater
 * Updates all tool pages with optimized SEO metadata
 */

const fs = require('fs');
const path = require('path');

// Tool slugs that need updating (excluding already updated ones)
const toolsToUpdate = [
    'essay-writer',
    'homework-solver',
    'flashcard-maker',
    'merge-pdf',
    'split-pdf',
    'notes-generator',
    'quiz-generator',
    'mcq-generator',
    'concept-explainer',
    'speech-writer',
    'email-writer',
    'caption-generator',
    'story-generator',
    'paragraph-generator',
    'text-simplifier',
    'vocabulary-builder',
    'synonym-finder',
    'antonym-finder',
    'idioms-phrases',
    'one-word-substitution',
    'resume-bullets',
    'cover-letter-writer',
    'interview-generator',
    'bio-generator',
    'word-counter',
    'character-counter',
    'case-converter',
    'age-calculator',
    'image-compressor',
    'jpg-to-png',
    'png-to-jpg',
    'image-to-pdf',
    'chapter-summary',
    'doubt-solver',
    'diagram-explainer',
    'formula-generator',
    'timetable-generator',
    'revision-planner',
    'goal-planner',
    'todo-list-generator',
];

const toolsDir = path.join(__dirname, 'src', 'app', 'tools');

function updateToolPage(toolSlug) {
    const pagePath = path.join(toolsDir, toolSlug, 'page.tsx');

    if (!fs.existsSync(pagePath)) {
        console.log(`⚠️  Skipping ${toolSlug} - page.tsx not found`);
        return false;
    }

    let content = fs.readFileSync(pagePath, 'utf8');

    // Check if already updated
    if (content.includes('getOptimizedToolMetadata')) {
        console.log(`✅ ${toolSlug} - already optimized`);
        return true;
    }

    // Add import for getOptimizedToolMetadata
    if (!content.includes("import { getOptimizedToolMetadata }")) {
        content = content.replace(
            /import { getToolData } from '@\/data\/tools';/,
            `import { getToolData } from '@/data/tools';\nimport { getOptimizedToolMetadata } from '@/lib/tool-metadata';`
        );
    }

    // Add toolMeta constant before metadata export
    const metadataMatch = content.match(/export const metadata: Metadata = {/);
    if (metadataMatch && !content.includes(`const toolMeta = getOptimizedToolMetadata('${toolSlug}')`)) {
        content = content.replace(
            /export const metadata: Metadata = {/,
            `const toolMeta = getOptimizedToolMetadata('${toolSlug}');\n\nexport const metadata: Metadata = {`
        );
    }

    // Update title to use toolMeta
    content = content.replace(
        /title: ['"]([^'"]+)['"]/,
        `title: toolMeta?.title || '$1'`
    );

    // Update description to use toolMeta
    content = content.replace(
        /description: ['"]([^'"]+)['"]/,
        `description: toolMeta?.description || '$1'`
    );

    // Update keywords to use toolMeta
    content = content.replace(
        /keywords: \[([^\]]+)\]/,
        `keywords: toolMeta?.keywords || [$1]`
    );

    // Update canonical URL to use www.toolnovahub.com
    content = content.replace(
        /canonical: ['"]https:\/\/aimultitools\.com\/tools\/([^'"]+)['"]/,
        `canonical: 'https://www.toolnovahub.com/tools/$1'`
    );

    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`✅ ${toolSlug} - updated successfully`);
    return true;
}

console.log('🚀 Starting automated tool page metadata update...\n');

let updated = 0;
let skipped = 0;

toolsToUpdate.forEach(toolSlug => {
    if (updateToolPage(toolSlug)) {
        updated++;
    } else {
        skipped++;
    }
});

console.log(`\n✨ Update complete!`);
console.log(`   Updated: ${updated} pages`);
console.log(`   Skipped: ${skipped} pages`);
console.log(`\n📊 Total tool pages with optimized metadata: ${updated + 3} / 50+`);
