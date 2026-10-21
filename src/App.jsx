import { useState } from 'react'
import './App.css'

import aiCert from './assets/Ai workshop.jpg'
import internshipCert from './assets/internship.jpg'
import iotCert from './assets/Npteliot.jpg'

const navigationGroups = [
  {
    label: 'OVERVIEW',
    items: [
      { id: 'dashboard', label: 'Dashboard', mark: '00' },
    ],
  },
  {
    label: 'PORTFOLIO',
    items: [
      { id: 'about', label: 'Profile / About me', mark: '01' },
      { id: 'education', label: 'Education', mark: '02' },
      { id: 'skills', label: 'Technical skills', mark: '03' },
      { id: 'soft-skills', label: 'Soft skills', mark: '04' },
      { id: 'projects', label: 'Projects', mark: '05' },
      { id: 'experience', label: 'Experience / Internship', mark: '06' },
      { id: 'certifications', label: 'Certificates', mark: '07' },
      { id: 'languages', label: 'Languages', mark: '08' },
      { id: 'contact', label: 'Contact info', mark: '09' },
    ],
  },
]

const pageDetails = {
  dashboard: { title: 'Dashboard', description: 'A quick overview of my work, learning, and current focus.' },
  projects: { title: 'Projects', description: 'Things I have designed, built, and learned from.' },
  skills: { title: 'Technical skills', description: 'The tools and technologies I use to bring ideas to life.' },
  'soft-skills': { title: 'Soft skills', description: 'How I collaborate, solve problems, and keep learning.' },
  experience: { title: 'Experience / Internship', description: 'Where I have put my skills to work.' },
  about: { title: 'Profile / About me', description: 'A little context about the person behind the projects.' },
  education: { title: 'Education', description: 'My academic path so far.' },
  certifications: { title: 'Certificates', description: 'Courses, workshops, and milestones beyond the classroom.' },
  languages: { title: 'Languages', description: 'Languages I speak.' },
  contact: { title: 'Contact info', description: 'Have a project or opportunity in mind? Let’s connect.' },
}

const projects = [
  {
    title: 'SkillMorph',
    category: 'LEARNING PLATFORM',
    description: 'A skill-building platform with guided learning pathways, roadmap tracking, and a modern user experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Vite'],
    featured: true,
  },
  {
    title: 'CMR VibeWaves',
    category: 'LIVE BROADCASTING',
    description: 'A web-based live broadcasting portal designed for real-time streaming, registration, and content management.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    title: 'Bank Management System',
    category: 'DATABASE APPLICATION',
    description: 'A command-line banking application for account creation, transactions, and record management.',
    tags: ['JavaScript', 'PHP', 'MySQL', 'CLI'],
  },
]

