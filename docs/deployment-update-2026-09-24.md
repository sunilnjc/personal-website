# Deployment update — 24 September 2026

Confirmed with the agents in “Build MemeForge RH launch studio” and “Implement Dust Sweep conversion”. This update changes portfolio descriptions and links; it does not change either application's release or access settings.

## CryptoForge Lab

- URL: https://cryptoforgelab.com/
- Deployed private beta; anonymous requests redirect to authorized login.
- AI concepts, branding, artwork and social content; wallet-based private projects; PONS discovery and competition checks; launch preparation on Robinhood Chain and Solana.
- Real-wallet launch and recovery acceptance remain outstanding. Solana RPC reliability and analytics coverage remain limited.
- The owning agent verified the September 24 Cloudflare release and private repository status. Automated release checks are not evidence of completed real-wallet acceptance.

## Dust Sweep

- URL: https://dust-sweep.bullsof2028.workers.dev
- Standalone public preview sharing the CryptoForge Lab codebase, with its own Worker and D1 database.
- Supported balance inspection, token selection, same-chain quotes, combined economics, fee comparison, and checks for uneconomical or unsupported recovery.
- Both EVM and Solana transaction execution gates are disabled. EVM discovery is an eight-contract watchlist. No automatic bridging.
- The owning agent confirmed HTTP 200 for the homepage and deployment-audit verification of Base quotes and combined economics. Its latest health check was degraded: Solana scanning and market prices were unavailable at that check.
- Private source; no public GitHub source button. Real-device wallet signing acceptance remains outstanding.

The portfolio uses “Private beta” for CryptoForge Lab and “Live preview” / “Open preview” for Dust Sweep, avoiding claims of publicly available mainnet execution.
