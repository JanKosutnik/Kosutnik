import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { getWriting, getWritingBySlug } from "@/lib/writing";

export function generateStaticParams() {
  return getWriting().map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) return { title: "Not found - Jan Košutnik" };
  return { title: `${post.title} - Jan Košutnik` };
}

export default async function WritingPage({ params }) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <article className="writing-body">
        <a className="back-link" href="/#notes">
          Notes
        </a>
        <h1>{post.title}</h1>
        <span className="date">{post.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </SiteShell>
  );
}
