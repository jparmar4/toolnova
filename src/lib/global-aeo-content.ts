/**
 * Global AEO content for homepage and category pages
 * Voice-optimized content for site-wide queries
 */

import { LucideIcon } from 'lucide-react';

export interface GlobalAEOContent {
    quickAnswer: {
        question: string;
        answer: string;
    };
    faqs: Array<{
        question: string;
        answer: string;
    }>;
}

export const homepageAEO: GlobalAEOContent = {
    quickAnswer: {
        question: 'What is ToolNova?',
        answer: 'ToolNova is a free online platform offering 44 AI-powered tools for students, professionals, and content creators. It includes PDF tools, image editors, AI writing assistants, study aids, and productivity tools—all completely free with no sign-up required.',
    },
    faqs: [
        {
            question: 'Is ToolNova really free?',
            answer: 'Yes, ToolNova is 100% free to use. All 44 tools are available without any subscription, payment, or sign-up requirements. You can use any tool as many times as you need, completely free.',
        },
        {
            question: 'Do I need to create an account?',
            answer: 'No account is required! You can start using any tool immediately without signing up. Your privacy is important to us, so we don\'t require personal information to use our tools.',
        },
        {
            question: 'What types of tools does ToolNova offer?',
            answer: 'ToolNova offers 6 main categories: Study Tools (homework solver, flashcards, notes), Writing Tools (essay writer, paraphraser, grammar fix), Exam Prep (vocabulary, synonyms), PDF Tools (merge, split, compress), Image Tools (resize, convert), and Career Tools (resume, cover letters).',
        },
        {
            question: 'Are the tools AI-powered?',
            answer: 'Yes! Many of our tools use advanced AI technology for intelligent results. Our AI writing tools, homework solver, and content generators leverage machine learning to provide accurate, context-aware outputs.',
        },
        {
            question: 'Is my data secure on ToolNova?',
            answer: 'Absolutely. We prioritize your privacy and security. All uploaded files are automatically deleted after processing. We don\'t store your data, and all processing happens securely with encryption.',
        },
        {
            question: 'Can I use ToolNova on mobile?',
            answer: 'Yes! ToolNova is fully responsive and works perfectly on smartphones, tablets, and desktop computers. All tools are optimized for mobile use with touch-friendly interfaces.',
        },
    ],
};

