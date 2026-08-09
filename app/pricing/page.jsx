"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    tagline: "Try the platform before you commit.",
    features: [
      { label: "1 free practice paper", included: true },
      { label: "Sample flashcard deck", included: true },
      { label: "1 practical scenario", included: true },
      { label: "Full question bank (all years)", included: false },
      { label: "All practical simulations", included: false },
      { label: "Progress tracking & streaks", included: false },
    ],
    cta: "Get started free",
    href: "/auth/signup",
  },
  {
    name: "Premium",
    price: { monthly: 2500, yearly: 24000 },
    tagline: "Everything you need to walk in prepared.",
    featured: true,
    features: [
      { label: "All papers, all years", included: true },
      { label: "All flashcard decks", included: true },
      { label: "All practical simulations", included: true },
      { label: "Progress tracking & streaks", included: true },
      { label: "Priority new-content access", included: true },
      { label: "Downloadable result history", included: true },
    ],
    cta: "Upgrade to Premium",
    href: "/auth/signup",
  },
];

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Premium is a recurring subscription with no lock-in — cancel whenever you like and you'll keep access until the period ends.",
  },
  {
    q: "Do you add new questions and practicals regularly?",
    a: "Yes. We're actively expanding the question bank and practical scenario library — Premium members get new content first.",
  },
  {
    q: "How do I pay?",
    a: "Payments are processed securely via Paystack — cards, bank transfer, and USSD are supported.",
  },
];

function formatNaira(amount) {
  if (amount === 0) return "₦0";
  return `₦${amount.toLocaleString()}`;
}

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="min-h-screen bg-navy-50 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <BackButton href="/dashboard" label="Dashboard" className="mb-4" />

        <div className="text-center">
          <p className="readout text-xs text-navy-500">PRICING</p>
          <h1 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-navy-950 sm:text-4xl">
            Start free. Upgrade when you're ready.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-navy-600">
            One plan, everything unlocked — no confusing tiers.
          </p>

          {/* Billing toggle */}
          <div className="mx-auto mt-8 inline-flex items-center rounded-full border border-navy-100 bg-white p-1">
            {["monthly", "yearly"].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBilling(cycle)}
                className={`readout rounded-full px-4 py-1.5 text-xs font-medium capitalize transition-colors ${
                  billing === cycle
                    ? "bg-navy-900 text-white"
                    : "text-navy-600 hover:text-navy-950"
                }`}
              >
                {cycle}
                {cycle === "yearly" && (
                  <span className="ml-1.5 text-[10px] text-emerald-400">
                    save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? "border-navy-900 bg-navy-950 text-white shadow-xl"
                  : "border-navy-100 bg-white"
              }`}
            >
              <h3
                className={`font-semibold ${
                  plan.featured ? "text-white" : "text-navy-950"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.featured ? "text-navy-300" : "text-navy-600"
                }`}
              >
                {plan.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`font-[var(--font-display)] text-4xl font-semibold ${
                    plan.featured ? "text-white" : "text-navy-950"
                  }`}
                >
                  {formatNaira(plan.price[billing])}
                </span>
                {plan.price[billing] > 0 && (
                  <span
                    className={`readout text-xs ${
                      plan.featured ? "text-navy-400" : "text-navy-500"
                    }`}
                  >
                    /{billing === "monthly" ? "mo" : "yr"}
                  </span>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className={`flex items-start gap-2.5 text-sm ${
                      f.included
                        ? plan.featured
                          ? "text-navy-200"
                          : "text-navy-700"
                        : plan.featured
                        ? "text-navy-600"
                        : "text-navy-400"
                    }`}
                  >
                    {f.included ? (
                      <FaCheckCircle
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          plan.featured ? "text-[var(--color-accent)]" : "text-navy-900"
                        }`}
                      />
                    ) : (
                      <FaTimes className="mt-0.5 h-4 w-4 flex-shrink-0 opacity-40" />
                    )}
                    {f.label}
                  </li>
                ))}
              </ul>

              <Link href={plan.href}>
                <Button
                  variant={plan.featured ? "accent" : "outline"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-2xl">
          <h2 className="text-center font-[var(--font-display)] text-2xl font-semibold text-navy-950">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-navy-100 bg-white p-5"
              >
                <summary className="cursor-pointer list-none text-sm font-medium text-navy-950 marker:content-none">
                  <span className="flex items-center justify-between">
                    {item.q}
                    <span className="readout text-navy-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-navy-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}