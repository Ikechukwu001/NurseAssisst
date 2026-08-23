// papers.js — new shape
export const papers = {
  generalNursing: {
    paper1: {
      title: "Anatomy, Physiology & Basic Sciences",
      subjects: [
        { key: "anatomy-physiology", count: 60 },
        { key: "nutrition", count: 20 },
        { key: "physics-chem-maths", count: 20 },
      ],
      totalQuestions: 100,
    },
    paper2: {
      title: "Medical-Surgical & Pharmacology",
      subjects: [
        { key: "medical-surgical", count: 150 },
        { key: "pharmacology", count: 100 },
      ],
      totalQuestions: 250,
    },
    paper3: {
      title: "Community Health, Paediatrics, Psych & Ethics",
      subjects: [
        { key: "community-health", count: 70 },
        { key: "paediatrics", count: 70 },
        { key: "psychiatric-mental-health", count: 60 },
        { key: "ethics-jurisprudence", count: 50 },
      ],
      totalQuestions: 250,
    },
  },
  midwifery: {
    paper1: {
      title: "Midwifery (Combined)",
      subjects: [
        { key: "midwifery-antenatal", count: 90 },
        { key: "midwifery-intrapartum", count: 90 },
        { key: "midwifery-postnatal-neonatal", count: 70 },
      ],
      totalQuestions: 250,
    },
  },
};