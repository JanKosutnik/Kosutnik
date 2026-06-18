import Link from 'next/link'
import GardenHeader from '@/components/GardenHeader'
import SeasonLabel from '@/components/SeasonLabel'
import LjubljanaClock from '@/components/LjubljanaClock'

export default function Home() {
  return (
    <>
      <GardenHeader />
      <div id="top" className="max-w-[58rem] mx-auto px-6 pt-4 pb-24">

        {/* Intro */}
        <p className="font-news italic text-intro text-base leading-relaxed mt-5">
          Thinking about AI, quiet software, and what is worth building.
          My background spans user experience, software development and quality assurance.
        </p>

        {/* Status */}
        <p className="mt-3 text-ink">
          <SeasonLabel /> 2026 &mdash; working out what to build next. Making small tools with AI to find out.
        </p>

        {/* Notes */}
        <section id="notes" className="mt-[3.6rem]">
          <p className="font-medium m-0 mb-3">Notes</p>
          <div>
            {[
              { title: 'On removing things',              href: '/writing/on-removing-things/',              date: '18 May 2026' },
              { title: 'Notes toward a calmer interface', href: '/writing/notes-toward-a-calmer-interface/', date: '2 April 2026' },
            ].map(({ title, href, date }) => (
              <div key={href} className="flex justify-between items-baseline gap-4 py-1">
                <Link href={href} className="hover:text-muted transition-colors">{title}</Link>
                <span className="text-[.8rem] text-muted whitespace-nowrap">{date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="mt-[3.6rem]">
          <p className="font-medium m-0 mb-3">Principles</p>
          <div className="flex flex-col gap-4">
            {[
              'Before you build something, ask whether it needs to exist.',
              'If you can remove it and nothing breaks, remove it.',
              'A good tool stays out of your way. The best one, you forget you are using.',
              'Every feature you add is a promise to keep it working.',
            ].map((principle, i) => (
              <div key={i}>
                <div className="text-[.8rem] text-muted tabular-nums mb-0.5">{String(i + 1).padStart(2, '0')}</div>
                <p className="m-0">{principle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open questions */}
        <section id="questions" className="mt-[3.6rem]">
          <p className="font-medium m-0 mb-3">Open questions</p>
          <div className="flex flex-col gap-3">
            <p className="m-0">How do you count the time a tool costs you, not only the time it saves?</p>
            <p className="m-0">When does removing something improve a product more than adding something?</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-[3.6rem]">
          <p className="text-muted m-0">
            <a href="mailto:jan@kosutnik.com" className="text-ink hover:text-muted transition-colors">jan@kosutnik.com</a>
            {' · '}
            <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-muted transition-colors">X</a>
            {' · '}
            <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-muted transition-colors">LinkedIn</a>
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-muted">
          <span className="tabular-nums">Ljubljana &middot; <LjubljanaClock /></span>
        </footer>

      </div>
    </>
  )
}
