"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelopeOpenText, FaArrowRight, FaUserCircle } from "react-icons/fa";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

function AuthWidgetInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const [checkingSession, setCheckingSession] = useState(true);
  const [sessionUser, setSessionUser] = useState(null);

  const [tab, setTab] = useState(
    searchParams.get("auth") === "signup" ? "signup" : "login"
  );
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false);

  // Check for an existing session on mount
  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (active) {
        setSessionUser(data.user ?? null);
        setCheckingSession(false);
      }
    });
    return () => {
      active = false;
    };
  }, [supabase]);

  function switchTab(next) {
    setTab(next);
    setError("");
    setAwaitingConfirmation(false);
  }

  async function handleUseAnotherAccount() {
    await supabase.auth.signOut();
    setSessionUser(null);
    switchTab("login");
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    setLoading(false);
    if (error) {
      setError(
        error.message.includes("Email not confirmed")
          ? "Please confirm your email first — check your inbox for the link."
          : error.message
      );
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { full_name: form.fullName } },
    });

    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      router.push("/dashboard");
      router.refresh();
      return;
    }

    setAwaitingConfirmation(true);
  }

  // Still checking for a session — render nothing (avoids a flash of the login form)
  if (checkingSession) {
    return (
      <div className="h-[420px] animate-pulse rounded-2xl border border-navy-100 bg-white" />
    );
  }

  // Already logged in — show account state instead of the login/signup form
  if (sessionUser) {
    const firstName = sessionUser.user_metadata?.full_name?.split(" ")[0] || "there";

    return (
      <div className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-sm">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-100">
          <FaUserCircle className="h-6 w-6 text-navy-900" />
        </span>
        <p className="readout mt-4 text-xs text-navy-500">LOGGED IN</p>
        <h3 className="mt-1 font-[var(--font-display)] text-lg font-semibold text-navy-950">
          Welcome back, {firstName}
        </h3>
        <p className="mt-1 text-sm text-navy-500">{sessionUser.email}</p>

        <Link href="/dashboard" className="mt-6 w-full">
          <Button variant="primary" className="w-full">
            Continue with this account
            <FaArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Link>

        <button
          onClick={handleUseAnotherAccount}
          className="mt-4 text-sm font-medium text-navy-500 underline hover:text-navy-900"
        >
          Change account
        </button>
      </div>
    );
  }

  if (awaitingConfirmation) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-sm">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-100">
          <FaEnvelopeOpenText className="h-5 w-5 text-navy-900" />
        </span>
        <h3 className="mt-4 font-[var(--font-display)] text-lg font-semibold text-navy-950">
          Check your email
        </h3>
        <p className="mt-2 max-w-xs text-sm text-navy-600">
          We've sent a confirmation link to{" "}
          <span className="font-medium text-navy-900">{form.email}</span>.
          Click it to activate your account, then log in below.
        </p>
        <button
          onClick={() => switchTab("login")}
          className="mt-6 text-sm font-medium text-navy-900 underline"
        >
          Back to log in
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
      <div className="grid grid-cols-2 rounded-full bg-navy-50 p-1">
        {["login", "signup"].map((t) => (
          <button
            key={t}
            onClick={() => switchTab(t)}
            className={`readout rounded-full py-2 text-xs font-medium transition-colors ${
              tab === t
                ? "bg-navy-950 text-white"
                : "text-navy-500 hover:text-navy-900"
            }`}
          >
            {t === "login" ? "LOG IN" : "SIGN UP"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.form
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          onSubmit={tab === "login" ? handleLogin : handleSignup}
          className="mt-6 space-y-4"
        >
          {tab === "signup" && (
            <Input
              label="Full name"
              type="text"
              required
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            required
            minLength={6}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {tab === "login" && (
            <div className="flex justify-end">
              <Link
                href="/auth/reset-password"
                className="text-xs text-navy-500 underline hover:text-navy-900"
              >
                Forgot password?
              </Link>
            </div>
          )}

          {tab === "signup" && (
            <p className="readout text-[11px] text-navy-400">
              We'll email you a confirmation link before your account is active.
            </p>
          )}

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            type="submit"
            variant={tab === "signup" ? "accent" : "primary"}
            className="w-full"
            disabled={loading}
          >
            {loading
              ? tab === "login"
                ? "Logging in..."
                : "Creating account..."
              : tab === "login"
              ? "Log in"
              : "Create free account"}
            {!loading && <FaArrowRight className="ml-2 h-3 w-3" />}
          </Button>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}

export default function AuthWidget() {
  return (
    <Suspense fallback={null}>
      <AuthWidgetInner />
    </Suspense>
  );
}