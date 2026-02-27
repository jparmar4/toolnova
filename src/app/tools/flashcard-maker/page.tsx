import { Metadata } from 'next';
import Link from 'next/link';
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
  openGraph: {
    title: 'AI Flashcard Maker – Create Study Flashcards Free | ToolNova',
    description: 'Create perfect Q&A flashcards instantly with our free AI flashcard maker.',
    url: 'https://www.toolnovahub.com/tools/flashcard-maker',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Flashcard Maker Free | ToolNova',
    description: 'Generate study flashcards instantly for memorization and exam prep.',
  },
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


      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-xl font-semibold mb-3">Related guides and tools</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/tools" className="underline underline-offset-4">All AI tools</Link>
          <Link href="/tools/writing-tools" className="underline underline-offset-4">Writing tools</Link>
          <Link href="/tools/study-tools" className="underline underline-offset-4">Study tools</Link>
          <Link href="/blog" className="underline underline-offset-4">Blog guides</Link>
        </div>
      </section>

            <RelatedTools currentTool="flashcard-maker" category="Study" />
        </>
    );
}
