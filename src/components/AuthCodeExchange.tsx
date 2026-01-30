"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";

export default function AuthCodeExchange() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const supabase = createClient();

    useEffect(() => {
        const code = searchParams.get("code");
        const error = searchParams.get("error");
        const error_description = searchParams.get("error_description");

        if (error) {
            toast.error(error_description || "Authentication failed");
            console.error("Auth Error:", error, error_description);
        }

        if (code) {
            console.log("Found auth code, attempting exchange...");
            const exchange = async () => {
                const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
                if (exchangeError) {
                    console.error("Exchange Error:", exchangeError);
                    toast.error("Failed to sign in: " + exchangeError.message);
                } else {
                    console.log("Session exchanged successfully!");
                    toast.success("Signed in successfully!");
                    // Clean URL
                    router.replace("/");
                }
            };
            exchange();
        }
    }, [searchParams, router, supabase]);

    return null;
}
