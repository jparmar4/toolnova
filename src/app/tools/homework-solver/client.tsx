'use client';

import { useState } from 'react';
import ToolLayout, { ToolOption } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import Link from 'next/link';
import {
    Calculator,
    FlaskConical,
    BookOpen,
    Code2,
    Globe,
    Sparkles,
    CheckCircle2,
    Zap,
    Shield,
    Star,
    GraduationCap,
    Brain,
    Lightbulb,
    Rocket,
    Target,
    Award,
    Clock,
    Users,
    TrendingUp,
    ArrowRight
} from 'lucide-react';

const toolOptions: ToolOption[] = [
    {
        id: 'subject',
        label: 'Subject Area',
        type: 'select',
        options: [
            { value: 'math', label: '🔢 Mathematics' },
            { value: 'physics', label: '⚛️ Physics' },
            { value: 'chemistry', label: '🧪 Chemistry' },
            { value: 'biology', label: '🧬 Biology' },
            { value: 'history', label: '📜 History' },
            { value: 'english', label: '📖 English/Literature' },
            { value: 'programming', label: '💻 Programming' },
            { value: 'economics', label: '📊 Economics' },
            { value: 'geography', label: '🌍 Geography' },
            { value: 'general', label: '📚 General' },
        ],
        defaultValue: 'general',
    },
    {
        id: 'gradeLevel',
        label: 'Grade Level',
        type: 'select',
        options: [
            { value: 'elementary', label: '🎒 Elementary School' },
            { value: 'middle', label: '📓 Middle School' },
            { value: 'high', label: '🎓 High School' },
            { value: 'college', label: '🏛️ College/University' },
        ],
        defaultValue: 'high',
    },
    {
        id: 'explanation',
        label: 'Explanation Style',
        type: 'select',
        options: [
            { value: 'detailed', label: '📝 Detailed Step-by-Step' },
            { value: 'concise', label: '⚡ Concise Answer' },
            { value: 'eli5', label: '🧒 Explain Like I\'m 5' },
            { value: 'visual', label: '📊 With Visual Explanations' },
        ],
        defaultValue: 'detailed',
    },
    {
        id: 'includeExamples',
        label: 'Include Practice Problems',
        type: 'toggle',
        defaultValue: true,
    },
    {
        id: 'showFormulas',
        label: 'Show Relevant Formulas',
        type: 'toggle',
        defaultValue: true,
    },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
    const subject = options?.subject || 'general';
    const gradeLevel = options?.gradeLevel || 'high';
    const explanation = options?.explanation || 'detailed';
    const includeExamples = options?.includeExamples !== false;
    const showFormulas = options?.showFormulas !== false;

    const gradeLevelContext: Record<string, string> = {
        elementary: 'elementary school student (grades 1-5)',
        middle: 'middle school student (grades 6-8)',
        high: 'high school student (grades 9-12)',
        college: 'college/university student',
    };

    const explanationStyles: Record<string, string> = {
        detailed: 'Show the steps clearly and briefly. Number steps if needed.',
        concise: 'Give the answer and only the essential working.',
        eli5: 'Explain in very simple words, like to a child, using a simple everyday analogy if helpful.',
        visual: 'Use a small table or simple text layout if it helps understanding.',
    };

    return [
        `Solve this ${subject} problem for a ${gradeLevelContext[gradeLevel]}.`,
        explanationStyles[explanation],
        showFormulas ? 'Include any relevant equations you use.' : 'Avoid unnecessary formulas.',
        includeExamples
            ? 'At the end, add 1 short similar practice question (no answer unless asked).'
            : 'Do not add practice questions.',
        '',
        `Problem: ${input}`
    ].join('\n');
};

const faqs = [
    { question: "How accurate is the AI Homework Solver?", answer: "Our AI is highly accurate for most subjects and grade levels. However, we recommend verifying complex solutions with your teacher or textbook.", category: "accuracy" },
    { question: "What subjects are supported?", answer: "Math, Physics, Chemistry, Biology, History, English, Programming, Economics, Geography, and more!", category: "subjects" },
    { question: "Is my homework data private?", answer: "Yes! We don't store your homework problems. Each session is private and secure.", category: "privacy" },
    { question: "Can I use this for exams?", answer: "This tool is for learning and understanding concepts. Use it to study and practice!", category: "usage" },
];

const subjectCards = [
    { name: 'Mathematics', icon: Calculator, color: 'from-blue-500 to-cyan-500', bgGlow: 'bg-blue-500/20' },
    { name: 'Science', icon: FlaskConical, color: 'from-green-500 to-emerald-500', bgGlow: 'bg-green-500/20' },
    { name: 'Literature', icon: BookOpen, color: 'from-purple-500 to-pink-500', bgGlow: 'bg-purple-500/20' },
    { name: 'Coding', icon: Code2, color: 'from-orange-500 to-red-500', bgGlow: 'bg-orange-500/20' },
    { name: 'History', icon: Globe, color: 'from-amber-500 to-yellow-500', bgGlow: 'bg-amber-500/20' },
];

const stats = [
    { value: '1M+', label: 'Problems Solved', icon: Target },
    { value: '50K+', label: 'Happy Students', icon: Users },
    { value: '99%', label: 'Accuracy Rate', icon: TrendingUp },
    { value: '24/7', label: 'Available', icon: Clock },
];

