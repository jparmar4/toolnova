import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Diagnostic endpoint to check if NextAuth prerequisites are working
// DELETE THIS FILE after debugging is complete
export async function GET() {
    const checks: Record<string, string> = {};

    // 1. Check env vars
    checks["NEXTAUTH_SECRET"] = process.env.NEXTAUTH_SECRET ? "✅ Set" : "❌ Missing";
    checks["NEXTAUTH_URL"] = process.env.NEXTAUTH_URL || "❌ Missing";
    checks["GOOGLE_CLIENT_ID"] = process.env.GOOGLE_CLIENT_ID ? "✅ Set" : "❌ Missing";
    checks["GOOGLE_CLIENT_SECRET"] = process.env.GOOGLE_CLIENT_SECRET ? "✅ Set" : "❌ Missing";
    checks["DATABASE_URL"] = process.env.DATABASE_URL ? "✅ Set (hidden)" : "❌ Missing";

    // 2. Check DB connection
    try {
        await db.$connect();
        const userCount = await db.user.count();
        checks["DB_CONNECTION"] = `✅ Connected (${userCount} users)`;

        // Check if Account table exists and is accessible
        const accountCount = await db.account.count();
        checks["ACCOUNT_TABLE"] = `✅ Accessible (${accountCount} accounts)`;

        // Check if Session table exists
        const sessionCount = await db.session.count();
        checks["SESSION_TABLE"] = `✅ Accessible (${sessionCount} sessions)`;
    } catch (error: any) {
        checks["DB_CONNECTION"] = `❌ Error: ${error.message}`;
    }

    return NextResponse.json(checks, { status: 200 });
}
