import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { getWriting } from "@/lib/writing";

export const metadata = {
  title: "Writing - KOSUTNIK"
};

export default function WritingIndex() {
  const writing = getWriting();

  return (
    <SiteShell>
      <section className="writing-section">
        <h1 className="section-title">Writing</h1>
        <div className="writing-table">
          <div className="writing-year">
            <div className="year-label">All</div>
            <ul className="writing-list">
              {writing.map((item) => (
                <li key={item.slug}>
                  <Link href={`/writing/${item.slug}/`}>{item.title}</Link>
                  <time dateTime={item.date}>{item.date.slice(5).replace(".", "/")}</time>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
