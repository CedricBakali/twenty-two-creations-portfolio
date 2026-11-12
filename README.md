# Twenty Two Creations

A personal portfolio website for **Twenty Two Creations**, showcasing graphic design work, software development projects, and CSS-animated interactive concepts on a single page.

## Purpose

The site serves as a single-page portfolio that introduces the creator, presents completed work, and demonstrates animation skills directly in the browser. It was built as the submission for **Multimedia Tools and Applications — Assignment 2**, which requires a four-section portfolio hosted on GitHub Pages.

## Technologies

| Technology | Used for |
|------------|----------|
| **HTML5** | Page structure, semantic sections, navigation |
| **CSS3** | Styling, responsive layout, `@keyframes` animations |
| **JavaScript** | Typing effect, scroll-reveal, active navigation highlighting |

No frameworks, libraries or build tools are used. The site runs from plain static files.

## Sections

| Section | Anchor | Contents |
|---------|--------|----------|
| **Home** | `#hero` | Intro headline, role typewriter effect, stats strip |
| **About Me** | `#about` | Personal introduction, education, technical skills, hobbies, career aspirations, contact details |
| **Services** | `#services` | Six offered services (brand identity, web development, social media, print, software, digital marketing) |
| **Projects** | `#portfolio` | Five development project cards plus thirteen graphic design works |
| **Animated Concepts** | `#animated` | Three hand-built CSS animations |
| **Hire Me** | `#contact` | Contact block and call to action |

The four sections required by the assignment — **Home, About Me, Projects and Animated Concepts** — are all present and reachable from both the desktop and mobile navigation.

### Projects

- DesignScore — AI-Based Graphic Design Quality Assessment and Feedback System
- UDP File Transfer Tool
- Hostel Management System
- FocusFlow
- DMI-SJBU Voting System

### Animated Concepts

1. Floating Creative Elements
2. Text Reveal Animation
3. Rotating & Pulsing Element

All three respect the `prefers-reduced-motion: reduce` media query.

## Folder Structure

```
twenty-two-creations-portfolio/
├── index.html          # Single-page markup
├── README.md           # This file
├── .nojekyll           # Disables GitHub Pages' Jekyll processing
├── css/
│   └── style.css       # All styling and animations
├── js/
│   └── script.js       # Typing effect, scroll reveal, active nav
├── images/             # Project screenshots, gallery art, graphics
└── videos/
    └── hero-bg.mp4     # Hero background video
```

## How to Open Locally

Because the site loads external CSS, JavaScript and media files, it must be served over HTTP rather than opened directly from the filesystem.

**Option 1 — Python (included with most systems):**

```bash
python -m http.server 8000
```

Then open <http://127.0.0.1:8000/index.html> in a browser.

**Option 2 — VS Code:** install the *Live Server* extension and click **Go Live**.

## Repository

- **GitHub repository:** https://github.com/CedricBakali/twenty-two-creations-portfolio
- **GitHub Pages:** https://cedricbakali.github.io/twenty-two-creations-portfolio/

> The Pages URL above is the configured publishing address for this repository. Verify that the site loads at that address after the latest changes have been pushed to the `main` branch.
