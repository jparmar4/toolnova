import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

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
        const subId =
            payload.subscription?.entity?.id ||
            payload.payment?.entity?.subscription_id;

        console.log(`Razorpay Webhook Event: ${eventName} for Subscription: ${subId}`);

        if (subId) {
            switch (eventName) {
                case "subscription.activated":
                case "subscription.charged": {
                    const currentEnd = payload.subscription?.entity?.current_end;
                    await db.subscription.updateMany({
                        where: { razorpaySubscriptionId: subId },
                        data: {
                            status: "active",
                            ...(currentEnd && {
                                currentPeriodEnd: new Date(currentEnd * 1000),
                            }),
                        },
                    });
                    console.log(`✅ Subscription ${subId} marked active`);
                    break;
                }
                case "subscription.cancelled":
                case "subscription.completed":
                case "subscription.expired": {
                    await db.subscription.updateMany({
                        where: { razorpaySubscriptionId: subId },
                        data: { status: "cancelled" },
                    });
                    console.log(`❌ Subscription ${subId} marked cancelled`);
                    break;
                }
                case "subscription.halted":
                case "subscription.paused": {
                    await db.subscription.updateMany({
                        where: { razorpaySubscriptionId: subId },
                        data: { status: "halted" },
                    });
                    console.log(`⚠️ Subscription ${subId} halted`);
                    break;
                }
                case "payment.failed":
                    console.error("Payment failed ⚠️ for subscription:", subId);
                    break;
                default:
                    console.log("Unhandled webhook event:", eventName);
            }
        }

        return new Response("OK", { status: 200 });
    } catch (error) {
        console.error("Razorpay Webhook Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
