export const scenario = {
  id: "immunization-outreach-hesitancy",
  title: "Immunization Outreach and Vaccine Hesitancy",
  category: "Community Health",
  difficulty: "Intermediate",
  duration: "7 min",
  tier: "premium",
  description:
    "Navigate vaccine hesitancy during a community immunization outreach visit, using respectful, evidence-based communication.",
  patient: "Community immunization outreach post, mother with a 6-month-old due for routine vaccines",
  stages: [
    {
      id: 1,
      reveal:
        "The mother arrives for her child's scheduled vaccines but expresses hesitation, saying she heard from neighbours that vaccines \"cause more harm than the diseases they prevent.\"",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What is your priority nursing action?",
      options: [
        "Listen respectfully to her concerns without judgment, and provide clear, accurate information about the vaccines and the diseases they prevent",
        "Dismiss her concerns and vaccinate the child without discussion",
        "Argue that her neighbours are wrong and uninformed",
        "Refuse to serve her since she raised concerns",
      ],
      correctIndex: 0,
      rationale:
        "Respectful, non-judgmental listening combined with clear, accurate information is the most effective approach to vaccine hesitancy — dismissive or confrontational responses tend to entrench distrust rather than resolve it.",
    },
    {
      id: 2,
      reveal:
        "After discussion, the mother still seems uncertain and asks what would happen if her child is not vaccinated.",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What is the appropriate nursing response?",
      options: [
        "Honestly explain the risks of vaccine-preventable diseases in the community and the protective benefit of vaccination, while respecting her right to ask questions and make an informed decision",
        "Pressure her with fear-based statements to force compliance",
        "Tell her nothing will happen if her child is unvaccinated",
        "End the conversation without answering her question",
      ],
      correctIndex: 0,
      rationale:
        "Honest, factual information delivered respectfully supports informed decision-making without resorting to coercive fear tactics, which can further damage trust between the family and the health system.",
    },
    {
      id: 3,
      reveal:
        "The mother decides to proceed with vaccination for her child today.",
      vitals: { hr: "—", spo2: "—", bp: "—", rr: "—" },
      question: "What is the appropriate follow-up nursing action?",
      options: [
        "Administer the vaccines per schedule, provide clear information on possible mild side effects and when to seek care, and schedule the next visit",
        "Administer the vaccines without any information on what to expect afterward",
        "Tell her no follow-up visit is needed going forward",
        "Skip documentation of the visit and vaccines given",
      ],
      correctIndex: 0,
      rationale:
        "Complete care includes anticipatory guidance on expected side effects, clear next steps, and accurate documentation — all of which support continuity of care and reinforce the trust built during the hesitancy discussion.",
    },
  ],
};
