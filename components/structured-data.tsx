import { STRUCTURED_DATA_LINKS } from "@/lib/constants"

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ivan Maier Gallardo",
    "alternateName": ["Ivan Maier", "Ivan Gallardo"],
    "jobTitle": "Senior Software Engineer",
    "description": "Ivan Maier Gallardo is a Senior Software Engineer focused on full-stack product engineering, with 5 years building B2B platforms across CRM, logistics, and fleet safety. Currently at Empiric Earth, building the customer platform used by 1,000+ fleets worldwide. Previously Mercado Libre and Envíopack.",
    "url": "https://ivanmaierg.dev",
    "image": "https://ivanmaierg.dev/api/og?v=3",
    "sameAs": STRUCTURED_DATA_LINKS,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressCountry": "Argentina"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Empiric Earth",
      "url": "https://empiricearth.com"
    },
    "knowsAbout": [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "shadcn",
      "React Query",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "AI-assisted development",
      "Microfrontends",
      "Developer Experience"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Software Engineer",
      "description": "Full-stack product engineer building B2B platforms across CRM, logistics, and fleet safety. Focus on customer-facing products, frontend architecture, enterprise integrations, and AI-assisted development."
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
