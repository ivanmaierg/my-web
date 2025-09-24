
import { ContributionGrid } from './contribution-grid'
import { ContributionLegend } from './contribution-legend'

interface GitHubContributionsProps {
  username: string
}

interface ContributionDay {
  date: string
  count: number
  level: number
}

async function fetchGitHubContributions(username: string): Promise<ContributionDay[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=300`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 7200 } as any // Cache for 2 hours
    })

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data")
    }

    const events = await response.json()
    
    const contributionsMap = new Map<string, number>()
    const today = new Date()
    const startDate = new Date(today.getFullYear(), 0, 1)
    
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      contributionsMap.set(dateStr, 0)
    }
    
    events.forEach((event: any) => {
      const eventDate = new Date(event.created_at).toISOString().split("T")[0]
      if (contributionsMap.has(eventDate)) {
        let weight = 1
        if (event.type === 'PushEvent') weight = 2
        if (event.type === 'PullRequestEvent') weight = 3
        if (event.type === 'IssuesEvent') weight = 1
        
        contributionsMap.set(eventDate, (contributionsMap.get(eventDate) || 0) + weight)
      }
    })
    
    const contributions: ContributionDay[] = []
    for (let d = new Date(startDate); d <= today; d = new Date(d.getTime() + 24 * 60 * 60 * 1000)) {
      const dateStr = d.toISOString().split("T")[0]
      const count = contributionsMap.get(dateStr) || 0
      let level = 0
      if (count >= 1 && count <= 2) level = 1
      else if (count >= 3 && count <= 5) level = 2
      else if (count >= 6 && count <= 10) level = 3
      else if (count > 10) level = 4
      
      contributions.push({
        date: dateStr,
        count,
        level
      })
    }
    
    return contributions
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return generateMockContributions()
  }
}

const generateMockContributions = (): ContributionDay[] => {
  const contributions: ContributionDay[] = []
  const today = new Date()
  const startDate = new Date(today.getFullYear(), 0, 1) // January 1st of current year

  for (let d = new Date(startDate); d <= today; d = new Date(d.getTime() + 24 * 60 * 60 * 1000)) {
    const rand = Math.random()
    let level = 0
    let count = 0
    
    if (rand > 0.7) { // 30% chance of activity
      if (rand > 0.92) { // 8% chance of medium activity
        level = 3
        count = Math.floor(Math.random() * 8) + 6
      } else if (rand > 0.98) { // 6% chance of high activity
        level = 4
        count = Math.floor(Math.random() * 15) + 10
      } else { // 16% chance of low activity
        level = Math.floor(Math.random() * 2) + 1
        count = Math.floor(Math.random() * 5) + 1
      }
    }
    
    contributions.push({
      date: d.toISOString().split("T")[0],
      count,
      level,
    })
  }

  return contributions
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export async function GitHubContributions({ username }: GitHubContributionsProps) {
  try {
    const contributions = await fetchGitHubContributions(username)
    const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)

    const weeks: (ContributionDay | null)[][] = []
    let currentWeek: (ContributionDay | null)[] = []

    contributions.forEach((day, index) => {
      const date = new Date(day.date)
      const dayOfWeek = date.getDay()

      if (index === 0) {
        for (let i = 0; i < dayOfWeek; i++) {
          currentWeek.push(null)
        }
      }

      currentWeek.push(day)

      if (currentWeek.length === 7) {
        weeks.push([...currentWeek])
        currentWeek = []
      } else if (index === contributions.length - 1) {
        while (currentWeek.length < 7) {
          currentWeek.push(null)
        }
        weeks.push([...currentWeek])
      }
    })

    const monthLabels: string[] = weeks.map((week) => {
      const firstOfMonth = week.find((d) => d && new Date(d.date).getDate() === 1)
      if (!firstOfMonth) return ""
      const m = new Date(firstOfMonth.date).getMonth()
      return months[m]
    })

    return (
      <div className="space-y-4 animate-fade-in">
        <ContributionGrid weeks={weeks} monthLabels={monthLabels} />
        <ContributionLegend totalContributions={totalContributions} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-muted/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-2xl">
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-3 text-muted-foreground">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h4 className="mb-1 text-sm font-medium text-foreground">
            GitHub data unavailable
          </h4>
          <p className="text-xs text-muted-foreground">
            Unable to load GitHub information at this time.
          </p>
        </div>
      </div>
    )
  }
}