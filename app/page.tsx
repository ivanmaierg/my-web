import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { ActivitySection } from "@/components/activity-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { InterestsSection } from "@/components/interests-section"
import { StructuredData } from "@/components/structured-data"
import { SEOContent } from "@/components/seo-content"

export default async function Portfolio() {
  return (
    <>
      <StructuredData />
      <SEOContent />
      
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