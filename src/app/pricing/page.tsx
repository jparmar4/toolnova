"use client";

declare global {
    interface Window {
        Razorpay: any;
    }
}

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Shield, Crown, Sparkles, X, ChevronDown, CreditCard, Users, Clock, Rocket, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";

const faqs = [
    {
        q: "Can I cancel my subscription anytime?",
        a: "Absolutely! You can cancel your subscription at any time from your account settings. No questions asked, no hidden fees."
    },
    {
        q: "What payment methods are accepted?",
        a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets through Razorpay — India's most trusted payment gateway."
    },
    {
        q: "Do I get a refund if I cancel?",
        a: "We offer a 7-day money-back guarantee. If you're not satisfied within the first 7 days, we'll refund your payment in full."
    },
    {
        q: "What happens when my subscription ends?",
        a: "You'll be downgraded to the Free plan automatically. All your data remains safe, and you can upgrade again anytime."
    },
    {
        q: "Is my data safe with ToolNova?",
        a: "Your privacy is our priority. We don't store your generated content, and all communications are encrypted with industry-standard SSL."
    },
];

const testimonials = [
    { name: "Aarav S.", role: "Engineering Student", text: "ToolNova Pro saved me hours on assignments. The AI quality is incredible!", avatar: "A" },
    { name: "Priya M.", role: "Content Creator", text: "Worth every rupee. The premium models produce content that's indistinguishable from human writing.", avatar: "P" },
    { name: "Rahul K.", role: "MBA Student", text: "The ad-free experience alone is worth it. Plus the speed is 10x faster on Pro!", avatar: "R" },
];

