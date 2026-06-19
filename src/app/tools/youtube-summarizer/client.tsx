"use strict";
"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { Youtube } from "lucide-react";

export default function YoutubeSummarizerClient() {
  const fetchAndSummarize = async (input: string) => {
    // 1. Fetch transcript from our new internal API
    const res = await fetch('/api/youtube/transcript', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: input })
    });
    
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Failed to fetch transcript');
    }

    const { text } = await res.json();
    
    // 2. We now have the transcript, we send it to the AI for summarization
    const prompt = `Please provide a highly structured and comprehensive summary of the following YouTube video transcript.\n\nTranscript: ${text.substring(0, 30000)}`;
    
    const aiRes = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, toolSlug: "youtube-summarizer" }),
    });

    if (!aiRes.ok) throw new Error("Generation failed");
    const data = await aiRes.json();
    return data.result;
  };

  return (
    <EnhancedToolLayout
      toolSlug="youtube-summarizer"
      toolName="YouTube Video Summarizer"
      placeholder="Paste a YouTube video link here (e.g., https://www.youtube.com/watch?v=...)"
      promptTemplate={fetchAndSummarize as any}
      isNonAITool={true}
      nonAIHandler={fetchAndSummarize as any}
      options={[]}
    />
  );
}
