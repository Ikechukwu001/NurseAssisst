export const scenario = {
  id: "pediatric-dehydration",
  title: "Pediatric Severe Dehydration",
  category: "Pediatrics",
  difficulty: "Intermediate",
  duration: "8 min",
  tier: "free",
  description:
    "Assess and manage a young child presenting with severe dehydration from diarrhoeal disease.",
  patient: "2-year-old child with a 3-day history of watery diarrhoea, brought in lethargic",
  stages: [
    {
      id: 1,
      reveal:
        "The child has sunken eyes, dry mucous membranes, and a skin pinch that returns very slowly. The child is too lethargic to drink when offered fluids by the mother.",
      vitals: { hr: "150", spo2: "95", bp: "—", rr: "36" },
      question: "Based on these findings, what is your priority nursing action?",
      options: [
        "Classify as severe dehydration and begin rapid IV fluid resuscitation per protocol",
        "Offer oral rehydration solution only and reassess in 4 hours",
        "Wait and observe without intervention for the next few hours",
        "Withhold all fluids since the child is too lethargic to drink",
      ],
      correctIndex: 0,
      rationale:
        "Lethargy, sunken eyes, and a very slow skin pinch are classic signs of severe dehydration. A child unable to drink due to lethargy needs immediate IV fluid resuscitation rather than oral rehydration alone — delaying treatment risks hypovolemic shock.",
    },
    {
      id: 2,
      reveal:
        "IV fluids have been started with a weight-based bolus in progress. The mother asks whether she can also try giving oral rehydration solution (ORS).",
      vitals: { hr: "138", spo2: "96", bp: "—", rr: "32" },
      question: "What should the nurse advise?",
      options: [
        "Yes — ORS can be offered as soon as the child is alert enough to drink, alongside continued IV therapy per protocol",
        "No oral fluids are allowed until the child is fully discharged",
        "Only plain water should be given, not ORS",
        "IV fluids should be stopped as soon as ORS is introduced",
      ],
      correctIndex: 0,
      rationale:
        "IV rehydration and oral rehydration are not mutually exclusive — as the child becomes more alert, offering ORS supports ongoing rehydration and electrolyte replacement, while IV therapy continues to correct the fluid deficit until the child is stable.",
    },
    {
      id: 3,
      reveal:
        "The child is now more alert, tolerating small amounts of ORS, and skin turgor is improving. The mother asks how to prevent this from happening again.",
      vitals: { hr: "122", spo2: "97", bp: "—", rr: "28" },
      question: "What is the most appropriate education for the mother at this point?",
      options: [
        "Educate on hand hygiene, safe water and food practices, and continued feeding/breastfeeding during future diarrhoeal episodes",
        "Advise stopping all feeding until the child is completely recovered",
        "Tell her there is no way to prevent future episodes of diarrhoea",
        "Recommend giving antibiotics at the first sign of any future diarrhoea",
      ],
      correctIndex: 0,
      rationale:
        "Most childhood diarrhoeal disease is preventable through hand hygiene, safe water and food handling, and continued feeding/breastfeeding during illness (which supports recovery and nutrition). Routine antibiotic use for diarrhoea is not appropriate, as most cases are viral or resolve with supportive/rehydration care.",
    },
  ],
};
