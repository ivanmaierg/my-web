import { Section } from "./section"

export const AboutSection = () => {
  return (
    <Section title="About">
      <div className="text-sm text-foreground leading-relaxed border-b border-border pb-6 mobile:pb-8 space-y-4">
        <p>
          Full-stack Software Engineer (frontend lean) with more than 4 years of experience.
          I build systems that scale and care about developer experience as much as user experience.
          At MercadoLibre, I helped scale a CRM to 25k+ users. At Envíopack, I redesigned workflows
          that boosted warehouse efficiency by 30%.
        </p>
        <p className="text-muted-foreground">
          Looking for opportunities in B2B, power-user tools, or operations-focused products.
        </p>
      </div>
    </Section>
  )
}