export default function HomeworkSolverClient() {
    return (
        <div className="min-h-screen">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">
                    {/* Hero Content omitted breadcrumbs as they are in ToolLayout */}

                    {/* Hero Content */}
                    <div className="text-center mb-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 mb-6 animate-fade-in">
                            <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                #1 AI-Powered Study Assistant
                            </span>
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                AI Homework Solver
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                            Get instant, step-by-step solutions to any homework problem.
                            <span className="text-foreground font-semibold"> Understand concepts, ace your classes!</span>
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                    <stat.icon className="h-4 w-4 text-primary" />
                                    <span className="font-bold text-foreground">{stat.value}</span>
                                    <span className="text-muted-foreground">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Tool Section */}
            <div id="tool-input" className="relative">
                <div className="max-w-7xl mx-auto px-4">
                    <ToolLayout
                        title=""
                        description=""
                        placeholder="✍️ Enter your homework question here...

Examples:
• Solve: 2x² + 5x - 3 = 0
• Explain the process of photosynthesis
• What caused the French Revolution?
• Write a Python function to check if a number is prime"
                        promptTemplate={generatePrompt}
                        inputRows={5}
                        toolSlug="homework-solver"
                        toolOptions={toolOptions}
                        resultLabel="📚 Solution"
                        generateButtonText="🚀 Solve My Homework"
                    />
                </div>
            </div>

            {/* Subject Cards - Floating Design */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                        Works with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Every Subject</span>
                    </h2>
                    <p className="text-muted-foreground">From algebra to zoology, we've got you covered</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {subjectCards.map((subject, i) => (
                        <div
                            key={subject.name}
                            className="group relative"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className={`absolute inset-0 ${subject.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center cursor-pointer">
                                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                    <subject.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{subject.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Grid - Premium Cards */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                        Why Students <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Love Us</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800/30 group-hover:bg-transparent group-hover:border-transparent transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 transition-all">
                                <Brain className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-3 transition-colors">Step-by-Step Learning</h3>
                            <p className="text-muted-foreground group-hover:text-white/80 transition-colors">Understand the 'how' and 'why' behind every answer with crystal-clear explanations.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800/30 group-hover:bg-transparent group-hover:border-transparent transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 transition-all">
                                <Zap className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-3 transition-colors">Lightning Fast</h3>
                            <p className="text-muted-foreground group-hover:text-white/80 transition-colors">Get solutions in seconds, not hours. Perfect for last-minute study sessions!</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 border border-green-100 dark:border-green-800/30 group-hover:bg-transparent group-hover:border-transparent transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 transition-all">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-3 transition-colors">100% Free & Private</h3>
                            <p className="text-muted-foreground group-hover:text-white/80 transition-colors">No sign-up, no fees. Your homework stays completely private and secure.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works - Timeline */}
            <div className="max-w-5xl mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                        <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">3 Simple Steps</span> to Success
                    </h2>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-y-1/2 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {[
                            { step: 1, title: 'Enter Question', desc: 'Type or paste your homework problem', icon: Lightbulb, color: 'from-blue-500 to-indigo-600' },
                            { step: 2, title: 'Choose Settings', desc: 'Select subject and explanation style', icon: Target, color: 'from-purple-500 to-pink-600' },
                            { step: 3, title: 'Get Solution', desc: 'Receive detailed step-by-step answer', icon: Award, color: 'from-green-500 to-emerald-600' },
                        ].map((item, i) => (
                            <div key={i} className="relative text-center">
                                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl mb-5 relative z-10`}>
                                    <item.icon className="h-10 w-10 text-white" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-primary flex items-center justify-center text-sm font-black text-primary">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial - Gradient Card */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30"></div>
                    <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

                        <div className="relative text-center">
                            <div className="flex justify-center gap-1 mb-5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-2xl font-medium italic mb-6 leading-relaxed">
                                "This tool literally saved my grades! The step-by-step explanations helped me understand calculus concepts I've struggled with for months."
                            </p>
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-lg font-bold">
                                    S
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold">Sarah Johnson</p>
                                    <p className="text-sm text-slate-400">11th Grade Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Tools */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground">More Study Tools</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: 'Notes Generator', slug: 'notes-generator', icon: BookOpen, color: 'text-blue-600' },
                        { name: 'Flashcard Maker', slug: 'flashcard-maker', icon: Brain, color: 'text-purple-600' },
                        { name: 'Quiz Generator', slug: 'quiz-generator', icon: Lightbulb, color: 'text-green-600' },
                        { name: 'Formula Generator', slug: 'formula-generator', icon: Calculator, color: 'text-orange-600' },
                    ].map((tool) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                        >
                            <tool.icon className={`h-8 w-8 mx-auto mb-3 ${tool.color} group-hover:scale-110 transition-transform`} />
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySC0yNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                    <div className="relative">
                        <Rocket className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Ready to Ace Your Homework?</h3>
                        <p className="text-white/80 mb-6 max-w-md mx-auto">Join thousands of students getting better grades with AI-powered homework help.</p>
                        <a href="#tool-input" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors shadow-xl">
                            Start Solving Now <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            <FAQSection faqs={faqs} />
        </div>
    );
}
