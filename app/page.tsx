import { Suspense } from "react"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { ActivitySection } from "@/components/activity-section"
import { ActivitySkeleton } from "@/components/activity-skeleton"
import { CurrentlyReadingSection } from "@/components/currently-reading-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { InterestsSection } from "@/components/interests-section"
import { StructuredData } from "@/components/structured-data"
import { SEOContent } from "@/components/seo-content"

export default function Portfolio() {
  return (
    <>
      <StructuredData />
      <SEOContent />

      <div className="min-h-screen text-foreground font-mono scroll-smooth scroll-enhanced bg-background">
        <Header />

        <main id="main-content" className="max-w-4xl mx-auto p-4 mobile:p-6 space-y-8 mobile:space-y-12 scroll-smooth scroll-padding-top mt-8 mb-8">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <Suspense fallback={<ActivitySkeleton />}>
            {/* @ts-expect-error Async Server Component - TypeScript limitation with RSC */}
            <ActivitySection username="ivanmaierg" />
          </Suspense>
          <InterestsSection />
          <CurrentlyReadingSection />
        </main>
      </div>
    </>
  )
}