import SiteShell from "@/components/SiteShell";
import { getWriting, getWritingBySlug } from "@/lib/writing";

export function generateStaticParams() {
  return getWriting().map((item) => ({
    slug: item.slug
  }));
}

export function generateMetadata({ params }) {
  const post = getWritingBySlug(params.slug);

  return {
    title: `${post.title} - KOSUTNIK`
  };
}

export default function WritingPage({ params }) {
  const post = getWritingBySlug(params.slug);

  return (
    <SiteShell>
      <article className="writing-body">
        <h1>{post.title}</h1>
        <span className="date">{post.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </SiteShell>
  );
}
