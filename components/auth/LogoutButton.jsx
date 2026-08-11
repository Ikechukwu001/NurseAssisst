"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton({ className = "" }) {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`group flex w-full items-center justify-between px-5 py-3.5 text-left transition-colors hover:bg-red-50 disabled:opacity-60 ${className}`}
    >
      <div className="flex items-center gap-3.5">
        <FaSignOutAlt className="h-3.5 w-3.5 text-red-500" />
        <span className="text-sm text-red-600">
          {loading ? "Logging out..." : "Log out"}
        </span>
      </div>
    </button>
  );
}