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
      <div id="top" className="max-w-[58rem] px-6 pt-4 pb-24">

        {/* Intro */}
        <p className="font-news italic text-intro text-base leading-relaxed mt-5">
          I build small systems that stay out of the way. A garden, not a blog &mdash; what I&rsquo;m tending, what I keep returning to, what&rsquo;s feeding it.
        </p>

        {/* Now */}
        <section id="now" className="mt-[3.6rem]">
          <div className="group flex flex-wrap items-center gap-x-2 gap-y-1">
            <svg width="15" height="15" aria-hidden="true" className="flex-none group-hover:animate-turn" style={{ transformOrigin: '50% 50%' }}>
              <use href="#icon-sun" />
            </svg>
            <span className="font-medium">Now</span>
            <span className="text-muted whitespace-nowrap">
              <SeasonLabel />
            </span>
          </div>
          <p className="mt-2 text-ink">
            Between things &mdash; working out what to build next, and building small things
            with AI to find out. Rebuilding this site into something I actually use.
          </p>
          <p className="text-[.85rem] text-muted mt-4 mb-1">Questions I&rsquo;m holding</p>
          <ul className="list-none p-0 m-0">
            {[
              'How do you count the time a tool costs you — not just the time it saves?',
              'When does removing a feature improve a product more than adding one?',
              "What’s the difference between simple and merely less?",
              'How much of “must-have” is just a habit no one questioned?',
            ].map((q) => (
              <li key={q} className="py-1">{q}</li>
            ))}
          </ul>
          <p className="text-[.85rem] text-muted mt-4 mb-1">Latest</p>
          <div className="flex justify-between items-baseline gap-4 py-1">
            <Link href="/writing/on-removing-things/" className="hover:text-muted transition-colors">On removing things</Link>
            <span className="text-[.8rem] text-muted whitespace-nowrap">18/05/2026</span>
          </div>
          <p className="text-[.8rem] text-muted mt-1">
            Older:{' '}
            <Link href="/writing/notes-toward-a-calmer-interface/" className="hover:text-ink transition-colors">Notes toward a calmer interface</Link>
            {' · 02/04/2026'}
          </p>
        </section>

        {/* Principles */}
        <section id="principles" className="mt-[3.6rem]">
          <div className="group flex flex-wrap items-center gap-x-2 gap-y-1">
            <svg width="15" height="15" aria-hidden="true" className="flex-none group-hover:animate-breathe" style={{ transformOrigin: '50% 50%' }}>
              <use href="#icon-fullmoon" />
            </svg>
            <span className="font-medium">Principles</span>
            <span className="text-muted">what I keep returning to</span>
          </div>
          <ul className="mt-2 list-none p-0 m-0">
            {[
              'Before you build something, ask if it needs to exist at all.',
              'If you can remove it and nothing breaks, remove it.',
              'A good tool stays out of your way. The best one, you forget you’re using.',
              'If you need a manual to use it, the design is making you do its job.',
              'Every feature you add is a promise to keep it working — forever.',
              'Don’t start from what everyone else built. Start from the problem in front of you.',
              'Count the time a tool costs you, not just the time it saves.',
              'Anyone can add. The hard part is knowing what to leave out.',
              'Most “must-have” features are just habits no one ever questioned.',
              'When something feels confusing, it’s not you. It’s the design.',
              'Simple isn’t less. It’s everything that matters and nothing that doesn’t.',
              'A tool should help you finish — not keep you coming back.',
              'Ask one thing: did this actually make life easier? If not, cut it.',
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

        {/* Inputs */}
        <section id="inputs" className="mt-[3.6rem]">
          <div className="group flex flex-wrap items-center gap-x-2 gap-y-1">
            <svg width="15" height="15" aria-hidden="true" className="flex-none group-hover:animate-orbit" style={{ transformOrigin: '50% 50%' }}>
              <use href="#icon-orbit" />
            </svg>
            <span className="font-medium">Inputs</span>
            <span className="text-muted">what&rsquo;s feeding the garden</span>
          </div>
          <p className="text-[.85rem] text-muted mt-4 mb-1">Reading &mdash; the few that left a mark</p>
          <div>
            {[
              { title: 'The Book of Elon',  author: 'Eric Jorgenson',    href: 'https://www.elonmuskbook.org/' },
              { title: 'Rework',            author: 'Jason Fried & DHH', href: 'https://37signals.com/books' },
              { title: 'Getting Real',      author: '37signals',         href: 'https://basecamp.com/gettingreal' },
              { title: 'Hatching Twitter',  author: 'Nick Bilton',       href: 'https://www.nickbilton.com/books' },
              { title: 'Bad Blood',         author: 'John Carreyrou',    href: 'https://www.penguinrandomhouse.com/books/549478/bad-blood-by-john-carreyrou/' },
            ].map(({ title, author, href }) => (
              <div key={href} className="flex justify-between items-baseline gap-4 py-1">
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">{title}</a>
                <span className="text-[.85rem] text-muted whitespace-nowrap">{author}</span>
              </div>
            ))}
          </div>
          <p className="text-[.85rem] text-muted mt-4 mb-1">Listening</p>
          <div>
            {[
              { show: 'Founders',          host: 'David Senra',            href: 'https://www.founderspodcast.com' },
              { show: 'My First Million',  host: 'Sam Parr & Shaan Puri',  href: 'https://www.mfmpod.com' },
              { show: 'How I Built This',  host: 'Guy Raz',                href: 'https://www.npr.org/podcasts/510313/how-i-built-this' },
              { show: 'AI & I',            host: 'Dan Shipper',            href: 'https://every.to/podcast' },
              { show: "Lenny’s Podcast", host: 'Lenny Rachitsky',    href: 'https://www.lennysnewsletter.com/podcast' },
              { show: 'Dwarkesh Podcast',  host: 'Dwarkesh Patel',         href: 'https://www.dwarkesh.com' },
            ].map(({ show, host, href }) => (
              <div key={href} className="flex justify-between items-baseline gap-4 py-1">
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">{show}</a>
                <span className="text-[.85rem] text-muted whitespace-nowrap">{host}</span>
              </div>
            ))}
          </div>
          <p className="text-[.85rem] text-muted mt-4 mb-1">Using</p>
          <p className="leading-[1.9]">
            <a href="https://mymind.com/" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">mymind</a>
            {' · '}
            <a href="https://culturedcode.com/things/" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">Things</a>
            {' · '}
            Apple Notes
            {' · '}
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">Claude</a>
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-[3.6rem]">
          <p className="text-muted">
            Reach me at{' '}
            <a href="mailto:jan@kosutnik.com" className="text-ink hover:text-muted transition-colors">jan@kosutnik.com</a>
            , or on{' '}
            <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-muted transition-colors">X</a>
            {' '}and{' '}
            <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-muted transition-colors">LinkedIn</a>
            .
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-muted flex justify-between items-baseline gap-4 flex-wrap">
          <span>&copy; 2026 Jan Ko&#353;utnik</span>
          <span className="tabular-nums">Ljubljana &middot; <LjubljanaClock /></span>
        </footer>

      </div>
    </>
  )
}
