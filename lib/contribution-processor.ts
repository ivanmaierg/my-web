import { ContributionDay, ContributionWeek, GitHubContributionsResponse } from './github-api'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const processContributions = (response: GitHubContributionsResponse) => {
  const { weeks: rawWeeks, totalContributions } = response

  // Convert to the format expected by ContributionGrid
  const weeks: (ContributionDay | null)[][] = rawWeeks.map((week: ContributionWeek) =>
    week.contributionDays
  )

  // Generate month labels based on the first of each month
  const monthLabels: string[] = weeks.map((week) => {
    const firstOfMonth = week.find((d) => d && new Date(d.date).getDate() === 1)
    if (!firstOfMonth) return ""
    const m = new Date(firstOfMonth.date).getMonth()
    return months[m]
  })

  return {
    weeks,
    monthLabels,
    totalContributions
  }
}
