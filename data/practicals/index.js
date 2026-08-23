import { medSurgScenarios } from "./med-surg";
import { obstetricScenarios } from "./obstetric";
import { pediatricsScenarios } from "./pediatrics";
import { psychiatricScenarios } from "./psychiatric";
import { communityHealthScenarios } from "./community-health";

const allScenarios = [
  ...medSurgScenarios,
  ...obstetricScenarios,
  ...pediatricsScenarios,
  ...psychiatricScenarios,
  ...communityHealthScenarios,
];

// Single source of truth: the lookup used by the case player...
export const scenarios = Object.fromEntries(allScenarios.map((s) => [s.id, s]));

// ...and the metadata used by the browse page, both derived from the same
// scenario objects. There is nothing left to hand-sync or drift out of step.
export const scenarioCategories = allScenarios.map((s) => ({
  id: s.id,
  title: s.title,
  category: s.category,
  difficulty: s.difficulty,
  duration: s.duration,
  tier: s.tier,
  description: s.description,
}));
