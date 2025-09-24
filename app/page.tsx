import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { GitHubContributions } from "@/components/github-contributions"
import { GitHubActivity } from "@/components/github-activity"
import { NAVIGATION_ITEMS, STRUCTURED_DATA_LINKS } from "@/lib/constants"

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
        {/* Header */}
        <header className="max-w-4xl mx-auto p-6 border-b border-gray-800">
          <div className="flex flex-col mobile:flex-row mobile:items-center mobile:justify-between gap-4">
            <div className="flex flex-col mobile:flex-row mobile:items-center gap-4 mobile:gap-8">
              <h1 className="text-white font-medium">ivan</h1>
              <nav className="flex items-center gap-4 mobile:gap-6 text-sm" aria-label="Main navigation">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="hover:text-white transition-colors" 
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <address className="text-sm not-italic self-start mobile:self-auto">
              <span className="hidden mobile:inline">Buenos Aires, Argentina</span>
              <span className="mobile:hidden">Argentina</span>
            </address>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto p-4 mobile:p-6 space-y-8 mobile:space-y-12 scroll-smooth scroll-padding-top">
          {/* About */}
          <section className="grid grid-cols-1 mobile:grid-cols-4 gap-4 mobile:gap-8">
            <h2 className="text-sm">About</h2>
            <div className="mobile:col-span-3 text-sm leading-relaxed border-b border-gray-800 pb-6 mobile:pb-8">
              <p>
                Frontend Engineer with near 4 years of experience building scalable, high-performance web applications. 
                Specialized in complex frontend systems like CRMs, WMS, dashboards, and low-code tools. Currently at 
                MercadoLibre architecting microfrontend platforms and improving developer experience.
              </p>
            </div>
          </section>

          {/* GitHub Activity */}
          <section className="grid grid-cols-1 mobile:grid-cols-4 gap-4 mobile:gap-8">
            <h2 className="text-sm flex items-center gap-2">
              Activity
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </h2>
            <div className="mobile:col-span-3 border-b border-gray-800 pb-6 mobile:pb-8 space-y-8">
              {await GitHubContributions({ username: "ivanmaierg" })}
              {await GitHubActivity({ username: "ivanmaierg" })}
            </div>
          </section>

          {/* Experience */}
          <section className="grid grid-cols-1 mobile:grid-cols-4 gap-4 mobile:gap-8">
            <h2 className="text-sm">Experience</h2>
            <div className="mobile:col-span-3 space-y-6 mobile:space-y-8 border-b border-gray-800 pb-6 mobile:pb-8">
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
                <div className="text-xs text-muted-foreground">2023 to Present — Buenos Aires / AR</div>
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
                <div className="text-xs text-muted-foreground">2022 to 2023 — Remote</div>
              </div>
            </div>
          </section>


          {/* Skills */}
          <section className="grid grid-cols-1 mobile:grid-cols-4 gap-4 mobile:gap-8">
            <h2 className="text-sm">Skills</h2>
            <div className="mobile:col-span-3 text-sm border-b border-gray-800 pb-6 mobile:pb-8">
              <p>React - TypeScript - JavaScript - Next.js - Node.js - Redux</p>
            </div>
          </section>

          {/* Interests */}
          <section className="grid grid-cols-1 mobile:grid-cols-4 gap-4 mobile:gap-8">
            <h2 className="text-sm">Interests</h2>
            <div className="mobile:col-span-3 text-sm">
              <p>Microfrontends - Performance optimization - Developer tooling - System architecture</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}