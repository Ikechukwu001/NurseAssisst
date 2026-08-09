"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import LottiePlayer from "@/components/ui/LottiePlayer";
import VitalsMonitor from "@/components/marketing/VitalsMonitor";

function useTicker(start = "01:59:47") {
  const [time, setTime] = useState(start);
  useEffect(() => {
    let [h, m, s] = start.split(":").map(Number);
    const id = setInterval(() => {
      s--;
      if (s < 0) {
        s = 59;
        m--;
      }
      if (m < 0) {
        m = 59;
        h--;
      }
      if (h < 0) {
        h = 1;
        m = 59;
        s = 59;
      }
      setTime([h, m, s].map((n) => String(n).padStart(2, "0")).join(":"));
    }, 1000);
    return () => clearInterval(id);
  }, [start]);
  return time;
}

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return count;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const trustPoints = ["Real past questions", "Timed CBT format", "Built for Nigeria"];

export default function Hero() {
  const time = useTicker();
  const nurseCount = useCountUp(1240);

  return (
    <section className="relative overflow-hidden bg-navy-50">
      {/* ECG graph-paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-navy-100) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-navy-100) 1px, transparent 1px),
            linear-gradient(var(--color-navy-100) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-navy-100) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-16 lg:py-32">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.p
            variants={fadeUp}
            className="readout inline-flex items-center gap-2 rounded-full bg-navy-100 px-4 py-1.5 text-xs text-navy-800"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-pulse)]" />
            BUILT FOR NIGERIAN NURSING EXAMS
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-[1.08] text-navy-950 sm:text-5xl lg:text-[3.5rem]"
          >
            Walk into the exam
            <br />
            having{" "}
            <span className="relative whitespace-nowrap text-[var(--color-accent)]">
              already sat it
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 5.5C40 2 160 2 199 5.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-sm text-lg leading-relaxed text-navy-600"
          >
            CBT-format questions, live practical scenarios, and flashcard
            revision — for Nigerian nursing students and nurses.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-5 flex flex-wrap gap-x-5 gap-y-2"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-1.5 text-sm text-navy-700"
              >
                <FaCheckCircle className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link href="/auth/signup">
              <Button variant="primary">Start practicing free</Button>
            </Link>
            <Link href="/questions">
              <Button variant="outline">Browse question bank</Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="readout mt-8 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-4 py-2 text-xs text-navy-600 shadow-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
            {nurseCount.toLocaleString()}+ NURSES IN TRAINING
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            initial={{ boxShadow: "0 0 0 rgba(14,165,163,0)" }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(14,165,163,0)",
                "0 0 24px rgba(14,165,163,0.35)",
                "0 0 0 rgba(14,165,163,0)",
              ],
            }}
            transition={{ duration: 0.9, delay: 0.15, times: [0, 0.5, 1] }}
            className="rounded-2xl border border-navy-800 bg-navy-950 p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <span className="readout text-[11px] text-navy-400">
                MED-SURG · PAPER 03
              </span>
              <span className="readout flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                {time}
              </span>
            </div>

            <div className="mt-4">
              <VitalsMonitor />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}