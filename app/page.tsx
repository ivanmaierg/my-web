import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { ActivitySection } from "@/components/activity-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { InterestsSection } from "@/components/interests-section"
import { STRUCTURED_DATA_LINKS } from "@/lib/constants"

export default async function Portfolio() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ivan Maier Gallardo",
    "jobTitle": "Frontend Engineer",
    "description": "Frontend Engineer with near 4 years of experience building scalable, high-performance web applications. Specialized in complex frontend systems like CRMs, WMS, dashboards, and low-code tools. Currently at MercadoLibre architecting microfrontend platforms and improving developer experience.",
    "url": "https://ivanmaierg.dev",
    "image": "https://ivanmaierg.dev/og-image.jpg",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen text-gray-300 font-mono scroll-smooth scroll-enhanced" style={{ backgroundColor: '#0c1116' }}>
        <Header />

        <main className="max-w-4xl mx-auto p-4 mobile:p-6 space-y-8 mobile:space-y-12 scroll-smooth scroll-padding-top mb-8">
          <AboutSection />
          <ActivitySection username="ivanmaierg" />
          <ExperienceSection />
          <SkillsSection />
          <InterestsSection />
        </main>
      </div>
    </>
  )
}