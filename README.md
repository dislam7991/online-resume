<div align="center">

# Daniel Islam — Online Résumé

**A fast, modern, accessible personal résumé site.**
Built with plain HTML, CSS, and a small amount of vanilla JavaScript — no build step, no dependencies.

Software Engineer · MLOps · Atlanta, GA

[Email](mailto:dislam7991@gmail.com) · [LinkedIn](https://www.linkedin.com/in/daniel-islam1) · [GitHub](https://github.com/dislam7991)

</div>

---

## Overview

This repository is a static, multi-page résumé website. It is designed to load
instantly, work on any device, read well in light or dark mode, and print to a
clean one-page PDF. Because it is plain static files, it deploys to GitHub Pages,
Netlify, Vercel, or any static host with zero configuration.

## Features

| Area | What it does |
|------|--------------|
| **Theme** | Light / dark mode with a toggle. Remembers your choice (`localStorage`) and respects the OS setting. No flash of the wrong theme on load. |
| **Motion** | Scroll-reveal animations and active-section nav highlighting via `IntersectionObserver`. All motion respects `prefers-reduced-motion`. |
| **Layout** | Sticky top nav, animated hero, timeline experience, skill chips, and responsive project/education card grids. |
| **Projects** | Live links and source-code links to real GitHub repositories (see below). |
| **Print** | A dedicated print stylesheet — use the browser's Print → "Save as PDF" for a clean résumé. |
| **SEO** | Open Graph + Twitter cards, canonical URLs, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`, and an SVG favicon. |
| **Accessibility** | Skip link, ARIA landmarks, visible focus styles, alt text, single `<h1>` per page, keyboard-friendly. |
| **Resilience** | The site works fully with JavaScript disabled; JS is progressive enhancement only. |

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Résumé — summary, experience, projects, education & training, skills. |
| `projects.html` | Detailed project cards with live and source links. |
| `hobbies.html` | Personal interests. |
| `contact.html` | Contact details and profile links. |

## Featured projects

| Project | Stack | Links |
|---------|-------|-------|
| **Aesthetica Fitness Coaching** | Next.js, TypeScript, Tailwind, Stripe, Framer Motion | [Live](https://aesthetica-site.vercel.app) · [Code](https://github.com/dislam7991/Aesthetica-site) |
| **ML Customer Churn Prediction** | Python, scikit-learn, XGBoost, SMOTE, Tableau | [Code](https://github.com/dislam7991/ModelingChurn) |
| **DTF Marketing Website** | HTML5, CSS3, Vanilla JS, Netlify Forms | [Live](https://dtf-website.netlify.app) · [Code](https://github.com/dislam7991/dtf-website) |

## Project structure

```
.
├── index.html              # Résumé (home)
├── projects.html           # Detailed projects
├── hobbies.html            # Hobbies
├── contact.html            # Contact
├── robots.txt              # Crawler directives
├── sitemap.xml             # Sitemap for search engines
├── assets
│   ├── css/style.css       # Design system: tokens, light/dark, layout, print
│   ├── js/main.js          # Theme toggle, scroll reveal, active-nav, year
│   ├── favicon.svg         # SVG monogram favicon
│   └── images/             # Headshot and hobby photos
├── docs/V2-ROADMAP.md      # Optional framework-based rebuild proposal
└── README.md
```

## Local preview

The site is static, so you can open `index.html` directly in a browser. To serve
it over HTTP (recommended, so relative paths and `fetch` behave like production):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

Any static host works. For **GitHub Pages**:

1. Push to the default branch.
2. In the repository, go to **Settings → Pages**.
3. Set the source to the default branch, root (`/`).
4. The site publishes at `https://<username>.github.io/online-resume/`.

The absolute URLs in the SEO tags (`sitemap.xml`, Open Graph, canonical, JSON-LD)
assume `https://dislam7991.github.io/online-resume/`. If you use a custom domain,
update those URLs.

## Customizing

- **Look and feel:** all colors, spacing, and typography are CSS variables at the
  top of `assets/css/style.css`. Change them once to restyle every page.
- **Content:** edit the HTML files directly.
- **Theme default:** the site follows the OS setting until the visitor toggles;
  their choice is then remembered per browser.

## Roadmap

`docs/V2-ROADMAP.md` describes an optional rebuild on Next.js, React, TypeScript,
and Tailwind (the stack from the résumé itself), with dynamic OG images,
GitHub-driven projects, and a command palette. The current static site remains a
solid, dependency-free baseline.

## License

Personal résumé content © Daniel Islam. Code may be reused for your own résumé.
