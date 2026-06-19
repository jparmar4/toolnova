'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface MobileMenuProps {
    onClose: () => void;
    id?: string;
}

export default function MobileMenu({ onClose, id }: MobileMenuProps) {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-[#1a1f2e]/95 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden md:hidden"
        >
            <div className="flex flex-col p-6 gap-1">
                <Link href="/" onClick={onClose} className="text-foreground font-medium py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Home</Link>
                <Link href="/tools" onClick={onClose} className="text-muted-foreground font-medium py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Tools</Link>
                <Link href="/blog" onClick={onClose} className="text-muted-foreground font-medium py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Blog</Link>
                <Link href="/pricing" onClick={onClose} className="text-muted-foreground font-medium py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Pricing</Link>

                <Link href="/login" onClick={onClose} className="text-muted-foreground font-medium py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Login</Link>
                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                    <Link href="/signup" onClick={onClose} className="w-full">
                        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white font-bold h-12 rounded-xl shadow-lg shadow-primary/25 transition-all">
                            <Sparkles className="h-4 w-4" /> Get Started Free
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
