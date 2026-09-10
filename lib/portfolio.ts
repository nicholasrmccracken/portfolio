export const profile = {
  name: 'Nicholas McCracken',
  title: 'Software Engineer • AI/ML • Data Engineering',
  description: "I'm a software engineer and M.S. CSE student at Ohio State with experience across backend systems, data engineering, cloud infrastructure, and AI/ML.",
  portfolio: 'https://nicholasmccracken.vercel.app/',
  github: 'https://github.com/nicholasrmccracken',
  contact: "I'm always happy to connect with engineers, founders, recruiters, or anyone solving interesting software problems.",
  status: 'Graduating December 2026 • Columbus, OH',
  linkedin: 'https://www.linkedin.com/in/nicholasrmccracken/',
  email: 'mailto:nicholas.r.mccracken@gmail.com',
  resume: '/Nicholas_McCracken_resume.pdf',
};
export const navigation = ['Experience', 'Projects', 'Education', 'Skills', 'Contact'];
export const experiences = [
  { company: 'Nationwide', role: 'AI/ML Engineering Intern', date: 'May 2026 – Aug. 2026', location: 'Columbus, OH', kind: 'AI & MACHINE LEARNING', points: [
    'Built a distributed claims risk pipeline on AWS with PySpark, engineering features from claim severity, geography, and historical data to improve model accuracy 75% over baseline.',
    'Developed an AI agent that generated production-ready ML repositories with batch and real-time inference workflows, REST APIs, and automated validation suites, reducing model onboarding time by 25%.',
    'Expanded regression test coverage by 35% across 5 production models using AWS, Jenkins, and PyTest.',
  ] },
  { company: 'Procter & Gamble', role: 'Data Engineering Intern', date: 'May 2025 – Aug. 2025', location: 'Cincinnati, OH', kind: 'DATA ENGINEERING', points: [
    'Built and deployed a full-stack sales forecasting platform with Plotly Dash, PostgreSQL, Docker, and Kubernetes to support promotion analytics and lift estimation.',
    'Developed a baseline sales prediction algorithm, revealing $3M+ in profit optimization across key product lines.',
    'Designed validation workflows in Databricks and SQL Server, reducing downstream anomalies by 33%.',
  ] },
  { company: 'Procter & Gamble', role: 'Software Engineering Intern', date: 'May 2024 – Aug. 2024', location: 'Cincinnati, OH', kind: 'SOFTWARE ENGINEERING', points: [
    'Built a PyQt and Selenium form-automation tool that eliminated 750 hours of manual work annually.',
    'Developed a reusable Java and Selenium testing framework that increased automated test coverage by 125%.',
    'Built PySpark ETL pipelines in Databricks on AWS, cutting data delivery time by 80%.',
  ] },
  { company: 'The Ohio State University', role: 'Graduate Teaching Assistant', date: 'Jan. 2026 – Present', location: 'Columbus, OH', kind: 'COMPUTER GRAPHICS', points: [
    'Support an upper-level graphics course covering Unity, C#, real-time rendering, and agent-based simulation.',
    'Mentor 100+ students through office hours and review sessions while grading assignments, labs, and exams.',
  ] },
];
export const projects = [
  { number: '01', title: 'RepoRover — Chat with a Codebase', icon: '🔮', type: 'REPOSITORY INTELLIGENCE', description: 'A repository exploration and security-assessment tool that pairs conversational code questions with a navigable file tree and code viewer. The backend ingests GitHub repositories, chunks and embeds source code, and indexes it in Elasticsearch for retrieval-augmented responses.', highlight: '1,000+ repository files indexed', tags: ['Python', 'Flask', 'TypeScript', 'Next.js', 'React', 'LangChain', 'OpenAI API', 'Elasticsearch', 'RAG'], github: 'https://github.com/nicholasrmccracken/capstone-ai' },
  { number: '02', title: 'Dissonance — Music Discovery & Reviews', icon: '🎵', type: 'MOBILE DEVELOPMENT', description: 'An Android app for exploring the Discogs catalog and sharing album reviews. It combines Firebase-backed accounts and reviews with paginated discovery, ViewModel-based UI state, image loading, and resilient connectivity handling.', tags: ['Kotlin', 'Android', 'Retrofit', 'Firebase', 'Paging', 'Coil'], github: 'https://github.com/nicholasrmccracken/dissonance-music-reviews' },
  { number: '03', title: 'LLM Fine-Tuning & Data Filtering', icon: '📜', type: 'MODEL TRAINING & EVALUATION', description: 'An experimental pipeline for testing how instruction-data filtering affects supervised fine-tuning. I compared length, lexical-diversity, deduplication, and combined filters on Llama 3.2 1B, with configurable training, LoRA adapter merging, and benchmark evaluation.', highlight: '4 filtering strategies across 15 runs', tags: ['Python', 'Tinker', 'Hugging Face', 'PyTorch', 'PEFT', 'LoRA', 'OLMES'], github: 'https://github.com/nicholasrmccracken/llm-sft-data-filtering-evals' },
  { number: '04', title: 'Mathematical Symbol Recognition', icon: '✍️', type: 'COMPUTER VISION', description: 'A PyTorch image classifier that recognizes 16 handwritten mathematical symbols using a three-layer convolutional network. The project includes image preprocessing, training on 7,557 images, early stopping, and evaluation on a separate 1,010-image dataset.', highlight: '16 symbol classes • 7,557 training images', tags: ['Python', 'PyTorch', 'CNNs', 'Computer Vision', 'Jupyter'], github: 'https://github.com/nicholasrmccracken/math-symbol-cnn-classifier' },
  { number: '05', title: 'TravelTabs — Shared Trip Expenses', icon: '🧾', type: 'FULL-STACK DEVELOPMENT', description: 'A collaborative Rails app for managing group trips, recording shared expenses, allocating costs, and reviewing balances. My contributions focused on relational data modeling, authentication flows, email-based user lookup, validation, and trip and expense controller logic.', tags: ['Ruby on Rails', 'SQLite', 'Devise', 'Tailwind CSS', 'Turbo', 'Stimulus'], github: 'https://github.com/nicholasrmccracken/travel-tabs-expense-splitter' },
  { number: '06', title: 'Airport Task Robot', icon: '🤖', type: 'ROBOTICS & CONTROL', description: 'A physical task robot built around closed-loop motion and environmental sensing. It uses PID control, wheel encoders, position correction, sensors, and servo-driven mechanisms to navigate and complete tasks reliably.', tags: ['C++', 'PID Control', 'Encoders', 'Sensors', 'Servos'], github: 'https://github.com/nicholasrmccracken/airport-task-robot' },
];
export const skills = [
  { name: 'Languages', subtitle: 'The foundations', items: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'C#', 'C++', 'C', 'Kotlin', 'Ruby', 'MATLAB'] },
  { name: 'AI, ML & Data', subtitle: 'Intelligence & insight', items: ['Machine Learning', 'LLMs', 'Multi-Agent Systems', 'PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'PySpark', 'Databricks', 'Tinker', 'PEFT / LoRA', 'LangChain', 'RAG', 'Vector Search', 'Hybrid Search', 'ETL', 'NumPy', 'pandas', 'scikit-learn'] },
  { name: 'Web, Mobile & Graphics', subtitle: 'Interfaces & experiences', items: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'REST APIs', 'Plotly Dash', 'PyQt', 'Ruby on Rails', 'Tailwind CSS', 'Android', 'Retrofit', 'Unity'] },
  { name: 'Databases & Services', subtitle: 'Knowledge & connections', items: ['PostgreSQL', 'SQLite', 'SQL Server', 'Elasticsearch', 'Firebase Authentication', 'Cloud Firestore', 'OpenAI API'] },
  { name: 'Cloud, DevOps & Testing', subtitle: 'Systems that endure', items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'PyTest', 'Selenium', 'Git', 'Linux', 'Jupyter', 'Gradle', 'Bundler'] },
];
export const education = [
  { university: 'The Ohio State University', degree: 'M.S. Computer Science and Engineering', date: 'August 2025 – December 2026', gpa: '3.9 / 4.0', location: 'Columbus, OH' },
  { university: 'The Ohio State University', degree: 'B.S. Computer Science and Engineering', date: 'August 2022 – December 2025', gpa: '3.9 / 4.0', location: 'Columbus, OH' },
];
export const siteMetadata = {
  title: 'Nicholas McCracken | Software Engineer',
  description: 'Software engineering portfolio of Nicholas McCracken, featuring work across backend systems, AI/ML, data engineering, cloud infrastructure, and full-stack development.',
};
