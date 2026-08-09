import Link from "next/link";
import { FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { flashcardDecks } from "@/data/flashcards/index";
import BackButton from "@/components/ui/BackButton";

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-navy-50 px-6 py-12 lg:px-16">
        <BackButton href="/dashboard" label="Dashboard" className="mb-4" />
      <header className="mx-auto max-w-5xl">
        <p className="readout text-xs text-navy-500">REVISION</p>
        <h1 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-navy-950">
          Flashcard Decks
        </h1>
        <p className="mt-2 text-navy-600">
          Quick, focused review decks — pick a topic and start flipping.
        </p>
      </header>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {flashcardDecks.map((deck) => (
          <Link
            key={deck.id}
            href={`/flashcards/${deck.id}`}
            className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900">
                  <FaLayerGroup className="h-4 w-4 text-white" />
                </span>
                <span className="readout rounded-full bg-navy-100 px-2.5 py-1 text-[10px] text-navy-700">
                  {deck.category}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-navy-950">{deck.title}</h3>
              <p className="mt-1.5 text-sm text-navy-600">{deck.description}</p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="readout text-xs text-navy-500">
                {deck.cardCount} cards
              </span>
              <FaArrowRight className="h-3.5 w-3.5 text-navy-400 transition-transform group-hover:translate-x-1 group-hover:text-navy-900" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}