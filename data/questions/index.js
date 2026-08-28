import { papers } from "./papers";
import { questions as gn2022Paper1 } from "./general-nursing/2022-paper1";
import { questions as gn2022Paper2 } from "./general-nursing/2022-paper2";
import { questions as gn2023Paper1 } from "./general-nursing/2023-paper1";
import { questions as gn2024Paper1 } from "./general-nursing/2024-paper1";

export { papers };

// questions[paper.id] — one entry per paper that actually has content.
// The browse page's existing `ready = questions[paper.id]?.length > 0`
// check already handles anything not listed here as "coming soon" —
// no changes needed there.
export const questions = {
  "gn-2022-paper1": gn2022Paper1,
  "gn-2022-paper2": gn2022Paper2,
  "gn-2023-paper1": gn2023Paper1,
  "gn-2024-paper1": gn2024Paper1,
};
