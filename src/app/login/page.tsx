"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Github, Chrome } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setLoading(false);

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Logged in successfully!");
            window.location.href = "/";
        }
    };

    const handleSignUp = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        setLoading(false);

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Check your email for the confirmation link!");
        }
    };

    const handleOAuthLogin = async (provider: "google" | "github") => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-muted/50 px-4">
            <div className="w-full max-w-sm space-y-6 rounded-lg border bg-background p-6 shadow-lg">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p className="text-muted-foreground">Login to access your tools</p>
                </div>

                <div className="space-y-4">
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleOAuthLogin("google")}
                    >
                        <Chrome className="mr-2 h-4 w-4" />
                        Continue with Google
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleOAuthLogin("github")}
                    >
                        <Github className="mr-2 h-4 w-4" />
                        Continue with GitHub
                    </Button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>

                <form onSubmit={handleEmailLogin} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <a href="#" className="text-xs text-primary hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Loading..." : "Login"}
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            className="w-full"
                            disabled={loading}
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
