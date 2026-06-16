import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const nowFile = path.join(process.cwd(), "content", "now.md");

export function formatNowDate(date) {
  const d = new Date(date);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function getNow() {
  const { data } = matter(fs.readFileSync(nowFile, "utf8"));
  return data;
}