const skillGroups = [
  { title: 'Programming', skills: ['C', 'C++', 'Java', 'Python'], mark: '01' },
  { title: 'Web technologies', skills: ['HTML', 'CSS', 'JavaScript', 'PHP'], mark: '02' },
  { title: 'Frameworks', skills: ['React.js', 'Node.js', 'Express.js', 'Next.js'], mark: '03' },
  { title: 'Database', skills: ['SQL', 'PostgreSQL', 'MongoDB', 'DBMS'], mark: '04' },
  { title: 'Cloud & IoT', skills: ['AWS (Basic)', 'IoT Architecture', 'Sensors'], mark: '05' },
  { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Antigravity', 'Postman'], mark: '06' },
]

const softSkills = ['Time Management', 'Communication', 'Team Collaboration', 'Problem Solving', 'Adaptability']
const languages = ['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada']

const certifications = [
  {
    image: aiCert,
    title: 'AI Workshop Participation',
    issuer: 'Organized by Be10x',
    year: '2025',
    description: 'Hands-on experience with artificial intelligence concepts, machine learning, neural networks, and collaborative project work.',
  },
  {
    image: internshipCert,
    title: 'Full Stack Developer Internship',
    issuer: 'Eduphoenix Solutions Pvt Ltd',
    year: '2025',
    description: 'Professional internship focused on web applications using React, Node.js, and MongoDB, including contributions to client projects.',
  },
  {
    image: iotCert,
    title: 'NPTEL IoT Certification',
    issuer: 'NPTEL (IIT)',
    year: '2024',
    description: 'Coursework in Internet of Things architecture, sensors, and cloud integration.',
  },
]

const education = [
  {
    title: 'Master of Computer Applications (MCA)',
    school: 'East Point College of Higher Education',
    status: 'Currently pursuing',
    current: true,
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    school: 'CMR University, Bengaluru',
    detail: 'Cloud Computing',
    status: 'Completed',
    result: '8.48 CGPA',
  },
  {
    title: 'Pre-University College (PCMC)',
    school: 'Indranagar Composite PU College, Bengaluru',
    status: 'June 2021 - April 2023',
  },
  {
    title: 'High School (10th Standard)',
    school: "St Joseph's Indian High School, Bengaluru",
    status: 'June 2020 - April 2021',
  },
]

const experienceItems = [
  'Developed web applications using React.js and Node.js.',
  'Collaborated in an agile team environment and participated in code reviews.',
  'Built a hotel booking system with frontend and backend integration.',
  'Worked with APIs, databases, and deployment basics.',
]

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [menuOpen, setMenuOpen] = useState(false)
  const activeDetails = pageDetails[activePage]

  const navigateTo = (page) => {
    setActivePage(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`} aria-label="Portfolio navigation">
        <button className="brand-lockup" onClick={() => navigateTo('dashboard')} aria-label="Go to dashboard">
          <span className="brand-mark">YC</span>
          <span className="brand-copy">
            <strong>Yeshwanth C</strong>
            <small>DEVELOPER PORTFOLIO</small>
          </span>
        </button>

        <div className="sidebar-status"><span className="status-indicator" /> MCA STUDENT <span className="status-divider">/</span> DEVELOPER</div>

        <nav className="side-navigation" aria-label="Main menu">
          {navigationGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <p className="nav-group-label">{group.label}</p>
              {group.items.map((item) => (
                <button
                  className={`side-link ${activePage === item.id ? 'side-link-active' : ''}`}
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  aria-current={activePage === item.id ? 'page' : undefined}
                >
                  <span className="side-link-mark">{item.mark}</span>
                  <span>{item.label}</span>
                  {activePage === item.id && <span className="side-link-indicator" />}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <span className="sidebar-bottom-label">OPEN TO OPPORTUNITIES</span>
          <a href="mailto:yeshccb45@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
          <span className="sidebar-copyright">© {new Date().getFullYear()} Yeshwanth C</span>
        </div>
      </aside>

      {menuOpen && <button className="sidebar-backdrop" onClick={() => setMenuOpen(false)} aria-label="Close navigation" />}

      <main className="app-main">
        <header className="topbar">
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
          <div className="topbar-location"><span>PORTFOLIO</span><span className="breadcrumb-slash">/</span><strong>{activeDetails.title.toUpperCase()}</strong></div>
          <div className="topbar-status"><span className="status-indicator" /> AVAILABLE FOR OPPORTUNITIES</div>
        </header>

        <div className="page-view" key={activePage}>
          {activePage === 'dashboard' && <Dashboard navigateTo={navigateTo} />}
          {activePage === 'about' && <AboutPage />}
          {activePage === 'skills' && <SkillsPage />}
          {activePage === 'soft-skills' && <SoftSkillsPage />}
          {activePage === 'experience' && <ExperiencePage />}
          {activePage === 'projects' && <ProjectsPage />}
          {activePage === 'education' && <EducationPage />}
          {activePage === 'certifications' && <CertificationsPage />}
          {activePage === 'languages' && <LanguagesPage />}
          {activePage === 'contact' && <ContactPage />}
        </div>
      </main>
    </div>
  )
}

function Dashboard({ navigateTo }) {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark">01</span> MCA STUDENT <span className="eyebrow-divider">/</span> FULL STACK DEVELOPER</p>
          <h1>Curiosity, code,<br /><span>and what’s next.</span></h1>
          <p className="hero-description">I’m Yeshwanth, a developer building thoughtful web experiences. BCA graduate with an 8.48 CGPA, now pursuing my MCA at East Point College of Higher Education.</p>
          <div className="hero-actions">
            <button className="button-primary" onClick={() => navigateTo('projects')}>Explore projects <span aria-hidden="true">↗</span></button>
            <button className="button-quiet" onClick={() => navigateTo('contact')}>Get in touch <span aria-hidden="true">→</span></button>
          </div>
        </div>
        <div className="terminal-card" aria-label="Developer profile summary">
          <div className="terminal-header">
            <div className="terminal-controls"><i /><i /><i /></div>
            <span>profile.ts</span>
            <span className="terminal-menu">•••</span>
          </div>
          <div className="terminal-code">
            <p><span className="code-muted">01</span> <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}</p>
            <p><span className="code-muted">02</span> &nbsp; name: <span className="code-string">'Yeshwanth C'</span>,</p>
            <p><span className="code-muted">03</span> &nbsp; focus: <span className="code-string">'Full stack'</span>,</p>
            <p><span className="code-muted">04</span> &nbsp; degree: <span className="code-string">'MCA'</span>,</p>
            <p><span className="code-muted">05</span> &nbsp; learning: <span className="code-string">'Every day'</span></p>
            <p><span className="code-muted">06</span> {'}'}</p>
            <div className="terminal-prompt"><span>➜</span> ready_to_build<span className="cursor-block" /></div>
          </div>
          <div className="terminal-footer"><span>LOCAL / BENGALURU</span><span>UTF-8</span></div>
        </div>
      </section>

      <section className="stat-grid" aria-label="Portfolio highlights">
        <StatCard label="BCA RESULT" value="8.48" suffix="CGPA" tone="blue" />
        <StatCard label="CURRENTLY" value="MCA" suffix="IN PROGRESS" tone="lime" />
        <StatCard label="SELECTED WORK" value="03" suffix="PROJECTS" tone="coral" />
        <StatCard label="DEVELOPER TOOLKIT" value="07" suffix="SKILL AREAS" tone="teal" />
      </section>

      <div className="dashboard-lower">
        <section className="dashboard-section-block">
          <SectionBar title="Selected projects" action="All projects" onAction={() => navigateTo('projects')} />
          <div className="dashboard-project-list">
            {projects.slice(0, 2).map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
          </div>
        </section>

        <aside className="dashboard-aside">
          <section className="quick-panel">
            <SectionBar title="Explore" />
            <div className="quick-links">
              {[
                ['about', 'Profile / About me', 'A little about my background'],
                ['education', 'Education', 'MCA, BCA, and earlier studies'],
                ['skills', 'Technical skills', 'Languages, frameworks, and tools'],
                ['soft-skills', 'Soft skills', 'How I work and collaborate'],
                ['projects', 'Projects', 'Selected development work'],
                ['experience', 'Experience / Internship', 'Full stack internship'],
                ['certifications', 'Certificates', 'Courses and workshops'],
                ['languages', 'Languages', 'English, Hindi, Telugu, Tamil, Kannada'],
                ['contact', 'Contact info', 'Email and professional profiles'],
              ].map(([page, title, detail], index) => (
                <button className="quick-link" key={page} onClick={() => navigateTo(page)}>
                  <span className="quick-link-number">0{index + 1}</span>
                  <span className="quick-link-copy"><strong>{title}</strong><small>{detail}</small></span>
                  <span className="quick-link-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </section>
          <section className="focus-panel">
            <span className="focus-label">CURRENT FOCUS</span>
            <h3>Learning by building.</h3>
            <p>Exploring full-stack development, cloud fundamentals, and practical ways to make technology useful.</p>
            <div className="focus-tags"><span>REACT</span><span>NODE.JS</span><span>PYTHON</span></div>
          </section>
        </aside>
      </div>
      <footer className="page-footer"><span>Designed and built by Yeshwanth C</span><span>Made with curiosity <b>✳</b></span></footer>
    </div>
  )
}

function PageHeading({ eyebrow, title, description }) {
  return (
    <div className="page-heading">
      <p className="eyebrow"><span className="eyebrow-mark">{eyebrow}</span> PORTFOLIO / {title.toUpperCase()}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="01" title="Profile / About me" description="A little context about the person behind the projects." />
      <div className="about-layout">
        <article className="content-panel about-copy">
          <span className="panel-index">01 / INTRODUCTION</span>
          <h2>Making ideas useful through technology.</h2>
          <p>I’m Yeshwanth C, a BCA graduate specializing in Cloud Computing and currently pursuing my Master of Computer Applications at East Point College of Higher Education.</p>
          <p>I’m interested in full-stack development and artificial intelligence, and enjoy building clear, user-focused applications with technologies such as React.js, Node.js, and MongoDB. I bring hands-on experience from an internship and a steady curiosity about how software can solve practical problems.</p>
          <p>My goal is to keep growing as a developer, contribute to thoughtful products, and learn by working with people who care about craft and impact.</p>
        </article>
        <aside className="about-side-stack">
          <div className="content-panel identity-card">
            <span className="panel-index">02 / RIGHT NOW</span>
            <div className="identity-monogram">YC<span>.</span></div>
            <h3>Student by day.<br />Builder every day.</h3>
            <p>Currently pursuing MCA in Bengaluru, India.</p>
          </div>
          <div className="content-panel about-focus-card">
            <span className="panel-index">03 / AREAS OF INTEREST</span>
            <div className="about-focus-list"><span>Full-stack development</span><span>Cloud computing</span><span>Artificial intelligence</span></div>
          </div>
        </aside>
      </div>
      <section className="content-panel community-panel">
        <span className="panel-index">04 / BEYOND THE SCREEN</span>
        <h2>Community involvement</h2>
        <div className="community-stats"><strong>90 <small>hours of community service</small></strong><strong>30 <small>hours in a community internship</small></strong></div>
      </section>
    </div>
  )
}

function SkillsPage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="03" title="Technical skills" description="The tools and technologies I use to bring ideas to life." />
      <div className="skill-page-grid">
        {skillGroups.map((group) => <SkillCategory group={group} key={group.title} />)}
      </div>
      <div className="skills-note"><span className="status-indicator" /><p>Skills grow with every project. This toolkit is always evolving.</p></div>
    </div>
  )
}

function SoftSkillsPage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="04" title="Soft skills" description="How I collaborate, solve problems, and keep learning." />
      <div className="soft-skill-list">
        {softSkills.map((skill, index) => (
          <article className={`soft-skill-item soft-skill-${(index % 3) + 1}`} key={skill}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{skill}</h2>
            <span className="soft-skill-mark" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </div>
  )
}

function ExperiencePage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="06" title="Experience / Internship" description="Where I have put my skills to work." />
      <article className="content-panel experience-entry">
        <div className="experience-date"><span>JUN 2025</span><i /><span>AUG 2025</span></div>
        <div className="experience-details">
          <span className="featured-label">INTERNSHIP</span>
          <h2>Full Stack Developer Intern</h2>
          <p className="company-line">Eduphoenix Solutions Pvt Ltd <span>· Bengaluru</span></p>
          <ul>{experienceItems.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="tag-row"><Tag>React.js</Tag><Tag>Node.js</Tag><Tag>APIs</Tag><Tag>Databases</Tag></div>
        </div>
      </article>
      <section className="experience-note"><span className="panel-index">WHAT I VALUE</span><p>Curiosity, collaboration, clean communication, and learning from real projects.</p></section>
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="05" title="Projects" description="Things I have designed, built, and learned from." />
      <div className="project-page-grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
      </div>
      <div className="project-note"><span>MORE IDEAS IN PROGRESS</span><p>Every project is another chance to explore, improve, and build with intention.</p></div>
    </div>
  )
}

function EducationPage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="02" title="Education" description="My academic path so far." />
      <div className="education-list">
        {education.map((item, index) => (
          <article className={`education-entry ${item.current ? 'education-current' : ''}`} key={item.title}>
            <div className="education-marker"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
            <div className="education-copy">
              <div className="education-entry-top"><span className="education-status">{item.status}</span>{item.result && <strong className="education-result">{item.result}</strong>}</div>
              <h2>{item.title}</h2>
              <p>{item.school}</p>
              {item.detail && <span className="education-detail">{item.detail}</span>}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function CertificationsPage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="07" title="Certificates" description="Courses, workshops, and milestones beyond the classroom." />
      <div className="certification-grid">
        {certifications.map((item, index) => <CertItem item={item} index={index} key={item.title} />)}
      </div>
    </div>
  )
}

function LanguagesPage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="08" title="Languages" description="Languages I speak." />
      <div className="language-page-grid">
        {languages.map((language, index) => (
          <article className={`language-page-card language-tone-${(index % 3) + 1}`} key={language}>
            <span>0{index + 1} / LANGUAGE</span>
            <h2>{language}</h2>
          </article>
        ))}
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="content-page">
      <PageHeading eyebrow="09" title="Contact info" description="Have a project or opportunity in mind? Let’s connect." />
      <section className="contact-callout">
        <span className="panel-index">OPEN TO OPPORTUNITIES</span>
        <h2>Good things start<br />with a conversation.</h2>
        <p>I’m always glad to connect about projects, internships, and ideas in technology.</p>
        <a className="button-primary" href="mailto:yeshccb45@gmail.com">Email me <span aria-hidden="true">↗</span></a>
      </section>
      <div className="contact-page-grid">
        <ContactItem mark="@" title="Email" value="yeshccb45@gmail.com" link="mailto:yeshccb45@gmail.com" />
        <ContactItem mark="in" title="LinkedIn" value="Connect" link="https://linkedin.com/in/yeshwanth-c1270" />
        <ContactItem mark="GH" title="GitHub" value="yeshccb45-bit" link="https://github.com/yeshccb45-bit" />
      </div>
    </div>
  )
}

function SectionBar({ title, action, onAction }) {
  return (
    <div className="section-bar">
      <h2>{title}</h2>
      {action && <button className="text-action" onClick={onAction}>{action}<span aria-hidden="true">↗</span></button>}
    </div>
  )
}

function StatCard({ label, value, suffix, tone }) {
  return (
    <article className={`stat-card stat-${tone}`}>
      <span>{label}</span>
      <div><strong>{value}</strong><small>{suffix}</small></div>
      <i aria-hidden="true" />
    </article>
  )
}

function SkillCategory({ group }) {
  return (
    <article className="skill-category-card">
      <div className="skill-card-top"><span>{group.mark} / TOOLKIT</span><span className="skill-card-arrow" aria-hidden="true">↗</span></div>
      <h2>{group.title}</h2>
      <div className="tag-row">{group.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div>
    </article>
  )
}

function Tag({ children }) {
  return <span className="skill-pill">{children}</span>
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-tile project-tone-${(index % 3) + 1}`}>
      <div className="project-tile-top"><span>{project.category}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
      {project.featured && <span className="featured-label">FEATURED</span>}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-row">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
      <div className="project-tile-bottom"><span>PERSONAL PROJECT</span><span aria-hidden="true">↗</span></div>
    </article>
  )
}

function CertItem({ item, index }) {
  return (
    <article className="certification-card">
      <div className="certification-image"><img src={item.image} alt={item.title} /></div>
      <div className="certification-copy">
        <div className="certification-meta"><span>0{index + 1} / CERTIFICATE</span><span>{item.year}</span></div>
        <h2>{item.title}</h2>
        <p className="certification-issuer">{item.issuer}</p>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

function ContactItem({ mark, title, value, link }) {
  return (
    <a className="contact-card" href={link} target={link.startsWith('http') ? '_blank' : undefined} rel={link.startsWith('http') ? 'noreferrer' : undefined}>
      <span className="contact-mark">{mark}</span>
      <span className="contact-card-copy"><strong>{title}</strong><small>{value}</small></span>
      <span className="contact-arrow" aria-hidden="true">↗</span>
    </a>
  )
}

export default App
