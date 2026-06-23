import { notFound } from "next/navigation";
import Link from "next/link";
import { getWriting, getWritingBySlug } from "@/lib/writing";

export function generateStaticParams() {
  return getWriting().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  return { title: post ? `${post.title} - Jan Kosutnik` : "Not found - Jan Kosutnik" };
}

export default async function WritingPage({ params }) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) notFound();

  return (
    <div
      className="min-h-screen px-6 py-8 md:px-12 md:py-12 font-mono"
      style={{ background: "var(--term-bg)", color: "var(--term-fg)" }}
    >
      <div className="max-w-[640px] mx-auto">
        <p className="font-medium mb-6" style={{ color: "var(--term-fg)" }}>
          <Link href="/" className="no-underline hover:opacity-80 transition-opacity">
            Jan Košutnik
          </Link>
        </p>

        <p className="text-sm mb-8">
          <Link
            href="/"
            className="no-underline transition-opacity hover:opacity-70"
            style={{ color: "var(--term-fg-muted)" }}
          >
            <span style={{ color: "var(--term-accent)" }}>jan@kosutnik</span>
            :~$ cd ..
          </Link>
        </p>

        <p className="text-sm mb-3" style={{ color: "var(--term-fg-muted)" }}>
          <span style={{ color: "var(--term-accent)" }}>#</span>{" "}
          writing/{slug}
        </p>

        <article>
          <h1
            className="font-medium text-base mb-0.5"
            style={{ color: "var(--term-accent)" }}
          >
            {post.title}
          </h1>
          <p className="text-sm mb-8" style={{ color: "var(--term-fg-muted)" }}>
            {post.date}
          </p>
          <div
            className="text-sm leading-relaxed
              [&>p]:mb-4
              [&>h2]:font-medium [&>h2]:mt-8 [&>h2]:mb-3
              [&>ul]:pl-4 [&>ul]:mb-4 [&>ol]:pl-4 [&>ol]:mb-4
              [&>ul>li]:mb-1 [&>ol>li]:mb-1"
            style={{ color: "var(--term-fg)" }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </div>
  );
}
