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
      "Developed web applications that enhance driver safety and reduce operational costs for fleet managers.",
      "Contributed to real-time video analytics features impacting safety outcomes for thousands of commercial drivers globally.",
    ]
  },
  {
    id: "mercadolibre",
    company: "MercadoLibre",
    companyUrl: "https://mercadolibre.com",
    position: "Software Engineer",
    period: "2023 to Dec 2025",
    location: "Argentina",
    accomplishments: [
      "Scaled a 100+ microfrontend CRM to 25k+ users by improving integration patterns, developer tooling, and platform architecture.",
      "Built a client-side event system used by 100+ microfrontends, reducing API calls and improving observability.",
      "Created internal IDE + preview tooling that cut delivery time by 50%, enabling daily instead of bi-weekly releases.",
      "Designed keyboard shortcuts system that improved daily productivity for 25k+ CRM users.",
    ]
  },
  {
    id: "enviopack",
    company: "Enviopack",
    companyUrl: "https://enviopack.com",
    position: "Software Engineer",
    period: "2022 to 2023",
    location: "Argentina",
    accomplishments: [
      "Redesigned two core warehouse workflows with Product, reducing task time by 30% for operators across multiple countries.",
      "Implemented observability tooling that surfaced errors and user behavior, enabling data-driven roadmap decisions.",
      "Increased test coverage from 0% to 90%, significantly reducing regressions and improving release confidence.",
    ]
  }
]
