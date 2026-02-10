import { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | ToolNova",
  description:
    "Get in touch with the ToolNova team for support, feedback, or partnership inquiries. We respond within 24 hours.",
  keywords: [
    "contact ToolNova",
    "ToolNova support",
    "AI tools help",
    "feedback",
  ],
  alternates: {
    canonical: "https://www.toolnovahub.com/contact",
  },
  openGraph: {
    title: "Contact Us - Get in Touch | ToolNova",
    description:
      "Get in touch with the ToolNova team for support, feedback, or partnership inquiries.",
    url: "https://www.toolnovahub.com/contact",
    type: "website",
    images: [
      {
        url: "https://www.toolnovahub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact ToolNova",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ToolNova",
    description:
      "Get in touch with the ToolNova team for support or inquiries.",
    images: ["https://www.toolnovahub.com/og-image.png"],
    creator: "@toolnovahub",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have questions about our tools or subscription plans? We're here to
          help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-6">Get in touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    Our friendly team is here to help.
                  </p>
                  <a
                    href="mailto:support@toolnovahub.com"
                    className="text-primary hover:underline font-medium"
                  >
                    support@toolnovahub.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office</h4>
                  <p className="text-muted-foreground text-sm">
                    ToolNova Inc.
                    <br />
                    123 AI Boulevard
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First name</label>
                <Input placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last name</label>
                <Input placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                placeholder="How can we help you?"
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full h-11 text-base">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
