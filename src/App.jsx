import { useEffect, useState } from "react";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#engineering", label: "Engineering" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    number: "01",
    category: "Business platform",
    title: "Billin",
    description:
      "A multi-tenant business platform spanning ISP ticketing, financial-institution loan management, and IRMS.",
    focus: "Enterprise workflows, backend business logic, and API integrations.",
    stack: ["Laravel", "PHP", "Multi-tenant systems", "API integration"],
    visual: {
      eyebrow: "Connected business systems",
      labels: ["ISP ticketing", "Loan management", "IRMS"],
    },
    link: {
      href: "https://billin.space/",
      label: "Visit Billin",
    },
    note: "The platform’s scope is described here without claiming ownership of the entire product.",
  },
  {
    number: "02",
    category: "Local services marketplace",
    title: "SajiloHub",
    description:
      "A marketplace concept for connecting customers with local service providers, from home repairs to cleaning and appliance work.",
    focus:
      "Go backend architecture with a planned booking lifecycle and an InDrive-inspired provider-bidding direction.",
    stack: ["Go", "Chi", "GORM", "PostgreSQL", "JWT", "Redis", "WebSockets", "Docker"],
    visual: {
      eyebrow: "Marketplace · in development",
      labels: ["Customer", "Booking", "Provider"],
    },
    architecture: "Controller → Interface → Service → DTO → Model → Response",
    link: {
      href: "https://github.com/parbatsubedi/sajilohub",
      label: "View repository",
    },
    note:
      "OTP, KYC, matching, bidding, WebSockets, and scheduling are product requirements; implementation status has not been specified.",
  },
  {
    number: "03",
    category: "Financial technology · microservice",
    title: "goECL",
    description:
      "A Go microservice for banking Expected Credit Loss (ECL) workflows.",
    focus:
      "Go service development with PostgreSQL connectivity and GORM. No regulatory or calculation claims are made.",
    stack: ["Go", "Gin", "GORM", "PostgreSQL", "Microservices"],
    visual: {
      eyebrow: "Go service · relational data",
      labels: ["Gin", "GORM", "PostgreSQL"],
    },
    note:
      "The brief identifies the project and stack but does not provide a public link or further implementation details.",
  },
  {
    number: "04",
    category: "Domain-specific calculations",
    title: "Nepali Chhina & Kundali",
    description:
      "A Nepali astrology calculation and traditional Chhina-generation system based on Surya Panchanga Patro.",
    focus:
      "Working calculation logic for Nepali dates, location-based inputs, planetary positions, Rashi, Nakshatra, and Lagna; the traditional Chhina interface is the next major focus.",
    stack: ["Go", "React / Next.js direction", "Bikram Sambat", "Geospatial inputs"],
    visual: {
      eyebrow: "Nepali date · location · calculations",
      labels: ["Bikram Sambat", "Coordinates", "Chhina"],
    },
    note:
      "The project explores domain-specific validation and report generation; JasperReports XML is an area of exploration.",
    featured: true,
  },
  {
    number: "05",
    category: "Business application",
    title: "Dur Dristi Digital ERP",
    description: "An ERP / business application project.",
    focus:
      "Project-specific workflows, technologies, and individual contribution were not detailed in the supplied information.",
    stack: ["ERP", "Business applications"],
    visual: {
      eyebrow: "Enterprise application",
      labels: ["Workflows", "Business data"],
    },
    note: "Details are intentionally limited until verified.",
  },
  {
    number: "06",
    category: "Automotive application",
    title: "My Second Car",
    description: "An automotive-related application project.",
    focus:
      "Project-specific functionality, technologies, and individual contribution were not detailed in the supplied information.",
    stack: ["Automotive"],
    visual: {
      eyebrow: "Automotive application",
      labels: ["My Second Car"],
    },
    note: "Details are intentionally limited until verified.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: [
      ["PHP", "Strong practical experience"],
      ["Go", "Practical backend experience"],
      ["JavaScript", "Practical experience"],
      ["SQL", "Practical experience"],
      ["HTML5 · CSS3 · Bash", "Working tools"],
      ["Java", "Basic working knowledge"],
    ],
  },
  {
    title: "Backend development",
    items: [
      ["Laravel · PHP", "Primary backend foundation"],
      ["Go · Gin · GORM", "Backend development"],
      ["REST APIs · GraphQL integration", "API development & consumption"],
      ["MVC · Repository · Service layer", "Application architecture"],
      ["DTOs · validation · dependency injection", "Backend patterns"],
      ["Multi-tenant systems · queues", "Business application concepts"],
    ],
  },
  {
    title: "Frontend development",
    items: [
      ["React · JavaScript", "Practical experience"],
      ["Laravel Blade", "Preferred within Laravel applications"],
      ["Vite · Tailwind CSS · React Query", "Project experience"],
      ["Reusable components · responsive UI", "Interface development"],
      ["SVG · i18n · forms · API integration", "Frontend implementation"],
      ["Next.js", "Learning / exploration"],
    ],
  },
  {
    title: "Authentication & security",
    items: [
      ["JWT · refresh tokens · OTP", "Authentication flows"],
      ["Keycloak · JWKS", "Identity integration"],
      ["Issuer validation · public-key verification", "Token validation"],
      ["Authorization · CORS · rate limiting", "API protection concepts"],
    ],
  },
  {
    title: "Infrastructure & tools",
    items: [
      ["Ubuntu · Linux · Docker", "Practical working experience"],
      ["Nginx · Apache · SSH · SCP", "Server and deployment exposure"],
      ["Git · GitHub · Postman · cURL", "Daily development tools"],
      ["Composer · Laravel Artisan", "PHP ecosystem"],
      ["DBeaver · MySQL CLI · SQLite CLI", "Database tools"],
      ["OpenCode · IntelliJ IDEA", "Development environments"],
    ],
  },
  {
    title: "Currently exploring",
    items: [
      ["Advanced Go backend development", "Growing specialization"],
      ["Microservices · system design", "Ongoing learning"],
      ["Distributed systems · Next.js", "Exploration"],
    ],
  },
];

