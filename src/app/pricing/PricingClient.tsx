"use client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  Check,
  Star,
  Zap,
  Shield,
  Crown,
  Sparkles,
  X,
  ChevronDown,
  CreditCard,
  Users,
  Clock,
  Rocket,
  Heart,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely! You can cancel your subscription at any time from your account settings. No questions asked, no hidden fees.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets through Razorpay — India's most trusted payment gateway.",
  },
  {
    q: "Do I get a refund if I cancel?",
    a: "We offer a 7-day money-back guarantee. If you're not satisfied within the first 7 days, we'll refund your payment in full.",
  },
  {
    q: "What happens when my subscription ends?",
    a: "You'll be downgraded to the Free plan automatically. All your data remains safe, and you can upgrade again anytime.",
  },
  {
    q: "Is my data safe with ToolNova?",
    a: "Your privacy is our priority. We don't store your generated content, and all communications are encrypted with industry-standard SSL.",
  },
];

const testimonials = [
  {
    name: "Aarav S.",
    role: "Engineering Student",
    text: "ToolNova Pro saved me hours on assignments. The AI quality is incredible!",
    avatar: "A",
  },
  {
    name: "Priya M.",
    role: "Content Creator",
    text: "Worth every rupee. The premium models produce content that's indistinguishable from human writing.",
    avatar: "P",
  },
  {
    name: "Rahul K.",
    role: "MBA Student",
    text: "The ad-free experience alone is worth it. Plus the speed is 10x faster on Pro!",
    avatar: "R",
  },
  {
    name: "Sneha G.",
    role: "Digital Marketer",
    text: "I use the copy generation tools daily. It paid for itself in the first week.",
    avatar: "S",
  },
  {
    name: "Vikram R.",
    role: "Freelance Write",
    text: "The formatting options in Pro are a lifesaver. Highly recommended.",
    avatar: "V",
  },
  {
    name: "Ananya P.",
    role: "Researcher",
    text: "Access to Claude Opus through this interface is much cheaper than a direct sub.",
    avatar: "A",
  },
];

