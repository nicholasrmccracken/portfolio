import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const profile = {
  name: "Nicholas McCracken",
  role: "Software Engineer • AI/ML • Data Engineering",
  summary:
    "I'm a software engineer and M.S. CSE student at Ohio State interested in building intelligent systems, data infrastructure, and products that solve real problems.",
  status: "Graduating December 2026",
  location: "Columbus, OH",
  links: {
    github: "https://github.com/nicholasrmccracken",
    linkedin: "https://linkedin.com/in/nicholasrmccracken",
    email: "mailto:nicholas.r.mccracken@gmail.com",
    resume: "/resume.pdf",
  },
};

const experience = [
  {
    company: "Nationwide",
    role: "AI/ML Engineering Intern",
    date: "May 2026 – Aug 2026",
    bullets: [
      "Built a distributed claims risk classification pipeline on AWS using PySpark, engineering features from claim severity, geography, and historical data to train tree-based models achieving 75% accuracy.",
      "Developed an AI agent that generated deployable ML repositories from standardized templates, reducing onboarding time by 25%.",
      "Expanded regression test coverage by 35% across 5 production models using Jenkins, PyTest, and AWS.",
    ],
  },
  {
    company: "The Ohio State University",
    role: "Graduate Teaching Assistant",
    date: "Jan 2026 – Dec 2026",
    bullets: [
      "Supported an upper-level computer graphics and animation course covering Unity, C#, real-time rendering, procedural animation, and agent-based simulation.",
      "Mentored 100+ students.",
    ],
  },
  {
    company: "Procter & Gamble",
    role: "Data Engineering Intern",
    date: "May 2025 – Aug 2025",
    bullets: [
      "Built a full-stack sales forecasting tool using Plotly Dash, PostgreSQL, Docker, and Kubernetes.",
      "Developed a baseline prediction algorithm that revealed $3M+ in profit optimization opportunities.",
      "Designed Databricks and SQL Server validation workflows that reduced downstream anomalies by 33%.",
    ],
  },
  {
    company: "Procter & Gamble",
    role: "Software Engineering Intern",
    date: "May 2024 – Aug 2024",
    bullets: [
      "Built a PyQt, Pandas, and Selenium automation tool saving roughly 750 hours annually.",
      "Developed a Java/Selenium testing framework increasing test coverage by 125%.",
      "Built PySpark ETL pipelines on AWS that reduced data delivery time by 80%.",
    ],
  },
];

const projects = [
  {
    index: "01",
    title: "Multi-Agent Context Engineering",
    type: "Master's Project",
    description:
      "Designed and evaluated multi-agent AI systems using Python, LangChain, vector retrieval, shared memory, and tool orchestration for long-horizon reasoning.",
    highlight: "50+",
    highlightLabel: "multi-agent evaluation runs",
    tags: ["Python", "LangChain", "RAG", "Agents", "Vector Search"],
    href: "#",
  },
  {
    index: "02",
    title: "GitHub Repository LLM Chatbot",
    type: "Full-stack AI",
    description:
      "Built a full-stack RAG application that ingests GitHub repositories, indexes code and documentation in Elasticsearch, and answers repository-specific questions.",
    highlight: "1,000+",
    highlightLabel: "files indexed",
    tags: ["Next.js", "LangChain", "Elasticsearch", "RAG", "TypeScript"],
    href: "#",
  },
];

const skills = [
  { category: "Languages", items: ["Python", "SQL", "Java", "C#", "C++", "C", "JavaScript", "TypeScript", "Ruby", "Kotlin"] },
  { category: "AI / Data", items: ["PySpark", "PyTorch", "TensorFlow", "Databricks", "PostgreSQL", "Elasticsearch", "LangChain", "RAG"] },
  { category: "Web / Infrastructure", items: ["React", "Next.js", "Node.js", "Express", "AWS", "Docker", "Kubernetes", "Git", "Linux", "Firebase"] },
];

