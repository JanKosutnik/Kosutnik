import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { getWriting } from "@/lib/writing";

function getWritingGroups(items) {
  return items.reduce((groups, item) => {
    const year = item.date.slice(0, 4);
    const displayDate = item.date.slice(5).replace(".", "/");
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
      <section className="profile" aria-labelledby="profile-title">
        <h1 id="profile-title">
          <Link className="name-highlight" href="/">
            Jan Kosutnik
          </Link>
        </h1>
        <p className="updated">Updated Jun 09, 2026</p>

        <div className="bio">
          <p>I am based in Ljubljana, Slovenia, and work with teams that want software and AI to feel less heavy.</p>

          <p>
            I help businesses carrying too many tools, broken processes, and decisions nobody stopped to question before
            the work began. My background spans design, development, and quality testing, mostly to understand where
            products start becoming harder than they need to be.
          </p>

          <p>
            Most problems are not technical first. They are decision problems that became technical problems later. I
            build small systems that stay out of the way.
          </p>

          <p>
            Sometimes that means AI. Sometimes it means deleting a tool, changing a process, or deciding that the
            impressive thing is the wrong thing.
          </p>

          <p>
            You can find me on <a href="https://x.com/JanKosutnik">X</a>,{" "}
            <a href="https://pub.hyperagent.com/p/o3PWMYflHx06xQeUujNiMW23QuAgs6vYX2miQTITn8g?v=1#">LinkedIn</a>, or
            reach me via <a href="mailto:jan@kosutnik.com">email</a>.
          </p>
        </div>
      </section>

      <section className="writing-section" aria-labelledby="writing-title">
        <h2 className="section-title">Writing</h2>
        <div className="writing-table">
          {writingGroups.map((group) => (
            <div className="writing-year" key={group.year}>
              <div className="year-label">{group.year}</div>
              <ul className="writing-list">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/writing/${item.slug}/`}>{item.title}</Link>
                    <time dateTime={item.date}>{item.displayDate}</time>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
