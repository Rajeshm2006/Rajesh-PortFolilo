import projectChurnImg from '../assets/images/project-churn.svg';
import projectInterviewImg from '../assets/images/project-interview.svg';
import projectHouseImg from '../assets/images/project-house.svg';

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  thumbnail: string;
  thumbnailAlt: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  overview: string;
  problemStatement: string;
  objective: string;
  implementation: string[];
  keyFeatures: string[];
  results: string[];
  metricsNote?: string;
}

export const projects: ProjectItem[] = [
  {
    slug: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    shortDescription:
      'Developed a Random Forest classification model on 7,000+ customer records, achieving 85% accuracy and 0.82 AUC-ROC while outperforming the baseline model by 8% in F1-score.',
    thumbnail: projectChurnImg,
    thumbnailAlt: 'Customer Churn Prediction feature importance and AUC-ROC evaluation diagram',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Random Forest',
      'Matplotlib',
    ],
    githubUrl: '',
    liveDemoUrl: '',
    overview:
      'An end-to-end machine learning classification pipeline built to analyze customer subscription behavior across 7,000+ customer records, predict churn risk early, and surface actionable retention drivers.',
    problemStatement:
      'Customer attrition directly impacts recurring revenue, yet retention teams often lack visibility into which behavioral and billing signals precede cancellation.',
    objective:
      'Build an accurate, interpretable classification model that identifies high-risk customers and ranks the primary factors contributing to churn.',
    implementation: [
      'Cleaned, preprocessed, and encoded 7,000+ structured customer records using Pandas and NumPy.',
      'Performed exploratory data analysis and visualized feature relationships with Matplotlib.',
      'Trained and tuned a Random Forest classifier using Scikit-learn and compared F1-score against baseline models.',
      'Evaluated classification performance with accuracy and AUC-ROC metrics and extracted top churn driver importances.',
    ],
    keyFeatures: [
      'Processed and modeled 7,000+ customer records.',
      'Random Forest classification pipeline with Scikit-learn.',
      'Feature importance ranking highlighting contract type, tenure, and monthly charges.',
      'Visual churn distribution and AUC-ROC model evaluation plots.',
    ],
    results: [
      'Achieved 85% model accuracy and 0.82 AUC-ROC on test evaluation.',
      'Outperformed the baseline model by 8% in F1-score.',
      'Identified top 3 churn drivers (contract type, tenure, monthly charges), enabling retention strategies estimated to reduce churn by 18%.',
    ],
  },
  {
    slug: 'ai-interview-coach',
    title: 'AI Interview Coach',
    category: 'Artificial Intelligence / Generative AI',
    shortDescription:
      'Developed a full-stack AI-powered interview preparation platform using React, TypeScript, FastAPI, PostgreSQL, and Google Gemini AI with resume parsing and real-time feedback.',
    thumbnail: projectInterviewImg,
    thumbnailAlt: 'AI Interview Coach resume parsing and Gemini AI evaluation pipeline diagram',
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Google Gemini AI',
    ],
    githubUrl: '',
    liveDemoUrl: '',
    overview:
      'A full-stack generative AI application designed to help candidates prepare for technical and behavioral interviews with automated resume parsing, tailored question generation, and real-time AI evaluation.',
    problemStatement:
      'Generic interview question banks fail to reflect a candidate’s actual project background, and solo learners rarely receive structured feedback on technical depth and clarity.',
    objective:
      'Create an interactive preparation platform with secure authentication, automated resume skill extraction, contextual question generation via Google Gemini AI, and a performance tracking dashboard.',
    implementation: [
      'Built a responsive frontend interface using React and TypeScript for resume upload, practice sessions, and progress analytics.',
      'Implemented secure user authentication and backend REST APIs with FastAPI backed by PostgreSQL.',
      'Automated resume parsing to extract candidate skills, education, and experience for prompt grounding.',
      'Integrated Google Gemini AI to generate tailored technical and behavioral questions and score responses in real time.',
    ],
    keyFeatures: [
      'Secure user authentication and resume upload with automated parsing.',
      'AI-generated technical and behavioral questions tailored to resume and target role.',
      'Real-time AI-powered answer evaluation and response scoring.',
      'Interactive performance dashboard for tracking improvement over time.',
    ],
    results: [
      'Delivered an end-to-end authenticated resume-to-feedback interview preparation workflow.',
      'Enabled structured response scoring and longitudinal improvement tracking.',
    ],
  },
  {
    slug: 'house-price-prediction',
    title: 'House Price Prediction',
    category: 'Machine Learning / Data Science',
    shortDescription:
      'Built a regression model using housing features (location, size, amenities) to predict property prices with preprocessing, feature engineering, and MAE/RMSE optimization.',
    thumbnail: projectHouseImg,
    thumbnailAlt: 'House Price Prediction regression scatter plot and ML pipeline diagram',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    githubUrl: '',
    liveDemoUrl: '',
    overview:
      'A supervised regression workflow built to estimate residential property valuations from historical housing features—including location, size, and amenities—through structured preprocessing, feature engineering, and error optimization.',
    problemStatement:
      'Property pricing depends on interrelated structural and locational variables, making manual estimation inconsistent without systematic historical modeling.',
    objective:
      'Develop a reliable regression pipeline that transforms raw housing attributes into accurate price estimates while minimizing prediction error across MAE and RMSE.',
    implementation: [
      'Handled missing values, outliers, categorical encoding, and feature scaling during data preprocessing with Pandas and NumPy.',
      'Conducted Exploratory Data Analysis (EDA) using Matplotlib to examine distributions and feature correlations.',
      'Engineered informative features capturing location, property size, and amenity signals.',
      'Trained regression algorithms in Scikit-learn and optimized performance using MAE and RMSE metrics.',
    ],
    keyFeatures: [
      'End-to-end preprocessing for location, size, and amenity housing features.',
      'Comprehensive Exploratory Data Analysis (EDA) and correlation profiling.',
      'Feature engineering for stronger predictive signal.',
      'Regression modeling evaluated and tuned via MAE and RMSE.',
    ],
    results: [
      'Optimized regression model performance using Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE).',
      'Produced an interpretable valuation workflow across structural and location predictors.',
    ],
  },
];

export interface GithubRepositoryCard {
  name: string;
  description: string;
  language: string;
  topics: string[];
  url: string;
  status: string;
}

export const featuredRepositories: GithubRepositoryCard[] = [
  {
    name: 'customer-churn-prediction',
    description:
      'Random Forest churn classification on 7,000+ records (85% accuracy, 0.82 AUC-ROC, +8% F1 over baseline).',
    language: 'Python',
    topics: ['scikit-learn', 'random-forest', 'pandas', 'eda'],
    url: '',
    status: 'Portfolio Project',
  },
  {
    name: 'ai-interview-coach',
    description:
      'Full-stack AI interview preparation platform using React, TypeScript, FastAPI, PostgreSQL, and Google Gemini AI.',
    language: 'TypeScript',
    topics: ['react', 'fastapi', 'gemini-ai', 'postgresql'],
    url: '',
    status: 'Portfolio Project',
  },
  {
    name: 'house-price-prediction',
    description:
      'Regression workflow for property valuation using location, size, amenities, and MAE/RMSE optimization.',
    language: 'Python',
    topics: ['regression', 'feature-engineering', 'matplotlib', 'numpy'],
    url: '',
    status: 'Portfolio Project',
  },
];
