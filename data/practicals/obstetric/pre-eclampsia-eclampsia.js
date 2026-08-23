export const scenario = {
  id: "pre-eclampsia-eclampsia",
  title: "Severe Pre-eclampsia",
  category: "OB",
  difficulty: "Advanced",
  duration: "10 min",
  tier: "free",
  description:
    "Recognize and manage a pregnant patient with severe pre-eclampsia, including seizure prevention and escalation.",
  patient: "32-year-old, G1P0, 34 weeks gestation, presents with headache and visual disturbances",
  stages: [
    {
      id: 1,
      reveal:
        "She complains of a severe headache, blurred vision, and epigastric pain. Urine dipstick shows +3 protein.",
      vitals: { hr: "96", spo2: "97", bp: "168/112", rr: "20" },
      question: "What is your priority nursing action?",
      options: [
        "Notify the physician immediately, initiate seizure precautions, and prepare for magnesium sulfate per protocol",
        "Reassure the patient that these symptoms are normal in pregnancy",
        "Discharge her home with instructions to rest",
        "Give a mild analgesic and send her home",
      ],
      correctIndex: 0,
      rationale:
        "Severe headache, visual disturbance, epigastric pain, and markedly elevated blood pressure with proteinuria are classic signs of severe pre-eclampsia and warn of impending eclampsia (seizures). This requires immediate escalation and seizure prophylaxis, not reassurance or discharge.",
    },
    {
      id: 2,
      reveal:
        "A magnesium sulfate infusion is started per order for seizure prophylaxis.",
      vitals: { hr: "92", spo2: "97", bp: "158/104", rr: "18" },
      question: "What should the nurse monitor closely during administration?",
      options: [
        "Deep tendon reflexes, respiratory rate, and urine output — magnesium toxicity can cause loss of reflexes and respiratory depression",
        "No special monitoring is needed once the infusion starts",
        "Only check blood pressure every 4 hours",
        "Monitor blood glucose only",
      ],
      correctIndex: 0,
      rationale:
        "Magnesium sulfate has a narrow therapeutic range, and toxicity presents first as loss of deep tendon reflexes, followed by respiratory depression. Close, frequent monitoring of reflexes, respiratory rate, and urine output (magnesium is renally cleared) is essential throughout the infusion.",
    },
    {
      id: 3,
      reveal:
        "The patient is stable on magnesium, with blood pressure trending down. She asks how this will affect her baby and delivery plan.",
      vitals: { hr: "88", spo2: "98", bp: "142/92", rr: "18" },
      question: "What is the appropriate nursing response?",
      options: [
        "Explain that the care team is closely monitoring both her and the baby, and that delivery timing will be determined based on maternal and fetal wellbeing",
        "Tell her the pregnancy must be terminated immediately",
        "Avoid discussing the baby's condition at all",
        "Assure her nothing is wrong with the baby without any assessment",
      ],
      correctIndex: 0,
      rationale:
        "Honest, appropriately scoped communication supports the patient's understanding without overstepping into decisions that belong to the full care team's ongoing assessment. Delivery timing in severe pre-eclampsia is individualized based on maternal and fetal status, not a fixed rule.",
    },
  ],
};
