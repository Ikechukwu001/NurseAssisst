export const scenario = {
  id: "acute-coronary-syndrome",
  title: "Acute Coronary Syndrome",
  category: "Med-Surg",
  difficulty: "Advanced",
  duration: "9 min",
  tier: "free",
  description:
    "Recognize and respond to a patient presenting with classic acute coronary syndrome symptoms, from initial stabilization through reperfusion urgency.",
  patient: "61-year-old male with hypertension and smoking history, presents with sudden chest pain",
  stages: [
    {
      id: 1,
      reveal:
        "The patient reports crushing central chest pain radiating to his left arm and jaw, onset about 30 minutes ago. He is diaphoretic and nauseated.",
      vitals: { hr: "102", spo2: "94", bp: "148/92", rr: "22" },
      question: "What is your priority nursing action?",
      options: [
        "Obtain a 12-lead ECG immediately, apply oxygen if indicated, and notify the physician while preparing for urgent cardiac evaluation",
        "Give the patient food to help settle his nausea",
        "Have the patient walk to the bathroom first before further assessment",
        "Wait for cardiac enzyme results before taking any action",
      ],
      correctIndex: 0,
      rationale:
        "Chest pain radiating to the arm/jaw with diaphoresis and nausea is a classic acute coronary syndrome presentation. A 12-lead ECG within minutes of arrival is critical for time-sensitive diagnosis and treatment — delaying for lab results or having the patient exert themselves risks further myocardial damage.",
    },
    {
      id: 2,
      reveal:
        "The ECG shows ST-segment elevation. The physician orders aspirin and prepares for urgent cardiac catheterization. The patient asks why he's getting aspirin \"for chest pain.\"",
      vitals: { hr: "108", spo2: "95", bp: "146/90", rr: "22" },
      question: "What is the appropriate nursing action?",
      options: [
        "Administer chewable aspirin as ordered — its antiplatelet effect helps limit clot progression — and explain its role in limiting heart muscle damage, while continuing close monitoring",
        "Delay aspirin until the pain resolves on its own",
        "Give ibuprofen instead, since the patient asked about pain relief",
        "Withhold explanation to avoid worrying the patient",
      ],
      correctIndex: 0,
      rationale:
        "Aspirin's antiplatelet action reduces further clot formation in an evolving myocardial infarction, and prompt administration is time-critical. Clear, honest explanation supports informed consent and reduces the patient's anxiety without delaying treatment.",
    },
    {
      id: 3,
      reveal:
        "The patient is stabilized and being transferred to the cath lab, still visibly anxious. He asks the nurse, \"Am I going to be okay?\"",
      vitals: { hr: "98", spo2: "96", bp: "138/86", rr: "20" },
      question: "What is the most appropriate nursing response?",
      options: [
        "Provide honest, reassuring communication about the care team's actions, while continuing to monitor for arrhythmias or worsening symptoms during transfer",
        "Promise him that nothing bad will happen",
        "Avoid answering and leave the room",
        "Tell him this is likely not serious",
      ],
      correctIndex: 0,
      rationale:
        "Honest, calm communication that acknowledges the situation without making guarantees supports the patient's trust and emotional coping, while ongoing clinical vigilance during transfer remains essential — arrhythmias are a common complication in the acute phase of MI.",
    },
  ],
};
