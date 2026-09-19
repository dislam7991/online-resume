# v2 Roadmap — "Hyper Advanced" Resume Site

The current site is intentionally **zero-build static HTML/CSS/JS**. It is fast,
deploys anywhere (GitHub Pages), and needs no toolchain. This document proposes
an optional **v2** built on a modern framework. It matches the stack already on
Daniel's resume (Next.js, React 19, TypeScript, Tailwind), so the site itself
becomes a portfolio piece.

> Status: proposal. Nothing here is built yet. It needs your approval because it
> changes the deploy model from static files to a build + host.

## Stack

- **Next.js 15 (App Router) + React 19 + TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** components
- **Framer Motion** + the **View Transitions API** for page and element motion
- **next-themes** for light/dark (replaces the hand-rolled toggle)
- **Vercel** hosting (preview deploy per PR, edge network, analytics)

## Features

1. **Content as data.** Move resume content into typed MDX / TS data files, so
   pages render from one source of truth (and a future JSON Resume export is easy).
2. **Dynamic OG images.** Generate per-page social cards at the edge with
   `@vercel/og` (real preview images instead of the headshot).
3. **GitHub-driven projects.** Pull repos live from the GitHub API, with stars,
   language, and last-commit date; cache with ISR.
4. **Command palette.** `cmdk`-based `⌘K` to jump to any section or external link.
5. **Scroll-linked motion.** Section reveals and a subtle animated gradient hero,
   all gated behind `prefers-reduced-motion`.
6. **PDF export.** A `/resume.pdf` route rendered from the same data, so the web
   and PDF résumés never drift.
7. **Blog / notes (optional).** MDX posts on ML/MLOps to strengthen the OMSCS and
   job-search narrative.
8. **Analytics + monitoring.** Vercel Analytics and Sentry (already on the resume).

## Migration plan (reversible)

1. Scaffold `v2/` app in the repo; keep the static site live at the root.
2. Port content into typed data files; build the component system.
3. Wire Vercel preview deploys; review side by side.
4. Cut `dislam7991.github.io` (or a custom domain) over once approved.
5. Archive the static site under a tag for rollback.

## Effort

Roughly 1–2 focused days for a strong first version. Best done when you can review
previews interactively, since design and motion need your eye.
