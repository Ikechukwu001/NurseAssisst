"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBookOpen, FaArrowRight, FaClock, FaLock } from "react-icons/fa";
import BackButton from "@/components/ui/BackButton";
import { papers, questions } from "@/data/questions";
import { useIsPremium } from "@/hooks/useIsPremium";

const examTypes = ["General Nursing", "Midwifery"];

export default function QuestionsPage() {
  const [activeType, setActiveType] = useState("General Nursing");
  const { isPremium } = useIsPremium();

  const filteredPapers = papers.filter((p) => p.examType === activeType);
  const years = [...new Set(filteredPapers.map((p) => p.year))].sort(
    (a, b) => b - a
  );

  return (
    <div className="min-h-screen bg-navy-50 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <BackButton href="/dashboard" label="Dashboard" className="mb-4" />

        <p className="readout text-xs text-navy-500">PAST PAPERS</p>
        <h1 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-navy-950">
          Questions
        </h1>
        <p className="mt-2 text-navy-600">
          Select an exam type and paper to begin a timed, CBT-format practice
          session.
        </p>

        <div className="mt-8 inline-flex items-center rounded-full border border-navy-100 bg-white p-1">
          {examTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`readout rounded-full px-5 py-2 text-xs font-medium transition-colors ${
                activeType === type
                  ? "bg-navy-950 text-white"
                  : "text-navy-600 hover:text-navy-950"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {years.length === 0 && (
          <p className="mt-10 text-sm text-navy-500">
            No papers available for {activeType} yet.
          </p>
        )}

        {years.map((year) => (
          <div key={year} className="mt-10">
            <h2 className="readout text-sm font-medium text-navy-500">{year}</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPapers
                .filter((p) => p.year === year)
                .sort((a, b) => a.paperNumber - b.paperNumber)
                .map((paper) => {
                  const exists = (questions[paper.id]?.length ?? 0) > 0;
                  const locked = exists && paper.tier === "premium" && !isPremium;
                  const ready = exists && !locked;

                  const card = (
                    <div
                      className={`group flex h-full flex-col justify-between rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all ${
                        ready ? "hover:-translate-y-0.5 hover:shadow-md" : "opacity-60"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900">
                            <FaBookOpen className="h-4 w-4 text-white" />
                          </span>
                          <span className="readout rounded-full bg-navy-100 px-2.5 py-1 text-[10px] text-navy-700">
                            PAPER {paper.paperNumber}
                          </span>
                        </div>
                        <h3 className="mt-4 font-semibold text-navy-950">
                          {paper.subject}
                        </h3>
                        <p className="readout mt-1.5 text-xs text-navy-500">
                          {paper.questionCount} questions
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="readout flex items-center gap-1.5 text-xs text-navy-500">
                          <FaClock className="h-3 w-3" />
                          {paper.duration} min
                        </span>
                        {locked ? (
                          <span className="readout flex items-center gap-1 text-[10px] font-medium text-amber-600">
                            <FaLock className="h-2.5 w-2.5" />
                            PREMIUM
                          </span>
                        ) : ready ? (
                          <FaArrowRight className="h-3.5 w-3.5 text-navy-400 transition-transform group-hover:translate-x-1 group-hover:text-navy-900" />
                        ) : (
                          <span className="readout text-[10px] text-navy-400">
                            COMING SOON
                          </span>
                        )}
                      </div>
                    </div>
                  );

                  if (ready) {
                    return (
                      <Link key={paper.id} href={`/questions/${paper.id}`}>
                        {card}
                      </Link>
                    );
                  }
                  if (locked) {
                    return (
                      <Link key={paper.id} href="/pricing">
                        {card}
                      </Link>
                    );
                  }
                  return <div key={paper.id}>{card}</div>;
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
