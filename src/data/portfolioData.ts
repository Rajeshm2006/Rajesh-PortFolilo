export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  technologies: string[];
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  githubUrl: string;
  metrics?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  isEditablePlaceholder: boolean;
}

export interface EducationItem {
  degree: string;
  specialization: string;
  status: string;
  institution: string;
  location: string;
  cgpa: string;
  expectedYear: string;
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export const portfolioData = {
  profile: {
    name: "Rajesh M",
    title: "AI/ML Engineer | Data Scientist | Data Analyst",
    heroTitle: "Rajesh M",
    heroSubtitle: "AI/ML Engineer | Data Scientist | Data Analyst",
    location: "Coimbatore, Tamil Nadu, India",
    phone: "+91-6381127345",
    email: "rajeshm9806@gmail.com",
    github: "https://github.com/Rajeshm2006",
    linkedin: "https://www.linkedin.com/in/rajesh-m-989844293/",
    resumeUrl: "/resume/Rajesh_M_Resume.pdf",
    summary:
      "Final-year B.Tech Artificial Intelligence and Machine Learning student with hands-on project experience in Python, SQL, Power BI, and Machine Learning. Developed end-to-end machine learning models achieving 85% accuracy and interactive Power BI dashboards that reduced reporting time by 40%. Skilled in data analysis, exploratory data analysis (EDA), predictive modeling, dashboard development, and data visualization. Strong understanding of machine learning concepts and the ability to transform raw data into meaningful business insights.",
    careerObjective:
      "Seeking an entry-level opportunity as a Data Analyst or AI/ML Engineer to apply strong technical, statistical, and predictive modeling capabilities to solve real-world problems and drive data-backed decision making.",
    technicalInterests: [
      "Machine Learning & Predictive Modeling",
      "Exploratory Data Analysis (EDA) & Statistical Analysis",
      "Power BI Dashboard Development & KPI Reporting",
      "Generative AI, Large Language Models (LLMs) & Prompt Engineering",
      "A/B Testing & Hypothesis Testing",
      "Database Architecture & Query Optimization (SQL / MySQL)",
    ],
    coreCompetencies: [
      "Analytical Thinking",
      "Problem Solving",
      "Attention to Detail",
      "Communication of Insights",
      "Stakeholder Reporting",
    ],
  },

  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL"],
    },
    {
      category: "Data Analysis & Machine Learning",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis",
        "Predictive Modeling",
        "Regression",
        "Classification",
        "A/B Testing",
        "Hypothesis Testing",
      ],
    },
    {
      category: "Data Visualization & BI",
      skills: [
        "Power BI",
        "DAX",
        "Matplotlib",
        "Seaborn",
        "Microsoft Excel",
        "Dashboard Development",
        "KPI Reporting",
      ],
    },
    {
      category: "Generative AI & AI Technologies",
      skills: [
        "Generative AI",
        "Large Language Models (LLMs)",
        "Prompt Engineering",
        "RAG Concepts",
        "FastAPI",
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        "MySQL",
        "Git",
        "GitHub",
        "Google Colab",
        "VS Code",
        "Jupyter Notebook",
        "PostgreSQL",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "customer-churn-prediction",
      title: "Customer Churn Prediction",
      subtitle: "Machine Learning & Predictive Classification",
      shortDescription:
        "Developed a Random Forest classification model on 7,000+ customer records, achieving 85% accuracy and 0.82 AUC-ROC, outperforming baseline by 8% in F1-score.",
      technologies: ["Python", "scikit-learn", "Pandas", "Random Forest", "EDA"],
      problemStatement:
        "Customer attrition diminishes recurring revenue and customer lifetime value. Identifying key churn triggers allows businesses to deploy targeted customer retention campaigns.",
      solution:
        "Engineered an end-to-end classification pipeline analyzing 7,000+ customer records. Performed EDA, feature engineering, and trained a Random Forest model to pinpoint critical churn drivers.",
      keyFeatures: [
        "Trained and evaluated on 7,000+ real-world customer records",
        "Achieved 85% accuracy and 0.82 AUC-ROC, outperforming baseline by 8% in F1-score",
        "Identified top 3 churn drivers: contract type, tenure, and monthly charges",
        "Enabled data-backed retention strategies estimated to reduce churn by 18%",
        "Rigorous feature importance ranking and threshold tuning",
      ],
      metrics: ["85% Accuracy", "0.82 AUC-ROC", "7,000+ Records", "18% Churn Reduction"],
      githubUrl: "https://github.com/Rajeshm2006",
    },
    {
      id: "ai-interview-coach",
      title: "AI Interview Coach",
      subtitle: "Full-Stack Generative AI Interview Platform",
      shortDescription:
        "Developed a full-stack AI-powered interview preparation platform using React, TypeScript, FastAPI, PostgreSQL, and Google Gemini AI.",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Google Gemini AI"],
      problemStatement:
        "Candidates often struggle with generic interview preparation that lacks customized questions and objective, real-time rubric evaluation based on their specific background.",
      solution:
        "Architected an intelligent application with automated resume parsing to extract technical skills and experience, generating contextual technical and behavioral interview questions via Google Gemini AI with real-time scoring.",
      keyFeatures: [
        "Secure user authentication and automated resume parsing for skill extraction",
        "AI-generated technical and behavioral questions tailored to candidate resume & role",
        "Real-time feedback engine delivering response scoring and improvement metrics",
        "Interactive candidate performance dashboard with persistent session analytics",
        "Scalable backend architecture built with FastAPI and PostgreSQL",
      ],
      metrics: ["Real-Time AI Scoring", "Automated Parsing", "Role-Tailored Questions"],
      githubUrl: "https://github.com/Rajeshm2006",
    },
    {
      id: "house-price-prediction",
      title: "House Price Prediction Model",
      subtitle: "Supervised Regression & Valuation Analytics",
      shortDescription:
        "Built a regression model using housing features (location, size, amenities) to predict property prices with high accuracy, optimizing MAE and RMSE metrics.",
      technologies: ["Python", "scikit-learn", "Regression Analysis", "Pandas", "NumPy"],
      problemStatement:
        "Real estate pricing requires accounting for multidimensional parameters (location, square footage, amenities) where manual estimates often produce valuation inaccuracies.",
      solution:
        "Constructed a predictive regression pipeline in Python and scikit-learn incorporating data cleansing, multivariate feature engineering, and model evaluation utilizing MAE and RMSE metrics.",
      keyFeatures: [
        "Multivariate regression modeling based on location, square footage, and amenities",
        "End-to-end data preprocessing and outlier mitigation",
        "Feature scaling, correlation matrices, and interaction feature engineering",
        "Systematic error optimization utilizing Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE)",
      ],
      metrics: ["High Valuation Accuracy", "Optimized MAE & RMSE", "Multivariate Features"],
      githubUrl: "https://github.com/Rajeshm2006",
    },
  ] as ProjectItem[],

  experience: [
    {
      company: "Thiranex",
      role: "Data Analyst",
      period: "Internship / Practical Experience",
      location: "Coimbatore, Tamil Nadu, India",
      responsibilities: [
        "Analyzed operational datasets using Python and SQL to uncover business trends and insights.",
        "Built and maintained interactive dashboards in Power BI and Excel, reducing reporting turnaround time by up to 40%.",
        "Performed data cleansing, transformation, and validation routines across multiple raw data sources.",
        "Collaborated with stakeholders to deliver structured reports, KPI metrics, and data-driven recommendations.",
      ],
      isEditablePlaceholder: false,
    },
  ] as ExperienceItem[],

  education: {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    specialization: "Artificial Intelligence and Machine Learning",
    status: "Final Year Student",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu, India",
    cgpa: "7.18 / 10",
    expectedYear: "Expected 2027",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Data Analysis & Visualization",
      "Predictive Modeling & Statistics",
    ],
  } as EducationItem,

  certifications: [
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      issuer: "Udemy",
      year: "2024",
    },
    {
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      year: "2024",
    },
    {
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
      year: "2024",
    },
    {
      title: "Technical Skill Development Program",
      issuer: "Sri Shakthi Institute of Engineering and Technology",
      year: "2023",
    },
    {
      title: "Explore AI Basics",
      issuer: "Microsoft",
      year: "Certified",
    },
    {
      title: "Introduction to Generative AI and Agents",
      issuer: "Microsoft",
      year: "Certified",
    },
  ] as CertificationItem[],
};