const education = [
  { degree: "M.S. Computer Science Engineering", date: "August 2025 – December 2026" },
  { degree: "B.S. Computer Science Engineering", date: "August 2022 – December 2025" },
];

function ExternalLink({ href, children, label }: { href: string; children: React.ReactNode; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="icon-link">
      {children}
    </a>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <h2>{title}</h2>
      <div aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav-shell">
        <nav className="nav container" aria-label="Main navigation">
          <a className="monogram" href="#about" aria-label="Nicholas McCracken, home">NM<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
          </div>
          <a className="resume-link" href={profile.links.resume} download>
            Resume <Download size={14} strokeWidth={1.8} />
          </a>
        </nav>
      </header>

      <main>
        <section id="about" className="hero container">
          <div className="eyebrow reveal"><span className="status-dot" /> Available for 2026 opportunities</div>
          <h1 className="reveal delay-1">Nicholas<br /><span>McCracken</span></h1>
          <div className="hero-grid reveal delay-2">
            <div>
              <p className="role">{profile.role}</p>
              <p className="summary">{profile.summary}</p>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">View Projects <ArrowDown size={16} /></a>
              <div className="socials">
                <ExternalLink href={profile.links.github} label="GitHub"><Github size={18} /></ExternalLink>
                <ExternalLink href={profile.links.linkedin} label="LinkedIn"><Linkedin size={18} /></ExternalLink>
                <a href={profile.links.email} className="icon-link" aria-label="Email Nicholas"><Mail size={18} /></a>
              </div>
            </div>
          </div>
          <div className="hero-meta reveal delay-3">
            <span>{profile.status}</span><span><MapPin size={14} /> {profile.location}</span>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionHeading number="01" title="Experience" />
          <div className="timeline">
            {experience.map((job) => (
              <article className="experience-row" key={`${job.company}-${job.role}`}>
                <div className="timeline-mark"><span /></div>
                <div className="experience-meta"><h3>{job.company}</h3><p>{job.role}</p><time>{job.date}</time></div>
                <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionHeading number="02" title="Selected Projects" />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top"><span>{project.index} / {project.type}</span><Github size={19} /></div>
                <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p></div>
                <div className="project-stat"><strong>{project.highlight}</strong><span>{project.highlightLabel}</span></div>
                <div className="project-footer">
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.href} aria-label={`View ${project.title} on GitHub`}>GitHub <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionHeading number="03" title="Skills" />
          <div className="skills-list">
            {skills.map((group) => <div className="skill-row" key={group.category}><h3>{group.category}</h3><p>{group.items.join(" · ")}</p></div>)}
          </div>
        </section>

        <section id="education" className="section container">
          <SectionHeading number="04" title="Education" />
          <div className="education-card">
            <div className="school"><span className="school-mark">O</span><div><h3>The Ohio State University</h3><p>Columbus, Ohio</p></div></div>
            <div className="degrees">
              {education.map((item) => <div key={item.degree}><h4>{item.degree}</h4><time>{item.date}</time></div>)}
            </div>
            <div className="gpa"><span>GPA</span><strong>3.9 <small>/ 4.0</small></strong></div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <p className="eyebrow">Let&apos;s build something useful.</p>
          <h2>Interested in software engineering,<br />AI/ML, and data opportunities.</h2>
          <a className="email-link" href={profile.links.email}>nicholas.r.mccracken@gmail.com <ArrowUpRight size={22} /></a>
          <div className="contact-footer">
            <span>© {new Date().getFullYear()} Nicholas McCracken</span>
            <div><ExternalLink href={profile.links.github} label="GitHub"><Github size={18} /></ExternalLink><ExternalLink href={profile.links.linkedin} label="LinkedIn"><Linkedin size={18} /></ExternalLink><a href={profile.links.email} className="icon-link" aria-label="Email"><Mail size={18} /></a></div>
          </div>
        </section>
      </main>
    </>
  );
}
