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
    <Section
      title={
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          Activity
          <ExternalLink aria-hidden="true" className="h-3 w-3" />
        </a>
      }
    >
      <div className="border-b border-border pb-6 mobile:pb-8 space-y-8">
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
