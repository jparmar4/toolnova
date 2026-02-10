import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const signature = req.headers.get("x-razorpay-signature");

        // CASE 1: Webhook Verification
        if (signature) {
            const body = await req.text();
            const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

            if (!webhookSecret) {
                console.error("RAZORPAY_WEBHOOK_SECRET is not defined");
                return NextResponse.json({ success: false, error: "Configuration error" }, { status: 500 });
            }

            const expectedSignature = crypto
                .createHmac("sha256", webhookSecret)
                .update(body)
                .digest("hex");

            if (signature === expectedSignature) {
                console.log("Webhook verified ✅");

                const event = JSON.parse(body);
                const { event: eventName, payload } = event;

                console.log(`Received Razorpay Event: ${eventName}`);

                switch (eventName) {
                    case "subscription.activated":
                        console.log("Subscription Activated for customer:", payload.subscription.entity.customer_id);
                        // TODO: Update user DB to mark as premium
                        break;
                    case "subscription.charged":
                        console.log("Subscription Charged:", payload.payment.entity.amount);
                        // TODO: Extend premium period
                        break;
                    case "subscription.cancelled":
                        console.log("Subscription Cancelled:", payload.subscription.entity.id);
                        // TODO: Remove premium status
                        break;
                    case "payment.failed":
                        console.error("Payment Failed:", payload.payment.entity.error_description);
                        // TODO: Notify user
                        break;
                    default:
                        console.log("Unhandled event:", eventName);
                }

                return new Response("OK", { status: 200 });
            } else {
                return new Response("Invalid signature", { status: 400 });
            }
        }

        // CASE 2: Client-side Verification (from checkout modal)
        const body = await req.json();
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

        const secret = process.env.RAZORPAY_KEY_SECRET;

        if (!secret) {
            console.error("RAZORPAY_KEY_SECRET is not defined");
            return NextResponse.json({ success: false, error: "Configuration error" }, { status: 500 });
        }

        const sign = crypto
            .createHmac("sha256", secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (sign === razorpay_signature) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
        }
    } catch (error) {
        console.error("Razorpay Verification Error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}