const comparisonFeatures = [
  {
    feature: "AI Tools Access",
    free: "Basic with limited access",
    pro: "Premium unlimited",
  },
  {
    feature: "AI Model",
    free: "GPT 5",
    pro: "GPT 5.2, Claude Opus 4.6, Gemini 3 Pro",
  },
  { feature: "Daily Generations", free: "5/day", pro: "Unlimited" },
  {
    feature: "Processing Speed",
    free: "Standard",
    pro: "Priority (10x faster)",
  },
  { feature: "Image Generation", free: "Basic", pro: "4K HD" },
  { feature: "Ads", free: "Yes", pro: "Ad-free" },
  { feature: "Export Options", free: "PDF/PNG", pro: "All formats" },
  { feature: "Support", free: "Community", pro: "Priority 24/7" },
];

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={cn(
        "relative transition-all duration-200 ease-linear",
        className,
      )}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export default function PricingClient() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();
  const { data: session } = useSession();

  // Mouse follower logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const loadScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const startSubscription = async (planId: string) => {
    if (!session) {
      router.push("/login");
      return;
    }

    const resScript = await loadScript();
    if (!resScript) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      const res = await fetch("/api/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });

      const sub = await res.json();
      if (!sub.id) {
        alert("Could not create subscription. Please try again.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: sub.id,
        name: "Tool Nova Hub",
        description: "Pro Access Subscription",
        handler: async function (response: any) {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();
          if (verifyData.success || verifyRes.ok) {
            alert("Subscription Started 🎉");
          } else {
            alert(
              "Subscription verification pending. It will be active shortly.",
            );
          }
        },
        theme: { color: "#6366f1" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Subscription Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] pt-24 pb-20 relative overflow-hidden selection:bg-primary/20">
      {/* Dynamic Mouse Background */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-40 dark:opacity-20"
        style={{
          background: useMotionTemplate`
                        radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)
                    `,
        }}
      />

      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-15%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-transparent blur-[140px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 transform perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl shadow-black/5 mb-8"
          >
            <Crown className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Unlock Premium Power
            </span>
            <Sparkles className="h-4 w-4 text-amber-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            <span className="text-foreground drop-shadow-sm">Limitless</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-4 inline-block drop-shadow-2xl">
              Possibilities
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
          >
            Join the elite community of{" "}
            <span className="text-foreground font-bold underline decoration-indigo-500/30">
              10,000+ creators
            </span>{" "}
            leveraging our most advanced AI models.
          </motion.p>
        </div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center mb-24"
        >
          <div className="relative p-1.5 bg-muted/40 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-10 py-3.5 rounded-full text-base font-bold transition-all duration-300 relative z-10",
                !isYearly
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-10 py-3.5 rounded-full text-base font-bold transition-all duration-300 relative z-10",
                isYearly
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Yearly
            </button>
            <motion.div
              layout
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg shadow-indigo-500/30"
              style={{ left: isYearly ? "calc(50% + 3px)" : "6px" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </motion.div>

        {/* Pricing Cards with 3D Tilt */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto mb-32 px-4">
          {/* Free Plan */}
          <TiltCard className="group">
            <div className="h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/20 dark:border-white/5 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:border-indigo-500/20">
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Starter
                  </span>
                </div>
              </div>

              <h3 className="text-4xl font-bold mb-2">Free</h3>
              <p className="text-muted-foreground mb-8">
                Essential tools for casual users
              </p>

              <div className="flex items-baseline mb-10">
                <span className="text-6xl font-black text-foreground tracking-tighter">
                  $0
                </span>
                <span className="text-xl text-muted-foreground font-medium ml-2">
                  /mo
                </span>
              </div>

              <Button
                variant="outline"
                className="w-full h-16 rounded-2xl text-lg font-bold border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all mb-10"
                onClick={() => router.push("/tools")}
              >
                Get Started
              </Button>

              <div className="space-y-4">
                {comparisonFeatures.slice(0, 5).map((f, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <Check className="h-3.5 w-3.5 text-gray-500" />
                    </div>
                    <span className="text-muted-foreground font-medium group-hover/item:text-foreground transition-colors">
                      {f.free}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>

          {/* Pro Plan */}
          <TiltCard className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.6rem] opacity-70 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 animate-pulse" />
            <div className="relative h-full bg-[#0a0a0c] rounded-[2.5rem] p-10 border border-white/10 overflow-hidden">
              {/* Glass Glare */}
              <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <div className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 shadow-inner shadow-indigo-500/10">
                    <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">
                      MOST POPULAR
                    </span>
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-white mb-2">
                  Pro Access
                </h3>
                <p className="text-gray-400 mb-8">
                  Ultimate power for power users
                </p>

                <div className="flex items-baseline mb-2">
                  <span className="text-6xl font-black text-white tracking-tighter">
                    ${isYearly ? "29.99" : "2.99"}
                  </span>
                  <span className="text-xl text-gray-500 font-medium ml-2">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-emerald-400 text-sm font-bold mb-8 animate-pulse">
                    Save 20% with annual billing
                  </p>
                )}
                {!isYearly && <div className="mb-8 h-5" />}

                <Button
                  className="w-full h-16 rounded-2xl text-lg font-bold bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5 mb-10"
                  onClick={() =>
                    startSubscription(
                      isYearly ? "plan_SEPrpn71jkiE0u" : "plan_SEPqtQNsEaZpDB",
                    )
                  }
                >
                  Upgrade Now
                </Button>

                <div className="space-y-4">
                  {comparisonFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <Check
                          className="h-3.5 w-3.5 text-indigo-400"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors">
                        {f.pro}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Infinite Marquee Testimonials */}
        <div className="mb-32 overflow-hidden py-10 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-[#050505] to-transparent z-10" />

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Loved by 10,000+ Creators
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[350px] p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground/90 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={false}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  openFaq === i
                    ? "bg-white/50 dark:bg-white/5 border-indigo-500/50 shadow-lg"
                    : "bg-transparent border-black/5 dark:border-white/5 hover:bg-white/30 dark:hover:bg-white/5",
                )}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="text-lg font-bold">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      openFaq === i && "rotate-180 text-indigo-500",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center bg-[#0a0a0c]">
          <div className="absolute inset-0 bg-pattern-noise opacity-20" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/20 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <Rocket className="h-16 w-16 text-white mx-auto mb-8 animate-bounce" />
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Ready to launch?
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Join the growing community of creators who are scaling their
              productivity with ToolNova Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() =>
                  startSubscription(
                    isYearly ? "plan_SEPrpn71jkiE0u" : "plan_SEPqtQNsEaZpDB",
                  )
                }
                className="h-16 px-12 rounded-2xl text-xl font-bold bg-white text-black hover:bg-gray-100 hover:scale-[1.05] transition-all shadow-2xl"
              >
                Get Instant Access
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-500">
              7-day money-back guarantee • Cancel details in 1-click
            </p>
          </div>
        </div>

        {/* Support Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Have questions?{" "}
            <a
              href="/contact"
              className="text-primary hover:underline font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
