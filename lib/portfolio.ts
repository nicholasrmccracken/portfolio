export const profile = {
  name: 'Nicholas McCracken',
  title: 'Software Engineer • AI/ML • Data Engineering',
  description: "I'm a software engineer and M.S. CSE student at Ohio State interested in building intelligent systems, data infrastructure, and products that solve real problems.",
  tagline: 'Building systems at the intersection of engineering, intelligence, and imagination.',
  status: 'Graduating December 2026 • Columbus, OH',
  github: 'https://github.com/nicholasrmccracken',
  linkedin: 'https://linkedin.com/in/nicholasrmccracken',
  email: 'mailto:nicholas.r.mccracken@gmail.com',
  resume: '/resume.pdf',
};
export const navigation = ['Experience', 'Projects', 'Skills', 'Education', 'Contact'];
export const experiences = [
  { company: 'Nationwide', role: 'AI/ML Engineering Intern', date: 'May 2026 – Aug 2026', kind: 'AI & MACHINE LEARNING', points: [
    'Built a distributed claims risk classification pipeline on AWS using PySpark, engineering features from claim severity, geography, and historical data to train tree-based models achieving 75% accuracy.',
    'Developed an AI agent that generated deployable ML repositories from standardized templates, automating batch and real-time workflows, REST endpoints, and validation suites to reduce onboarding time by 25%.',
    'Expanded regression test coverage by 35% across 5 production models using Jenkins, PyTest, and AWS.',
  ] },
  { company: 'The Ohio State University', role: 'Graduate Teaching Assistant', date: 'Jan 2026 – Dec 2026', kind: 'COMPUTER GRAPHICS', points: [
    'Supported an upper-level computer graphics and animation course covering Unity, C#, real-time rendering, procedural animation, and agent-based simulation.',
    'Mentored 100+ students through office hours and review sessions while grading assignments and exams.',
  ] },
  { company: 'Procter & Gamble', role: 'Data Engineering Intern', date: 'May 2025 – Aug 2025', kind: 'DATA ENGINEERING', points: [
    'Built a full-stack sales forecasting tool using Plotly Dash, PostgreSQL, Docker, and Kubernetes to support promotion analytics and lift estimation.',
    'Developed a novel baseline prediction algorithm, revealing $3M+ in profit optimization across key product lines.',
    'Designed validation workflows in Databricks and SQL Server, reducing downstream anomalies by 33%.',
  ] },
  { company: 'Procter & Gamble', role: 'Software Engineering Intern', date: 'May 2024 – Aug 2024', kind: 'SOFTWARE ENGINEERING', points: [
    'Built a form-filling automation tool using PyQt, Pandas, and Selenium, saving 750 hours annually.',
    'Developed a Java testing framework with Selenium, increasing test coverage by 125%.',
    'Implemented ETL pipelines in Databricks with PySpark on AWS, reducing data delivery time by 80%.',
  ] },
];
export const projects = [
  { number: '01', title: 'Multi-Agent Context Engineering', type: "MASTER’S PROJECT", description: 'Designed and evaluated multi-agent AI systems using Python, LangChain, vector retrieval, shared memory, and tool orchestration for long-horizon reasoning tasks.', metric: '50+', metricLabel: 'multi-agent evaluation runs', tags: ['Python', 'LangChain', 'RAG', 'Agents', 'Vector Search'], motif: 'constellation', github: '' },
  { number: '02', title: 'GitHub Repository LLM Chatbot', type: 'FULL-STACK APPLICATION', description: 'Built a full-stack RAG chatbot that ingests GitHub repositories, processes code and documentation, indexes them in Elasticsearch, and answers repository-specific questions.', metric: '1,000+', metricLabel: 'files indexed', tags: ['Next.js', 'LangChain', 'Elasticsearch', 'RAG', 'TypeScript'], motif: 'archive', github: '' },
];
export const skills = [
  { name: 'Languages', subtitle: 'The foundations', items: ['Python', 'SQL', 'Java', 'C#', 'C++', 'C', 'JavaScript', 'TypeScript', 'Ruby', 'Kotlin'] },
  { name: 'AI / Data', subtitle: 'Intelligence & insight', items: ['PySpark', 'PyTorch', 'TensorFlow', 'Keras', 'Databricks', 'PostgreSQL', 'Elasticsearch', 'LangChain', 'RAG'] },
  { name: 'Web / Infrastructure', subtitle: 'Systems that endure', items: ['React', 'Next.js', 'Node.js', 'Express', 'Rails', 'AWS', 'Docker', 'Kubernetes', 'Git', 'Linux', 'Firebase', 'Unity'] },
];
export const education = [
  { degree: 'M.S. Computer Science Engineering', date: 'August 2025 – December 2026' },
  { degree: 'B.S. Computer Science Engineering', date: 'August 2022 – December 2025' },
];
