export const scenario = {
  id: "acute-gi-bleed",
  title: "Acute Upper GI Bleed",
  category: "Med-Surg",
  difficulty: "Advanced",
  duration: "9 min",
  tier: "premium",
  description:
    "Recognize and manage a patient presenting with an acute upper gastrointestinal bleed, prioritizing hemodynamic stabilization.",
  patient: "52-year-old male with a history of peptic ulcer disease, presents with vomiting blood",
  stages: [
    {
      id: 1,
      reveal:
        "The patient vomited coffee-ground material followed by bright red blood. He is pale, diaphoretic, and reports dizziness when standing.",
      vitals: { hr: "128", spo2: "95", bp: "88/56", rr: "24" },
      question: "What is your priority nursing action?",
      options: [
        "Establish two large-bore IV access lines, begin fluid resuscitation, and notify the physician urgently while keeping the patient NPO",
        "Give the patient food to help settle his stomach",
        "Have the patient ambulate to reduce nausea",
        "Wait for endoscopy before starting any IV access",
      ],
      correctIndex: 0,
      rationale:
        "Hematemesis with hypotension and tachycardia indicates significant active bleeding and risk of hypovolemic shock. Immediate large-bore IV access and fluid resuscitation are the priority — oral intake or ambulation could worsen the situation, and IV access should never wait on endoscopy scheduling.",
    },
    {
      id: 2,
      reveal:
        "IV fluids are running, blood has been typed and crossed, and the physician orders a unit of packed red blood cells. The patient is anxious about receiving blood.",
      vitals: { hr: "116", spo2: "96", bp: "96/62", rr: "22" },
      question: "What is the appropriate nursing action alongside the transfusion?",
      options: [
        "Verify patient identity and blood product per protocol, monitor closely for transfusion reactions during administration, and address the patient's concerns calmly",
        "Administer the blood quickly without verification to save time",
        "Skip vital sign monitoring during the transfusion",
        "Dismiss the patient's anxiety without addressing it",
      ],
      correctIndex: 0,
      rationale:
        "Transfusion verification protocols exist to prevent life-threatening errors and must never be skipped, even in urgent situations. Close monitoring for reaction signs alongside calm, honest communication supports both safety and the patient's emotional experience.",
    },
    {
      id: 3,
      reveal:
        "Vitals are improving after transfusion and fluids, and active bleeding appears to have slowed. Endoscopy is being arranged.",
      vitals: { hr: "98", spo2: "97", bp: "112/70", rr: "18" },
      question: "What is the appropriate ongoing nursing priority?",
      options: [
        "Continue close monitoring of vital signs and stool/emesis for further bleeding, maintain NPO status, and prepare the patient for endoscopy",
        "Allow the patient to eat now that he feels better",
        "Discontinue monitoring since vitals have improved",
        "Cancel the endoscopy since bleeding appears to have stopped",
      ],
      correctIndex: 0,
      rationale:
        "Apparent stabilization does not rule out re-bleeding, and endoscopy is needed to identify and treat the bleeding source definitively. NPO status and continued close monitoring remain essential until the source is confirmed and controlled.",
    },
  ],
};
