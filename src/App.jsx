import { useState, useEffect, useRef } from 'react'
import './App.css'

// Image imports
import profilePic from './assets/profilepic.jpg'
import aiCert from './assets/Ai workshop.jpg'
import internshipCert from './assets/internship.jpg'
import iotCert from './assets/Npteliot.jpg'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    certifications: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const scrollPos = window.scrollY + 100
      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current && 
            scrollPos >= ref.current.offsetTop && 
            scrollPos < ref.current.offsetTop + ref.current.offsetHeight) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollTo = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="portfolio-root">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">Yeshwanth.C</div>
          
          <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li><a className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Home</a></li>
            <li><a className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>About</a></li>
            <li><a className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollTo('skills')}>Skills</a></li>
            <li><a className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollTo('experience')}>Experience</a></li>
            <li><a className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollTo('projects')}>Projects</a></li>
            <li><a className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollTo('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" ref={sectionRefs.home} className="hero">
        <div className="container hero-content">
          <div className="profile-img-container">
            <img src={profilePic} alt="Yeshwanth C" className="profile-img" />
          </div>
          <h1>Hi, I'm <span className="gradient-text">Yeshwanth C</span></h1>
          <p className="hero-title">Full Stack Web Developer & Cloud Enthusiast</p>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>View My Work</button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="glass summary-card">
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify'}}>
              I am Yeshwanth C, a dedicated Bachelor of Computer Applications student specializing in Cloud Computing at CMR University. 
              Driven by a profound interest in full-stack development and artificial intelligence, I focus on building scalable, 
              user-centric web applications using modern technologies such as React.js, Node.js, and MongoDB. My technical foundation 
              is complemented by hands-on experience in cloud fundamentals and a growing expertise in AI-driven solutions. 
              I am a proactive problem-solver with a strong commitment to continuous learning and technical excellence, 
              eager to contribute to innovative projects in a collaborative, fast-paced environment where I can leverage 
              my skills in both frontend and backend development to deliver impactful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={sectionRefs.skills} className="section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            <SkillCategory title="Programming" skills={['C', 'C++', 'Java']} />
            <SkillCategory title="Web Technologies" skills={['HTML', 'CSS', 'JavaScript', 'PHP']} />
            <SkillCategory title="Frameworks" skills={['React.js', 'Node.js', 'Express.js', 'Next.js']} />
            <SkillCategory title="Database" skills={['SQL', 'PostgreSQL', 'MongoDB', 'DBMS']} />
            <SkillCategory title="Cloud & IoT" skills={['AWS (Basic)', 'IoT Architecture', 'Sensors']} />
            <SkillCategory title="Professional Skills" skills={['Time Management', 'Communication', 'Team Collaboration', 'Problem Solving', 'Adaptability']} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={sectionRefs.experience} className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline-card glass">
            <div className="featured-badge">Active Internship</div>
            <h3>Full Stack Developer Intern</h3>
            <div className="company">Eduphoenix Solutions Pvt Ltd</div>
            <div className="date">June 2025 – August 2025</div>
            <ul>
              <li>Developed web applications using React.js and Node.js</li>
              <li>Collaborated in agile team environment with code reviews</li>
              <li>Built a hotel booking system with frontend-backend integration</li>
              <li>Worked with APIs, databases, and deployment basics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={sectionRefs.projects} className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="card-grid">
            <ProjectCard 
              title="SkillMorph" 
              featured={true}
              description="A professional platform designed to empower users with skill-building pathways. Features a modern UI, roadmap tracking, and production-ready architecture."
              tags={['React', 'Node.js', 'MongoDB', 'Vite']}
            />
            <ProjectCard 
              title="CMR VibeWaves" 
              description="A dynamic web-based live broadcasting portal designed for real-time streaming and interaction. Features user registration and content management."
              tags={['HTML', 'CSS', 'JS', 'PHP', 'MySQL']}
            />
            <ProjectCard 
              title="Bank Management System" 
              description="Command-line based application for managing core banking operations. Implements account creation, transactions, and record management with MySQL."
              tags={['JS', 'PHP', 'MySQL CLI', 'CLI']}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" ref={sectionRefs.education} className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-stack" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div className="timeline-card glass">
              <h3>Master of Computer Applications (MCA)</h3>
              <div className="company">East Point College of Higher Education</div>
              <div className="date">Currently pursuing</div>
            </div>
            <div className="timeline-card glass">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <div className="mono" style={{fontSize: '0.8rem', marginBottom: '5px'}}>Cloud Computing</div>
              <div className="company">CMR University, Bengaluru</div>
              <div className="date">Completed</div>
              <p className="mono">CGPA: 8.48</p>
            </div>
            <div className="timeline-card glass">
              <h3>Pre-University College (PCMC)</h3>
              <div className="company">Indranagar Composite PU College, Bengaluru</div>
              <div className="date">June 2021 - April 2023</div>
            </div>
            <div className="timeline-card glass">
              <h3>High School (10th Standard)</h3>
              <div className="company">St Joseph's Indian High School, Bengaluru</div>
              <div className="date">June 2020 - April 2021</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" ref={sectionRefs.certifications} className="section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <CertItem image={aiCert} title="AI Workshop Participation" issuer="Organized by Be10x" year="2025" description="Gained hands-on experience in Artificial Intelligence concepts, including machine learning and neural networks. Collaborated with peers on real-world AI projects." />
            <CertItem image={internshipCert} title="Full Stack Developer Internship" issuer="Eduphoenix Solutions Pvt Ltd" year="2025" description="Completed a professional internship focusing on web application development using React, Node.js, and MongoDB. Contributed to live client projects." />
            <CertItem image={iotCert} title="NPTEL IoT Certification" issuer="NPTEL (IIT)" year="2024" description="Successfully completed the NPTEL course on Internet of Things, covering IoT architecture, sensors, and cloud integration." />
          </div>
        </div>
      </section>

      {/* Extra-Curricular Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Extra-Curricular</h2>
          <div className="glass timeline-card">
            <h3 className="gradient-text" style={{marginBottom: '20px'}}>Community Involvement</h3>
            <ul>
              <li>Participated in community service programs (90 hours)</li>
              <li>Completed community internship program (30 hours)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Languages</h2>
          <div className="glass timeline-card">
            <p className="mono" style={{fontSize: '1.5rem', fontWeight: '700'}}>English • Hindi • Telugu • Tamil • Kannada</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <ContactItem icon="📧" title="Email" value="yeshccb45@gmail.com" link="mailto:yeshccb45@gmail.com" />
            <ContactItem icon="📱" title="Phone" value="+91 6366704266" link="tel:+916366704266" />
            <ContactItem icon="💼" title="LinkedIn" value="Connect" link="https://linkedin.com/in/yeshwanth-c1270" />
            <ContactItem icon="🐙" title="GitHub" value="Follow" link="https://github.com/yeshwanthc-1270" />
          </div>
        </div>
      </section>

      <footer style={{textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)'}}>
        <p>&copy; {new Date().getFullYear()} Yeshwanth C. All rights reserved.</p>
      </footer>
    </div>
  )
}

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-card glass">
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tags, featured }) {
  return (
    <div className={`project-card glass ${featured ? 'featured' : ''}`}>
      <div className="project-info">
        {featured && <span className="featured-badge">Featured Project</span>}
        <h3>{title}</h3>
        <p style={{margin: '16px 0', fontSize: '0.95rem'}}>{description}</p>
        <div className="skill-tags">
          {tags.map(tag => (
            <span key={tag} className="skill-tag" style={{fontSize: '0.75rem', padding: '4px 10px'}}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function CertItem({ image, title, issuer, year, description }) {
  return (
    <div className="glass cert-full-card">
      <div className="cert-image-container">
        <img src={image} alt={title} className="cert-img-full" />
      </div>
      <div className="cert-content">
        <h4 className="mono" style={{color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '10px'}}>{title}</h4>
        <div className="mono" style={{fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px'}}>{issuer} | {year}</div>
        <p style={{fontSize: '0.95rem', opacity: 0.9}}>{description}</p>
      </div>
    </div>
  )
}

function ContactItem({ icon, title, value, link }) {
  return (
    <div className="contact-item glass">
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">{value}</a>
    </div>
  )
}

export default App
