// index.js — new shape
import { anatomyPhysiology } from './subjects/anatomy-physiology';
import { medicalSurgical } from './subjects/medical-surgical';
import { pharmacology } from './subjects/pharmacology';
// ...import every subject file

const subjectPools = {
  "anatomy-physiology": anatomyPhysiology,
  "medical-surgical": medicalSurgical,
  "pharmacology": pharmacology,
  // ...
};

export function getQuestionsForPaper(examType, paperKey) {
  const paperConfig = papers[examType][paperKey];
  return paperConfig.subjects.flatMap(({ key, count }) =>
    subjectPools[key].slice(0, count)
  );
}

// still expose subject-level access directly, for a subject-practice mode
export function getQuestionsForSubject(subjectKey) {
  return subjectPools[subjectKey];
}