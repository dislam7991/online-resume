# Online Resume — Daniel Islam

A fast, modern, static personal résumé site built with plain HTML, CSS, and a
small amount of vanilla JavaScript. No build step or dependencies required.

## Features

- Responsive design with a **light / dark theme toggle** (remembers your choice,
  respects the OS preference).
- **Scroll-reveal** animations and active-section navigation (both respect
  `prefers-reduced-motion`).
- **Timeline** experience layout and **skill chips**.
- **Print stylesheet** — use the browser's Print / "Save as PDF" for a clean
  one-page résumé.
- **SEO**: Open Graph + Twitter cards, JSON-LD `Person` schema, `sitemap.xml`,
  `robots.txt`, and an SVG favicon.
- **Accessible**: skip link, ARIA landmarks, visible focus styles, and alt text.

## Pages

- `index.html` — Résumé: summary, experience, projects, education, skills.
- `projects.html` — Detailed technical projects.
- `hobbies.html` — Personal interests.
- `contact.html` — Contact and profile links.

## Structure

```
.
├── index.html
├── projects.html
├── hobbies.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── assets
│   ├── css/style.css     # Shared design system (tokens, themes, layout, print)
│   ├── js/main.js        # Theme toggle, scroll reveal, active-nav, year
│   ├── favicon.svg
│   └── images/           # Headshot and hobby photos
├── docs/V2-ROADMAP.md    # Optional framework-based rebuild proposal
└── README.md
```

## Local preview

Open `index.html` directly, or serve over HTTP:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

The site is static, so it works on GitHub Pages, Netlify, Vercel, or any static
host. For GitHub Pages: enable Pages on the repository's default branch; the site
serves from the repository root. Absolute URLs in the SEO tags assume
`https://dislam7991.github.io/online-resume/` — update them if you use a custom
domain.

## Editing

- Change the look for every page at once in `assets/css/style.css`.
- Content lives directly in the HTML files.
