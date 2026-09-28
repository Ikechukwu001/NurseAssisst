// app/api/paystack/verify/route.js
import { NextResponse } from "next/server";
import { REFERENCE_PREFIX } from "@/lib/paystack/config";
import { activatePremiumFromTransaction } from "@/lib/paystack/activate";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");

    if (!reference) {
      return NextResponse.json(
        { error: "No reference provided" },
        { status: 400 }
      );
    }

    // Shared Paystack account: ignore references that belong to other apps
    if (!reference.startsWith(REFERENCE_PREFIX)) {
      return NextResponse.json(
        { error: "This reference does not belong to NurseAssist" },
        { status: 400 }
      );
    }

    // Ask Paystack directly whether this payment really succeeded
    const paystackResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const paystackData = await paystackResponse.json();

    if (!paystackData.status || paystackData.data?.status !== "success") {
      return NextResponse.json(
        {
          error: "Payment not successful",
          paystack_status: paystackData.data?.status,
        },
        { status: 400 }
      );
    }

    const result = await activatePremiumFromTransaction(paystackData.data);

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.code || 500 });
    }

    return NextResponse.json({
      success: true,
      already_activated: !!result.alreadyActivated,
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}