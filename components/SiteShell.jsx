import Link from "next/link";

export default function SiteShell({ children }) {
  return (
    <main className="site">
      <header className="site-header">
        <Link className="site-name" href="/">
          KOSUTNIK
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/writing/">Writing</Link>
          <a href="https://x.com/JanKosutnik">X</a>
          <a href="mailto:jan@kosutnik.com">Email</a>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <span>&copy; 2026 KOSUTNIK. All rights reserved.</span>
      </footer>
    </main>
  );
}
