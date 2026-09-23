export interface ExperienceItem {
  id: string
  company: string
  companyUrl: string
  position: string
  period: string
  location: string
  accomplishments?: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: "empiric-earth",
    company: "Empiric Earth",
    companyUrl: "https://empiricearth.com",
    position: "Senior Software Engineer",
    period: "Dec 2025 to Present",
    location: "Buenos Aires",
    accomplishments: [
      "Shipped fleet management, live video, permissions, and operational workflows, partnering with product, design, and backend from problem definition through production rollout.",
      "Helped shape frontend architecture and technical direction, including API contracts, third-party integrations, feature flags, release workflows, and shared application patterns.",
      "Built live-streaming experiences for enterprise pilots, covering authorization, privacy requirements, backend integrations, regional deployment constraints, and rollout.",
      "Cut monorepo CI time from ~45 minutes to ~12 minutes and strengthened TypeScript, linting, release automation, and development workflows.",
      "Introduced AI-assisted development workflows and internal tooling adopted by multiple engineers, and contributed technical proposals to accelerate product iteration with AI.",
    ]
  },
  {
    id: "mercadolibre",
    company: "Mercado Libre",
    companyUrl: "https://mercadolibre.com",
    position: "Software Engineer",
    period: "Jan 2023 to Dec 2025",
    location: "Argentina",
    accomplishments: [
      "Helped build a next-generation CRM platform from the ground up, scaling it to 25K+ customer support representatives and 5M+ customer interactions.",
      "Designed and implemented a client-side event bus, now the platform's standard for communication between 100+ microfrontend modules — replaced ad-hoc messaging with a single API and added cross-module observability.",
      "Shipped an internal admin tool that split shared CRM components into composable pieces and gave teams fast preview environments — cut PR-to-production time in half and accelerated onboarding of new microfrontend modules.",
      "Designed a Node.js/GraphQL BFF and a React Query data layer that became the default data access path, replacing waterfall fetches and standardizing caching and error handling.",
    ]
  },
  {
    id: "enviopack",
    company: "Envíopack",
    companyUrl: "https://enviopack.com",
    position: "Software Engineer",
    period: "Jan 2022 to Dec 2022",
    location: "Argentina",
    accomplishments: [
      "Redesigned two core warehouse workflows with Product, cutting operator task time by 30% across multiple countries.",
      "Set up Sentry on the warehouse picking mobile app, surfacing real-world bugs operators were hitting on the job.",
      "Designed Redux state management for multi-step picking workflows in the mobile app.",
      "Took test coverage from 0% to 90%, lowering regressions and boosting release confidence.",
    ]
  }
]
