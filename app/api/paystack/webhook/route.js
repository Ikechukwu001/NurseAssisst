// app/api/paystack/webhook/route.js
//
// NOTE: Paystack allows only ONE webhook URL per account (per mode), and that
// URL currently points at PharmTechSuccess. PharmTechSuccess forwards NurseAssist
// events here with the original body and x-paystack-signature header, so the
// signature check below still passes (same secret key, same raw body).
import { NextResponse } from "next/server";
import crypto from "crypto";
import { activatePremiumFromTransaction } from "@/src/lib/paystack/activate";

function signatureIsValid(rawBody, signature) {
  if (!signature) return false;

  const expected = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(rawBody)
    .digest("hex");

  const a = Buffer.from(signature, "utf8");
  const b = Buffer.from(expected, "utf8");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export async function POST(request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-paystack-signature");

    if (!signatureIsValid(rawBody, signature)) {
      console.warn("Webhook signature mismatch — rejected");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    // Only handle successful charges
    if (event.event !== "charge.success") {
      return NextResponse.json({ received: true });
    }

    const result = await activatePremiumFromTransaction(event.data);

    if (result.ok) {
      console.log(`Webhook: NurseAssist premium activated (${event.data.reference})`);
      return NextResponse.json({ received: true });
    }

    // Not ours: acknowledge so Paystack stops retrying
    if (result.ignored) {
      return NextResponse.json({ received: true, ignored: true });
    }

    // Permanent problems (bad amount, unknown reference): acknowledge, but log loudly
    if (result.code && result.code < 500) {
      console.error("Webhook rejected payment:", result.error, event.data?.reference);
      return NextResponse.json({ received: true, error: result.error });
    }

    // Temporary problems (database error): return 500 so Paystack retries
    return NextResponse.json({ error: result.error }, { status: 500 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}