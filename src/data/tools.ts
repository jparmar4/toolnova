import { LucideIcon } from 'lucide-react';
import {
    FileText, Lightbulb, BookOpen, Target, List, ClipboardList,
    Pen, Calculator, Mail, Mic, Image, Quote, Repeat,
    CheckCircle, Type, GraduationCap, Layout, FileOutput
} from 'lucide-react';

export interface ToolData {
    slug: string;
    name: string;
    description: string;
    tagline: string;
    category: string;
    howItWorks: {
        step: number;
        title: string;
        desc: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const toolsData: Record<string, ToolData> = {
    "text-summarizer": {
        slug: "text-summarizer",
        name: "Text Summarizer",
        tagline: "Summarize any text in seconds",
        description: "Condense long articles, documents, and content into clear summaries at your preferred length.",
        category: "Writing Tools",
        howItWorks: [
            { step: 1, title: 'Paste Text', desc: 'Add your content or upload a file' },
            { step: 2, title: 'Set Length', desc: 'Choose summary size (Brief, Short, Detailed)' },
            { step: 3, title: 'Get Summary', desc: 'Receive your condensed content instantly' },
        ],
        faqs: [
            { question: "How short can the summary be?", answer: "Choose 'Brief' for a 1-2 sentence TL;DR version." },
            { question: "Will it preserve the main ideas?", answer: "Yes! Our AI captures the key points while condensing content." },
            { question: "Is this tool free?", answer: "Yes, the Text Summarizer is completely free to use without limits." },
        ]
    },
    "paraphraser": {
        slug: "paraphraser",
        name: "Paraphrasing Tool",
        tagline: "Rewrite text in your own voice",
        description: "Rephrase articles, sentences, and essays while avoiding plagiarism and maintaining meaning.",
        category: "Writing Tools",
        howItWorks: [
            { step: 1, title: 'Enter Text', desc: 'Paste the text you want to rewrite' },
            { step: 2, title: 'Select Mode', desc: 'Choose from Standard, Fluency, or Creative modes' },
            { step: 3, title: 'Paraphrase', desc: 'Get a unique, plagiarism-free version instantly' },
        ],
        faqs: [
            { question: "Does it change the meaning?", answer: "No, our AI is trained to preserve the original meaning while changing the wording." },
            { question: "Is the content unique?", answer: "Yes, the output is designed to be unique and pass plagiarism checks." },
        ]
    },
    "grammar-fix": {
        slug: "grammar-fix",
        name: "AI Grammar Fix",
        tagline: "Perfect your writing instantly",
        description: "Fix grammar, spelling, punctuation, and style errors with AI-powered corrections.",
        category: "Writing Tools",
        howItWorks: [
            { step: 1, title: 'Paste Text', desc: 'Add your text with errors' },
            { step: 2, title: 'Set Options', desc: 'Choose fix level (Base, Standard, Advanced)' },
            { step: 3, title: 'Get Fixed', desc: 'Receive polished, error-free text' },
        ],
        faqs: [
            { question: "What errors does it fix?", answer: "Grammar, spelling, punctuation, style issues, and awkward phrasing." },
            { question: "Can I learn from corrections?", answer: "Yes! Enable 'Show Explanations' to see what was fixed and why." },
            { question: "Is it free?", answer: "Yes, our grammar checker is 100% free to use." },
        ]
    },
    "essay-writer": {
        slug: "essay-writer",
        name: "AI Essay Writer",
        tagline: "Write professional essays in minutes",
        description: "Generate well-structured essays with introductions, body paragraphs, and conclusions on any topic.",
        category: "Writing Tools",
        howItWorks: [
            { step: 1, title: 'Enter Topic', desc: 'Type your essay topic' },
            { step: 2, title: 'Set Options', desc: 'Choose essay type and length' },
            { step: 3, title: 'Get Essay', desc: 'Receive a structured, unique essay' },
        ],
        faqs: [
            { question: "What essay types are available?", answer: "Argumentative, Expository, Narrative, Descriptive, and Persuasive essays." },
            { question: "Is this plagiarism-free?", answer: "Yes! Each essay is uniquely generated based on your topic and requirements." },
            { question: "Can I use this for school assignments?", answer: "Use it for inspiration and learning. Always add your own voice and cite sources." },
        ]
    },
};

export function getToolData(slug: string): ToolData | null {
    return toolsData[slug] || null;
}
