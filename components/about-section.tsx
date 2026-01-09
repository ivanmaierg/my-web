import { Section } from "./section"

export const AboutSection = () => {
  return (
    <Section title="About">
      <div className="text-sm text-foreground leading-relaxed border-b border-border pb-6 mobile:pb-8">
        <p>
          Product-focused Software Engineer (frontend-leaning) with 4+ years of experience building
          high-performance, scalable web products where user experience, iteration speed, and developer
          experience matter. Currently at Nauto working on web applications for AI and real-time systems.
        </p>
      </div>
    </Section>
  )
}
