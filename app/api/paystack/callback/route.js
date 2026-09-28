import { NextResponse } from "next/server";
import { grantPremiumAccess } from "@/lib/paystack";

// Paystack redirects the user's browser here after checkout. This is for
// immediate UX (so the user lands on an "upgraded" screen right away) —
// the webhook below is the reliable, guaranteed-delivery path in case the
// browser closes before this redirect completes.
export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  if (!reference) {
    return NextResponse.redirect(`${origin}/pricing?error=missing-reference`);
  }

  const result = await grantPremiumAccess(reference);

  if (result.success) {
    return NextResponse.redirect(`${origin}/dashboard?upgraded=true`);
  }

  return NextResponse.redirect(`${origin}/pricing?error=payment-not-verified`);
}
