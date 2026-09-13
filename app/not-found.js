import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <span className="eyebrow">404</span>
        <h1>Opportunity not found.</h1>
        <p>The requested project dossier is not available.</p>
        <Link className="button button-dark" href="/">Return home →</Link>
      </div>
    </main>
  );
}
