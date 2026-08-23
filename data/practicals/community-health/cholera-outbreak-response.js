export const scenario = {
  id: "cholera-outbreak-response",
  title: "Cholera Outbreak Response",
  category: "Community Health",
  difficulty: "Intermediate",
  duration: "8 min",
  tier: "free",
  description:
    "Respond to a suspected cholera cluster — individual rehydration, outbreak containment, and community education.",
  patient: "Community health post, multiple presentations during a suspected outbreak",
  stages: [
    {
      id: 1,
      reveal:
        "Within 24 hours, several adults from the same waterside community present with sudden-onset profuse watery diarrhoea and vomiting. The first patient assessed is severely dehydrated, lethargic, with a weak radial pulse.",
      vitals: { hr: "128", spo2: "94", bp: "88/56", rr: "26" },
      question: "What is your priority action, for both this patient and the wider situation?",
      options: [
        "Begin urgent rehydration per protocol for the patient while simultaneously notifying local health authorities of a suspected cholera cluster",
        "Treat only this individual patient and wait to see if more cases arrive before reporting",
        "Send the patient home with oral fluids and no report",
        "Delay treatment until a stool culture confirms cholera",
      ],
      correctIndex: 0,
      rationale:
        "A cluster of sudden profuse watery diarrhoea in the same community is a classic presentation of a suspected cholera outbreak, which requires immediate individual treatment and simultaneous notification of health authorities — waiting for lab confirmation delays both patient care and outbreak containment, which can cost lives at community scale.",
    },
    {
      id: 2,
      reveal:
        "Health authorities confirm a cholera outbreak in the community. More suspected cases are arriving at the health post.",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What are the appropriate immediate community health nursing actions?",
      options: [
        "Set up an oral rehydration/treatment point, initiate case isolation and hygiene measures, and begin community education on safe water and handwashing",
        "Treat each case individually with no community-level action",
        "Wait for a vaccine to become available before taking any action",
        "Close the health post to avoid being overwhelmed",
      ],
      correctIndex: 0,
      rationale:
        "Outbreak response requires action at both the individual and community level simultaneously: a dedicated rehydration point manages case volume, isolation and hygiene measures limit transmission, and community education addresses the root cause. Closing services or waiting on a vaccine leaves the community without care during the critical early response window.",
    },
    {
      id: 3,
      reveal:
        "The outbreak response is stabilizing and several cases have been treated and discharged. A community leader asks how to prevent this from happening again.",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What is the most appropriate public health education to give?",
      options: [
        "Educate on safe drinking water (boiling or chlorination), proper waste disposal, handwashing with soap, and early care-seeking for diarrhoea symptoms",
        "Explain that nothing can be done since it is caused by contaminated water beyond their control",
        "Advise against seeking care unless symptoms become severe",
        "Recommend avoiding all stored water indefinitely",
      ],
      correctIndex: 0,
      rationale:
        "Cholera transmission is preventable through practical, community-level measures: safe water treatment, sanitary waste disposal, hand hygiene, and prompt care-seeking for early symptoms. Community health nursing education should be actionable and empowering, not fatalistic or overly restrictive.",
    },
  ],
};
