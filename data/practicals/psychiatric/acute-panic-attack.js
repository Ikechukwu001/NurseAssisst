export const scenario = {
  id: "acute-panic-attack",
  title: "Acute Panic Attack",
  category: "Psychiatric",
  difficulty: "Intermediate",
  duration: "6 min",
  tier: "premium",
  description:
    "Recognize and manage a patient experiencing an acute panic attack, ruling out medical causes while providing calming, grounding support.",
  patient: "22-year-old female, sudden onset of chest tightness and shortness of breath",
  stages: [
    {
      id: 1,
      reveal:
        "The patient reports sudden chest tightness, a racing heartbeat, dizziness, and a feeling of impending doom that started 10 minutes ago. She is hyperventilating.",
      vitals: { hr: "128", spo2: "98", bp: "142/88", rr: "28" },
      question: "What is your priority nursing action?",
      options: [
        "Stay with the patient, speak calmly, guide her through slow breathing, and ensure appropriate assessment to rule out other causes such as cardiac or respiratory issues",
        "Tell her to calm down and leave her alone to compose herself",
        "Assume it is definitely a panic attack without any assessment",
        "Have her breathe rapidly into a paper bag repeatedly without supervision",
      ],
      correctIndex: 0,
      rationale:
        "Panic attack symptoms overlap significantly with serious medical conditions (e.g. cardiac events, pulmonary embolism), so appropriate assessment must happen before assuming a psychiatric cause. Staying present with calm, guided breathing support is both therapeutic and safe, unlike leaving the patient alone or using unsupervised breathing techniques.",
    },
    {
      id: 2,
      reveal:
        "Cardiac and respiratory causes have been ruled out per assessment. The physician confirms this is consistent with a panic attack. The patient is embarrassed and apologizes for \"wasting everyone's time.\"",
      vitals: { hr: "104", spo2: "98", bp: "128/82", rr: "20" },
      question: "What is the appropriate nursing response?",
      options: [
        "Reassure her that panic attacks are a legitimate and treatable condition, validate her experience without judgment, and provide information on coping strategies and follow-up care",
        "Agree that she overreacted",
        "Dismiss her concerns now that a serious cause is ruled out",
        "Avoid discussing the episode further",
      ],
      correctIndex: 0,
      rationale:
        "Panic attacks are real, distressing, and treatable — validating the patient's experience rather than minimizing it supports her wellbeing and encourages her to seek appropriate follow-up rather than feeling dismissed.",
    },
    {
      id: 3,
      reveal:
        "The patient's symptoms have resolved and she is preparing for discharge. She asks what she should do if this happens again.",
      vitals: { hr: "84", spo2: "99", bp: "118/76", rr: "16" },
      question: "What is the appropriate discharge education?",
      options: [
        "Teach grounding and breathing techniques, discuss the value of follow-up with a mental health professional, and clarify when to seek urgent care versus manage symptoms at home",
        "Tell her there is nothing that can be done to help future episodes",
        "Recommend she avoid all stressful situations indefinitely",
        "Give no specific guidance",
      ],
      correctIndex: 0,
      rationale:
        "Practical coping tools and clear guidance on when to seek care empower the patient to manage future episodes with more confidence, while appropriate follow-up supports longer-term management of underlying anxiety.",
    },
  ],
};
