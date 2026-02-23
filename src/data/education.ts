export interface EducationEntry {
  degree: string;
  school: string;
  dates: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    degree: 'B.S. Computer Science',
    school: 'university_name',
    dates: '2013 — 2017',
    description: 'Focus on systems and algorithms. Graduated with honors.',
  },
  {
    degree: 'M.S. Software Engineering',
    school: 'tech_institute',
    dates: '2017 — 2019',
    description: 'Thesis on distributed systems. Teaching assistant for OS course.',
  },
];
