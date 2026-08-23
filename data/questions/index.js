import { papers } from "./papers";

import * as anatomyPhysiologyMod from "./anatomy-physiology";
import * as nutritionMod from "./nutrition";
import * as physicsChemMathsMod from "./physics-chem-maths";
import * as medicalSurgicalMod from "./medical-surgical";
import * as pharmacologyMod from "./pharmacology";
import * as communityHealthMod from "./community-health";
import * as paediatricsMod from "./paediatrics";
import * as psychiatricMentalHealthMod from "./psychiatric-mental-health";
import * as ethicsJurisprudenceMod from "./ethics-jurisprudence";
import * as midwiferyAntenatalMod from "./midwifery-antenatal";
import * as midwiferyIntrapartumMod from "./midwifery-intrapartum";
import * as midwiferyPostnatalNeonatalMod from "./midwifery-postnatal-neonatal";

// Reads whichever array is exported from a subject file, regardless of the
// export's name. An empty file, or a file with no array export yet,
// safely resolves to an empty pool instead of crashing the build.
function firstArrayExport(mod) {
  const values = Object.values(mod);
  const found = values.find((v) => Array.isArray(v));
  return found || [];
}

const subjectPools = {
  "anatomy-physiology": firstArrayExport(anatomyPhysiologyMod),
  nutrition: firstArrayExport(nutritionMod),
  "physics-chem-maths": firstArrayExport(physicsChemMathsMod),
  "medical-surgical": firstArrayExport(medicalSurgicalMod),
  pharmacology: firstArrayExport(pharmacologyMod),
  "community-health": firstArrayExport(communityHealthMod),
  paediatrics: firstArrayExport(paediatricsMod),
  "psychiatric-mental-health": firstArrayExport(psychiatricMentalHealthMod),
  "ethics-jurisprudence": firstArrayExport(ethicsJurisprudenceMod),
  "midwifery-antenatal": firstArrayExport(midwiferyAntenatalMod),
  "midwifery-intrapartum": firstArrayExport(midwiferyIntrapartumMod),
  "midwifery-postnatal-neonatal": firstArrayExport(midwiferyPostnatalNeonatalMod),
};

export { papers };

// questions[paper.id] — assembled from that paper's subject pools per papers.js.
// Right now every pool is empty, so every paper naturally shows 0 questions and
// the browse page's existing "COMING SOON" logic (questions[paper.id]?.length > 0)
// handles that correctly with no changes needed there. As soon as a subject file
// gets real question content, it flows into every paper that references it,
// capped at the configured count — no further wiring required.
export const questions = Object.fromEntries(
  papers.map((paper) => [
    paper.id,
    paper.subjects.flatMap(({ key, count }) =>
      (subjectPools[key] || []).slice(0, count)
    ),
  ])
);

// Direct subject-level access, for a future subject-practice mode.
export function getQuestionsForSubject(subjectKey) {
  return subjectPools[subjectKey] || [];
}
