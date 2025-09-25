import { STRUCTURED_DATA_LINKS } from "@/lib/constants"

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ivan Maier Gallardo",
    "alternateName": ["Ivan Maier", "Ivan Gallardo"],
    "jobTitle": "Frontend Engineer",
    "description": "Ivan Maier Gallardo is a Frontend Engineer with near 4 years of experience building scalable, high-performance web applications. Specialized in complex frontend systems like CRMs, WMS, dashboards, and low-code tools. Currently at MercadoLibre architecting microfrontend platforms and improving developer experience.",
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
      "name": "MercadoLibre",
      "url": "https://mercadolibre.com"
    },
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Node.js",
      "Redux",
      "Microfrontends",
      "Performance optimization",
      "Developer tooling",
      "System architecture"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Engineer",
      "description": "Building scalable, high-performance web applications. Specialized in complex frontend systems like CRMs, WMS, dashboards, and low-code tools. Architecting microfrontend platforms and improving developer experience."
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
