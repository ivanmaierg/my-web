import { STRUCTURED_DATA_LINKS } from "@/lib/constants"

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ivan Maier Gallardo",
    "alternateName": ["Ivan Maier", "Ivan Gallardo"],
    "jobTitle": "Frontend Engineer",
    "description": "Ivan Maier Gallardo is a Product-focused Software Engineer with 4+ years of experience building high-performance, scalable web products. Currently at Nauto working on web applications for AI and real-time systems.",
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
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "AWS",
      "PostgreSQL",
      "Microfrontends",
      "Observability tooling"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Software Engineer",
      "description": "Building product-focused web applications for AI and real-time systems. Specialized in high-performance, scalable web products where user experience, iteration speed, and developer experience matter."
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
