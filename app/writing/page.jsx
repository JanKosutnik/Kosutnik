import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { getWriting } from "@/lib/writing";

export const metadata = {
  title: "Notes - Jan Košutnik"
};

export default function WritingIndex() {
  const writing = getWriting();

  return (
    <SiteShell>
      <section className="writing">
        <h1>Notes</h1>
        <div className="writing-table">
          <div className="writing-year">
            <div className="year">All</div>
            <ul className="posts">
              {writing.map((item) => (
                <li key={item.slug}>
                  <Link href={`/writing/${item.slug}/`}>{item.title}</Link>
                  <time className="d" dateTime={item.date}>
                    {item.date.split(".").slice(1).reverse().join("/")}
                  </time>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
