'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, School, Sparkles } from 'lucide-react';
import { useState, lazy, Suspense, useEffect } from 'react';
import { createClient } from "@/utils/supabase/client";

// Lazy load the mobile menu to defer Framer Motion bundle
const MobileMenu = lazy(() => import('./MobileMenu'));

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };

        checkUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
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
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="relative text-foreground text-sm font-medium leading-normal transition-colors hover:text-primary group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/tools" className="relative text-muted-foreground text-sm font-medium leading-normal transition-colors hover:text-primary group">
                            Tools
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
                                <div className="text-sm font-medium text-foreground">
                                    {user.email?.split('@')[0]}
                                </div>
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
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Lazy loaded with Framer Motion */}
            {mobileMenuOpen && (
                <Suspense fallback={null}>
                    <MobileMenu onClose={() => setMobileMenuOpen(false)} />
                </Suspense>
            )}
        </header>
    );
}

