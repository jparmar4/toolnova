"use client";

import { useState } from "react";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
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
                  Our friendly team is here to help. We reply within 24 hours.
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
                  71 Ayer Rajah Crescent
                  <br />
                  Singapore 139951
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Response time badge */}
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
          <p className="text-green-800 dark:text-green-400 text-sm font-medium">
            ⚡ Average response time: under 24 hours
          </p>
          <p className="text-green-700 dark:text-green-500 text-sm mt-1">
            Monday–Friday, 9am–6pm SGT
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {submitted ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
            <p className="text-muted-foreground max-w-xs">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours at your email address.
            </p>
            <Button
              variant="outline"
              onClick={() => setSubmitted(false)}
              className="mt-4"
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">First name</label>
                <Input id="firstName" name="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">Last name</label>
                <Input id="lastName" name="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" name="subject" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us more about your question or feedback..."
                className="min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full h-11 text-base">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
