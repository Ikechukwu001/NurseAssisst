export const scenario = {
  id: "postpartum-hemorrhage",
  title: "Postpartum Haemorrhage",
  category: "OB",
  difficulty: "Advanced",
  duration: "10 min",
  tier: "free",
  description: "Recognize and respond to a postpartum hemorrhage scenario.",
  patient: "28-year-old, G2P2, 30 minutes post vaginal delivery",
  stages: [
    {
      id: 1,
      reveal:
        "The mother is bleeding heavily — pads are saturating quickly. On palpation, the fundus feels soft and boggy rather than firm. She appears pale and slightly restless.",
      vitals: { hr: "118", spo2: "95", bp: "90/58", rr: "24" },
      question: "What is your priority nursing action right now?",
      options: [
        "Perform fundal massage, call for help, and assess for retained placenta or lacerations",
        "Leave the uterus untouched and continue routine observation only",
        "Administer an antihypertensive medication",
        "Assist the mother to the bathroom to check for clots",
      ],
      correctIndex: 0,
      rationale:
        "A boggy, poorly contracted uterus (uterine atony) is the most common cause of postpartum haemorrhage. Immediate fundal massage stimulates contraction and reduces bleeding, while calling for help and assessing for other causes (retained products, lacerations) should happen simultaneously — this is a time-critical emergency.",
    },
    {
      id: 2,
      reveal:
        "Fundal massage has firmed the uterus somewhat, but bleeding continues. The physician orders an oxytocin infusion.",
      vitals: { hr: "112", spo2: "96", bp: "96/60", rr: "22" },
      question: "What should the nurse do alongside administering the ordered medication?",
      options: [
        "Ensure IV access is secure, monitor vital signs closely, and prepare for possible additional uterotonic agents per protocol",
        "Administer the oxytocin orally instead of via the ordered route",
        "Discontinue IV fluids once the medication is given",
        "No further monitoring is needed after administering the medication",
      ],
      correctIndex: 0,
      rationale:
        "Oxytocin is a first-line uterotonic, but PPH management requires continuous reassessment — securing IV access, close vital sign monitoring for ongoing shock, and readiness to escalate to additional uterotonics (e.g. misoprostol, ergometrine) if bleeding does not resolve.",
    },
    {
      id: 3,
      reveal:
        "Bleeding has slowed and the uterus is now firm on palpation. Vitals are stabilizing. The mother is anxious and asks why this happened to her.",
      vitals: { hr: "100", spo2: "97", bp: "105/65", rr: "20" },
      question: "What is the most appropriate nursing response?",
      options: [
        "Explain that uterine atony is a common and treatable cause of postpartum bleeding, and reassure her that she is being closely monitored",
        "Tell her there is nothing to explain and change the subject",
        "Suggest that something she did during labour caused the bleeding",
        "Avoid answering and refer her to look it up herself later",
      ],
      correctIndex: 0,
      rationale:
        "Clear, honest, reassuring communication reduces anxiety without minimizing the seriousness of the event. Explaining uterine atony as a common, manageable cause — without assigning blame — supports the mother's understanding and trust in her care.",
    },
  ],
};
