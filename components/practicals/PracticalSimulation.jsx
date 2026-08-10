"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";

const STAGE_SECONDS = 90;

function useCountdown(seconds, onExpire, resetKey) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    setRemaining(seconds);
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          onExpire();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  return remaining;
}

export default function PracticalSimulation({ scenario }) {
  const [phase, setPhase] = useState("intro"); // intro | case | debrief
  const [stageIndex, setStageIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);

  const stage = scenario.stages[stageIndex];

  function handleExpire() {
    if (selected === null) commitAnswer(null);
  }

  const remaining = useCountdown(
    STAGE_SECONDS,
    handleExpire,
    phase === "case" ? stage?.id : null
  );

  function commitAnswer(choiceIndex) {
    setAnswers((prev) => [
      ...prev,
      { stageId: stage.id, choiceIndex, correct: choiceIndex === stage.correctIndex },
    ]);

    if (stageIndex + 1 >= scenario.stages.length) {
      setPhase("debrief");
    } else {
      setStageIndex((i) => i + 1);
      setSelected(null);
    }
  }

  if (phase === "intro") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy-50 px-6">
        <div className="w-full max-w-lg rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-sm">
          <p className="readout text-xs text-navy-500">{scenario.category}</p>
          <h1 className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-navy-950">
            {scenario.title}
          </h1>
          <p className="mt-4 text-sm text-navy-600">{scenario.patient}</p>
          <div className="mt-6 rounded-lg bg-navy-50 p-4 text-left">
            <p className="readout text-[10px] text-navy-500">BEFORE YOU BEGIN</p>
            <ul className="mt-2 space-y-1.5 text-sm text-navy-700">
              <li>• {scenario.stages.length} decision points, {STAGE_SECONDS}s each</li>
              <li>• No pausing, no going back once started</li>
              <li>• Rationale is shown only after the full case ends</li>
            </ul>
          </div>
          <Button
            variant="accent"
            className="mt-8 w-full"
            onClick={() => setPhase("case")}
          >
            Begin scenario
          </Button>
          <Link
            href="/practicals"
            className="mt-4 block text-xs text-navy-500 hover:text-navy-900"
          >
            Cancel and go back
          </Link>
        </div>
      </div>
    );
  }

  if (phase === "debrief") {
    const correctCount = answers.filter((a) => a.correct).length;
    return (
      <div className="min-h-screen bg-navy-50 px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-[var(--font-display)] text-2xl font-semibold text-navy-950">
            Case Debrief
          </h1>
          <p className="readout mt-1 text-sm text-navy-500">
            {correctCount} / {scenario.stages.length} decisions aligned with best practice
          </p>

          <div className="mt-8 space-y-5">
            {scenario.stages.map((s, i) => {
              const a = answers[i];
              return (
                <div
                  key={s.id}
                  className="rounded-xl border border-navy-100 bg-white p-6"
                >
                  <div className="flex items-start gap-3">
                    {a?.correct ? (
                      <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    ) : (
                      <FaTimesCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-navy-950">
                        {s.question}
                      </p>
                      <p className="mt-1 text-xs text-navy-500">
                        Your answer:{" "}
                        {a?.choiceIndex !== null
                          ? s.options[a.choiceIndex]
                          : "No answer (time expired)"}
                      </p>
                      {!a?.correct && (
                        <p className="mt-1 text-xs text-navy-500">
                          Best practice: {s.options[s.correctIndex]}
                        </p>
                      )}
                      <p className="mt-2 rounded-lg bg-navy-50 p-3 text-xs text-navy-700">
                        {s.rationale}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/practicals">
            <Button variant="primary" className="mt-8 w-full">
              Back to practicals
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // phase === "case"
  const urgent = remaining <= 15;

  return (
    <div className="min-h-screen bg-navy-50 px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between">
          <span className="readout text-xs text-navy-500">
            {scenario.category} · STAGE {stageIndex + 1}/{scenario.stages.length}
          </span>
          <span
            className={`readout flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
              urgent ? "bg-red-100 text-red-600" : "bg-red-50 text-red-500"
            }`}
          >
            <FaClock className="h-3 w-3" />
            00:{String(remaining).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-navy-100">
          <motion.div
            className="h-full bg-red-500"
            animate={{ width: `${(remaining / STAGE_SECONDS) * 100}%` }}
            transition={{ duration: 1, ease: "linear" }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mt-8 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-navy-800">
                {stage.reveal}
              </p>
              <div className="readout mt-4 flex flex-wrap gap-3 text-xs text-navy-500">
                <span>HR {stage.vitals.hr}</span>
                <span>SpO2 {stage.vitals.spo2}%</span>
                <span>BP {stage.vitals.bp}</span>
                <span>RR {stage.vitals.rr}</span>
              </div>
            </div>

            <p className="mt-8 font-medium text-navy-950">{stage.question}</p>

            <div className="mt-4 space-y-3">
              {stage.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-full rounded-lg border p-4 text-left text-sm transition-colors ${
                    selected === i
                      ? "border-navy-900 bg-navy-50 text-navy-950"
                      : "border-navy-100 bg-white text-navy-700 hover:border-navy-200"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <Button
              variant="accent"
              className="mt-6 w-full"
              disabled={selected === null}
              onClick={() => commitAnswer(selected)}
            >
              Confirm decision
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}