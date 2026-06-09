# Site Direction

## Concept

Build a minimalist personal website by Jan's rules, not by platform defaults. The site should work as a public thinking space: useful to Jan first, quietly useful to the right visitors second.

The homepage stays as the spine: direct, minimal, text-led, and slightly unusual. The telescopic interaction is a differentiator, but the thinking must remain readable without becoming a trick.

## Reference Direction

Use `benji.org` as a close reference for restraint:

- A plain identity page, not a designed landing page.
- Short biographical paragraphs with only the facts that matter.
- A small writing index with dates.
- No cards, no hero section, no decorative interface.
- The site should feel maintained by a person, not assembled from a template.

For Jan, keep the same directness but make the voice sharper around software complexity, AI, and quiet systems.

## Technology Decision

For the current stage, use Next.js with discipline:

- App Router
- Static export
- Markdown for writing
- Plain global CSS
- Tiny React components only where interaction matters
- GitHub Pages or Vercel for hosting

Avoid turning Next.js into an excuse for app complexity. No dashboard patterns, no component soup, no generic animation package unless it earns its place.

## Content Surfaces

Build in this order:

1. Homepage spine
   - Keep the compressed introduction and expandable detail.
   - Make the offer quiet: what Jan helps with, how he thinks, and how to contact him.

2. Now section
   - A small monthly note about what Jan is working on, thinking about, and reading.
   - Can live on the homepage first.

3. Log
   - Append-only dated entries.
   - One to three lines each.
   - Useful for showing the site is alive without requiring polished essays.

4. Evergreen anchors
   - A few stable opinion pieces.
   - Topics: software complexity, AI as a tool not a strategy, decision quality, calm systems.
   - Each should start with one sharp sentence and expand into the reasoning.

5. Work with me
   - One quiet line.
   - No funnel, no hard pitch, no generic services grid.

## Design Rules

- Minimal does not mean generic.
- Avoid startup landing-page patterns.
- Avoid decorative complexity.
- Use typography, spacing, rhythm, and copy as the primary design materials.
- Keep the page fast enough that performance is not a topic.
- Every visible element should earn its place.

## Publishing Model

Work happens on task branches:

- Codex branches: `codex/<short-task-name>`
- Claude branches: `claude/<short-task-name>`

Publish means:

1. Review `git status --short`.
2. Commit the relevant files.
3. Push the branch or merge to `main`, depending on Jan's instruction.
4. GitHub Actions builds the static export and publishes `out/` to GitHub Pages.
