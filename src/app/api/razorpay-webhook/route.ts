import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/db"; // Uncomment and fix import based on your lib/db.ts

export async function POST(req: NextRequest) {
    try {
        const body = await req.text();
        const signature = req.headers.get("x-razorpay-signature");

        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

        if (!webhookSecret) {
            console.error("RAZORPAY_WEBHOOK_SECRET is not defined");
            return new Response("Configuration error", { status: 500 });
        }

        const expectedSignature = crypto
            .createHmac("sha256", webhookSecret)
            .update(body)
            .digest("hex");

        if (signature !== expectedSignature) {
            console.error("Invalid Webhook Signature");
            return new Response("Invalid signature", { status: 400 });
        }

        const event = JSON.parse(body);
        const { event: eventName, payload } = event;
        const subId = payload.subscription?.entity?.id || payload.payment?.entity?.subscription_id;

        console.log(`Razorpay Webhook Event: ${eventName} for Subscription: ${subId}`);

        // Update your database here using Prisma
        // Example:
        /*
        const updateData = {
            status: eventName.replace("subscription.", ""),
            currentPeriodEnd: payload.subscription?.entity?.current_end ? new Date(payload.subscription.entity.current_end * 1000) : undefined,
        };
    
        await prisma.subscription.update({
            where: { razorpaySubscriptionId: subId },
            data: updateData,
        });
        */

        switch (eventName) {
            case "subscription.activated":
                console.log("User subscription active ✅:", subId);
                break;
            case "subscription.charged":
                console.log("Subscription renewed 💰:", subId);
                break;
            case "subscription.cancelled":
                console.log("Subscription cancelled ❌:", subId);
                break;
            case "payment.failed":
                console.log("Payment failed ⚠️:", subId);
                break;
            default:
                console.log("Unhandled webhook event:", eventName);
        }

        return new Response("OK", { status: 200 });
    } catch (error) {
        console.error("Razorpay Webhook Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
