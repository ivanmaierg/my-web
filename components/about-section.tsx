import { Section } from "./section"

export const AboutSection = () => {
  return (
    <Section title="About">
      <div className="text-sm text-foreground leading-relaxed border-b border-border pb-6 mobile:pb-8 space-y-4">
        <p>
          Senior Software Engineer focused on full-stack product engineering. 5 years building
          B2B platforms across CRM, logistics, and fleet safety.
        </p>
        <p>
          Currently at Empiric Earth, building the customer platform used by 1,000+ fleets worldwide,
          including dashboards, event review, SSO, integrations, and enterprise rollouts. Previously
          at Mercado Libre, I helped build a CRM used by 25K+ users and designed a Node.js/GraphQL
          BFF and shared React Query data layer for 100+ microfrontends. Earlier at Envíopack,
          I shipped a B2B WMS, cut operator task time by 30%, and took test coverage from 0% to 90%.
        </p>
        <p className="text-muted-foreground">
          Based in Buenos Aires, with full overlap with US hours.
        </p>
      </div>
    </Section>
  )
}
