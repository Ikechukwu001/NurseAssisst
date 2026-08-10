export const scenario = {
  id: "pediatric-fever",
  title: "Pediatric Febrile Seizure",
  category: "Pediatrics",
  patient: "18-month-old child, brought in by mother",
  stages: [
    {
      id: 1,
      reveal:
        "Mother reports the child felt hot and then began jerking movements of the arms and legs lasting about 1 minute, now has stopped. Child is drowsy but breathing. Temperature 39.4°C, HR 140, RR 32, SpO2 96%.",
      vitals: { hr: "140", spo2: "96", bp: "—", rr: "32" },
      question: "What is your priority nursing action right now?",
      options: [
        "Ensure a safe position (side-lying), protect from injury, and continue close observation",
        "Restrain the child's limbs to stop any further movement",
        "Insert a tongue depressor to prevent tongue biting",
        "Give oral antipyretic medication immediately during the seizure",
      ],
      correctIndex: 0,
      rationale:
        "During and immediately after a seizure, the priority is protecting the child from injury — side-lying position to maintain airway patency, and observation. Restraining limbs or inserting objects into the mouth can cause harm and are contraindicated.",
    },
    {
      id: 2,
      reveal:
        "The seizure has fully resolved and the child is now postictal (drowsy but rousable). Temperature remains 39.2°C. Mother is anxious and asks if she should give the child a cold water bath.",
      vitals: { hr: "128", spo2: "97", bp: "—", rr: "28" },
      question: "What is the appropriate nursing guidance and next action?",
      options: [
        "Advise against cold water immersion; administer weight-appropriate antipyretic and use light clothing/tepid environment instead",
        "Recommend an ice bath to rapidly lower temperature",
        "No fever management needed since the seizure has stopped",
        "Wrap the child in extra blankets to 'sweat out' the fever",
      ],
      correctIndex: 0,
      rationale:
        "Cold water immersion or ice baths can cause shivering (which raises core temperature further) and patient distress, and are not recommended. Weight-appropriate antipyretics and light clothing in a comfortably cool environment are the appropriate approach.",
    },
    {
      id: 3,
      reveal:
        "The child is stable, alert, and temperature is trending down after antipyretic administration. The mother asks whether this means her child has epilepsy.",
      vitals: { hr: "116", spo2: "98", bp: "—", rr: "24" },
      question: "What is the most appropriate nursing response and action?",
      options: [
        "Reassure the mother that most febrile seizures are benign and not epilepsy, while ensuring the child is assessed by the physician to rule out other causes and provide safety education",
        "Confirm the child has epilepsy and will need lifelong seizure medication",
        "Tell the mother there is nothing to worry about and no further follow-up is needed",
        "Avoid answering and refer her to search for information online",
      ],
      correctIndex: 0,
      rationale:
        "Most febrile seizures are benign, self-limited events distinct from epilepsy. The nurse's role includes providing accurate reassurance, ensuring appropriate medical evaluation to rule out other causes, and educating the caregiver on seizure safety and fever management — not making a diagnosis or dismissing the concern.",
    },
  ],
};