const caseStudies = [
  {
    number: "01",
    title: "Cross-platform JWT validation",
    problem:
      "A Laravel application needed to validate tokens issued by a Java backend.",
    investigation:
      "Examined the JWT structure, issuer, realm and tenant claims, and the identity provider’s key-discovery flow.",
    solution:
      "Integrated JWKS-based public-key verification and issuer validation for the cross-platform authentication flow.",
    technologies: ["Java", "Laravel", "JWT", "JWKS"],
  },
  {
    number: "02",
    title: "EBI Internet Banking",
    problem:
      "A customer-facing banking frontend required consistent authentication, onboarding, and API-connected screens.",
    investigation:
      "Worked across shared interface patterns, request states, and localized UI.",
    solution:
      "Contributed to login and onboarding interfaces, reusable components, API integration, loading and error handling, and i18n.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Query", "JavaScript", "i18n"],
  },
  {
    number: "03",
    title: "Afghan Pay integrations",
    problem:
      "Banking workflows involved multiple service APIs and API Management / ESB integrations.",
    investigation:
      "Reviewed authentication headers, JSON payloads, user-service and communication APIs, notifications, wallet APIs, and statement-cycle requests during UAT.",
    solution:
      "Contributed to integration debugging and request analysis across the connected services.",
    technologies: ["REST APIs", "JSON", "API Management", "ESB", "UAT"],
  },
  {
    number: "04",
    title: "Duplicate API error notifications",
    problem:
      "React application errors could trigger duplicate notifications.",
    investigation:
      "Traced the behavior through the shared API error handling and React Query integration.",
    solution:
      "Worked on the common notification path rather than adding one-off workarounds in individual screens.",
    technologies: ["React", "React Query", "API error handling"],
  },
  {
    number: "05",
    title: "Linux & production troubleshooting",
    problem:
      "Application and infrastructure issues ranged from dependency compatibility to connectivity and deployment configuration.",
    investigation:
      "Worked through MySQL authentication plugin issues, PHP compatibility, Composer dependencies, Nginx reverse proxies, Laravel URLs, remote database access, backups, logs, memory / swap, and inotify limits.",
    solution:
      "Used logs, terminal tools, and environment checks to investigate root causes across Linux-based development and production setups.",
    technologies: ["Ubuntu", "Linux", "MySQL", "PHP", "Composer", "Nginx"],
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function tiltPortraits(event) {
    if (
      event.pointerType !== "mouse" ||
      window.innerWidth <= 700 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      resetPortraitTilt(event);
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty("--tilt-x", `${(x - 0.5) * 8}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(0.5 - y) * 8}deg`);
    event.currentTarget.style.setProperty("--pointer-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 100}%`);
    event.currentTarget.classList.add("is-tilting");
  }

  function resetPortraitTilt(event) {
    event.currentTarget.style.removeProperty("--tilt-x");
    event.currentTarget.style.removeProperty("--tilt-y");
    event.currentTarget.classList.remove("is-tilting");
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Parbat Subedi, home">
            <span className="brand-mark">PS</span>
            <span>parbat subedi<span className="brand-period">.</span></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav
            aria-label="Main navigation"
            className={menuOpen ? "primary-navigation is-open" : "primary-navigation"}
            id="primary-navigation"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
              <span className="theme-label">{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Developer based in Nepal</p>
            <h1 id="hero-title">
              Building reliable backend systems<span className="accent">.</span>
            </h1>
            <p className="hero-lede">
              I’m Parbat Subedi, a backend-focused full-stack developer working
              primarily with Laravel and PHP, with practical experience in Go,
              React, PostgreSQL, MySQL, and enterprise API integrations.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/parbatsubedi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-stack" aria-label="Primary technologies">
              <span>Laravel</span><i /> <span>Go</span><i /> <span>PostgreSQL</span><i /> <span>MySQL</span><i /> <span>React</span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Portraits of Parbat Subedi"
            onPointerMove={tiltPortraits}
            onPointerLeave={resetPortraitTilt}
          >
            <div className="portrait-frame portrait-layer">
              <img
                className="portrait-main"
                src="/images/parbat-outdoors.jpeg"
                alt="Parbat outdoors in Nepal"
              />
              <div className="portrait-caption">
                <span>Parbat Subedi</span>
                <span>Nepal · Software development</span>
              </div>
            </div>
            <div className="portrait-stack portrait-layer">
              <div className="portrait-secondary">
                <img
                  src="/images/parbat-mountains.jpeg"
                  alt="Parbat with a mountain landscape in the background"
                />
              </div>
              <div className="portrait-cutout">
                <img src="/image/parbat.png" alt="" />
                <span>Based in Nepal</span>
              </div>
            </div>
            <div className="hero-note portrait-layer">
              <span className="note-line" />
              <span>Thoughtful systems.<br />Useful software.</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="about section-shell section-space" id="about">
          <SectionHeading
            eyebrow="A little about me"
            title="Backend-minded. Product-aware."
            description="I enjoy understanding how a system needs to work before deciding how to build it."
          />
          <div className="about-grid">
            <div className="about-copy">
              <p>
                My foundation is in PHP and Laravel, building business
                applications and backend workflows. Alongside that work, I use
                Go for backend services and am growing my experience with
                service-oriented systems.
              </p>
              <p>
                I have worked with relational data in PostgreSQL and MySQL,
                connected applications across APIs, and contributed to
                enterprise and banking integrations. On the frontend, I work
                with React and Laravel Blade to build clear, reusable
                interfaces.
              </p>
              <p>
                I’m a BCA graduate based in Nepal. I value maintainable
                architecture, useful validation, consistent API contracts, and
                finding the root cause instead of layering on workarounds.
              </p>
              <a className="text-link" href="#contact">Get in touch <ArrowIcon /></a>
            </div>
            <div className="architecture-panel">
              <div className="architecture-header">
                <span className="eyebrow">How I structure software</span>
                <span className="mono-label">01 — 02</span>
              </div>
              <div className="architecture-item">
                <span className="architecture-language">Laravel</span>
                <p>Route <b>→</b> Controller <b>→</b> Repository <b>→</b> Service <b>→</b> Response</p>
              </div>
              <div className="architecture-item">
                <span className="architecture-language">Go</span>
                <p>Controller <b>→</b> Interface <b>→</b> Service <b>→</b> DTO <b>→</b> Model <b>→</b> Response</p>
              </div>
              <div className="architecture-foot">
                <span>Separation of concerns</span><span>Practical, not over-engineered</span>
              </div>
            </div>
          </div>
        </section>

        <section className="database-band" aria-label="Database experience">
          <div className="section-shell database-content">
            <div>
              <p className="eyebrow">Relational data</p>
              <h2>PostgreSQL <span>&</span> MySQL</h2>
              <p className="database-summary">Practical database experience across backend services and business applications.</p>
            </div>
            <div className="database-detail">
              <div>
                <h3>PostgreSQL</h3>
                <p>Go services, GORM, and the goECL microservice.</p>
              </div>
              <div>
                <h3>MySQL</h3>
                <p>Laravel applications, enterprise systems, administration, and troubleshooting.</p>
              </div>
              <div>
                <h3>Also worked with</h3>
                <p>SQLite, SQL, Eloquent, PDO, and DBeaver.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="work section-shell section-space" id="work">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects & problem spaces"
            description="A mix of business platforms, backend services, and domain-specific software. Details are kept to what is known."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card${project.featured ? " project-featured" : ""}`}
                key={project.number}
              >
                <div className="project-topline">
                  <span className="mono-label">{project.number} / 06</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className={`project-art project-art-${project.number}`}>
                  <span className="project-art-eyebrow">{project.visual.eyebrow}</span>
                  <div className="project-art-flow">
                    {project.visual.labels.map((label, index) => (
                      <span className="project-art-node" key={label}>
                        {label}
                        {index < project.visual.labels.length - 1 && (
                          <span className="project-art-arrow" aria-hidden="true">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="project-art-index">{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-focus">
                  <span className="focus-label">Focus</span>
                  <p>{project.focus}</p>
                </div>
                {project.architecture && (
                  <p className="project-architecture">{project.architecture}</p>
                )}
                <div className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
                <details className="project-details">
                  <summary>Project notes <span aria-hidden="true">+</span></summary>
                  <p>{project.note}</p>
                </details>
                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.link.label} <ArrowIcon diagonal />
                  </a>
                ) : (
                  <span className="project-link project-link-muted">Details available on request</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="engineering section-space" id="engineering">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Engineering experience"
              title="Patterns, integrations, and debugging"
              description="A closer look at the practical engineering work behind the interfaces and services."
            />
            <div className="case-list">
              {caseStudies.map((study) => (
                <article className="case-row" key={study.number}>
                  <span className="mono-label case-number">{study.number}</span>
                  <div className="case-content">
                    <h3>{study.title}</h3>
                    <div className="case-flow">
                      <div><span>Problem</span><p>{study.problem}</p></div>
                      <div><span>Investigation</span><p>{study.investigation}</p></div>
                      <div><span>Approach</span><p>{study.solution}</p></div>
                    </div>
                    <div className="tag-list">
                      {study.technologies.map((technology) => (
                        <span className="tag tag-subtle" key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section-shell section-space" id="skills">
          <SectionHeading
            eyebrow="Tools of the trade"
            title="A practical toolkit"
            description="Grouped by the kind of work they support, not by arbitrary proficiency scores."
          />
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article className={`skill-card${index === 0 ? " skill-card-featured" : ""}`} key={group.title}>
                <span className="mono-label">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(([name, description]) => (
                    <li key={name}>
                      <span>{name}</span>
                      <small>{description}</small>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-shell section-space" id="experience">
          <SectionHeading
            eyebrow="Professional background"
            title="Experience & education"
            description="A concise timeline, without inventing dates or responsibilities."
          />
          <div className="experience-grid">
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-heading">
                  <h3>Backend Developer</h3>
                  <span>June 2025 — February 2026</span>
                </div>
                <p className="timeline-place">Egrow Tech Pvt. Ltd.</p>
                <p>Backend development experience in a professional role.</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-heading">
                  <h3>Latest employer</h3>
                  <span>Dates not provided</span>
                </div>
                <p className="timeline-place">Silk Innovation Private Ltd.</p>
                <p>Role and responsibilities have not been added because they were not specified.</p>
              </article>
            </div>
            <div className="education-card">
              <span className="eyebrow">Education</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>BCA graduate</p>
              <span className="education-location">Nepal</span>
            </div>
          </div>
        </section>

        <section className="contact section-space" id="contact">
          <div className="section-shell contact-inner">
            <div>
              <p className="eyebrow">Have a project in mind?</p>
              <h2>Let’s talk about<br />what you’re building<span className="accent">.</span></h2>
              <p className="contact-copy">
                For work enquiries or a conversation about backend systems and
                business software, email is the best way to reach me.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:parbatsubedi000@gmail.com">
                parbatsubedi000@gmail.com <ArrowIcon diagonal />
              </a>
              <a href="https://www.linkedin.com/in/parbat-subedi-73a12319b/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon diagonal />
              </a>
              <a href="https://github.com/parbatsubedi" target="_blank" rel="noreferrer">
                GitHub <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top">
          <span className="brand-mark">PS</span>
          <span>parbat subedi<span className="brand-period">.</span></span>
        </a>
        <p>Backend-focused full-stack developer · Nepal</p>
        <a className="back-to-top" href="#top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Parbat Subedi</span>
      </footer>
    </>
  );
}

export default App;
