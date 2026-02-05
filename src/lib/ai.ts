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
        { role: 'system', content: systemPrompt || 'You are a helpful AI tutor. Be clear and concise.' },
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
  homeworkSolver: "Explain this question step by step in simple student language: {input}",
  notesGenerator: "Create short, clear exam-ready notes on: {input}",
  mcqGenerator: `Create 10 MCQs with answers and explanations on: {input}. Format as:
Q1. Question text
a) Option A
b) Option B
c) Option C
d) Option D

Answer: A

Explanation: Brief explanation`,
  essayWriter: `Write a well-structured school-level essay on: {input}. Include:
- Introduction with thesis statement
- 3-4 body paragraphs with clear main ideas
- Conclusion that summarizes key points`,
  summarizer: "Summarize this text in simple bullet points: {input}",
  paraphraser: "Rewrite the following text in different words while keeping the same meaning: {input}",
  grammarFix: "Correct the grammar and improve the clarity of this text: {input}",
  speechWriter: "Write an engaging speech on: {input}. Include a strong opening, main points with examples, and a memorable conclusion.",
  emailWriter: "Write a professional email about: {input}. Include a clear subject line, greeting, body, and closing.",
  captionGenerator: "Create 5 engaging Instagram captions for: {input}. Include emojis and relevant hashtags.",
  flashcards: `Create Q&A flashcards from: {input}. Format as:
Q: [Question]
A: [Answer]

Provide at least 10 flashcards.`,
  quizGenerator: "Create a practice quiz from: {input}. Include different question types (multiple choice, true/false, short answer) with answers.",
  storyGenerator: "Write a short, engaging story about: {input}. Include interesting characters and a clear plot.",
  resumeBullet: "Create professional resume bullet points for: {input}. Use action verbs and quantify achievements where possible."
};
