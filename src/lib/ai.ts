import OpenAI from 'openai';
import { getCachedResponse, cacheResponse } from './cache';

export const MODEL_FREE = 'gpt-5-nano';
export const MODEL_PREMIUM = 'gpt-5-mini';

interface AIResponse {
  success: boolean;
  content?: string;
  error?: string;
}

/**
 * Universal AI function for all tools
 * This function handles all AI-powered tools using OpenAI directly
 */
export async function runAI(
  prompt: string,
  systemPrompt?: string,
  model: string = MODEL_FREE
): Promise<AIResponse> {
  try {
    // 1. Check Cache
    const cacheKey = `${model}:${prompt}`;
    const cached = await getCachedResponse(cacheKey);
    if (cached) {
      console.log('AI: Cache hit for key:', cacheKey);
      return { success: true, content: cached };
    }
    console.log('AI: Cache miss, calling Provider');

    // 2. Determine Provider
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not defined');
    }

    console.log('AI: Using OpenAI Direct Provider');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: 'system',
          content:
            systemPrompt ||
            [
              'You are a helpful assistant for a global English audience.',
              'Write in simple, clear language. Be direct and on-topic.',
              'Keep the answer short: usually 4-10 lines, unless the user clearly asks for more.',
              'Avoid long introductions, repetition, and filler.',
              'Use plain text (no Markdown).',
              'Prefer this structure when it fits:',
              'FINAL ANSWER: <one line>',
              'WORKING: <3-6 short numbered steps or bullets if needed>',
              'QUICK CHECK: <one line, if applicable>',
              'LEARNING TIP: <one short reusable idea>',
              'Do not add practice questions, long motivational endings, or extra sections unless the user asks or the tool explicitly requires it.'
            ].join('\n')
        },
        { role: 'user', content: prompt }
      ],
    });

    const responseContent = completion.choices[0]?.message?.content || null;

    // 3. Handle Response
    console.log('AI: Response received', {
      hasResponse: !!responseContent,
      responseLength: responseContent?.length,
      firstChars: responseContent?.substring(0, 50)
    });

    if (!responseContent || responseContent.trim().length === 0) {
      return {
        success: false,
        error: 'Empty response from AI'
      };
    }

    // 4. Cache the result for future use
    await cacheResponse(cacheKey, responseContent);

    return {
      success: true,
      content: responseContent
    };
  } catch (error) {
    console.error('AI Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'AI generation failed'
    };
  }
}

/**
 * Prompt templates for different tools
 */
export const promptTemplates = {
  homeworkSolver: "Solve this problem in simple language with short steps: {input}",
  notesGenerator: "Create short, clear study notes on: {input}",
  mcqGenerator: `Create 10 MCQs on: {input}. Use this format:
Q1. Question text
a) Option A
b) Option B
c) Option C
d) Option D

Answer: A

Explanation: Brief explanation`,
  essayWriter: `Write a well-structured essay on: {input}. Use: Introduction, 3 body paragraphs, Conclusion. End with one short writing tip.`,
  summarizer: "Summarize this text in clear, simple points: {input}",
  paraphraser: "Paraphrase the text while keeping the meaning the same: {input}",
  grammarFix: "Fix grammar and improve clarity. Keep the original meaning: {input}",
  speechWriter: "Write a clear speech on: {input}. Use: Opening, 2-4 main points, Closing. End with one delivery tip.",
  emailWriter: "Write a professional email about: {input}. Include: Subject, Greeting, Body, Closing.",
  captionGenerator: "Create 5 short captions for: {input}. Keep them engaging and platform-friendly. Add hashtags only if requested.",
  flashcards: `Create at least 10 flashcards from: {input}. Format as:
Q: [Question]
A: [Answer]

Keep answers short and clear.`,
  quizGenerator: "Create a practice quiz from: {input}. Include a mix of question types and an answer key at the end.",
  storyGenerator: "Write a short story about: {input}. Keep it clear and engaging.",
  resumeBullet: "Write resume bullet points for: {input}. Use action verbs and add numbers/impact when possible."
};
