export const scenario = {
  id: "pediatric-asthma-attack",
  title: "Pediatric Acute Asthma Attack",
  category: "Pediatrics",
  difficulty: "Intermediate",
  duration: "8 min",
  tier: "premium",
  description:
    "Assess and manage a child in acute respiratory distress from an asthma attack, including recognizing signs of escalating severity.",
  patient: "7-year-old with known asthma, brought in with acute wheezing and breathlessness",
  stages: [
    {
      id: 1,
      reveal:
        "The child has an audible wheeze, is using accessory muscles, and is unable to complete full sentences. He appears anxious.",
      vitals: { hr: "128", spo2: "91", bp: "100/64", rr: "34" },
      question: "What is your priority nursing action?",
      options: [
        "Administer the prescribed bronchodilator via spacer/nebulizer and provide supplemental oxygen per protocol while keeping the child calm",
        "Have the child lie flat and rest without treatment",
        "Delay treatment until parents provide a full history",
        "Give oral fluids only",
      ],
      correctIndex: 0,
      rationale:
        "Accessory muscle use and inability to speak in full sentences indicate moderate-to-severe distress requiring immediate bronchodilator therapy — history-taking should happen alongside, not instead of, urgent treatment.",
    },
    {
      id: 2,
      reveal:
        "After treatment, there is mild improvement, but the child remains tachypneic with a silent chest on auscultation — reduced air entry with minimal wheeze heard.",
      vitals: { hr: "132", spo2: "89", bp: "98/60", rr: "36" },
      question: "What does this finding suggest, and what is the appropriate action?",
      options: [
        "Recognize a silent chest as a sign of severe, life-threatening airway obstruction and escalate immediately for urgent physician review",
        "Interpret reduced wheeze as full recovery",
        "Discharge home with a rescue inhaler",
        "Wait several hours before reassessing",
      ],
      correctIndex: 0,
      rationale:
        "A 'silent chest' is a dangerous sign — it means air movement is so poor that wheeze can no longer be heard, not that breathing has improved. This is a medical emergency requiring immediate escalation, not reassurance or discharge.",
    },
    {
      id: 3,
      reveal:
        "With escalated care, the child's breathing improves — air entry returns and SpO2 rises to 96%. Parents ask how to prevent future attacks.",
      vitals: { hr: "104", spo2: "96", bp: "104/66", rr: "22" },
      question: "What is the appropriate education?",
      options: [
        "Review trigger avoidance, correct inhaler/spacer technique, and ensure the family has a written asthma action plan before discharge",
        "Tell the parents nothing can be done to prevent future attacks",
        "Advise stopping asthma medication now that the child is better",
        "Give no specific guidance",
      ],
      correctIndex: 0,
      rationale:
        "A severe exacerbation is an important teaching moment — reinforcing trigger avoidance, correct technique, and a written action plan reduces the likelihood and severity of future attacks.",
    },
  ],
};
