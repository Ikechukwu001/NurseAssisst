export const scenario = {
  id: "cord-prolapse",
  title: "Umbilical Cord Prolapse",
  category: "OB",
  difficulty: "Advanced",
  duration: "8 min",
  tier: "premium",
  description:
    "Respond to a sudden umbilical cord prolapse during labour — a true obstetric emergency requiring immediate action.",
  patient: "26-year-old, G3P2, in active labour, membranes just ruptured",
  stages: [
    {
      id: 1,
      reveal:
        "Immediately after rupture of membranes, the nurse notices the umbilical cord visible at the vaginal opening. The fetal heart rate has dropped to 80 bpm on the monitor.",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What is your priority action?",
      options: [
        "Manually elevate the presenting fetal part off the cord, position the mother to relieve cord compression, and call for emergency assistance and immediate delivery",
        "Document the finding and wait for the next scheduled check",
        "Ask the mother to push immediately",
        "Leave the room to find a covering nurse before initiating any action",
      ],
      correctIndex: 0,
      rationale:
        "Cord prolapse with fetal bradycardia is a true obstetric emergency — the cord is being compressed, cutting off oxygen to the baby. Immediate manual elevation of the presenting part and positioning (e.g. knee-chest or Trendelenburg) to relieve pressure, alongside calling for emergency help, must happen without any delay.",
    },
    {
      id: 2,
      reveal:
        "The nurse is maintaining pressure to relieve cord compression while the team prepares for emergency cesarean delivery.",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What should the nurse continue to do in this position?",
      options: [
        "Continue holding the presenting part off the cord and monitor fetal heart rate until delivery, while reassuring the mother throughout",
        "Release pressure once help arrives to change position",
        "Stop monitoring fetal heart rate to focus only on positioning",
        "Allow another staff member to take over without giving a clear report of the situation",
      ],
      correctIndex: 0,
      rationale:
        "Continuous manual elevation of the presenting part is critical until delivery — releasing pressure even briefly can re-compress the cord. Ongoing fetal heart rate monitoring and clear handoff communication are both essential parts of managing this emergency safely.",
    },
    {
      id: 3,
      reveal:
        "The baby is delivered via emergency cesarean and is stable. The mother, now recovering, asks what happened and why it moved so fast.",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What is the appropriate nursing communication?",
      options: [
        "Provide a clear, calm explanation of what a cord prolapse is and why rapid action was necessary to protect the baby",
        "Avoid explaining what happened",
        "Tell her it was a routine delivery with nothing unusual",
        "Suggest that the timing of her membrane rupture was her fault",
      ],
      correctIndex: 0,
      rationale:
        "Clear, honest, blame-free explanation helps the mother understand and process a frightening, fast-moving event. Cord prolapse is an unpredictable emergency, not something caused by the mother's actions.",
    },
  ],
};
