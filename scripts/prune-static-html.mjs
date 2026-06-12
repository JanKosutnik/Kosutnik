import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const staticDir = join(outDir, "_next", "static");

async function getFiles(dir, predicate) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);

      if (entry.isDirectory()) {
        return getFiles(path, predicate);
      }

      return entry.isFile() && predicate(entry.name) ? [path] : [];
    })
  );

  return files.flat();
}

function pruneHtml(html) {
  return html
    .replace(/<link\b(?=[^>]*\brel=["']preload["'])(?=[^>]*\bas=["']script["'])[^>]*>/gi, "")
    .replace(/<script\b(?![^>]*\bdata-keep\b)[^>]*>[\s\S]*?<\/script>/gi, "");
}

const htmlFiles = await getFiles(outDir, (name) => name.endsWith(".html"));

await Promise.all(
  htmlFiles.map(async (file) => {
    const html = await readFile(file, "utf8");
    const pruned = pruneHtml(html);

    if (pruned !== html) {
      await writeFile(file, pruned);
    }
  })
);

const staticScripts = await getFiles(staticDir, (name) => name.endsWith(".js"));

await Promise.all(staticScripts.map((file) => rm(file)));
await rm(join(staticDir, "chunks"), { recursive: true, force: true });

console.log(`Pruned scripts from ${htmlFiles.length} static HTML files and removed ${staticScripts.length} JS assets.`);
