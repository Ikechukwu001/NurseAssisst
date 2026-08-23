export const scenario = {
  id: "dka-crisis",
  title: "Diabetic Ketoacidosis Crisis",
  category: "Med-Surg",
  difficulty: "Advanced",
  duration: "9 min",
  tier: "free",
  description:
    "Manage a known type 1 diabetic in DKA — from fluid resuscitation through insulin therapy and discharge education.",
  patient: "34-year-old known type 1 diabetic, brought in by family",
  stages: [
    {
      id: 1,
      reveal:
        "Family reports the patient has been unwell for two days with vomiting and has not been taking insulin. On assessment: deep, rapid breathing, fruity-smelling breath, dry mucous membranes, and drowsiness. Blood glucose reads 420mg/dL. Temperature 37.1°C.",
      vitals: { hr: "118", spo2: "94", bp: "100/60", rr: "32 (Kussmaul)" },
      question: "What is your priority nursing action right now?",
      options: [
        "Establish IV access and begin isotonic fluid resuscitation per protocol",
        "Administer a bolus dose of insulin immediately before any fluids",
        "Restrict all oral and IV fluids until glucose is confirmed by lab",
        "Sedate the patient to manage the rapid breathing pattern",
      ],
      correctIndex: 0,
      rationale:
        "In DKA, patients are significantly fluid-depleted from osmotic diuresis and vomiting. Fluid resuscitation is the priority before insulin therapy — it restores perfusion and begins correcting the metabolic derangement. Giving insulin before adequate fluids can worsen hypotension and electrolyte shifts.",
    },
    {
      id: 2,
      reveal:
        "IV fluids are running. Repeat labs show blood glucose still elevated and serum potassium at 3.2 mmol/L (low-normal range is 3.5–5.0). The physician is preparing to order an insulin infusion.",
      vitals: { hr: "112", spo2: "95", bp: "104/64", rr: "28" },
      question: "What is the priority nursing consideration before insulin therapy begins?",
      options: [
        "Flag the low potassium — insulin drives potassium into cells and can worsen hypokalemia, so replacement should be addressed alongside or before starting insulin",
        "Proceed with insulin infusion immediately; potassium is not related to insulin therapy",
        "Withhold all further fluids until potassium normalizes on its own",
        "No action needed — 3.2 mmol/L is a normal potassium level",
      ],
      correctIndex: 0,
      rationale:
        "Insulin shifts potassium intracellularly, which can precipitate dangerous hypokalemia and cardiac arrhythmias if the patient's potassium is already low or low-normal. Potassium levels must be checked and addressed before or alongside starting insulin therapy in DKA management.",
    },
    {
      id: 3,
      reveal:
        "Several hours later, blood glucose is trending down on the insulin infusion and the patient is more alert. Family members ask what they can do to prevent this from happening again.",
      vitals: { hr: "96", spo2: "97", bp: "112/70", rr: "20" },
      question: "What is the most appropriate patient/family education at this point?",
      options: [
        "Educate on recognizing early hyperglycemia symptoms, common DKA triggers (illness, missed insulin doses), and sick-day insulin management",
        "Reassure the family that DKA cannot happen again once this episode resolves",
        "Advise the patient that insulin can be stopped once blood glucose is normal",
        "No specific education is needed at this stage",
      ],
      correctIndex: 0,
      rationale:
        "DKA is frequently precipitated by illness, missed insulin doses, or infection. Patient and family education on recognizing early warning signs, never stopping insulin during illness, and appropriate sick-day management is essential to preventing recurrence.",
    },
  ],
};
