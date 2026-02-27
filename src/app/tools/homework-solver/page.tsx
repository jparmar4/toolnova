import { Metadata } from 'next';
import Link from 'next/link';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import HomeworkSolverClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
    title: 'AI Homework Solver – Get Instant Homework Help Free | ToolNova',
    description: 'Get step-by-step solutions to any homework problem with our free AI homework solver. Supports Math, Science, History, English, Programming and more. Perfect for students of all grades.',
    keywords: ['AI homework solver', 'homework help', 'math solver', 'study help', 'homework answers', 'step by step solutions', 'math homework help', 'science homework help', 'free homework solver', 'AI tutor'],
    alternates: { canonical: 'https://www.toolnovahub.com/tools/homework-solver' },
    openGraph: {
        title: 'AI Homework Solver – Get Instant Homework Help Free',
        description: 'Get step-by-step solutions to any homework problem. Math, Science, History, English & more.',
        url: 'https://www.toolnovahub.com/tools/homework-solver',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Homework Solver – Free Homework Help',
        description: 'Get step-by-step solutions to any homework problem with AI.',
    },
};

export default function HomeworkSolverPage() {
    const toolData = getToolData('homework-solver');

    const toolSchema = getToolSchema(
        toolData?.name || 'homework-solver',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/homework-solver'
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(toolSchema) }} />
            {toolData && (
                <>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: schemaToJsonLd(getHowToSchema(
                            `How to use ${toolData.name}`,
                            toolData.description,
                            toolData.howItWorks.map(step => ({
                                name: step.title,
                                text: step.desc,
                                url: `https://www.toolnovahub.com/tools/homework-solver#step-${step.step}`
                            }))
                        ))
                    }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <HomeworkSolverClient />
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

            <RelatedTools currentTool="homework-solver" category="Study" />
        </>
    );
}
