import { Section } from "./section"
import { experiences } from "@/lib/experiences-data"

export const ExperienceSection = () => {
  return (
    <Section title="Experience">
      <ul className="space-y-6 mobile:space-y-8 border-b border-border pb-6 mobile:pb-8 list-none">
        {experiences.map((exp) => (
          <li key={exp.id}>
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
          </li>
        ))}
      </ul>
    </Section>
  )
}
