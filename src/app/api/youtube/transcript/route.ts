import { NextRequest, NextResponse } from 'next/server';
import { YoutubeTranscript } from 'youtube-transcript';

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'YouTube URL is required' }, { status: 400 });
    }

    const transcript = await YoutubeTranscript.fetchTranscript(url);
    const text = transcript.map(t => t.text).join(' ');

    return NextResponse.json({ success: true, text });
  } catch (error: any) {
    console.error('YouTube Transcript Error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch transcript. The video might not have captions or is unavailable.' 
    }, { status: 500 });
  }
}
