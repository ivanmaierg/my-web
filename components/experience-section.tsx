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
    company: "MercadoLibre",
    companyUrl: "https://mercadolibre.com",
    position: "Frontend Engineer",
    period: "2023 to Present",
    location: "Buenos Aires / AR"
  },
  {
    company: "EnvioPack",
    companyUrl: "https://enviopack.com",
    position: "Frontend Engineer",
    period: "2022 to 2023",
    location: "Remote"
  }
]

export const ExperienceSection = () => {
  return (
    <Section title="Experience">
      <div className="space-y-6 mobile:space-y-8 border-b border-border pb-6 mobile:pb-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex items-baseline gap-2 mb-2">
              <Link
                href={exp.companyUrl}
                className="text-muted-foreground hover:text-foreground transition-colors underline text-sm"
              >
                {exp.company}
              </Link>
              <span className="text-sm text-foreground">{exp.position}</span>
            </div>
            <div className="text-xs text-muted-foreground">{exp.period} — {exp.location}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
