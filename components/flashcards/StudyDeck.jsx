"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaRedo } from "react-icons/fa";
import Button from "@/components/ui/Button";
import BackButton from "@/components/ui/BackButton";
import { saveLastActivity } from "@/lib/continueTracking";


export default function StudyDeck({ deck, cards }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState([]);
  const [review, setReview] = useState([]);
  const [done, setDone] = useState(false);

  const card = cards[index];

  useEffect(() => {
  saveLastActivity({
    type: "flashcards",
    title: deck.title,
    subtitle: `${cards.length} cards`,
    href: `/flashcards/${deck.id}`,
  });
}, [deck, cards.length]);

  function goNext(bucket) {
    if (bucket === "known") setKnown((k) => [...k, card.id]);
    if (bucket === "review") setReview((r) => [...r, card.id]);

    if (index + 1 >= cards.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setFlipped(false);
    }
  }

  function restart() {
    setIndex(0);
    setFlipped(false);
    setKnown([]);
    setReview([]);
    setDone(false);
  }

  if (done) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy-50 px-6">
        <div className="w-full max-w-sm rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-sm">
          <h2 className="font-[var(--font-display)] text-2xl font-semibold text-navy-950">
            Deck complete
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="readout text-xs text-emerald-700">NEXT</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-700">
                {known.length}
              </p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4">
              <p className="readout text-xs text-amber-700">TO REVIEW</p>
              <p className="mt-1 text-2xl font-semibold text-amber-700">
                {review.length}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Button onClick={restart} variant="primary" className="w-full">
              <FaRedo className="mr-2 h-3.5 w-3.5" />
              Restart deck
            </Button>
            <Link href="/flashcards">
              <Button variant="outline" className="w-full">
                Back to decks
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-50 px-6 py-10 lg:px-16">
      <div className="mx-auto max-w-xl">
        <div className="flex items-center justify-between">
        <BackButton href="/flashcards" label="Decks" />
          <span className="readout text-xs text-navy-500">
            {index + 1} / {cards.length}
          </span>
        </div>

        <h1 className="mt-4 text-center font-[var(--font-display)] text-xl font-semibold text-navy-950">
          {deck.title}
        </h1>

        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
          <motion.div
            className="h-full bg-[var(--color-accent)]"
            animate={{ width: `${((index) / cards.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="mt-10 [perspective:1200px]">
          <motion.div
            key={card.id}
            onClick={() => setFlipped((f) => !f)}
            className="relative h-72 w-full cursor-pointer [transform-style:preserve-3d]"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 flex items-center justify-center rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-sm [backface-visibility:hidden]"
            >
              <div>
                <p className="readout mb-4 text-[10px] text-navy-400">
                  QUESTION · TAP TO FLIP
                </p>
                <p className="text-lg font-medium text-navy-950">
                  {card.front}
                </p>
              </div>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 flex items-center justify-center rounded-2xl border border-navy-800 bg-navy-950 p-8 text-center shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]"
            >
              <div>
                <p className="readout mb-4 text-[10px] text-navy-400">
                  ANSWER
                </p>
                <p className="text-lg font-medium text-white">{card.back}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {flipped && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-8 flex gap-4"
            >
              <Button
                onClick={() => goNext("review")}
                variant="outline"
                className="w-full !border-amber-300 !text-amber-700 hover:!bg-amber-50"
              >
                Review again
              </Button>
              <Button
                onClick={() => goNext("known")}
                variant="accent"
                className="w-full"
              >
                <FaCheck className="mr-2 h-3.5 w-3.5" />
                Completed
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {!flipped && (
          <p className="readout mt-8 text-center text-xs text-navy-400">
            CLICK THE CARD TO REVEAL THE ANSWER
          </p>
        )}
      </div>
    </div>
  );
}