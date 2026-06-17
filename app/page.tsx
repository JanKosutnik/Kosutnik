import Link from 'next/link'
import GardenIcons from '@/components/GardenIcons'
import GardenHeader from '@/components/GardenHeader'
import SeasonLabel from '@/components/SeasonLabel'
import LjubljanaClock from '@/components/LjubljanaClock'

export default function Home() {
  return (
    <>
      <GardenIcons />
      <GardenHeader />
      <div id="top" className="max-w-[44rem] px-6 pt-4 pb-24">

        {/* Intro */}
        <div className="mt-5">
          <p className="text-base leading-relaxed text-intro">
            This is a garden, not a blog. Things here grow at different speeds &mdash;
            some are seedlings I&rsquo;m still unsure about, a few have weathered into evergreen.
          </p>
          <p className="mt-3 text-ink">
            <span className="text-muted"><SeasonLabel />. </span>
            Between things &mdash; working out what to build next, and building small things
            with AI to find out. Rebuilding this site into something I actually use.
          </p>
        </div>

        {/* In the field */}
        <section id="field" className="mt-[3.6rem]">
          <div className="group flex flex-wrap items-center gap-x-2 gap-y-1">
            <svg width="15" height="15" aria-hidden="true" className="flex-none group-hover:animate-sway" style={{ transformOrigin: '50% 92%' }}>
              <use href="#icon-youngplant" />
            </svg>
            <span className="font-medium">In the field</span>
            <span className="text-muted">questions &amp; notes</span>
          </div>
          <ul className="mt-2 list-none p-0 m-0">
            {[
              'How do you count the time a tool costs you - not just the time it saves?',
              'When does removing a feature improve a product more than adding one?',
              "What's the difference between simple and merely less?",
              'How much of "must-have" is just a habit no one questioned?',
            ].map((q) => (
              <li key={q} className="py-1">{q}</li>
            ))}
          </ul>
          <div className="mt-3">
            {[
              { title: 'On removing things',              href: '/writing/on-removing-things/',              date: '18/05/2026' },
              { title: 'Notes toward a calmer interface', href: '/writing/notes-toward-a-calmer-interface/', date: '02/04/2026' },
            ].map(({ title, href, date }) => (
              <div key={href} className="flex justify-between items-baseline gap-4 py-1">
                <Link href={href} className="hover:text-muted transition-colors">{title}</Link>
                <span className="text-[.8rem] text-muted whitespace-nowrap">{date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Evergreen */}
        <section id="evergreen" className="mt-[3.6rem]">
          <div className="group flex flex-wrap items-center gap-x-2 gap-y-1">
            <svg width="15" height="15" aria-hidden="true" className="flex-none group-hover:animate-sway" style={{ transformOrigin: '50% 92%' }}>
              <use href="#icon-fir" />
            </svg>
            <span className="font-medium">Evergreen</span>
            <span className="text-muted">principles I keep returning to</span>
          </div>
          <ul className="mt-2 list-none p-0 m-0">
            {[
              'Before you build something, ask if it needs to exist at all.',
              'If you can remove it and nothing breaks, remove it.',
              'A good tool stays out of your way. The best one, you forget you\'re using.',
              'Every feature you add is a promise to keep it working - forever.',
              'Most "must-have" features are just habits no one ever questioned.',
              'When something feels confusing, it\'s not you. It\'s the design.',
              'Simple isn\'t less. It\'s everything that matters and nothing that doesn\'t.',
            ].map((p, i) => (
              <li key={i} className="flex gap-2 py-[.16rem]">
                <span className="text-[.8rem] text-muted w-6 shrink-0 tabular-nums pt-[.15em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Feeding the garden */}
        <section id="feeding" className="mt-[3.6rem]">
          <div className="group flex flex-wrap items-center gap-x-2 gap-y-1">
            <svg width="15" height="15" aria-hidden="true" className="flex-none group-hover:animate-wobble" style={{ transformOrigin: '50% 62%' }}>
              <use href="#icon-stars" />
            </svg>
            <span className="font-medium">Feeding the garden</span>
            <span className="text-muted">books, tools & voices</span>
          </div>
          <p className="text-muted mt-3 mb-1">Books</p>
          <div>
            {[
              { title: 'The Book of Elon',  author: 'Eric Jorgenson',         href: 'https://www.elonmuskbook.org/' },
              { title: 'Rework',             author: 'Jason Fried & DHH',      href: 'https://37signals.com/books' },
              { title: 'Getting Real',       author: '37signals',              href: 'https://basecamp.com/gettingreal' },
              { title: 'Hatching Twitter',   author: 'Nick Bilton',            href: 'https://www.nickbilton.com/books' },
              { title: 'Bad Blood',          author: 'John Carreyrou',         href: 'https://www.penguinrandomhouse.com/books/549478/bad-blood-by-john-carreyrou/' },
            ].map(({ title, author, href }) => (
              <div key={href} className="flex justify-between items-baseline gap-4 py-1">
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">{title}</a>
                <span className="text-[.85rem] text-muted whitespace-nowrap">{author}</span>
              </div>
            ))}
          </div>
          <p className="text-muted mt-4 mb-1">Tools</p>
          <p className="leading-[1.9]">
            <a href="https://mymind.com/" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">mymind</a>
            {' · '}
            <a href="https://culturedcode.com/things/" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">Things</a>
            {' · '}
            Apple Notes
            {' · '}
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">Claude</a>
          </p>
          <p className="text-muted mt-4 mb-1">Listening</p>
          <div>
            {[
              { show: 'Founders',          host: 'David Senra',              href: 'https://www.founderspodcast.com' },
              { show: 'My First Million',  host: 'Sam Parr & Shaan Puri',   href: 'https://www.mfmpod.com' },
              { show: 'How I Built This',  host: 'Guy Raz',                  href: 'https://www.npr.org/podcasts/510313/how-i-built-this' },
              { show: 'AI & I',            host: 'Dan Shipper',              href: 'https://every.to/podcast' },
              { show: "Lenny's Podcast",   host: 'Lenny Rachitsky',          href: 'https://www.lennysnewsletter.com/podcast' },
              { show: 'Dwarkesh Podcast',  host: 'Dwarkesh Patel',           href: 'https://www.dwarkesh.com' },
            ].map(({ show, host, href }) => (
              <div key={href} className="flex justify-between items-baseline gap-4 py-1">
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">{show}</a>
                <span className="text-[.85rem] text-muted whitespace-nowrap">{host}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-[3.6rem] text-muted">
          &copy; 2026 Jan Ko&#353;utnik &middot; Made with care in Ljubljana, Slovenia. &middot;{' '}
          <a href="mailto:jan@kosutnik.com" className="text-ink hover:text-muted transition-colors">jan@kosutnik.com</a>
          {' · '}
          <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-muted transition-colors">X</a>
          {' · '}
          <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-muted transition-colors">LinkedIn</a>
          {' · '}
          <span className="tabular-nums">Ljubljana <LjubljanaClock /></span>
        </footer>

      </div>
    </>
  )
}
