import React from 'react';
import { Info } from 'lucide-react';

interface QuickAnswerBoxProps {
    question: string;
    answer: string;
    className?: string;
}

/**
 * AEO-optimized Quick Answer component
 * - Optimized for voice search (40-60 words)
 * - Featured snippet friendly
 * - Speakable content
 */
export function QuickAnswerBox({ question, answer, className = '' }: QuickAnswerBoxProps) {
    return (
        <div
            className={`bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6 md:p-8 mb-8 ${className}`}
            data-speakable="true"
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                    <Info className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {question}
                    </h2>
                    <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}
