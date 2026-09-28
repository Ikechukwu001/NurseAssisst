// lib/paystack/activate.js
// Shared by the verify route and the webhook so both apply identical checks.
import { createClient } from "@supabase/supabase-js";
import { PRODUCT, CURRENCY, PREMIUM_PRICE_KOBO } from "./config";

/**
 * @param {object} tx  Paystack transaction data (from /transaction/verify
 *                     or from a charge.success webhook event)
 * @returns {Promise<{ok: boolean, code?: number, error?: string,
 *                    ignored?: boolean, alreadyActivated?: boolean}>}
 */
export async function activatePremiumFromTransaction(tx) {
  const { reference, metadata, amount, currency, status } = tx || {};

  if (status !== "success") {
    return { ok: false, code: 400, error: "Payment not successful" };
  }

  // The Paystack account is shared with other apps, so only act on our own payments
  if (metadata?.product !== PRODUCT) {
    return { ok: false, code: 400, ignored: true, error: "Not a NurseAssist payment" };
  }

  // Never trust the client: the amount must match the current plan price exactly
  if (amount !== PREMIUM_PRICE_KOBO || currency !== CURRENCY) {
    console.error("Amount/currency mismatch", { reference, amount, currency });
    return { ok: false, code: 400, error: "Payment amount does not match the plan price" };
  }

  const userId = metadata?.user_id;
  if (!userId || !reference) {
    return { ok: false, code: 400, error: "Missing user_id or reference" };
  }

  // Service role bypasses RLS; there is no user session on webhooks/redirects
  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data: request, error: lookupError } = await admin
    .from("premium_requests")
    .select("status, user_id")
    .eq("reference", reference)
    .maybeSingle();

  if (lookupError) {
    console.error("premium_requests lookup failed:", lookupError);
    return { ok: false, code: 500, error: "Could not look up payment record" };
  }

  if (!request) {
    return { ok: false, code: 404, error: "Unknown payment reference" };
  }

  if (request.user_id !== userId) {
    console.error("user_id mismatch for reference", reference);
    return { ok: false, code: 400, error: "Payment does not belong to this account" };
  }

  // Idempotency: verify route and webhook will both arrive for the same payment
  if (request.status === "approved") {
    return { ok: true, alreadyActivated: true };
  }

  // Upgrade the profile FIRST. If a later step fails, a retry can still finish the job.
  const { data: updatedProfiles, error: profileError } = await admin
    .from("profiles")
    .update({ plan: "premium", premium_status: "active" })
    .eq("id", userId)
    .select("id");

  if (profileError || !updatedProfiles?.length) {
    console.error("Failed to upgrade profile:", profileError);
    return { ok: false, code: 500, error: "Could not activate premium on this account" };
  }

  const { error: requestError } = await admin
    .from("premium_requests")
    .update({
      status: "approved",
      paid_at: new Date().toISOString(),
      paystack_amount_paid: amount / 100,
    })
    .eq("reference", reference);

  if (requestError) {
    console.error("Failed to mark premium_requests approved:", requestError);
    return { ok: false, code: 500, error: "Could not record payment" };
  }

  return { ok: true };
}