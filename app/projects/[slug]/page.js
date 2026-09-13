import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="project-page">
      <header className="project-header">
        <div className="container nav-inner">
          <Link className="brand" href="/#home">
            <img src="/digithum-logo.jpg" alt="Digithum Realtors logo" />
            <span className="brand-copy"><strong>DIGITHUM</strong><small>REALTORS</small></span>
          </Link>
          <Link className="button button-orange" href="/#contact">Enquire Now</Link>
        </div>
      </header>

      <section className="project-hero">
        <img src={project.image} alt={project.name} />
        <div className="project-hero-overlay" />
        <div className="container project-hero-content">
          <span className="eyebrow light">{project.category} · {project.location}</span>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="project-dossier">
        <div className="container dossier-grid">
          <div>
            <span className="eyebrow">Opportunity Dossier</span>
            <h2>A considered opportunity, not a listing.</h2>
            <p className="body-copy">Project specifications, commercial terms and availability are shared through a private briefing so the information remains current. Digithum Consultancy Services can coordinate the relevant developer documentation, site visit and allocation discussion.</p>
            <Link className="button button-dark" href="/#contact">Request Private Dossier <span>→</span></Link>
          </div>
          <div className="dossier-specs">
            <Spec label="Location" value={project.location} />
            <Spec label="Category" value={project.category} />
            <Spec label="Developer" value={project.developer} />
            <Spec label="Configuration" value={project.configurations.join(" · ")} />
            <Spec label="Pricing" value={project.price} />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow">Project Highlights</div><h2>What to explore</h2></div></div>
          <div className="highlight-grid">
            {project.highlights.map((item) => <div key={item}>{item}<span>↗</span></div>)}
          </div>
          <div className="amenities">
            <h3>Selected amenities</h3>
            <div>{project.amenities.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <footer className="footer simple-footer"><div className="container footer-bottom"><span>© 2026 Digithum Consultancy Services.</span><Link href="/#projects">Back to opportunities →</Link></div></footer>
    </main>
  );
}

function Spec({ label, value }) {
  return <div><small>{label}</small><strong>{value}</strong></div>;
}
