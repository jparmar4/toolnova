'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
    name: string;
    us: boolean | string;
    competitor1: boolean | string;
    competitor2: boolean | string;
}

const features: ComparisonFeature[] = [
    { name: 'Number of Tools', us: '30+', competitor1: '10-15', competitor2: '5-8' },
    { name: '100% Free', us: true, competitor1: false, competitor2: false },
    { name: 'No Signup Required', us: true, competitor1: false, competitor2: true },
    { name: 'Unlimited Usage', us: true, competitor1: false, competitor2: false },
    { name: 'Export to PDF/DOCX', us: true, competitor1: false, competitor2: false },
    { name: 'Generation History', us: true, competitor1: false, competitor2: false },
    { name: 'Dark Mode', us: true, competitor1: false, competitor2: true },
    { name: 'Mobile Friendly', us: true, competitor1: true, competitor2: false },
    { name: 'No Ads Interruption', us: true, competitor1: false, competitor2: false },
    { name: 'Social Sharing', us: true, competitor1: false, competitor2: false },
    { name: 'Advanced AI (GPT-4)', us: true, competitor1: true, competitor2: false },
    { name: 'Privacy Protected', us: true, competitor1: true, competitor2: true },
];

const columns = [
    {
        name: 'AI Study Tools',
        highlight: true,
        badge: 'Best Value',
        color: 'from-primary to-secondary',
    },
    {
        name: 'Competitor A',
        highlight: false,
        price: '$9.99/mo',
        color: 'from-gray-400 to-gray-500',
    },
    {
        name: 'Competitor B',
        highlight: false,
        price: '$14.99/mo',
        color: 'from-gray-400 to-gray-500',
    },
];

const FeatureCell = ({ value }: { value: boolean | string }) => {
    if (typeof value === 'boolean') {
        return value ? (
            <Check className="h-5 w-5 text-success mx-auto" />
        ) : (
            <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
        );
    }
    return <span className="font-semibold">{value}</span>;
};

export default function ComparisonTable() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container px-4 md:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16 animate-fade-in">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold">
                        Why Choose <span className="text-gradient">AI Study Tools</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Compare us with other platforms and see the difference
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="max-w-5xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            {/* Header */}
                            <thead>
                                <tr>
                                    <th className="p-4 text-left font-heading text-lg">Features</th>
                                    {columns.map((col, index) => (
                                        <th key={col.name} className="p-4 text-center relative">
                                            <div
                                                className={`rounded-t-xl p-4 ${col.highlight
                                                    ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30'
                                                    : 'bg-muted/30'
                                                    }`}
                                            >
                                                {col.highlight && (
                                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-primary text-white text-xs font-bold rounded-full shadow-glow-sm whitespace-nowrap">
                                                        {col.badge}
                                                    </div>
                                                )}
                                                <div className="font-heading text-lg font-bold mb-1">
                                                    {col.name}
                                                </div>
                                                <div className="text-sm">
                                                    {col.highlight ? (
                                                        <span className="text-success font-bold">FREE Forever</span>
                                                    ) : (
                                                        <span className="text-muted-foreground">{col.price}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody>
                                {features.map((feature, index) => (
                                    <tr
                                        key={feature.name}
                                        className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-muted/20' : ''
                                            } hover:bg-muted/40 transition-colors`}
                                    >
                                        <td className="p-4 font-medium">{feature.name}</td>
                                        <td
                                            className={`p-4 text-center ${columns[0].highlight ? 'bg-primary/5' : ''
                                                }`}
                                        >
                                            <FeatureCell value={feature.us} />
                                        </td>
                                        <td className="p-4 text-center">
                                            <FeatureCell value={feature.competitor1} />
                                        </td>
                                        <td className="p-4 text-center">
                                            <FeatureCell value={feature.competitor2} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                            {/* Footer */}
                            <tfoot>
                                <tr>
                                    <td className="p-4"></td>
                                    {columns.map((col) => (
                                        <td key={col.name} className="p-4 text-center">
                                            <div
                                                className={`rounded-b-xl p-4 ${col.highlight
                                                    ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-t-0 border-primary/30'
                                                    : 'bg-muted/30'
                                                    }`}
                                            >
                                                {col.highlight ? (
                                                    <a
                                                        href="#tools"
                                                        className="inline-block px-6 py-2 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow-sm"
                                                    >
                                                        Try Free Now
                                                    </a>
                                                ) : (
                                                    <span className="text-sm text-muted-foreground">
                                                        Limited Access
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="text-center mt-12">
                    <Card className="inline-block glass-card border-success/30 max-w-2xl">
                        <CardContent className="p-6">
                            <p className="text-lg">
                                <span className="font-bold text-success">100% Free.</span>{' '}
                                <span className="font-bold text-success">No Credit Card.</span>{' '}
                                <span className="font-bold text-success">No Limits.</span>
                                <br />
                                <span className="text-muted-foreground text-sm">
                                    Start using our premium AI tools right now - no signup required!
                                </span>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
