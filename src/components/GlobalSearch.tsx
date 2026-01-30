'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles, Calculator, PenLine, BookOpen } from 'lucide-react';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';

interface Tool {
    name: string;
    href: string;
    description: string;
    category: string;
    icon: 'sparkles' | 'pen' | 'book' | 'calculator';
}

const tools: Tool[] = [
    // AI Study Tools
    { name: 'AI Homework Solver', href: '/tools/homework-solver', description: 'Step-by-step explanations', category: 'AI Study Tools', icon: 'sparkles' },
    { name: 'AI Notes Generator', href: '/tools/notes-generator', description: 'Exam-ready notes', category: 'AI Study Tools', icon: 'sparkles' },
    { name: 'MCQ Generator', href: '/tools/mcq-generator', description: 'Practice questions', category: 'AI Study Tools', icon: 'sparkles' },
    { name: 'Text Summarizer', href: '/tools/text-summarizer', description: 'Quick summaries', category: 'AI Study Tools', icon: 'sparkles' },
    { name: 'Flashcard Maker', href: '/tools/flashcard-maker', description: 'Study flashcards', category: 'AI Study Tools', icon: 'sparkles' },
    { name: 'Quiz Generator', href: '/tools/quiz-generator', description: 'Practice quizzes', category: 'AI Study Tools', icon: 'sparkles' },

    // Writing Tools
    { name: 'Essay Writer', href: '/tools/essay-writer', description: 'Structured essays', category: 'Writing Tools', icon: 'pen' },
    { name: 'Paraphraser', href: '/tools/paraphraser', description: 'Rewrite content', category: 'Writing Tools', icon: 'pen' },
    { name: 'Grammar Fix', href: '/tools/grammar-fix', description: 'Correct grammar', category: 'Writing Tools', icon: 'pen' },
    { name: 'Speech Writer', href: '/tools/speech-writer', description: 'Engaging speeches', category: 'Writing Tools', icon: 'pen' },
    { name: 'Email Writer', href: '/tools/email-writer', description: 'Professional emails', category: 'Writing Tools', icon: 'pen' },
    { name: 'Caption Generator', href: '/tools/caption-generator', description: 'Social captions', category: 'Writing Tools', icon: 'pen' },

    // Creative Tools
    { name: 'Story Generator', href: '/tools/story-generator', description: 'Creative stories', category: 'Creative Tools', icon: 'book' },
    { name: 'Resume Bullets', href: '/tools/resume-bullets', description: 'Resume points', category: 'Creative Tools', icon: 'book' },

    // Utility Tools
    { name: 'Word Counter', href: '/tools/word-counter', description: 'Count words', category: 'Utility Tools', icon: 'calculator' },
    { name: 'Character Counter', href: '/tools/character-counter', description: 'Count characters', category: 'Utility Tools', icon: 'calculator' },
    { name: 'Case Converter', href: '/tools/case-converter', description: 'Convert text case', category: 'Utility Tools', icon: 'calculator' },
    { name: 'Age Calculator', href: '/tools/age-calculator', description: 'Calculate age', category: 'Utility Tools', icon: 'calculator' },
];

const iconMap = {
    sparkles: Sparkles,
    pen: PenLine,
    book: BookOpen,
    calculator: Calculator,
};

export function GlobalSearch() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const groupedTools = tools.reduce((acc, tool) => {
        if (!acc[tool.category]) {
            acc[tool.category] = [];
        }
        acc[tool.category].push(tool);
        return acc;
    }, {} as Record<string, Tool[]>);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground bg-background/60 hover:bg-muted/40 rounded-full transition-colors duration-200 border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/15"
            >
                <Search className="h-4 w-4" />
                <span className="hidden md:inline">Search tools...</span>
                <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded-full border border-border/60 bg-background px-2 font-mono text-[10px] font-medium text-muted-foreground">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search for tools..." />
                <CommandList>
                    <CommandEmpty>No tools found.</CommandEmpty>
                    {Object.entries(groupedTools).map(([category, categoryTools]) => (
                        <CommandGroup key={category} heading={category}>
                            {categoryTools.map((tool) => {
                                const Icon = iconMap[tool.icon];
                                return (
                                    <CommandItem
                                        key={tool.href}
                                        value={`${tool.name} ${tool.description} ${tool.category}`}
                                        onSelect={() => {
                                            router.push(tool.href);
                                            setOpen(false);
                                        }}
                                        className="cursor-pointer"
                                    >
                                        <Icon className="mr-2 h-4 w-4 text-primary" />
                                        <div className="flex flex-col">
                                            <span className="font-medium">{tool.name}</span>
                                            <span className="text-xs text-muted-foreground">{tool.description}</span>
                                        </div>
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
}
