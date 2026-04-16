# BLUE VECTOR

Corporate website for **株式会社 BLUE VECTOR (BLUE VECTOR Inc.)**, a private infrastructure firm operating in the defense and security sectors.

## About the company

- **Vision** — Contribute to peace through enterprise.
- **Mission** — Support the formation of an ecosystem that sustains peace, and become a private-sector firm with substantive value through innovation and execution.
- **Established** — April 2024
- **Focus** — Intelligence advisory and strategic assessment for defense and security. The organization takes inspiration from the U.S.-based CSBA, which provides advisory services to government and conducts assessments of defense budgets and strategies.

## About this site

The site supports business expansion into the defense and security sectors. Its design philosophy balances an extremely simple structure — free of information clutter — with a substantial visual aesthetic that conveys trustworthiness.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Deployed on [Vercel](https://vercel.com)

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

### Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the local dev server.      |
| `npm run build` | Production build.                |
| `npm run start` | Run the production build.        |
| `npm run lint`  | Run ESLint.                      |

## Project structure

```
app/                Next.js App Router pages, layout, and global styles
public/             Static assets
next.config.ts      Next.js configuration
vercel.json         Vercel deployment configuration
```

Edit [app/page.tsx](app/page.tsx) to change the landing page and [app/layout.tsx](app/layout.tsx) to change site-wide metadata.

## Deployment (Vercel)

The project is configured for zero-config deployment on Vercel.

### One-time setup

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects the Next.js framework — no manual build settings are required.
4. (Optional) Add the production domain under **Project Settings → Domains** and update `metadataBase` in [app/layout.tsx](app/layout.tsx) to match.

### Environment variables

None are required at this time. Add any future secrets via **Project Settings → Environment Variables** in the Vercel dashboard.

### Preview deployments

Every push to a non-production branch creates a preview deployment. Production deploys ship from `main`.
