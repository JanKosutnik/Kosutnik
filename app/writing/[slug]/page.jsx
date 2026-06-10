import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import { getWriting, getWritingBySlug } from "@/lib/writing";

export function generateStaticParams() {
  return getWriting().map((item) => ({
    slug: item.slug
  }));
}

export function generateMetadata({ params }) {
  const post = getWritingBySlug(params.slug);

  return {
    title: `${post.title} - Jan Košutnik`
  };
}

export default function WritingPage({ params }) {
  const post = getWritingBySlug(params.slug);

  return (
    <SiteShell>
      <article className="writing-body">
        <Link className="back-link" href="/#notes">
          Notes
        </Link>
        <h1>{post.title}</h1>
        <span className="date">{post.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </SiteShell>
  );
}
