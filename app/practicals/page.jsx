"use client";
import { useState } from "react";
import Link from "next/link";
import { FaClipboardCheck, FaArrowRight, FaClock, FaLayerGroup } from "react-icons/fa";
import BackButton from "@/components/ui/BackButton";
import { scenarioCategories, scenarios } from "@/data/practicals/index";

const difficultyColor = {
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-red-50 text-red-700",
  Beginner: "bg-emerald-50 text-emerald-700",
};

export default function PracticalsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(scenarioCategories.map((s) => s.category))];
  const filtered =
    activeCategory === "All"
      ? scenarioCategories
      : scenarioCategories.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-navy-50 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <BackButton href="/dashboard" label="Dashboard" className="mb-4" />

        <p className="readout text-xs text-navy-500">CLINICAL SIMULATION</p>
        <h1 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-navy-950">
          Practical Exams
        </h1>
        <p className="mt-2 text-navy-600">
          Scenario-based cases delivered in real time. No going back once you
          decide.
        </p>

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`readout rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-navy-950 text-white"
                  : "border border-navy-100 bg-white text-navy-600 hover:text-navy-950"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => {
            const scenario = scenarios[s.id];
            const ready = Boolean(scenario);
            const stageCount = scenario?.stages?.length ?? 0;

            const card = (
              <div
                className={`group flex h-full flex-col justify-between rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all ${
                  ready ? "hover:-translate-y-0.5 hover:shadow-md" : "opacity-60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900">
                      <FaClipboardCheck className="h-4 w-4 text-white" />
                    </span>
                    <span
                      className={`readout rounded-full px-2.5 py-1 text-[10px] ${difficultyColor[s.difficulty]}`}
                    >
                      {s.difficulty}
                    </span>
                  </div>
                  <p className="readout mt-4 text-[10px] text-navy-500">
                    {s.category}
                  </p>
                  <h3 className="mt-1 font-semibold text-navy-950">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-600">{s.description}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="readout flex items-center gap-3 text-xs text-navy-500">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="h-3 w-3" />
                      {s.duration}
                    </span>
                    {ready && (
                      <span className="flex items-center gap-1.5">
                        <FaLayerGroup className="h-3 w-3" />
                        {stageCount} stages
                      </span>
                    )}
                  </div>
                  {ready ? (
                    <FaArrowRight className="h-3.5 w-3.5 text-navy-400 transition-transform group-hover:translate-x-1 group-hover:text-navy-900" />
                  ) : (
                    <span className="readout text-[10px] text-navy-400">
                      COMING SOON
                    </span>
                  )}
                </div>
              </div>
            );

            return ready ? (
              <Link key={s.id} href={`/practicals/${s.id}`}>
                {card}
              </Link>
            ) : (
              <div key={s.id}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}