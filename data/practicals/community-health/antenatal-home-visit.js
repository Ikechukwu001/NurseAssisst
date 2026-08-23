export const scenario = {
  id: "antenatal-home-visit",
  title: "Antenatal Home Visit Risk Assessment",
  category: "Community Health",
  difficulty: "Intermediate",
  duration: "7 min",
  tier: "free",
  description:
    "Conduct a community antenatal home visit, identifying risk factors and determining when to refer for facility-based care.",
  patient: "24-year-old, G1P0, 28 weeks gestation, first home visit in a rural community",
  stages: [
    {
      id: 1,
      reveal:
        "During the visit, the woman reports mild swelling in her feet and occasional headaches over the past week. She has not attended any antenatal clinic visits so far this pregnancy.",
      vitals: { hr: "88", spo2: "98", bp: "148/94", rr: "18" },
      question: "What is your priority nursing action?",
      options: [
        "Recognize these as potential warning signs and advise and arrange urgent referral to the nearest health facility for further assessment",
        "Tell her swelling and headaches are always normal in pregnancy and no action is needed",
        "Delay any referral until her next scheduled visit",
        "Advise her to only rest at home without further evaluation",
      ],
      correctIndex: 0,
      rationale:
        "Elevated blood pressure with headache and swelling, especially with no prior antenatal care, are warning signs that need prompt facility-based evaluation to rule out pre-eclampsia — dismissing them as normal or delaying referral risks missing a serious condition.",
    },
    {
      id: 2,
      reveal:
        "The woman is hesitant to go to the facility, citing cost and distance as barriers.",
      vitals: { hr: "88", spo2: "98", bp: "148/94", rr: "18" },
      question: "What is the appropriate nursing response?",
      options: [
        "Listen to her concerns, provide clear information on why prompt evaluation matters for her and the baby's safety, and help problem-solve practical barriers such as transport options or community support",
        "Tell her the barriers are not the nurse's concern",
        "Insist she go immediately without addressing her concerns",
        "Abandon the referral recommendation to avoid conflict",
      ],
      correctIndex: 0,
      rationale:
        "Community health nursing requires addressing real-world barriers, not just issuing instructions. Listening and problem-solving with the patient increases the likelihood she will actually follow through on a needed referral.",
    },
    {
      id: 3,
      reveal:
        "She agrees to go to the facility and asks what to expect and what she should continue doing for the rest of her pregnancy.",
      vitals: { hr: "86", spo2: "98", bp: "146/92", rr: "18" },
      question: "What is the appropriate community health education?",
      options: [
        "Explain the importance of regular antenatal visits, danger signs to watch for, and provide basic guidance while encouraging her to follow the facility's care plan going forward",
        "Tell her no further antenatal visits are necessary",
        "Advise her to manage everything at home without any facility involvement",
        "Give no explanation of what to expect",
      ],
      correctIndex: 0,
      rationale:
        "Ongoing antenatal engagement, not a one-time referral, is essential for a positive outcome. Clear education on warning signs and encouragement to continue facility-based care supports her long-term safety and that of her baby.",
    },
  ],
};
