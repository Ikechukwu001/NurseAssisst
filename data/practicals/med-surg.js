export const scenario = {
  id: "med-surg-post-op",
  title: "Post-Operative Care",
  category: "Med-Surg",
  patient: "58-year-old male, Day 1 post-abdominal surgery",
  stages: [
    {
      id: 1,
      reveal:
        "6 hours post-op. Patient reports pain at incision site, rated 7/10. Vitals: HR 96, BP 132/84, RR 18, SpO2 97%.",
      vitals: { hr: "96", spo2: "97", bp: "132/84", rr: "18" },
      question: "What is your priority nursing action?",
      options: [
        "Administer prescribed analgesia and reassess pain in 30 minutes",
        "Withhold pain medication until the surgeon reviews",
        "Reposition the patient and reassess in 2 hours",
        "Document the pain score and continue routine monitoring",
      ],
      correctIndex: 0,
      rationale:
        "Unmanaged post-operative pain delays mobilization and recovery. Administering prescribed analgesia and reassessing is the priority action within the nurse's scope.",
    },
    {
      id: 2,
      reveal:
        "2 hours later. Urine output has been 15mL/hr for the past 2 hours. Patient appears drowsy but rousable. BP now 100/62, HR 110.",
      vitals: { hr: "110", spo2: "96", bp: "100/62", rr: "20" },
      question: "What do these findings most likely indicate?",
      options: [
        "Normal post-operative recovery",
        "Possible hypovolemia requiring urgent review",
        "Effective pain management",
        "Expected effect of opioid analgesia only",
      ],
      correctIndex: 1,
      rationale:
        "Falling BP, rising HR, reduced urine output, and altered consciousness together suggest hypovolemia — this needs urgent medical review, not routine documentation.",
    },
    {
      id: 3,
      reveal:
        "You escalate to the surgical team. While awaiting review, what should you do?",
      vitals: { hr: "112", spo2: "95", bp: "98/60", rr: "22" },
      question: "Select your next nursing action.",
      options: [
        "Increase IV fluid rate as per existing orders and continue close monitoring",
        "Wait for the team without further action",
        "Discontinue IV access",
        "Ambulate the patient to improve circulation",
      ],
      correctIndex: 0,
      rationale:
        "While awaiting medical review, the nurse should act within existing orders (e.g. titrating IV fluids per protocol) and maintain close monitoring — not remain passive.",
    },
  ],
};