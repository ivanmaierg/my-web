import { Section } from "./section"

export const AboutSection = () => {
  return (
    <Section title="About">
      <div className="text-sm text-foreground leading-relaxed border-b border-border pb-6 mobile:pb-8 space-y-4">
        <p>
          Software engineer, frontend-leaning full-stack. 4+ years building B2B platforms used by
          tens of thousands of operators across logistics, CRM, CX, and fleet safety.
        </p>
        <p>
          Currently at Nauto (Series C, AI fleet safety), shipping the customer-facing platform used
          by fleet, safety, and operations teams across 500k+ drivers. Before Nauto, 3 years at
          Mercado Libre&apos;s CX IT org helping build a next-gen CRM now used by 25k+ agents handling
          5M+ monthly customer interactions. Earlier at Envíopack, I shipped a B2B WMS, redesigned
          core warehouse workflows (30% faster operator task time), and took test coverage from 0 to 90%.
        </p>
        <p className="text-muted-foreground">
          Looking for a US AI-native startup (Series A–C) building agentic tools for power users
          or developers. Based in Buenos Aires, full overlap with US time zones, open to remote
          or relocation.
        </p>
      </div>
    </Section>
  )
}
