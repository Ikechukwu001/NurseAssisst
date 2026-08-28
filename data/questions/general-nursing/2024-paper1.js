// NMCN General Nursing — 2024, Paper I
// Correct answers and rationale sourced from the user's compilation.
// Wrong options (distractors) are AI-synthesized placeholders — see
// 2022-paper1.js header for full notes on this approach.
//
// FLAGGED: Q76 originally cited "RA 9173" (the Philippine Nursing Act) as
// the legal basis for license reinstatement — not applicable in Nigeria.
// Rewritten below using general regulatory principles instead. This
// suggests this batch may partly originate from a non-Nigerian
// (Philippine/NCLEX-style) test bank — worth spot-checking the source
// for other non-NMCN content.
// Q13 (order-type classification) has an unresolved ambiguity — the
// rationale describes what many texts call an "automatic stop order,"
// but the labeled answer is "Standard written." Left as sourced; verify
// against your original if possible.

export const questions = [
  {
    id: "gn-2024-p1-q1",
    question:
      "A nurse administers terbutaline without checking the client's pulse. Which standard will be used to determine if the nurse was negligent?",
    options: [
      "Actions of a reasonably prudent nurse with similar education",
      "The nurse's own personal judgment at the time",
      "The physician's opinion of the situation",
      "The hospital's internal staffing policy",
    ],
    correctIndex: 0,
    explanation:
      "Malpractice and negligence are determined by comparing the nurse's actions against what a reasonable, prudent peer with equivalent training would do under the same conditions.",
  },
  {
    id: "gn-2024-p1-q2",
    question:
      "A client with sickle cell disease has a platelet count of 22,000/uL and requires morphine for severe pain. Which administration route must the nurse avoid?",
    options: ["Oral", "Intravenous", "Subcutaneous", "I.M."],
    correctIndex: 3,
    explanation:
      "Intramuscular (I.M.) injections must be avoided in clients with severe thrombocytopenia (platelets less than 50,000/uL) due to the high risk of intramuscular bleeding and hematoma formation.",
  },
  {
    id: "gn-2024-p1-q3",
    question:
      "Which documentation entry is correct to prevent a medication dosage error for a prescription of Digoxin .125 mg?",
    options: ["125 mg", "0.125 mg", ".125mg", "0.1250 mg"],
    correctIndex: 1,
    explanation:
      "A leading zero must always precede a decimal point to prevent it from being misread as a whole number (e.g., 125 mg), and trailing zeros must be omitted.",
  },
  {
    id: "gn-2024-p1-q4",
    question:
      "Which nursing diagnosis represents the highest priority for a client diagnosed with deep vein thrombosis (DVT)?",
    options: ["Impaired skin integrity", "Impaired gas exchange", "Activity intolerance", "Acute pain"],
    correctIndex: 1,
    explanation:
      "The most life-threatening complication of deep vein thrombosis is a pulmonary embolism, which directly compromises respiration and oxygenation (airway/breathing priority).",
  },
  {
    id: "gn-2024-p1-q5",
    question: "After receiving the shift endorsement, which client should the nurse assess first?",
    options: [
      "Hysterectomy with saturated dressing",
      "Client requesting a routine dressing change",
      "Client due for a scheduled oral medication",
      "Client asking for an extra blanket",
    ],
    correctIndex: 0,
    explanation:
      "A saturated post-operative dressing indicates active, acute hemorrhage, requiring immediate intervention ahead of stable or non-life-threatening complaints.",
  },
  {
    id: "gn-2024-p1-q6",
    question:
      "Which intervention is a mandatory requirement in the care plan for a client placed in four-point physical restraints?",
    options: [
      "Family visit every hour",
      "Full bath every 2 hours",
      "Circulation check every 15-30 minutes",
      "Vital signs every 4 hours only",
    ],
    correctIndex: 2,
    explanation:
      "Regular, frequent assessments of neurovascular status and local circulation are vital to prevent tissue ischemia and nerve damage caused by mechanical restraints.",
  },
  {
    id: "gn-2024-p1-q7",
    question:
      "What is the therapeutic purpose of administering an H2 receptor antagonist to a client with severe burns?",
    options: [
      "Reduce burn wound pain",
      "Prevent wound infection",
      "Reduce fluid loss",
      "Prevent stress ulcer",
    ],
    correctIndex: 3,
    explanation:
      "Burn victims are at high risk for developing acute gastric erosions (Curling's ulcers) due to systemic ischemia; H2 blockers reduce gastric acid secretion to prevent this.",
  },
  {
    id: "gn-2024-p1-q8",
    question:
      "A nurse records a client's urine output as 50 ml and 60 ml over two consecutive hours. Which action should the nurse take next?",
    options: ["Notify the physician immediately", "Increase IV fluid rate", "Insert a urinary catheter", "Continue to monitor and record"],
    correctIndex: 3,
    explanation:
      "Normal adult urine output is at least 30 ml/hour. Outputs of 50 ml and 60 ml are completely adequate, so the nurse should continue standard monitoring.",
  },
  {
    id: "gn-2024-p1-q9",
    question:
      "Which statement by a client indicates that ice application for a freshly twisted ankle has been effective?",
    options: ["Feels warmer", "Feels numb only", "Looks less swollen", "Looks more red"],
    correctIndex: 2,
    explanation:
      "Local cold application causes vasoconstriction, which limits fluid exudation into tissues, thereby successfully reducing localized edema and swelling.",
  },
  {
    id: "gn-2024-p1-q10",
    question: "Which electrolyte imbalance is an expected adverse effect when administering a loop diuretic?",
    options: ["Hyperkalemia", "Hypernatremia", "Hypokalemia", "Hypercalcemia"],
    correctIndex: 2,
    explanation:
      "Loop diuretics inhibit the sodium-potassium-chloride cotransporter in the thick ascending limb of the loop of Henle, causing increased urinary excretion of potassium.",
  },
  {
    id: "gn-2024-p1-q11",
    question:
      "According to Likert's management systems, which behavior is characteristic of a benevolent-authoritative manager?",
    options: [
      "Full participative decision-making",
      "Complete delegation of authority",
      "Open, mutual trust with subordinates",
      "Condescending trust in subordinates",
    ],
    correctIndex: 3,
    explanation:
      "Benevolent-authoritative leaders maintain a master-servant relationship where trust is condescending, and decisions are tightly controlled at the top despite minor superficial rewards.",
  },
  {
    id: "gn-2024-p1-q12",
    question: "Which statement accurately describes the functional nursing care delivery model?",
    options: [
      "Assigns one nurse to a full caseload of clients",
      "Concentrates on tasks and activities",
      "Centers care around a single primary nurse",
      "Organizes care entirely by client acuity",
    ],
    correctIndex: 1,
    explanation:
      "Functional nursing is a task-oriented approach where specific duties (such as medication administration or wound care) are divided among staff members rather than assigning whole clients.",
  },
  {
    id: "gn-2024-p1-q13",
    question: "A physician prescribes Vitamin K 10 mg I.M. daily x 3 days. What type of medication order is this?",
    options: ["STAT order", "PRN order", "Single/one-time order", "Standard written"],
    correctIndex: 3,
    explanation:
      "This order applies over a specific, limited multi-day period, after which it automatically expires (sometimes separately classified as an 'automatic stop order' depending on the textbook framework used).",
  },
  {
    id: "gn-2024-p1-q14",
    question: "Which clinical manifestation is a classic sign of a fecal impaction?",
    options: ["Hard, formed stool only", "Complete absence of stool", "Liquid or semi-liquid stools", "Blood-streaked stool"],
    correctIndex: 2,
    explanation:
      "Liquid stool from higher up the colon leaks around the impacted mass by capillary action, presenting as paradoxically watery diarrhea or seeping stool.",
  },
  {
    id: "gn-2024-p1-q15",
    question: "How should the nurse position the pinna of the ear when performing an otoscopic examination on an adult?",
    options: ["Helix down/forward", "Helix straight out", "Helix down/back", "Helix up/back"],
    correctIndex: 3,
    explanation:
      "Straightening the adult external auditory canal requires pulling the pinna (helix) upward and backward, allowing an unobstructed view of the tympanic membrane.",
  },
  {
    id: "gn-2024-p1-q16",
    question: "Which instruction should the nurse provide to a male client undergoing external beam radiation therapy?",
    options: [
      "Apply heat to treated skin",
      "Scrub the treated area daily",
      "Protect skin from sunlight",
      "Apply lotion before each session",
    ],
    correctIndex: 2,
    explanation:
      "Radiation therapy renders the targeted skin highly fragile and sensitive to ultraviolet rays; protection against sun exposure is crucial to prevent severe erythema or burns.",
  },
  {
    id: "gn-2024-p1-q17",
    question: "When assisting a client preparing for immediate surgery, which nursing duty is essential?",
    options: [
      "Apply makeup to hide pallor",
      "Encourage a full meal beforehand",
      "Remove dentures and nail polish",
      "Apply extra jewelry tape",
    ],
    correctIndex: 2,
    explanation:
      "Dentures must be removed to prevent airway occlusion during anesthesia intubation, and nail polish must be removed to ensure accurate capillary refill and pulse oximetry assessment.",
  },
  {
    id: "gn-2024-p1-q18",
    question: "Which clinical assessment finding is most reflective of acute pancreatitis?",
    options: ["Continuous epigastric and back pain", "Right lower quadrant pain", "Colicky flank pain", "Sharp right upper quadrant pain only"],
    correctIndex: 0,
    explanation:
      "Acute pancreatitis typically causes severe, steady, deep epigastric pain that frequently radiates straight through to the back due to retroperitoneal inflammation.",
  },
  {
    id: "gn-2024-p1-q19",
    question:
      "Which dietary guideline should the nurse incorporate into the care plan for a client recovering from extensive burns?",
    options: ["Low-protein/low-fat", "High-fat/low-carbohydrate", "High-protein/high-carbohydrate", "Fluid-restricted diet"],
    correctIndex: 2,
    explanation:
      "Hypermetabolism and severe tissue catabolism following a burn injury demand high-protein intake for tissue repair and high-carbohydrate intake to meet massive caloric needs.",
  },
  {
    id: "gn-2024-p1-q20",
    question: "Which information must the nurse confirm as a priority immediately before administering a unit of whole blood?",
    options: ["BP and pulse", "Recent meal history", "Family contact information", "Discharge plan"],
    correctIndex: 0,
    explanation:
      "Baseline vital signs (especially blood pressure and pulse) must be obtained immediately before starting the transfusion to establish a point of comparison for potential transfusion reactions.",
  },
  {
    id: "gn-2024-p1-q21",
    question: "A client falls and is suspected of having a fractured leg. What is the nurse's priority action?",
    options: [
      "Attempt to reposition the leg to normal alignment",
      "Apply direct pressure to the leg",
      "Immobilize leg before moving",
      "Elevate the leg above heart level immediately",
    ],
    correctIndex: 2,
    explanation:
      "Splinting and immobilizing the extremity prevents bone fragments from shifting, which protects surrounding nerves, blood vessels, and soft tissues from further injury.",
  },
  {
    id: "gn-2024-p1-q22",
    question: "Which intervention is a priority when caring for a client with a temporary internal radium implant?",
    options: ["Private room", "Frequent ambulation", "High-fiber diet", "Group activity room"],
    correctIndex: 0,
    explanation:
      "Radiation safety principles dictate that a client with an active internal radiation source must be placed in a private room to shield other patients and staff from radiation exposure.",
  },
  {
    id: "gn-2024-p1-q23",
    question: "Which nursing diagnosis is the highest priority for a client diagnosed with agranulocytosis?",
    options: ["Impaired physical mobility", "Disturbed body image", "Deficient fluid volume", "Risk for infection"],
    correctIndex: 3,
    explanation:
      "Agranulocytosis involves a severe drop in white blood cell counts (specifically neutrophils), completely destroying the body's defenses against opportunistic pathogens.",
  },
  {
    id: "gn-2024-p1-q24",
    question:
      "A client receiving Total Parenteral Nutrition (TPN) exhibits sudden signs of an air embolism. What is the immediate priority action?",
    options: ["Right side supine", "High Fowler's position", "Left side Trendelenburg", "Prone position"],
    correctIndex: 2,
    explanation:
      "Positioning the client on their left side in Trendelenburg traps the air bubble within the apex of the right ventricle, preventing it from entering the pulmonary artery and blocking blood flow.",
  },
  {
    id: "gn-2024-p1-q25",
    question: "Which leadership style is explicitly described as highly task-oriented, directive, and centralized?",
    options: ["Autocratic", "Democratic", "Laissez-faire", "Transformational"],
    correctIndex: 0,
    explanation:
      "Autocratic leaders maintain total authority, make decisions independently, and heavily direct activities with a strong focus on tasks rather than group input.",
  },
  {
    id: "gn-2024-p1-q26",
    question:
      "A physician orders 20 mEq of Potassium Chloride (KCl) to be added to a 500 cc IV bag. The stock vial contains KCl at a concentration of 40 mEq/10 ml. How many milliliters should the nurse draw up?",
    options: ["5 cc", "10 cc", "20 cc", "2.5 cc"],
    correctIndex: 0,
    explanation:
      "Using the formula (Desired/Have) x Volume: (20 mEq / 40 mEq) x 10 ml = 0.5 x 10 = 5 ml (or 5 cc).",
  },
  {
    id: "gn-2024-p1-q27",
    question:
      "An IV infusion order requires 400 cc of fluid to be delivered over exactly 8 hours via an infusion pump. At what rate should the pump be set?",
    options: ["40 cc/hr", "45 cc/hr", "60 cc/hr", "50 cc/hr"],
    correctIndex: 3,
    explanation: "To find the hourly rate, divide the total volume by total hours: 400 cc / 8 hours = 50 cc/hour.",
  },
  {
    id: "gn-2024-p1-q28",
    question: "What is the most important nursing action when a client returns from surgery?",
    options: ["Assess dressing", "Offer fluids immediately", "Notify family", "Complete admission paperwork"],
    correctIndex: 0,
    explanation:
      "Checking the surgical dressing allows immediate monitoring for acute hemorrhage, making it a critical safety assessment during the initial post-operative minutes.",
  },
  {
    id: "gn-2024-p1-q29",
    question: "Which set of vital sign assessments indicates cardiogenic shock?",
    options: ["BP 130/80, Pulse 76 regular", "BP 110/70, Pulse 88 regular", "BP 95/65, Pulse 92 regular", "BP 80/60, Pulse 110 irregular"],
    correctIndex: 3,
    explanation:
      "Cardiogenic shock is characterized by profound systemic hypotension (systolic BP less than 90 mmHg) accompanied by a rapid, compensatory, often irregular tachycardia as the heart tries to maintain output.",
  },
  {
    id: "gn-2024-p1-q30",
    question: "Which action is most appropriate in obtaining an accurate manual blood pressure?",
    options: [
      "Take the reading with the arm above heart level",
      "Use any available cuff size",
      "Proper equipment/positioning/recording",
      "Take the reading immediately after exercise",
    ],
    correctIndex: 2,
    explanation:
      "Ensuring appropriate cuff size, proper patient alignment (arm at heart level), and accurate technical execution forms the foundation of reliable blood pressure measurement.",
  },
  {
    id: "gn-2024-p1-q31",
    question: "Which step of the nursing process is used for determining understanding of health teaching?",
    options: ["Assessment", "Planning", "Implementation", "Evaluation"],
    correctIndex: 3,
    explanation:
      "Evaluation involves comparing the patient's current behavioral or physiological response against the pre-established goals to determine teaching effectiveness.",
  },
  {
    id: "gn-2024-p1-q32",
    question: "What is the single most important factor in arriving at a diagnosis?",
    options: ["Laboratory results", "Physical examination findings", "History of present illness", "Family medical history"],
    correctIndex: 2,
    explanation:
      "A detailed history of the present illness provides vital subjective chronologies and contextual symptoms that point directly to the underlying pathology in up to 80% of medical cases.",
  },
  {
    id: "gn-2024-p1-q33",
    question: "Which nursing action prevents an external rotation deformity of the hip?",
    options: ["Pillow between the knees", "Trochanter roll", "Footboard", "High Fowler's position"],
    correctIndex: 1,
    explanation:
      "Placing a trochanter roll against the greater trochanter of the femur maintains proper anatomical alignment and prevents the femur from rotating outward.",
  },
  {
    id: "gn-2024-p1-q34",
    question: "A pressure ulcer extending into subcutaneous tissue is classified as which stage?",
    options: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    correctIndex: 2,
    explanation:
      "Stage III ulcers involve full-thickness skin loss with visible subcutaneous fat, whereas Stage IV ulcers extend further to expose muscle, tendon, or bone.",
  },
  {
    id: "gn-2024-p1-q35",
    question: "What is the term for wound healing via granulation where edges are not surgically approximated?",
    options: ["Second intention", "First intention", "Third intention", "Primary closure"],
    correctIndex: 0,
    explanation:
      "Healing by second intention occurs when a wound is left open to heal by the formation of granulation tissue from the bottom up, typical of deep or irregular wounds.",
  },
  {
    id: "gn-2024-p1-q36",
    question: "Which assessment finding reflects dehydration in an 80-year-old with pneumonia?",
    options: ["Bradycardia", "Tachycardia", "Hypertension", "Bounding pulse"],
    correctIndex: 1,
    explanation:
      "In dehydration, a reduced circulating blood volume (hypovolemia) triggers a compensatory sympathetic nervous system response, raising the heart rate (tachycardia) to keep cardiac output stable.",
  },
  {
    id: "gn-2024-p1-q37",
    question:
      "A client is prescribed 75 mg of meperidine (Demerol). The available stock ampoule contains 100 mg/ml. How many milliliters should be administered?",
    options: ["0.75", "1.0", "0.5", "1.5"],
    correctIndex: 0,
    explanation: "Using the formula (Desired/Have) x Volume: (75 mg / 100 mg) x 1 ml = 0.75 ml.",
  },
  {
    id: "gn-2024-p1-q38",
    question: "Which statement provides a correct description of an insulin unit?",
    options: ["A fixed weight in milligrams", "A volume measure only", "A measure of concentration only", "Measure of effect, not weight"],
    correctIndex: 3,
    explanation:
      "USP insulin units are standardized expressions of biological activity and therapeutic effect on blood glucose, rather than physical measurements of mass or weight.",
  },
  {
    id: "gn-2024-p1-q39",
    question: "A client has a body temperature of 102 F. What is the equivalent value on the Centigrade scale?",
    options: ["37.0", "39.5", "38.9", "40.1"],
    correctIndex: 2,
    explanation:
      "Using the conversion formula C = (F-32) x 5/9: (102-32) x 5/9 = 70 x 0.5555 = 38.88C, which rounds to 38.9C.",
  },
  {
    id: "gn-2024-p1-q40",
    question: "What is typically the first prominent physical sign of aging in a 48-year-old?",
    options: ["Failing close vision", "Hearing loss", "Loss of skin elasticity", "Joint stiffness"],
    correctIndex: 0,
    explanation:
      "Presbyopia, the gradual loss of the eye's lens elasticity making it difficult to focus on near objects, typically manifests in the mid-to-late 40s.",
  },
  {
    id: "gn-2024-p1-q41",
    question: "Which action is essential to prevent chest tube air leaks?",
    options: ["Clamping the tube overnight", "Elevating the drainage unit above chest level", "Milking the tube routinely", "Taping connections"],
    correctIndex: 3,
    explanation:
      "Securely taping all continuous tube connections ensures an airtight seal, maintaining the negative intrapleural pressure required to re-expand the lung.",
  },
  {
    id: "gn-2024-p1-q42",
    question: "What is the safest way to verify a client's identity before performing procedures?",
    options: ["Room number", "Family member confirmation", "Asking the client's name only", "ID band"],
    correctIndex: 3,
    explanation:
      "Cross-checking the patient's institutional identification band against the medication administration record provides a reliable, objective verification of identity.",
  },
  {
    id: "gn-2024-p1-q43",
    question:
      "A nurse must administer 1,000 ml of D5W over 8 hours using an administration set calibrated to 15 drops/ml. What is the correct flow rate?",
    options: ["25 drops/min", "28 drops/min", "32 drops/min", "40 drops/min"],
    correctIndex: 2,
    explanation:
      "Using the formula Flow Rate = (Total Volume in ml x Drop Factor) / Time in minutes: (1000 x 15) / (8 x 60) = 15000/480 = 31.25 drops/min. 32 drops/min represents the closest precise practical option.",
  },
  {
    id: "gn-2024-p1-q44",
    question: "What is the immediate action required if a central venous catheter disconnects?",
    options: ["Clamp catheter", "Flush the catheter immediately", "Reconnect without cleaning", "Remove the catheter entirely"],
    correctIndex: 0,
    explanation:
      "Clamping the open lumen immediately prevents atmospheric air from being drawn into the central circulation during inspiration, halting a fatal air embolism.",
  },
  {
    id: "gn-2024-p1-q45",
    question: "What is the correct technical order of abdominal assessment?",
    options: ["Palpation/percussion/auscultation", "Percussion/auscultation/palpation", "Auscultation/percussion/palpation", "Inspection/palpation/auscultation"],
    correctIndex: 2,
    explanation:
      "Auscultation must always be performed before percussion and palpation because manipulating the abdominal wall can artificially alter bowel sound frequency and character.",
  },
  {
    id: "gn-2024-p1-q46",
    question: "Which part of the hand should the nurse use for assessing tactile fremitus?",
    options: ["Fingertips", "Palm center", "Ulnar surface", "Back of the hand"],
    correctIndex: 2,
    explanation:
      "The ulnar surface of the hand and the palmar metacarpophalangeal joints are highly sensitive to the low-frequency vibrations transmitted through the chest wall.",
  },
  {
    id: "gn-2024-p1-q47",
    question: "Which type of educational evaluation occurs continuously throughout the teaching process?",
    options: ["Summative", "Diagnostic", "Norm-referenced", "Formative"],
    correctIndex: 3,
    explanation:
      "Formative evaluation takes place concurrently during instruction to monitor ongoing progress and guide real-time instructional modifications.",
  },
  {
    id: "gn-2024-p1-q48",
    question: "What is the recommended mammogram frequency for a 45-year-old female with no specific risk factors?",
    options: ["Every 5 years", "Every 2 years", "Once per year", "Once in a lifetime"],
    correctIndex: 2,
    explanation:
      "Standard preventive guidelines recommend that women between the ages of 40 and 54 undergo regular screening mammograms annually to detect breast abnormalities early.",
  },
  {
    id: "gn-2024-p1-q49",
    question:
      "A client's arterial blood gas values are: pH 7.30, PaO2 89, PaCO2 50, HCO3 26. Which condition do these values suggest?",
    options: ["Metabolic acidosis", "Metabolic alkalosis", "Respiratory alkalosis", "Respiratory acidosis"],
    correctIndex: 3,
    explanation:
      "A low pH (less than 7.35) combined with an elevated partial pressure of carbon dioxide (PaCO2 greater than 45 mmHg) confirms an uncompensated respiratory acidosis.",
  },
  {
    id: "gn-2024-p1-q50",
    question: "What is the primary clinical goal of a hospice referral?",
    options: ["Aggressive curative treatment", "Support for coping with terminal illness", "Rapid discharge planning", "Reduction of hospital costs only"],
    correctIndex: 1,
    explanation:
      "Hospice care shifts away from curative treatments in favor of palliative support, striving to optimize comfort and maximize the quality of life for the terminal patient and family.",
  },
  {
    id: "gn-2024-p1-q51",
    question: "Which independent nursing action is appropriate for managing a Stage I pressure ulcer?",
    options: ["Surgical debridement", "Antibiotic ointment application", "Normal saline wash/protective dressing", "Wet-to-dry dressing changes"],
    correctIndex: 2,
    explanation:
      "Keeping a Stage I ulcer clean with mild saline solutions and applying protective barriers minimizes friction and allows intact skin cells to recover naturally.",
  },
  {
    id: "gn-2024-p1-q52",
    question: "What is the correct starting point when applying an elastic compression bandage to the leg?",
    options: ["Thigh", "Knee", "Foot", "Ankle only"],
    correctIndex: 2,
    explanation:
      "Bandaging must begin at the lowest distal point (the foot) and advance proximally toward the body to prevent venous blood pooling and facilitate venous return.",
  },
  {
    id: "gn-2024-p1-q53",
    question: "Which electrolyte imbalance poses the greatest risk to a child with DKA on an insulin infusion?",
    options: ["Hypernatremia", "Hypercalcemia", "Hypokalemia", "Hypermagnesemia"],
    correctIndex: 2,
    explanation:
      "Insulin acts to shift potassium ions out of the extracellular fluid and back into cells, which can trigger severe, arrhythmogenic hypokalemia.",
  },
  {
    id: "gn-2024-p1-q54",
    question: "Which systemic effect should a client anticipate immediately after taking sublingual nitroglycerin?",
    options: ["Slowed heart rate only", "Throbbing headache or dizziness", "Increased blood pressure", "Dry mouth only"],
    correctIndex: 1,
    explanation:
      "Nitroglycerin is a rapid systemic vasodilator. This dilation lowers systemic blood pressure and causes rapid cranial vasodilation, resulting in brief headaches or orthostatic lightheadedness.",
  },
  {
    id: "gn-2024-p1-q55",
    question: "What is the first action a nurse should take when a monitor shows ventricular tachycardia?",
    options: ["Begin chest compressions immediately", "Call for the defibrillator", "Administer antiarrhythmic medication", "Check level of consciousness"],
    correctIndex: 3,
    explanation:
      "The nurse must check the patient's level of consciousness and pulse first; a conscious patient with a pulse is treated completely differently than a pulseless, unresponsive one.",
  },
  {
    id: "gn-2024-p1-q56",
    question: "What is the safest position for the nurse when providing ambulation assistance to a weak client?",
    options: ["In front of the client", "Affected side", "Unaffected side", "Directly behind the client"],
    correctIndex: 1,
    explanation:
      "Standing slightly behind and on the client's weak (affected) side allows the nurse to provide targeted support and stabilize the center of gravity if the client loses balance.",
  },
  {
    id: "gn-2024-p1-q57",
    question: "Which clinical parameter represents a standard of care for maintaining an organ-dead brain donor?",
    options: ["Urine output 10 ml/hr", "Urine output 20 ml/hr", "Urine output 25 ml/hr", "Urine output 45 ml/hr"],
    correctIndex: 3,
    explanation:
      "Maintaining donor organ perfusion requires keeping hourly urine outputs above 30-50 ml/hour, alongside keeping systolic blood pressure above 90-100 mmHg.",
  },
  {
    id: "gn-2024-p1-q58",
    question: "How should a nurse collect a urine sample from an indwelling catheter to avoid contamination?",
    options: ["Disconnect the catheter from the bag", "Collect directly from the drainage bag", "Empty the entire bag into a container", "Wiping port"],
    correctIndex: 3,
    explanation:
      "Specimens must be withdrawn aseptically through the designated sampling port using a sterile syringe after scrubbing the port with an alcohol wipe. Collecting from the bag is invalid due to stagnant bacterial growth over time.",
  },
  {
    id: "gn-2024-p1-q59",
    question: "While giving a bed bath, an emergency call occurs for another patient. What is the correct action?",
    options: [
      "Finish the bath quickly, then respond",
      "Cover client/call light/answer",
      "Leave immediately without securing the client",
      "Ask the client to wait alone uncovered",
    ],
    correctIndex: 1,
    explanation:
      "The nurse must protect the current client's physical safety and modesty by covering them, ensuring their safety via the call system, and then leaving immediately to assist with the emergency.",
  },
  {
    id: "gn-2024-p1-q60",
    question: "Which intervention is essential when collecting a routine sputum specimen?",
    options: ["Sterile plastic container", "Any clean cup", "Paper cup", "Non-sterile bag"],
    correctIndex: 0,
    explanation:
      "Sputum specimens must be coughed deeply from the lungs directly into an airtight, sterile container to prevent environmental contamination and preserve pathogens for culture.",
  },
  {
    id: "gn-2024-p1-q61",
    question: "Which technique describes the correct method for standard walker use?",
    options: [
      "Lift and swing the walker far ahead, then jump forward",
      "Slide the walker without lifting it",
      "Four points flat/weight on hands/walk in",
      "Move only one side of the walker at a time",
    ],
    correctIndex: 2,
    explanation:
      "The user must lift and move the walker forward so all four legs land flatly, transfer body weight firmly through the hands onto the frame, and then step forward into the center.",
  },
  {
    id: "gn-2024-p1-q62",
    question: "What is the correct protocol to fix an official documentation error in a manual chart?",
    options: ["Use correction fluid", "Erase completely", "One line/initials", "Tear out the page"],
    correctIndex: 2,
    explanation:
      "The nurse must draw a single thin line through the erroneous entry so it remains legible, write error or mistake, and sign or initial the correction to maintain legal transparency.",
  },
  {
    id: "gn-2024-p1-q63",
    question: "To ensure safety during transfer from an OR table to a stretcher, which action is mandatory?",
    options: ["Raise the head of the stretcher fully", "Leave side rails down", "Move quickly without assistance", "Secure safety belts"],
    correctIndex: 3,
    explanation:
      "Fastening safety straps across the patient immediately upon placement on a stretcher avoids unexpected falls or sliding during transport.",
  },
  {
    id: "gn-2024-p1-q64",
    question: "Which protective items are required when performing a contact precautions bed bath?",
    options: ["Mask/goggles only", "Gown/gloves", "N95 respirator only", "Shoe covers only"],
    correctIndex: 1,
    explanation:
      "Contact precautions require a gown and gloves to block pathogen transmission via direct contact with the patient or contaminated environmental surfaces.",
  },
  {
    id: "gn-2024-p1-q65",
    question: "Which assistive device provides the best overall structural stability after a stroke?",
    options: ["Single-tip cane", "Axillary crutches", "Quad cane", "Walking stick"],
    correctIndex: 2,
    explanation:
      "A quad cane features a four-pronged base that offers a larger, more stable support surface than a single-tipped cane, making it ideal for hemiplegic balance issues.",
  },
  {
    id: "gn-2024-p1-q66",
    question: "If a client experiences severe dizziness during a thoracentesis, which position is used?",
    options: ["Left side-lying 45 degrees", "Prone position", "Sitting fully upright", "Trendelenburg position"],
    correctIndex: 0,
    explanation:
      "If complications arise, the client should be assisted to lie down on their unaffected side (frequently the opposite side of the needle puncture) to stabilize ventilation and comfort.",
  },
  {
    id: "gn-2024-p1-q67",
    question: "Which criteria describes a research instrument's ability to yield the same results upon repeated administration?",
    options: ["Validity", "Objectivity", "Feasibility", "Reliability"],
    correctIndex: 3,
    explanation:
      "Reliability refers to the consistency, stability, and repeatability of a measurement tool across multiple testing intervals.",
  },
  {
    id: "gn-2024-p1-q68",
    question: "How does a nurse researcher ensure absolute anonymity for human research subjects?",
    options: ["Locking the data in a cabinet", "Using participant names in reports", "Secret identities", "Sharing data only with the research team"],
    correctIndex: 2,
    explanation:
      "Anonymity is achieved when even the researcher cannot link the raw data collected to the identity of the specific participant, often using random codes or unlinked data sets.",
  },
  {
    id: "gn-2024-p1-q69",
    question: "In which type of research design is a participant's refusal to divulge info considered a direct limitation?",
    options: ["Experimental", "Case study", "Cohort", "Descriptive-correlational"],
    correctIndex: 3,
    explanation:
      "Non-disclosure or non-response bias directly curtails a descriptive-correlational study's capability to identify and calculate relationships between variables in a population.",
  },
  {
    id: "gn-2024-p1-q70",
    question: "Which tool is best for data gathering from a large sample across a wide area?",
    options: ["In-depth interview", "Questionnaire", "Focus group", "Direct observation"],
    correctIndex: 1,
    explanation:
      "Questionnaires allow cost-effective, uniform, rapid gathering of objective, quantifiable metrics from large or geographically dispersed samples.",
  },
  {
    id: "gn-2024-p1-q71",
    question: "What type of research design is characterized by the fact that randomization is not possible?",
    options: ["Randomized controlled trial", "True experiment", "Quasi-experiment", "Double-blind trial"],
    correctIndex: 2,
    explanation:
      "Quasi-experimental designs lack the foundational element of strict random assignment, usually because they utilize naturally occurring or pre-existing groups.",
  },
  {
    id: "gn-2024-p1-q72",
    question: "A reference source derived directly from an original investigator's description of their study is a:",
    options: ["Secondary source", "Primary source", "Tertiary source", "Grey literature source"],
    correctIndex: 1,
    explanation:
      "A primary source is an original, first-hand account or report of an empirical investigation authored by the individuals who conducted the research.",
  },
  {
    id: "gn-2024-p1-q73",
    question: "Which bioethical principle reflects the baseline professional duty to not cause harm?",
    options: ["Beneficence", "Justice", "Non-maleficence", "Fidelity"],
    correctIndex: 2,
    explanation:
      "Non-maleficence requires healthcare professionals to avoid inflicting intentional or avoidable harm, injury, or unnecessary discomfort on patients.",
  },
  {
    id: "gn-2024-p1-q74",
    question: "Which legal principle states that an injury itself serves as explicit proof of negligence?",
    options: ["Respondeat superior", "Standard of care", "Res ipsa loquitor", "Informed consent doctrine"],
    correctIndex: 2,
    explanation:
      "Res ipsa loquitur (the thing speaks for itself) applies when an injury occurs from an instrument under exclusive clinical control, and wouldn't happen without negligence.",
  },
  {
    id: "gn-2024-p1-q75",
    question: "Which action represents an exercise of a Board of Nursing's quasi-judicial power?",
    options: ["Setting curriculum standards", "Issuing new licenses only", "Publishing continuing education materials", "Investigate violations"],
    correctIndex: 3,
    explanation:
      "Quasi-judicial powers include investigating alleged infractions, conducting hearings, evaluating testimony, and enforcing disciplinary sanctions or license suspensions.",
  },
  {
    id: "gn-2024-p1-q76",
    question: "What is the legal meaning of an officially revoked professional nursing license?",
    options: [
      "The license is permanently and irreversibly cancelled with no path to practice again",
      "The nurse may continue practicing under supervision",
      "Apply for re-issuance after meeting the regulatory body's reinstatement conditions",
      "The revocation automatically transfers to a different license category",
    ],
    correctIndex: 2,
    explanation:
      "Revocation cancels the current license; however, under most nursing regulatory frameworks, a nurse may petition the licensing/regulatory body for reinstatement after a designated period if specific conditions are met — the exact conditions and legal basis vary by country's nursing law.",
  },
  {
    id: "gn-2024-p1-q77",
    question: "What is the second step within the conceptualizing phase of the scientific research process?",
    options: ["Data collection", "Review related literature", "Data analysis", "Dissemination of findings"],
    correctIndex: 1,
    explanation:
      "The conceptualizing phase begins with formulating the problem, followed immediately by conducting an extensive review of related literature to contextualize the study.",
  },
  {
    id: "gn-2024-p1-q78",
    question: "What is the term for a psychological response where subjects alter behavior because they know they are being observed?",
    options: ["Placebo effect", "Halo effect", "Hawthorne effect", "Observer bias"],
    correctIndex: 2,
    explanation:
      "The Hawthorne effect occurs when individuals modify or improve an aspect of their performance in response to the awareness of being observed during a study.",
  },
  {
    id: "gn-2024-p1-q79",
    question: "Which action serves as a correct operational example of judgment (purposive) sampling?",
    options: [
      "Randomly select 20 patients from a full admission list",
      "Decide on 20 samples from admitted patients with specific characteristics relevant to the study",
      "Select every 5th patient admitted",
      "Include all patients who volunteer",
    ],
    correctIndex: 1,
    explanation:
      "Judgment (purposive) sampling relies entirely on the researcher's deliberate expertise to select specific subjects who possess characteristics essential to the study's objective.",
  },
  {
    id: "gn-2024-p1-q80",
    question: "Which famous nursing theorist is recognized for developing transcultural nursing theory?",
    options: ["Leininger", "Orem", "Henderson", "Roy"],
    correctIndex: 0,
    explanation:
      "Madeleine Leininger developed the Culture Care Diversity and Universality theory, establishing transcultural nursing as a distinct area of formal practice.",
  },
  {
    id: "gn-2024-p1-q81",
    question: "Which sampling method gives every unit within a population an equal and independent chance of selection?",
    options: ["Convenience", "Random", "Purposive", "Quota"],
    correctIndex: 1,
    explanation:
      "Probability random sampling ensures that every member of the target population has an equal, nonzero probability of selection, minimizing selection bias.",
  },
  {
    id: "gn-2024-p1-q82",
    question: "What is the primary analytical use of a standardized Likert Scale?",
    options: ["Ranking preferences only", "Measuring reaction time", "Degree of agreement/disagreement", "Categorizing nominal data"],
    correctIndex: 2,
    explanation:
      "A Likert scale measures attitudes or psychometric profiles by calculating a respondent's specific degree of agreement or disagreement with a series of declarative statements.",
  },
  {
    id: "gn-2024-p1-q83",
    question:
      "Which theory explicitly addresses four modes of adaptation (physiological, self-concept, role function, interdependence)?",
    options: ["Roy", "Orem", "Henderson", "Peplau"],
    correctIndex: 0,
    explanation:
      "Sister Callista Roy's Adaptation Model views the person as a holistic adaptive system balancing internal inputs across four distinct adaptive modes.",
  },
  {
    id: "gn-2024-p1-q84",
    question: "What organizational term refers to the specific number of personnel reporting directly to a single leader?",
    options: ["Chain of command", "Unity of command", "Line authority", "Span of control"],
    correctIndex: 3,
    explanation:
      "Span of control refers to the literal number of subordinates an administrator or supervisor can efficiently direct, monitor, and manage.",
  },
  {
    id: "gn-2024-p1-q85",
    question: "Which bioethical principle serves as the moral foundation for obtaining valid informed consent?",
    options: ["Justice", "Fidelity", "Autonomy", "Veracity"],
    correctIndex: 2,
    explanation:
      "Autonomy recognizes a patient's inherent right to self-determination, allowing them to make independent decisions regarding their own medical care.",
  },
  {
    id: "gn-2024-p1-q86",
    question: "What instruction should the nurse emphasize regarding foot care for a client with PVD?",
    options: ["Soak feet daily in hot water", "Walk barefoot indoors", "Apply lotion between the toes", "No nail clippers"],
    correctIndex: 3,
    explanation:
      "Clients with PVD have poor tissue perfusion and healing capacity. They must avoid using sharp nail clippers at home; instead, a podiatrist should handle nail care to avoid accidental injury.",
  },
  {
    id: "gn-2024-p1-q87",
    question: "Which inclusion is essential in a dietary plan for a client recovering from pressure ulcers?",
    options: ["Ground beef patties", "White bread only", "Clear broth only", "Low-protein soup"],
    correctIndex: 0,
    explanation:
      "Ground beef patties provide dense, high-biological-value protein and essential amino acids required for collagen synthesis and tissue granulation.",
  },
  {
    id: "gn-2024-p1-q88",
    question: "What is the most common position utilized for administering a standard cleansing enema?",
    options: ["Sims' left lateral", "Supine", "High Fowler's", "Prone"],
    correctIndex: 0,
    explanation:
      "The Sims' left lateral position takes advantage of the natural anatomical curvature of the sigmoid colon, facilitating fluid entry and retention.",
  },
  {
    id: "gn-2024-p1-q89",
    question: "What is the priority nursing action immediately when a unit of packed RBCs arrives on the floor?",
    options: ["Start the infusion immediately", "Warm the blood bag", "Measure vital signs", "Notify the laboratory"],
    correctIndex: 2,
    explanation:
      "Vital signs must be recorded immediately before starting the transfusion to establish a baseline. Checking the blood tag against the ID band follows next as part of the double-verification process.",
  },
  {
    id: "gn-2024-p1-q90",
    question: "A client requests medication timing adjustments around prayer hours. This intervention type is:",
    options: ["Independent", "Dependent", "Collaborative only", "Delegated"],
    correctIndex: 0,
    explanation:
      "Adjusting care schedules to honor a patient's cultural or spiritual preferences falls completely within the autonomous scope of independent nursing judgment.",
  },
  {
    id: "gn-2024-p1-q91",
    question: "A post-op client's statement that they are completely pain-free reflects which step of the nursing process?",
    options: ["Assessment", "Diagnosis", "Implementation", "Evaluation"],
    correctIndex: 3,
    explanation:
      "Comparing the patient's current comfort status against the expected outcome (pain control) represents clinical evaluation.",
  },
  {
    id: "gn-2024-p1-q92",
    question: "What is the primary clinical rationale for removing elastic anti-embolism stockings periodically?",
    options: ["Improve patient comfort only", "Allow the skin to breathe", "Ease application of lotion", "Observe lower extremities"],
    correctIndex: 3,
    explanation:
      "Stockings must be removed at least once per shift to inspect the skin for breakdown, assess localized neurovascular status, and check for signs of deep tissue injury.",
  },
  {
    id: "gn-2024-p1-q93",
    question: "What is the highest priority nursing instruction when starting a blood transfusion?",
    options: ["Report feeling cold", "Report hunger", "Report itching/swelling/dyspnea", "Report needing to use the bathroom"],
    correctIndex: 2,
    explanation:
      "The nurse must instruct the patient to immediately report signs of an acute hypersensitivity or hemolytic reaction, such as itching, swelling, or shortness of breath, to ensure timely intervention.",
  },
  {
    id: "gn-2024-p1-q94",
    question: "Which intervention is most appropriate for a client experiencing abdominal cramps during tube feeding?",
    options: ["Decrease rate/concentration", "Increase rate immediately", "Stop feeding permanently", "Switch to bolus feeding"],
    correctIndex: 0,
    explanation:
      "Reducing the rate of delivery or diluting the formula concentration decreases osmotic load and gastrointestinal distension, minimizing cramping and intolerance.",
  },
  {
    id: "gn-2024-p1-q95",
    question: "What is the correct action after reconstituting a powdered medication vial with diluent?",
    options: ["Shake vigorously", "Roll gently between palms", "Leave undisturbed for an hour", "Invert and tap repeatedly"],
    correctIndex: 1,
    explanation:
      "Rolling the vial gently between the palms dissolves the powder without creating excess air bubbles or foaming, which could interfere with drawing an accurate dose.",
  },
  {
    id: "gn-2024-p1-q96",
    question: "Which action is standard when caring for a client receiving oxygen therapy via a simple face mask?",
    options: ["Supine position", "Trendelenburg position", "Semi-Fowler's", "Prone position"],
    correctIndex: 2,
    explanation:
      "Elevating the head of the bed to semi-Fowler's position maximizes diaphragmatic excursion and optimizes lung expansion, improving overall gas exchange.",
  },
  {
    id: "gn-2024-p1-q97",
    question: "What is the maximum safe time limit allowed for the complete transfusion of packed RBCs?",
    options: ["2 hrs", "3 hrs", "4 hrs", "6 hrs"],
    correctIndex: 2,
    explanation:
      "Blood components must not hang for longer than 4 hours because the warm room temperature increases the risk of bacterial proliferation and cell lysis within the bag.",
  },
  {
    id: "gn-2024-p1-q98",
    question: "When should the nurse schedule a blood collection to sample a drug's trough level?",
    options: ["1 hour after the dose", "At the midpoint between doses", "30 minutes after the dose", "Immediately before"],
    correctIndex: 3,
    explanation:
      "The trough level represents the lowest therapeutic concentration of a medication in the bloodstream, which occurs immediately (0-15 minutes) before the next scheduled dose.",
  },
  {
    id: "gn-2024-p1-q99",
    question: "What is the operational advantage of utilizing a hospital floor stock system?",
    options: ["Implement orders quickly", "Reduce total medication costs", "Eliminate need for documentation", "Reduce need for pharmacist oversight"],
    correctIndex: 0,
    explanation:
      "Keeping a stock of common medications directly on the unit allows nurses to obtain and administer urgent medications immediately without waiting for pharmacy processing.",
  },
  {
    id: "gn-2024-p1-q100",
    question: "Which clinical manifestation represents an abnormal abdominal physical assessment finding?",
    options: ["Shifting dullness", "Active bowel sounds in all quadrants", "Soft, non-tender abdomen", "Symmetrical abdominal contour"],
    correctIndex: 0,
    explanation:
      "Shifting dullness indicates the presence of free peritoneal fluid (ascites), which is an abnormal finding pointing to underlying hepatic, renal, or cardiac pathology.",
  },
];
