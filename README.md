 # Dev Isoo Portfolio

Personal portfolio of **Ismail Sheriff (Dev Isoo)**, a full-stack developer based in Lagos, Nigeria. It showcases selected projects with case studies, the tools I work with, and a contact form that sends enquiries straight to my inbox.

**Live site:** https://dev-isoo-portfolio.onrender.com

<!-- Add a screenshot: save it as image/screenshot.png, then uncomment the line below -->
<!-- ![Portfolio screenshot](image/screenshot.png) -->

## Features

- **Case-study modals:** each project opens a full write-up (idea, problem, approach, technology, build, result).
- **Interactive tech stack:** hover or tap a tool to see how it is used.
- **Working contact form:** sends email through EmailJS with no backend, and falls back to the visitor's email app if EmailJS is unavailable.
- **WhatsApp enquiry button** with a pre-filled, structured message.
- **Config-driven content:** projects, services, process, stats and socials are all edited in one file (`js/config.js`).
- **Responsive layout** with reduced-motion support and keyboard-accessible project cards.
- **SEO basics:** meta description, canonical URL, Open Graph and Twitter tags, `sitemap.xml` and `robots.txt`.

## Tech stack

| Area | Tools |
|---|---|
| Structure and styling | HTML5, CSS3 (custom properties, grid, flexbox) |
| Behaviour | Vanilla JavaScript (ES6+), Web Components, IntersectionObserver |
| Contact form | EmailJS (`@emailjs/browser` v4) |
| Hosting | Render (static site) |
| Fonts | Space Grotesk (Google Fonts) |

## Project structure

```
dev-isoo-portfolio/
├── index.html        Page structure and SEO tags
├── css/styles.css    Styling (change the gradient with --c1, --c2, --c3)
├── js/config.js      All editable content: domain, contact, socials, projects...
├── js/main.js        Rendering, interactions, contact form
├── image/            Logo, portrait and project images
├── sitemap.xml
└── robots.txt
```

## Run locally

No build step is needed.

1. Clone the repo: `git clone https://github.com/dev-isoo/dev-isoo-portfolio.git`
2. Open the folder in VS Code and start the **Live Server** extension, or run `npx serve` in the folder.
3. Open the local address it prints.

## Customise

Edit `js/config.js`:

- `domain`, `email`, `whatsapp` (digits only, with country code) and `social` links
- `projects`: copy an existing block to add a project
- `emailjs`: your EmailJS public key, service ID and template ID

The EmailJS template should use these variables: `{{name}}`, `{{email}}`, `{{company}}`, `{{type}}`, `{{budget}}`, `{{message}}`, `{{time}}`.

## Deploy

Deployed as a static site on Render, connected to the `main` branch, so each push to `main` redeploys automatically. It also works on Netlify or GitHub Pages.

## Contact

- Email: isoodev01@gmail.com
- LinkedIn: https://www.linkedin.com/in/dev-isoo-552656288/
- GitHub: https://github.com/dev-isoo
- X: https://x.com/Devisooo