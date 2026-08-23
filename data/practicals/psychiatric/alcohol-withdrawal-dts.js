export const scenario = {
  id: "alcohol-withdrawal-dts",
  title: "Acute Alcohol Withdrawal (Delirium Tremens)",
  category: "Psychiatric",
  difficulty: "Advanced",
  duration: "9 min",
  tier: "free",
  description:
    "Recognize and manage a patient progressing into delirium tremens, balancing safety, medication protocol, and referral planning.",
  patient:
    "46-year-old male, admitted 2 days ago for unrelated surgery, history of heavy daily alcohol use",
  stages: [
    {
      id: 1,
      reveal:
        "The patient has become increasingly agitated, tremulous, and diaphoretic. He reports seeing insects on the wall and is disoriented to time. Last alcohol intake was reportedly around 60 hours ago.",
      vitals: { hr: "118", spo2: "96", bp: "156/96", rr: "22" },
      question: "What is your priority nursing action right now?",
      options: [
        "Notify the physician immediately and initiate close observation and safety precautions per withdrawal protocol",
        "Restrain the patient without a medical order to prevent injury",
        "Disregard the hallucinations as unrelated to the surgical admission",
        "Arrange discharge since the surgery itself is complete",
      ],
      correctIndex: 0,
      rationale:
        "Agitation, tremor, autonomic hyperactivity, and hallucinations in a patient with heavy alcohol use around 48–72 hours after last intake are classic signs of impending delirium tremens — a medical emergency. Prompt physician notification and structured withdrawal monitoring (e.g. CIWA-Ar scoring) are essential; unauthorized restraint is not an appropriate first response.",
    },
    {
      id: 2,
      reveal:
        "The physician orders a benzodiazepine per the facility's withdrawal protocol. The patient remains disoriented and attempts to climb out of bed.",
      vitals: { hr: "124", spo2: "95", bp: "162/98", rr: "24" },
      question: "What should the nurse do alongside administering the ordered medication?",
      options: [
        "Implement fall and injury precautions with close monitoring and calm reorientation, administer the ordered benzodiazepine, and avoid restraints unless absolutely necessary",
        "Leave the patient unsupervised once the medication has been given",
        "Apply physical restraints as the first-line safety measure",
        "Move the patient to a room further from the nursing station",
      ],
      correctIndex: 0,
      rationale:
        "Patients in withdrawal are at high risk of falls and injury from disorientation and agitation. Close observation, a safe environment, and calm reorientation — alongside the ordered medication — are the priority. Restraints are used only as a last resort when other safety measures fail, not as a default response.",
    },
    {
      id: 3,
      reveal:
        "Several hours later, tremors have reduced and the patient is calmer, though he still requires monitoring before returning to baseline.",
      vitals: { hr: "98", spo2: "97", bp: "132/84", rr: "18" },
      question: "What is the appropriate next step in his ongoing care?",
      options: [
        "Continue scheduled withdrawal monitoring and vital sign reassessment, and begin planning a referral for alcohol use disorder counseling before discharge",
        "Discontinue all monitoring now that symptoms have improved",
        "Avoid discussing alcohol use with the patient entirely",
        "Discharge the patient immediately since the surgical reason for admission is resolved",
      ],
      correctIndex: 0,
      rationale:
        "Withdrawal symptoms can fluctuate and recur, so monitoring should continue on schedule even as the patient improves. Discharge planning should also address the underlying alcohol use disorder — connecting the patient with counseling or support services is part of comprehensive, non-judgmental nursing care.",
    },
  ],
};
