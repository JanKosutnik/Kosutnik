import { notFound } from "next/navigation";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { getWriting, getWritingBySlug } from "@/lib/writing";

export function generateStaticParams() {
  return getWriting().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  return { title: post ? `${post.title} - Jan Košutnik` : "Not found - Jan Košutnik" };
}

export default async function WritingPage({ params }) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <article>
        <Link href="/" className="inline-block mb-8 text-muted hover:text-ink transition-colors no-underline">
          &larr; back
        </Link>
        <h1 className="font-medium mb-1">{post.title}</h1>
        <span className="block text-muted mb-10">{post.date}</span>
        <div
          className="[&>p]:mb-6 [&>h2]:font-medium [&>h2]:mt-10 [&>h2]:mb-4 [&>ul]:pl-5 [&>ul]:mb-6 [&>ol]:pl-5 [&>ol]:mb-6"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </SiteShell>
  );
}
