'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UsageCounter } from '@/components/UsageCounter';
import { Menu, X, School, Sparkles, Sun, Moon, LayoutDashboard } from 'lucide-react';
import { useState, lazy, Suspense, useEffect } from 'react';
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { AnimatePresence } from "framer-motion";

// Lazy load the mobile menu to defer Framer Motion bundle
const MobileMenu = lazy(() => import('./MobileMenu'));

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: session, status } = useSession();
    const user = session?.user;
    const loading = status === "loading";
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#1a1f2e]/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 transition-all duration-300">
            <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-105 transition-all duration-300">
                            <School className="h-6 w-6" strokeWidth={2.5} />
                        </div>
                        <h2 className="text-foreground text-xl font-bold leading-tight tracking-tight">ToolNova</h2>
                    </Link>
                </div>

                {/* Desktop Navigation & Actions */}
                <div className="flex flex-1 justify-end gap-8">
                    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                        <Link href="/" className="relative text-foreground text-sm font-medium leading-normal transition-colors hover:text-primary group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/tools" className="relative text-muted-foreground text-sm font-medium leading-normal transition-colors hover:text-primary group">
                            Tools
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/blog" className="relative text-muted-foreground text-sm font-medium leading-normal transition-colors hover:text-primary group">
                            Blog
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/pricing" className="relative text-muted-foreground text-sm font-medium leading-normal transition-colors hover:text-primary group">
                            Pricing
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        {!loading && !user && (
                            <Link href="/login" className="relative text-muted-foreground text-sm font-medium leading-normal transition-colors hover:text-primary group">
                                Login
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        )}
                    </nav>

                    <div className="hidden md:flex gap-3">
                        {loading ? (
                            <div className="h-10 w-24 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
                        ) : user ? (
                            <div className="flex items-center gap-4">
                                <UsageCounter />
                                <Link 
                                    href="/dashboard"
                                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-800"
                                >
                                    <LayoutDashboard className="h-4 w-4" />
                                    <span className="hidden lg:inline">Dashboard</span>
                                </Link>
                                <Button
                                    onClick={handleSignOut}
                                    variant="outline"
                                    className="h-9 px-4 rounded-xl border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 text-sm font-medium"
                                >
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <Link href="/signup">
                                <button className="flex items-center justify-center gap-2 overflow-hidden rounded-xl h-10 px-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 text-white text-sm font-bold leading-normal">
                                    <Sparkles className="h-4 w-4" />
                                    <span>Get Started</span>
                                </button>
                            </Link>
                        )}

                        {/* Dark Mode Toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Lazy loaded with Framer Motion */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <Suspense fallback={null}>
                        <MobileMenu onClose={() => setMobileMenuOpen(false)} id="mobile-menu" />
                    </Suspense>
                )}
            </AnimatePresence>
        </header>
    );
}

