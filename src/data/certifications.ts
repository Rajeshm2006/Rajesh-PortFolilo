export interface CertificationItem {
  id: string;
  name: string;
  organization: string;
  completionDate: string;
  credentialUrl?: string;
  certificateImage?: string;
  skills?: string[];
}

export const certifications: CertificationItem[] = [
  {
    id: 'python-bootcamp-udemy',
    name: '100 Days of Code: The Complete Python Pro Bootcamp',
    organization: 'Udemy',
    completionDate: '2024',
    skills: ['Python', 'Automation', 'Data Processing'],
  },
  {
    id: 'sql-basic-hackerrank',
    name: 'SQL (Basic) Certificate',
    organization: 'HackerRank',
    completionDate: '2024',
    skills: ['SQL', 'Relational Queries', 'Joins & Aggregations'],
  },
  {
    id: 'python-basic-hackerrank',
    name: 'Python (Basic) Certificate',
    organization: 'HackerRank',
    completionDate: '2024',
    skills: ['Python', 'Problem Solving', 'Data Structures'],
  },
  {
    id: 'tsdp-ssiet',
    name: 'Technical Skill Development Program',
    organization: 'Sri Shakthi Institute of Engineering and Technology',
    completionDate: '2023',
    skills: ['Technical Foundations', 'Software Development'],
  },
  {
    id: 'explore-ai-basics-microsoft',
    name: 'Explore AI Basics',
    organization: 'Microsoft',
    completionDate: 'Verified Credential',
    skills: ['Artificial Intelligence', 'ML Concepts'],
  },
  {
    id: 'generative-ai-agents-microsoft',
    name: 'Introduction to Generative AI and Agents',
    organization: 'Microsoft',
    completionDate: 'Verified Credential',
    skills: ['Generative AI', 'LLMs', 'AI Agents'],
  },
];
