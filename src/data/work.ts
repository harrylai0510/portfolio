export interface Job {
  role: string;
  company: string;
  dates: string;
  description: string;
}

export const jobs: Job[] = [
  {
    role: 'Senior Software Engineer',
    company: 'company_name',
    dates: '2021 — present',
    description:
      'Led backend services and APIs. Shipped features that improved throughput by 40% and reduced latency.',
  },
  {
    role: 'Software Engineer',
    company: 'previous_company',
    dates: '2019 — 2021',
    description:
      'Owned services in Go and Python. Collaborated with eng and product on roadmap and on-call.',
  },
  {
    role: 'Junior Developer',
    company: 'agency_inc',
    dates: '2017 — 2019',
    description:
      'Built web apps and internal tools. Wrote tests, fixed bugs, and shipped to production.',
  },
];
