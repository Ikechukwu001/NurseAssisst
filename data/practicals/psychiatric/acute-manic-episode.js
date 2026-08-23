export const scenario = {
  id: "acute-manic-episode",
  title: "Acute Manic Episode",
  category: "Psychiatric",
  difficulty: "Advanced",
  duration: "9 min",
  tier: "premium",
  description:
    "Assess and manage a patient experiencing an acute manic episode, balancing safety, limit-setting, and therapeutic engagement.",
  patient: "35-year-old with known bipolar disorder, brought in by family for erratic behaviour",
  stages: [
    {
      id: 1,
      reveal:
        "The patient is speaking rapidly, jumping between topics, and reports not having slept in three days, saying he feels \"unstoppable.\" He is restless and easily irritated when interrupted.",
      vitals: { hr: "108", spo2: "98", bp: "136/84", rr: "20" },
      question: "What is your priority nursing action?",
      options: [
        "Provide a calm, low-stimulation environment, set clear and consistent limits in a non-confrontational manner, and closely monitor for escalating agitation or risk-taking behaviour",
        "Engage in lengthy debate about his rapid speech and plans",
        "Leave him unsupervised to \"let him tire himself out\"",
        "Immediately restrain him without attempting de-escalation first",
      ],
      correctIndex: 0,
      rationale:
        "A calm environment with clear, consistent limits helps manage the disorganized energy of mania without escalating conflict. Unsupervised time risks impulsive or unsafe behaviour, and restraint should only follow — never bypass — de-escalation attempts.",
    },
    {
      id: 2,
      reveal:
        "The physician orders a mood stabilizer/antipsychotic per protocol. The patient initially refuses, stating he \"feels great\" and doesn't need medication.",
      vitals: { hr: "104", spo2: "98", bp: "132/82", rr: "20" },
      question: "What is the appropriate nursing approach?",
      options: [
        "Acknowledge his perspective calmly, explain the medication's role in helping him feel more like himself, and involve him in decisions where safely possible",
        "Tell him he is wrong about how he feels",
        "Force the medication without any explanation or engagement",
        "Abandon the conversation and let him refuse without further nursing involvement",
      ],
      correctIndex: 0,
      rationale:
        "Lack of insight is a common feature of acute mania, making direct confrontation ineffective. Calm, respectful engagement that offers some sense of control — while still working toward safe, appropriate treatment — tends to build more cooperation than dismissal or force.",
    },
    {
      id: 3,
      reveal:
        "After medication and a calm environment, the patient is more settled and able to rest. Family members ask how to support him once he returns home.",
      vitals: { hr: "84", spo2: "98", bp: "122/78", rr: "16" },
      question: "What is the appropriate nursing education for the family?",
      options: [
        "Educate the family on recognizing early signs of an episode, the importance of consistent medication adherence, sleep routine, and follow-up care",
        "Tell the family there is no way to prevent future episodes",
        "Advise the family to remove all of his responsibilities and independence",
        "Give no discharge guidance",
      ],
      correctIndex: 0,
      rationale:
        "Family involvement in recognizing early warning signs and supporting routine and treatment adherence is a key part of relapse prevention in bipolar disorder — removing all independence is neither necessary nor supportive of long-term recovery.",
    },
  ],
};
