import GardenIcons from "@/components/GardenIcons";
import SeasonLabel from "@/components/SeasonLabel";
import LjubljanaClock from "@/components/LjubljanaClock";

function Icon({ id, className = '' }) {
  return (
    <svg className={`g-icon${className ? ' ' + className : ''}`} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}

const principles = [
  "Before you build something, ask if it needs to exist at all.",
  "If you can remove it and nothing breaks, remove it.",
  "A good tool stays out of your way. The best one, you forget you're using.",
  "If you need a manual to use it, the design is making you do its job.",
  "Every feature you add is a promise to keep it working — forever.",
  "Don't start from what everyone else built. Start from the problem in front of you.",
  "Count the time a tool costs you, not just the time it saves.",
  "Anyone can add. The hard part is knowing what to leave out.",
  'Most "must-have" features are just habits no one ever questioned.',
  "When something feels confusing, it's not you. It's the design.",
  "Simple isn't less. It's everything that matters and nothing that doesn't.",
  "A tool should help you finish — not keep you coming back.",
  "Ask one thing: did this actually make life easier? If not, cut it.",
];

export default function Home() {
  return (
    <>
      <GardenIcons />
      <div className="g-page">

        <header className="g-masthead" id="top">
          <a className="g-wordmark" href="#top">Jan Ko&#353;utnik</a>
          <nav aria-label="Sections">
            <a href="#tending">Tending</a>
            <a href="#seedlings">Seedlings</a>
            <a href="#growing">Growing</a>
            <a href="#evergreen">Evergreen</a>
            <a href="#inputs">Inputs</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <p className="g-intro">
          This is a garden, not a blog. Things here grow at different speeds — some are seedlings I&#39;m still unsure about, a few have weathered into evergreen.
        </p>

        <div className="g-legend">
          <span><Icon id="g-seedling" className="plant" /> seedling — just planted</span>
          <span><Icon id="g-growing" className="plant d1" /> growing — tended</span>
          <span><Icon id="g-evergreen" className="plant d2" /> evergreen — settled</span>
        </div>

        <div className="g-bed" id="tending">
          <div className="g-head">
            <span className="g-stage"><Icon id="g-drop" className="drop" /> Tending now</span>
            <SeasonLabel />
          </div>
          <p>Between things — working out what to build next, and building small things with AI to find out. Rebuilding this site into something I actually use.</p>
        </div>

        <div className="g-bed" id="seedlings">
          <div className="g-head">
            <span className="g-stage"><Icon id="g-seedling" className="plant" /> Seedlings</span>
            <span className="g-gloss">questions I&#39;m holding</span>
          </div>
          <ul>
            <li className="g-q">How do you count the time a tool costs you — not just the time it saves?</li>
            <li className="g-q">When does removing a feature improve a product more than adding one?</li>
            <li className="g-q">What&#39;s the difference between simple and merely less?</li>
            <li className="g-q">How much of &#34;must-have&#34; is just a habit no one questioned?</li>
          </ul>
        </div>

        <div className="g-bed" id="growing">
          <div className="g-head">
            <span className="g-stage"><Icon id="g-growing" className="plant d1" /> Growing</span>
            <span className="g-gloss">notes, still moving</span>
          </div>
          <div className="g-note"><span><a href="/writing/on-removing-things/">On removing things</a></span><span className="g-d">18/05/2026</span></div>
          <div className="g-note"><span><a href="/writing/notes-toward-a-calmer-interface/">Notes toward a calmer interface</a></span><span className="g-d">02/04/2026</span></div>
        </div>

        <div className="g-bed" id="evergreen">
          <div className="g-head">
            <span className="g-stage"><Icon id="g-evergreen" className="plant d2" /> Evergreen</span>
            <span className="g-gloss">principles I keep returning to</span>
          </div>
          <ul className="g-pr">
            {principles.map((p, i) => (
              <li key={i}>
                <span className="g-n">{String(i + 1).padStart(2, '0')}</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="g-bed">
          <div className="g-head">
            <span className="g-stage"><Icon id="g-seeds" className="seeds" /> Feeding the garden</span>
            <span className="g-gloss">the few that left a mark</span>
          </div>
          <div className="g-read">
            <span><a href="https://www.elonmuskbook.org/" target="_blank" rel="noopener noreferrer">The Book of Elon</a></span>
            <span className="g-a">Eric Jorgenson</span>
          </div>
          <div className="g-read">
            <span><a href="https://37signals.com/books" target="_blank" rel="noopener noreferrer">Rework</a></span>
            <span className="g-a">Jason Fried &amp; DHH</span>
          </div>
          <div className="g-read">
            <span><a href="https://basecamp.com/gettingreal" target="_blank" rel="noopener noreferrer">Getting Real</a></span>
            <span className="g-a">37signals</span>
          </div>
          <div className="g-read">
            <span><a href="https://www.nickbilton.com/books" target="_blank" rel="noopener noreferrer">Hatching Twitter</a></span>
            <span className="g-a">Nick Bilton</span>
          </div>
          <div className="g-read">
            <span><a href="https://www.penguinrandomhouse.com/books/549478/bad-blood-by-john-carreyrou/" target="_blank" rel="noopener noreferrer">Bad Blood</a></span>
            <span className="g-a">John Carreyrou</span>
          </div>
        </div>

        <div className="g-bed" id="inputs">
          <div className="g-head">
            <span className="g-stage"><Icon id="g-trowel" className="tool" /> Inputs</span>
            <span className="g-gloss">tools &amp; voices</span>
          </div>
          <p className="g-lane">Using</p>
          <p className="g-apps">
            <a href="https://mymind.com/" target="_blank" rel="noopener noreferrer">mymind</a>,{' '}
            <a href="https://culturedcode.com/things/" target="_blank" rel="noopener noreferrer">Things</a>,{' '}
            Apple Notes,{' '}
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude</a>
          </p>
          <p className="g-lane">Listening</p>
          <div className="g-read">
            <span><a href="https://www.founderspodcast.com" target="_blank" rel="noopener noreferrer">Founders</a></span>
            <span className="g-a">David Senra</span>
          </div>
          <div className="g-read">
            <span><a href="https://www.mfmpod.com" target="_blank" rel="noopener noreferrer">My First Million</a></span>
            <span className="g-a">Sam Parr &amp; Shaan Puri</span>
          </div>
          <div className="g-read">
            <span><a href="https://www.npr.org/podcasts/510313/how-i-built-this" target="_blank" rel="noopener noreferrer">How I Built This</a></span>
            <span className="g-a">Guy Raz</span>
          </div>
          <div className="g-read">
            <span><a href="https://every.to/podcast" target="_blank" rel="noopener noreferrer">AI &amp; I</a></span>
            <span className="g-a">Dan Shipper</span>
          </div>
          <div className="g-read">
            <span><a href="https://www.lennysnewsletter.com/podcast" target="_blank" rel="noopener noreferrer">Lenny&#39;s Podcast</a></span>
            <span className="g-a">Lenny Rachitsky</span>
          </div>
          <div className="g-read">
            <span><a href="https://www.dwarkesh.com" target="_blank" rel="noopener noreferrer">Dwarkesh Podcast</a></span>
            <span className="g-a">Dwarkesh Patel</span>
          </div>
        </div>

        <p className="g-foot" id="contact">
          Reach me at <a href="mailto:jan@kosutnik.com">jan@kosutnik.com</a>, or on{' '}
          <a href="https://x.com/JanKosutnik" target="_blank" rel="noopener noreferrer">X</a>{' '}
          and <a href="https://www.linkedin.com/in/jankosutnik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>

        <footer className="g-colophon">
          <span>&copy; 2026 Jan Ko&#353;utnik</span>
          <span className="g-t">Ljubljana &middot; <LjubljanaClock /></span>
        </footer>

      </div>
    </>
  );
}
