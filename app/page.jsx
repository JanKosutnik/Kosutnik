import SiteShell from "@/components/SiteShell";
import { getWriting } from "@/lib/writing";

const principles = [
  "Before you build something, ask if it needs to exist at all.",
  "If you can remove it and nothing breaks, remove it.",
  "A good tool stays out of your way. The best one, you forget you're using.",
  "If you need a manual to use it, the design is making you do its job.",
  "Every feature you add is a promise to keep it working - forever.",
  "Don't start from what everyone else built. Start from the problem in front of you.",
  "Count the time a tool costs you, not just the time it saves.",
  "Anyone can add. The hard part is knowing what to leave out.",
  "Most \"must-have\" features are just habits no one ever questioned.",
  "When something feels confusing, it's not you. It's the design.",
  "Simple isn't less. It's everything that matters and nothing that doesn't.",
  "A tool should help you finish - not keep you coming back.",
  "Ask one thing: did this actually make life easier? If not, cut it."
];

function getWritingGroups(items) {
  return items.reduce((groups, item) => {
    const year = item.date.slice(0, 4);
    const [, month, day] = item.date.split(".");
    const displayDate = `${day}/${month}`;
    const existingGroup = groups.find((group) => group.year === year);
    const entry = { ...item, displayDate };

    if (existingGroup) {
      existingGroup.items.push(entry);
    } else {
      groups.push({ year, items: [entry] });
    }

    return groups;
  }, []);
}

export default function Home() {
  const writing = getWriting();
  const writingGroups = getWritingGroups(writing);

  return (
    <SiteShell>
      <section id="about">
        <p>I work with teams that want software and AI to feel less heavy.</p>

        <p>
          I help businesses carrying too many tools, broken processes and decisions nobody stopped to question before
          the work began. My background spans user experience, software development and quality assurance mostly to
          understand where products start becoming harder than they need to be.
        </p>

        <p>
          Most problems are not technical first. They are decision problems that became technical problems later. I build
          small systems that stay out of the way.
        </p>

        <p>
          Sometimes that means AI. Sometimes it means deleting a tool, changing a process or deciding that the
          impressive thing is the wrong thing.
        </p>
      </section>

      <section id="principles" className="principles">
        <h2>Principles</h2>
        <ol>
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
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
                    <time className="d" dateTime={item.date}>
                      {item.displayDate}
                    </time>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          You can find me on{" "}
          <a className="link" href="https://x.com/JanKosutnik" rel="noopener noreferrer" target="_blank">
            X
          </a>
          ,{" "}
          <a className="link" href="https://www.linkedin.com/in/jankosutnik" rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>{" "}
          or reach me via{" "}
          <a className="link" href="mailto:jan@kosutnik.com">
            jan@kosutnik.com
          </a>
          .
        </p>
      </section>
    </SiteShell>
  );
}
