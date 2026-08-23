"use client";
import { useEffect, useState } from "react";

const STATUS_STYLES = {
  stable: { label: "STABLE", text: "text-emerald-600", stroke: "#059669" },
  crisis: { label: "DETERIORATING", text: "text-red-500", stroke: "#ef4444" },
  recovering: { label: "STABILIZING", text: "text-amber-600", stroke: "#d97706" },
};

function wavePoints(phase) {
  const amp = phase === "crisis" ? 12 : phase === "recovering" ? 7 : 4;
  const freq = phase === "crisis" ? 5 : 3;
  let pts = "";
  for (let x = 0; x <= 300; x += 6) {
    const y = 16 - Math.sin((x / 300) * Math.PI * 2 * freq) * amp;
    pts += `${x},${y.toFixed(1)} `;
  }
  return pts.trim();
}

function VitalCell({ label, value }) {
  return (
    <div className="rounded-lg bg-navy-50 px-2 py-1.5 text-center">
      <p className="readout text-[9px] text-navy-400">{label}</p>
      <p className="readout text-sm font-semibold text-navy-950">{value}</p>
    </div>
  );
}

// vitalsBaseline: { hr, spo2, bp, rr } from the current stage — the "stable" values to animate toward/from
// outcome: { type: "correct" | "incorrect", id: number } — pass a NEW object each time to retrigger,
//   even if type repeats twice in a row (e.g. two wrong answers back to back)
export default function ReactiveVitalsMonitor({ vitalsBaseline, outcome }) {
  const [display, setDisplay] = useState(vitalsBaseline);
  const [phase, setPhase] = useState("stable");

  useEffect(() => {
    setDisplay(vitalsBaseline);
    setPhase("stable");
  }, [vitalsBaseline]);

  useEffect(() => {
    if (!outcome?.type) return;

    const baseHr = parseInt(vitalsBaseline.hr, 10) || 90;
    const baseSpo2 = parseInt(vitalsBaseline.spo2, 10) || 97;
    const baseRr = parseInt(vitalsBaseline.rr, 10) || 16;

    if (outcome.type === "incorrect") {
      setPhase("crisis");
      let hr = baseHr, spo2 = baseSpo2, rr = baseRr;
      const id = setInterval(() => {
        hr = Math.min(hr + 6, baseHr + 40);
        spo2 = Math.max(spo2 - 2, Math.max(baseSpo2 - 14, 80));
        rr = Math.min(rr + 2, baseRr + 16);
        setDisplay((d) => ({ ...d, hr: String(hr), spo2: String(spo2), rr: String(rr) }));
        if (hr >= baseHr + 40) clearInterval(id);
      }, 400);
      return () => clearInterval(id);
    }

    if (outcome.type === "correct") {
      setPhase("recovering");
      const id = setInterval(() => {
        setDisplay((d) => {
          const hr = Math.max(parseInt(d.hr, 10) - 4, baseHr);
          const spo2 = Math.min(parseInt(d.spo2, 10) + 1, baseSpo2);
          const rr = Math.max(parseInt(d.rr, 10) - 1, baseRr);
          if (hr <= baseHr && spo2 >= baseSpo2 && rr <= baseRr) {
            clearInterval(id);
            setPhase("stable");
          }
          return { ...d, hr: String(hr), spo2: String(spo2), rr: String(rr) };
        });
      }, 300);
      return () => clearInterval(id);
    }
  }, [outcome]);

  const status = STATUS_STYLES[phase];

  return (
    <div className="w-full rounded-xl border border-navy-100 bg-white px-3 py-2.5 shadow-sm sm:px-4 sm:py-3">
      <div className="flex items-center justify-between">
        <span className="readout text-[9px] text-navy-500 sm:text-[10px]">PATIENT MONITOR</span>
        <span className={`readout text-[9px] font-medium sm:text-[10px] ${status.text}`}>
          {status.label}
        </span>
      </div>

      <svg viewBox="0 0 300 32" className="mt-1.5 h-5 w-full sm:h-6" preserveAspectRatio="none">
        <polyline points={wavePoints(phase)} fill="none" stroke={status.stroke} strokeWidth="1.5" />
      </svg>

      <div className="mt-2 grid grid-cols-4 gap-1.5 sm:gap-2">
        <VitalCell label="HR" value={display.hr} />
        <VitalCell label="SpO2" value={`${display.spo2}%`} />
        <VitalCell label="BP" value={display.bp} />
        <VitalCell label="RR" value={display.rr} />
      </div>
    </div>
  );
}