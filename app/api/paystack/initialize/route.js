// app/api/paystack/initialize/route.js
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { createClient } from "@/src/lib/supabase/server";
import {
  PRODUCT,
  REFERENCE_PREFIX,
  CURRENCY,
  PREMIUM_PRICE_NAIRA,
  PREMIUM_PRICE_KOBO,
} from "@/src/lib/paystack/config";

export async function POST() {
  try {
    // 1. Identify the user from their session
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Service role client for all writes (users must never be able to
    //    write plan / premium_status / premium_requests themselves)
    const admin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // 3. Already premium?
    const { data: profile } = await admin
      .from("profiles")
      .select("plan, premium_status, full_name")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.plan === "premium" || profile?.premium_status === "active") {
      return NextResponse.json(
        { error: "Account already has premium access" },
        { status: 400 }
      );
    }

    // 4. Reuse an existing pending checkout (same price only) to avoid duplicates
    const { data: existingRequest } = await admin
      .from("premium_requests")
      .select("reference, amount, paystack_access_code, paystack_authorization_url")
      .eq("user_id", user.id)
      .eq("status", "pending")
      .eq("payment_method", "paystack")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (
      existingRequest?.paystack_authorization_url &&
      Number(existingRequest.amount) === PREMIUM_PRICE_NAIRA
    ) {
      return NextResponse.json({
        authorization_url: existingRequest.paystack_authorization_url,
        access_code: existingRequest.paystack_access_code,
        reference: existingRequest.reference,
      });
    }

    const fullName =
      profile?.full_name || user.user_metadata?.full_name || "Student";

    const reference = `${REFERENCE_PREFIX}${randomUUID()}`;

    // 5. Initialize the transaction with Paystack
    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          amount: PREMIUM_PRICE_KOBO,
          currency: CURRENCY,
          reference,
          callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing/verify`,
          metadata: {
            product: PRODUCT,
            user_id: user.id,
            full_name: fullName,
            custom_fields: [
              {
                display_name: "Product",
                variable_name: "product",
                value: "NurseAssist Premium",
              },
              {
                display_name: "Customer Name",
                variable_name: "full_name",
                value: fullName,
              },
            ],
          },
        }),
      }
    );

    const paystackData = await paystackResponse.json();

    if (!paystackData.status) {
      console.error("Paystack init error:", paystackData);
      return NextResponse.json(
        { error: paystackData.message || "Failed to initialize payment" },
        { status: 500 }
      );
    }

    const { authorization_url, access_code } = paystackData.data;

    // 6. Save the pending request BEFORE sending the user to Paystack
    const { error: insertError } = await admin.from("premium_requests").insert({
      user_id: user.id,
      email: user.email,
      full_name: fullName,
      amount: PREMIUM_PRICE_NAIRA,
      reference,
      status: "pending",
      payment_method: "paystack",
      paystack_access_code: access_code,
      paystack_authorization_url: authorization_url,
    });

    if (insertError) {
      console.error("Failed to save premium_requests row:", insertError);
      return NextResponse.json(
        { error: "Could not start payment. Please try again." },
        { status: 500 }
      );
    }

    // 7. Mark profile as pending
    await admin
      .from("profiles")
      .update({ premium_status: "pending" })
      .eq("id", user.id);

    return NextResponse.json({ authorization_url, access_code, reference });
  } catch (error) {
    console.error("Initialize payment error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}