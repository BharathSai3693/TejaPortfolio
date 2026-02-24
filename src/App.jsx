import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

const resumeUrl = '/Tejaswi%20Padigala%20Business%20and%20Data%20Analyst.pdf'
const projectsUrl = '/projects.pdf'
const portfolioUrl = 'https://tejaswipadigala.vercel.app/'

const profile = {
  name: 'Tejaswi Padigala',
  title: 'Business and Data Analyst',
  location: 'Amherst, MA',
  phone: '+1 (908) 338 1441',
  email: 'tejaswipadigala2408@gmail.com',
  summary:
    'Business and Data Analyst with 3+ years of experience driving data-informed decision-making through requirements analysis, process optimization, and advanced analytics. Proficient in SQL, Python, Excel, Tableau, and Power BI to build dashboards, KPI reports, and predictive models that improved operational efficiency by up to 40%. Strong experience partnering with stakeholders, supporting Agile delivery, and translating complex data into actionable business insights in fast-paced environments.',
  initials: 'TP',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tejaswi-padigala',
    },
    {
      label: 'Resume',
      href: resumeUrl,
    },
  ],
}

const highlights = [
  {
    value: '3+ yrs',
    label: 'Business and data analytics experience',
  },
  {
    value: '40%',
    label: 'Manual reporting effort reduced',
  },
  {
    value: '30%',
    label: 'Increase in delivery accuracy',
  },
  {
    value: '25%',
    label: 'Operational efficiency gains delivered',
  },
]

const companies = [
  {
    name: 'University of Massachusetts Amherst',
    role: 'Business and Data Analyst',
  },
  {
    name: 'HCL TECH',
    role: 'Business Analyst',
  },
  {
    name: 'Jawaharlal Nehru Technological University',
    role: 'B.Tech, Information Technology (AI & ML Minors)',
  },
]

const experience = [
  {
    company: 'University of Massachusetts Amherst',
    role: 'Business and Data Analyst',
    location: 'Amherst, MA',
    period: 'Feb 2024 - Dec 2026',
    bullets: [
      'Drove end-to-end business process analysis and optimization using SQL, Python, and advanced Excel, delivering actionable insights that improved operational efficiency by 25%.',
      'Led comprehensive requirements elicitation and documentation (BRDs, functional specifications, user stories) in close collaboration with cross-functional stakeholders, increasing project delivery accuracy by 30%.',
      'Architected and automated enterprise-grade dashboards and KPI reporting solutions using Excel, Tableau, and Power BI, reducing manual reporting effort by 40% and enabling self-service analytics.',
      'Executed strategic, performance, and trend analyses across multiple high-impact initiatives, supporting leadership decision-making and accelerating turnaround time for critical business decisions.',
      'Served as a trusted analytics partner to academic and administrative teams by ensuring data integrity, reporting accuracy, and clear communication of insights to non-technical stakeholders, driving adoption of data-driven practices.',
    ],
  },
  {
    company: 'HCL TECH',
    role: 'Business Analyst',
    location: 'Bangalore, India',
    period: 'Jul 2022 - Jan 2024',
    bullets: [
      'Led end-to-end business and functional requirements analysis for enterprise software upgrade initiatives, ensuring alignment between client objectives, technical feasibility, and delivery timelines.',
      'Built and maintained data models, dashboards, and analytical reports using SQL and Tableau, enabling data-driven decision-making across cross-functional teams.',
      'Supported Agile delivery cycles by facilitating sprint planning, backlog refinement, and retrospectives, contributing to timely and high-quality solution delivery.',
      'Partnered with business stakeholders and technical teams to prioritize features, resolve issues, and improve system usability, while driving process improvements that reduced reporting turnaround time by 25%.',
    ],
  },
]

