import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const writingDirectory = path.join(process.cwd(), "content", "writing");

export function getWriting() {
  return fs
    .readdirSync(writingDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const filePath = path.join(writingDirectory, fileName);
      const file = fs.readFileSync(filePath, "utf8");
      const { data } = matter(file);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt ?? ""
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getWritingBySlug(slug) {
  const filePath = path.join(writingDirectory, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);

  return {
    slug,
    title: data.title,
    date: data.date,
    html: marked.parse(content)
  };
}
