export const profile = {
  name: 'Nicholas McCracken',
  title: 'Software Engineer • AI/ML • Data Engineering',
  description: "I'm a software engineer and M.S. CSE student at Ohio State interested in AI, data infrastructure, and building useful, intelligent systems.",
  status: 'Graduating December 2026 • Columbus, OH',
  linkedin: 'https://linkedin.com/in/nicholasrmccracken',
  email: 'mailto:nicholas.r.mccracken@gmail.com',
  resume: '/Nicholas_McCracken_resume.pdf',
};
export const navigation = ['Experience', 'Projects', 'Skills', 'Education', 'Contact'];
export const experiences = [
  { company: 'Nationwide', role: 'AI/ML Engineering Intern', date: 'May 2026 – Aug 2026', kind: 'AI & MACHINE LEARNING', points: [
    'Built a distributed claims risk classification pipeline on AWS using PySpark, engineering features from claim severity, geography, and historical data to train tree-based models achieving 75% accuracy.',
    'Developed an AI agent that generated production-ready ML repositories with batch and real-time inference workflows, REST APIs, and automated validation suites, reducing model onboarding time by 25%.',
    'Expanded regression test coverage by 35% across 5 production models using AWS, Jenkins, and PyTest.',
  ] },
  { company: 'Procter & Gamble', role: 'Data Engineering Intern', date: 'May 2025 – Aug 2025', kind: 'DATA ENGINEERING', points: [
    'Built and deployed a full-stack sales forecasting platform with Plotly Dash, PostgreSQL, Docker, and Kubernetes to support promotion analytics and lift estimation.',
    'Developed a baseline sales prediction algorithm, revealing $3M+ in profit optimization across key product lines.',
    'Designed validation workflows in Databricks and SQL Server, reducing downstream anomalies by 33%.',
  ] },
  { company: 'Procter & Gamble', role: 'Software Engineering Intern', date: 'May 2024 – Aug 2024', kind: 'SOFTWARE ENGINEERING', points: [
    'Built a PyQt and Selenium form-automation tool that eliminated 750 hours of manual work annually.',
    'Developed a reusable Java and Selenium testing framework that increased automated test coverage by 125%.',
    'Built PySpark ETL pipelines in Databricks on AWS, cutting data delivery time by 80%.',
  ] },
  { company: 'The Ohio State University', role: 'Graduate Teaching Assistant', date: 'Jan 2026 – Present', kind: 'COMPUTER GRAPHICS', points: [
    'Support an upper-level computer graphics and animation course covering Unity, C#, real-time rendering, procedural animation, and agent-based simulation.',
    'Mentor 100+ students through office hours and review sessions while grading assignments, labs, and exams.',
  ] },
];
export const projects = [
  { number: '01', title: 'Multi-Agent Context Engineering', type: 'M.S. CAPSTONE', description: 'Design and evaluate multi-agent AI systems in Python using retrieval, shared memory, context management, and tool orchestration for long-horizon reasoning tasks. Built a reproducible evaluation framework for 50+ task runs, measuring task reliability, retrieval quality, agent coordination, and failure recovery.', metric: '50+', metricLabel: 'multi-agent evaluation runs', tags: ['Python', 'Retrieval', 'Shared Memory', 'Context Management', 'Tool Orchestration'], motif: 'route', github: '' },
  { number: '02', title: 'GitHub Repository LLM Chatbot', type: 'B.S. CAPSTONE', description: 'Built a full-stack RAG chatbot with a Next.js frontend that ingests GitHub repositories, processes 1,000+ code and documentation files, indexes them in Elasticsearch, and answers repository-specific questions. Implemented hybrid vector and keyword search using LangChain embeddings and semantic retrieval.', metric: '1,000+', metricLabel: 'files indexed', tags: ['Next.js', 'LangChain', 'Elasticsearch', 'RAG', 'TypeScript'], motif: 'archive', github: 'https://github.com/nicholasrmccracken/capstone-ai' },
  { number: '03', title: 'Hierarchical Marine Classifier Competition', type: 'COMPUTER VISION', description: 'Trained deep-sea marine image classifiers and fine-tuned ResNet-50 as part of an end-to-end machine learning pipeline for hierarchical classification. Our team reached the top 10 on the Kaggle leaderboard.', metric: 'Top 10', metricLabel: 'Kaggle leaderboard', tags: ['ResNet-50', 'Deep Learning', 'Computer Vision', 'Hierarchical Classification', 'ML Pipelines'], motif: 'marine', github: '', report: 'https://www.dropbox.com/scl/fi/xum10oqzezbqay322hh51/Marine_Life_Classifier_Competition.pdf?rlkey=89q6zvtjl6z5z9rdkxnv059lm&st=c12ifzpu&dl=0' },
  { number: '04', title: 'Airport Task Robot', type: 'AUTONOMOUS ROBOTICS', description: 'An autonomous robot built to handle boarding passes, airplane fueling, luggage delivery, and passport stamping. Combines a dual-servo blade, color sensing, PID navigation, and RPS position correction.', metric: '4', metricLabel: 'airport tasks, one autonomous robot', tags: ['Robotics', 'PID Control', 'RPS', 'FEH Proteus'], motif: 'robot', github: 'https://github.com/nicholasrmccracken/airport-task-robot' },

];
export const skills = [
  { name: 'Languages', subtitle: 'The foundations', items: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'C#', 'C++', 'C', 'Kotlin', 'Ruby', 'MATLAB'] },
  { name: 'AI / Data', subtitle: 'Intelligence & insight', items: ['PySpark', 'PyTorch', 'TensorFlow', 'Keras', 'Databricks', 'PostgreSQL', 'Elasticsearch', 'LangChain', 'RAG'] },
  { name: 'Web / Infrastructure', subtitle: 'Systems that endure', items: ['React', 'Next.js', 'Node.js', 'Express', 'Rails', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux', 'Unity'] },
];
export const education = [
  { degree: 'M.S. Computer Science and Engineering', date: 'August 2025 – December 2026' },
  { degree: 'B.S. Computer Science and Engineering', date: 'August 2022 – December 2025' },
];
