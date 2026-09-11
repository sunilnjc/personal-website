# Updating the portfolio

Edit `app/project-catalog.json` for the full project collection. Each application has a title, description, stage, scope note, tags, source visibility, and an optional verified public repository URL. The `headline` is the short gallery summary. `appUrl` and `appAccess` control the app button; use `public` only after verifying public access. Full descriptions and scope notes appear in detail panels.

Edit `app/content.ts` for the short biography, profile links, milestones, and discoveries. Add only accurate details and real links. The current bio describes the observed project collection without claiming a job title or credentials.

Run `node scripts/generate-profile.mjs` after catalogue updates. This refreshes the Markdown collection and the GitHub profile README draft. Website changes need a successful build and a new deployment; profile changes must also be committed to the `sunilnjc/sunilnjc` repository.

There is no browser-based editor in this version. You can ask Codex to update and publish content, or edit the structured files yourself.

Current entries are based on local project documentation and the corresponding GitHub repositories. Public cards expose high-level product descriptions only. Keep private code, customer information, financial records, wallet material, recordings, and credentials out of this repository.

Related Room Comfort implementations are grouped under one application. The archive distinguishes earlier exercises and adaptations from original product applications. Empty or documentation-only repositories and third-party course forks are excluded.

The custom domain remains deferred. The GitHub profile is public, while the hosted Sites copy currently remains owner-only. Do not label a private preview as a publicly accessible demo.
