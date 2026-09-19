# Online Resume — Daniel Islam

A simple, static, multi-page online resume built with plain HTML and CSS.

## Pages

- `index.html` — Main resume: summary, education, work experience, and skills.
- `hobbies.html` — Personal hobbies and interests.
- `contact.html` — Contact information.

## Structure

```
.
├── index.html
├── hobbies.html
├── contact.html
├── assets
│   ├── css
│   │   └── style.css      # Shared stylesheet for all pages
│   └── images            # Headshot and hobby photos
└── README.md
```

## Usage

The site is fully static. To view it locally, open `index.html` in any web
browser. No build step or dependencies are required.

To serve it over HTTP (optional), you can run a simple local server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Editing

- All pages share `assets/css/style.css`. Update that file to change the look
  of every page at once.
- Update the content directly in the HTML files.
