export const scenario = {
  id: "pediatric-croup",
  title: "Pediatric Croup (Laryngotracheobronchitis)",
  category: "Pediatrics",
  difficulty: "Intermediate",
  duration: "7 min",
  tier: "premium",
  description:
    "Assess and manage a young child presenting with the classic barking cough and stridor of croup.",
  patient: "18-month-old, brought in at night with a sudden barking cough",
  stages: [
    {
      id: 1,
      reveal:
        "The child has a harsh, barking cough, a hoarse voice, and audible stridor at rest. He is anxious but consolable in his mother's arms.",
      vitals: { hr: "132", spo2: "94", bp: "—", rr: "38" },
      question: "What is your priority nursing action?",
      options: [
        "Keep the child calm in a position of comfort with the parent, assess the degree of stridor and respiratory distress, and prepare for possible nebulized treatment per protocol",
        "Make the child lie flat to examine the throat with a tongue depressor",
        "Separate the child from the parent to reduce stimulation",
        "Give oral antibiotics immediately",
      ],
      correctIndex: 0,
      rationale:
        "Keeping a child with croup calm and with a parent minimizes crying, which can worsen airway obstruction. Examining the throat with a tongue depressor can trigger distress and further airway compromise and should be avoided; croup is viral, so antibiotics are not first-line treatment.",
    },
    {
      id: 2,
      reveal:
        "The physician orders nebulized epinephrine and a dose of oral dexamethasone, given persistent stridor at rest.",
      vitals: { hr: "128", spo2: "95", bp: "—", rr: "34" },
      question: "What should the nurse do after nebulized epinephrine administration?",
      options: [
        "Monitor closely for symptom recurrence (\"rebound\"), as the effect of nebulized epinephrine is temporary and stridor can return after a couple of hours",
        "Assume the child is fully treated and can be discharged immediately",
        "Discontinue all monitoring since the treatment was given",
        "Assume no monitoring is needed since dexamethasone was also given",
      ],
      correctIndex: 0,
      rationale:
        "Nebulized epinephrine provides rapid but temporary relief, and rebound of symptoms is a known risk within a few hours as its effect wears off. A period of observation is standard practice before considering discharge.",
    },
    {
      id: 3,
      reveal:
        "The child's stridor has resolved at rest, and he is breathing comfortably and tolerating oral fluids. His mother asks what to watch for at home.",
      vitals: { hr: "112", spo2: "97", bp: "—", rr: "26" },
      question: "What is the appropriate discharge education?",
      options: [
        "Educate on signs of worsening (stridor at rest, increased work of breathing, bluish color) that require immediate return to care, and reassure her about the expected course of croup",
        "Tell her no follow-up or warning signs are needed",
        "Advise keeping the child completely still and away from all activity indefinitely",
        "Give no specific guidance since symptoms resolved",
      ],
      correctIndex: 0,
      rationale:
        "Croup symptoms often fluctuate, and clear warning-sign education helps caregivers know when to seek urgent care versus manage mild symptoms at home — an essential part of safe discharge.",
    },
  ],
};
