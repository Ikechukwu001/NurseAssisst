export const scenario = {
  id: "neonatal-jaundice",
  title: "Neonatal Jaundice Assessment",
  category: "Pediatrics",
  difficulty: "Intermediate",
  duration: "7 min",
  tier: "free",
  description:
    "Assess and manage a newborn presenting with jaundice, distinguishing concerning patterns and initiating appropriate care.",
  patient: "3-day-old newborn, term delivery, noted to have yellowing skin",
  stages: [
    {
      id: 1,
      reveal:
        "The mother reports the baby's skin and eyes look yellow, first noticed today. The baby is feeding but slightly sleepy between feeds.",
      vitals: { hr: "138", spo2: "98", bp: "—", rr: "42" },
      question: "What is your priority nursing action?",
      options: [
        "Assess the extent and onset timing of jaundice, ensure adequate feeding frequency, and notify the physician to obtain a bilirubin level",
        "Reassure the mother that all newborn jaundice is harmless and needs no follow-up",
        "Recommend stopping breastfeeding immediately",
        "Place the baby in direct sunlight for treatment",
      ],
      correctIndex: 0,
      rationale:
        "Jaundice appearing at day 3 warrants proper assessment and a bilirubin level, since the level determines whether treatment is needed — assuming it's always harmless, or using unproven home remedies like direct sunlight, can delay appropriate care.",
    },
    {
      id: 2,
      reveal:
        "The bilirubin level returns elevated and the physician orders phototherapy. The mother is worried about separation from her baby during treatment.",
      vitals: { hr: "136", spo2: "98", bp: "—", rr: "40" },
      question: "What is the appropriate nursing action and education?",
      options: [
        "Explain the purpose of phototherapy, ensure correct eye protection and periodic repositioning during treatment, and support continued breastfeeding/skin-to-skin contact as allowed per protocol",
        "Tell the mother she cannot see her baby at all during treatment",
        "Skip eye protection since it is uncomfortable for the baby",
        "Discontinue feeds during phototherapy",
      ],
      correctIndex: 0,
      rationale:
        "Phototherapy protocols typically allow breaks for feeding and bonding, and eye protection is essential to prevent retinal damage from the light. Clear explanation reduces parental anxiety while ensuring treatment is administered safely.",
    },
    {
      id: 3,
      reveal:
        "The bilirubin level is trending down after phototherapy and the baby is feeding well. The mother asks if this means something is wrong with her baby long-term.",
      vitals: { hr: "128", spo2: "98", bp: "—", rr: "36" },
      question: "What is the appropriate nursing response?",
      options: [
        "Reassure her that many newborns experience jaundice that resolves with treatment and monitoring, while ensuring appropriate follow-up is scheduled",
        "Tell her the baby will have permanent liver problems",
        "Avoid answering her question",
        "Tell her jaundice never needs follow-up once treatment starts",
      ],
      correctIndex: 0,
      rationale:
        "Most neonatal jaundice resolves without long-term effects when appropriately monitored and treated. Honest reassurance paired with a clear follow-up plan supports the mother's understanding without over- or under-stating the situation.",
    },
  ],
};
