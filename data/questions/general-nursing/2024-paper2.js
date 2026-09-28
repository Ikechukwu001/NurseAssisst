// NMCN General Nursing — 2024, Paper II
// Correct answers and rationale sourced from the user's compilation.
// Wrong options (distractors) are AI-synthesized placeholders — see
// 2022-paper1.js header for full notes on this approach.
//
// FLAGGED: Q31 (most common type of postpartum psychosis) conflicts with
// 2022-paper2.js, which gives "Depression" instead of "Bipolar disorder"
// for the same question. Both are internally consistent with their own
// rationale — this is a genuine disagreement between two source
// documents, not something resolved here. Kept as "Bipolar disorder"
// per this source; worth a source check given it recurs differently
// across papers.

export const questions = [
  {
    id: "gn-2024-p2-q1",
    question: "Which of the following is an accessory reproductive gland in males?",
    options: ["Testis", "Epididymis", "Prostate gland", "Vas deferens"],
    correctIndex: 2,
    explanation:
      "The prostate gland is a crucial male accessory reproductive gland that secretes an alkaline fluid to nourish sperm and preserve semen vitality.",
  },
  {
    id: "gn-2024-p2-q2",
    question: "Cryptorchidism is a male reproductive system disorder characterized by:",
    options: ["Inflammation of the testes", "Twisting of the spermatic cord", "Enlargement of the prostate", "Undescended testes to the scrotum"],
    correctIndex: 3,
    explanation:
      "Cryptorchidism is a congenital anomaly where one or both of the testes fail to descend out of the abdominal cavity into the scrotal sac during fetal development.",
  },
  {
    id: "gn-2024-p2-q3",
    question: "The embryo in-utero gets its food through the process of:",
    options: ["Active transport", "Osmosis", "Simple diffusion", "Facilitated transport"],
    correctIndex: 2,
    explanation:
      "Nutrients, respiratory gases, and metabolic waste products readily pass across the placental membrane primarily via passive, simple concentration gradients.",
  },
  {
    id: "gn-2024-p2-q4",
    question: "The female breast consists of:",
    options: ["5-8 lobes", "15-20 lobes", "25-30 lobes", "10-12 lobes"],
    correctIndex: 1,
    explanation:
      "Anatomically, each mature female breast is subdivided structurally into 15 to 20 distinct glandular lobes radiating outwards from the nipple region.",
  },
  {
    id: "gn-2024-p2-q5",
    question: "The mons venus is also known as:",
    options: ["The mons pubis", "The labia majora", "The perineum", "The vulva"],
    correctIndex: 0,
    explanation:
      "The mons venus (or mons veneris) is the rounded fatty pad of subcutaneous tissue overlying the pubic symphysis, commonly designated as the mons pubis.",
  },
  {
    id: "gn-2024-p2-q6",
    question: "The follicular phase in the menstrual cycle usually lasts for:",
    options: ["5-7 days", "11-13 days", "20-22 days", "16-18 days"],
    correctIndex: 1,
    explanation:
      "In an average 28-day cycle, the pre-ovulatory follicular phase typically spans 11 to 13 days, concluding when the luteinizing hormone surge triggers ovulation on day 14.",
  },
  {
    id: "gn-2024-p2-q7",
    question: "The Montgomery glands are:",
    options: ["Lymph nodes in the axilla", "Milk-producing glandular tissue", "Modified sweat glands in the areola", "Ducts draining the nipple"],
    correctIndex: 2,
    explanation:
      "Montgomery glands are specialized sebaceous (oil) glands located in the breast areola that secrete protective, lubricating lipids during lactation.",
  },
  {
    id: "gn-2024-p2-q8",
    question: "Which part of the brain is responsible for control of breathing, heart rate, and blood pressure?",
    options: ["Cerebrum", "Cerebellum", "Hindbrain", "Forebrain"],
    correctIndex: 2,
    explanation:
      "The medulla oblongata, located within the hindbrain structure, serves as the vital autonomic center managing cardiorespiratory regulation and vasomotor tone.",
  },
  {
    id: "gn-2024-p2-q9",
    question: "The cochlea of the ear contains the following, EXCEPT:",
    options: ["Scala vestibuli", "Scala media", "Scala tympani", "Scala tragus"],
    correctIndex: 3,
    explanation:
      "The bony and membranous cochlea is divided into three fluid-filled channels: the scala vestibuli, scala tympani, and scala media. There is no such anatomical structure as a scala tragus.",
  },
  {
    id: "gn-2024-p2-q10",
    question: "The size of the pupil of the eye is controlled by the:",
    options: ["Iris", "Cornea", "Lens", "Sclera"],
    correctIndex: 0,
    explanation:
      "The iris is a circular, pigmented muscular diaphragm containing smooth muscle fibers that contract or dilate to modulate pupil size and light entry.",
  },
  {
    id: "gn-2024-p2-q11",
    question: "The stapes in the ear articulates with the:",
    options: ["Round window", "Oval window", "Tympanic membrane", "Malleus"],
    correctIndex: 1,
    explanation:
      "The footplate of the stapes rocks against the membrane of the oval window, transmitting acoustic mechanical vibrations directly into the fluid-filled inner ear.",
  },
  {
    id: "gn-2024-p2-q12",
    question: "The vestibulocochlear nerve is otherwise called:",
    options: ["8th cranial nerve", "7th cranial nerve", "9th cranial nerve", "10th cranial nerve"],
    correctIndex: 0,
    explanation:
      "Cranial Nerve VIII is the vestibulocochlear (acoustic) nerve, responsible for mediating sensory input regarding balance, equilibrium, and sound reception.",
  },
  {
    id: "gn-2024-p2-q13",
    question: "The sebaceous glands are responsible for the production of:",
    options: ["Sebum", "Sweat", "Cerumen", "Mucus"],
    correctIndex: 0,
    explanation:
      "Sebaceous glands are microscopic exocrine structures embedded within dermal skin layers that secrete an oily substance known as sebum to lubricate the hair and skin.",
  },
  {
    id: "gn-2024-p2-q14",
    question: "The intertragic notch of the pinna is found between:",
    options: ["The helix and antihelix", "The lobule and helix", "The concha and canal", "The tragus and antitragus"],
    correctIndex: 3,
    explanation:
      "The intertragic notch (or incisura intertragica) is the deep anatomical indentation separating the anterior tragus from the posterior antitragus projection.",
  },
  {
    id: "gn-2024-p2-q15",
    question: "Cardiac electrical activities are related to the following ions, EXCEPT:",
    options: ["Sodium", "Potassium", "Magnesium", "Calcium"],
    correctIndex: 2,
    explanation:
      "Myocardial depolarization and repolarization action potentials rely primarily on the movement of sodium (Na+), potassium (K+), and calcium (Ca2+) ions.",
  },
  {
    id: "gn-2024-p2-q16",
    question:
      "The relationship between increased stroke volume and increased ventricular end-diastolic volume, for a given intrinsic contractility, is based on:",
    options: ["Ohm's law", "Poiseuille's law", "Boyle's law", "Starling's law"],
    correctIndex: 3,
    explanation:
      "The Frank-Starling law states that the stroke volume of the heart increases in response to an increase in the volume of blood filling the heart (end-diastolic volume), which stretches the myocardial fibers.",
  },
  {
    id: "gn-2024-p2-q17",
    question: "The following are primary determinants of stroke volume, EXCEPT:",
    options: ["Control of heart rate", "Preload", "Afterload", "Contractility"],
    correctIndex: 0,
    explanation:
      "Stroke volume represents the amount of blood ejected per beat and is determined by preload, afterload, and contractility. Heart rate is an independent component of total cardiac output.",
  },
  {
    id: "gn-2024-p2-q18",
    question:
      "To gather subjective information for a cardiovascular health history, the patient shall be assessed for the following, EXCEPT:",
    options: ["Urination", "Shortness of breath", "Cold extremities", "Anxiety"],
    correctIndex: 0,
    explanation:
      "Symptoms like shortness of breath, cold extremities, and anxiety point toward cardiorespiratory issues, while urination is primarily evaluated during renal or genitourinary assessments.",
  },
  {
    id: "gn-2024-p2-q19",
    question: "The instrument used for measuring intraocular pressure is:",
    options: ["Tonometer", "Ophthalmoscope", "Snellen chart", "Slit lamp"],
    correctIndex: 0,
    explanation:
      "A tonometer is a specialized diagnostic device used by clinicians to measure the fluid pressure inside the eye, which is essential for screening for glaucoma.",
  },
  {
    id: "gn-2024-p2-q20",
    question:
      "The following are co-factors associated with underproduction of red blood cells, EXCEPT:",
    options: ["Iron", "Vitamin B12", "Calcium", "Folic acid"],
    correctIndex: 2,
    explanation:
      "Erythropoiesis depends heavily on nutrients like iron, vitamin B12, and folic acid. Calcium is not an essential co-factor for red blood cell synthesis.",
  },
  {
    id: "gn-2024-p2-q21",
    question: "Acoustic neuromas are diagnosed using the following techniques, EXCEPT:",
    options: ["MRI", "Audiometry", "Electro-encephalography", "CT scan"],
    correctIndex: 2,
    explanation:
      "Acoustic neuromas (vestibular schwannomas) are benign tumors diagnosed via MRI, CT, X-ray, and audiometry. EEG monitors cerebral cortical activity and is not used for this purpose.",
  },
  {
    id: "gn-2024-p2-q22",
    question: "What is the standard clinical definition of primary infertility?",
    options: [
      "Inability to conceive after 1 year of regular, unprotected intercourse",
      "Inability to conceive after 3 months of trying",
      "Inability to carry any pregnancy to term",
      "Inability to conceive after menopause onset",
    ],
    correctIndex: 0,
    explanation:
      "Clinical infertility is diagnosed when a couple has failed to achieve conception after 12 months or more of regular, unprotected intercourse.",
  },
  {
    id: "gn-2024-p2-q23",
    question: "Why does advanced endometriosis frequently interfere with a client's fertility?",
    options: [
      "It causes complete cessation of ovulation in all cases",
      "Endometrial implants block or distort the fallopian tubes",
      "It always causes early menopause",
      "It prevents implantation only, never affecting the tubes",
    ],
    correctIndex: 1,
    explanation:
      "Endometriosis causes cyclic bleeding within the pelvic cavity, leading to extensive adhesions, scarring, and anatomical distortion that can occlude the fallopian tubes.",
  },
  {
    id: "gn-2024-p2-q24",
    question: "Which instruction should a nurse provide to a client scheduled for a hysterosalpingogram?",
    options: [
      "You will likely feel moderate abdominal cramping when the dye is inserted",
      "You will be fully sedated for this procedure",
      "You must fast for 24 hours beforehand",
      "This procedure requires general anesthesia",
    ],
    correctIndex: 0,
    explanation:
      "As the radiopaque contrast medium is injected through the cervix into the uterine cavity and fallopian tubes, localized distension routinely causes temporary pelvic cramping.",
  },
  {
    id: "gn-2024-p2-q25",
    question: "Which statement accurately defines Artificial Insemination by Donor (AID)?",
    options: [
      "The woman's own egg is fertilized outside the body",
      "A surrogate carries the pregnancy to term",
      "External donor sperm is mechanically instilled into the uterus or cervix",
      "Hormonal medication alone is used to induce ovulation",
    ],
    correctIndex: 2,
    explanation:
      "AID involves the clinical introduction of semen from an anonymous or designated third-party donor directly into the female reproductive tract to achieve pregnancy.",
  },
  {
    id: "gn-2024-p2-q26",
    question:
      "When conducting a pain assessment in older persons, which physiological age-related consideration must the nurse account for?",
    options: [
      "Pain sensitivity always increases uniformly with age",
      "Older individuals can experience atypical pain presentations and may not report pain",
      "Older adults always report pain accurately and promptly",
      "Pain perception is unaffected by aging",
    ],
    correctIndex: 1,
    explanation:
      "Aging can alter pain perception or manifest atypically (e.g., confusion, restlessness). Pain is not a normal part of aging, and older adults often underreport it.",
  },
  {
    id: "gn-2024-p2-q27",
    question: "Which pharmacological principle guides the administration of analgesics to older adults?",
    options: [
      "Older adults metabolize drugs faster than younger adults",
      "Dosing does not need adjustment regardless of age",
      "Older adults are typically more sensitive to drugs due to altered pharmacokinetics",
      "Older adults require higher starting doses than younger adults",
    ],
    correctIndex: 2,
    explanation:
      "Decreased hepatic blood flow and reduced glomerular filtration rate (GFR) prolong drug half-life, making older adults highly sensitive and prone to drug toxicity.",
  },
  {
    id: "gn-2024-p2-q28",
    question: "A condition where a client mistakes a rope for a snake is called:",
    options: ["Hallucination", "Illusion", "Delusion", "Confabulation"],
    correctIndex: 1,
    explanation:
      "An illusion is a sensory misinterpretation of an actual, real external stimulus (e.g., misperceived objects), whereas hallucinations occur in the absence of external stimuli.",
  },
  {
    id: "gn-2024-p2-q29",
    question: "In depression, there is a deficiency of:",
    options: ["5-Hydroxytryptamine", "Dopamine only", "Acetylcholine", "GABA"],
    correctIndex: 0,
    explanation:
      "The monoamine hypothesis identifies a functional deficiency of serotonin (5-hydroxytryptamine, or 5-HT) and norepinephrine within key synapses as a primary cause of depression.",
  },
  {
    id: "gn-2024-p2-q30",
    question: "Which of the following glands has a significant effect on eating behaviours?",
    options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Hypothalamus"],
    correctIndex: 3,
    explanation:
      "The hypothalamus serves as the main neuroendocrine center controlling metabolic homeostatic drives, including appetite, hunger, and satiety.",
  },
  {
    id: "gn-2024-p2-q31",
    question: "The most common type of postpartum psychosis is:",
    options: ["Schizophrenia", "Delirium", "Depression", "Bipolar disorder"],
    correctIndex: 3,
    explanation:
      "Postpartum psychosis manifests most frequently as an acute episode of bipolar affective disorder, presenting with fluctuating manic-depressive or mixed states.",
  },
  {
    id: "gn-2024-p2-q32",
    question: "The following are features of dementia, EXCEPT:",
    options: ["Memory loss", "Impaired consciousness", "Personality change", "Language difficulty"],
    correctIndex: 1,
    explanation:
      "Dementia involves progressive, global cognitive decline while maintaining a clear state of consciousness. Fluctuating levels of consciousness indicate delirium instead.",
  },
  {
    id: "gn-2024-p2-q33",
    question: "Susceptibility to mental illness is often related to:",
    options: ["Heredity", "Diet", "Climate", "Occupation"],
    correctIndex: 0,
    explanation:
      "Psychiatric disorders feature strong polygenic components, meaning genetic inheritance and familial heredity significantly elevate baseline susceptibility.",
  },
  {
    id: "gn-2024-p2-q34",
    question:
      "The irregular, acyclic bleeding from the uterus, mostly related to uterine lesions, is:",
    options: ["Metrorrhagia", "Menorrhagia", "Amenorrhea", "Dysmenorrhea"],
    correctIndex: 0,
    explanation:
      "Metrorrhagia describes uterine bleeding occurring at irregular, noncyclic intervals between expected menstrual periods, frequently linked to local structural lesions.",
  },
  {
    id: "gn-2024-p2-q35",
    question: "The following positions are used for gynaecological examinations, EXCEPT:",
    options: ["Lithotomy", "Sims' lateral", "Fowler's", "Trendelenburg"],
    correctIndex: 2,
    explanation:
      "Gynaecological evaluations routinely employ lithotomy, Sims' lateral, or slight Trendelenburg positions. Fowler's position (sitting up) is not practical for pelvic exams.",
  },
  {
    id: "gn-2024-p2-q36",
    question: "Autoerotism is defined as:",
    options: [
      "Sexual attraction to inanimate objects",
      "Sexual pleasure from exposing oneself",
      "Sexual pleasure from masturbation and fantasy",
      "Sexual pleasure derived from causing pain",
    ],
    correctIndex: 2,
    explanation:
      "Autoerotism refers to generating sexual arousal and gratification internally via one's own fantasies, self-stimulation, or masturbation.",
  },
  {
    id: "gn-2024-p2-q37",
    question: "Bestiality is defined as:",
    options: [
      "Sexual pleasure from wearing clothing of the opposite gender",
      "Sexual attraction to children",
      "Sexual pleasure from intercourse with animals",
      "Sexual pleasure from observing others",
    ],
    correctIndex: 2,
    explanation: "Bestiality (also termed zoophilia) is a sexual deviation defined by engaging in sexual contact or intercourse with animals.",
  },
  {
    id: "gn-2024-p2-q38",
    question: "Transvestism is defined as:",
    options: [
      "Sexual pleasure from watching others undress",
      "A man who derives pleasure from wearing female clothing",
      "Sexual pleasure from inflicting pain",
      "Sexual attraction to a close relative",
    ],
    correctIndex: 1,
    explanation:
      "Transvestism involves cross-dressing, where an individual derives emotional or sexual satisfaction from wearing clothes associated with the opposite sex.",
  },
  {
    id: "gn-2024-p2-q39",
    question: "Women who inherit the BRCA1 or BRCA2 genes are susceptible to an elevated risk of:",
    options: ["Cervical and uterine cancers", "Colon and liver cancers", "Lung and skin cancers", "Breast and ovarian cancers"],
    correctIndex: 3,
    explanation:
      "Mutations in the tumor suppressor genes BRCA1 and BRCA2 markedly elevate an individual's lifetime risk for developing breast and ovarian malignancies.",
  },
  {
    id: "gn-2024-p2-q40",
    question: "The incubation period of chlamydia infection is between:",
    options: ["1-3 days", "3-5 days", "4-6 weeks", "7-21 days"],
    correctIndex: 3,
    explanation:
      "Following exposure to Chlamydia trachomatis, symptoms typically emerge after an incubation window spanning 7 to 21 days.",
  },
  {
    id: "gn-2024-p2-q41",
    question: "The main aim of emergency obstetric and neonatal care facilities is to reduce:",
    options: [
      "Maternal and neonatal mortality and morbidity",
      "Hospital admission rates only",
      "Cost of antenatal care",
      "Length of postnatal hospital stay",
    ],
    correctIndex: 0,
    explanation:
      "Emergency Obstetric and Newborn Care (EmONC) networks are designed to prevent both maternal and neonatal deaths and long-term morbidities during acute birth crises.",
  },
  {
    id: "gn-2024-p2-q42",
    question:
      "The embryonic disk arising from the inner cell mass has the following two layers of cells:",
    options: [
      "Embryonic ectoderm and endoderm",
      "Mesoderm and endoderm",
      "Trophoblast and mesoderm",
      "Chorion and amnion",
    ],
    correctIndex: 0,
    explanation:
      "During early blastocyst differentiation, the bilaminar embryonic disc develops into two primary germ layers: the upper epiblast (ectoderm) and the lower hypoblast (endoderm).",
  },
  {
    id: "gn-2024-p2-q43",
    question: "A pregnant woman's average weight gain by the 3rd trimester is:",
    options: ["12.5kg", "5kg", "20kg", "8kg"],
    correctIndex: 0,
    explanation:
      "For a woman with a normal baseline BMI, the recommended average cumulative weight gain throughout a full-term pregnancy is approximately 11 to 12.5 kg.",
  },
  {
    id: "gn-2024-p2-q44",
    question: "The ductus arteriosus is expected to close ______ after delivery.",
    options: ["Immediately", "30 minutes", "2 hours", "24 hours"],
    correctIndex: 2,
    explanation:
      "Functional closure of the ductus arteriosus via smooth muscle constriction typically occurs within the first few hours (often within 2 hours) following birth.",
  },
  {
    id: "gn-2024-p2-q45",
    question: "High-risk pregnancy refers to:",
    options: [
      "Any pregnancy in a woman over 40",
      "Pregnancy that threatens the health of the mother or her fetus",
      "A pregnancy with more than one antenatal visit missed",
      "Any pregnancy requiring cesarean delivery",
    ],
    correctIndex: 1,
    explanation:
      "A high-risk pregnancy is clinically defined as any pregnancy where concurrent medical, maternal, or fetal variables threaten the health or survival of the mother or fetus.",
  },
  {
    id: "gn-2024-p2-q46",
    question: "The following are indications for operative vaginal delivery, EXCEPT:",
    options: ["Fetal distress in second stage", "Maternal exhaustion", "Prolonged first stage of labour", "Prolonged second stage of labour"],
    correctIndex: 2,
    explanation:
      "Operative vaginal deliveries (using forceps or vacuum) are used exclusively during the second stage of labor once the cervix is fully dilated.",
  },
  {
    id: "gn-2024-p2-q47",
    question: "The position of the fetus is described as:",
    options: [
      "The relationship of the long axis of the fetus to the long axis of the mother",
      "The part of the fetus that enters the pelvis first",
      "The attitude of flexion or extension of the fetal head",
      "The relationship of a landmark on the presenting part to the right and left side of the maternal pelvis",
    ],
    correctIndex: 3,
    explanation:
      "Fetal position indicates how a designated landmark on the presenting part relates to the anterior, posterior, right, or left quadrants of the mother's pelvis.",
  },
  {
    id: "gn-2024-p2-q48",
    question:
      "According to current WHO recommendations, a pregnant woman should be given which of the following nutrient supplements?",
    options: ["Vitamin C and calcium", "Iron and folic acid", "Vitamin D and zinc", "Vitamin A and iodine"],
    correctIndex: 1,
    explanation:
      "Standard antenatal guidelines recommend daily oral iron and folic acid supplementation to prevent maternal anemia and neural tube defects.",
  },
  {
    id: "gn-2024-p2-q49",
    question: "The environmental factor that influences children's growth and development is:",
    options: ["Effect of economic power", "Genetic inheritance", "Birth order", "Temperament"],
    correctIndex: 0,
    explanation:
      "A family or community's socio-economic status directly shapes access to nutrition, housing, sanitary environments, and quality pediatric medical treatment.",
  },
  {
    id: "gn-2024-p2-q50",
    question: "Family type is:",
    options: [
      "A sociocultural influencer of a child's growth and development",
      "A biological determinant of growth",
      "A genetic influencer of development",
      "A physiological milestone marker",
    ],
    correctIndex: 0,
    explanation:
      "The structure and dynamics of a child's family unit act as primary sociocultural factors influencing their behavioral, psychological, and social development.",
  },
  {
    id: "gn-2024-p2-q51",
    question:
      "Giving infants food and liquid in addition to formula and/or breast milk is referred to as:",
    options: ["Weaning", "Bottle feeding", "Mixed feeding", "Complementary feeding"],
    correctIndex: 3,
    explanation:
      "Complementary feeding is defined as introducing solid, semi-solid, or soft foods alongside continued breast or formula feeding once an infant reaches 6 months of age.",
  },
  {
    id: "gn-2024-p2-q52",
    question:
      "The process of gradually introducing a variety of solid foods into a baby's diet while still on breast and/or formula milk is:",
    options: ["Weaning", "Complementary feeding", "Supplementary feeding", "Demand feeding"],
    correctIndex: 0,
    explanation: "Weaning describes the gradual transition of an infant from exclusive liquid milk consumption toward a varied solid food diet.",
  },
  {
    id: "gn-2024-p2-q53",
    question: "Salting and drying are examples of food:",
    options: ["Fortification methods", "Enrichment methods", "Preservation methods", "Contamination risks"],
    correctIndex: 2,
    explanation:
      "Salting and dehydration are long-standing preservation methods that lower moisture content to inhibit bacterial proliferation and extend shelf life.",
  },
  {
    id: "gn-2024-p2-q54",
    question: "The following are components of the essential child survival package, EXCEPT:",
    options: ["Immunization", "School health", "Growth monitoring", "Oral rehydration therapy"],
    correctIndex: 1,
    explanation:
      "The core infant survival package prioritizes neonates and toddlers under 5 years old. School health services target an older age group.",
  },
  {
    id: "gn-2024-p2-q55",
    question:
      "A child with a high probability of a negative outcome when exposed to unfavorable circumstances, comparable to others in the population, is said to be:",
    options: ["Vulnerable", "Resilient", "At-risk only", "Deprived"],
    correctIndex: 0,
    explanation:
      "Vulnerability describes a state where structural, socioeconomic, or physiological factors place a child at a higher risk of adverse health outcomes than their peers.",
  },
  {
    id: "gn-2024-p2-q56",
    question:
      "The common causes of jaundice presenting in the first 24 hours of life include the following, EXCEPT:",
    options: ["Sepsis", "Hemolytic disease", "Rh incompatibility", "Breastfeeding"],
    correctIndex: 3,
    explanation:
      "Jaundice appearing within the first 24 hours of life is considered pathological, often caused by hemolysis or sepsis. True breast milk jaundice manifests later, after the first week of life.",
  },
  {
    id: "gn-2024-p2-q57",
    question:
      "Baby Jones is admitted to the paediatric emergency; on assessment, a diagnosis of intussusception is made. The following pairs of signs are features of intussusception, EXCEPT:",
    options: ["Paroxysmal abdominal pain", "Withdrawal and quietness", "Currant-jelly stools", "Sausage-shaped abdominal mass"],
    correctIndex: 1,
    explanation:
      "Intussusception presents with acute paroxysms of severe, colicky pain where the infant screams and draws their knees to their chest, interspersed with periods of lethargy, rather than calm withdrawal.",
  },
  {
    id: "gn-2024-p2-q58",
    question:
      "The immediate post-operative nursing management of an infant with pyloric stenosis is:",
    options: [
      "Nil by mouth for 48 hours",
      "Full formula feeds immediately",
      "Feeding with clear fluids within 6 hours",
      "IV fluids only for 24 hours",
    ],
    correctIndex: 2,
    explanation:
      "Following a successful pyloromyotomy, feed reintroduction is initiated early (typically within 6 hours) using small amounts of clear fluids or electrolyte solutions.",
  },
  {
    id: "gn-2024-p2-q59",
    question:
      "An infant who has just returned to the ward following surgical repair of cleft lip should be placed in:",
    options: ["Prone position", "Lateral position", "Trendelenburg position", "High Fowler's"],
    correctIndex: 1,
    explanation:
      "Post-operative cleft lip repairs require a side-lying (lateral) or supine position to keep the child from rubbing their face against the mattress and damaging the surgical site.",
  },
  {
    id: "gn-2024-p2-q60",
    question: "A large, harsh murmur combined with a systolic thrill is characteristic of:",
    options: ["Ventricular septal defect", "Atrial septal defect", "Patent ductus arteriosus", "Aortic stenosis"],
    correctIndex: 0,
    explanation:
      "A pansystolic murmur accompanied by a palpable chest wall thrill along the left sternal border is a classic sign of a ventricular septal defect (VSD).",
  },
  {
    id: "gn-2024-p2-q61",
    question: "Research is best described as:",
    options: [
      "A collection of opinions on a topic",
      "A systematic approach for refining, validating existing knowledge, and generating new knowledge",
      "A summary of textbook information",
      "A personal reflection on clinical practice",
    ],
    correctIndex: 1,
    explanation:
      "Formal scientific research uses systematic methods to validate existing knowledge, explore assumptions, and generate new, generalizable concepts.",
  },
  {
    id: "gn-2024-p2-q62",
    question:
      "The main distinguishing factor between qualitative and quantitative research, in terms of data sharing, is:",
    options: ["Sample size vs cost", "Generalizability vs transferability", "Speed vs accuracy", "Bias vs objectivity"],
    correctIndex: 1,
    explanation:
      "Quantitative findings strive for statistical generalizability across broad populations, whereas qualitative findings emphasize transferability to similar contexts or experiences.",
  },
  {
    id: "gn-2024-p2-q63",
    question: "The most appropriate sampling type for qualitative studies is:",
    options: ["Random sampling", "Systematic sampling", "Cluster sampling", "Purposive sampling"],
    correctIndex: 3,
    explanation:
      "Qualitative research relies on purposive sampling to deliberately select participants who can provide rich, descriptive insights regarding the phenomenon under study.",
  },
  {
    id: "gn-2024-p2-q64",
    question: "Which of the following best describes the role of a nurse in research?",
    options: [
      "Conducting research only when required by an employer",
      "Generating and utilizing evidence-based research findings",
      "Leaving research entirely to physicians",
      "Applying research only after formal certification",
    ],
    correctIndex: 1,
    explanation:
      "The primary expectation for professional nurses is both generating new evidence and utilizing evidence-based findings to optimize daily clinical care.",
  },
  {
    id: "gn-2024-p2-q65",
    question:
      "The type of research that looks at people who have an exposure and are followed over time to observe if they will have an outcome is called:",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized controlled trial"],
    correctIndex: 0,
    explanation:
      "An observational cohort study tracks an exposed group and an unexposed group prospectively over time to determine the incidence of specific outcomes.",
  },
  {
    id: "gn-2024-p2-q66",
    question: "In ethnographic research, the main data collection tool is:",
    options: ["Survey questionnaire", "Observation", "Laboratory testing", "Structured interview only"],
    correctIndex: 1,
    explanation:
      "Ethnographic methodology centers on understanding cultural behaviors, making immersive, direct participant observation the primary data gathering tool.",
  },
  {
    id: "gn-2024-p2-q67",
    question: "The degree to which an item measures what it is expected to measure is called:",
    options: ["Reliability", "Objectivity", "Feasibility", "Validity"],
    correctIndex: 3,
    explanation:
      "Validity indicates how accurately a research instrument measures the specific concept or variable it was designed to evaluate.",
  },
  {
    id: "gn-2024-p2-q68",
    question:
      "The introduction of the researcher's interest into the research process, intentionally or otherwise, is called:",
    options: ["Validity", "Reliability", "Bias", "Triangulation"],
    correctIndex: 2,
    explanation:
      "Research bias occurs when systemic errors or investigator preconceptions skew data collection, analysis, or interpretation away from objective truth.",
  },
  {
    id: "gn-2024-p2-q69",
    question: "What scale of measurement do the following data express? (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"],
    correctIndex: 1,
    explanation:
      "A sequence of ranks or structured numerical progressions represents an ordinal scale, where numbers indicate a relative rank order.",
  },
  {
    id: "gn-2024-p2-q70",
    question: "The acronym ASFR means:",
    options: ["Average Survival Fertility Rate", "Adjusted Standard Fertility Ratio", "Age Specific Fertility Rate", "Annual Sample Fertility Record"],
    correctIndex: 2,
    explanation:
      "ASFR stands for Age-Specific Fertility Rate, which measures the annual number of live births per 1,000 women within a designated age bracket.",
  },
  {
    id: "gn-2024-p2-q71",
    question: "The height or weight of patients are classified as:",
    options: ["Continuous data", "Discrete data", "Nominal data", "Ordinal data"],
    correctIndex: 0,
    explanation:
      "Height and weight are continuous metrics because they can be broken down into infinite decimal fractions along a continuous scale.",
  },
  {
    id: "gn-2024-p2-q72",
    question: "Observed frequency and expected frequency are used to calculate:",
    options: ["T-test", "ANOVA", "Chi-square", "Correlation coefficient"],
    correctIndex: 2,
    explanation:
      "The Chi-square (X2) goodness-of-fit test calculates whether a statistically significant divergence exists between observed outcomes and expected frequencies.",
  },
  {
    id: "gn-2024-p2-q73",
    question: "The following are components of disaster preparedness, EXCEPT:",
    options: ["Early warning systems", "Resource stockpiling", "Educational qualification", "Emergency drills"],
    correctIndex: 2,
    explanation:
      "Functional disaster plans require structural risk mapping, training, and systemic coordination, rather than the individual educational degrees of the population.",
  },
  {
    id: "gn-2024-p2-q74",
    question:
      "A minor emergency that has the potential to require more resources than are available in the responding unit is best classified as:",
    options: ["A level two emergency", "A level one emergency", "A mass casualty incident", "A localized incident"],
    correctIndex: 0,
    explanation:
      "Level II emergencies exceed local unit response capabilities and require support from regional or secondary administrative resources.",
  },
  {
    id: "gn-2024-p2-q75",
    question: "Which of the following theories is not concerned with crowd behaviour?",
    options: ["Convergence theory", "Contagion theory", "Piaget theory", "Emergent norm theory"],
    correctIndex: 2,
    explanation:
      "Contagion, convergent, and emergent norm frameworks analyze crowd behavior. Jean Piaget's theory focuses on childhood cognitive development.",
  },
  {
    id: "gn-2024-p2-q76",
    question: "Cardiopulmonary resuscitation is indicated in the following conditions, EXCEPT:",
    options: ["Cardiac arrest", "Respiratory arrest", "Drowning with no pulse", "Syncope"],
    correctIndex: 3,
    explanation:
      "Vasovagal syncope is a brief, self-limiting loss of consciousness with preserved cardiac activity. CPR is reserved for true pulseless cardiac arrest.",
  },
  {
    id: "gn-2024-p2-q77",
    question:
      "The compression-to-ventilation ratio that should be administered in cardiopulmonary resuscitation in an adult is:",
    options: ["15:2", "5:1", "30:1", "30:2"],
    correctIndex: 3,
    explanation: "Basic and advanced life support guidelines recommend a 30:2 compression-to-ventilation ratio during adult CPR.",
  },
  {
    id: "gn-2024-p2-q78",
    question: "Life-threatening condition refers to:",
    options: [
      "Acute cases which require immediate treatment",
      "Any chronic illness requiring ongoing management",
      "Cases that can wait for scheduled review",
      "Minor injuries requiring first aid only",
    ],
    correctIndex: 0,
    explanation:
      "Clinical emergencies characterized as life-threatening are acute pathologies or injuries that require immediate medical intervention to prevent imminent death.",
  },
  {
    id: "gn-2024-p2-q79",
    question: "The Patients' Bill of Rights, according to the Consumer Protection Council, comprises:",
    options: ["8 rights", "5 rights", "6 rights", "10 rights"],
    correctIndex: 0,
    explanation:
      "The Consumer Protection Council officially outlines 8 fundamental consumer rights, which serve as the foundation for the Patients' Bill of Rights.",
  },
  {
    id: "gn-2024-p2-q80",
    question: "The number of people who die per 100,000 population in a given year is called:",
    options: ["Morbidity rate", "Incidence rate", "Prevalence rate", "Mortality rate"],
    correctIndex: 3,
    explanation:
      "The crude mortality rate calculates the total proportion of recorded deaths occurring within a specific geographic population over a year, traditionally expressed per 100,000 citizens.",
  },
  {
    id: "gn-2024-p2-q81",
    question: "The normal demand curve is:",
    options: ["Downward sloping shape", "Upward sloping shape", "A vertical line", "A horizontal line"],
    correctIndex: 0,
    explanation:
      "According to economic principles, a standard demand curve slopes downward from left to right because demand increases as prices drop.",
  },
  {
    id: "gn-2024-p2-q82",
    question: "The modern concept of Gross Domestic Product (GDP) was developed by:",
    options: ["Adam Smith", "Simon Kuznets", "John Maynard Keynes", "Milton Friedman"],
    correctIndex: 1,
    explanation: "Economist Simon Kuznets developed the standardized framework for calculating national Gross Domestic Product (GDP) in the 1930s.",
  },
  {
    id: "gn-2024-p2-q83",
    question: "A major factor that hinders female entrepreneurs in Nigeria is:",
    options: ["Lack of interest", "Excess government support", "Absence of market demand", "Cultural barriers"],
    correctIndex: 3,
    explanation:
      "Structural cultural barriers, restricted credit access, and traditional gender roles remain major obstacles for female business owners in Nigeria.",
  },
  {
    id: "gn-2024-p2-q84",
    question: "Which of the following guides the entrepreneur through the business planning process?",
    options: ["Working capital", "Overhead costs", "Vision", "Inventory list"],
    correctIndex: 2,
    explanation: "An entrepreneur's core vision maps out their long-term goals and guides strategic planning for the enterprise.",
  },
  {
    id: "gn-2024-p2-q85",
    question: "A retail drug shop opened by a nurse entrepreneur is classified under:",
    options: ["Large scale enterprise", "Multinational enterprise", "Small scale enterprise", "Cooperative enterprise"],
    correctIndex: 2,
    explanation: "A localized retail shop or private clinical dispensary is classified as a small-scale enterprise based on its capital and staff size.",
  },
  {
    id: "gn-2024-p2-q86",
    question: "A nurse may be an entrepreneur in the following enterprises, EXCEPT:",
    options: ["Home care agency", "Health consultancy", "Aero-pneumatic enterprise", "Wellness/fitness centre"],
    correctIndex: 2,
    explanation:
      "Nurses can run medical, pharmaceutical, or healthcare-adjacent businesses. Aero-pneumatic engineering falls completely outside the scope of nursing expertise.",
  },
  {
    id: "gn-2024-p2-q87",
    question: "Which of the following is not a web browser?",
    options: ["Chrome", "Facebook", "Firefox", "Safari"],
    correctIndex: 1,
    explanation: "Firefox, Chrome, and Safari are web browsers used to navigate internet pages, while Facebook is a social media platform.",
  },
  {
    id: "gn-2024-p2-q88",
    question: "In educational institutions, hospitals, and industries, information is stored by:",
    options: ["Filing clerks only", "Information system", "Manual ledgers only", "Physical archives only"],
    correctIndex: 1,
    explanation:
      "An Information System (IS) is a structured network of hardware and software components designed to collect, process, filter, and store institutional data records.",
  },
  {
    id: "gn-2024-p2-q89",
    question: "The use of a computer to write letters, articles, books, or prepare a report is called:",
    options: ["Word processing", "Spreadsheet processing", "Database management", "Presentation design"],
    correctIndex: 0,
    explanation:
      "Word processing involves using specialized software applications (like Microsoft Word) to type, edit, format, and print text documents.",
  },
  {
    id: "gn-2024-p2-q90",
    question: "The following problems result from the introduction of Electronic Health Records, EXCEPT:",
    options: ["Intellectual property issues", "Data security concerns", "System downtime risk", "Staff training needs"],
    correctIndex: 0,
    explanation:
      "Transitioning to electronic charts introduces security, privacy, and staffing concerns, but does not present direct conflicts regarding intellectual property ownership.",
  },
  {
    id: "gn-2024-p2-q91",
    question: "Which of the following is a hallmark of the discipline of sociology?",
    options: ["Clinical diagnosis", "Pharmacological principle", "Anatomical classification", "Sociological perspective"],
    correctIndex: 3,
    explanation:
      "The sociological perspective — looking at human behavior within its broader social context — is the primary defining framework of sociology as a discipline.",
  },
  {
    id: "gn-2024-p2-q92",
    question: "Which of the following is an example of health promotion?",
    options: [
      "Treating a diagnosed infection with antibiotics",
      "Physiotherapy after a stroke",
      "Immunizing children against chicken pox",
      "Amputation following gangrene",
    ],
    correctIndex: 2,
    explanation:
      "Active childhood immunization is a classic health promotion and disease prevention strategy designed to bolster community resistance against pathogens.",
  },
  {
    id: "gn-2024-p2-q93",
    question: "Admission procedures, codes of conduct, and codes of ethics are examples of:",
    options: ["Clinical protocol", "Research methodology", "Professional structure", "Patient care plan"],
    correctIndex: 2,
    explanation:
      "Institutional ethics, behavior policies, and admission steps form the underlying regulatory architecture of a professional structure.",
  },
  {
    id: "gn-2024-p2-q94",
    question:
      "A process of interaction which enables us to develop the skills needed to participate in human society is known as:",
    options: ["Assimilation", "Acculturation", "Cognitive development", "Socialization process"],
    correctIndex: 3,
    explanation:
      "Socialization is the lifelong process through which individuals inherit, learn, and internalize the values, habits, and skills necessary to participate in society.",
  },
  {
    id: "gn-2024-p2-q95",
    question: "Discovery of Vibrio cholerae is attributed to:",
    options: ["Louis Pasteur", "Alexander Fleming", "Edward Jenner", "Robert Koch"],
    correctIndex: 3,
    explanation: "Dr. Robert Koch successfully isolated the causative bacterial pathogen of cholera, Vibrio cholerae, in pure cultures during his 1883 scientific expeditions.",
  },
  {
    id: "gn-2024-p2-q96",
    question: "The full meaning of AFB is:",
    options: ["Anaerobic Fast Bacteria", "Airborne Fungal Bacilli", "Atypical Filterable Bacteria", "Acid Fast Bacilli"],
    correctIndex: 3,
    explanation:
      "AFB stands for Acid-Fast Bacilli, which refers to rod-shaped bacteria (such as Mycobacterium tuberculosis) that resist decolorization by acid during laboratory staining.",
  },
  {
    id: "gn-2024-p2-q97",
    question: "The normal flora develops after birth between:",
    options: ["1-3 days", "1-2 weeks", "1 month", "6 months"],
    correctIndex: 0,
    explanation:
      "Newborn gastrointestinal tracts are sterile at birth, but colonization by normal environmental and dietary bacteria begins rapidly within the first 1 to 3 days of life.",
  },
  {
    id: "gn-2024-p2-q98",
    question: "Which of the following is not a chemical-related health hazard?",
    options: ["Toxicity", "Reactivity", "Corrosivity", "Carcinogenicity"],
    correctIndex: 1,
    explanation:
      "Carcinogenicity, corrosivity, and toxicity are physiological health hazards. Reactivity describes a chemical's physical instability or explosive potential rather than a direct health hazard.",
  },
  {
    id: "gn-2024-p2-q99",
    question:
      "The ability of the immune system to recognize self-antigen versus non-self-antigen is an example of:",
    options: ["Active immunity", "Passive immunity", "Cross-reactivity", "Self-tolerance"],
    correctIndex: 3,
    explanation:
      "Self-tolerance is the vital mechanism where the immune system recognizes self-antigens and avoids attacking the body's own healthy tissues.",
  },
  {
    id: "gn-2024-p2-q100",
    question:
      "A client has an infection that is spread through droplets. Which of the following is most essential for the nurse to use when taking this client's temperature?",
    options: ["Gown", "Mask", "Gloves", "Goggles"],
    correctIndex: 1,
    explanation:
      "Droplet precautions require providers to wear a fluid-resistant surgical mask when working within close proximity of the patient to block respiratory droplets.",
  },
];
