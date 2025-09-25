
import { ContributionGrid } from './contribution-grid'
import { ContributionLegend } from './contribution-legend'
import { GitHubError } from './github-error'
import { fetchGitHubContributions } from '@/lib/github-api'
import { processContributions } from '@/lib/contribution-processor'

interface GitHubContributionsProps {
  username: string
}

export async function GitHubContributions({ username }: GitHubContributionsProps) {
  try {
    const contributions = await fetchGitHubContributions(username)
    const { weeks, monthLabels, totalContributions } = processContributions(contributions)

    return (
      <div className="space-y-4 animate-fade-in">
        <ContributionGrid weeks={weeks} monthLabels={monthLabels} />
        <ContributionLegend totalContributions={totalContributions} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return <GitHubError />
  }
}