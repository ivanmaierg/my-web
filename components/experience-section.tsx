import Link from "next/link"
import { Section } from "./section"

interface ExperienceItem {
  company: string
  companyUrl: string
  position: string
  period: string
  location: string
}

const experiences: ExperienceItem[] = [
  {
    company: "Nauto",
    companyUrl: "https://nauto.com",
    position: "Frontend Software Engineer",
    period: "Dec 2025 to Present",
    location: "Argentina"
  },
  {
    company: "MercadoLibre",
    companyUrl: "https://mercadolibre.com",
    position: "Frontend Software Engineer",
    period: "2023 to Dec 2025",
    location: "Argentina"
  },
  {
    company: "Enviopack",
    companyUrl: "https://enviopack.com",
    position: "Frontend Software Engineer",
    period: "2022 to 2023",
    location: "Argentina"
  }
]

export const ExperienceSection = () => {
  return (
    <Section title="Experience">
      <div className="space-y-6 mobile:space-y-8 border-b border-border pb-6 mobile:pb-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex items-baseline gap-2 mb-2">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors underline text-sm"
              >
                {exp.company}
              </a>
              <span className="text-sm text-foreground">{exp.position}</span>
            </div>
            <div className="text-xs text-muted-foreground">{exp.period} — {exp.location}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
