import { notFound } from "next/navigation";
import { papers } from "@/data/papers";
import { questions } from "@/data/questions";
import ExamInterface from "@/components/exam/ExamInterface";

export default async function PaperExamPage({ params }) {
  const { paperId } = await params;
  const paper = papers.find((p) => p.id === paperId);
  const paperQuestions = questions[paperId];

  if (!paper || !paperQuestions) notFound();

  return <ExamInterface paper={paper} questions={paperQuestions} />;
}