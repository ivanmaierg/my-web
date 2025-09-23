import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { GitHubContributions } from "@/components/github-contributions"

export default async function Portfolio() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ivan Maier Gallardo",
    "jobTitle": "Frontend Engineer",
    "description": "Frontend Engineer with 4+ years of experience building scalable web applications. Currently at MercadoLibre, specializing in React, TypeScript, and microfrontends.",
    "url": "https://ivanmaierg.dev",
    "image": "https://ivanmaierg.dev/og-image.jpg",
    "sameAs": [
      "https://github.com/ivanmaierg",
      "https://www.linkedin.com/in/ivanmaiergallardo/",
      "mailto:ivanmaiergallardo@gmail.com"
    ],
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
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "National University of La Plata",
      "description": "Software Engineering"
    },
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Node.js",
      "Redux",
      "Microfrontends",
      "Performance Optimization",
      "Developer Tooling",
      "System Architecture"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Engineer",
      "description": "Building scalable, high-performance web applications with React and TypeScript"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen text-gray-300 font-mono" style={{ backgroundColor: '#0c1116' }}>
        {/* Header */}
        <header className="max-w-4xl mx-auto p-6 border-b border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <h1 className="text-white font-medium">ivan</h1>
              <nav className="flex items-center gap-4 sm:gap-6 text-sm" aria-label="Main navigation">
                <Link href="mailto:ivanmaiergallardo@gmail.com" className="hover:text-white transition-colors" aria-label="Send email to Ivan">
                  email
                </Link>
                <Link href="https://github.com/ivanmaierg" className="hover:text-white transition-colors" aria-label="View Ivan's GitHub profile" target="_blank" rel="noopener noreferrer">
                  github
                </Link>
                <Link href="https://www.linkedin.com/in/ivanmaiergallardo/" className="hover:text-white transition-colors" aria-label="View Ivan's LinkedIn profile" target="_blank" rel="noopener noreferrer">
                  linkedin
                </Link>
              </nav>
            </div>
            <address className="text-sm not-italic self-start sm:self-auto">
              <span className="hidden md:inline">Buenos Aires, Argentina</span>
              <span className="md:hidden">Argentina</span>
            </address>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8 sm:space-y-12">
          {/* About */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <h2 className="text-sm">About</h2>
            <div className="md:col-span-3 text-sm leading-relaxed border-b border-gray-800 pb-6 md:pb-8">
              <p>
                Frontend Engineer with near 4 years of experience building scalable, high-performance web applications.
                Specialized in complex frontend systems like CRMs, WMS, dashboards, and low-code tools. Currently at
                MercadoLibre architecting microfrontend platforms and improving developer experience.
              </p>
            </div>
          </section>

          {/* GitHub Activity */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <h2 className="text-sm flex items-center gap-2">
              Activity
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </h2>
            <div className="md:col-span-3 border-b border-gray-800 pb-6 md:pb-8">
              {await GitHubContributions({ username: "ivanmaierg" })}
            </div>
          </section>

          {/* Experience */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <h2 className="text-sm">Experience</h2>
            <div className="md:col-span-3 space-y-6 md:space-y-8 border-b border-gray-800 pb-6 md:pb-8">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <Link
                    href="https://mercadolibre.com"
                    className="text-white hover:text-gray-300 transition-colors underline text-sm"
                  >
                    MercadoLibre
                  </Link>
                  <span className="text-sm">Frontend Engineer</span>
                </div>
                <div className="text-xs text-gray-500">2023 to Present — Buenos Aires / AR</div>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <Link
                    href="https://enviopack.com"
                    className="text-white hover:text-gray-300 transition-colors underline text-sm"
                  >
                    EnvioPack
                  </Link>
                  <span className="text-sm">Frontend Engineer</span>
                </div>
                <div className="text-xs text-gray-500">2022 to 2023 — Remote</div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <h2 className="text-sm">Education</h2>
            <div className="md:col-span-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-800 pb-6 md:pb-8">
              <div>
                <h3 className="text-white text-sm mb-1">National University of La Plata</h3>
                <p className="text-sm">Software Engineering</p>
              </div>
              <time className="text-xs text-gray-500 self-start sm:self-auto" dateTime="2020/2023">2020—2023</time>
            </div>
          </section>

          {/* Skills */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <h2 className="text-sm">Skills</h2>
            <div className="md:col-span-3 text-sm border-b border-gray-800 pb-6 md:pb-8">
              <p>React; TypeScript; JavaScript; Next.js; Node.js; Redux</p>
            </div>
          </section>

          {/* Interests */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <h2 className="text-sm">Interests</h2>
            <div className="md:col-span-3 text-sm">
              <p>Microfrontends; Performance optimization; Developer tooling; System architecture</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}