export const scenario = {
  id: "acute-asthma-exacerbation",
  title: "Acute Asthma Exacerbation",
  category: "Med-Surg",
  difficulty: "Intermediate",
  duration: "8 min",
  tier: "premium",
  description:
    "Manage an adult patient in acute respiratory distress from an asthma exacerbation, from bronchodilator therapy to escalation recognition.",
  patient: "24-year-old known asthmatic, brought in with acute breathlessness",
  stages: [
    {
      id: 1,
      reveal:
        "The patient has an audible wheeze, is using accessory muscles to breathe, and can only speak in short phrases. She appears anxious.",
      vitals: { hr: "118", spo2: "90", bp: "128/80", rr: "30" },
      question: "What is your priority nursing action?",
      options: [
        "Administer the prescribed short-acting bronchodilator via nebulizer/inhaler and apply supplemental oxygen per protocol",
        "Have the patient lie flat to rest",
        "Delay treatment until a chest X-ray is completed",
        "Offer only verbal reassurance without any physical intervention",
      ],
      correctIndex: 0,
      rationale:
        "Accessory muscle use, inability to speak full sentences, and low SpO2 indicate a moderate-to-severe exacerbation requiring immediate bronchodilator therapy and oxygen support — delaying treatment for imaging risks further deterioration.",
    },
    {
      id: 2,
      reveal:
        "After the first nebulizer treatment, the patient is still wheezing, her respiratory rate remains elevated, and auscultation now reveals reduced air entry with visible fatigue.",
      vitals: { hr: "124", spo2: "92", bp: "126/78", rr: "28" },
      question: "What does this finding indicate, and what is the appropriate next step?",
      options: [
        "Recognize signs of a poor response and worsening severity, and escalate to the physician for further management such as additional bronchodilator therapy, steroids, or higher-level care",
        "Assume the treatment worked, since one dose was given",
        "Discharge the patient home with an inhaler",
        "Give only oral fluids and continue to observe without escalating",
      ],
      correctIndex: 0,
      rationale:
        "Reduced air entry with persistent tachypnea and fatigue after initial treatment signals a poor response and possible impending respiratory failure — this requires prompt escalation, not reassurance that the first dose was sufficient.",
    },
    {
      id: 3,
      reveal:
        "With escalated treatment, the patient's breathing improves — respiratory rate down to 20, SpO2 96%.",
      vitals: { hr: "96", spo2: "96", bp: "120/78", rr: "20" },
      question: "What is the appropriate discharge education?",
      options: [
        "Reinforce correct inhaler technique, discuss trigger avoidance, and ensure the patient has a written asthma action plan before discharge",
        "Tell the patient no further follow-up is needed now that symptoms have resolved",
        "Advise stopping all asthma medication now that breathing has improved",
        "No education is necessary at this point",
      ],
      correctIndex: 0,
      rationale:
        "Discharge after an exacerbation is an important opportunity to reinforce self-management skills, correct inhaler technique, and ensure the patient has a clear plan for recognizing and responding to future symptoms — reducing the risk of another severe episode.",
    },
  ],
};
