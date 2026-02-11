import { Metadata } from "next";
import { ToolsClient } from "./client";

export const metadata: Metadata = {
  title: "All Free AI Tools - 50+ Writing, Study, PDF & Career Tools | ToolNova",
  description: "Explore 50+ free AI-powered tools for study, writing, exam prep, image editing, PDF management, and career development. No sign-up required.",
  keywords: [
    "free AI tools",
    "online tools",
    "study tools",
    "writing tools",
    "PDF tools",
    "career tools",
    "AI productivity",
    "ToolNova",
  ],
  alternates: {
    canonical: "https://www.toolnovahub.com/tools",
  },
  openGraph: {
    title: "All Free AI Tools - 50+ Writing, Study, PDF & Career Tools | ToolNova",
    description: "Explore 50+ free AI-powered tools for study, writing, exam prep, image editing, PDF management, and career development.",
    url: "https://www.toolnovahub.com/tools",
    type: "website",
    images: [
      {
        url: "https://www.toolnovahub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToolNova - All Free AI Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free AI Tools - 50+ Tools | ToolNova",
    description: "Explore 50+ free AI-powered tools. No sign-up required.",
    images: ["https://www.toolnovahub.com/og-image.png"],
    creator: "@toolnovahub",
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}

