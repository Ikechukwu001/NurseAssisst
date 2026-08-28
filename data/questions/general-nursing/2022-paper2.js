// NMCN General Nursing — 2022, Paper II
// Correct answers and rationale sourced from the user's compilation.
// Wrong options (distractors) are AI-synthesized placeholders — see
// 2022-paper1.js header for full notes on this approach.
// One question (48 in the original numbering) had an internal
// contradiction — corrected using the WHO's actual iron + folic acid
// antenatal recommendation, matching the source's own rationale text.

export const questions = [
  {
    id: "gn-2022-p2-q1",
    question: "Which of the following is an accessory reproductive gland in males?",
    options: ["Prostate gland", "Testis", "Epididymis", "Vas deferens"],
    correctIndex: 0,
    explanation:
      "The prostate gland produces fluid that nourishes and transports sperm, making it an essential accessory gland.",
  },
  {
    id: "gn-2022-p2-q2",
    question: "Cryptorchidism is a male reproductive system disorder characterized by:",
    options: [
      "Inflammation of the testes",
      "Twisting of the spermatic cord",
      "Undescended testes to the scrotum",
      "Enlargement of the prostate",
    ],
    correctIndex: 2,
    explanation:
      "Cryptorchidism is the clinical term used when one or both testes fail to drop into the scrotum during fetal growth.",
  },
  {
    id: "gn-2022-p2-q3",
    question: "The embryo in-utero gets its food through the process of:",
    options: ["Active transport only", "Osmosis only", "Facilitated transport", "Simple diffusion"],
    correctIndex: 3,
    explanation:
      "Nutrients and oxygen cross the placental membrane barriers primarily down concentration gradients via simple diffusion.",
  },
  {
    id: "gn-2022-p2-q4",
    question: "The female breast consists of:",
    options: ["5-8 lobes", "10-12 lobes", "15-20 lobes", "25-30 lobes"],
    correctIndex: 2,
    explanation:
      "Adult mammary glands are structurally divided into 15 to 20 distinct glandular lobes radiating around the nipple.",
  },
  {
    id: "gn-2022-p2-q5",
    question: "The mons venus is also known as:",
    options: ["The labia majora", "The mons pubis", "The perineum", "The vulva"],
    correctIndex: 1,
    explanation:
      "The mons pubis (or mons venus) is the fatty tissue layer located directly over the symphysis pubis bone.",
  },
  {
    id: "gn-2022-p2-q6",
    question: "The follicular phase in the menstrual cycle usually lasts for:",
    options: ["14-16 days", "20-22 days", "5-7 days", "10-12 days"],
    correctIndex: 0,
    explanation:
      "In a typical 28-day cycle, the pre-ovulatory follicular phase lasts roughly 14 days, culminating in ovulation.",
  },
  {
    id: "gn-2022-p2-q7",
    question: "The Montgomery glands are:",
    options: [
      "Modified sweat glands in the areola",
      "Lymph nodes in the axilla",
      "Milk-producing glandular tissue",
      "Ducts draining the nipple",
    ],
    correctIndex: 0,
    explanation:
      "Montgomery glands are sebaceous glands in the breast areola that secrete oily fluid to protect the nipple during nursing.",
  },
  {
    id: "gn-2022-p2-q8",
    question:
      "Which part of the brain is responsible for control of breathing, heart rate, and blood pressure?",
    options: ["Cerebrum", "Cerebellum", "Forebrain", "Hindbrain"],
    correctIndex: 3,
    explanation:
      "The brainstem components (medulla oblongata and pons) within the hindbrain manage vital autonomic respiratory and cardiac centers.",
  },
  {
    id: "gn-2022-p2-q9",
    question: "The cochlea of the ear contains the following, EXCEPT:",
    options: ["Scala vestibuli", "Scala media", "Scala tympani", "Scala tragus"],
    correctIndex: 3,
    explanation:
      "The cochlea houses the scala vestibuli, media, and tympani channels; the tragus belongs to the outer cartilage structure, not the cochlea.",
  },
  {
    id: "gn-2022-p2-q10",
    question: "The size of the pupil of the eye is controlled by the:",
    options: ["Cornea", "Lens", "Sclera", "Iris"],
    correctIndex: 3,
    explanation:
      "The iris contains smooth muscle fibers (sphincter and dilator pupillae) that adjust pupil diameter to regulate light.",
  },
  {
    id: "gn-2022-p2-q11",
    question: "The stapes in the ear articulates with the:",
    options: ["Round window", "Oval window", "Tympanic membrane", "Malleus"],
    correctIndex: 1,
    explanation:
      "The footplate of the stapes rocks directly inside the oval window to transmit sound vibrations into the inner ear.",
  },
  {
    id: "gn-2022-p2-q12",
    question: "The vestibulocochlear nerve is otherwise called:",
    options: ["7th cranial nerve", "8th cranial nerve", "9th cranial nerve", "10th cranial nerve"],
    correctIndex: 1,
    explanation:
      "Cranial Nerve VIII is the vestibulocochlear nerve, specialized in transmitting balance and hearing sensory input.",
  },
  {
    id: "gn-2022-p2-q13",
    question: "The sebaceous glands are responsible for the production of:",
    options: ["Sweat", "Sebum", "Cerumen", "Mucus"],
    correctIndex: 1,
    explanation: "Sebaceous glands secrete an oily substance called sebum to lubricate and waterproof skin and hair.",
  },
  {
    id: "gn-2022-p2-q14",
    question: "The intertragic notch of the pinna is found between:",
    options: [
      "The helix and antihelix",
      "The lobule and helix",
      "The tragus and antitragus",
      "The concha and canal",
    ],
    correctIndex: 2,
    explanation:
      "The deep indentation separating the tragus protrusion from the antitragus at the base of the ear is the intertragic notch.",
  },
  {
    id: "gn-2022-p2-q15",
    question: "Cardiac electrical activities are related to the following ions, EXCEPT:",
    options: ["Magnesium", "Sodium", "Potassium", "Calcium"],
    correctIndex: 0,
    explanation:
      "Action potentials depend directly on rapid shifts of sodium, potassium, and calcium across cardiac membranes.",
  },
  {
    id: "gn-2022-p2-q16",
    question:
      "The relationship between increased stroke volume and increased ventricular end-diastolic volume, for a given intrinsic contractility, is based on:",
    options: ["Ohm's law", "Poiseuille's law", "Boyle's law", "Starling's law"],
    correctIndex: 3,
    explanation:
      "The Frank-Starling law states that the heart ejects blood more powerfully when increased venous return stretches the muscle fibers.",
  },
  {
    id: "gn-2022-p2-q17",
    question: "The following are primary determinants of stroke volume, EXCEPT:",
    options: ["Preload", "Afterload", "Control of heart rate", "Contractility"],
    correctIndex: 2,
    explanation:
      "Stroke volume is regulated by preload, afterload, and contractility; heart rate affects total cardiac output instead.",
  },
  {
    id: "gn-2022-p2-q18",
    question:
      "To gather subjective information for a cardiovascular health history, the patient shall be assessed for the following, EXCEPT:",
    options: ["Chest pain", "Dyspnea", "Fatigue", "Urination"],
    correctIndex: 3,
    explanation:
      "Symptoms like dyspnea (breathing) and chest pain reflect cardiac status; urination pattern changes are less directly relevant.",
  },
  {
    id: "gn-2022-p2-q19",
    question: "The instrument used for measuring intraocular pressure is:",
    options: ["Ophthalmoscope", "Snellen chart", "Slit lamp", "Tonometer"],
    correctIndex: 3,
    explanation: "A tonometer measures internal eye pressure to screen for and monitor conditions like glaucoma.",
  },
  {
    id: "gn-2022-p2-q20",
    question:
      "The following are co-factors associated with underproduction of red blood cells, EXCEPT:",
    options: ["Calcium", "Iron", "Vitamin B12", "Folic acid"],
    correctIndex: 0,
    explanation:
      "Erythropoiesis relies heavily on iron, B12, and folic acid; calcium does not directly participate in red blood cell production.",
  },
  {
    id: "gn-2022-p2-q21",
    question: "Acoustic neuromas are diagnosed using the following techniques, EXCEPT:",
    options: ["MRI", "Audiometry", "CT scan", "Electro-encephalography"],
    correctIndex: 3,
    explanation:
      "EEG evaluates electrical patterns in brain tissue, not the physical structural changes of a vestibular nerve tumor.",
  },
  {
    id: "gn-2022-p2-q22",
    question: "Syphilis is caused by:",
    options: ["Neisseria gonorrhoeae", "Chlamydia trachomatis", "Treponema pallidum", "Haemophilus ducreyi"],
    correctIndex: 2,
    explanation: "Syphilis is a complex spirochete bacterial infection caused by Treponema pallidum.",
  },
  {
    id: "gn-2022-p2-q23",
    question: "Genital herpes is caused by:",
    options: ["Herpes simplex virus", "Human papillomavirus", "Treponema pallidum", "Molluscum contagiosum virus"],
    correctIndex: 0,
    explanation: "Genital herpes outbreaks are caused by transmission of the Herpes Simplex Virus (typically HSV-2).",
  },
  {
    id: "gn-2022-p2-q24",
    question: "Gonorrhea is caused by:",
    options: ["Treponema pallidum", "Klebsiella granulomatis", "Neisseria gonorrhoeae", "Trichomonas vaginalis"],
    correctIndex: 2,
    explanation:
      "Gonorrhea is a sexually transmitted bacterial disease caused by the Gram-negative diplococcus Neisseria gonorrhoeae.",
  },
  {
    id: "gn-2022-p2-q25",
    question: "Chlamydia is caused by:",
    options: ["Neisseria gonorrhoeae", "Gardnerella vaginalis", "Chlamydia trachomatis", "Candida albicans"],
    correctIndex: 2,
    explanation: "The primary pathogen responsible for chlamydial genitourinary infections is Chlamydia trachomatis.",
  },
  {
    id: "gn-2022-p2-q26",
    question: "Condylomata acuminata is caused by:",
    options: ["Herpes simplex virus", "Human papillomavirus", "Treponema pallidum", "Neisseria gonorrhoeae"],
    correctIndex: 1,
    explanation:
      "Genital warts (condylomata acuminata) result directly from infection with the Human Papillomavirus (HPV).",
  },
  {
    id: "gn-2022-p2-q27",
    question: "Granuloma inguinale is caused by:",
    options: ["Klebsiella granulomatis", "Haemophilus ducreyi", "Chlamydia trachomatis", "Treponema pallidum"],
    correctIndex: 0,
    explanation:
      "Granuloma inguinale (donovanosis) is an ulcerative condition caused by the bacterium Klebsiella granulomatis.",
  },
  {
    id: "gn-2022-p2-q28",
    question: "A condition where a client mistakes a rope for a snake is called:",
    options: ["Hallucination", "Illusion", "Delusion", "Confabulation"],
    correctIndex: 1,
    explanation: "An illusion is a misinterpretation of a real, actual external sensory stimulus.",
  },
  {
    id: "gn-2022-p2-q29",
    question: "In depression, there is a deficiency of:",
    options: ["Dopamine only", "Acetylcholine", "5-Hydroxytryptamine", "GABA"],
    correctIndex: 2,
    explanation:
      "Depression is linked to decreased synaptic levels of monoamine neurotransmitters, notably 5-HT (serotonin).",
  },
  {
    id: "gn-2022-p2-q30",
    question: "Which of the following glands has a significant effect on eating behaviours?",
    options: ["Pituitary gland", "Hypothalamus", "Thyroid gland", "Adrenal gland"],
    correctIndex: 1,
    explanation:
      "The hypothalamus contains specialized hunger and satiety centers that control appetite and energy balance.",
  },
  {
    id: "gn-2022-p2-q31",
    question: "The most common type of postpartum psychosis is:",
    options: ["Mania", "Depression", "Schizophrenia", "Delirium"],
    correctIndex: 1,
    explanation:
      "Postpartum psychotic episodes present most frequently as severe depressive syndromes with accompanying psychotic themes.",
  },
  {
    id: "gn-2022-p2-q32",
    question: "The following are features of dementia, EXCEPT:",
    options: ["Memory loss", "Personality change", "Language difficulty", "Impaired consciousness"],
    correctIndex: 3,
    explanation:
      "Dementia features progressive cognitive decline while consciousness remains clear and unaltered until terminal phases.",
  },
  {
    id: "gn-2022-p2-q33",
    question: "Susceptibility to mental illness is often related to:",
    options: ["Diet", "Climate", "Occupation", "Heredity"],
    correctIndex: 3,
    explanation: "Genetic background and heritable traits represent major predisposing factors for psychiatric disorders.",
  },
  {
    id: "gn-2022-p2-q34",
    question:
      "The irregular, acyclic bleeding from the uterus, mostly related to uterine lesions, is:",
    options: ["Menorrhagia", "Amenorrhea", "Dysmenorrhea", "Metrorrhagia"],
    correctIndex: 3,
    explanation:
      "Metrorrhagia describes uterine bleeding occurring at irregular intervals between normal menstrual cycles.",
  },
  {
    id: "gn-2022-p2-q35",
    question: "The following positions are used for gynaecological examinations, EXCEPT:",
    options: ["Fowler's", "Lithotomy", "Sims'", "Dorsal recumbent"],
    correctIndex: 0,
    explanation: "Fowler's position is an upright sitting posture used to support lung expansion, not pelvic exams.",
  },
  {
    id: "gn-2022-p2-q36",
    question: "Autoerotism is defined as:",
    options: [
      "Sexual attraction to inanimate objects",
      "Sexual pleasure from masturbation and fantasy",
      "Sexual pleasure from exposing oneself",
      "Sexual pleasure derived from causing pain",
    ],
    correctIndex: 1,
    explanation:
      "Autoerotic behaviors generate sexual arousal and satisfaction independently using one's own body and thoughts.",
  },
  {
    id: "gn-2022-p2-q37",
    question: "Bestiality is defined as:",
    options: [
      "Sexual pleasure from wearing clothing of the opposite gender",
      "Sexual pleasure from intercourse with animals",
      "Sexual attraction to children",
      "Sexual pleasure from observing others",
    ],
    correctIndex: 1,
    explanation: "Bestiality involves engaging in sexual acts or intercourse with animals.",
  },
  {
    id: "gn-2022-p2-q38",
    question: "Transvestism is defined as:",
    options: [
      "Sexual pleasure from watching others undress",
      "Sexual pleasure from inflicting pain",
      "A man deriving pleasure from wearing female clothes",
      "Sexual attraction to a close relative",
    ],
    correctIndex: 2,
    explanation:
      "Transvestism involves cross-dressing in clothing typical of another gender to achieve psychological or sexual satisfaction.",
  },
  {
    id: "gn-2022-p2-q39",
    question:
      "Women who inherit the BRCA1 or BRCA2 genes are susceptible to an elevated risk of:",
    options: ["Cervical and uterine cancers", "Breast and ovarian cancers", "Colon and liver cancers", "Lung and skin cancers"],
    correctIndex: 1,
    explanation:
      "Mutations in BRCA1 or BRCA2 genes significantly elevate lifetime risks for developing breast and ovarian malignancies.",
  },
  {
    id: "gn-2022-p2-q40",
    question: "The incubation period of chlamydia infection is between:",
    options: ["1-3 days", "3-5 days", "4-6 weeks", "7-21 days"],
    correctIndex: 3,
    explanation: "Symptom onset for a chlamydial infection typically appears within 1 to 3 weeks following exposure.",
  },
  {
    id: "gn-2022-p2-q41",
    question:
      "The main aim of emergency obstetric and neonatal care facilities is to reduce:",
    options: [
      "Maternal and neonatal mortality and morbidity",
      "Hospital admission rates only",
      "Cost of antenatal care",
      "Length of postnatal hospital stay",
    ],
    correctIndex: 0,
    explanation:
      "These critical units are designed to prevent both maternal and neonatal death and long-term medical complications.",
  },
  {
    id: "gn-2022-p2-q42",
    question:
      "The embryonic disk arising from the inner cell mass has the following two layers of cells:",
    options: [
      "Mesoderm and endoderm",
      "Trophoblast and mesoderm",
      "Embryonic ectoderm and endoderm",
      "Chorion and amnion",
    ],
    correctIndex: 2,
    explanation:
      "Early differentiation forms the bilaminar embryonic disc, consisting of epiblast (ectoderm) and hypoblast (endoderm).",
  },
  {
    id: "gn-2022-p2-q43",
    question: "A pregnant woman's average weight gain by the 3rd trimester is:",
    options: ["12.5kg", "5kg", "20kg", "8kg"],
    correctIndex: 0,
    explanation:
      "A healthy, standard-BMI pregnancy involves an average cumulative maternal weight gain of around 12.5 kg.",
  },
  {
    id: "gn-2022-p2-q44",
    question: "The ductus arteriosus is expected to close ______ after delivery.",
    options: ["Immediately", "30 minutes", "2 hours", "24 hours"],
    correctIndex: 2,
    explanation:
      "Functional closure of the ductus arteriosus via smooth muscle constriction usually occurs within 1-2 hours of birth.",
  },
  {
    id: "gn-2022-p2-q45",
    question: "High-risk pregnancy refers to:",
    options: [
      "Any pregnancy in a woman over 40",
      "Pregnancy that threatens the health of the mother or her fetus",
      "A pregnancy with more than one antenatal visit missed",
      "Any pregnancy requiring cesarean delivery",
    ],
    correctIndex: 1,
    explanation:
      "A high-risk pregnancy involves maternal or fetal complications that increase the chance of illness or death.",
  },
  {
    id: "gn-2022-p2-q46",
    question: "The following are indications for operative vaginal delivery, EXCEPT:",
    options: ["Fetal distress in second stage", "Maternal exhaustion", "Prolonged second stage of labour", "Prolonged first stage of labour"],
    correctIndex: 3,
    explanation:
      "Operative vaginal delivery (forceps/vacuum) requires full cervical dilation, which occurs only in the second stage of labor.",
  },
  {
    id: "gn-2022-p2-q47",
    question: "The position of the fetus is described as:",
    options: [
      "The relationship of the long axis of the fetus to the long axis of the mother",
      "The relationship of a landmark on the presenting part to the right and left side of the maternal pelvis",
      "The part of the fetus that enters the pelvis first",
      "The attitude of flexion or extension of the fetal head",
    ],
    correctIndex: 1,
    explanation:
      "Fetal position denotes how a specific anatomical landmark relates to the quadrants of the mother's pelvis.",
  },
  {
    id: "gn-2022-p2-q48",
    question:
      "According to current WHO recommendations, a pregnant woman should be given which of the following nutrient supplements?",
    options: ["Vitamin C and calcium", "Vitamin D and zinc", "Iron and folic acid", "Vitamin A and iodine"],
    correctIndex: 2,
    explanation:
      "WHO recommends iron and folic acid supplements during routine antenatal care to prevent maternal anemia and neural tube defects — this is the standard recommendation, not vitamin A supplementation.",
  },
  {
    id: "gn-2022-p2-q49",
    question: "The environmental factor that influences children's growth and development is:",
    options: ["Genetic inheritance", "Effect of climate change", "Birth order", "Temperament"],
    correctIndex: 1,
    explanation:
      "Environmental elements include physical geography and climate patterns that impact resources and health outcomes.",
  },
  {
    id: "gn-2022-p2-q50",
    question: "Family type is:",
    options: [
      "A biological determinant of growth",
      "A genetic influencer of development",
      "A sociocultural influencer of a child's growth and development",
      "A physiological milestone marker",
    ],
    correctIndex: 2,
    explanation:
      "Family dynamics, structures, and norms shape the immediate sociocultural environment of a developing child.",
  },
  {
    id: "gn-2022-p2-q51",
    question:
      "Giving infants food and liquid in addition to formula and/or breast milk is referred to as:",
    options: ["Weaning", "Bottle feeding", "Mixed feeding", "Complementary feeding"],
    correctIndex: 3,
    explanation:
      "Complementary feeding describes adding solid foods alongside continued breast milk or formula once infant needs increase.",
  },
  {
    id: "gn-2022-p2-q52",
    question:
      "The process of gradually introducing a variety of solid foods into a baby's diet while still on breast and/or formula milk is:",
    options: ["Complementary feeding", "Supplementary feeding", "Weaning", "Demand feeding"],
    correctIndex: 2,
    explanation: "Weaning is the systematic transition of an infant from exclusive milk feeding to a varied diet.",
  },
  {
    id: "gn-2022-p2-q53",
    question: "Salting and drying are examples of food:",
    options: ["Fortification methods", "Enrichment methods", "Contamination risks", "Preservation methods"],
    correctIndex: 3,
    explanation:
      "These methods reduce water availability, stopping microbial growth to keep food safe for longer periods.",
  },
  {
    id: "gn-2022-p2-q54",
    question: "The following are components of the essential child survival package, EXCEPT:",
    options: ["Immunization", "Growth monitoring", "Oral rehydration therapy", "School health"],
    correctIndex: 3,
    explanation:
      "The child survival package targets high-risk early years (0-5); school health focuses on older children.",
  },
  {
    id: "gn-2022-p2-q55",
    question:
      "A child with a high probability of a negative outcome when exposed to unfavorable circumstances, comparable to others in the population, is said to be:",
    options: ["Resilient", "At-risk only", "Deprived", "Vulnerable"],
    correctIndex: 3,
    explanation:
      "In public health, a population group at higher risk for poor developmental or health outcomes is classified as vulnerable.",
  },
  {
    id: "gn-2022-p2-q56",
    question:
      "The common causes of jaundice presenting in the first 24 hours of life include the following, EXCEPT:",
    options: ["Sepsis", "Hemolytic disease", "Breastfeeding", "Rh incompatibility"],
    correctIndex: 2,
    explanation:
      "Jaundice appearing within 24 hours of birth is pathological (sepsis, hemolysis); breast milk jaundice develops later, not within the first day.",
  },
  {
    id: "gn-2022-p2-q57",
    question:
      "Baby Jones is admitted to the paediatric emergency; on assessment, a diagnosis of intussusception is made. The following pairs of signs are features of intussusception, EXCEPT:",
    options: ["Withdrawal and quietness", "Paroxysmal abdominal pain", "Currant-jelly stools", "Sausage-shaped abdominal mass"],
    correctIndex: 0,
    explanation:
      "Intussusception causes sudden paroxysmal pain with severe crying; passive withdrawal and quietness are not characteristic signs.",
  },
  {
    id: "gn-2022-p2-q58",
    question:
      "The immediate post-operative nursing management of an infant with pyloric stenosis is:",
    options: [
      "Nil by mouth for 48 hours",
      "Full formula feeds immediately",
      "IV fluids only for 24 hours",
      "Feeding with clear fluids within 6 hours",
    ],
    correctIndex: 3,
    explanation:
      "Following a pyloromyotomy, feeding with small volumes of clear fluids resumes early (within 6 hours) once anesthesia resolves.",
  },
  {
    id: "gn-2022-p2-q59",
    question:
      "An infant who has just returned to the ward following surgical repair of cleft lip should be placed in:",
    options: ["Prone position", "Supine position", "Trendelenburg position", "Lateral position"],
    correctIndex: 3,
    explanation:
      "Standing orders favor the lateral or semi-Fowler's position to keep the surgical line from rubbing against bed linens.",
  },
  {
    id: "gn-2022-p2-q60",
    question: "A large, harsh murmur combined with a systolic thrill is characteristic of:",
    options: ["Ventricular septal defect", "Atrial septal defect", "Patent ductus arteriosus", "Aortic stenosis"],
    correctIndex: 0,
    explanation:
      "A pansystolic murmur paired with a palpable thrill at the left lower sternal border points directly to a VSD.",
  },
  {
    id: "gn-2022-p2-q61",
    question: "Research is best described as:",
    options: [
      "A collection of opinions on a topic",
      "A systematic approach for refining, validating existing knowledge, and generating new knowledge",
      "A summary of textbook information",
      "A personal reflection on clinical practice",
    ],
    correctIndex: 1,
    explanation:
      "Nursing research is a systematic study designed to validate existing practices while generating reliable new evidence.",
  },
  {
    id: "gn-2022-p2-q62",
    question:
      "The main distinguishing factor between qualitative and quantitative research, in terms of data sharing, is:",
    options: ["Sample size vs cost", "Generalizability vs transferability", "Speed vs accuracy", "Bias vs objectivity"],
    correctIndex: 1,
    explanation:
      "Quantitative results focus on statistical generalizability; qualitative insights prioritize contextual transferability.",
  },
  {
    id: "gn-2022-p2-q63",
    question: "The most appropriate sampling type for qualitative studies is:",
    options: ["Random sampling", "Systematic sampling", "Purposive sampling", "Cluster sampling"],
    correctIndex: 2,
    explanation:
      "Qualitative research relies on purposive sampling to select information-rich cases that help explain complex concepts.",
  },
  {
    id: "gn-2022-p2-q64",
    question: "Which of the following best describes the role of a nurse in research?",
    options: [
      "Generating and utilizing evidence-based research findings",
      "Conducting research only when required by an employer",
      "Leaving research entirely to physicians",
      "Applying research only after formal certification",
    ],
    correctIndex: 0,
    explanation:
      "Professional nurses must identify clinical problems, run research, and apply evidence-based findings to patient care.",
  },
  {
    id: "gn-2022-p2-q65",
    question:
      "The type of research that looks at people who have an exposure and are followed over time to observe if they will have an outcome is called:",
    options: ["Case-control study", "Cross-sectional study", "Randomized controlled trial", "Cohort study"],
    correctIndex: 3,
    explanation: "Cohort studies track groups from an identified exposure forward over time to measure outcome incidence.",
  },
  {
    id: "gn-2022-p2-q66",
    question: "In ethnographic research, the main data collection tool is:",
    options: ["Survey questionnaire", "Observation", "Laboratory testing", "Structured interview only"],
    correctIndex: 1,
    explanation:
      "Ethnography evaluates cultural behaviors, relying heavily on first-hand participant observation within the field.",
  },
  {
    id: "gn-2022-p2-q67",
    question: "The degree to which an item measures what it is expected to measure is called:",
    options: ["Reliability", "Objectivity", "Feasibility", "Validity"],
    correctIndex: 3,
    explanation:
      "Validity measures how accurately a research instrument or test assesses the specific concept it was built to evaluate.",
  },
  {
    id: "gn-2022-p2-q68",
    question:
      "The introduction of the researcher's interest into the research process, intentionally or otherwise, is called:",
    options: ["Bias", "Validity", "Reliability", "Triangulation"],
    correctIndex: 0,
    explanation:
      "Bias occurs when a researcher's preferences or systematic errors influence study design, collection, or analysis.",
  },
  {
    id: "gn-2022-p2-q69",
    question: "What scale of measurement do the following data express? (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
    options: ["Nominal", "Interval", "Ratio", "Ordinal"],
    correctIndex: 3,
    explanation: "This series represents ranked or sequential values with an inherent order, classifying it as ordinal data.",
  },
  {
    id: "gn-2022-p2-q70",
    question: "The acronym ASFR means:",
    options: ["Average Survival Fertility Rate", "Age Specific Fertility Rate", "Adjusted Standard Fertility Ratio", "Annual Sample Fertility Record"],
    correctIndex: 1,
    explanation:
      "ASFR is a demographic index measuring the annual number of live births per 1,000 women within specific age categories.",
  },
  {
    id: "gn-2022-p2-q71",
    question: "The height or weight of patients are classified as:",
    options: ["Continuous data", "Discrete data", "Nominal data", "Ordinal data"],
    correctIndex: 0,
    explanation: "Height and weight can take on any fractional or decimal value within a range, making them continuous data.",
  },
  {
    id: "gn-2022-p2-q72",
    question: "Observed frequency and expected frequency are used to calculate:",
    options: ["Chi-square", "T-test", "ANOVA", "Correlation coefficient"],
    correctIndex: 0,
    explanation: "The Chi-square (χ2) test evaluates differences between observed and expected frequencies across categorical fields.",
  },
  {
    id: "gn-2022-p2-q73",
    question: "The following are components of disaster preparedness, EXCEPT:",
    options: ["Early warning systems", "Educational qualification", "Resource stockpiling", "Emergency drills"],
    correctIndex: 1,
    explanation:
      "Professional degrees or academic diplomas are not part of an emergency management system's operational preparedness structure.",
  },
  {
    id: "gn-2022-p2-q74",
    question:
      "A minor emergency that has the potential to require more resources than are available in the responding unit is best classified as:",
    options: ["A level two emergency", "A level one emergency", "A mass casualty incident", "A localized incident"],
    correctIndex: 0,
    explanation:
      "Level II incidents exceed local assets, requiring regional or multi-agency support to manage the scenario safely.",
  },
  {
    id: "gn-2022-p2-q75",
    question: "Which of the following theories is not concerned with crowd behaviour?",
    options: ["Convergence theory", "Piaget theory", "Contagion theory", "Emergent norm theory"],
    correctIndex: 1,
    explanation:
      "Piaget's theory outlines individual childhood cognitive development stages, not collective sociological crowd behavior.",
  },
  {
    id: "gn-2022-p2-q76",
    question: "Cardiopulmonary resuscitation is indicated in the following conditions, EXCEPT:",
    options: ["Cardiac arrest", "Respiratory arrest", "Coma", "Drowning with no pulse"],
    correctIndex: 2,
    explanation:
      "Comatose states present with depressed consciousness but intact pulses, meaning CPR is not indicated unless arrest occurs.",
  },
  {
    id: "gn-2022-p2-q77",
    question:
      "The compression-to-ventilation ratio that should be administered in cardiopulmonary resuscitation in an adult is:",
    options: ["15:2", "30:2", "5:1", "30:1"],
    correctIndex: 1,
    explanation: "BLS guidelines specify a 30:2 compression-to-ventilation ratio for adult CPR when managing cardiac arrest.",
  },
  {
    id: "gn-2022-p2-q78",
    question: "Life-threatening condition refers to:",
    options: [
      "Acute cases which require immediate treatment",
      "Any chronic illness requiring ongoing management",
      "Cases that can wait for scheduled review",
      "Minor injuries requiring first aid only",
    ],
    correctIndex: 0,
    explanation:
      "Life-threatening situations are acute, critical emergencies that can cause rapid death if not treated immediately.",
  },
  {
    id: "gn-2022-p2-q79",
    question: "The Patients' Bill of Rights, according to the Consumer Protection Council, comprises:",
    options: ["5 rights", "6 rights", "8 rights", "10 rights"],
    correctIndex: 2,
    explanation: "The Nigerian Consumer Protection Council officially highlights 8 fundamental consumer/patient rights.",
  },
  {
    id: "gn-2022-p2-q80",
    question: "The number of people who die per 100,000 population in a given year is called:",
    options: ["Morbidity rate", "Incidence rate", "Mortality rate", "Prevalence rate"],
    correctIndex: 2,
    explanation:
      "The crude or specific mortality rate measures annual deaths standardized across population bases (like per 100,000).",
  },
  {
    id: "gn-2022-p2-q81",
    question: "The normal demand curve is:",
    options: ["Downward sloping shape", "Upward sloping shape", "A vertical line", "A horizontal line"],
    correctIndex: 0,
    explanation:
      "According to the law of demand, demand curves slope downward from left to right as lower prices increase quantity demanded.",
  },
  {
    id: "gn-2022-p2-q82",
    question: "The modern concept of Gross Domestic Product (GDP) was developed by:",
    options: ["Simon Kuznets", "Adam Smith", "John Maynard Keynes", "Milton Friedman"],
    correctIndex: 0,
    explanation: "Economist Simon Kuznets developed the standardized structure for accounting national production output in 1934.",
  },
  {
    id: "gn-2022-p2-q83",
    question: "A major factor that hinders female entrepreneurs in Nigeria is:",
    options: ["Cultural barriers", "Lack of interest", "Excess government support", "Absence of market demand"],
    correctIndex: 0,
    explanation:
      "Traditional cultural structures can restrict women's access to credit, property ownership, and business financing networks.",
  },
  {
    id: "gn-2022-p2-q84",
    question: "Which of the following guides the entrepreneur through the business planning process?",
    options: ["Working capital", "Vision", "Overhead costs", "Inventory list"],
    correctIndex: 1,
    explanation:
      "A founder's vision establishes the overarching goals and long-term direction that shapes their entire business strategy.",
  },
  {
    id: "gn-2022-p2-q85",
    question: "A retail drug shop opened by a nurse entrepreneur is classified under:",
    options: ["Large scale enterprise", "Small scale enterprise", "Multinational enterprise", "Cooperative enterprise"],
    correctIndex: 1,
    explanation:
      "Independent retail pharmacies or community shops fit the operational scale of a small business enterprise (SME).",
  },
  {
    id: "gn-2022-p2-q86",
    question: "A nurse may be an entrepreneur in the following enterprises, EXCEPT:",
    options: ["Home care agency", "Health consultancy", "Aero-pneumatic enterprise", "Wellness/fitness centre"],
    correctIndex: 2,
    explanation:
      "Aero-pneumatic engineering involves heavy high-pressure industrial systems outside a nurse's professional domain.",
  },
  {
    id: "gn-2022-p2-q87",
    question: "Which of the following is not a web browser?",
    options: ["Chrome", "Firefox", "Facebook", "Safari"],
    correctIndex: 2,
    explanation:
      "Facebook is a social media application, whereas Firefox, Chrome, and Safari are dedicated web-browsing applications.",
  },
  {
    id: "gn-2022-p2-q88",
    question: "In educational institutions, hospitals, and industries, information is stored by:",
    options: ["Filing clerks only", "Manual ledgers only", "Information systems", "Physical archives only"],
    correctIndex: 2,
    explanation:
      "Information systems are designed to collect, process, store, and distribute structured records across organizations.",
  },
  {
    id: "gn-2022-p2-q89",
    question: "The use of a computer to write letters, articles, books, or prepare reports is called:",
    options: ["Spreadsheet processing", "Word processing", "Database management", "Presentation design"],
    correctIndex: 1,
    explanation:
      "Word processing software (like Microsoft Word) is designed specifically for creating, editing, and formatting text documents.",
  },
  {
    id: "gn-2022-p2-q90",
    question: "The following problems result from the introduction of Electronic Health Records, EXCEPT:",
    options: ["Data security concerns", "System downtime risk", "Intellectual property issues", "Staff training needs"],
    correctIndex: 2,
    explanation:
      "EHR systems present data security and IT issues; they do not alter patent or intellectual property boundaries.",
  },
  {
    id: "gn-2022-p2-q91",
    question: "Which of the following is a hallmark of the discipline of sociology?",
    options: ["Clinical diagnosis", "Sociological perspective", "Pharmacological principle", "Anatomical classification"],
    correctIndex: 1,
    explanation:
      "The sociological perspective allows analysts to see and evaluate broader social patterns within individual lives.",
  },
  {
    id: "gn-2022-p2-q92",
    question: "Which of the following is an example of health promotion?",
    options: [
      "Treating a diagnosed infection with antibiotics",
      "Immunizing children against chicken pox",
      "Physiotherapy after a stroke",
      "Amputation following gangrene",
    ],
    correctIndex: 1,
    explanation: "Active immunization protects populations by bolstering health reserves before disease exposure.",
  },
  {
    id: "gn-2022-p2-q93",
    question: "Admission procedure, code of conduct, and code of ethics are examples of:",
    options: ["Professional structure", "Clinical protocol", "Research methodology", "Patient care plan"],
    correctIndex: 0,
    explanation:
      "These formal rules, guidelines, and ethics help define and regulate an organized professional structure.",
  },
  {
    id: "gn-2022-p2-q94",
    question:
      "A process of interaction which enables us to develop the skills needed to participate in human society is known as:",
    options: ["Assimilation", "Acculturation", "Socialization process", "Cognitive development"],
    correctIndex: 2,
    explanation:
      "Socialization is the lifelong process through which individuals learn cultural norms, values, and essential social skills.",
  },
  {
    id: "gn-2022-p2-q95",
    question: "Discovery of Vibrio cholerae is attributed to:",
    options: ["Louis Pasteur", "Robert Koch", "Alexander Fleming", "Edward Jenner"],
    correctIndex: 1,
    explanation: "German microbiologist Robert Koch isolated and identified Vibrio cholerae as the cause of cholera in 1883.",
  },
  {
    id: "gn-2022-p2-q96",
    question: "The full meaning of AFB is:",
    options: ["Anaerobic Fast Bacteria", "Airborne Fungal Bacilli", "Acid Fast Bacilli", "Atypical Filterable Bacteria"],
    correctIndex: 2,
    explanation:
      "AFB stands for Acid-Fast Bacilli, a group of bacteria (like Mycobacterium tuberculosis) that resist acid decolorization during staining.",
  },
  {
    id: "gn-2022-p2-q97",
    question: "The normal flora develops after birth between:",
    options: ["1-3 days", "1-2 weeks", "1 month", "6 months"],
    correctIndex: 0,
    explanation:
      "Microscopic colonization begins immediately during birth, establishing a baseline normal flora within 24 to 72 hours.",
  },
  {
    id: "gn-2022-p2-q98",
    question: "Which of the following is not a chemical-related health hazard?",
    options: ["Toxicity", "Corrosivity", "Flammability", "Reactivity"],
    correctIndex: 3,
    explanation:
      "Reactivity is a physical hazard concerning chemical instability or explosive potential, rather than a direct toxic health hazard.",
  },
  {
    id: "gn-2022-p2-q99",
    question:
      "The ability of the immune system to recognize self-antigen versus non-self-antigen is an example of:",
    options: ["Self-tolerance", "Active immunity", "Passive immunity", "Cross-reactivity"],
    correctIndex: 0,
    explanation:
      "Self-tolerance is the immune system's capacity to recognize and avoid attacking the body's own native tissues.",
  },
  {
    id: "gn-2022-p2-q100",
    question:
      "A client has an infection that is spread through droplets. Which of the following is most essential for the nurse to use when taking this client's temperature?",
    options: ["Gown", "Gloves", "Mask", "Goggles"],
    correctIndex: 2,
    explanation:
      "Droplet precautions require wearing a surgical mask within close proximity to catch airborne respiratory droplets.",
  },
];
