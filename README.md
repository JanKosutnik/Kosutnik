# Kosutnik

Jan Kosutnik's personal website.

This site is intentionally small: a disciplined Next.js static export deployed to GitHub Pages. The goal is not to look like a startup landing page. The goal is to be a public thinking space with a clear point of view.

## Local Editing

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Writing lives in `content/writing`.

## Publishing

Push to `main`. GitHub Actions builds the static export and publishes `out/` to GitHub Pages at `kosutnik.com`.

## Agent Workflow

Read `AGENTS.md` and `CLAUDE.md` before making changes.
