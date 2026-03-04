'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    Search,
    FileText,
    Image as ImageIcon,
    School,
    ArrowRight,
    Merge,
    Shrink,
    FileType,
    Edit3,
    Scaling,
    Eraser,
    Crop,
    Library,
    Quote,
    Timer,
    Sparkles,
    Zap,
    ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ToolsLibrary() {
    const [activeCategory, setActiveCategory] = useState('All Tools');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { name: 'All Tools', icon: null, count: 10 },
        { name: 'PDF Tools', icon: FileText, count: 4 },
        { name: 'Image Tools', icon: ImageIcon, count: 3 },
        { name: 'Study Aids', icon: School, count: 3 },
    ];

    const tools = [
        // PDF Tools
        {
            title: 'Merge PDF',
            description: 'Combine multiple PDF files into a single document instantly.',
            icon: Merge,
            gradient: 'from-red-500 to-rose-600',
            bgLight: 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/10',
            shadowColor: 'shadow-red-500/20',
            category: 'PDF Tools',
            href: '/tools/merge-pdf',
            badge: 'Top Rated',
            badgeColor: 'bg-red-500'
        },
        {
            title: 'Compress PDF',
            description: 'Reduce file size while optimizing quality for sharing.',
            icon: Shrink,
            gradient: 'from-orange-500 to-amber-600',
            bgLight: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10',
            shadowColor: 'shadow-orange-500/20',
            category: 'PDF Tools',
            href: '/tools/compress-pdf'
        },
        {
            title: 'PDF to Word',
            description: 'Convert your PDF documents into editable Word files.',
            icon: FileType,
            gradient: 'from-blue-500 to-blue-600',
            bgLight: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/10',
            shadowColor: 'shadow-blue-500/20',
            category: 'PDF Tools',
            href: '/tools/pdf-to-word'
        },
        {
            title: 'Edit PDF',
            description: 'Add text, images, shapes and signatures to your PDF.',
            icon: Edit3,
            gradient: 'from-green-500 to-emerald-600',
            bgLight: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10',
            shadowColor: 'shadow-green-500/20',
            category: 'PDF Tools',
            href: '/tools/edit-pdf'
        },

        // Image Tools
        {
            title: 'Resize Image',
            description: 'Change image dimensions quickly by percentage or pixels.',
            icon: Scaling,
            gradient: 'from-purple-500 to-violet-600',
            bgLight: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10',
            shadowColor: 'shadow-purple-500/20',
            category: 'Image Tools',
            href: '/tools/resize-image',
            badge: 'New',
            badgeColor: 'bg-green-500'
        },
        {
            title: 'Remove Background',
            description: 'AI-powered eraser to remove backgrounds instantly.',
            icon: Eraser,
            gradient: 'from-pink-500 to-rose-600',
            bgLight: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/10',
            shadowColor: 'shadow-pink-500/20',
            category: 'Image Tools',
            href: '/tools/remove-bg',
            badge: 'AI',
            badgeColor: 'bg-purple-500'
        },
        {
            title: 'Crop Image',
            description: 'Trim edges and focus on the most important parts.',
            icon: Crop,
            gradient: 'from-indigo-500 to-purple-600',
            bgLight: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10',
            shadowColor: 'shadow-indigo-500/20',
            category: 'Image Tools',
            href: '/tools/crop-image'
        },

        // Study Aids
        {
            title: 'Flashcard Maker',
            description: 'Create digital study sets to memorize efficiently.',
            icon: Library,
            gradient: 'from-teal-500 to-cyan-600',
            bgLight: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10',
            shadowColor: 'shadow-teal-500/20',
            category: 'Study Aids',
            href: '/tools/flashcard-maker',
            badge: 'Popular',
            badgeColor: 'bg-blue-500'
        },
        {
            title: 'Citation Generator',
            description: 'Generate citations in APA, MLA, and Chicago styles.',
            icon: Quote,
            gradient: 'from-yellow-500 to-orange-600',
            bgLight: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/10',
            shadowColor: 'shadow-yellow-500/20',
            category: 'Study Aids',
            href: '/tools/citation-generator'
        },
        {
            title: 'Pomodoro Timer',
            description: 'Boost focus with a customizable study timer.',
            icon: Timer,
            gradient: 'from-cyan-500 to-blue-600',
            bgLight: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/10',
            shadowColor: 'shadow-cyan-500/20',
            category: 'Study Aids',
            href: '/tools/pomodoro-timer'
        }
    ];

    const filteredTools = tools.filter(tool =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderSection = (categoryName: string) => {
        if (activeCategory !== 'All Tools' && activeCategory !== categoryName) return null;

        const sectionTools = filteredTools.filter(t => t.category === categoryName);
        if (sectionTools.length === 0) return null;

        const categoryIcon = categories.find(c => c.name === categoryName)?.icon;

        return (
            <section className="mb-16" key={categoryName}>
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        {categoryIcon && (
                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                {/* @ts-ignore */}
                                {categoryIcon && <categoryIcon className="h-5 w-5 text-primary" />}
                            </div>
                        )}
                        <h2 className="text-foreground text-2xl font-bold">{categoryName}</h2>
                        <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-full">{sectionTools.length} tools</span>
                    </div>
                    <Link href="#" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 group">
                        View all <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sectionTools.map((tool, index) => (
                        <Link
                            href={tool.href}
                            key={tool.title}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${tool.bgLight} p-6 border border-white/50 dark:border-slate-700/50 hover:shadow-2xl ${tool.shadowColor} hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Glow effect on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Badge */}
                            {tool.badge && (
                                <div className={`absolute top-4 right-4 ${tool.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg`}>
                                    {tool.badge}
                                </div>
                            )}

                            <div className="relative">
                                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.gradient} text-white shadow-xl ${tool.shadowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <tool.icon className="h-7 w-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-foreground text-lg font-bold mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                                    <Zap className="h-3 w-3" /> Instant Results
                                </span>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-primary shadow-lg group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        );
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
            <div className="mx-auto max-w-[1200px] px-6 py-10">

                {/* Page Header */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                                <Sparkles className="h-4 w-4" /> All Tools Available
                            </div>
                            <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3">
                                Tools Library
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                                Explore our comprehensive collection of PDF, Image, and Study utilities designed for professionals.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search & Filters */}
                <div className="sticky top-[65px] z-40 mb-12 bg-white/80 dark:bg-background/80 backdrop-blur-xl py-5 -mx-6 px-6 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
                        {/* Search Bar */}
                        <div className="w-full lg:max-w-md">
                            <div className="flex w-full items-center rounded-xl h-12 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus-within:border-primary focus-within:bg-white dark:focus-within:bg-slate-900 transition-all overflow-hidden px-4">
                                <Search className="text-muted-foreground h-5 w-5 mr-3" />
                                <input
                                    className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:outline-none h-full text-base font-medium"
                                    placeholder="Search tools..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="text-muted-foreground hover:text-foreground transition-colors text-xl"
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Category Chips */}
                        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
                            {categories.map((cat) => {
                                const isActive = activeCategory === cat.name;
                                return (
                                    <button
                                        key={cat.name}
                                        onClick={() => setActiveCategory(cat.name)}
                                        className={`flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-xl px-5 transition-all duration-300 active:scale-95 font-semibold ${isActive
                                            ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/30'
                                            : 'bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
                                            }`}
                                    >
                                        {cat.icon && <cat.icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />}
                                        <span className="text-sm">{cat.name}</span>
                                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-700'}`}>
                                            {cat.count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Tool Sections */}
                {renderSection('PDF Tools')}
                {renderSection('Image Tools')}
                {renderSection('Study Aids')}

                {/* CTA Section */}
                <div className="mt-16 mb-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-dots opacity-50"></div>
                    <div className="relative">
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Can't find what you're looking for?</h3>
                        <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto">We're constantly adding new tools. Request a feature and we'll build it!</p>
                        <Button className="h-12 px-8 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-base shadow-2xl">
                            Request a Tool <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
