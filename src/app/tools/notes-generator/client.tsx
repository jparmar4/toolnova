'use client';

import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import {
    BookOpen,
    ClipboardList,
    Brain,
    Lightbulb,
    Target,
    Award,
    FileText,
    Calculator,
    Pencil
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'noteStyle',
        label: 'Note Style',
        type: 'select',
        options: [
            { value: 'detailed', label: '📝 Detailed Notes' },
            { value: 'summary', label: '📋 Summary Points' },
            { value: 'outline', label: '🔢 Outline Format' },
            { value: 'cornell', label: '📚 Cornell Style' },
        ],
        defaultValue: 'detailed',
    },
    {
        id: 'subject',
        label: 'Subject',
        type: 'select',
        options: [
            { value: 'general', label: '📚 General' },
            { value: 'science', label: '🔬 Science' },
            { value: 'history', label: '📜 History' },
            { value: 'literature', label: '📖 Literature' },
            { value: 'business', label: '💼 Business' },
        ],
        defaultValue: 'general',
    },
    {
        id: 'includeKeyTerms',
        label: 'Highlight Key Terms',
        type: 'toggle',
        defaultValue: true,
    },
    {
        id: 'includeQuestions',
        label: 'Add Review Questions',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const noteStyle = options?.noteStyle || 'detailed';
    const subject = options?.subject || 'general';
    const includeKeyTerms = options?.includeKeyTerms !== false;
    const includeQuestions = options?.includeQuestions !== false;

    const styles: Record<string, string> = {
        detailed: 'Create comprehensive, detailed notes with full explanations and examples.',
        summary: 'Create concise bullet points with the most important takeaways.',
        outline: 'Create a numbered outline with clear sections (1, 2, 3) and sub-points (a, b, c).',
        cornell: 'Format notes with a Cues section, Main Notes section, and Summary at the bottom.',
    };

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
        '',
        'Content to create notes from:',
        input
    ].filter(line => line !== '').join('\n');
};

const faqs = [
    { question: "What note styles are available?", answer: "We offer Detailed Notes, Summary Points, Outline Format, and Cornell Style notes to match your study preferences." },
    { question: "Can I use this for any subject?", answer: "Yes! Our AI adapts to any subject including science, history, literature, business, and more." },
    { question: "How long should my input be?", answer: "You can paste anything from a few paragraphs to entire chapters. The AI will organize it effectively." },
];

const relatedTools = [
    { name: 'Flashcard Maker', slug: 'flashcard-maker', icon: Brain, color: 'text-purple-600' },
    { name: 'Quiz Generator', slug: 'quiz-generator', icon: Lightbulb, color: 'text-green-600' },
    { name: 'Chapter Summary', slug: 'chapter-summary', icon: ClipboardList, color: 'text-blue-600' },
    { name: 'Homework Solver', slug: 'homework-solver', icon: Calculator, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Paste Content', desc: 'Add your textbook or lecture content', icon: FileText, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Choose Style', desc: 'Select your preferred note format', icon: Pencil, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'Get Notes', desc: 'Receive organized study notes', icon: BookOpen, color: 'from-green-500 to-emerald-600' },
];

export default function NotesGeneratorClient() {
    return (
        <PremiumToolWrapper
            toolName="AI Notes Generator"
            toolSlug="notes-generator"
            tagline="Transform any content into perfect study notes"
            description="Paste your textbook content, lectures, or articles and get beautifully organized notes in seconds."
            badge="#1 Note-Taking Tool"
            category="Study Tools"
            categorySlug="study-tools"
            features={defaultFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "This saved me hours of note-taking! The Cornell format notes are perfect for my study sessions.",
                author: "Alex Chen",
                role: "Pre-Med Student",
                initial: "A"
            }}
            relatedTools={relatedTools}
            ctaTitle="Start Creating Better Notes"
            ctaDescription="Join thousands of students who study smarter, not harder."
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📚 Paste your textbook content, lecture notes, or article here...

Example: Copy and paste a chapter from your textbook or notes from a lecture."
                promptTemplate={generatePrompt}
                inputRows={6}
                toolSlug="notes-generator"
                toolOptions={toolOptions}
                resultLabel="📝 Your Notes"
                generateButtonText="✨ Generate Notes"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={faqs} />
            </div>
        </PremiumToolWrapper>
    );
}
