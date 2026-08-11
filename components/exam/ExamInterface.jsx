"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaClock, FaFlag, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { saveLastActivity } from "@/lib/continueTracking";


export default function ExamInterface({ paper, questions }) {
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState(new Set());
  const [current, setCurrent] = useState(0);
  const [remaining, setRemaining] = useState(paper.duration * 60);
  const [submitted, setSubmitted] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
  if (submitted) return;
  saveLastActivity({
    type: "questions",
    title: paper.subject,
    subtitle: `Paper ${paper.paperNumber} · ${paper.examType}`,
    href: `/questions/${paper.id}`,
  });
}, [paper, submitted]);

  useEffect(() => {
    if (submitted) return;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          setSubmitted(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [submitted]);

  function selectAnswer(qId, optionIndex) {
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  }

  function toggleFlag(qId) {
    setFlagged((prev) => {
      const next = new Set(prev);
      next.has(qId) ? next.delete(qId) : next.add(qId);
      return next;
    });
  }

  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");
  const urgent = remaining <= 60;

  if (submitted) {
    const correctCount = questions.filter(
      (q) => answers[q.id] === q.correctIndex
    ).length;
    const percentage = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="min-h-screen bg-navy-50 px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-sm">
            <p className="readout text-xs text-navy-500">{paper.code} · RESULT</p>
            <h1 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-navy-950">
              {percentage}%
            </h1>
            <p className="mt-1 text-navy-600">
              {correctCount} of {questions.length} correct
            </p>
          </div>

                <div className="mt-8 space-y-4">
          {questions.map((q, i) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-navy-100 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  ) : (
                    <FaTimesCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                  )}
                  <div className="flex-1">
                    <p className="readout text-[10px] text-navy-400">
                      QUESTION {i + 1}
                    </p>
                    <p className="mt-1 text-sm font-medium text-navy-950">
                      {q.text}
                    </p>

                    {/* Every option, with its own note */}
                    <div className="mt-4 space-y-2">
                      {q.options.map((opt, optIndex) => {
                        const isUserChoice = userAnswer === optIndex;
                        const isCorrectChoice = optIndex === q.correctIndex;
                        return (
                          <div
                            key={optIndex}
                            className={`rounded-lg border p-3 text-xs ${
                              isCorrectChoice
                                ? "border-emerald-200 bg-emerald-50"
                                : isUserChoice
                                ? "border-red-200 bg-red-50"
                                : "border-navy-100 bg-navy-50"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`font-medium ${
                                  isCorrectChoice
                                    ? "text-emerald-800"
                                    : isUserChoice
                                    ? "text-red-700"
                                    : "text-navy-700"
                                }`}
                              >
                                {opt}
                              </span>
                              <span className="readout flex flex-shrink-0 gap-1 text-[9px]">
                                {isUserChoice && (
                                  <span className="rounded-full bg-white px-2 py-0.5 text-navy-500">
                                    YOUR ANSWER
                                  </span>
                                )}
                                {isCorrectChoice && (
                                  <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-white">
                                    CORRECT
                                  </span>
                                )}
                              </span>
                            </div>
                            {q.optionNotes?.[optIndex] && (
                              <p className="mt-1.5 text-navy-500">
                                {q.optionNotes[optIndex]}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {q.explanation && (
                      <div className="mt-3 rounded-lg bg-navy-950 p-3">
                        <p className="readout text-[9px] text-navy-400">SUMMARY</p>
                        <p className="mt-1 text-xs text-navy-100">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

          <Link href="/questions">
            <Button variant="primary" className="mt-8 w-full">
              Back to papers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="flex min-h-screen flex-col bg-navy-50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 border-b border-navy-100 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="readout text-[10px] text-navy-500">
              {paper.subject} · {paper.code}
            </p>
            <p className="text-sm font-medium text-navy-950">
              Question {current + 1} of {questions.length}
            </p>
          </div>
          <span
            className={`readout flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${
              urgent ? "bg-red-500/10 text-red-500" : "bg-navy-100 text-navy-800"
            }`}
          >
            <FaClock className="h-3 w-3" />
            {minutes}:{seconds}
          </span>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8 lg:flex-row">
        {/* Question panel */}
        <div className="flex-1">
          <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <p className="font-medium text-navy-950">{q.text}</p>
              <button
                onClick={() => toggleFlag(q.id)}
                className={`flex-shrink-0 rounded-md p-2 transition-colors ${
                  flagged.has(q.id)
                    ? "bg-amber-100 text-amber-600"
                    : "text-navy-300 hover:bg-navy-50 hover:text-navy-500"
                }`}
                aria-label="Flag question"
              >
                <FaFlag className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => selectAnswer(q.id, i)}
                  className={`w-full rounded-lg border p-4 text-left text-sm transition-colors ${
                    answers[q.id] === i
                      ? "border-navy-900 bg-navy-50 text-navy-950"
                      : "border-navy-100 text-navy-700 hover:border-navy-200"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              disabled={current === 0}
              onClick={() => setCurrent((c) => c - 1)}
            >
              Previous
            </Button>
            {current === questions.length - 1 ? (
              <Button variant="accent" onClick={() => setConfirmOpen(true)}>
                Submit exam
              </Button>
            ) : (
              <Button variant="primary" onClick={() => setCurrent((c) => c + 1)}>
                Next
              </Button>
            )}
          </div>
        </div>

        {/* Question nav grid */}
        <div className="w-full flex-shrink-0 lg:w-64">
          <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm">
            <p className="readout text-[10px] text-navy-500">NAVIGATOR</p>
            <div className="mt-3 grid grid-cols-5 gap-2 lg:grid-cols-4">
              {questions.map((qq, i) => {
                const isAnswered = answers[qq.id] !== undefined;
                const isFlagged = flagged.has(qq.id);
                const isCurrent = i === current;
                return (
                  <button
                    key={qq.id}
                    onClick={() => setCurrent(i)}
                    className={`readout relative h-9 w-9 rounded-md text-xs font-medium transition-colors ${
                      isCurrent
                        ? "bg-navy-900 text-white"
                        : isAnswered
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-navy-50 text-navy-500"
                    }`}
                  >
                    {i + 1}
                    {isFlagged && (
                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 space-y-1.5 text-xs text-navy-500">
              <p>
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Answered
              </p>
              <p>
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400" />
                Flagged
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit confirmation */}
      {confirmOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-navy-950/60 px-6">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="font-[var(--font-display)] text-lg font-semibold text-navy-950">
              Submit exam?
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              You've answered {Object.keys(answers).length} of{" "}
              {questions.length} questions. This can't be undone.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setConfirmOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="accent"
                className="w-full"
                onClick={() => setSubmitted(true)}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}