import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { planId } = await req.json();

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID as string,
            key_secret: process.env.RAZORPAY_KEY_SECRET as string,
        });

        const subscription = await instance.subscriptions.create({
            plan_id: planId,
            customer_notify: 1,
            total_count: 12, // Number of billing cycles
            quantity: 1,
        } as any); // Cast as any if SDK types are still finicky

        return NextResponse.json(subscription);
    } catch (error) {
        console.error("Razorpay Subscription Error:", error);
        return NextResponse.json({ error: "Failed to create subscription" }, { status: 500 });
    }
}
