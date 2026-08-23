export const scenario = {
  id: "acute-psychotic-episode",
  title: "Acute Psychotic Episode",
  category: "Psychiatric",
  difficulty: "Advanced",
  duration: "9 min",
  tier: "free",
  description:
    "Recognize and de-escalate a patient experiencing an acute psychotic episode, prioritizing safety and therapeutic communication.",
  patient: "27-year-old male, brought in by family, expressing paranoid beliefs and agitation",
  stages: [
    {
      id: 1,
      reveal:
        "The patient is pacing, speaking rapidly about being followed, and appears frightened and suspicious of staff. He has not been physically aggressive but is highly agitated.",
      vitals: { hr: "110", spo2: "98", bp: "138/86", rr: "22" },
      question: "What is your priority nursing action?",
      options: [
        "Approach calmly, speak in a non-threatening manner, ensure a safe environment with an accessible exit, and avoid arguing with the delusional content",
        "Argue with the patient to convince him his beliefs are false",
        "Approach quickly from behind to guide him to a chair",
        "Ignore the patient's distress and complete unrelated tasks",
      ],
      correctIndex: 0,
      rationale:
        "Calm, non-confrontational communication and a safe physical setup reduce escalation risk. Arguing about delusional beliefs tends to increase distress rather than resolve it, and approaching from behind can feel threatening to an already fearful, suspicious patient.",
    },
    {
      id: 2,
      reveal:
        "The patient remains agitated despite the calm approach. The physician orders an oral antipsychotic medication, but he is reluctant to take it, saying he doesn't trust anyone right now.",
      vitals: { hr: "106", spo2: "98", bp: "134/84", rr: "20" },
      question: "What is the appropriate nursing approach?",
      options: [
        "Acknowledge his feelings, explain the purpose of the medication simply and honestly, and offer choices where possible to support his sense of control",
        "Force the medication without explanation",
        "Threaten involuntary measures immediately",
        "Give up and document refusal without further engagement",
      ],
      correctIndex: 0,
      rationale:
        "Respectful engagement that acknowledges the patient's mistrust while offering honest information and appropriate choice supports cooperation and preserves dignity — coercive approaches tend to increase resistance and can escalate an already tense situation.",
    },
    {
      id: 3,
      reveal:
        "The patient has calmed somewhat after taking the medication and is resting in a quiet area. Family members ask what they can do to help going forward.",
      vitals: { hr: "88", spo2: "98", bp: "122/78", rr: "18" },
      question: "What is the appropriate nursing education for the family?",
      options: [
        "Educate the family on recognizing early warning signs of relapse, the importance of medication adherence and follow-up care, and encourage a calm, low-stimulation home environment",
        "Tell the family there is nothing they can do",
        "Advise the family to confront him about his beliefs at home",
        "Give no guidance since he is stable now",
      ],
      correctIndex: 0,
      rationale:
        "Family education on early warning signs, medication adherence, and a calm home environment supports longer-term stability and relapse prevention — confrontation about delusional beliefs is not a therapeutic approach and can increase distress.",
    },
  ],
};
