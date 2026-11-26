export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    iconKey:
      | 'code'
      | 'database'
      | 'cpu'
      | 'layers'
      | 'table'
      | 'sigma'
      | 'sparkles'
      | 'bot'
      | 'search'
      | 'terminal'
      | 'barchart'
      | 'sheet'
      | 'linechart'
      | 'piechart'
      | 'compass'
      | 'gitbranch'
      | 'github'
      | 'vscode'
      | 'book'
      | 'cloud';
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages for data engineering, ML modeling, and analytical querying.',
    skills: [
      { name: 'Python', iconKey: 'code' },
      { name: 'SQL', iconKey: 'database' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Predictive modeling, statistical analysis, and generative AI architectures.',
    skills: [
      { name: 'Machine Learning', iconKey: 'cpu' },
      { name: 'Scikit-learn', iconKey: 'layers' },
      { name: 'Pandas', iconKey: 'table' },
      { name: 'NumPy', iconKey: 'sigma' },
      { name: 'Generative AI', iconKey: 'sparkles' },
      { name: 'LLM', iconKey: 'bot' },
      { name: 'RAG', iconKey: 'search' },
      { name: 'Prompt Engineering', iconKey: 'terminal' },
      { name: 'Statistical Analysis', iconKey: 'sigma' },
      { name: 'A/B & Hypothesis Testing', iconKey: 'compass' },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Exploratory analysis, KPI reporting, and interactive dashboard development.',
    skills: [
      { name: 'Power BI', iconKey: 'barchart' },
      { name: 'DAX', iconKey: 'sigma' },
      { name: 'Microsoft Excel', iconKey: 'sheet' },
      { name: 'Data Visualization', iconKey: 'piechart' },
      { name: 'Exploratory Data Analysis', iconKey: 'compass' },
      { name: 'Matplotlib', iconKey: 'linechart' },
      { name: 'Seaborn', iconKey: 'piechart' },
      { name: 'KPI Reporting', iconKey: 'barchart' },
    ],
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools',
    description: 'Version control, interactive notebooks, databases, and development environments.',
    skills: [
      { name: 'Git', iconKey: 'gitbranch' },
      { name: 'GitHub', iconKey: 'github' },
      { name: 'VS Code', iconKey: 'vscode' },
      { name: 'Jupyter Notebook', iconKey: 'book' },
      { name: 'Google Colab', iconKey: 'cloud' },
      { name: 'MySQL', iconKey: 'database' },
    ],
  },
];
