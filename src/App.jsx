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
    category: "Inventory & resource management",
    title: "Billin",
    description:
      "An Inventory and Resource Management System for Silk Innovations, supporting inventory tracking, order management, and resource allocation with real-time data and reporting.",
    focus:
      "Part of a multi-tenant platform with system capabilities spanning ISP ticketing, loan management, and IRMS.",
    stack: ["Laravel", "PHP", "Multi-tenant systems", "API integration"],
    visual: {
      eyebrow: "Connected business systems",
      labels: ["ISP ticketing", "Loan management", "IRMS"],
    },
    link: {
      href: "https://billin.space/",
      label: "Visit Billin",
    },
    note:
      "IRMS capabilities include inventory tracking, order management, resource allocation, real-time data, and reporting.",
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
    description:
      "An ERP admin panel for managing users, payment records, and SMS messaging.",
    focus:
      "Dynamic system design and detailed reports support day-to-day administration and decision-making.",
    stack: ["ERP", "Business applications"],
    visual: {
      eyebrow: "Enterprise application",
      labels: ["Workflows", "Business data"],
    },
    link: {
      href: "https://durdristidigital.com",
      label: "Visit Dur Dristi Digital",
    },
    note: "The supplied project information describes the admin panel and its reporting and SMS capabilities.",
  },
  {
    number: "06",
    category: "Automotive application",
    title: "My Second Car",
    description:
      "A platform for browsing, booking, buying, and comparing new and second-hand cars.",
    focus:
      "Includes EV charging-station information, a frontend API, and an admin panel with reports.",
    stack: ["Automotive", "REST API", "Admin panel", "Reporting"],
    visual: {
      eyebrow: "Automotive application",
      labels: ["My Second Car"],
    },
    link: {
      href: "https://admin.seecar.silkinv.com",
      label: "Open admin portal",
    },
    note:
      "The supplied portal is an admin URL; it may require authorized access and is not presented as a public demo.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    code: "01",
    summary: "The languages I use to build and work across applications.",
    items: [
      ["PHP", "Strong practical experience"],
      ["Go", "Practical backend development"],
      ["JavaScript", "Practical experience"],
      ["SQL", "Practical experience"],
      ["HTML5 · CSS3 · Bash", "Working knowledge"],
      ["Java", "Basic working knowledge"],
    ],
  },
  {
    title: "Backend development",
    code: "02",
    summary: "Application structure, APIs, and server-side business logic.",
    items: [
      ["Laravel · PHP", "Primary backend foundation"],
      ["Go · Gin · GORM", "Backend services"],
      ["REST APIs · SOAP", "Development and integration"],
      ["Multi-tenant systems · queues", "Business application patterns"],
    ],
  },
  {
    title: "Frontend development",
    code: "03",
    summary: "Building connected, reusable, and responsive interfaces.",
    items: [
      ["React · JavaScript", "Practical experience"],
      ["Laravel Blade", "Preferred within Laravel applications"],
      ["Vite · Tailwind CSS · React Query", "Project experience"],
      ["Reusable components · responsive UI", "Interface development"],
      ["API integration · error handling", "Connected UI flows"],
    ],
  },
  {
    title: "Databases & data access",
    code: "04",
    summary: "Relational databases used across backend services and business applications.",
    featured: true,
    items: [
      ["PostgreSQL", "Go services, GORM, and Silk Innovation applications"],
      ["MySQL", "Laravel, eCommerce, enterprise systems, and troubleshooting"],
      ["SQLite · SQL", "Queries, joins, filtering, and data management"],
      ["GORM · Eloquent · PDO", "ORM and database access"],
      ["DBeaver · MySQL CLI · SQLite CLI", "Database tools"],
    ],
  },
  {
    title: "Authentication & security",
    code: "05",
    summary: "Identity flows and API access across connected systems.",
    items: [
      ["JWT · refresh tokens · OTP", "Authentication flows"],
      ["Keycloak · JWKS", "Identity integration"],
      ["Issuer validation · public-key verification", "Token validation"],
      ["Authorization · CORS · rate limiting", "API security"],
    ],
  },
  {
    title: "Infrastructure & development tools",
    code: "06",
    summary: "Practical tools for local development, deployment, and troubleshooting.",
    items: [
      ["Ubuntu · Linux · Docker", "Practical working experience"],
      ["Nginx · Apache · SSH · SCP", "Server and deployment"],
      ["Git · GitHub · Postman · cURL", "Development workflow"],
    ],
  },
  {
    title: "Learning & exploring",
    code: "07",
    summary: "Areas I’m actively learning, kept distinct from established skills.",
    items: [
      ["Advanced Go backend development", "Growing specialization"],
      ["Microservices · system design", "Ongoing learning"],
      ["Distributed systems · Next.js", "Exploration"],
    ],
  },
];

