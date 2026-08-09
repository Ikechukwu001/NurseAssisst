import { deck as fundamentals, cards as fundamentalsCards } from "./fundamentals";
import { deck as anatomyPhysiology, cards as anatomyPhysiologyCards } from "./anatomy-physiology";
import { deck as medicalSurgical, cards as medicalSurgicalCards } from "./medical-surgical";
import { deck as maternalChild, cards as maternalChildCards } from "./maternal-child";
import { deck as communityHealth, cards as communityHealthCards } from "./community-health";
import { deck as mentalHealth, cards as mentalHealthCards } from "./mental-health";
import { deck as pharmacology, cards as pharmacologyCards } from "./pharmacology";
import { deck as microbiologyPathology, cards as microbiologyPathologyCards } from "./microbiology-pathology";
import { deck as nutritionDietetics, cards as nutritionDieteticsCards } from "./nutrition-dietetics";
import { deck as ethicsJurisprudence, cards as ethicsJurisprudenceCards } from "./ethics-jurisprudence";

export const flashcardDecks = [
  fundamentals,
  anatomyPhysiology,
  medicalSurgical,
  maternalChild,
  communityHealth,
  mentalHealth,
  pharmacology,
  microbiologyPathology,
  nutritionDietetics,
  ethicsJurisprudence,
];

export const flashcards = {
  [fundamentals.id]: fundamentalsCards,
  [anatomyPhysiology.id]: anatomyPhysiologyCards,
  [medicalSurgical.id]: medicalSurgicalCards,
  [maternalChild.id]: maternalChildCards,
  [communityHealth.id]: communityHealthCards,
  [mentalHealth.id]: mentalHealthCards,
  [pharmacology.id]: pharmacologyCards,
  [microbiologyPathology.id]: microbiologyPathologyCards,
  [nutritionDietetics.id]: nutritionDieteticsCards,
  [ethicsJurisprudence.id]: ethicsJurisprudenceCards,
};