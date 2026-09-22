# Sunil — Personal Portfolio

Live portfolio: https://viewmywork.dev

A responsive personal website collecting my applications, prototypes, engineering work, project milestones, and discoveries.

[GitHub profile](https://github.com/sunilnjc) · [Project collection](docs/PROJECTS.md)

The compact gallery includes 15 applications and prototypes with direct app and GitHub actions. Longer descriptions open in a detail panel; 11 engineering projects, build notes, and milestones are collapsed below the gallery. It covers AI assistants, learning tools, product development, finance and analytics, browser wallets, computer vision, and media production.

## Run locally

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by the development server.

```sh
npm run build
npx tsc --noEmit
```

The implementation uses React, TypeScript, Vinext, Tailwind CSS, and accessible Base UI/Shadcn components. Hosting targets Cloudflare Workers through Sites.

## Edit the content

- `app/project-catalog.json` — application summaries, stages, and verified public repository links.
- `app/content.ts` — biography, featured projects, milestones, and notebook entries.
- `app/page.tsx` and `app/globals.css` — page structure and responsive styling.
- `CONTENT_GUIDE.md` — content and publication instructions.

After changing the catalogue, run `node scripts/generate-profile.mjs` to refresh `docs/PROJECTS.md` and `docs/github-profile.md`. The latter is the source for the README displayed on my GitHub profile.

## Scope

This repository contains the portfolio, not a combined copy of every application's source. Published repositories are linked where available. Private repositories remain private, and local-only applications are clearly identified. No personal financial records, journals, recordings, wallet data, or credentials are included.

Course forks, empty repositories, duplicate placeholders, and notes without an implemented application are not presented as finished products. Earlier learning exercises are labeled separately and retain their attribution.

The hosted Sites copy currently has owner-only access. This GitHub repository and the GitHub profile showcase are public; a public custom-domain website is a separate launch step.
