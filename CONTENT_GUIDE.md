# Updating your website

The website content lives in `app/content.ts`. Change that file, then ask Codex to preview and publish the update.

- `profile`: display name, introductory sentence, biography, and public contact/profile links. The current introduction is draft copy; no profession or credentials have been assumed.
- `projects`: project cards, tags, implementation details, and honest scope notes.
- `milestones`: achievements with context and a link to the related project. Current entries describe documented project milestones rather than personal awards.
- `discoveries`: expandable notebook entries. The first two are editorial summaries derived from the two project READMEs, not claimed original research.

To add a profile link, place `{ label: 'LinkedIn', url: 'YOUR_REAL_HTTPS_PROFILE_URL' }` in `profile.links`. Use actual URLs; do not publish example URLs. When the list is empty the website shows a clear coming-soon state.

Current project summaries are based on `../ai-camera-copilot/README.md` and `../in-memory-account-ledger/README.md`. Those repositories, code, input files, outputs, and personal footage are not included in this website. Review the summaries before making the site publicly accessible.

Add entries by following the structure of existing items. Keep IDs unique and update related `#anchor` links. No browser-based editor or database is included in this first version. Content updates need redeployment to appear for all visitors.

Development: `npm run dev`. Production validation: `npm run build`.

The custom domain has been deferred. This first hosted version is private unless its access is explicitly changed. Before adding a link to a public profile, confirm public visitor access and add your preferred contact links.
