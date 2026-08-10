import { notFound } from "next/navigation";
import { papers, questions } from "@/data/questions";
import ExamInterface from "@/components/exam/ExamInterface";

export default async function PaperExamPage({ params }) {
  const { paperId } = await params;
  const paper = papers.find((p) => p.id === paperId);
  const paperQuestions = questions[paperId];

  if (!paper || !paperQuestions || paperQuestions.length === 0) notFound();

  return <ExamInterface paper={paper} questions={paperQuestions} />;
}