"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUserMd, FaArrowRight } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Hero from "@/components/marketing/Hero";
import PulseDivider from "@/components/ui/PulseDivider";
import AuthWidget from "@/components/marketing/AuthWidget";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const features = [
  {
    lottiePath: "/lottie/book-open.json",
    title: "CBT-Format Questions",
    desc: "Practice with real past questions organized by year and paper — timed, structured, exactly like the real exam.",
  },
  {
    lottiePath: "/lottie/clipboard-check.json",
    title: "Practical Simulations",
    desc: "Scenario-based clinical cases delivered progressively, under real exam pressure — not flat multiple choice.",
  },
  {
    lottiePath: "/lottie/layers.json",
    title: "Flashcards",
    desc: "Fast, focused revision decks for the concepts you need to lock in before exam day.",
  },
];

function FeatureIcon({ lottiePath }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let active = true;
    fetch(lottiePath)
      .then((res) => res.json())
      .then((data) => {
        if (active) setAnimationData(data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [lottiePath]);

  return (
    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-t-2xl bg-navy-950">
      {/* subtle radial glow so the animation sits on something, not flat navy */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_65%)]" />
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="h-32 w-32 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        />
      ) : (
        <div className="h-32 w-32 animate-pulse rounded-xl bg-navy-800" />
      )}
    </div>
  );
}

function FeatureCard({ lottiePath, title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <FeatureIcon lottiePath={lottiePath} />
      <div className="p-6">
        <h3 className="text-base font-semibold text-navy-950">{title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-navy-500">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <PulseDivider />

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-16">
        <SectionHeading
          eyebrow="Everything in one place"
          title="Prepare the way you'll be tested"
          subtitle="No more scattered PDFs and WhatsApp group notes. One platform, built exam-first."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </section>

      <PulseDivider />

      {/* Practicals spotlight — the intense, differentiated section */}
      <section className="bg-navy-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                Practical Exams
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
                Clinical scenarios that feel like the real thing.
              </h2>
              <p className="mt-4 text-navy-300">
                Vitals, history, and case details revealed progressively —
                under a live timer, with no going back. Every decision
                matters, just like on exam day.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Full-screen, distraction-free simulation mode",
                  "Timed decision points with real clinical stakes",
                  "Structured debrief and rationale after every case",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                    <span className="text-navy-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-navy-800 bg-navy-900 p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                <span className="text-xs font-medium uppercase tracking-wide text-navy-400">
                  Scenario 04 · Post-op care
                </span>
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                  04:12 remaining
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FaUserMd className="h-5 w-5 text-navy-400" />
                  <p className="text-sm text-navy-200">
                    Patient, 58, presents with elevated BP and reduced urine
                    output 6 hours post-surgery...
                  </p>
                </div>
                <div className="rounded-lg bg-navy-950 p-4">
                  <p className="text-xs text-navy-500">Your next action:</p>
                  <p className="mt-1 text-sm text-white">
                    Select the priority nursing intervention
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PulseDivider />

{/* Auth section — inline sign up / log in, no separate pages */}
<section id="auth" className="mx-auto max-w-7xl px-6 py-24 lg:px-16">
  <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
    <div>
      <p className="readout text-xs text-navy-500">GET STARTED</p>
      <h2 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-navy-950 sm:text-4xl">
        Your exam doesn't wait.
        <br />
        Neither should your prep.
      </h2>
      <p className="mt-4 max-w-sm text-navy-600">
        Create a free account in seconds — one free paper, one flashcard
        deck, and one practical scenario to try, no card required.
      </p>
    </div>

    <div className="mx-auto w-full max-w-sm">
      <AuthWidget />
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}