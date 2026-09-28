// Flat array — matches what app/questions/page.jsx and
// app/questions/[paperId]/page.jsx expect (paper.id, paper.examType,
// paper.year, paper.paperNumber, paper.subject, paper.questionCount,
// paper.duration).
//
// Only papers with a real content file are listed here — deliberate.
// Referencing a paper with no matching file broke the build twice before;
// add an entry here only once its content file exists and is imported
// in index.js.
export const papers = [
  {
    id: "gn-2022-paper1",
    examType: "General Nursing",
    year: 2022,
    paperNumber: 1,
    subject: "Paper I (Mixed Subjects)",
    questionCount: 100,
    duration: 90,
  },
  {
    id: "gn-2022-paper2",
    examType: "General Nursing",
    year: 2022,
    paperNumber: 2,
    subject: "Paper II (Mixed Subjects)",
    questionCount: 100,
    duration: 90,
  },
  {
    id: "gn-2023-paper1",
    examType: "General Nursing",
    year: 2023,
    paperNumber: 1,
    subject: "Paper I (Mixed Subjects)",
    questionCount: 100,
    duration: 90,
  },
  {
    id: "gn-2024-paper1",
    examType: "General Nursing",
    year: 2024,
    paperNumber: 1,
    subject: "Paper I (Mixed Subjects)",
    questionCount: 100,
    duration: 90,
  },
  {
    id: "gn-2024-paper2",
    examType: "General Nursing",
    year: 2024,
    paperNumber: 2,
    subject: "Paper II (Mixed Subjects)",
    questionCount: 100,
    duration: 90,
  },
  {
    id: "gn-2025-paper1",
    examType: "General Nursing",
    year: 2025,
    paperNumber: 1,
    subject: "Paper I (Psychiatric/Mental Health Focus)",
    questionCount: 100,
    duration: 90,
  },
  {
    id: "gn-2025-paper2",
    examType: "General Nursing",
    year: 2025,
    paperNumber: 2,
    subject: "Paper II (Maternal/Child Health & Community Health Focus)",
    questionCount: 100,
    duration: 90,
  },
];
