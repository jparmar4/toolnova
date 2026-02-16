import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import FlashcardMakerClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
  title: 'AI Flashcard Maker – Create Study Flashcards Free | ToolNova',
  description: 'Create perfect Q&A flashcards instantly with our free AI flashcard maker. Perfect for memorization and exam preparation.',
  keywords: ['AI flashcard maker', 'flashcard generator', 'study cards', 'quiz cards', 'Anki cards'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/flashcard-maker' },
};

export default function FlashcardMakerPage() {
    const toolData = getToolData('flashcard-maker');

    const toolSchema = getToolSchema(
        toolData?.name || 'flashcard-maker',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/flashcard-maker'
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            {toolData && (
                <>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getHowToSchema(
                        `How to use ${toolData.name}`,
                        toolData.description,
                        toolData.howItWorks.map(step => ({
                            name: step.title,
                            text: step.desc,
                            url: `https://www.toolnovahub.com/tools/flashcard-maker#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <FlashcardMakerClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="flashcard-maker" category="Study" />
        </>
    );
}
