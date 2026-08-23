// Flat array — this is the shape app/questions/page.jsx and
// app/questions/[paperId]/page.jsx actually expect (paper.id, paper.examType,
// paper.year, paper.paperNumber, paper.subject, paper.questionCount, paper.duration).
//
// The `subjects` field on each paper carries the subject-composition mapping
// (which subject pools feed this paper, and how many questions to pull from
// each) so index.js can assemble real questions once subject files have content.
//
// `year` is a placeholder (2026) for all papers since content is organized by
// subject now, not by historical year — adjust if you want real year grouping
// once you have year-specific source material.
export const papers = [
  {
    id: "gn-paper-1",
    examType: "General Nursing",
    year: 2026,
    paperNumber: 1,
    subject: "Anatomy, Physiology & Basic Sciences",
    questionCount: 100,
    duration: 90,
    subjects: [
      { key: "anatomy-physiology", count: 60 },
      { key: "nutrition", count: 20 },
      { key: "physics-chem-maths", count: 20 },
    ],
  },
  {
    id: "gn-paper-2",
    examType: "General Nursing",
    year: 2026,
    paperNumber: 2,
    subject: "Medical-Surgical & Pharmacology",
    questionCount: 250,
    duration: 180,
    subjects: [
      { key: "medical-surgical", count: 150 },
      { key: "pharmacology", count: 100 },
    ],
  },
  {
    id: "gn-paper-3",
    examType: "General Nursing",
    year: 2026,
    paperNumber: 3,
    subject: "Community Health, Paediatrics, Psych & Ethics",
    questionCount: 250,
    duration: 180,
    subjects: [
      { key: "community-health", count: 70 },
      { key: "paediatrics", count: 70 },
      { key: "psychiatric-mental-health", count: 60 },
      { key: "ethics-jurisprudence", count: 50 },
    ],
  },
  {
    id: "mw-paper-1",
    examType: "Midwifery",
    year: 2026,
    paperNumber: 1,
    subject: "Midwifery (Combined)",
    questionCount: 250,
    duration: 180,
    subjects: [
      { key: "midwifery-antenatal", count: 90 },
      { key: "midwifery-intrapartum", count: 90 },
      { key: "midwifery-postnatal-neonatal", count: 70 },
    ],
  },
];
