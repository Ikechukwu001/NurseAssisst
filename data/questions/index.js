import { papers } from "./papers";

import * as gn2024 from "./general-nursing/2024";
import * as mw2024 from "./midwifery/2024";

const questionSources = {
  "gn-2024": gn2024,
  "mw-2024": mw2024,
};

export { papers };

export const questions = papers.reduce((acc, paper) => {
  const yearKey = `${paper.examType === "Midwifery" ? "mw" : "gn"}-${paper.year}`;
  const source = questionSources[yearKey];
  const paperKey = `paper${paper.paperNumber}`;
  acc[paper.id] = source?.[paperKey] ?? [];
  return acc;
}, {});