import { Section } from "./section"

export const AboutSection = () => {
  return (
    <Section title="About">
      <div className="text-sm text-foreground leading-relaxed border-b border-border pb-6 mobile:pb-8">
        <p>
          Frontend Engineer with 4 years of experience building scalable, high-performance web applications. 
          Specialized in complex frontend systems like CRMs, WMS, dashboards, and low-code tools. Currently at 
          MercadoLibre architecting microfrontend platforms and improving developer experience.
        </p>
      </div>
    </Section>
  )
}