const comparisonFeatures = [
    { feature: "AI Tools Access", free: "20+ Basic", pro: "50+ Premium" },
    { feature: "AI Model", free: "Standard", pro: "GPT-4o" },
    { feature: "Daily Generations", free: "10/day", pro: "Unlimited" },
    { feature: "Processing Speed", free: "Standard", pro: "Priority (10x faster)" },
    { feature: "Image Generation", free: "Basic", pro: "4K HD" },
    { feature: "Ads", free: "Yes", pro: "Ad-free" },
    { feature: "Export Options", free: "PDF/PNG", pro: "All formats" },
    { feature: "Support", free: "Community", pro: "Priority 24/7" },
];

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const router = useRouter();
    const supabase = createClient();

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
        const { data: { session } } = await supabase.auth.getSession();
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
                        alert("Subscription verification pending. It will be active shortly.");
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
        <div className="min-h-screen bg-slate-50 dark:bg-[#080a12] pt-24 pb-20 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-15%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-violet-600/8 via-indigo-500/5 to-transparent blur-[140px] animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-gradient-to-b from-cyan-500/5 to-transparent blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-primary/30"
                        style={{ top: `${15 + i * 15}%`, left: `${10 + i * 15}%` }}
                        animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 via-blue-500/10 to-violet-500/15 text-primary text-sm font-semibold mb-6 border border-primary/20"
                    >
                        <Crown className="h-4 w-4 fill-primary" />
                        <span>Upgrade to Pro</span>
                        <Sparkles className="h-3.5 w-3.5" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
                    >
                        <span className="text-foreground">Supercharge Your </span>
                        <span className="bg-gradient-to-r from-primary via-blue-500 to-violet-500 bg-clip-text text-transparent">
                            AI Experience
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                    >
                        Join <span className="text-foreground font-semibold">10,000+ students</span> who upgraded to Pro.
                        No hidden fees. Cancel anytime.
                    </motion.p>
                </div>

                {/* Toggle with savings badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center mb-14"
                >
                    <div className="bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-sm p-1.5 rounded-full inline-flex relative border border-slate-300/50 dark:border-slate-700/50">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={cn(
                                "px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10",
                                !isYearly ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={cn(
                                "px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10",
                                isYearly ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                            )}
                        >
                            Yearly
                        </button>
                        <motion.div
                            layout
                            className={cn(
                                "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-primary to-blue-600 rounded-full shadow-lg shadow-primary/25"
                            )}
                            style={{ left: isYearly ? "calc(50% + 3px)" : "6px" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                    <AnimatePresence>
                        {isYearly && (
                            <motion.div
                                initial={{ opacity: 0, y: -5, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: -5, height: 0 }}
                                className="mt-3"
                            >
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                                    <Sparkles className="h-3 w-3" />
                                    Save $5.89/year — that&apos;s 2 months free!
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 }}
                        className="bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl relative group hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="mb-8">
                            <div className="h-12 w-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
                                <Users className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-1.5">Free</h3>
                            <p className="text-muted-foreground text-sm">Perfect for getting started</p>
                        </div>
                        <div className="flex items-baseline mb-8">
                            <span className="text-5xl font-black tracking-tight">$0</span>
                            <span className="text-muted-foreground ml-2 text-sm">/forever</span>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full h-13 rounded-2xl text-base font-semibold mb-8 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
                            onClick={() => router.push("/tools")}
                        >
                            Start Free
                        </Button>
                        <div className="space-y-4">
                            {[
                                "Access to 20+ AI tools",
                                "10 generations per day",
                                "Standard processing",
                                "Export to PDF & PNG",
                                "Community support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <div className="h-5 w-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-3 w-3 text-slate-500 dark:text-slate-400" />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative rounded-3xl group"
                    >
                        {/* Animated border gradient */}
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-blue-500 to-violet-500 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

                        <div className="relative bg-[#0c0f1a] rounded-3xl p-8 lg:p-10 overflow-hidden">
                            {/* Glow Effects */}
                            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-primary/15 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/25 transition-all duration-700" />
                            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-violet-600/10 blur-[80px] rounded-full pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/20 flex items-center justify-center mb-5">
                                            <Crown className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1.5">Pro Access</h3>
                                        <p className="text-slate-400 text-sm">Unlock every AI capability</p>
                                    </div>
                                    <motion.span
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/30"
                                    >
                                        ⚡ MOST POPULAR
                                    </motion.span>
                                </div>

                                <div className="flex items-baseline mb-2">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isYearly ? "year" : "month"}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -15 }}
                                            className="flex items-baseline"
                                        >
                                            <span className="text-5xl font-black text-white tracking-tight">
                                                ${isYearly ? "29.99" : "2.99"}
                                            </span>
                                            <span className="text-slate-400 ml-2 text-sm">/{isYearly ? "year" : "month"}</span>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="mb-6 h-6">
                                    <AnimatePresence>
                                        {isYearly && (
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-sm text-green-400 font-medium"
                                            >
                                                ✨ Just $2.50/month — Save $5.89!
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <p className="text-xs text-slate-500 mb-3">Billed in INR (₹) via Razorpay at checkout</p>

                                <Button
                                    onClick={() => startSubscription(isYearly ? "plan_SEPrpn71jkiE0u" : "plan_SEPqtQNsEaZpDB")}
                                    className="w-full h-14 rounded-2xl text-base font-bold mb-8 bg-gradient-to-r from-primary via-blue-600 to-violet-600 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 text-white border-0"
                                >
                                    <Zap className="mr-2 h-5 w-5 fill-white" />
                                    Upgrade to Pro
                                </Button>

                                <div className="space-y-4">
                                    {[
                                        { text: "Unlimited AI Generations", highlight: true },
                                        { text: "GPT-4o Premium Models", highlight: true },
                                        { text: "Priority Processing (10x faster)", highlight: false },
                                        { text: "Ad-free Experience", highlight: false },
                                        { text: "4K Image Generation", highlight: false },
                                        { text: "Advanced Privacy Mode", highlight: false },
                                        { text: "Priority 24/7 Support", highlight: false },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm">
                                            <div className={cn(
                                                "h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0",
                                                item.highlight ? "bg-gradient-to-br from-primary to-blue-500" : "bg-primary/20"
                                            )}>
                                                <Check className={cn("h-3 w-3", item.highlight ? "text-white" : "text-primary")} />
                                            </div>
                                            <span className={cn(item.highlight ? "text-white font-medium" : "text-slate-300")}>
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 md:gap-10 mb-24"
                >
                    {[
                        { icon: Shield, label: "SSL Encrypted" },
                        { icon: CreditCard, label: "Secure Payments" },
                        { icon: Clock, label: "Cancel Anytime" },
                        { icon: Heart, label: "7-Day Guarantee" },
                    ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-muted-foreground">
                            <badge.icon className="h-4.5 w-4.5 text-primary/70" />
                            <span className="text-sm font-medium">{badge.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Feature Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-24"
                >
                    <h2 className="text-3xl font-bold text-center mb-3 text-foreground">Compare Plans</h2>
                    <p className="text-muted-foreground text-center mb-10">See exactly what you get with each plan</p>
                    <div className="bg-white dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
                        <div className="grid grid-cols-3 gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                            <div className="text-sm font-bold text-foreground">Feature</div>
                            <div className="text-sm font-bold text-center text-foreground">Free</div>
                            <div className="text-sm font-bold text-center text-primary">Pro ⚡</div>
                        </div>
                        {comparisonFeatures.map((row, i) => (
                            <div key={i} className={cn(
                                "grid grid-cols-3 gap-4 p-5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30",
                                i !== comparisonFeatures.length - 1 && "border-b border-slate-100 dark:border-slate-800"
                            )}>
                                <div className="text-sm text-foreground font-medium">{row.feature}</div>
                                <div className="text-sm text-center text-muted-foreground">{row.free}</div>
                                <div className="text-sm text-center text-primary font-semibold">{row.pro}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto mb-24"
                >
                    <h2 className="text-3xl font-bold text-center mb-3 text-foreground">Loved by Students</h2>
                    <p className="text-muted-foreground text-center mb-10">See what our Pro users are saying</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-1.5 mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-foreground text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mb-24"
                >
                    <h2 className="text-3xl font-bold text-center mb-3 text-foreground">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-center mb-10">Everything you need to know about Pro</p>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "bg-white dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden",
                                    openFaq === i ? "border-primary/30 shadow-lg" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                                )}
                            >
                                <button
                                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                                    <ChevronDown className={cn(
                                        "h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                                        openFaq === i && "rotate-180 text-primary"
                                    )} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="bg-gradient-to-br from-[#0c0f1a] to-[#141831] rounded-3xl p-10 md:p-14 border border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-violet-600/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="relative z-10">
                            <Rocket className="h-10 w-10 text-primary mx-auto mb-5" />
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to level up?</h3>
                            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm">
                                Join thousands of students who are already using ToolNova Pro to study smarter, write better, and achieve more.
                            </p>
                            <Button
                                onClick={() => startSubscription(isYearly ? "plan_SEPrpn71jkiE0u" : "plan_SEPqtQNsEaZpDB")}
                                className="h-13 px-10 rounded-2xl text-base font-bold bg-gradient-to-r from-primary via-blue-600 to-violet-600 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 text-white"
                            >
                                <Zap className="mr-2 h-5 w-5 fill-white" />
                                Get Pro Access Now
                            </Button>
                            <p className="mt-5 text-xs text-slate-500">7-day money-back guarantee • Cancel anytime</p>
                        </div>
                    </div>
                </motion.div>

                {/* Support Link */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        Have questions?{" "}
                        <a href="/contact" className="text-primary hover:underline font-medium">
                            Contact our support team
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
