export default function Home() {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <header className="resume-header">
        <h1>John Doe</h1>
        <p className="title">Full Stack Software Engineer</p>
        <div className="contact-info">
          <span className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            john.doe@email.com
          </span>
          <span className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            (555) 123-4567
          </span>
          <span className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            San Francisco, CA
          </span>
          <span className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            linkedin.com/in/johndoe
          </span>
          <span className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            github.com/johndoe
          </span>
        </div>
      </header>

      {/* Summary Section */}
      <section className="resume-section">
        <h2 className="section-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          Professional Summary
        </h2>
        <p className="summary-text">
          Passionate Full Stack Software Engineer with 5+ years of experience designing and implementing 
          scalable web applications. Skilled in modern JavaScript frameworks, cloud technologies, and 
          agile methodologies. Proven track record of delivering high-quality solutions that drive 
          business growth and improve user experience. Strong collaborator with excellent problem-solving 
          abilities and a commitment to continuous learning.
        </p>
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h2 className="section-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
          Technical Skills
        </h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">GraphQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Cloud & DevOps</h4>
            <div className="skill-tags">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Tools & Methods</h4>
            <div className="skill-tags">
              <span className="skill-tag">Agile/Scrum</span>
              <span className="skill-tag">Jest</span>
              <span className="skill-tag">Webpack</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Linux</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2 className="section-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
          </svg>
          Work Experience
        </h2>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Senior Software Engineer · <span className="company-name">Tech Innovations Inc.</span></h3>
            <span className="experience-date">Jan 2022 - Present</span>
          </div>
          <p className="experience-location">San Francisco, CA</p>
          <div className="experience-description">
            <ul>
              <li>Lead development of microservices architecture serving 2M+ daily active users</li>
              <li>Mentored team of 5 junior developers, improving code quality and deployment velocity by 40%</li>
              <li>Implemented real-time data pipeline using Kafka and Redis, reducing latency by 60%</li>
              <li>Spearheaded migration from monolith to cloud-native architecture on AWS</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Software Engineer · <span className="company-name">Digital Solutions Co.</span></h3>
            <span className="experience-date">Jun 2019 - Dec 2021</span>
          </div>
          <p className="experience-location">San Jose, CA</p>
          <div className="experience-description">
            <ul>
              <li>Developed responsive web applications using React and Node.js for enterprise clients</li>
              <li>Built RESTful APIs and integrated third-party services for payment processing</li>
              <li>Optimized database queries resulting in 50% improvement in page load times</li>
              <li>Collaborated with UX team to implement accessibility standards (WCAG 2.1)</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Junior Developer · <span className="company-name">StartUp Labs</span></h3>
            <span className="experience-date">Aug 2018 - May 2019</span>
          </div>
          <p className="experience-location">Palo Alto, CA</p>
          <div className="experience-description">
            <ul>
              <li>Contributed to full-stack development of SaaS platform for project management</li>
              <li>Wrote unit and integration tests achieving 85% code coverage</li>
              <li>Participated in daily standups and sprint planning in Agile environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="resume-section">
        <h2 className="section-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"/>
          </svg>
          Featured Projects
        </h2>

        <div className="project-item">
          <h3>E-Commerce Platform</h3>
          <p>
            Full-stack e-commerce solution with real-time inventory management, 
            payment integration, and analytics dashboard. Handles 10K+ concurrent users.
          </p>
          <div className="project-tech">
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Stripe</span>
            <span className="tech-tag">Redis</span>
          </div>
        </div>

        <div className="project-item">
          <h3>Real-Time Collaboration Tool</h3>
          <p>
            WebSocket-based collaboration platform enabling teams to work together 
            on documents with live cursors, comments, and version history.
          </p>
          <div className="project-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Socket.io</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
          </div>
        </div>

        <div className="project-item">
          <h3>DevOps Automation Suite</h3>
          <p>
            CI/CD pipeline automation tool that reduced deployment time by 70% 
            and improved reliability with automated rollback capabilities.
          </p>
          <div className="project-tech">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">Kubernetes</span>
            <span className="tech-tag">GitHub Actions</span>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="resume-section">
        <h2 className="section-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
          </svg>
          Education
        </h2>

        <div className="education-item">
          <div className="education-header">
            <div>
              <p className="degree">Bachelor of Science in Computer Science</p>
              <p className="institution">University of California, Berkeley</p>
            </div>
            <span className="education-date">2014 - 2018</span>
          </div>
          <p className="education-details">
            GPA: 3.8/4.0 · Dean&apos;s List · Relevant Coursework: Data Structures, Algorithms, 
            Database Systems, Software Engineering, Machine Learning
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="resume-footer">
        <p>© {new Date().getFullYear()} John Doe · Built with Next.js</p>
      </footer>
    </div>
  );
}
