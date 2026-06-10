import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { getWriting } from "@/lib/writing";

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

      <section id="notes" className="writing">
        <h2>Notes</h2>
        <div className="writing-table">
          {writingGroups.map((group) => (
            <div className="writing-year" key={group.year}>
              <div className="year">{group.year}</div>
              <ul className="posts">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/writing/${item.slug}/`}>{item.title}</Link>
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
            email
          </a>
          .
        </p>
      </section>
    </SiteShell>
  );
}
