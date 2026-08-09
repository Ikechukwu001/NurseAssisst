"use client";
import { motion } from "framer-motion";

const readouts = [
  { label: "HR", value: "78", unit: "bpm", color: "text-emerald-400" },
  { label: "SPO2", value: "98", unit: "%", color: "text-cyan-400" },
  { label: "NIBP", value: "118/76", unit: "mmHg", color: "text-white" },
  { label: "RR", value: "16", unit: "/min", color: "text-amber-400" },
];

export default function VitalsMonitor() {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 rounded-lg bg-black p-4">
      {/* Waveforms */}
      <div className="space-y-2">
        <div className="relative h-14 overflow-hidden">
          <span className="readout absolute left-1 top-0 text-[9px] text-emerald-500/70">
            ECG · II
          </span>
          <svg viewBox="0 0 400 56" className="h-full w-full" fill="none">
            <motion.path
              d="M0 28 H120 L136 28 L148 4 L164 52 L176 28 L192 36 L204 28 H400"
              stroke="#34d399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="relative h-10 overflow-hidden">
          <span className="readout absolute left-1 top-0 text-[9px] text-cyan-500/70">
            SPO2
          </span>
          <svg viewBox="0 0 400 40" className="h-full w-full" fill="none">
            <motion.path
              d="M0 20 C 20 20, 30 6, 45 20 S 70 34, 85 20 S 110 6, 125 20 S 150 34, 165 20 S 190 6, 205 20 S 230 34, 245 20 S 270 6, 285 20 S 310 34, 325 20 S 350 6, 365 20 S 390 20, 400 20"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
      </div>

      {/* Numeric readouts */}
      <div className="flex flex-col justify-between gap-2 border-l border-navy-800 pl-4">
        {readouts.map((r) => (
          <div key={r.label} className="text-right leading-none">
            <p className="readout text-[9px] text-navy-500">{r.label}</p>
            <p className={`readout text-xl font-semibold ${r.color}`}>
              {r.value}
            </p>
            <p className="readout text-[8px] text-navy-600">{r.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}