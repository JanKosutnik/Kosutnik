# Kosutnik — Jan's Personal Website

## Async Agent Workflow

This repository is edited asynchronously by both Codex and Claude Code.

- Work on task branches instead of committing directly to `main`
- Use `codex/<short-task-name>` for Codex branches and `claude/<short-task-name>` for Claude branches
- Run `git fetch origin` before starting and check `git status --short` before editing
- Preserve uncommitted work and avoid overwriting changes made by the other agent
- When handing off, include the branch name, changed files, commands run, risks, and the suggested next step
- See `AGENTS.md` for the shared Codex/Claude collaboration protocol

## Frontend Aesthetics

Make creative, distinctive frontends. Avoid generic "AI slop" aesthetics. Every design decision should feel intentional and specific to this project.

**Typography**
- Never use: Inter, Roboto, Open Sans, Lato, or default system fonts
- Good choices by style:
  - Code/technical: JetBrains Mono, Fira Code, Space Grotesk
  - Editorial: Playfair Display, Crimson Pro, Fraunces
  - Startup: Clash Display, Satoshi, Cabinet Grotesk
  - Technical: IBM Plex family, Source Sans 3
  - Distinctive: Bricolage Grotesque, Obviously, Newsreader
- Pair high-contrast styles: display + monospace, serif + geometric sans
- Use extreme weights: 500/600 vs 800/900. Size jumps of 3x+, not 1.5x
- Pick one distinctive font, use it decisively. Load from Google Fonts

**Color & Theme**
- Commit to a cohesive aesthetic. Use CSS variables for consistency
- Use dominant colors with sharp accents — avoid timid, evenly-distributed palettes
- Draw inspiration from IDE themes and cultural aesthetics

**Motion**
- Use animations for page load and micro-interactions
- Prefer CSS-only solutions; use Motion library for React when available
- One well-orchestrated page load with staggered reveals beats scattered micro-interactions

**Backgrounds**
- Create atmosphere and depth — don't default to solid colors
- Layer CSS gradients, geometric patterns, or contextual effects

**Avoid:**
- Purple gradients on white backgrounds
- Predictable layouts and cookie-cutter component patterns
- Converging on common AI choices (Space Grotesk is overused across generations — pick something else)

## Code Cleaning Workflow

When asked to "clean", "refactor", or "beautify" code, follow this checklist:
- Format: consistent indentation, logical line breaks, whitespace between sections
- Names: descriptive, no abbreviations, follow language conventions
- Structure: extract complex expressions, break functions, use guard clauses
- Comments: only explain "why", remove dead code, keep updated
- Organization: sort imports, remove unused, place exports logically
- Best practices: avoid side effects, explicit error handling, prefer const/let, early returns

Output format: summary of changes → refactored code → further suggestions (if any).