export const categoryAEO: Record<string, GlobalAEOContent> = {
    'study-tools': {
        quickAnswer: {
            question: 'What are ToolNova study tools?',
            answer: 'ToolNova study tools are AI-powered learning aids including homework solver, flashcard maker, notes generator, quiz creator, and concept explainer. These free tools help students study more efficiently, prepare for exams, and understand complex topics with step-by-step explanations.',
        },
        faqs: [
            {
                question: 'What study tools are available?',
                answer: 'We offer 11 study tools including Homework Solver, Flashcard Maker, Notes Generator, Quiz Generator, MCQ Generator, Concept Explainer, Diagram Explainer, Doubt Solver, Formula Generator, Revision Planner, and Timetable Generator.',
            },
            {
                question: 'Are the study tools suitable for all grade levels?',
                answer: 'Yes! Our study tools work for elementary, middle school, high school, and college students. The AI adapts to your academic level and provides appropriate explanations and content.',
            },
            {
                question: 'Can the homework solver show step-by-step solutions?',
                answer: 'Yes, the Homework Solver provides detailed step-by-step explanations for math, science, and other subjects. It teaches you the problem-solving method, not just the answer.',
            },
        ],
    },
    'writing-tools': {
        quickAnswer: {
            question: 'What are ToolNova writing tools?',
            answer: 'ToolNova writing tools are AI assistants for creating essays, stories, emails, captions, and professional content. They include essay writer, paraphraser, grammar fix, text summarizer, and more—all free tools that help students and professionals write better, faster.',
        },
        faqs: [
            {
                question: 'What writing tools are available?',
                answer: 'We offer 10 writing tools including Essay Writer, Paraphraser, Grammar Fix, Text Summarizer, Email Writer, Story Generator, Caption Generator, Speech Writer, Bio Generator, and Paragraph Generator.',
            },
            {
                question: 'Is the content plagiarism-free?',
                answer: 'Yes, our AI generates unique content. However, we recommend using the tools as writing assistants—add your own voice, research, and always cite sources for academic work.',
            },
            {
                question: 'Can I use these for professional writing?',
                answer: 'Absolutely! Our writing tools are perfect for professional emails, business content, cover letters, and marketing copy. The Grammar Fix and Email Writer are especially popular for professional use.',
            },
        ],
    },
    'exam-prep-tools': {
        quickAnswer: {
            question: 'What are ToolNova exam prep tools?',
            answer: 'ToolNova exam prep tools help students prepare for tests with vocabulary builders, synonym finders, idioms and phrases guides, and one-word substitution tools. These free resources improve language skills and help students excel in English exams and competitive tests.',
        },
        faqs: [
            {
                question: 'What exam prep tools are available?',
                answer: 'We offer 5 exam prep tools: Vocabulary Builder, Synonym Finder, Antonym Finder, Idioms and Phrases, and One Word Substitution. These tools are perfect for SAT, GRE, TOEFL, and other competitive exams.',
            },
            {
                question: 'How does the vocabulary builder work?',
                answer: 'The Vocabulary Builder helps you learn new words with definitions, examples, and usage in context. It\'s designed to expand your vocabulary for exams, essays, and professional communication.',
            },
        ],
    },
    'image-pdf-tools': {
        quickAnswer: {
            question: 'What are ToolNova PDF and image tools?',
            answer: 'ToolNova offers free PDF tools (merge, split, compress) and image tools (resize, convert JPG/PNG, compress). These utilities help students and professionals manage documents and images without quality loss—no watermarks, no file size limits, completely free.',
        },
        faqs: [
            {
                question: 'What PDF tools are available?',
                answer: 'We offer Merge PDF, Split PDF, Compress PDF, and Image to PDF converter. All tools are free with no file size limits or watermarks.',
            },
            {
                question: 'What image tools are available?',
                answer: 'We offer Image Compressor, JPG to PNG converter, and PNG to JPG converter. All tools preserve image quality while optimizing file size.',
            },
            {
                question: 'Is there a file size limit?',
                answer: 'No! You can process PDFs and images of any size. Our tools handle small documents and large files equally well without compression or quality loss.',
            },
        ],
    },
    'utility-tools': {
        quickAnswer: {
            question: 'What are ToolNova utility tools?',
            answer: 'ToolNova utility tools include word counter, character counter, case converter, text simplifier, and age calculator. These free productivity tools help students and professionals with everyday tasks like counting words, changing text case, and simplifying complex content.',
        },
        faqs: [
            {
                question: 'What utility tools are available?',
                answer: 'We offer 6 utility tools: Word Counter, Character Counter, Case Converter, Text Simplifier, Text Summarizer, and Age Calculator. These tools help with writing, editing, and productivity.',
            },
            {
                question: 'Does the word counter show reading time?',
                answer: 'Yes! The Word Counter shows word count, character count, sentence count, paragraph count, and estimated reading time for your text.',
            },
        ],
    },
    'career-tools': {
        quickAnswer: {
            question: 'What are ToolNova career tools?',
            answer: 'ToolNova career tools help with job applications and professional development. They include cover letter writer, interview question generator, resume bullet points, goal planner, and productivity tools—all free resources to advance your career and ace job interviews.',
        },
        faqs: [
            {
                question: 'What career tools are available?',
                answer: 'We offer 6 career tools: Cover Letter Writer, Interview Generator, Resume Bullets, Goal Planner, Todo List Generator, and Revision Planner. These tools help with job applications and professional productivity.',
            },
            {
                question: 'Can the cover letter writer customize for different jobs?',
                answer: 'Yes! The Cover Letter Writer creates tailored cover letters based on the job description and your experience. It adapts the tone and content for different industries and positions.',
            },
        ],
    },
};

/**
 * Get AEO content for homepage
 */
export function getHomepageAEO(): GlobalAEOContent {
    return homepageAEO;
}

/**
 * Get AEO content for a category page
 */
export function getCategoryAEO(categorySlug: string): GlobalAEOContent {
    return categoryAEO[categorySlug] || homepageAEO;
}
