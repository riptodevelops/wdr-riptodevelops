# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.
Website: **White Drunk Rabbit (WDR)** — a creative concierge service website.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Website

- The main website is a Framer-exported static site served from `artifacts/api-server/public/`
- Brand: **White Drunk Rabbit (WDR)** — creative concierge service
- Color theme: #055e65, #b2ced1, #337f7f, #4e8e93 (teal/green palette)
- Logo: WDR rabbit face logo at `artifacts/api-server/public/images/wdr-logo.png`
- Navigation: HOME | ABOUT | WORK | CONTACT
- Services: WDR VIDEOS, WDR DESIGNS, WDR YOUTUBE
- Taglines: "BUILDING CREATIVE TRUST", "THE CREATIVE PANACEA"
- The HTML file includes a runtime text replacement script that swaps old OWLED branding to WDR at load time

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
