"use client"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { GitHubContributions } from "@/components/github-contributions"
import { CursorGlow } from "@/components/cursor-glow"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      <CursorGlow />
      {/* Header */}
      <header className="max-w-4xl mx-auto flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center gap-8">
          <h1 className="text-white font-medium">ivan</h1>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              home
            </Link>
            <Link href="mailto:ivanmaiergallardo@gmail.com" className="hover:text-white transition-colors">
              email
            </Link>
            <Link href="https://github.com/ivanmaiergallardo" className="hover:text-white transition-colors">
              github
            </Link>
          </nav>
        </div>
        <div className="text-sm">Buenos Aires / AR</div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* About */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-sm">About</div>
          <div className="md:col-span-3 text-sm leading-relaxed border-b border-gray-800 pb-8">
            Frontend Engineer with near 4 years of experience building scalable, high-performance web applications.
            Specialized in complex frontend systems like CRMs, WMS, dashboards, and low-code tools. Currently at
            MercadoLibre architecting microfrontend platforms and improving developer experience.
          </div>
        </section>

        {/* GitHub Activity */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-sm flex items-center gap-2">
            Recent GitHub
            <br />
            Activity
            <ExternalLink className="h-3 w-3" />
          </div>
          <div className="md:col-span-3 border-b border-gray-800 pb-8">
            <GitHubContributions username="ivanmaiergallardo" />
          </div>
        </section>

        {/* Experience */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-sm">Experience</div>
          <div className="md:col-span-3 space-y-8 border-b border-gray-800 pb-8">
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
              <p className="text-sm leading-relaxed mb-3">
                Leading frontend architecture for a CRM platform serving 25,000+ users. Built microfrontend ecosystem
                with 100+ modular apps, improved dev velocity 3x, and reduced load times by 30%. Currently developing
                internal IDE for safer deploys.
              </p>
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
              <p className="text-sm leading-relaxed mb-3">
                Delivered mobile and web features using shared React/React Native logic. Improved UX scores by
                redesigning critical flows and implemented Redux-Saga architecture for better performance and
                reliability.
              </p>
              <div className="text-xs text-gray-500">2022 to 2023 — Remote</div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-sm">Education</div>
          <div className="md:col-span-3 flex items-center justify-between border-b border-gray-800 pb-8">
            <div>
              <div className="text-white text-sm mb-1">National University of La Plata</div>
              <div className="text-sm">Software Engineering</div>
            </div>
            <div className="text-xs text-gray-500">2020—2025</div>
          </div>
        </section>

        {/* Skills */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-sm">Skills</div>
          <div className="md:col-span-3 text-sm border-b border-gray-800 pb-8">
            React; TypeScript; JavaScript; Next.js; Node.js; Redux
          </div>
        </section>

        {/* Interests */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-sm">Interests</div>
          <div className="md:col-span-3 text-sm">
            Microfrontends; Performance optimization; Developer tooling; System architecture
          </div>
        </section>
      </main>
    </div>
  )
}
