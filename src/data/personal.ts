import profileImg from '../assets/images/profile.jpg';

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  brandName: string;
  title: string;
  location: string;
  phone: string;
  availabilityLabel: string;
  heroGreeting: string;
  heroHeadline: string;
  heroDescription: string;
  introduction: string;
  careerObjective: string;
  education: {
    degree: string;
    specialization: string;
    institution: string;
    graduation: string;
    status: string;
    cgpa: string;
    highlights: string[];
  };
  interests: {
    title: string;
    description: string;
  }[];
  profileImageUrl: string;
  resumeUrl: string;
  contactEndpoint: string;
  socials: SocialLinks;
}

export const personalInfo: PersonalInfo = {
  name: 'Rajesh M',
  brandName: 'RAJESH M.',
  title: 'AI & Machine Learning Engineer | Data Analyst',
  location: 'Coimbatore, Tamil Nadu, India',
  phone: '+91-6381127345',
  availabilityLabel: 'AVAILABLE FOR OPPORTUNITIES',
  heroGreeting: "Hi, I'm Rajesh M.",
  heroHeadline: 'Building Intelligent Solutions with Data & AI.',
  heroDescription:
    'Final-year B.Tech AI & ML student building end-to-end machine learning models, interactive Power BI dashboards, and generative AI applications.',
  introduction:
    'I am a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Sri Shakthi Institute of Engineering and Technology, Coimbatore. With hands-on project experience in Python, SQL, Power BI, and Machine Learning, I have built end-to-end ML models achieving 85% accuracy and interactive Power BI dashboards that reduced reporting time by 40%.',
  careerObjective:
    'Seeking an entry-level opportunity as an AI/ML Engineer or Data Analyst where I can apply my technical and analytical skills, transform raw data into meaningful business insights, and contribute to real-world engineering projects.',
  education: {
    degree: 'B.Tech',
    specialization: 'Artificial Intelligence and Machine Learning',
    institution: 'Sri Shakthi Institute of Engineering and Technology, Coimbatore',
    graduation: 'Expected 2027',
    status: 'Final-Year Undergraduate',
    cgpa: '7.18 / 10',
    highlights: [
      'Core coursework focused on Machine Learning, Predictive Modeling, Statistical Analysis, and Database Systems.',
      'Built end-to-end ML pipelines (85% accuracy, 0.82 AUC-ROC) and interactive Power BI dashboards reducing reporting time by 40%.',
      'Hands-on full-stack AI engineering with Python, SQL, FastAPI, PostgreSQL, React, TypeScript, and Google Gemini AI.',
    ],
  },
  interests: [
    {
      title: 'AI and Machine Learning',
      description:
        'Designing supervised classification and regression pipelines with feature engineering, hypothesis testing, and rigorous model evaluation.',
    },
    {
      title: 'Data Analytics',
      description:
        'Turning raw datasets into executive KPI insights through EDA, SQL, Power BI, DAX, and statistical profiling.',
    },
    {
      title: 'Generative AI',
      description:
        'Building practical LLM and RAG workflows using prompt engineering, automated parsing, and modern AI APIs.',
    },
    {
      title: 'Problem Solving',
      description:
        'Translating ambiguous business requirements into structured, measurable, and stakeholder-ready solutions.',
    },
  ],
  profileImageUrl: profileImg,
  resumeUrl: './resume.pdf',
  contactEndpoint: '',
  socials: {
    github: 'https://github.com/Rajeshm2006',
    linkedin: 'https://www.linkedin.com/in/rajesh-m-989844293/',
    email: 'rajeshm9806@gmail.com',
  },
};
