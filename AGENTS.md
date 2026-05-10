# AGENTS.md

Guidance for AI coding agents (Cursor, Copilot, Cline, Windsurf, Claude Code, etc.) working in this repo.

## Project

Personal portfolio website for Ivan Maier Gallardo. Single-page Next.js 14 App Router site, deployed on Vercel at https://ivanmaierg.dev.

## Tech Stack

- **Framework**: Next.js 14 (App Router, RSC)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI primitives**: Radix UI
- **Icons**: Lucide React
- **Theme**: `next-themes` for dark/light mode
- **Utilities**: `cn` helper using `clsx` + `tailwind-merge` (`lib/utils.ts`)
- **Package manager**: pnpm (do not use npm/yarn/bun)
- **Analytics**: `@vercel/analytics`

## Commands

```bash
pnpm dev        # Start dev server (http://localhost:3000)
pnpm build      # Production build
pnpm lint       # ESLint
pnpm lint:fix   # Auto-fix lint
pnpm analyze    # Bundle analyzer
```

Do not run `pnpm build` after small edits — it's slow and not required for type-checking.

## Structure

```
app/                    # Next.js App Router
  layout.tsx            # Root layout + theme provider
  page.tsx              # Main portfolio page
  page.md/route.ts      # Markdown mirror for AI agents
  api/og/               # OG image generation
  [...slug]/route.ts    # Redirect handler for /github, /x, /linkedin, /email, /mail
components/             # React components (presentational)
lib/                    # Utilities, data, types, API clients
  constants.ts          # Social links, navigation
  utils.ts              # cn() class helper
  types.ts              # Shared TS types
  github-api.ts         # GitHub GraphQL client (server-side)
  contribution-processor.ts # Transforms GitHub data for the grid
public/
  llms.txt              # AI agent index
  robots.txt            # Crawler policy
```

## Conventions

- **Tailwind**: use defaults unless custom values already exist. Custom breakpoint `mobile:` at 650px. Use `cn` for class logic.
- **Components**: prefer existing Radix primitives. Add `aria-label` to icon-only buttons.
- **Layout**: use `h-dvh` instead of `h-screen`. Respect `safe-area-inset` for fixed elements.
- **Animation**: only when explicitly requested. Animate `transform`/`opacity` only. Max 200ms. Respect `prefers-reduced-motion`.
- **Typography**: `text-balance` on headings, `text-pretty` on body, `tabular-nums` for data.
- **Comments**: default to none. Only add when the WHY is non-obvious. Don't explain WHAT — names should do that.
- **No emojis** in code or output unless explicitly requested.

## Agent-readability surfaces

This site is audited against Vercel's Agent Readability spec. Key surfaces agents can rely on:

- `public/llms.txt` — curated index with links, summary, contact.
- `https://ivanmaierg.dev/page.md` — markdown mirror of the portfolio (`text/markdown`).
- `components/structured-data.tsx` — JSON-LD `Person` schema.
- `components/metadata.tsx` — Next.js metadata (title, description, canonical, OG, Twitter).

## Contact

Owner: Ivan Maier Gallardo — ivanmaiergallardo@gmail.com — Buenos Aires, Argentina.
