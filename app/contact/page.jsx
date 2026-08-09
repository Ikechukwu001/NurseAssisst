"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import BackButton from "@/components/ui/BackButton";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const contactPoints = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "support@nurseassist.study",
    href: "mailto:support@nurseassist.study",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat with support",
    href: "https://wa.me/2340000000000",
  },
  {
    icon: FaClock,
    label: "Response time",
    value: "Usually within 24 hours",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy-50 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <BackButton href="/dashboard" label="Dashboard" className="mb-4" />

        <div className="text-center">
          <p className="readout text-xs text-navy-500">GET IN TOUCH</p>
          <h1 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-navy-950 sm:text-4xl">
            We're here to help
          </h1>
          <p className="mx-auto mt-3 max-w-md text-navy-600">
            Questions about your account, a paper, or something not working
            right — send us a message.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: contact info + dev profile */}
          <div className="space-y-4">
            <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
              <h3 className="readout text-xs text-navy-500">REACH US DIRECTLY</h3>
              <div className="mt-4 space-y-4">
                {contactPoints.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50">
                        <Icon className="h-3.5 w-3.5 text-navy-900" />
                      </span>
                      <div>
                        <p className="text-xs text-navy-500">{label}</p>
                        <p className="text-sm font-medium text-navy-950">
                          {value}
                        </p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} target="_blank" rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Meet the Developer */}
            <div className="rounded-xl border border-navy-100 bg-navy-950 p-6 text-white shadow-sm">
              <h3 className="readout text-xs text-navy-400">MEET THE DEVELOPER</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">
                NurseAssist is built and maintained by a solo developer
                focused on exam-prep tools for Nigerian health science
                students.
              </p>

              <div className="mt-5 rounded-lg border border-navy-800 bg-navy-900 p-4">
                <p className="readout text-[10px] text-navy-500">
                  ALSO BUILT BY THE SAME DEVELOPER
                </p>
                <p className="mt-1.5 text-sm font-semibold text-white">
                  PharmTechSuccess
                </p>
                <p className="mt-1 text-xs text-navy-400">
                  CBT exam prep for Pharmacy Technician students (NPCE)
                </p>
                
                  href="https://pharmtechsuccess.study"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] hover:underline"
                >
                  Visit pharmtechsuccess.study
                  <FaArrowRight className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-navy-100 bg-white p-8 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                  <FaCheckCircle className="h-5 w-5 text-emerald-600" />
                </span>
                <h3 className="mt-4 font-[var(--font-display)] text-lg font-semibold text-navy-950">
                  Message sent
                </h3>
                <p className="mt-2 max-w-xs text-sm text-navy-600">
                  Thanks for reaching out — we'll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-medium text-navy-900 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Full name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <div className="w-full">
                  <label className="mb-1.5 block text-sm font-medium text-navy-800">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-navy-100 bg-white px-4 py-3 text-navy-950 outline-none transition-colors focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}