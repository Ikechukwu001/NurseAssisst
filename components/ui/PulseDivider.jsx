"use client";
import { motion } from "framer-motion";

export default function PulseDivider({ tone = "light" }) {
  const stroke = tone === "light" ? "var(--color-navy-200, #cdd8ee)" : "var(--color-navy-700)";

  return (
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-2 lg:px-16">
      <div className="h-px flex-1 bg-navy-100" />
      <svg
        viewBox="0 0 200 40"
        className="h-8 w-40 flex-shrink-0"
        fill="none"
      >
        <motion.path
          d="M0 20 H60 L72 20 L80 4 L92 36 L102 20 L112 28 L120 20 H200"
          stroke="var(--color-pulse)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </svg>
      <div className="h-px flex-1 bg-navy-100" />
    </div>
  );
}