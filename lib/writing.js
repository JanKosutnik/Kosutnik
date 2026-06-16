import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content", "writing");

export function formatDate(dateStr) {
  const [, month, day] = dateStr.split(".");
  return `${day}/${month}`;
}

export function getWriting() {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return { slug: f.replace(/\.md$/, ""), title: data.title, date: data.date };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getWritingBySlug(slug) {
  try {
    const { content, data } = matter(fs.readFileSync(path.join(dir, `${slug}.md`), "utf8"));
    return { slug, title: data.title, date: data.date, html: marked.parse(content) };
  } catch {
    return null;
  }
}