const experience = [
  {
    role: "Fullstack Developer",
    company: "FirstFintech Corporation Pvt. Ltd",
    period: "Feb 2026 — Present",
    location: "Panipokhari, Maharajgunj",
    details: [
      "Develop and maintain web applications using Laravel (PHP) and React.",
      "Design REST APIs and integrate frontend applications with backend and third-party services.",
      "Implement business logic, database operations, validation, and exception handling.",
      "Work with PostgreSQL and MySQL for data design, queries, and management.",
      "Integrate Java services with Laravel, including cross-platform token validation.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Mantra IT Solution Pvt. Ltd.",
    period: "Jun 2025 — Feb 2026",
    location: "Lalitpur",
    details: [
      "Built and maintained Laravel backend services and REST APIs for frontend and third-party integrations.",
      "Developed eCommerce workflows for product catalogs, carts, checkout, orders, and inventory.",
      "Implemented authentication, role-based access, validation, and data controls.",
      "Worked with MySQL queries, performance tuning, bug fixes, and backend issue resolution.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Silk Innovation Pvt. Ltd",
    period: "Jul 2024 — May 2025",
    location: "Lalitpur",
    details: [
      "Developed Laravel REST APIs and web applications with PostgreSQL and Eloquent ORM.",
      "Containerized Laravel applications and their dependencies with Docker.",
      "Built a Go microservice, gaining foundational backend experience with Go.",
      "Collaborated on task estimation, deadlines, version control, and problem solving.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Sajilopay Payment Services",
    period: "Apr 2023 — Jul 2024",
    location: "Kathmandu",
    details: [],
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
  // {
  //   number: "02",
  //   title: "EBI Internet Banking",
  //   problem:
  //     "A customer-facing banking frontend required consistent authentication, onboarding, and API-connected screens.",
  //   investigation:
  //     "Worked across shared interface patterns, request states, and localized UI.",
  //   solution:
  //     "Contributed to login and onboarding interfaces, reusable components, API integration, loading and error handling, and i18n.",
  //   technologies: ["React", "Vite", "Tailwind CSS", "React Query", "JavaScript", "i18n"],
  // },
  // {
  //   number: "03",
  //   title: "Afghan Pay integrations",
  //   problem:
  //     "Banking workflows involved multiple service APIs and API Management / ESB integrations.",
  //   investigation:
  //     "Reviewed authentication headers, JSON payloads, user-service and communication APIs, notifications, wallet APIs, and statement-cycle requests during UAT.",
  //   solution:
  //     "Contributed to integration debugging and request analysis across the connected services.",
  //   technologies: ["REST APIs", "JSON", "API Management", "ESB", "UAT"],
  // },
  // {
  //   number: "04",
  //   title: "Duplicate API error notifications",
  //   problem:
  //     "React application errors could trigger duplicate notifications.",
  //   investigation:
  //     "Traced the behavior through the shared API error handling and React Query integration.",
  //   solution:
  //     "Worked on the common notification path rather than adding one-off workarounds in individual screens.",
  //   technologies: ["React", "React Query", "API error handling"],
  // },
  {
    number: "02",
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
            <p className="eyebrow"><span className="status-dot" /> Full-Stack Developer · Nepal</p>
            <h1 id="hero-title">
              Building reliable backend systems<span className="accent">.</span>
            </h1>
            <p className="hero-lede">
              I’m Parbat Subedi, a full-stack developer in Lalitpur, Nepal,
              with a backend focus. I build web applications and APIs with
              Laravel and PHP, and also work with Go services, React,
              PostgreSQL, MySQL, and integrations between systems.
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
              <a
                className="button button-secondary"
                href="/cv/parbat-subedi.pdf"
                download="Parbat-Subedi-CV.pdf"
              >
                Download CV
                <svg
                  aria-hidden="true"
                  className="download-icon"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M8 2.5v7m0 0 2.5-2.5M8 9.5 5.5 7M3 11v2h10v-2" />
                </svg>
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
                src="/images/parbat-portrait.jpeg"
                alt="Parbat Subedi outdoors in Nepal"
              />
            </div>
            <div className="hero-note portrait-layer">
              <span className="note-kicker"><span className="note-line" /> My approach</span>
              <p>Thoughtful systems.<br />Useful software<span className="accent">.</span></p>
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
                I’m a full-stack developer with professional experience
                dating back to 2023 and a strong backend focus. I build Laravel
                applications and APIs, have worked with React on full-stack
                projects, and have used Go for a microservice.
              </p>
              <p>
                My work has included PostgreSQL and MySQL, eCommerce
                workflows, inventory and resource management, and connecting
                Java and Laravel services. I care about clear API contracts,
                maintainable code, and solving the underlying problem.
              </p>
              <p>
                I completed my Bachelor of Computer Application at Aadim
                National SS/College in 2024 and am pursuing a master’s degree
                at Bhaktapur Multiple Campus, currently in my second semester.
                I’m based in Lalitpur, Nepal, and continue to build my backend
                engineering experience with practical, business-focused software.
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
            title="Technologies I work with"
            description="A practical snapshot of my languages, frameworks, data tools, and the areas I’m currently exploring."
          />
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article
                className={`skill-card${group.featured ? " skill-card-featured" : ""}`}
                key={group.title}
              >
                <div className="skill-card-heading">
                  <span className="skill-card-code">{group.code}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.summary}</p>
                  </div>
                </div>
                <ul className="skill-pills">
                  {group.items.map(([name, description]) => (
                    <li className="skill-pill" key={name}>
                      <span className="skill-pill-name">{name}</span>
                      <small className="skill-pill-detail">{description}</small>
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
            description="Backend and full-stack roles across payment services, software development, eCommerce, and financial technology."
          />
          <div className="experience-grid">
            <div className="timeline">
              {experience.map((position) => (
                <article className="timeline-item" key={position.company}>
                  <span className="timeline-dot" />
                  <div className="timeline-heading">
                    <h3>{position.role}</h3>
                    <span>{position.period}</span>
                  </div>
                  <p className="timeline-place">{position.company}</p>
                  <p className="timeline-location">{position.location}</p>
                  {position.details.length > 0 && (
                    <ul className="experience-details">
                      {position.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>
            <div className="education-card">
              <span className="eyebrow">Education</span>
              <h3>Bachelor in Computer Application</h3>
              <p>Aadim National SS/College</p>
              <span className="education-location">Jan 2019 — Nov 2024 · Kathmandu</span>
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
                business software, feel free to reach out.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:parbatsubedi000@gmail.com">
                parbatsubedi000@gmail.com <ArrowIcon diagonal />
              </a>
              <a href="tel:+9779843723270">
                +977 9843723270 <ArrowIcon diagonal />
              </a>
              <a href="https://www.linkedin.com/in/parbatsubedi/" target="_blank" rel="noreferrer">
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
        <p>Full-Stack Developer · Tikathali-05, Lalitpur, Nepal</p>
        <a className="back-to-top" href="#top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Parbat Subedi</span>
      </footer>
    </>
  );
}

export default App;
