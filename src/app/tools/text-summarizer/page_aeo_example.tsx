/**
 * Example: Text Summarizer Tool Page with Full AEO Implementation
 * This demonstrates how to integrate all AEO components and schema
 */

import { Metadata } from 'next';
import { QuickAnswerBox } from '@/components/aeo/QuickAnswerBox';
import { HowItWorksSection } from '@/components/aeo/HowItWorksSection';
import { FAQAccordion } from '@/components/aeo/FAQAccordion';
import { ToolFeaturesList } from '@/components/aeo/ToolFeaturesList';
import { getComprehensiveToolSchema, getSpeakableSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolAEOContent } from '@/lib/tool-aeo-content';
import { getVoiceSearchAnswer } from '@/lib/voice-search-content';

export const metadata: Metadata = {
    title: 'Free AI Text Summarizer | Summarize Documents Instantly',
    description: 'Summarize long documents, articles, and research papers with our free AI text summarizer. Get concise summaries in seconds. No sign-up required.',
    keywords: ['text summarizer', 'AI summarizer', 'document summarizer', 'free summarizer'],
};

export default function TextSummarizerPage() {
    // Get AEO content for this tool
    const aeoContent = getToolAEOContent('text-summarizer');
    const voiceAnswer = getVoiceSearchAnswer('what-is-text-summarizer');

    // Generate comprehensive schema (SoftwareApplication + HowTo + FAQ)
    const toolSchema = getComprehensiveToolSchema(
        'Text Summarizer',
        'AI-powered tool to summarize long documents into concise summaries',
        'https://www.toolnovahub.com/tools/text-summarizer',
        [
            'AI-powered text analysis',
            'Instant summarization',
            'Adjustable summary length',
            'Preserves context and meaning',
            'Supports multiple document types',
        ],
        aeoContent?.howItWorks.map(step => ({
            name: step.title,
            text: step.description,
        })) || [],
        aeoContent?.faqs || [],
        { value: '4.8', count: '1250' }
    );

    // Generate Speakable schema for voice search
    const speakableSchema = getSpeakableSchema(
        'Text Summarizer Tool',
        ['.quick-answer', '.how-it-works', '.faq-section']
    );

    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema.software) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema.howTo) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema.faq) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: schemaToJsonLd(speakableSchema) }}
            />

            <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
                {/* Hero Section */}
                <section className="py-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
                            AI Text Summarizer
                        </h1>
                        <p className="text-xl text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Summarize long documents instantly with AI. Get concise summaries in seconds.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-12">
                    {/* Quick Answer Box - AEO Optimized */}
                    {aeoContent && (
                        <div className="quick-answer">
                            <QuickAnswerBox
                                question={aeoContent.quickAnswer.question}
                                answer={aeoContent.quickAnswer.answer}
                            />
                        </div>
                    )}

                    {/* Tool Interface would go here */}
                    <div className="my-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                        <p className="text-center text-slate-600 dark:text-slate-300">
                            [Tool Interface Component Here]
                        </p>
                    </div>

                    {/* Features List - AEO Optimized */}
                    {aeoContent && (
                        <ToolFeaturesList features={aeoContent.features} />
                    )}

                    {/* How It Works - AEO Optimized with HowTo Schema */}
                    {aeoContent && (
                        <div className="how-it-works">
                            <HowItWorksSection steps={aeoContent.howItWorks} />
                        </div>
                    )}

                    {/* FAQ Accordion - AEO Optimized with FAQ Schema */}
                    {aeoContent && (
                        <div className="faq-section">
                            <FAQAccordion faqs={aeoContent.faqs} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