const projects = [
  {
    name: 'Analysis of User Reviews on E-Commerce Website',
    bullets: [
      'Utilized sentiment analysis to categorize user reviews on an e-commerce website as positive, negative, or neutral, demonstrating proficiency in natural language processing techniques.',
      'Conducted an in-depth analysis of user sentiment to enhance trust between users in e-commerce systems, highlighting the practical application of sentiment analysis in improving user experiences.',
      'Implemented a classification system to automatically categorize user reviews based on the emotional content of the text, showcasing strong analytical skills and attention to detail.',
    ],
  },
  {
    name: 'Feasibility of Bone Fracture Detection Using Microwave Imaging',
    bullets: [
      'Conducted research to assess the viability of microwave imaging technology for detecting bone fractures, utilizing theoretical knowledge and practical experimentation.',
      'Designed and implemented experiments to evaluate the accuracy and effectiveness of microwave imaging compared to traditional imaging techniques like X-rays.',
      'Analyzed data and presented findings, demonstrating the potential of microwave imaging as a non-invasive and cost-effective method for bone fracture detection.',
    ],
  },
  {
    name: 'Prediction of Crop Yield Using Machine Learning Techniques',
    bullets: [
      'Developed and trained machine learning models to predict crop yield based on historical data, weather patterns, soil quality, and other relevant factors, demonstrating a deep understanding of agricultural data analysis.',
      'Implemented feature engineering techniques to preprocess and extract meaningful information from raw agricultural data, improving the accuracy and performance of the predictive models.',
      'Evaluated the performance of the machine learning models using metrics such as accuracy, precision, recall, and F1-score, showcasing the ability to assess and validate model predictions in real-world scenarios.',
    ],
  },
  {
    name: 'Drone Hub Location for the Prime Air Program',
    bullets: [
      'Developed an optimization strategy for drone hub locations, conducting a comprehensive analysis of e-commerce trends, demographic data, and drone technology to propose optimal hub locations across Massachusetts for efficient last-mile delivery.',
      'Utilized data-driven decision making for deployment planning, evaluating factors such as package weight, demand density, and infrastructure to prioritize hubs in Boston, Worcester, and Springfield/Amherst, ensuring maximum coverage and cost efficiency.',
      'Addressed operational and regulatory challenges by assessing FAA drone regulations, battery limitations, and weather constraints while designing a phased deployment plan that balanced feasibility, scalability, and compliance requirements.',
    ],
  },
  {
    name: 'Diabetes Prediction',
    bullets: [
      'Developed machine learning models for diabetes prediction by implementing and evaluating Random Forest, Logistic Regression, Gradient Boosting, and KNN to classify diabetes risk with ~90% accuracy.',
      'Performed data analysis and feature engineering, conducting exploratory data analysis to identify key risk factors such as BMI, age, and smoking for optimal feature selection.',
      'Optimized model performance by applying hyperparameter tuning (Grid Search), managing class imbalances, and minimizing false negatives for high-risk individuals.',
    ],
  },
]

const skills = [
  {
    category: 'Data Analysis',
    items: ['SQL (CTEs, Window Functions)', 'Python (Pandas, NumPy)', 'Excel (Pivot Tables, Power Query, Power Pivot)', 'SAS'],
  },
  {
    category: 'Business Intelligence',
    items: [
      'Tableau',
      'Power BI (DAX, Power Query, Data Modeling)',
      'Dashboard Development',
      'Data Visualization',
      'KPI & Executive Reporting',
    ],
  },
  {
    category: 'Business Analysis',
    items: [
      'BRD/FRD',
      'User Stories & Acceptance Criteria',
      'Requirement Gathering & Prioritization',
      'Stakeholder Communication',
      'Process Mapping',
      'Change Impact Analysis',
    ],
  },
  {
    category: 'Predictive Modeling',
    items: [
      'Descriptive & Inferential Statistics',
      'Regression Analysis',
      'Time Series Forecasting',
      'Classification Models',
      'Trend, Variance & Cohort Analysis',
    ],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'Data Modeling (ER Diagrams, Star/Snowflake Schemas)', 'DBMS'],
  },
  {
    category: 'Cloud & Platforms',
    items: ['Microsoft Azure (Azure SQL, Data Storage, Reporting)', 'Salesforce (CRM Analytics, Data Extraction)'],
  },
  {
    category: 'Project Management',
    items: ['Agile & Scrum Methodologies', 'JIRA', 'MS Project', 'Asana', 'SDLC Support'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Microsoft Office Suite (Excel, PowerPoint, Word)', 'SAP (Reporting & Data Extraction)', 'Confluence'],
  },
]

const education = [
  {
    institution: 'University of Massachusetts Amherst',
    degree: 'Master of Science in Business Analytics',
    location: 'Amherst, MA',
    period: '2024 - 2026',
  },
  {
    institution: 'Jawaharlal Nehru Technological University',
    degree: 'Bachelor of Technology in Information Technology with Minors in AI and ML',
    location: 'Hyderabad, India',
    period: '2019 - 2023',
  },
]

const certifications = [
  {
    name: 'Graduate Certificate in Project Management',
    issuer: 'University of Massachusetts Amherst',
    period: 'Feb 2026',
  },
]

const achievements = [
  {
    title: "Founder's Platinum Milestone - Amway Business (India)",
    details:
      'Achieved the Founder’s Platinum milestone by leading a 1,000+ member team and sustaining $10K+ USD in monthly team turnover. Conducted performance analysis, reviewed productivity metrics, and held structured guidance and review meetings to align goals and improve outcomes.',
  },
  {
    title: 'Member of Innovation and Research – Street Cause, India',
    details:
      'The unit aims to bring about changes in society by developing and advancing new ideas while implementing new processes.',
  },
  {
    title: 'Member of Voice 4 Girls Foundation - Hyderabad, India',
    details:
      'Mentored marginalized adolescents in teaching life-skills through activity-based camps. Served as a counselor for training sessions and debriefs.',
  },
  {
    title: 'Campus Residential Student President, GNITC, Hyderabad, India',
    details: 'Student representative for the residential student community.',
  },
]

