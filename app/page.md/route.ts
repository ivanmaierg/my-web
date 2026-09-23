import { NextResponse } from 'next/server'

const markdown = `# Ivan Maier Gallardo — Senior Software Engineer

Senior Software Engineer focused on full-stack product engineering. 5 years building
B2B platforms across CRM, logistics, and fleet safety. Currently at Empiric Earth,
building the customer platform used by 1,000+ fleets worldwide. Previously Mercado
Libre and Envíopack.

- Location: Buenos Aires, Argentina
- Email: ivanmaiergallardo@gmail.com
- GitHub: https://github.com/ivanmaierg
- Site: https://ivanmaierg.dev

## Professional Experience

**Empiric Earth** — Senior Software Engineer. Dec 2025 to Present. Buenos Aires.
Building the customer-facing Fleet app for safety and day-to-day operations,
including dashboards, event review, fleet management, live video, permissions,
SSO, integrations, and enterprise rollouts. Helped shape frontend architecture
and built live-streaming experiences for enterprise pilots. Cut monorepo CI time
from ~45 minutes to ~12 minutes and introduced AI-assisted development workflows
and internal tooling adopted by multiple engineers.

**Mercado Libre** — Software Engineer. Jan 2023 to Dec 2025. Argentina.
Helped build a next-gen CRM from the ground up, scaling to 25K+ customer support
representatives and 5M+ customer interactions. Built the event architecture for
100+ microfrontends and a Node.js/GraphQL BFF with a shared React Query data layer.
Built an internal platform for composing CRM capabilities and isolated preview
environments, cutting PR-to-production time by ~50%.

**Envíopack** — Software Engineer. Jan 2022 to Dec 2022. Argentina.
Shipped a B2B WMS with a mobile app for warehouse pickers and a web SPA for
inventory managers. Redesigned two core workflows, cutting operator task time
by 30% across multiple countries. Added Sentry and Redux state management for
multi-step picking workflows, and took test coverage from 0% to 90%.

## Technical Skills

TypeScript, React, Next.js, Node.js, PostgreSQL, AWS, AI-assisted development.

## Location

Based in Buenos Aires, with full overlap with US hours.

## Contact

Email is the best channel: ivanmaiergallardo@gmail.com.
`

export function GET() {
  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=120, s-maxage=604800, stale-while-revalidate=86400',
    },
  })
}

export const runtime = 'edge'
