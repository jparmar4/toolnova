import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing Plans – Free & Pro AI Tools | ToolNova",
  description:
    "Explore ToolNova's pricing plans. Use 46+ AI tools completely free, or upgrade to Pro for unlimited access, premium AI models, and an ad-free experience. 7-day money-back guarantee.",
  keywords: [
    "ToolNova pricing",
    "AI tools free plan",
    "ToolNova Pro",
    "AI tools subscription",
    "free AI tools",
    "premium AI writing tools",
  ],
  alternates: {
    canonical: "https://www.toolnovahub.com/pricing",
  },
  openGraph: {
    title: "Pricing Plans – Free & Pro AI Tools | ToolNova",
    description:
      "Free forever plan with 46+ tools, or upgrade to Pro for unlimited access and premium AI models. 7-day money-back guarantee.",
    url: "https://www.toolnovahub.com/pricing",
    type: "website",
    images: [
      {
        url: "https://www.toolnovahub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToolNova Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing – Free & Pro Plans | ToolNova",
    description:
      "Free plan includes 46+ AI tools. Upgrade to Pro for unlimited access and premium models.",
    images: ["https://www.toolnovahub.com/og-image.png"],
    creator: "@toolnovahub",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.toolnovahub.com/pricing#webpage",
      url: "https://www.toolnovahub.com/pricing",
      name: "ToolNova Pricing Plans",
      description: "Free and Pro pricing plans for ToolNova AI tools platform.",
      isPartOf: { "@id": "https://www.toolnovahub.com/#website" },
    },
    {
      "@type": "Product",
      name: "ToolNova Pro",
      description:
        "Unlimited access to all 46+ AI tools with premium models, ad-free experience, and priority support.",
      brand: {
        "@type": "Brand",
        name: "ToolNova",
      },
      url: "https://www.toolnovahub.com/pricing",
      offers: [
        {
          "@type": "Offer",
          name: "Monthly Plan",
          priceCurrency: "USD",
          price: "9.99",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.toolnovahub.com/pricing",
        },
        {
          "@type": "Offer",
          name: "Free Plan",
          priceCurrency: "USD",
          price: "0",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.toolnovahub.com/pricing",
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <PricingClient />
    </>
  );
}
