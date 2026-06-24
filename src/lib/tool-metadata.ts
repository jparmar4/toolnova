/**
 * Optimized Tool Page Metadata Generator
 * Creates SEO-optimized titles and descriptions for all tools
 */

interface ToolMetadata {
    slug: string;
    name: string;
    title: string;
    description: string;
    keywords: string[];
}

/**
 * Optimized metadata for all 50+ tools
 * Following SEO best practices:
 * - Primary keyword first
 * - Under 60 characters for title
 * - 150-160 characters for description
 * - Include year (2026) for freshness
 * - Add CTA and trust signals
 */
export const optimizedToolMetadata: Record<string, ToolMetadata> = {
    'text-summarizer': {
        slug: 'text-summarizer',
        name: 'Text Summarizer',
        title: 'AI Text Summarizer Free 2026 - Summarize Articles | ToolNova',
        description: 'Summarize long articles, essays, and documents in seconds with AI. Extract key points instantly. Free, accurate, no sign-up required. Try now!',
        keywords: ['AI text summarizer', 'summarize text', 'article summarizer', 'summary generator', 'free summarizer', 'AI summary tool'],
    },
    'paraphraser': {
        slug: 'paraphraser',
        name: 'Paraphraser',
        title: 'AI Paraphraser Free 2026 - Rewrite Text Online | ToolNova',
        description: 'Paraphrase text instantly with AI. Rewrite essays, articles, and content while preserving meaning. Plagiarism-free results. Free, no sign-up!',
        keywords: ['AI paraphraser', 'paraphrase tool', 'rewrite text', 'paraphrasing tool free', 'AI rewriter', 'text paraphraser'],
    },
    'grammar-fix': {
        slug: 'grammar-fix',
        name: 'Grammar Fix',
        title: 'Grammar Checker Free 2026 - Fix Errors Instantly | ToolNova',
        description: 'Fix grammar, spelling, and punctuation errors instantly with AI. Get smart suggestions for better writing. Free grammar checker, no sign-up!',
        keywords: ['grammar checker', 'grammar fix', 'spell checker', 'grammar correction', 'free grammar check', 'AI grammar tool'],
    },
    'essay-writer': {
        slug: 'essay-writer',
        name: 'Essay Writer',
        title: 'AI Essay Writer Free 2026 - Generate Essays Fast | ToolNova',
        description: 'Generate well-structured essays with AI. Create outlines, introductions, and body paragraphs. Perfect for students. Free essay writer, try now!',
        keywords: ['AI essay writer', 'essay generator', 'free essay writer', 'AI writing assistant', 'essay maker', 'academic writing tool'],
    },
    'homework-solver': {
        slug: 'homework-solver',
        name: 'Homework Solver',
        title: 'AI Homework Solver Free 2026 - Step-by-Step Help | ToolNova',
        description: 'Solve homework problems with AI step-by-step explanations. Math, science, and more. Learn the method, not just the answer. Free, try now!',
        keywords: ['AI homework solver', 'homework help', 'math solver', 'homework assistant', 'free homework help', 'AI tutor'],
    },
    'flashcard-maker': {
        slug: 'flashcard-maker',
        name: 'Flashcard Maker',
        title: 'Flashcard Maker Free 2026 - Create Study Cards AI | ToolNova',
        description: 'Create digital flashcards from your notes with AI. Generate question-answer pairs automatically. Perfect for exam prep. Free, no sign-up!',
        keywords: ['flashcard maker', 'create flashcards', 'AI flashcards', 'study cards', 'free flashcard generator', 'digital flashcards'],
    },
    'merge-pdf': {
        slug: 'merge-pdf',
        name: 'Merge PDF',
        title: 'Merge PDF Free 2026 - Combine PDFs Online | ToolNova',
        description: 'Merge multiple PDFs into one file instantly. No watermarks, no file limits. Drag, drop, and combine PDFs for free. Try now!',
        keywords: ['merge PDF', 'combine PDF', 'PDF merger', 'join PDF files', 'free PDF merge', 'PDF combiner'],
    },
    'split-pdf': {
        slug: 'split-pdf',
        name: 'Split PDF',
        title: 'Split PDF Free 2026 - Extract Pages Online | ToolNova',
        description: 'Split PDF into multiple files or extract specific pages. No watermarks, unlimited splits. Free PDF splitter, no sign-up required!',
        keywords: ['split PDF', 'PDF splitter', 'extract PDF pages', 'divide PDF', 'free PDF split', 'separate PDF'],
    },
    'notes-generator': {
        slug: 'notes-generator',
        name: 'Notes Generator',
        title: 'AI Notes Generator Free 2026 - Study Notes Maker | ToolNova',
        description: 'Generate study notes from any topic with AI. Create organized, comprehensive notes instantly. Perfect for students. Free, try now!',
        keywords: ['AI notes generator', 'study notes', 'notes maker', 'AI note taking', 'free notes generator', 'study notes creator'],
    },
    'quiz-generator': {
        slug: 'quiz-generator',
        name: 'Quiz Generator',
        title: 'Quiz Generator Free 2026 - Create Quizzes AI | ToolNova',
        description: 'Create custom quizzes from any topic with AI. Generate questions and answers automatically. Perfect for teachers and students. Free!',
        keywords: ['quiz generator', 'create quiz', 'AI quiz maker', 'quiz creator', 'free quiz generator', 'test maker'],
    },
    'mcq-generator': {
        slug: 'mcq-generator',
        name: 'MCQ Generator',
        title: 'MCQ Generator Free 2026 - Multiple Choice Quiz AI | ToolNova',
        description: 'Generate multiple choice questions with AI. Create MCQs from any topic instantly. Perfect for exams and practice tests. Free, try now!',
        keywords: ['MCQ generator', 'multiple choice questions', 'MCQ maker', 'AI quiz generator', 'free MCQ creator', 'test questions'],
    },
    'concept-explainer': {
        slug: 'concept-explainer',
        name: 'Concept Explainer',
        title: 'AI Concept Explainer Free 2026 - Understand Topics | ToolNova',
        description: 'Understand complex concepts with AI explanations. Get clear, simple breakdowns of any topic. Perfect for learning. Free, no sign-up!',
        keywords: ['concept explainer', 'AI tutor', 'explain concepts', 'topic explainer', 'free learning tool', 'AI education'],
    },
    'speech-writer': {
        slug: 'speech-writer',
        name: 'Speech Writer',
        title: 'AI Speech Writer Free 2026 - Write Speeches Fast | ToolNova',
        description: 'Write compelling speeches with AI. Generate introductions, body, and conclusions. Perfect for presentations. Free speech writer, try now!',
        keywords: ['AI speech writer', 'speech generator', 'write speech', 'speech maker', 'free speech writer', 'presentation writer'],
    },
    'email-writer': {
        slug: 'email-writer',
        name: 'Email Writer',
        title: 'AI Email Writer Free 2026 - Professional Emails | ToolNova',
        description: 'Write professional emails with AI. Generate business emails, replies, and messages instantly. Save time, improve communication. Free!',
        keywords: ['AI email writer', 'email generator', 'professional email', 'email assistant', 'free email writer', 'business email'],
    },
    'caption-generator': {
        slug: 'caption-generator',
        name: 'Caption Generator',
        title: 'Caption Generator Free 2026 - Social Media AI | ToolNova',
        description: 'Generate engaging social media captions with AI. Create Instagram, Facebook, and Twitter captions instantly. Free, no sign-up required!',
        keywords: ['caption generator', 'social media captions', 'Instagram captions', 'AI caption maker', 'free caption generator', 'post captions'],
    },
    'story-generator': {
        slug: 'story-generator',
        name: 'Story Generator',
        title: 'AI Story Generator Free 2026 - Write Stories Fast | ToolNova',
        description: 'Generate creative stories with AI. Write fiction, narratives, and plots instantly. Perfect for writers and students. Free story generator!',
        keywords: ['AI story generator', 'story writer', 'creative writing', 'story maker', 'free story generator', 'fiction writer'],
    },
    'paragraph-generator': {
        slug: 'paragraph-generator',
        name: 'Paragraph Generator',
        title: 'Paragraph Generator Free 2026 - AI Writing Tool | ToolNova',
        description: 'Generate well-written paragraphs with AI. Create content for essays, articles, and blogs instantly. Free paragraph generator, try now!',
        keywords: ['paragraph generator', 'AI paragraph writer', 'content generator', 'paragraph maker', 'free writing tool', 'AI content creator'],
    },
    'text-simplifier': {
        slug: 'text-simplifier',
        name: 'Text Simplifier',
        title: 'Text Simplifier Free 2026 - Simplify Complex Text | ToolNova',
        description: 'Simplify complex text with AI. Make difficult content easy to understand. Perfect for students and readers. Free, no sign-up required!',
        keywords: ['text simplifier', 'simplify text', 'AI simplifier', 'easy reading', 'free text simplifier', 'content simplifier'],
    },
    'vocabulary-builder': {
        slug: 'vocabulary-builder',
        name: 'Vocabulary Builder',
        title: 'Vocabulary Builder Free 2026 - Learn New Words | ToolNova',
        description: 'Build your vocabulary with AI. Learn new words with definitions and examples. Perfect for SAT, GRE, and TOEFL prep. Free, try now!',
        keywords: ['vocabulary builder', 'learn vocabulary', 'word builder', 'SAT vocabulary', 'free vocabulary tool', 'word learning'],
    },
    'synonym-finder': {
        slug: 'synonym-finder',
        name: 'Synonym Finder',
        title: 'Synonym Finder Free 2026 - Find Synonyms AI | ToolNova',
        description: 'Find synonyms for any word with AI. Improve your writing with better word choices. Free synonym finder, no sign-up required!',
        keywords: ['synonym finder', 'find synonyms', 'thesaurus', 'word alternatives', 'free synonym tool', 'AI thesaurus'],
    },
    'antonym-finder': {
        slug: 'antonym-finder',
        name: 'Antonym Finder',
        title: 'Antonym Finder Free 2026 - Find Antonyms AI | ToolNova',
        description: 'Find antonyms for any word with AI. Expand your vocabulary with opposite words. Free antonym finder, no sign-up required!',
        keywords: ['antonym finder', 'find antonyms', 'opposite words', 'word opposites', 'free antonym tool', 'AI antonym finder'],
    },
    'idioms-phrases': {
        slug: 'idioms-phrases',
        name: 'Idioms and Phrases',
        title: 'Idioms and Phrases Free 2026 - Learn English AI | ToolNova',
        description: 'Learn idioms and phrases with AI. Understand meanings and usage with examples. Perfect for English learners. Free, try now!',
        keywords: ['idioms and phrases', 'learn idioms', 'English phrases', 'idiom meanings', 'free idiom tool', 'phrase learning'],
    },
    'one-word-substitution': {
        slug: 'one-word-substitution',
        name: 'One Word Substitution',
        title: 'One Word Substitution Free 2026 - Vocabulary AI | ToolNova',
        description: 'Learn one-word substitutions with AI. Replace phrases with single words. Perfect for competitive exams. Free, no sign-up required!',
        keywords: ['one word substitution', 'vocabulary tool', 'word replacement', 'competitive exam prep', 'free vocabulary', 'word learning'],
    },
    'resume-bullets': {
        slug: 'resume-bullets',
        name: 'Resume Bullets',
        title: 'Resume Bullet Points Free 2026 - AI Resume Writer | ToolNova',
        description: 'Generate professional resume bullet points with AI. Create impactful achievements and responsibilities. Free resume writer, try now!',
        keywords: ['resume bullets', 'resume writer', 'AI resume', 'bullet points', 'free resume tool', 'job application'],
    },
    'cover-letter-writer': {
        slug: 'cover-letter-writer',
        name: 'Cover Letter Writer',
        title: 'Cover Letter Writer Free 2026 - AI Job Application | ToolNova',
        description: 'Write professional cover letters with AI. Customize for any job application. Stand out to employers. Free cover letter writer!',
        keywords: ['cover letter writer', 'AI cover letter', 'job application', 'cover letter generator', 'free cover letter', 'professional letter'],
    },
    'interview-generator': {
        slug: 'interview-generator',
        name: 'Interview Generator',
        title: 'Interview Questions Free 2026 - AI Job Prep | ToolNova',
        description: 'Generate interview questions with AI. Prepare for job interviews with common and role-specific questions. Free interview prep tool!',
        keywords: ['interview questions', 'job interview prep', 'AI interview', 'interview generator', 'free interview tool', 'job preparation'],
    },
    'bio-generator': {
        slug: 'bio-generator',
        name: 'Bio Generator',
        title: 'Bio Generator Free 2026 - Professional Bios AI | ToolNova',
        description: 'Generate professional bios with AI. Create compelling personal and professional bios instantly. Free bio generator, no sign-up!',
        keywords: ['bio generator', 'professional bio', 'AI bio writer', 'bio maker', 'free bio generator', 'personal bio'],
    },
    'word-counter': {
        slug: 'word-counter',
        name: 'Word Counter',
        title: 'Word Counter Free 2026 - Count Words & Characters | ToolNova',
        description: 'Count words, characters, sentences, and paragraphs instantly. Get reading time estimates. Free word counter, no sign-up required!',
        keywords: ['word counter', 'character counter', 'word count tool', 'text counter', 'free word counter', 'count words'],
    },
    'character-counter': {
        slug: 'character-counter',
        name: 'Character Counter',
        title: 'Character Counter Free 2026 - Count Characters | ToolNova',
        description: 'Count characters, words, and spaces instantly. Perfect for Twitter, SMS, and meta descriptions. Free character counter, try now!',
        keywords: ['character counter', 'count characters', 'text counter', 'character count tool', 'free character counter', 'letter counter'],
    },
    'case-converter': {
        slug: 'case-converter',
        name: 'Case Converter',
        title: 'Case Converter Free 2026 - Change Text Case Online | ToolNova',
        description: 'Convert text case instantly. Change to UPPERCASE, lowercase, Title Case, and more. Free case converter, no sign-up required!',
        keywords: ['case converter', 'text case', 'uppercase converter', 'lowercase converter', 'free case converter', 'change text case'],
    },
    'age-calculator': {
        slug: 'age-calculator',
        name: 'Age Calculator',
        title: 'Age Calculator Free 2026 - Calculate Age Instantly | ToolNova',
        description: 'Calculate age in years, months, and days instantly. Find age between two dates. Free age calculator, no sign-up required!',
        keywords: ['age calculator', 'calculate age', 'age finder', 'date calculator', 'free age calculator', 'age counter'],
    },
    'image-compressor': {
        slug: 'image-compressor',
        name: 'Image Compressor',
        title: 'Image Compressor Free 2026 - Compress Images Online | ToolNova',
        description: 'Compress images without quality loss. Reduce JPG, PNG file sizes instantly. No watermarks, unlimited compression. Free, try now!',
        keywords: ['image compressor', 'compress images', 'reduce image size', 'image optimizer', 'free image compressor', 'photo compressor'],
    },
    'jpg-to-png': {
        slug: 'jpg-to-png',
        name: 'JPG to PNG',
        title: 'JPG to PNG Converter Free 2026 - Convert Images | ToolNova',
        description: 'Convert JPG to PNG instantly. Preserve image quality, no watermarks. Free image converter, unlimited conversions. Try now!',
        keywords: ['JPG to PNG', 'convert JPG', 'image converter', 'JPG PNG converter', 'free image conversion', 'photo converter'],
    },
    'png-to-jpg': {
        slug: 'png-to-jpg',
        name: 'PNG to JPG',
        title: 'PNG to JPG Converter Free 2026 - Convert Images | ToolNova',
        description: 'Convert PNG to JPG instantly. Reduce file size, preserve quality. Free image converter, unlimited conversions. No sign-up!',
        keywords: ['PNG to JPG', 'convert PNG', 'image converter', 'PNG JPG converter', 'free image conversion', 'photo converter'],
    },
    'image-to-pdf': {
        slug: 'image-to-pdf',
        name: 'Image to PDF',
        title: 'Image to PDF Converter Free 2026 - JPG PNG to PDF | ToolNova',
        description: 'Convert images to PDF instantly. Combine multiple images into one PDF. No watermarks, unlimited conversions. Free, try now!',
        keywords: ['image to PDF', 'JPG to PDF', 'PNG to PDF', 'convert image', 'free PDF converter', 'photo to PDF'],
    },
    'chapter-summary': {
        slug: 'chapter-summary',
        name: 'Chapter Summary',
        title: 'Chapter Summary Generator Free 2026 - AI Study Tool | ToolNova',
        description: 'Generate chapter summaries with AI. Summarize textbook chapters instantly. Perfect for exam prep and studying. Free, try now!',
        keywords: ['chapter summary', 'summarize chapter', 'AI summary', 'textbook summary', 'free summary tool', 'study helper'],
    },
    'doubt-solver': {
        slug: 'doubt-solver',
        name: 'Doubt Solver',
        title: 'Doubt Solver Free 2026 - AI Question Answering | ToolNova',
        description: 'Solve your doubts with AI. Get instant answers to any question. Perfect for students and learners. Free doubt solver, try now!',
        keywords: ['doubt solver', 'question answering', 'AI tutor', 'doubt clearing', 'free doubt solver', 'study help'],
    },
    'diagram-explainer': {
        slug: 'diagram-explainer',
        name: 'Diagram Explainer',
        title: 'Diagram Explainer Free 2026 - Understand Diagrams AI | ToolNova',
        description: 'Understand complex diagrams with AI explanations. Get clear breakdowns of charts, graphs, and diagrams. Free, no sign-up!',
        keywords: ['diagram explainer', 'explain diagrams', 'AI diagram', 'chart explainer', 'free diagram tool', 'visual learning'],
    },
    'formula-generator': {
        slug: 'formula-generator',
        name: 'Formula Generator',
        title: 'Formula Generator Free 2026 - Math & Science AI | ToolNova',
        description: 'Generate math and science formulas with AI. Get formulas with explanations and examples. Perfect for students. Free, try now!',
        keywords: ['formula generator', 'math formulas', 'science formulas', 'AI formula', 'free formula tool', 'equation generator'],
    },
    'timetable-generator': {
        slug: 'timetable-generator',
        name: 'Timetable Generator',
        title: 'Timetable Generator Free 2026 - Study Schedule AI | ToolNova',
        description: 'Create study timetables with AI. Generate personalized schedules for exams and classes. Free timetable generator, try now!',
        keywords: ['timetable generator', 'study schedule', 'AI timetable', 'schedule maker', 'free timetable tool', 'study planner'],
    },
    'revision-planner': {
        slug: 'revision-planner',
        name: 'Revision Planner',
        title: 'Revision Planner Free 2026 - Exam Study Plan AI | ToolNova',
        description: 'Plan your exam revision with AI. Create effective study plans and revision schedules. Perfect for students. Free, try now!',
        keywords: ['revision planner', 'study plan', 'exam preparation', 'AI revision', 'free revision tool', 'study schedule'],
    },
    'goal-planner': {
        slug: 'goal-planner',
        name: 'Goal Planner',
        title: 'Goal Planner Free 2026 - Set & Achieve Goals AI | ToolNova',
        description: 'Plan and track your goals with AI. Set SMART goals and create action plans. Free goal planner, no sign-up required!',
        keywords: ['goal planner', 'goal setting', 'AI planner', 'goal tracker', 'free goal planner', 'productivity tool'],
    },
    'todo-list-generator': {
        slug: 'todo-list-generator',
        name: 'Todo List Generator',
        title: 'Todo List Generator Free 2026 - Task Manager AI | ToolNova',
        description: 'Generate organized todo lists with AI. Create task lists and prioritize work. Free todo list generator, no sign-up required!',
        keywords: ['todo list generator', 'task list', 'AI todo', 'task manager', 'free todo tool', 'productivity planner'],
    },
    'youtube-summarizer': {
        slug: 'youtube-summarizer',
        name: 'YouTube Summarizer',
        title: 'YouTube Video Summarizer Free 2026 - AI Summary | ToolNova',
        description: 'Summarize any YouTube video instantly with AI. Get key points, timestamps, and transcripts. Save hours of watching. Free, no sign-up!',
        keywords: ['YouTube summarizer', 'video summarizer', 'summarize YouTube', 'AI video summary', 'free YouTube summary', 'video transcript'],
    },
    'linkedin-optimizer': {
        slug: 'linkedin-optimizer',
        name: 'LinkedIn Optimizer',
        title: 'LinkedIn Profile Optimizer Free 2026 - AI Career | ToolNova',
        description: 'Optimize your LinkedIn profile with AI. Improve headline, summary, and experience sections. Get more recruiter views. Free, try now!',
        keywords: ['LinkedIn optimizer', 'LinkedIn profile', 'optimize LinkedIn', 'AI LinkedIn', 'free LinkedIn tool', 'career profile'],
    },
    'resize-image': {
        slug: 'resize-image',
        name: 'Resize Image',
        title: 'Resize Image Online Free 2026 - Image Resizer | ToolNova',
        description: 'Resize images by pixels or percentage online. Maintain aspect ratio, no quality loss. Free image resizer, unlimited use. Try now!',
        keywords: ['resize image', 'image resizer', 'resize photo', 'change image size', 'free image resizer', 'photo resizer online'],
    },
    'plagiarism-checker': {
        slug: 'plagiarism-checker',
        name: 'Plagiarism Checker',
        title: 'Plagiarism Checker Free 2026 - Check Plagiarism AI | ToolNova',
        description: 'Check text for plagiarism with AI. Detect copied content and ensure originality. Perfect for students and writers. Free, try now!',
        keywords: ['plagiarism checker', 'check plagiarism', 'AI plagiarism', 'plagiarism detector', 'free plagiarism check', 'content originality'],
    },
};

/**
 * Get optimized metadata for a tool
 */
export function getOptimizedToolMetadata(toolSlug: string): ToolMetadata | null {
    return optimizedToolMetadata[toolSlug] || null;
}

/**
 * Generate all tool slugs
 */
export function getAllToolSlugs(): string[] {
    return Object.keys(optimizedToolMetadata);
}
