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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only" aria-hidden="true">
        <h1>Ivan Maier Gallardo - Frontend Engineer Portfolio</h1>
        <p>
          Welcome to the personal portfolio of Ivan Maier Gallardo, a skilled Frontend Engineer 
          with nearly 4 years of experience in building scalable web applications. Ivan Maier Gallardo 
          specializes in React, TypeScript, and modern web technologies, currently working at 
          MercadoLibre in Buenos Aires, Argentina.
        </p>
        <h2>About Ivan Maier Gallardo</h2>
        <p>
          Ivan Maier Gallardo is a passionate Frontend Engineer who has dedicated his career to 
          creating exceptional user experiences through innovative web technologies. With expertise 
          in React, TypeScript, JavaScript, and Next.js, Ivan Maier Gallardo has contributed to 
          numerous high-impact projects at MercadoLibre.
        </p>
        <h2>Professional Experience</h2>
        <p>
          Ivan Maier Gallardo currently serves as a Frontend Engineer at MercadoLibre, where he 
          architects microfrontend platforms and improves developer experience. His work focuses 
          on building scalable, high-performance web applications that serve millions of users.
        </p>
        <h2>Technical Skills</h2>
        <p>
          Ivan Maier Gallardo's technical expertise includes React, TypeScript, JavaScript, Next.js, 
          Node.js, Redux, and modern web development practices. He is passionate about performance 
          optimization, developer experience, and creating maintainable codebases.
        </p>
        <h2>Contact Ivan Maier Gallardo</h2>
        <p>
          For professional inquiries, collaborations, or opportunities, you can reach Ivan Maier 
          Gallardo at ivanmaiergallardo@gmail.com. Based in Buenos Aires, Argentina, Ivan Maier 
          Gallardo is open to discussing frontend engineering opportunities and technical consulting.
        </p>
      </div>
      
      <div className="min-h-screen text-foreground font-mono scroll-smooth scroll-enhanced bg-background">
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