// NMCN General Nursing — 2025, Paper II
// Correct answers and rationale sourced from the user's compilation.
// Wrong options (distractors) are AI-synthesized placeholders — see
// 2022-paper1.js header for full notes on this approach.
//
// FOUR corrections made using established clinical protocol (not just
// internal consistency checks):
// Q2 — source answer read "1, 2, 2004" (transcription error); corrected
//   to items 1, 2, 4 per the rationale's own exclusion of weight gain.
// Q53 — vignette states "no clinical signs of dehydration" but source
//   labeled it "Severe persistent diarrhea," which requires dehydration
//   under IMCI. Corrected to "Persistent diarrhea" (non-severe).
// Q55 — source had no valid answer ("Correct: undefined"), only a
//   rationale. Built a complete question from that rationale (the real
//   IMCI fever threshold).
// Q76 — label ("Very severe febrile disease") contradicted both its own
//   rationale text ("severe febrile disease") and the vignette, which
//   explicitly rules out all general danger signs — required for a
//   "very severe" classification under IMCI. Corrected to "Malaria"
//   (fever, no danger signs, malaria-risk area).

export const questions = [
  {
    id: "gn-2025-p2-q1",
    question:
      "Mariah's previous menstrual period was October 22-26; her Last Menstrual Bleed (LMB) was November 21. What is the length of her menstrual cycle?",
    options: ["28 days", "30 days", "31 days", "26 days"],
    correctIndex: 1,
    explanation:
      "The length of a menstrual cycle is calculated as the number of days between the first day of one period (October 22) and the first day of the next (November 21). From Oct 22 to Oct 31 is 9 days, plus 21 days in November equals 30 days.",
  },
  {
    id: "gn-2025-p2-q2",
    question:
      "Which signs of ovulation should Mariah record when attempting to track her fertile window? (1. 1°F rise in BBT, 2. Copious/clear mucus, 3. One-pound weight increase, 4. Mittelschmerz)",
    options: ["1, 2, and 4 only", "1 and 3 only", "2 and 3 only", "All four signs"],
    correctIndex: 0,
    explanation:
      "Signs of ovulation include a slight rise in basal body temperature (BBT), abundant, clear, stretchy cervical mucus (spinnbarkeit), and localized lower abdominal pain (mittelschmerz). Weight gain is not a standard physiological indicator of ovulation.",
  },
  {
    id: "gn-2025-p2-q3",
    question: "Which instruction given to Mariah for recording her basal body temperature (BBT) is incorrect?",
    options: [
      "Take your temperature at the same time each morning before rising",
      "Use the same thermometer consistently",
      "BBT is at its lowest level during the secretory phase",
      "Record your temperature immediately upon waking",
    ],
    correctIndex: 2,
    explanation:
      "Basal body temperature is lower during the follicular phase and rises during the secretory phase under the influence of progesterone. It remains elevated until menstruation occurs — so the statement that BBT is lowest during the secretory phase is the incorrect instruction.",
  },
  {
    id: "gn-2025-p2-q4",
    question:
      "Which hormone is directly responsible for causing the characteristic increase in basal body temperature (BBT) after ovulation?",
    options: ["Estrogen", "Luteinizing hormone", "Follicle-stimulating hormone", "Progesterone"],
    correctIndex: 3,
    explanation:
      "Progesterone, secreted by the corpus luteum following ovulation, acts directly on the hypothalamus to elevate the baseline body temperature.",
  },
  {
    id: "gn-2025-p2-q5",
    question:
      "Which structure is responsible for producing Human Chorionic Gonadotropin (hCG) during early pregnancy?",
    options: ["Corpus luteum", "Trophoblastic cells", "Anterior pituitary", "Endometrium"],
    correctIndex: 1,
    explanation:
      "Trophoblastic cells, which form the outer layers of the blastocyst and later develop into the placenta, secrete hCG to sustain the corpus luteum.",
  },
  {
    id: "gn-2025-p2-q6",
    question: "At 5 months (20 weeks) of gestation, which developmental or clinical milestone is achieved?",
    options: ["Viability threshold is reached", "Fetal movements are felt", "Lanugo disappears completely", "Surfactant production begins"],
    correctIndex: 1,
    explanation:
      "Quickening, which is the maternal perception of fetal movement, typically occurs between 18 and 20 weeks of gestation in primigravidas.",
  },
  {
    id: "gn-2025-p2-q7",
    question:
      "At 5 months (20 weeks) gestation, at what anatomical level should the nurse expect to palpate the uterine fundus?",
    options: ["At the symphysis pubis", "Halfway between the symphysis and umbilicus", "Above the xiphoid process", "At the level of the umbilicus"],
    correctIndex: 3,
    explanation:
      "At 20 weeks of gestation, the fundus of the uterus typically reaches the anatomical level of the maternal umbilicus.",
  },
  {
    id: "gn-2025-p2-q8",
    question:
      "What is the most appropriate response to Mariah's worry that her small breasts will prevent her from successfully breastfeeding?",
    options: [
      "You may need to supplement with formula",
      "Small breasts often produce less milk",
      "You should consider breast augmentation before delivery",
      "Breast size will not affect your capacity for lactation",
    ],
    correctIndex: 3,
    explanation:
      "Breast size is determined primarily by adipose (fat) tissue, whereas lactation capacity depends on functional glandular tissue, which develops independently of breast size during pregnancy.",
  },
  {
    id: "gn-2025-p2-q9",
    question:
      "What is the priority nursing diagnosis for a prenatal client who is avoiding milk and dairy products specifically to prevent weight gain?",
    options: [
      "Risk for constipation",
      "Knowledge deficit regarding nutritional requirements during pregnancy",
      "Ineffective coping",
      "Disturbed body image",
    ],
    correctIndex: 1,
    explanation:
      "The client requires immediate education on the critical importance of calcium and protein intake for fetal skeletal development and maternal health.",
  },
  {
    id: "gn-2025-p2-q10",
    question: "Which nursing intervention is most effective to ensure dietary compliance in a pregnant client?",
    options: [
      "Provide a strict, standardized meal plan",
      "Warn of consequences for non-compliance",
      "Incorporate nutritional food preferences into the meal plan",
      "Refer immediately to a dietitian without discussion",
    ],
    correctIndex: 2,
    explanation:
      "Incorporating the client's cultural, economic, and personal food preferences encourages autonomy and drastically increases dietary compliance.",
  },
  {
    id: "gn-2025-p2-q11",
    question: "Which clinical term refers to the initiation of breast development during female puberty?",
    options: ["Thelarche", "Menarche", "Adrenarche", "Pubarche"],
    correctIndex: 0,
    explanation:
      "Thelarche marks the biological beginning of secondary breast development, usually the first visible sign of puberty in females.",
  },
  {
    id: "gn-2025-p2-q12",
    question: "Which organ or anatomical structure is incised and occluded during a vasectomy procedure?",
    options: ["Epididymis", "Seminal vesicle", "Urethra", "Vas deferens"],
    correctIndex: 3,
    explanation:
      "A vasectomy involves cutting, tying, or sealing the bilateral vas deferens to prevent sperm from mixing with ejaculatory fluid.",
  },
  {
    id: "gn-2025-p2-q13",
    question: "Which of the following best defines a cystocele?",
    options: [
      "Herniation of the rectum into the posterior vaginal wall",
      "Herniation of the urinary bladder into the anterior vaginal wall",
      "Prolapse of the uterus through the cervix",
      "Herniation of the small intestine into the vaginal vault",
    ],
    correctIndex: 1,
    explanation:
      "A cystocele occurs when the supportive connective tissue between a woman's bladder and vaginal wall weakens, allowing the bladder to bulge into the vagina.",
  },
  {
    id: "gn-2025-p2-q14",
    question: "For a client with a regular 34-day menstrual cycle, what is the most likely day of ovulation?",
    options: ["Day 14", "Day 17", "Day 20", "Day 24"],
    correctIndex: 2,
    explanation:
      "Ovulation consistently occurs roughly 14 days before the onset of the next menses. Subtracting 14 days from a 34-day cycle indicates ovulation occurs on day 20.",
  },
  {
    id: "gn-2025-p2-q15",
    question: "Which of the following is considered a primary psychological cause of vaginismus?",
    options: [
      "A structural congenital abnormality",
      "Deeply ingrained learning patterns viewing sex as bad, dirty, or sinful",
      "A postpartum hormonal imbalance",
      "Chronic urinary tract infections",
    ],
    correctIndex: 1,
    explanation:
      "Vaginismus is frequently tied to conditioned psychological responses where sex is associated with fear, guilt, or trauma, causing involuntary pelvic floor muscle spasms.",
  },
  {
    id: "gn-2025-p2-q16",
    question:
      "In the fertility awareness method, which sign indicates that the client is entering her most fertile days?",
    options: [
      "Cervical mucus becoming thick and sticky",
      "Cervical mucus becoming thin, copious, clear, and watery",
      "Cessation of cervical mucus entirely",
      "Cervical mucus turning white and clumped",
    ],
    correctIndex: 1,
    explanation:
      "Under the influence of rising estrogen, fertile cervical mucus becomes abundant, thin, clear, and stretchy (resembling raw egg whites) to facilitate sperm transport.",
  },
  {
    id: "gn-2025-p2-q17",
    question:
      "Which symptom represents a critical warning/danger sign associated with Combined Oral Contraceptives (COCs)?",
    options: ["Mild nausea", "Breast tenderness", "Severe migraine headaches", "Spotting between periods"],
    correctIndex: 2,
    explanation:
      "Severe migraines can signal an increased risk of ischemic stroke, which is a known cardiovascular complication associated with the use of estrogen-containing COCs.",
  },
  {
    id: "gn-2025-p2-q18",
    question:
      "What is the approved clinical effectiveness duration of standard long-acting subcutaneous contraceptive implants (e.g., Jadelle)?",
    options: ["2 years", "5 years", "8 years", "10 years"],
    correctIndex: 1,
    explanation:
      "Subcutaneous levonorgestrel contraceptive implants like Jadelle provide highly effective, reversible contraception for up to 5 consecutive years.",
  },
  {
    id: "gn-2025-p2-q19",
    question: "Which statement regarding the clinical use of female condoms is completely true?",
    options: [
      "They must be properly inserted before any genital penetration occurs",
      "They can be reused after washing",
      "They provide no protection against STIs",
      "They must be inserted immediately after intercourse begins",
    ],
    correctIndex: 0,
    explanation:
      "Female condoms act as a physical barrier and must be placed in the vagina before any contact occurs between the penis and vulva to prevent pregnancy and STIs.",
  },
  {
    id: "gn-2025-p2-q20",
    question:
      "Which patient profile represents an ideal candidate for the Gamete Intrafallopian Transfer (GIFT) procedure?",
    options: [
      "A client with bilaterally blocked fallopian tubes",
      "A client with confirmed patent fallopian tubes",
      "A client who has had a bilateral tubal ligation",
      "A client with a history of ectopic pregnancy in both tubes",
    ],
    correctIndex: 1,
    explanation:
      "GIFT requires healthy, patent fallopian tubes because the harvested ova and washed sperm are injected directly into the tubes where fertilization takes place naturally.",
  },
  {
    id: "gn-2025-p2-q21",
    question: "By which mechanism does a bilateral tubal ligation successfully prevent pregnancy?",
    options: [
      "It prevents ovulation from occurring",
      "The pathway through the fallopian tubes is permanently blocked",
      "It thins the uterine lining to prevent implantation",
      "It alters cervical mucus to block sperm",
    ],
    correctIndex: 1,
    explanation:
      "Tubal ligation severs, bands, or cauterizes the fallopian tubes, preventing sperm from traveling upward to meet the ovulated oocyte.",
  },
  {
    id: "gn-2025-p2-q22",
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
    id: "gn-2025-p2-q23",
    question: "Why does advanced endometriosis frequently interfere with a client's fertility?",
    options: [
      "It always causes complete ovarian failure",
      "Endometrial implants block or distort the fallopian tubes",
      "It causes early, permanent menopause",
      "It prevents implantation only, never affecting the tubes",
    ],
    correctIndex: 1,
    explanation:
      "Endometriosis causes cyclic bleeding within the pelvic cavity, leading to extensive adhesions, scarring, and anatomical distortion that can occlude the fallopian tubes.",
  },
  {
    id: "gn-2025-p2-q24",
    question: "Which instruction should a nurse provide to a client scheduled for a hysterosalpingogram?",
    options: [
      "You will need general anesthesia for this procedure",
      "You will likely feel moderate abdominal cramping when the dye is inserted",
      "You must fast for 24 hours beforehand",
      "This procedure requires an overnight hospital stay",
    ],
    correctIndex: 1,
    explanation:
      "As the radiopaque contrast medium is injected through the cervix into the uterine cavity and fallopian tubes, localized distension routinely causes temporary pelvic cramping.",
  },
  {
    id: "gn-2025-p2-q25",
    question: "Which statement accurately defines Artificial Insemination by Donor (AID)?",
    options: [
      "The woman's own egg is fertilized outside the body",
      "A surrogate carries the pregnancy to term",
      "Hormonal medication alone is used to induce ovulation",
      "External donor sperm is mechanically instilled into the uterus or cervix",
    ],
    correctIndex: 3,
    explanation:
      "AID involves the clinical introduction of semen from an anonymous or designated third-party donor directly into the female reproductive tract to achieve pregnancy.",
  },
  {
    id: "gn-2025-p2-q26",
    question:
      "When conducting a pain assessment in older persons, which physiological age-related change must the nurse consider?",
    options: [
      "Pain sensitivity always increases uniformly with age",
      "Older adults always report pain accurately and promptly",
      "Pain perception is unaffected by aging",
      "Older individuals can experience atypical pain presentations and may not report pain",
    ],
    correctIndex: 3,
    explanation:
      "Aging can alter pain perception or manifest atypically (e.g., confusion, restlessness). Pain is not a normal part of aging, and older adults often underreport it.",
  },
  {
    id: "gn-2025-p2-q27",
    question: "Which pharmacological principle guides the administration of analgesics to older adults?",
    options: [
      "Older adults are typically more sensitive to drugs due to altered pharmacokinetics",
      "Older adults metabolize drugs faster than younger adults",
      "Dosing does not need adjustment regardless of age",
      "Older adults require higher starting doses than younger adults",
    ],
    correctIndex: 0,
    explanation:
      "Decreased hepatic blood flow and reduced glomerular filtration rate (GFR) prolong drug half-life, making older adults highly sensitive and prone to drug toxicity.",
  },
  {
    id: "gn-2025-p2-q28",
    question: "Which factor significantly elevates the risk for urinary incontinence specifically in the elderly population?",
    options: [
      "Increased functional bladder capacity",
      "Enhanced detrusor muscle stability",
      "Decreased functional bladder capacity and detrusor instability",
      "Slower urine production with age",
    ],
    correctIndex: 2,
    explanation:
      "Age-related changes include a reduction in bladder capacity, decreased ability to postpone urination, and involuntary bladder contractions.",
  },
  {
    id: "gn-2025-p2-q29",
    question:
      "What is often the earliest or most common clinical manifestation of an acute systemic infection in an elderly patient?",
    options: [
      "A high spiking fever",
      "Severe localized pain",
      "Marked leukocytosis",
      "An acute change in mental status or baseline cognition",
    ],
    correctIndex: 3,
    explanation:
      "Due to a blunted immune response, elderly patients often fail to develop a fever; instead, infection typically manifests as acute confusion, delirium, or lethargy.",
  },
  {
    id: "gn-2025-p2-q30",
    question: "What is the universally accepted priority sequence when managing care for an elderly trauma patient?",
    options: ["Airway, Breathing, Circulation", "Circulation, Airway, Breathing", "Breathing, Circulation, Airway", "Disability, Airway, Breathing"],
    correctIndex: 0,
    explanation:
      "Establishing a patent airway, securing effective breathing, and maintaining systemic perfusion (ABC) remains the absolute priority framework in all trauma management.",
  },
  {
    id: "gn-2025-p2-q31",
    question:
      "According to developmental psychology, what is the core perceptual perspective of a preschooler (egocentric stage)?",
    options: [
      "They can fully understand others' perspectives",
      "They reason primarily through abstract logic",
      "They view the world almost entirely through their own perspective",
      "They rely mainly on peer consensus for understanding",
    ],
    correctIndex: 2,
    explanation:
      "Preschoolers (Piaget's preoperational stage) display egocentrism, meaning they struggle to conceptualize or understand perspectives other than their own.",
  },
  {
    id: "gn-2025-p2-q32",
    question: "In conflict management, which dynamic characterizes a true win-win collaborative resolution?",
    options: [
      "One party concedes fully to the other",
      "Both parties are fully committed to solving the root issues collaboratively",
      "A neutral third party imposes a decision",
      "Both parties avoid the conflict entirely",
    ],
    correctIndex: 1,
    explanation:
      "A win-win outcome is achieved through collaboration, where both parties actively work together to find an integrated solution that fully satisfies the goals of both sides.",
  },
  {
    id: "gn-2025-p2-q33",
    question:
      "Which of the following represents a major social-interactional risk factor for child abuse and neglect within a community?",
    options: [
      "High parental educational attainment",
      "Acute family crisis coupled with low social support",
      "Strong extended family network",
      "Stable dual-income household",
    ],
    correctIndex: 1,
    explanation:
      "While poverty is a structural risk, immediate social-interactional risk factors involve acute familial crises, social isolation, and a lack of supportive family networks.",
  },
  {
    id: "gn-2025-p2-q34",
    question: "Which clinical findings are highly suggestive of an infant-onset Arnold-Chiari malformation?",
    options: [
      "Excessive weight gain and lethargy",
      "Delayed dentition and rash",
      "Hyperactive reflexes and tachycardia only",
      "Difficulties in swallowing, an absent gag reflex, and respiratory distress",
    ],
    correctIndex: 3,
    explanation:
      "Arnold-Chiari malformation involves the downward displacement of cerebellar tissue through the foramen magnum, compressing the brainstem and affecting cranial nerves.",
  },
  {
    id: "gn-2025-p2-q35",
    question:
      "What is the immediate, priority action a mother should take if her child ingests ferrous sulfate (iron) tablets and begins vomiting?",
    options: [
      "Give the child milk to neutralize the tablets",
      "Induce further vomiting at home",
      "Wait to see if symptoms resolve on their own",
      "Contact Emergency Medical Services (EMS) or transport immediately to the ER",
    ],
    correctIndex: 3,
    explanation:
      "Acute iron poisoning is highly toxic and can cause severe gastrointestinal hemorrhage, metabolic acidosis, and cardiovascular collapse. Immediate ER care is vital.",
  },
  {
    id: "gn-2025-p2-q36",
    question:
      "What is the most accurate nursing response when a client on oral contraceptives asks, \"What should I do if my periods stop while taking the pill?\"",
    options: [
      "The reduction in uterine lining makes skipping possible, but see a provider to rule out pregnancy",
      "This is always a sign the pill has failed",
      "You should stop the pill immediately",
      "This is completely normal and needs no follow-up",
    ],
    correctIndex: 0,
    explanation:
      "Progestins in oral contraceptives thin the endometrium, which can result in amenorrhea. While common, the nurse must ensure the client takes a pregnancy test to rule out failure.",
  },
  {
    id: "gn-2025-p2-q37",
    question:
      "Which clinical finding represents the primary, diagnostic manifestation of Hirschsprung's disease in a newborn?",
    options: [
      "Excessive weight gain in the first week",
      "Projectile vomiting after every feed",
      "Failure to pass meconium within the first 24 to 48 hours after birth",
      "Persistent high fever from birth",
    ],
    correctIndex: 2,
    explanation:
      "Hirschsprung's disease is characterized by an absence of ganglion cells in the distal bowel, leading to a lack of peristalsis and mechanical obstruction.",
  },
  {
    id: "gn-2025-p2-q38",
    question:
      "A nurse is reviewing discharge instructions with a client diagnosed with partial placenta previa. Which statement indicates the need for further teaching?",
    options: [
      "I should avoid sexual intercourse for at least 3 days until the bleeding stops",
      "I will call my provider immediately if I notice bleeding",
      "I should avoid strenuous activity as advised",
      "I will attend all scheduled follow-up appointments",
    ],
    correctIndex: 0,
    explanation:
      "Complete pelvic rest (no sexual intercourse, douching, or vaginal examinations) is mandatory throughout the remainder of the pregnancy to prevent life-threatening hemorrhage — not just until bleeding stops for a few days.",
  },
  {
    id: "gn-2025-p2-q39",
    question:
      "When a pregnant client experiences a rupture of membranes, what is the immediate priority assessment for the nurse?",
    options: [
      "Assess maternal temperature",
      "Assess fluid color and odor",
      "Check for prolapse of the umbilical cord",
      "Assess maternal pain level",
    ],
    correctIndex: 2,
    explanation:
      "When membranes rupture, the sudden gush of fluid can wash the umbilical cord down ahead of the fetal presenting part, causing cord compression and fetal hypoxia.",
  },
  {
    id: "gn-2025-p2-q40",
    question:
      "What should the nurse teach a parent regarding the application of a prescribed topical medication to a child who wears plastic-coated diapers?",
    options: [
      "Avoid covering the medicated area with the tight, plastic-coated diaper",
      "Apply extra medication to compensate for diaper coverage",
      "Double the frequency of application under the diaper",
      "No special precaution is needed",
    ],
    correctIndex: 0,
    explanation:
      "Plastic-coated diapers act as an occlusive dressing, which significantly increases systemic absorption of topical medications and can induce localized or systemic toxicity.",
  },
  {
    id: "gn-2025-p2-q41",
    question:
      "Which element is recognized as the most critical factor for the overall success of a therapeutic nursing care relationship?",
    options: [
      "Strict adherence to hospital policy",
      "Consistent, clear, and effective therapeutic communication",
      "Rapid completion of nursing tasks",
      "Minimizing time spent with the client",
    ],
    correctIndex: 1,
    explanation:
      "Effective communication forms the foundation of a therapeutic relationship, enabling trust, thorough assessment, and accurate implementation of nursing interventions.",
  },
  {
    id: "gn-2025-p2-q42",
    question: "Why are lacerations or traumatic injuries of the lower extremities considered particularly serious during pregnancy?",
    options: [
      "Pregnancy hormones slow all wound healing uniformly",
      "They cause increased bleeding due to uterine pressure on the inferior vena cava and leg veins",
      "They always indicate underlying fetal distress",
      "They automatically require cesarean delivery",
    ],
    correctIndex: 1,
    explanation:
      "The heavy, gravid uterus compresses the pelvic veins, elevating hydrostatic pressure in the lower extremities, which leads to venous stasis and increased bleeding from leg wounds.",
  },
  {
    id: "gn-2025-p2-q43",
    question:
      "When working with family caregivers to teach a complex home care procedure, which strategy ensures competency?",
    options: [
      "Provide a single detailed written pamphlet only",
      "Demonstrate the skill once without follow-up",
      "Assume competency based on verbal confirmation alone",
      "Teach the skill in daily increments and require a successful return demonstration",
    ],
    correctIndex: 3,
    explanation:
      "Requiring a step-by-step return demonstration allows the nurse to directly evaluate the caregiver's psychomotor skills, correct errors, and verify safe care delivery.",
  },
  {
    id: "gn-2025-p2-q44",
    question: "Which of the following clinical scenarios serves as a prime example of an expanded role for a professional nurse?",
    options: [
      "A certified pediatric nurse practitioner managing an outpatient wellness clinic",
      "A staff nurse administering routine medications",
      "A ward nurse documenting vital signs",
      "A nurse assisting with a physician-led procedure",
    ],
    correctIndex: 0,
    explanation:
      "Advanced Practice Registered Nurses (APRNs), such as Nurse Practitioners, practice in expanded roles that include autonomous diagnosis, treatment, and prescriptive authority.",
  },
  {
    id: "gn-2025-p2-q45",
    question: "When evaluating transcultural communication, which element is NOT necessarily a unique cultural variable in conversational style?",
    options: ["Eye contact patterns", "Conversational pacing", "Personal space preferences", "The specific clinical subject matter being discussed"],
    correctIndex: 3,
    explanation:
      "Clinical subject matter is situational, whereas eye contact, conversational pacing, and personal behavioral displays are deeply rooted, distinct cultural variables.",
  },
  {
    id: "gn-2025-p2-q46",
    question:
      "Which laboratory or clinical finding is most indicative of a formal relapse in a pediatric client with acute glomerulonephritis?",
    options: [
      "Trace proteinuria only",
      "Normal urine output with mild fatigue",
      "Isolated microscopic hematuria alone",
      "2+ proteinuria for 3 consecutive days, or 3-4+ proteinuria with visible edema",
    ],
    correctIndex: 3,
    explanation:
      "Glomerulonephritis involves immune-complex mediated damage to the glomeruli. A relapse is marked by increased glomerular permeability, leading to significant protein loss.",
  },
  {
    id: "gn-2025-p2-q47",
    question:
      "Which psychosocial state characterized by an adolescent's struggle to define their place in society corresponds to Erikson's stage of development?",
    options: ["Identity vs. Role Confusion", "Industry vs. Inferiority", "Intimacy vs. Isolation", "Initiative vs. Guilt"],
    correctIndex: 0,
    explanation:
      "The primary developmental task of adolescence (ages 12-18) is resolving the conflict between establishing a clear personal identity and experiencing role confusion.",
  },
  {
    id: "gn-2025-p2-q48",
    question:
      "When a charge nurse assigns clinical duties based on a staff member's scope of practice, which process is being demonstrated?",
    options: ["Supervision", "Collaboration", "Referral", "Delegation"],
    correctIndex: 3,
    explanation:
      "Delegation is the transfer of responsibility for the performance of an activity from one individual to another while retaining accountability for the outcome.",
  },
  {
    id: "gn-2025-p2-q49",
    question: "A laboring client complains of severe, unrelenting back labor. Which fetal position is the most likely cause of this discomfort?",
    options: ["Left Occipito-Posterior (LOP)", "Right Occipito-Anterior (ROA)", "Left Occipito-Anterior (LOA)", "Frank breech"],
    correctIndex: 0,
    explanation:
      "Posterior fetal positions (like LOP or ROP) cause the hard fetal occiput to press continuously against the maternal sacrum during contractions, causing intense back pain.",
  },
  {
    id: "gn-2025-p2-q50",
    question: "Within quality improvement frameworks, what does the acronym FOCUS stand for?",
    options: [
      "Focus, Organize, Clarify, Understand, Solution",
      "Find, Observe, Correct, Update, Sustain",
      "Focus, Operate, Change, Utilize, Support",
      "Find, Organize, Change, Understand, Select",
    ],
    correctIndex: 0,
    explanation:
      "The FOCUS methodology is a quality improvement framework: Find a process to improve, Organize a team, Clarify current knowledge, Understand variance, and Select a solution.",
  },
  {
    id: "gn-2025-p2-q51",
    question:
      "Under the Integrated Management of Childhood Illness (IMCI) guidelines, a child classified in the yellow row for diarrhea indicates what status?",
    options: ["Some dehydration", "Severe dehydration", "No dehydration", "Persistent diarrhea only"],
    correctIndex: 0,
    explanation:
      "The IMCI color-coded triage system utilizes pink for urgent hospital referral (severe), yellow for specific outpatient treatment (some/moderate), and green for home care.",
  },
  {
    id: "gn-2025-p2-q52",
    question:
      "Celeste is brought to the clinic with an 8-day history of diarrhea. She has sunken eyes and drinks fluids eagerly when offered. What is her IMCI classification?",
    options: ["No dehydration", "Severe dehydration", "Severe persistent diarrhea", "Some dehydration"],
    correctIndex: 3,
    explanation:
      "According to IMCI classifications, an infant with diarrhea who displays two key signs — sunken eyes and eager/thirsty drinking — is classified as having some dehydration.",
  },
  {
    id: "gn-2025-p2-q53",
    question:
      "A 7-week-old infant is presented with a 14-day history of diarrhea but shows no clinical signs of dehydration. What is the appropriate IMCI classification?",
    options: ["No dehydration", "Some dehydration", "Severe persistent diarrhea", "Persistent diarrhea"],
    correctIndex: 3,
    explanation:
      "A child with diarrhea lasting 14 days or more is classified as having persistent diarrhea. Under IMCI, this becomes 'severe persistent diarrhea' only when dehydration is also present — since none is present here, the correct classification is persistent diarrhea (non-severe), managed with feeding advice and follow-up rather than urgent referral.",
  },
  {
    id: "gn-2025-p2-q54",
    question:
      "Which rule is NOT included in the standard IMCI home treatment plan (Plan A) for a child classified as having No Dehydration?",
    options: [
      "Give extra fluids",
      "Provide immediate high-dose Vitamin A supplementation",
      "Continue feeding",
      "Know when to return immediately",
    ],
    correctIndex: 1,
    explanation:
      "Plan A focuses on the 4 rules of home treatment: give extra fluids, give zinc supplements, continue feeding, and know when to return. Routine Vitamin A is not a rule of Plan A.",
  },
  {
    id: "gn-2025-p2-q55",
    question: "How is a clinically significant fever defined within the diagnostic assessment framework of the IMCI guidelines?",
    options: [
      "Axillary temperature of 37.5°C or higher, or a reliable history of feeling hot",
      "Oral temperature of 39°C or higher only",
      "Any temperature above normal body temperature regardless of measurement site",
      "Rectal temperature of 38°C confirmed twice",
    ],
    correctIndex: 0,
    explanation:
      "IMCI defines fever based on an objective axillary temperature reading of 37.5°C or higher, or a reliable subjective history of the child feeling hot to the touch.",
  },
  {
    id: "gn-2025-p2-q56",
    question: "What is the primary role of the Community Health Nurse (CHN) in the prevention and control of Dengue hemorrhagic fever?",
    options: [
      "Administering the Dengue vaccine to all children",
      "Complete elimination of vectors by emptying stagnant water containers",
      "Prescribing prophylactic antibiotics",
      "Recommending indoor confinement during rainy season",
    ],
    correctIndex: 1,
    explanation:
      "Environmental sanitation focused on source reduction — destroying the breeding sites of the Aedes mosquito (stagnant water containers) — is the single most effective control.",
  },
  {
    id: "gn-2025-p2-q57",
    question: "Which symptom is NOT viewed as an immediate indicator for hospitalization for a patient suspected of having Dengue?",
    options: ["A persistent chronic cough lasting for 30 days", "Severe abdominal pain", "Rising hematocrit", "Severe headache"],
    correctIndex: 0,
    explanation:
      "Abdominal pain, rising hematocrit (indicating hemoconcentration), and severe headache are warning signs of Dengue. A chronic cough points toward a different pulmonary issue.",
  },
  {
    id: "gn-2025-p2-q58",
    question: "What is the nurse's primary clinical concern regarding hemorrhage control when caring for a client with severe Dengue?",
    options: [
      "Preventing bruising at IV sites",
      "Managing mild gum bleeding",
      "Reducing fever quickly",
      "Monitoring vital signs closely for early indications of hypovolemic shock",
    ],
    correctIndex: 3,
    explanation:
      "Internal bleeding and increased vascular permeability in Dengue hemorrhagic fever cause fluid shifts, making monitoring for hypovolemic shock the top priority.",
  },
  {
    id: "gn-2025-p2-q59",
    question: "Which clinical or laboratory finding is NOT regarded as a direct indicative sign of active Dengue hemorrhagic fever?",
    options: ["Thrombocytopenia", "Rising hematocrit", "A positive tourniquet test", "A prolonged bleeding time"],
    correctIndex: 3,
    explanation:
      "Diagnosis of Dengue hemorrhagic fever relies on fever, thrombocytopenia, hemoconcentration (rising hematocrit), and a positive tourniquet test, rather than a bleeding time test.",
  },
  {
    id: "gn-2025-p2-q60",
    question: "What is the most critical and life-saving treatment intervention for a patient suffering from severe Dengue Hemorrhagic Fever?",
    options: [
      "Administration of high-dose corticosteroids",
      "Prompt and meticulous body fluid replacement therapy",
      "Immediate platelet transfusion in all cases",
      "Strict bed rest without IV access",
    ],
    correctIndex: 1,
    explanation:
      "Massive plasma leakage is the hallmark of severe Dengue. Aggressive fluid resuscitation using intravenous crystalloids or oral rehydration solutions is critical to restore volume.",
  },
  {
    id: "gn-2025-p2-q61",
    question: "When a community health nurse addresses health misconceptions, what is the very first step in correcting deep-seated local myths?",
    options: [
      "Systematically identify and document the specific myths present",
      "Immediately correct the community in a public forum",
      "Distribute pamphlets without prior assessment",
      "Report the misconceptions to health authorities",
    ],
    correctIndex: 0,
    explanation:
      "Before any education campaign can be developed, the nurse must first assess and identify the specific misconceptions and myths driving local behaviors.",
  },
  {
    id: "gn-2025-p2-q62",
    question: "What is the average expected measles prevention percentage achieved by administering the single vaccine dose at 9 months of age?",
    options: ["50%", "90%", "99%", "100%"],
    correctIndex: 1,
    explanation:
      "Administering the measles vaccine at 9 months of age provides protective efficacy and seroconversion in approximately 80 to 90% of vaccinated infants.",
  },
  {
    id: "gn-2025-p2-q63",
    question: "What is the estimated protection percentage against neonatal tetanus provided by a completed Tetanus Toxoid 3 (TT3) vaccination series?",
    options: ["90%", "50%", "70%", "99%"],
    correctIndex: 0,
    explanation:
      "A woman who has received the third dose of Tetanus Toxoid (TT3) achieves a protective antibody status that passes immunity to her newborn, protecting around 90% of cases.",
  },
  {
    id: "gn-2025-p2-q64",
    question: "What is the appropriate clinical instruction if an infant experiences generalized convulsions immediately following the first dose of DPT?",
    options: [
      "Administer the DT (Diphtheria and Tetanus) vaccine for subsequent doses",
      "Continue the full DPT series as scheduled",
      "Discontinue all future vaccinations permanently",
      "Repeat the DPT dose immediately",
    ],
    correctIndex: 0,
    explanation:
      "The pertussis component of the DPT vaccine is associated with neurological adverse events like convulsions. If these occur, pertussis is discontinued, and DT is substituted.",
  },
  {
    id: "gn-2025-p2-q65",
    question: "Which group of childhood vaccines must be administered in three distinct doses at minimum 1-month intervals for optimal primary immunity?",
    options: ["Measles, BCG, and Vitamin A", "OPV, Hepatitis B, and DPT", "BCG only", "Measles and BCG only"],
    correctIndex: 1,
    explanation:
      "Oral Polio Vaccine (OPV), Hepatitis B, and Diphtheria-Pertussis-Tetanus (DPT) are classically administered in a 3-dose primary series starting at 6, 10, and 14 weeks of age.",
  },
  {
    id: "gn-2025-p2-q66",
    question: "What is the primary focus of true primary cancer prevention strategies?",
    options: [
      "Early screening for asymptomatic cases",
      "Rehabilitation after cancer treatment",
      "Complete elimination of conditions and risk factors that encourage carcinogenesis",
      "Palliative symptom management",
    ],
    correctIndex: 2,
    explanation:
      "Primary prevention aims to prevent disease occurrence by reducing exposure to known carcinogens and promoting health protective behaviors.",
  },
  {
    id: "gn-2025-p2-q67",
    question: "Which activity represents the most impactful community health nursing intervention for reducing cancer mortality?",
    options: [
      "Distributing general health pamphlets",
      "Organizing hospital fundraisers",
      "Providing nutritional counseling only",
      "Utilizing the 9 recognized warning signs of cancer as screening parameters",
    ],
    correctIndex: 3,
    explanation:
      "Teaching the public to recognize the early warning signs of cancer ensures early detection and intervention, which directly correlates with improved survival rates.",
  },
  {
    id: "gn-2025-p2-q68",
    question: "Individuals categorized as receiving secondary levels of health care are typically characterized as those who:",
    options: [
      "Are receiving primary immunizations",
      "Are undergoing rehabilitation after disability",
      "Are receiving palliative end-of-life care",
      "Are undergoing screening for early case detection",
    ],
    correctIndex: 3,
    explanation:
      "Secondary prevention focuses on early detection, screening, and prompt intervention to halt the disease process in its earliest stages.",
  },
  {
    id: "gn-2025-p2-q69",
    question: "Which of the following descriptions best fits patients who are recipients of tertiary levels of health care?",
    options: [
      "Clients receiving supportive, rehabilitative, or palliative care",
      "Clients receiving routine immunizations",
      "Clients undergoing first-time screening",
      "Clients receiving general health education",
    ],
    correctIndex: 0,
    explanation:
      "Tertiary prevention focuses on rehabilitation, minimizing disability, and providing supportive care to maximize a patient's residual functional capacity.",
  },
  {
    id: "gn-2025-p2-q70",
    question: "Which tool provides the community health nurse with the most rigorous scientific approach to solving community health issues?",
    options: ["Community surveys alone", "The systematic nursing process", "Informal staff meetings", "Anecdotal case reports"],
    correctIndex: 1,
    explanation:
      "The nursing process (Assessment, Diagnosis, Planning, Implementation, Evaluation) provides a scientific, systematic framework for clinical problem-solving.",
  },
  {
    id: "gn-2025-p2-q71",
    question: "Under IMCI guidelines, how should a 10-month-old child presenting with a cough and visible chest indrawing be classified?",
    options: ["No pneumonia: cough or cold", "Pneumonia", "Severe pneumonia or very severe disease", "Persistent cough"],
    correctIndex: 2,
    explanation:
      "In IMCI, any child presenting with a cough or difficult breathing who exhibits chest indrawing is classified as having severe pneumonia or very severe disease.",
  },
  {
    id: "gn-2025-p2-q72",
    question: "What respiratory threshold constitutes fast breathing in an infant who is exactly 13 months old?",
    options: ["30 breaths per minute or more", "35 breaths per minute or more", "40 breaths per minute or more", "50 breaths per minute or more"],
    correctIndex: 2,
    explanation:
      "For children aged 12 months up to 5 years, an objective respiratory rate of 40 breaths per minute or higher is classified as fast breathing under IMCI criteria.",
  },
  {
    id: "gn-2025-p2-q73",
    question:
      "Nina is an 18-month-old child brought to the clinic with a 5-day history of diarrhea. She is highly irritable and drinks water eagerly when offered. What is her classification?",
    options: ["Some dehydration", "No dehydration", "Severe dehydration", "Persistent diarrhea"],
    correctIndex: 0,
    explanation:
      "Irritability combined with thirsty/eager drinking meets the criteria for some dehydration under the standardized IMCI assessment guidelines.",
  },
  {
    id: "gn-2025-p2-q74",
    question: "When managing Nina's care for some dehydration, all of the following interventions are appropriate EXCEPT:",
    options: [
      "Give ORS at the recommended volume over 4 hours",
      "Reassess the child after the initial treatment period",
      "Teach the mother how to prepare and give ORS at home",
      "Avoid giving any other foods or breastmilk during fluid resuscitation",
    ],
    correctIndex: 3,
    explanation:
      "Mothers are encouraged to continue breastfeeding and feeding appropriate foods as soon as initial rehydration is established to support nutritional status.",
  },
  {
    id: "gn-2025-p2-q75",
    question:
      "Nina is 18 months old, has a cough, a respiratory rate of 45 breaths/min, and shows no signs of chest indrawing or general danger signs. What is her classification?",
    options: ["No pneumonia: cough or cold", "Pneumonia", "Severe pneumonia or very severe disease", "Persistent cough"],
    correctIndex: 1,
    explanation:
      "For an 18-month-old, a respiratory rate >=40 breaths/min without chest indrawing or general danger signs satisfies the IMCI diagnostic criteria for pneumonia.",
  },
  {
    id: "gn-2025-p2-q76",
    question:
      "Carol is a 15-month-old infant with an axillary temperature of 38.9°C in a malaria-risk area. She has no history of vomiting, convulsions, or lethargy, and no stiff neck. What is her classification?",
    options: ["Malaria", "Very severe febrile disease", "Fever: malaria unlikely", "No classification needed"],
    correctIndex: 0,
    explanation:
      "A child with fever and no general danger signs (no inability to drink, no vomiting everything, no convulsions, no lethargy) and no stiff neck, assessed in a malaria-risk area, is classified as Malaria under IMCI — the 'very severe febrile disease' classification specifically requires a general danger sign or stiff neck to be present, which are explicitly absent here.",
  },
  {
    id: "gn-2025-p2-q77",
    question: "Small-for-gestational-age (SGA) newborns are at an elevated risk for hypothermia primarily due to which physiological factor?",
    options: [
      "Excess brown fat stores",
      "Overactive shivering thermogenesis",
      "Markedly diminished subcutaneous fat stores and glycogen reserves",
      "Increased surface-to-volume ratio unrelated to fat stores",
    ],
    correctIndex: 2,
    explanation:
      "SGA infants have minimal subcutaneous fat for insulation and decreased brown fat stores, which impairs their capacity for non-shivering thermogenesis.",
  },
  {
    id: "gn-2025-p2-q78",
    question: "When monitoring a high-risk laboring client receiving a continuous intravenous oxytocin infusion, which symptoms indicate water intoxication?",
    options: [
      "Severe headache accompanied by projectile vomiting",
      "Mild thirst and dry mouth",
      "Increased urine output",
      "Slight elevation in blood pressure only",
    ],
    correctIndex: 0,
    explanation:
      "Oxytocin has a chemical structure similar to antidiuretic hormone (ADH). High doses can cause fluid retention, leading to water intoxication, hyponatremia, and cerebral edema.",
  },
  {
    id: "gn-2025-p2-q79",
    question: "Which medical intervention is completely contraindicated and NOT considered when treating a patient with Dengue hemorrhagic fever?",
    options: [
      "Intravenous crystalloid fluid replacement",
      "Administering standard aspirin or NSAIDs to control high fever",
      "Close monitoring of hematocrit and platelet counts",
      "Paracetamol for fever control",
    ],
    correctIndex: 1,
    explanation:
      "Aspirin and NSAIDs are strictly contraindicated in Dengue because they impair platelet aggregation and damage the gastric mucosa, worsening the risk of severe hemorrhage.",
  },
  {
    id: "gn-2025-p2-q80",
    question: "What is the mandatory first step when conducting a clinical child assessment using the integrated IMCI framework?",
    options: [
      "Check the child's immunization card",
      "Weigh and measure the child",
      "Check the child for any general danger signs",
      "Ask about the presenting complaint only",
    ],
    correctIndex: 2,
    explanation:
      "The nurse must always screen for general danger signs (inability to drink/breastfeed, vomiting everything, convulsions, lethargy) first to identify children requiring immediate emergency care.",
  },
  {
    id: "gn-2025-p2-q81",
    question: "When assessing a child presenting with acute diarrhea, the nurse must observe and check for all of the following signs EXCEPT:",
    options: ["Duration of the diarrhea", "Presence of blood in the stool", "The presence of systemic skin petechiae", "Signs of dehydration"],
    correctIndex: 2,
    explanation:
      "While duration, blood (dysentery), and dehydration are core components of the IMCI diarrhea assessment, petechiae are tied to the evaluation of fever/Dengue risks.",
  },
  {
    id: "gn-2025-p2-q82",
    question: "Which of the following interventions is NOT included in the home treatment protocol (Plan A) for a child with diarrhea and No Dehydration?",
    options: [
      "Administration of targeted antidiarrheal drugs every 4 hours",
      "Giving extra fluids at home",
      "Continuing to feed the child",
      "Knowing when to return immediately",
    ],
    correctIndex: 0,
    explanation:
      "Antidiarrheal medications are not recommended for pediatric diarrhea because they can delay clearance of pathogens and induce significant systemic toxicities.",
  },
  {
    id: "gn-2025-p2-q83",
    question: "Which ethical principle dictates that healthcare providers must treat each patient as an autonomous agent with inherent moral worth?",
    options: ["Justice", "Respect for persons (Autonomy)", "Fidelity", "Veracity"],
    correctIndex: 1,
    explanation:
      "The principle of respect for persons underscores autonomy, stating that individuals should be treated as autonomous agents capable of making their own healthcare choices.",
  },
  {
    id: "gn-2025-p2-q84",
    question: "Which pair of ethical principles forms the core foundational guidance for a nurse acting in the role of a patient advocate?",
    options: ["Justice and fidelity", "Autonomy and veracity", "Fidelity and confidentiality", "Beneficence and nonmaleficence"],
    correctIndex: 3,
    explanation:
      "Acting as an advocate requires the nurse to actively promote the patient's well-being (beneficence) while shielding them from preventable harm or neglect (nonmaleficence).",
  },
  {
    id: "gn-2025-p2-q85",
    question: "What is the most constructive response a nurse can give to a street food vendor seen handling bread rolls with bare, unwashed hands?",
    options: [
      "Report the vendor to authorities immediately",
      "Please use clean metal forceps or tongs to handle the bread",
      "Refuse to purchase from the vendor without comment",
      "Publicly criticize the vendor's hygiene practices",
    ],
    correctIndex: 1,
    explanation:
      "Providing a clear, non-judgmental alternative instruction promotes safety and behavioral compliance without provoking defensiveness.",
  },
  {
    id: "gn-2025-p2-q86",
    question: "Which statement should be included in a teaching plan for a client who has chosen a cervical cap as her method of contraception?",
    options: [
      "The cap provides full protection without spermicide",
      "The cap can remain in place indefinitely",
      "The cap should be inserted only after intercourse begins",
      "The cap must always be used in conjunction with a chemical spermicide",
    ],
    correctIndex: 3,
    explanation:
      "For maximum contraceptive efficacy, a cervical cap must be used with spermicide placed inside the dome before insertion over the cervix to destroy escaping sperm.",
  },
  {
    id: "gn-2025-p2-q87",
    question: "What are the major, fundamental components that comprise the universal dynamic process of communication?",
    options: [
      "Speaker, Listener, Topic, and Response",
      "Message, Sender, Channel, Receiver, and Feedback",
      "Words, Tone, Body Language, and Setting",
      "Sender, Receiver, and Message only",
    ],
    correctIndex: 1,
    explanation:
      "The communication process requires a sender to encode a message through a specific channel to a receiver, who then decodes it and provides feedback to verify clarity.",
  },
  {
    id: "gn-2025-p2-q88",
    question: "In pediatric nursing, how is the total clinical extent of a burn injury calculated or expressed?",
    options: [
      "As an absolute count of affected body regions",
      "As a fixed percentage regardless of age",
      "As a ratio of burned to unburned skin only",
      "As a percentage of the Total Body Surface Area (%TBSA)",
    ],
    correctIndex: 3,
    explanation:
      "Pediatric burn extent is calculated as a percentage of Total Body Surface Area (%TBSA), often using modified charts like the Lund-Browder chart to account for growth changes.",
  },
  {
    id: "gn-2025-p2-q89",
    question:
      "During a clinical assessment, a nurse notes a young child has consistently dirty clothes, displays constant hunger, and is chronically tired. What does this indicate?",
    options: [
      "A normal variation in family routine",
      "The scenario presents a classic case of child neglect",
      "A minor, isolated parenting oversight",
      "An unrelated developmental delay",
    ],
    correctIndex: 1,
    explanation:
      "Child neglect is defined as the persistent failure of a caregiver to provide basic essential needs, including adequate nutrition, clean clothing, shelter, and supervision.",
  },
  {
    id: "gn-2025-p2-q90",
    question: "Acute Renal Failure (ARF) / Acute Kidney Injury (AKI) is classified into how many distinct structural types based on physiological etiology?",
    options: ["Two types", "Three types (prerenal, intrarenal, and postrenal)", "Four types", "Five types"],
    correctIndex: 1,
    explanation:
      "AKI is categorized into prerenal (hypoperfusion to the kidney), intrarenal (direct damage to kidney tissue/nephrons), and postrenal (obstruction of the urinary tract).",
  },
  {
    id: "gn-2025-p2-q91",
    question: "What is recognized globally as the most common mode of transmission for the Human Immunodeficiency Virus (HIV/AIDS)?",
    options: [
      "Blood transfusion with unscreened blood",
      "Occupational needlestick injury",
      "Mother-to-child transmission",
      "Unprotected sexual contact with an infected partner",
    ],
    correctIndex: 3,
    explanation:
      "While blood exposures carry high transmission risks per event, unprotected sexual intercourse remains the most common mode of HIV transmission worldwide.",
  },
  {
    id: "gn-2025-p2-q92",
    question: "What is the specific classification of the causative organism responsible for Acquired Immunodeficiency Syndrome (AIDS)?",
    options: ["A specialized RNA retrovirus", "A DNA bacteriophage", "A gram-negative bacterium", "A fungal pathogen"],
    correctIndex: 0,
    explanation:
      "AIDS is caused by the Human Immunodeficiency Virus (HIV), which is a lentivirus belonging to the retrovirus family that uses reverse transcriptase to replicate.",
  },
  {
    id: "gn-2025-p2-q93",
    question: "Mike is an HIV-positive patient admitted to a private hospital room. Which nursing practice is most vital for the care team to maintain?",
    options: [
      "Using extra gloves only during blood draws",
      "Isolating all equipment used for Mike specifically",
      "Continuous, unwavering application of standard/universal precautions",
      "Wearing a mask only during direct conversation",
    ],
    correctIndex: 2,
    explanation:
      "Universal precautions dictate that the blood and body fluids of all patients are treated as potentially infectious for HIV, HBV, and other bloodborne pathogens.",
  },
  {
    id: "gn-2025-p2-q94",
    question: "What is the primary focus of health teaching for Mike, an HIV-positive client who is being managed in an outpatient clinic?",
    options: [
      "Teaching methods to increase caloric intake only",
      "Teaching methods to prevent opportunistic infections",
      "Teaching methods to manage chronic pain",
      "Teaching methods to improve sleep hygiene only",
    ],
    correctIndex: 1,
    explanation:
      "Because HIV selectively destroys CD4+ T-lymphocytes, the immune system becomes compromised. Teaching infection prevention strategies is critical to preserving health.",
  },
  {
    id: "gn-2025-p2-q95",
    question: "Which intervention is the top priority for protecting healthcare workers from occupational exposure to HIV/AIDS?",
    options: [
      "Wearing double gloves for all patient contact",
      "Avoiding all contact with HIV-positive patients",
      "Wearing a face shield at all times",
      "Actively avoiding accidental needlesticks and sharp wound punctures",
    ],
    correctIndex: 3,
    explanation:
      "The vast majority of occupational HIV transmissions in healthcare settings occur via accidental percutaneous injuries from contaminated hollow-bore needles.",
  },
  {
    id: "gn-2025-p2-q96",
    question: "During a physical examination of an infant with measles (rubeola), which finding indicates the development of a common secondary complication?",
    options: [
      "Mild conjunctival redness",
      "Koplik's spots in the mouth",
      "Confirming the presence of bronchial pneumonia",
      "A generalized maculopapular rash",
    ],
    correctIndex: 2,
    explanation:
      "Pneumonia is a severe, relatively common complication of measles that accounts for the majority of measles-associated deaths in young children.",
  },
  {
    id: "gn-2025-p2-q97",
    question: "Which solution is most appropriate for a nurse to use when performing routine oral hygiene for a pediatric client with stomatitis?",
    options: ["A mild alkaline or normal saline mouth rinse", "Undiluted hydrogen peroxide", "Alcohol-based mouthwash", "Concentrated lemon-glycerin swabs"],
    correctIndex: 0,
    explanation:
      "A mild, non-irritating solution like normal saline or an alkaline mouthwash cleans the oral mucosa gently without causing further pain or damaging raw, ulcerated tissues.",
  },
  {
    id: "gn-2025-p2-q98",
    question: "When teaching a mother how to prevent secondary bacterial complications in a child with measles, what is the most important instruction?",
    options: [
      "Keep the child's skin clean, maintain hydration, and support nutritional intake",
      "Keep the child in a completely dark room at all times",
      "Restrict all fluids until the rash resolves",
      "Apply antibiotic ointment to the entire body",
    ],
    correctIndex: 0,
    explanation:
      "General supportive care — maintaining hygiene to prevent secondary skin infections, supporting hydration, and adequate feeding — is key to preventing complications.",
  },
  {
    id: "gn-2025-p2-q99",
    question:
      "A 70-year-old with type 2 diabetes on metformin and glipizide presents with altered mental status, dehydration, and serum glucose 650 mg/dL, osmolality 340 mOsm/kg, no ketones. What is the diagnosis?",
    options: ["Diabetic ketoacidosis", "Hypoglycemic crisis", "Hyperglycaemic hyperosmolar state", "Lactic acidosis"],
    correctIndex: 2,
    explanation:
      "HHS is characterised by severe hyperglycaemia, hyperosmolality, and minimal ketosis, often in elderly type 2 diabetes.",
  },
  {
    id: "gn-2025-p2-q100",
    question: "Which insulin can be given intravenously?",
    options: ["NPH insulin", "Regular insulin", "Insulin glargine", "Insulin detemir"],
    correctIndex: 1,
    explanation:
      "Regular insulin (short-acting) is the only type approved for IV use; it is used in DKA/HHS protocols.",
  },
];
