export const scenario = {
  id: "obstetric-emergency",
  title: "Obstetric Emergency",
  category: "OB",
  patient: "29-year-old female, 20 minutes post vaginal delivery",
  stages: [
    {
      id: 1,
      reveal:
        "20 minutes post-delivery of a healthy infant. You note steady, heavy vaginal bleeding soaking through a pad in under 5 minutes. Fundus is soft (boggy) and difficult to locate above the umbilicus. Vitals: HR 104, BP 108/68, RR 20, SpO2 97%.",
      vitals: { hr: "104", spo2: "97", bp: "108/68", rr: "20" },
      question: "What is your priority nursing action?",
      options: [
        "Perform fundal massage and notify the midwife/physician immediately",
        "Encourage the patient to breastfeed and reassess in 1 hour",
        "Document the bleeding and continue routine postpartum checks",
        "Ambulate the patient to the bathroom to assess further",
      ],
      correctIndex: 0,
      rationale:
        "A boggy, poorly contracted fundus with heavy bleeding indicates uterine atony — the most common cause of postpartum hemorrhage. Fundal massage stimulates contraction and must be paired with immediate escalation.",
    },
    {
      id: 2,
      reveal:
        "Fundal massage is performed and the team is notified. Bleeding continues; estimated blood loss now exceeds 600 mL. Patient reports feeling dizzy. HR 118, BP 92/58, RR 24, SpO2 95%.",
      vitals: { hr: "118", spo2: "95", bp: "92/58", rr: "24" },
      question: "What do these findings indicate, and what is the priority action?",
      options: [
        "Early signs of hypovolemic shock — establish/confirm large-bore IV access and prepare for uterotonic administration",
        "A normal postpartum response — no action needed",
        "Anxiety only — reassure the patient and delay further intervention",
        "Delayed bladder emptying — offer a bedpan and reassess in 30 minutes",
      ],
      correctIndex: 0,
      rationale:
        "Rising heart rate, falling blood pressure, dizziness, and ongoing blood loss beyond 500 mL indicate developing hypovolemic shock from postpartum hemorrhage. IV access and uterotonic therapy (e.g., oxytocin) are time-critical priorities.",
    },
    {
      id: 3,
      reveal:
        "IV access is secured and uterotonics are given per protocol. The physician is en route. What should you do while awaiting arrival?",
      vitals: { hr: "122", spo2: "94", bp: "88/56", rr: "26" },
      question: "Select your next nursing action.",
      options: [
        "Continue fundal massage, monitor vitals closely, and prepare for possible blood transfusion",
        "Leave the patient briefly to update the family in the waiting area",
        "Reduce IV fluid rate to avoid overload",
        "Wait passively without further intervention until the physician arrives",
      ],
      correctIndex: 0,
      rationale:
        "In an active postpartum hemorrhage with worsening vitals, the nurse continues supportive measures — ongoing fundal massage, close monitoring, and readiness for transfusion — rather than pausing care while awaiting the physician.",
    },
  ],
};