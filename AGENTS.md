# Kosutnik Agent Guide

This repository is edited asynchronously by both Codex and Claude Code.

## Shared Project Guidance

- Read `CLAUDE.md` before making user-facing design or refactor changes.
- Preserve the personal-site aesthetic guidance in `CLAUDE.md`.
- Keep edits scoped to the requested task and avoid unrelated churn.

## Async Collaboration Protocol

- Work on a task branch, not directly on `main`.
- Use clear branch names:
  - Codex: `codex/<short-task-name>`
  - Claude: `claude/<short-task-name>`
- Before starting work, run `git fetch origin` and check the latest branch state.
- Before editing a file, check `git status --short` and avoid overwriting uncommitted work.
- If another agent has touched the same file, read the current file carefully and preserve their changes.
- Commit coherent units of work with a concise message that names the agent when useful.
- Push completed branches and summarize what changed, what was tested, and any follow-up needed.

## Handoff Notes

When handing work to the other agent, include:

- Current branch name.
- Files changed.
- Commands run.
- Known risks or unfinished pieces.
- Suggested next step.
