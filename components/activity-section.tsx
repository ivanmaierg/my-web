import { ExternalLink } from "lucide-react"
import { GitHubContributions } from "@/components/github-contributions"
import { GitHubActivity } from "@/components/github-activity"
import { GitHubErrorBoundary } from "@/components/error-boundary"
import { Section } from "./section"

interface ActivitySectionProps {
  username: string
}

export const ActivitySection = async ({ username }: ActivitySectionProps) => {
  return (
    <Section title="Activity">
      <div className="border-b border-gray-800 pb-6 mobile:pb-8 space-y-8">
        <div className="flex items-center gap-2">
          <h2 className="text-sm flex items-center gap-2">
            Activity
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </h2>
        </div>
        <GitHubErrorBoundary>
          {await GitHubContributions({ username })}
        </GitHubErrorBoundary>
        <GitHubErrorBoundary>
          {await GitHubActivity({ username })}
        </GitHubErrorBoundary>
      </div>
    </Section>
  )
}
