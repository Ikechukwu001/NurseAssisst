"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

// Client-side hook for gating UI based on premium status.
// Returns { isPremium, loading } — treat loading as "not yet known" so
// UI doesn't flash locked content before the real status arrives.
export function useIsPremium() {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const supabase = createClient();

    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) {
        if (active) {
          setIsPremium(false);
          setLoading(false);
        }
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("is_premium")
        .eq("id", user.id)
        .single();

      if (active) {
        setIsPremium(data?.is_premium ?? false);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return { isPremium, loading };
}
