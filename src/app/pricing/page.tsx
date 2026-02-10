"use client";

declare global {
    interface Window {
        Razorpay: any;
    }
}


import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false);
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
        // Check if user is logged in
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
                headers: {
                    "Content-Type": "application/json",
                },
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
                    // Note: Razorpay Subscriptions don't strictly require manual verify-payment 
                    // for the initial charge like orders do, but it's good practice to log/check.
                    // The webhook will handle the heavy lifting (subscription.activated).
                    const verifyRes = await fetch("/api/verify-payment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    >
                        <Star className="h-4 w-4 fill-primary" />
                        <span>Go Premium</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground"
                    >
                        Simple, transparent pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground leading-relaxed"
                    >
                        Choose the plan that fits your needs. No hidden fees. Cancel anytime.
                    </motion.p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-full inline-flex relative">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10",
                                !isYearly ? "text-white" : "text-slate-700 dark:text-slate-400 hover:text-foreground"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10",
                                isYearly ? "text-white" : "text-slate-700 dark:text-slate-400 hover:text-foreground"
                            )}
                        >
                            Yearly <span className="text-xs text-green-600 dark:text-green-400 font-bold ml-1">-16%</span>
                        </button>
                        <div
                            className={cn(
                                "absolute top-1 bottom-1 w-[50%] bg-primary rounded-full transition-all duration-300 ease-in-out",
                                isYearly ? "left-[50%]" : "left-1"
                            )}
                        />
                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl relative group hover:border-primary/20 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-2">Free</h3>
                        <p className="text-muted-foreground mb-6">Essential tools for students</p>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-muted-foreground ml-2">/forever</span>
                        </div>
                        <Button variant="outline" className="w-full h-12 rounded-xl text-lg font-medium mb-8 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                            Get Started
                        </Button>
                        <ul className="space-y-4">
                            {[
                                "Access to 20+ basic tools",
                                "Standard processing speed",
                                "Export to PDF/PNG",
                                "Basic format conversion",
                                "Community support"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <div className="h-6 w-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-950 dark:bg-black rounded-3xl p-8 border border-primary/50 shadow-2xl relative overflow-hidden group"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-white">Pro Access</h3>
                                <span className="bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    POPULAR
                                </span>
                            </div>
                            <p className="text-slate-400 mb-6">Unlock the full power of AI</p>

                            <div className="flex items-baseline mb-8">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={isYearly ? "year" : "month"}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-5xl font-bold text-white"
                                    >
                                        ${isYearly ? "29.99" : "2.99"}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="text-slate-400 ml-2">/{isYearly ? "year" : "month"}</span>
                            </div>

                            <div className="mb-2 text-sm text-green-400 font-medium h-6">
                                {isYearly && "You check out effortlessly!"}
                            </div>

                            <Button
                                onClick={() => startSubscription(isYearly ? "plan_SEPrpn71jkiE0u" : "plan_SEPqtQNsEaZpDB")}
                                className="w-full h-12 rounded-xl text-lg font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/25 text-white"
                            >
                                <Zap className="mr-2 h-5 w-5 fill-white" />
                                Upgrade Now
                            </Button>

                            <ul className="space-y-4">
                                {[
                                    "Unlimited AI Generations",
                                    "Access to Premium Models (GPT-4o)",
                                    "Priority Processing (skip queue)",
                                    "Ad-free Experience",
                                    "4K Image Generation",
                                    "Advanced Privacy Mode"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="h-3.5 w-3.5 text-primary" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section Trigger or Additional Content */}
                <div className="mt-20 text-center">
                    <p className="text-muted-foreground">Have questions? <a href="/contact" className="text-primary hover:underline">Contact our support team</a></p>
                </div>
            </div>
        </div>
    );
}
