/* About page: qualifications, in the order of the timeline (oldest first) */
export type Qualification = { year: string; title: string; by: string; isCurrent?: boolean };

export const qualifications: Qualification[] = [
  {
    year: '2014',
    title: 'Advanced Diploma in Nutritional Studies, Level 5',
    by: 'London College of Nutrition',
  },
  {
    year: '2019',
    title: 'Postgraduate Diploma, Functional Blood Chemistry Analysis',
    by: 'ODX Academy',
  },
  { year: '2020', title: 'Foundational Peptide Therapy', by: 'SSRP Institute' },
  {
    year: '2021 to 2025',
    title:
      'Mastery courses in functional medicine (2021), hormones (2022), toxicity (2023) and mitochondria (2025)',
    by: 'Integrative Medicine Academy',
  },
  {
    year: '2025',
    title: 'BSc (Hons), Nutritional Science',
    by: 'Middlesex University, in collaboration with CNELM',
  },
  {
    year: '2026',
    title: 'Advanced Bio-identical Hormone Replacement Therapy Certificate',
    by: 'WorldLink Medical',
  },
  { year: '2026', title: 'Nutrigenomics Certification', by: 'Nutrigenetic Research Institute' },
  {
    year: 'In progress',
    title: 'MSc, Neuroscience and Psychology of Mental Health',
    by: 'In progress (postgraduate diploma stage completed, dissertation pending)',
    isCurrent: true,
  },
];
