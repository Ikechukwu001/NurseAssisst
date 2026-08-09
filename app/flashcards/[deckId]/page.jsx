import { notFound } from "next/navigation";
import { flashcardDecks, flashcards } from "@/data/flashcards/index";
import StudyDeck from "@/components/flashcards/StudyDeck";

export default async function DeckStudyPage({ params }) {
  const { deckId } = await params;
  const deck = flashcardDecks.find((d) => d.id === deckId);
  const cards = flashcards[deckId];

  if (!deck || !cards) notFound();

  return <StudyDeck deck={deck} cards={cards} />;
}