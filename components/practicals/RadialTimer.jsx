"use client";

const SIZE = 56;
const STROKE = 4;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function RadialTimer({ remaining, total, urgent }) {
  const progress = Math.max(0, Math.min(1, remaining / total));
  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <div className={`relative flex h-14 w-14 items-center justify-center ${urgent ? "animate-pulse" : ""}`}>
      <svg width={SIZE} height={SIZE}>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={STROKE}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={urgent ? "#ef4444" : "#f87171"}
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
      </svg>
      <span
        className={`readout absolute text-xs font-semibold ${urgent ? "text-red-600" : "text-navy-700"}`}
      >
        {String(remaining).padStart(2, "0")}
      </span>
    </div>
  );
}