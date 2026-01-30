"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function CallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const supabase = createClient();
    const [status, setStatus] = useState("Authenticating...");

    useEffect(() => {
        const handleCallback = async () => {
            const code = searchParams.get("code");
            const error = searchParams.get("error");
            const error_description = searchParams.get("error_description");

            if (error) {
                toast.error(error_description || "Authentication failed");
                router.push("/login");
                return;
            }

            if (code) {
                try {
                    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
                    if (exchangeError) {
                        console.error("Exchange Error:", exchangeError);
                        toast.error("Failed to verify session: " + exchangeError.message);
                        router.push("/login");
                    } else {
                        setStatus("Login successful! Redirecting...");
                        toast.success("Logged in successfully!");
                        // Initialize user usage if needed
                        router.refresh(); // Refresh router cache
                        router.push("/");
                    }
                } catch (err) {
                    console.error("Callback Error:", err);
                    router.push("/login?error=unexpected");
                }
            } else {
                // No code, redirect home
                router.push("/");
            }
        };

        handleCallback();
    }, [searchParams, router, supabase]);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-lg font-medium text-foreground">{status}</p>
            </div>
        </div>
    );
}
