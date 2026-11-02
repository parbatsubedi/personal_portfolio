# Parbat Subedi — Portfolio

A React portfolio built with Vite. It presents Parbat's backend-focused
full-stack work, selected projects, engineering case studies, skills, and
professional background.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Vite writes the static site to `dist/`. The existing custom domain is retained
in `public/CNAME`. The GitHub Actions workflow builds `dist/` and deploys it to
GitHub Pages whenever changes are pushed to `main` (or when manually triggered).

## GitHub Pages deployment

In the repository, open **Settings → Pages** and set **Build and deployment →
Source** to **GitHub Actions**. After the workflow completes, GitHub Pages
serves the site using the custom domain in `public/CNAME`.
