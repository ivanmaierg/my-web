import { NextResponse } from 'next/server'

const markdown = `# Ivan Maier Gallardo — Software Engineer

Software engineer, frontend-leaning full-stack. 4+ years building B2B platforms.
Currently at Nauto (Series C, AI fleet safety) shipping the customer-facing
platform used across 500k+ drivers. Previously Mercado Libre and Envíopack.

- Location: Buenos Aires, Argentina
- Email: ivanmaiergallardo@gmail.com
- GitHub: https://github.com/ivanmaierg
- Site: https://ivanmaierg.dev

## Professional Experience

**Nauto** — Software Engineer. Building the home dashboard, enterprise SSO
integrations, and a Claude Skills library used by the team.

**Mercado Libre** — 3 years in CX IT. Helped build a next-gen CRM now used by
25k+ agents handling 5M+ monthly customer interactions. Node.js/GraphQL BFF and
React Query data layer powering 100+ microfrontends.

**Envíopack** — Shipped a B2B WMS. Redesigned core warehouse workflows (30%
faster operator task time) and took test coverage from 0 to 90%.

## Technical Skills

TypeScript, React, Next.js, Tailwind, shadcn, React Query, Node.js, PostgreSQL,
Microfrontends, Developer Experience, Performance Optimization.

## Looking For

A US AI-native startup (Series A–C) building agentic tools for power users or
developers. Buenos Aires, full overlap with US time zones, open to remote or
relocation.

## Contact

Email is the best channel: ivanmaiergallardo@gmail.com.
`

export function GET() {
  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}

export const runtime = 'edge'
export const revalidate = 3600
