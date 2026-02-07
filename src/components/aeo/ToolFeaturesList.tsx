import React from 'react';
import { LucideIcon, Check } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface ToolFeaturesListProps {
    features: Feature[];
    title?: string;
    className?: string;
}

/**
 * AEO-optimized Tool Features List
 * - Structured for SoftwareApplication schema
 * - Icon-based visual display
 * - Benefit-focused descriptions
 */
export function ToolFeaturesList({
    features,
    title = "Key Features",
    className = ''
}: ToolFeaturesListProps) {
    return (
        <section className={`py-12 ${className}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
                    {title}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Feature Summary for Schema */}
                <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-3">
                        <Check className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <span className="font-semibold text-purple-900 dark:text-purple-100">
                            All features included for free
                        </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        No sign-up required. Start using all features immediately with no limitations.
                    </p>
                </div>
            </div>
        </section>
    );
}