function App() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power3.out' } })
        .from('.site-header', { y: -16, opacity: 0 })
        .from('.hero-content > *', { y: 18, opacity: 0, stagger: 0.12 }, '-=0.4')
        .from(
          '.accent-text, .accent-soft',
          { y: 10, opacity: 0, scale: 0.98, stagger: 0.08 },
          '-=0.35'
        )
        .from('.hero-card', { y: 24, opacity: 0 }, '-=0.35')

      gsap.to('.hero-glow', {
        scale: 1.08,
        opacity: 0.9,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.utils.toArray('.section').forEach((section) => {
        const items = section.querySelectorAll(
          '.section-header, .logo-pill, .stack-card, .project-card, .contact-card, .contact-form, .timeline-item'
        )

        if (!items.length) {
          return
        }

        gsap.from(items, {
          opacity: 0,
          y: 24,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="page" ref={rootRef}>
      <header className="site-header">
        <div className="logo">TP</div>
        <nav className="nav">
          <a href="#stack">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-content">
            <p className="eyebrow">{profile.title}</p>
            <h1>
              I&apos;m <span className="accent-text">{profile.name}</span>, a{' '}
              <span className="accent-soft">business and data analyst</span> with 3+ years of experience driving data-informed
              decision-making.
            </h1>
            <p className="lead">{profile.summary}</p>
            <div className="button-row">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn ghost" href={resumeUrl} target="_blank" rel="noreferrer">
                View resume
              </a>
            </div>
            <div className="hero-meta">
              <span>{profile.email}</span>
              <span>{profile.phone}</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-avatar">
              <img src="/profile.jpeg" alt={`${profile.name} profile`} />
              <div className="hero-glow" />
            </div>
            <div className="hero-stats">
              {highlights.map((item) => (
                <div key={item.value} className="stat">
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
            <div className="hero-links">
              {profile.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="chip chip-highlight">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-header">
            <h2>Professional experience</h2>
            <p className="muted">
              Business analysis and analytics delivery across higher education and enterprise technology programs.
            </p>
          </div>
          <div className="timeline">
            {experience.map((role) => (
              <div key={role.company} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <h3>{role.role}</h3>
                    <p className="muted">
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <span className="badge ghost">{role.period}</span>
                </div>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-header">
            <h2>Education</h2>
            <p className="muted">Academic foundation in business analytics and information technology.</p>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.institution} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <h3>{item.degree}</h3>
                    <p className="muted">{item.institution}</p>
                    <p className="muted">{item.location}</p>
                  </div>
                  <span className="badge ghost">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="logo-row">
            {certifications.map((cert) => (
              <div key={cert.name} className="logo-pill">
                {cert.name} · {cert.issuer} · {cert.period}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-header">
            <h2>Skills</h2>
            <p className="muted">Analytics, business intelligence, and stakeholder-focused delivery capabilities.</p>
          </div>
          <div className="stack-grid">
            {skills.map((skill) => (
              <div key={skill.category} className="stack-card">
                <h3>{skill.category}</h3>
                <div className="chip-row">
                  {skill.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <h2>Project experience</h2>
            <p className="muted">Project details sourced from the projects portfolio.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a key={project.name} className="project-card" href={projectsUrl} target="_blank" rel="noreferrer">
                <div className="project-top">
                  <h3>{project.name}</h3>
                </div>
                <ul className="project-list">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="section-header">
            <h2>Achievements & leadership</h2>
            <p className="muted">Highlights from community leadership and organizational impact.</p>
          </div>
          <div className="stack-grid">
            {achievements.map((item) => (
              <div key={item.title} className="stack-card">
                <h3>{item.title}</h3>
                <p className="muted">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-header">
            <h2>Get in touch</h2>
            <p className="muted">Reach out for business analysis, data analytics, and reporting support.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div>
                <p className="eyebrow">Email</p>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div>
                <p className="eyebrow">Phone</p>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
              <div className="contact-actions">
                <a className="btn primary" href={`mailto:${profile.email}`}>
                  Start a project
                </a>
                <a className="btn ghost" href={resumeUrl} target="_blank" rel="noreferrer">
                  Resume PDF
                </a>
              </div>
            </div>
            <form className="contact-form">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Email address" />
              </label>
              <label>
                Message
                <textarea rows="4" placeholder="Tell me about your project" />
              </label>
              <button className="btn primary" type="button">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 {profile.name}. Built for analytics, reporting, and data-driven decision-making.</p>
      </footer>
    </div>
  )
}

export default App
