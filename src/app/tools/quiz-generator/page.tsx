import { Metadata } from 'next';
import { getToolSchema, getHowToSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { getToolData } from '@/data/tools';
import { RelatedTools } from '@/components/RelatedTools';
import QuizGeneratorClient from './client';
import { ToolRichContent } from '@/components/ToolRichContent';

export const metadata: Metadata = {
  title: 'AI Quiz Generator – Create Practice Quizzes Free | ToolNova',
  description: 'Generate practice quizzes instantly from any topic with our free AI quiz generator. Perfect for exam prep and self-testing.',
  keywords: ['AI quiz generator', 'quiz maker', 'practice test generator', 'study quiz'],
  alternates: { canonical: 'https://www.toolnovahub.com/tools/quiz-generator' },
};

export default function QuizGeneratorPage() {
    const toolData = getToolData('quiz-generator');

    const toolSchema = getToolSchema(
        toolData?.name || 'quiz-generator',
        toolData?.description || '',
        'https://www.toolnovahub.com/tools/quiz-generator'
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
                            url: `https://www.toolnovahub.com/tools/quiz-generator#step-${step.step}`
                        }))
                    )) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(getFAQSchema(toolData.faqs)) }} />
                </>
            )}
            <QuizGeneratorClient />
            {toolData && (
                <ToolRichContent
                    title={toolData.name}
                    description={toolData.description}
                    steps={toolData.howItWorks}
                    benefits={toolData.benefits}
                    faq={toolData.faqs}
                />
            )}
            <RelatedTools currentTool="quiz-generator" category="Study" />
        </>
    );
}
