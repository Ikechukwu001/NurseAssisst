"use client";
import { motion } from "framer-motion";
import { FaStethoscope } from "react-icons/fa";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between bg-navy-950 p-12 text-white lg:flex">
        <div className="flex items-center gap-2">
          <FaStethoscope className="h-6 w-6 text-[var(--color-accent)]" />
          <span className="font-[var(--font-display)] text-xl font-semibold">
            NurseAssist
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <h2 className="font-[var(--font-display)] text-3xl leading-tight">
            Built for the exam room. Trusted before it.
          </h2>
          <p className="mt-4 text-navy-200">
            CBT-format practice, real practical scenarios, and structured
            revision — made for Nigerian nursing students and nurses.
          </p>
        </motion.div>

        <p className="text-xs text-navy-400">
          © {new Date().getFullYear()} NurseAssist. All rights reserved.
        </p>
      </div>

      <div className="flex items-center justify-center bg-navy-50 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm"
        >
          <h1 className="font-[var(--font-display)] text-2xl font-semibold text-navy-950">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-sm text-navy-600">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </motion.div>
      </div>
    </div>
  );
}