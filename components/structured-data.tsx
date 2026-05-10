import { STRUCTURED_DATA_LINKS } from "@/lib/constants"

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ivan Maier Gallardo",
    "alternateName": ["Ivan Maier", "Ivan Gallardo"],
    "jobTitle": "Software Engineer",
    "description": "Ivan Maier Gallardo is a software engineer, frontend-leaning full-stack, with 4+ years building B2B platforms. Currently at Nauto (Series C, AI fleet safety) shipping the customer-facing platform used across 500k+ drivers. Previously Mercado Libre and Envíopack.",
    "url": "https://ivanmaierg.dev",
    "image": "https://ivanmaierg.dev/api/og",
    "sameAs": STRUCTURED_DATA_LINKS,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressCountry": "Argentina"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Nauto",
      "url": "https://nauto.com"
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
      "Microfrontends",
      "Developer Experience"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "description": "Frontend-leaning full-stack engineer building B2B platforms for fleet safety, CRM, CX, and logistics. Focus on customer-facing surfaces, developer experience, and iteration speed."
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
