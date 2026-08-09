"use client";

import { useState } from "react";
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Demo submission.
    // Connect this to your backend/email service later.
    setTimeout(() => {
      setLoading(false);
      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  }

  function resetForm() {
    setSent(false);
    setError("");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
            GET IN TOUCH
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            We&apos;re here to help
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Have a question about your account, an exam paper, or something
            that isn&apos;t working properly? Send us a message and we&apos;ll
            help you sort it out.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Left column */}
          <div className="space-y-6">
            {/* Contact information */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] text-slate-400">
                  REACH US DIRECTLY
                </p>

                <h2 className="mt-2 text-lg font-semibold text-slate-950">
                  Contact support
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {contactPoints.map(
                  ({ icon: Icon, label, value, href }) => {
                    const content = (
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                          <Icon className="h-4 w-4 text-slate-800" />
                        </span>

                        <div className="min-w-0">
                          <p className="text-xs font-medium text-slate-400">
                            {label}
                          </p>

                          <p className="mt-0.5 truncate text-sm font-semibold text-slate-900">
                            {value}
                          </p>
                        </div>
                      </div>
                    );

                    if (!href) {
                      return (
                        <div
                          key={label}
                          className="rounded-xl border border-slate-100 p-4"
                        >
                          {content}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-xl border border-slate-100 p-4 transition hover:border-slate-300 hover:bg-slate-50"
                      >
                        {content}

                        <span className="mt-2 block pl-[60px] text-xs font-medium text-slate-500 opacity-0 transition group-hover:opacity-100">
                          Open contact →
                        </span>
                      </a>
                    );
                  }
                )}
              </div>
            </div>

            {/* Developer card */}
            <div className="overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-sm sm:p-7">
              <p className="text-xs font-semibold tracking-[0.15em] text-slate-400">
                MEET THE DEVELOPER
              </p>

              <h2 className="mt-3 text-lg font-semibold">
                Built with students in mind
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                NurseAssist is built and maintained by a solo developer
                focused on creating practical exam-preparation tools for
                Nigerian health science students.
              </p>

              {/* Other project */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-slate-500">
                  ALSO BUILT BY THE SAME DEVELOPER
                </p>

                <h3 className="mt-2 text-sm font-semibold text-white">
                  PharmTechSuccess
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-400">
                  CBT exam preparation for Pharmacy Technician students
                  preparing for NPCE examinations.
                </p>

                <a
                  href="https://pharmtechsuccess.study"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:opacity-80"
                >
                  Visit PharmTechSuccess
                  <FaArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <FaCheckCircle className="h-7 w-7 text-emerald-600" />
                </span>

                <h2 className="mt-5 text-xl font-bold text-slate-950">
                  Message sent
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                  Thanks for reaching out. We&apos;ve received your message
                  and will get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-7 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-slate-400">
                    SEND A MESSAGE
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-slate-950">
                    How can we help?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Fill out the form below and our support team will get back
                    to you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >
                  <Input
                    label="Full name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />

                  <Input
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />

                  <div className="w-full">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-800"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>

                  {error && (
                    <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send message"}
                  </Button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    We normally respond within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}