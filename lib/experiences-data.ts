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
    id: "nauto",
    company: "Nauto",
    companyUrl: "https://nauto.com",
    position: "Software Engineer",
    period: "Dec 2025 to Present",
    location: "Palo Alto, California",
    accomplishments: [
      "Built the home dashboard from scratch — the main surface fleet managers use to monitor fleet status and identify drivers who need supervision across fleets totaling 500k+ drivers.",
      "Shipped enterprise integrations for high-priority customers, including SSO via OAuth/OIDC, unblocking commercial rollouts.",
      "Wrote a library of Claude Skills and custom commands now used by 5+ engineers; cut spec-to-task time, sped up debugging, and let Product prototype features inside engineering projects.",
      "Leading a cross-functional Design + Engineering initiative to reduce release times and accelerate feature prototyping through agentic coding practices.",
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
      "Built and scaled a next-gen CRM platform to 25k+ agents handling 5M+ monthly customer interactions.",
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
