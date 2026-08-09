import { notFound } from "next/navigation";
import { scenarios } from "@/data/practicals";
import PracticalSimulation from "@/components/practicals/PracticalSimulation";

export default async function PracticalPage({ params }) {
  const { scenarioId } = await params;
  const scenario = scenarios[scenarioId];

  if (!scenario) notFound();

  return <PracticalSimulation scenario={scenario} />;
}