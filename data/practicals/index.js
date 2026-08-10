import { scenarioCategories } from "./categories";
import { scenario as medSurg } from "./med-surg";
import { scenario as obstetric } from "./obstetric";
import { scenario as pediatric } from "./pediatric";

export { scenarioCategories };

export const scenarios = {
  [medSurg.id]: medSurg,
  [obstetric.id]: obstetric,
  [pediatric.id]: pediatric,
};