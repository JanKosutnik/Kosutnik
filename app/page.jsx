import SiteShell from "@/components/SiteShell";
import { getWriting, formatDate } from "@/lib/writing";
import { getNow, formatNowDate } from "@/lib/now";

const principles = [
  "Before you build something, ask if it needs to exist at all.",
  "If you can remove it and nothing breaks, remove it.",
  "A good tool stays out of your way. The best one, you forget you're using.",
  "If you need a manual to use it, the design is making you do its job.",
  "Every feature you add is a promise to keep it working — forever.",
  "Don't start from what everyone else built. Start from the problem in front of you.",
  "Count the time a tool costs you, not just the time it saves.",
  "Anyone can add. The hard part is knowing what to leave out.",
  "Most \"must-have\" features are just habits no one ever questioned.",
  "When something feels confusing, it's not you. It's the design.",
  "Simple isn't less. It's everything that matters and nothing that doesn't.",
  "A tool should help you finish — not keep you coming back.",
  "Ask one thing: did this actually make life easier? If not, cut it."
];

function groupByYear(items) {
  return items.reduce((groups, item) => {
    const year = item.date.slice(0, 4);
    const entry = { ...item, displayDate: formatDate(item.date) };
    const group = groups.find((g) => g.year === year);
    if (group) group.items.push(entry);
    else groups.push({ year, items: [entry] });
    return groups;
  }, []);
}

export default function Home() {
  const writingGroups = groupByYear(getWriting());
  const now = getNow();

  return (
    <SiteShell>
      <section id="about">
        <p>My background spans user experience, software development and quality assurance — mostly to understand where products start becoming harder than they need to be.</p>
        <p>Most problems are not technical first. They are decision problems that became technical problems later. I build small systems that stay out of the way.</p>
        <p>Sometimes that means AI. Sometimes it means deleting a tool, changing a process or deciding that the impressive thing is the wrong thing.</p>
      </section>

      <section id="principles" className="principles">
        <h2>Principles</h2>
        <ol>
          {principles.map((p) => <li key={p}>{p}</li>)}
        </ol>
      </section>

      <section id="notes" className="writing">
        <h2>Notes</h2>
        <div className="writing-table">
          {writingGroups.map((group) => (
            <div className="writing-year" key={group.year}>
              <div className="year">{group.year}</div>
              <ul className="posts">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <a href={`/writing/${item.slug}/`}>{item.title}</a>
                    <time className="d" dateTime={item.date}>{item.displayDate}</time>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="now" className="now">
        <h2>Now</h2>
        <p className="now-updated">Updated {formatNowDate(now.updated)}</p>
        {now.reading?.filter(i => i.title).length > 0 && (
          <div className="now-group">
            <h3>Reading</h3>
            <ul className="now-list">
              {now.reading.filter(i => i.title).map((item) => (
                <li key={item.title}><em>{item.title}</em>{item.author && ` — ${item.author}`}</li>
              ))}
            </ul>
          </div>
        )}
        {now.have_read?.filter(i => i.title).length > 0 && (
          <div className="now-group">
            <h3>Have read</h3>
            <ul className="now-list">
              {now.have_read.filter(i => i.title).map((item) => (
                <li key={item.title}><em>{item.title}</em>{item.author && ` — ${item.author}`}</li>
              ))}
            </ul>
          </div>
        )}
        {now.using?.filter(i => i.name).length > 0 && (
          <div className="now-group">
            <h3>Using</h3>
            <ul className="now-list">
              {now.using.filter(i => i.name).map((item) => (
                <li key={item.name}>{item.name}{item.note && <span className="note"> — {item.note}</span>}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          You can find me on{" "}
          <a className="link" href="https://x.com/JanKosutnik" rel="noopener noreferrer" target="_blank">X</a>,{" "}
          <a className="link" href="https://www.linkedin.com/in/jankosutnik" rel="noopener noreferrer" target="_blank">LinkedIn</a>{" "}
          or reach me via{" "}
          <a className="link" href="mailto:jan@kosutnik.com">jan@kosutnik.com</a>.
        </p>
      </section>
    </SiteShell>
  );
}
