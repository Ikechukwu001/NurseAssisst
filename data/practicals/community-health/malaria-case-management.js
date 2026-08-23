export const scenario = {
  id: "malaria-case-management",
  title: "Malaria Case Management in a Rural Clinic",
  category: "Community Health",
  difficulty: "Intermediate",
  duration: "8 min",
  tier: "premium",
  description:
    "Assess and manage a suspected malaria case at a rural community clinic, from diagnosis through community prevention education.",
  patient: "Rural community clinic, 6-year-old child brought in with fever",
  stages: [
    {
      id: 1,
      reveal:
        "The child has had fever, chills, and vomiting for the past two days. Temperature is 39.2°C. A rapid diagnostic test for malaria is available at the clinic.",
      vitals: { hr: "128", spo2: "97", bp: "—", rr: "26" },
      question: "What is your priority nursing action?",
      options: [
        "Perform or facilitate a rapid diagnostic test for malaria and assess for danger signs before starting treatment per protocol",
        "Start antimalarial treatment without any testing",
        "Assume it is a viral illness and send the child home with no evaluation",
        "Wait several days to see if the fever resolves on its own before testing",
      ],
      correctIndex: 0,
      rationale:
        "Confirming malaria with a rapid diagnostic test before treatment avoids both under-treating a true infection and over-treating a non-malarial fever — a practice that also helps preserve antimalarial effectiveness at the community level.",
    },
    {
      id: 2,
      reveal:
        "The rapid test confirms malaria. The child is alert and tolerating oral fluids, with no danger signs present.",
      vitals: { hr: "122", spo2: "97", bp: "—", rr: "24" },
      question: "What is the appropriate nursing action?",
      options: [
        "Initiate the recommended oral antimalarial treatment per protocol, educate the caregiver on completing the full course, and advise on danger signs requiring urgent return to care",
        "Give only supportive care with no antimalarial treatment",
        "Recommend stopping treatment as soon as the fever resolves rather than completing the full course",
        "Discharge with no education on danger signs",
      ],
      correctIndex: 0,
      rationale:
        "Confirmed malaria without danger signs can typically be managed with oral treatment at the community level, but completing the full course is essential to fully clear the infection and reduce resistance risk — stopping early when symptoms improve is a common and important point to address in education.",
    },
    {
      id: 3,
      reveal:
        "The child is discharged on treatment. The caregiver asks how to prevent malaria in the future for the rest of the family.",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What is the appropriate community health education?",
      options: [
        "Educate on consistent use of insecticide-treated bed nets, eliminating stagnant water/mosquito breeding sites near the home, and prompt care-seeking for fever",
        "Tell the caregiver nothing can be done to prevent malaria",
        "Recommend against using bed nets since the child is already being treated",
        "Give no preventive guidance",
      ],
      correctIndex: 0,
      rationale:
        "Malaria prevention at the household and community level relies on practical, sustained measures — bed net use, environmental control of breeding sites, and prompt care-seeking — all of which reduce the risk of future cases for the whole family.",
    },
  ],
};
