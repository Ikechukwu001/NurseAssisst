"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

// Drop this into your existing Pricing page wherever the "Upgrade" /
// "Go Premium" CTA button currently is:
//   <UpgradeButton className="w-full ..." />
export default function UpgradeButton({ className, children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUpgrade() {
    setError("");
    setLoading(true);

    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      window.location.href = "/?auth=login#auth";
      return;
    }

    const res = await fetch("/api/paystack/initialize", { method: "POST" });
    const data = await res.json();

    if (!res.ok || !data.authorization_url) {
      setError(data.error || "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    window.location.href = data.authorization_url;
  }

  return (
    <div>
      <button onClick={handleUpgrade} disabled={loading} className={className}>
        {loading ? "Redirecting to payment..." : children || "Upgrade to Premium"}
      </button>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
