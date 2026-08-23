export const scenario = {
  id: "preterm-labour",
  title: "Preterm Labour Management",
  category: "OB",
  difficulty: "Intermediate",
  duration: "8 min",
  tier: "premium",
  description:
    "Assess and manage a patient presenting with signs of preterm labour, from initial assessment through tocolytic therapy considerations.",
  patient: "29-year-old, G2P1, 30 weeks gestation, presents with regular contractions",
  stages: [
    {
      id: 1,
      reveal:
        "She reports regular contractions every 5–6 minutes for the past two hours, with mild lower back pain. Cervical exam shows early dilation.",
      vitals: { hr: "92", spo2: "98", bp: "118/76", rr: "18" },
      question: "What is your priority nursing action?",
      options: [
        "Notify the physician, prepare for possible tocolytic therapy and corticosteroids for fetal lung maturity, and continue fetal monitoring",
        "Tell the patient this is normal at any gestation and send her home",
        "Delay notifying the physician until contractions are 2 minutes apart",
        "Discontinue fetal monitoring since her vitals are stable",
      ],
      correctIndex: 0,
      rationale:
        "Regular contractions with cervical change at 30 weeks meet criteria for preterm labour, which requires prompt escalation. Corticosteroids given early can significantly improve outcomes for the baby if delivery cannot be prevented, so timing matters.",
    },
    {
      id: 2,
      reveal:
        "The physician orders a corticosteroid injection to support fetal lung maturity and starts a tocolytic to attempt to delay delivery. The patient asks why she's getting a steroid if it's the baby who needs help.",
      vitals: { hr: "90", spo2: "98", bp: "116/74", rr: "18" },
      question: "What is the appropriate nursing response and action?",
      options: [
        "Explain that antenatal corticosteroids cross the placenta to help mature the baby's lungs in case preterm delivery cannot be prevented, and administer as ordered",
        "Tell her the steroid is for her own pain relief",
        "Withhold the explanation to avoid confusion",
        "Delay the injection since she asked a question",
      ],
      correctIndex: 0,
      rationale:
        "Clear explanation of the corticosteroid's purpose supports informed understanding without delaying a time-sensitive treatment — its benefit for fetal lung maturity is greatest when given as early as possible before potential preterm delivery.",
    },
    {
      id: 3,
      reveal:
        "Contractions have slowed with tocolytic therapy. The patient asks what she should watch for once discharged, if that becomes the plan.",
      vitals: { hr: "86", spo2: "98", bp: "114/72", rr: "16" },
      question: "What is the appropriate discharge education?",
      options: [
        "Educate on signs of returning labour (regular contractions, fluid leakage, bleeding) and when to seek immediate care, along with any activity modifications as ordered",
        "Tell her no further precautions are needed",
        "Advise complete bed rest for the remainder of pregnancy without physician guidance",
        "Give no specific guidance since she is not currently in labour",
      ],
      correctIndex: 0,
      rationale:
        "Clear warning-sign education empowers the patient to seek timely care if labour returns, which is common after an episode of preterm labour. Guidance should follow the physician's specific plan rather than defaulting to blanket bed rest, which is not universally recommended.",
    },
  ],
};
