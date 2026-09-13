"use client";

import Link from "next/link";
import { projects, markets } from "./data";
import ContactForm from "./components/ContactForm";
import MobileNav from "./components/MobileNav";
import Reveal from "./components/Reveal";

const expertise = [
  {
    number: "01",
    title: "Residential & Lifestyle",
    copy: "Private residences, premium apartments, villas and second-home opportunities selected for livability, design and long-term value.",
    bullets: [
      "Luxury residences & penthouses",
      "Second homes & foothill retreats",
      "Prime lifestyle allocations",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    title: "Commercial & Corporate",
    copy: "Grade-A offices, retail and corporate assets evaluated around location, tenant proposition, utility and long-term investment potential.",
    bullets: [
      "Grade-A corporate spaces",
      "High-street & flagship retail",
      "Income-oriented commercial assets",
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    title: "Industrial & Logistics",
    copy: "Warehousing, logistics parks and strategic industrial opportunities positioned around connectivity, infrastructure and operational fit.",
    bullets: [
      "Modern logistics facilities",
      "Expressway-connected parcels",
      "Industrial park opportunities",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
  },
];

const process = [
  [
    "01",
    "Understand",
    "Your requirement, objective and preferences.",
    "Mandate Definition",
  ],
  [
    "02",
    "Curate",
    "Opportunities aligned with your requirement.",
    "Strict Curation",
  ],
  [
    "03",
    "Evaluate",
    "Location, development and proposition.",
    "Due Diligence",
  ],
  [
    "04",
    "Connect",
    "Move forward with the right project team.",
    "Direct Access",
  ],
];

const pillars = [
  [
    "01",
    "Curated Opportunities",
    "We focus on relevant developments instead of overwhelming you with endless listings.",
  ],
  [
    "02",
    "Market Intelligence",
    "Understand the location, development and surrounding market before making a decision.",
  ],
  [
    "03",
    "Transparent Guidance",
    "Clear information, straightforward conversations and no pressure to decide.",
  ],
  [
    "04",
    "Multi-Market Expertise",
    "One advisory approach across Delhi NCR, Dehradun and Dubai.",
  ],
];

export default function Home() {
  const featured = projects[0];
  const secondary = projects.slice(1);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="site-header">
        <div className="container nav-inner">
          <Link
            className="brand"
            href="#home"
            aria-label="Digithum Consultancy Services home"
          >
            <img
              src="/digithum-logo.jpg"
              alt="Digithum Realtors logo"
            />

            <span className="brand-copy">
              <strong>DIGITHUM</strong>
              <small>REALTORS</small>
            </span>
          </Link>

          <nav
            className="desktop-nav"
            aria-label="Primary navigation"
          >
            <Link href="#home">Home</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#markets">Markets</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <Link
            className="button button-orange nav-cta"
            href="#contact"
          >
            Enquire Now
          </Link>

          <MobileNav />
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section id="home" className="hero">
          <div className="hero-media" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90"
              alt=""
            />

            <div className="hero-overlay" />
          </div>

          <div className="container hero-content">
            <div className="hero-animate hero-animate-1">
              <div className="eyebrow light">
                <span />
                Strategic Advisory & Transaction Mandates
              </div>
            </div>

            <h1 className="hero-animate hero-animate-2">
              Real Estate,
              <br />
              <span>Chosen With</span>
              <br />
              <em>Perspective.</em>
            </h1>

            <p className="hero-animate hero-animate-3">
              Curated residential, commercial and industrial
              opportunities across Delhi NCR, Dehradun and Dubai.
            </p>

            <div className="hero-actions hero-animate hero-animate-4">
              <Link
                className="button button-orange"
                href="#projects"
              >
                Explore Opportunities <span>→</span>
              </Link>

              <Link
                className="button button-outline-light"
                href="#contact"
              >
                Talk to Us <span>→</span>
              </Link>
            </div>
          </div>

          <div className="hero-markets">
            <span>Delhi NCR</span>
            <i>•</i>
            <span>Dehradun</span>
            <i>•</i>
            <span>Dubai</span>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="intro section-white">
          <div className="container intro-grid">
            <Reveal direction="left">
              <div>
                <div className="eyebrow">
                  Advisory Perspective
                </div>

                <div className="rule-short" />

                <p className="micro">
                  Real Estate Consultancy & Strategic Advisory
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div>
                <h2>
                  More than property.
                  <br />
                  A better decision.
                </h2>

                <div className="body-copy">
                  <p>
                    Digithum Consultancy Services helps private
                    clients, families and businesses navigate real
                    estate with a more deliberate approach to
                    selection, evaluation and execution.
                  </p>

                  <p>
                    We combine local market understanding with
                    disciplined curation, so the conversation starts
                    with what actually fits your requirement—not
                    with an endless list of properties.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            MARKETS
        ===================================================== */}

        <section id="markets" className="section section-muted">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Geographic Focus"
                title="Our Primary Markets"
                text="Three markets. One disciplined advisory approach."
              />
            </Reveal>

            <div className="market-grid">
              {markets.map((market, index) => (
                <Reveal
                  key={market.name}
                  delay={index * 120}
                  className="reveal-card"
                >
                  <article className="market-card">
                    <div className="image-frame">
                      <img
                        src={market.image}
                        alt={`${market.name} real estate`}
                      />

                      <span className="badge">
                        {market.tag}
                      </span>
                    </div>

                    <div className="market-body">
                      <h3>{market.name}</h3>

                      <p className="market-services">
                        {market.services}
                      </p>

                      <p>{market.copy}</p>

                      <Link
                        className="text-link"
                        href="#contact"
                      >
                        Explore the market <span>→</span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ASSET EXPERTISE
        ===================================================== */}

        <section
          id="expertise"
          className="section section-white"
        >
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Core Disciplines"
                title="Our Asset Expertise"
                text="Focused expertise across the asset classes that matter to our clients."
              />
            </Reveal>

            <div className="expertise-list">
              {expertise.map((item, index) => (
                <Reveal
                  key={item.number}
                  delay={index * 120}
                  direction={
                    index % 2 === 0 ? "left" : "right"
                  }
                  className="expertise-reveal"
                >
                  <article
                    className={`expertise-row ${
                      index % 2 ? "reverse" : ""
                    }`}
                  >
                    <div className="expertise-copy">
                      <div className="number-line">
                        <span>{item.number}</span>
                        <i />
                        <small>Asset Class</small>
                      </div>

                      <h3>{item.title}</h3>

                      <p>{item.copy}</p>

                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>
                            <span />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <Link
                        className="text-link orange-link"
                        href="#contact"
                      >
                        Request a briefing <span>→</span>
                      </Link>
                    </div>

                    <div className="expertise-image image-frame">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section
          id="projects"
          className="section section-muted"
        >
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Portfolio In Focus"
                title="Curated Opportunities"
                text="Selected opportunities, presented with the context you need to evaluate them."
              />
            </Reveal>

            {/* Featured Project */}

            <Reveal
              direction="up"
              delay={100}
              className="featured-reveal"
            >
              <div className="featured-project">
                <Link
                  href={`/projects/${featured.slug}`}
                  className="featured-image image-frame"
                >
                  <img
                    src={featured.image}
                    alt={featured.name}
                  />

                  <span className="badge badge-orange">
                    Featured Opportunity
                  </span>

                  <span className="featured-arrow">
                    ↗
                  </span>
                </Link>

                <div className="featured-copy">
                  <span className="kicker">
                    {featured.category} ·{" "}
                    {featured.location}
                  </span>

                  <h3>{featured.name}</h3>

                  <p>{featured.description}</p>

                  <div className="spec-row">
                    <span>
                      <small>Configuration</small>

                      <strong>
                        {featured.configurations.join(" · ")}
                      </strong>
                    </span>

                    <span>
                      <small>Price</small>

                      <strong>
                        {featured.price}
                      </strong>
                    </span>
                  </div>

                  <Link
                    className="button button-dark"
                    href={`/projects/${featured.slug}`}
                  >
                    View Opportunity <span>→</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Secondary Projects */}

            <div className="project-grid">
              {secondary.map((project, index) => (
                <Reveal
                  key={project.slug}
                  delay={index * 100}
                >
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW WE WORK
        ===================================================== */}

        <section className="section section-white">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Advisory Methodology"
                title="How We Work"
                text="A clear process designed to reduce noise and improve the quality of the decision."
              />
            </Reveal>

            <div className="process-grid">
              {process.map(
                ([num, title, copy, meta], index) => (
                  <Reveal
                    key={num}
                    delay={index * 110}
                  >
                    <article
                      className={`process-card ${
                        num === "04" ? "accent" : ""
                      }`}
                    >
                      <span className="process-num">
                        {num}
                      </span>

                      <h3>{title}</h3>

                      <p>{copy}</p>

                      <small>{meta}</small>
                    </article>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY DIGITHUM
        ===================================================== */}

        <section
          id="about"
          className="section section-muted"
        >
          <div className="container">
            <Reveal>
              <div className="why-heading">
                <div>
                  <div className="eyebrow">
                    The Digithum Standard
                  </div>

                  <h2>Why Digithum</h2>
                </div>

                <p>
                  Digithum Consultancy Services is built around a
                  simple idea: better property decisions begin
                  with better questions, better information and
                  better curation.
                </p>
              </div>
            </Reveal>

            <div className="pillar-grid">
              {pillars.map(
                ([num, title, copy], index) => (
                  <Reveal
                    key={num}
                    delay={index * 100}
                  >
                    <article className="pillar">
                      <span>{num}</span>

                      <h3>{title}</h3>

                      <p>{copy}</p>
                    </article>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="contact-section"
        >
          <div
            className="contact-glow"
            aria-hidden="true"
          />

          <div className="container contact-grid">
            <Reveal direction="left">
              <div className="contact-copy">
                <div className="eyebrow light">
                  Private Advisory Engagement
                </div>

                <h2>
                  Let&apos;s find the right opportunity.
                </h2>

                <p>
                  Tell Digithum Consultancy Services what you are
                  looking for. We&apos;ll help you navigate the
                  opportunities that fit your requirement with
                  clarity and discretion.
                </p>

                <div className="contact-meta">
                  <div>
                    <small>
                      Direct Advisory Line
                    </small>

                    <a href="tel:+917827510831">
                      +91 782 751 0831
                    </a>
                  </div>

                  <div>
                    <small>
                      Client Mandate Desk
                    </small>

                    <a href="mailto:digithum.realtors@gmail.com">
                      digithum.realtors@gmail.com
                    </a>
                  </div>

                  <div>
                    <small>Markets</small>

                    <span>
                      Delhi NCR · Dehradun · Dubai
                    </span>
                  </div>
                </div>

                <a
                  className="whatsapp-link"
                  href="https://wa.me/message/UOHXGSJP6EL4G1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="pulse" />

                  Connect on WhatsApp

                  <b>→</b>
                </a>
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={150}
            >
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <div className="container footer-top">
          <Reveal>
            <div className="footer-brand">
              <div className="brand">
                <img
                  src="/digithum-logo.jpg"
                  alt="Digithum Realtors logo"
                />

                <span className="brand-copy">
                  <strong>DIGITHUM</strong>
                  <small>REALTORS</small>
                </span>
              </div>

              <p>
                Digithum Consultancy Services — real estate
                consultancy and advisory across residential,
                commercial and industrial opportunities.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="footer-col">
              <h4>Explore</h4>

              <Link href="#projects">
                Projects
              </Link>

              <Link href="#markets">
                Markets
              </Link>

              <Link href="#about">
                About
              </Link>

              <Link href="#contact">
                Contact
              </Link>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="footer-col">
              <h4>Markets</h4>

              <Link href="#markets">
                Delhi NCR
              </Link>

              <Link href="#markets">
                Dehradun
              </Link>

              <Link href="#markets">
                Dubai
              </Link>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="footer-col">
              <h4>Connect</h4>

              <Link href="#contact">
                Enquire Now
              </Link>

              <a href="mailto:advisory@digithumrealtors.com">
                Email
              </a>

              <a href="tel:+918004567890">
                Call
              </a>
            </div>
          </Reveal>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Digithum Consultancy Services. All rights
            reserved.
          </span>

          <span>
            Digithum Realtors · Real Estate Consultancy
          </span>
        </div>
      </footer>
    </>
  );
}


/* =========================================================
   SECTION HEADING
   ========================================================= */

function SectionHeading({
  eyebrow,
  title,
  text,
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          {eyebrow}
        </div>

        <h2>{title}</h2>
      </div>

      <p>{text}</p>
    </div>
  );
}


/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="image-frame"
      >
        <img
          src={project.image}
          alt={project.name}
        />

        <span className="badge">
          {project.category}
        </span>
      </Link>

      <div className="project-body">
        <span className="kicker">
          {project.location}
        </span>

        <h3>{project.name}</h3>

        <div className="mini-specs">
          <span>
            {project.configurations[0]}
          </span>

          <span>
            {project.price}
          </span>
        </div>

        <Link
          className="text-link"
          href={`/projects/${project.slug}`}
        >
          View dossier <span>→</span>
        </Link>
      </div>
    </article>
  );
}