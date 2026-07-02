import BandClient from '@/components/BandClient'
import { siteMeta } from '@/content/site'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <header className="band">
        <div className="band-inner">
          <span className="compile-line" aria-live="polite" aria-atomic="true">
            <span className="band-prompt" aria-hidden="true">$ </span>
            <span id="band-cmd">build kosutnik.com</span>
            <span id="band-caret" className="band-caret" aria-hidden="true"></span>
            <span id="band-done"> - done in 0.3s ✓</span>
          </span>

          <nav className="band-nav" id="band-nav" aria-label="Site navigation">
            <a href="#work">work</a>
            <a href="#principles">principles</a>
            <a href="#writing">writing</a>
            <a href={`mailto:${siteMeta.email}`}>email</a>
          </nav>

          <span className="band-meta" aria-label="Location and time">
            Ljubljana · <time id="band-clock" dateTime=""></time>
          </span>
        </div>
      </header>

      <main className="site-main" id="main-content">
        {children}
      </main>

      <BandClient />
    </>
  )
}
