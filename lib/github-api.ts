export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionWeek {
  contributionDays: ContributionDay[]
}

export interface GitHubContributionsResponse {
  weeks: ContributionWeek[]
  totalContributions: number
}

const CONTRIBUTION_LEVEL_MAP: Record<string, number> = {
  'NONE': 0,
  'FIRST_QUARTILE': 1,
  'SECOND_QUARTILE': 2,
  'THIRD_QUARTILE': 3,
  'FOURTH_QUARTILE': 4
}

interface GitHubContributionDayRaw {
  date: string
  contributionCount: number
  contributionLevel: string
}

interface GitHubContributionWeekRaw {
  contributionDays: GitHubContributionDayRaw[]
}

const GRAPHQL_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

export const fetchGitHubContributions = async (username: string): Promise<GitHubContributionsResponse> => {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    console.warn('GITHUB_TOKEN not set, using mock data')
    return generateMockContributions()
  }

  try {
    const today = new Date()
    const from = new Date(today)
    from.setDate(from.getDate() - 364) // 52 weeks back

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
        variables: {
          username,
          from: from.toISOString(),
          to: today.toISOString()
        }
      }),
      next: { revalidate: 1800 }
    } as RequestInit)

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data")
    }

    const data = await response.json()

    if (data.errors) {
      throw new Error(data.errors[0]?.message || 'GraphQL error')
    }

    const calendar = data.data?.user?.contributionsCollection?.contributionCalendar

    if (!calendar) {
      throw new Error('No contribution data found')
    }

    const weeks: ContributionWeek[] = calendar.weeks.map((week: GitHubContributionWeekRaw) => ({
      contributionDays: week.contributionDays.map((day: GitHubContributionDayRaw) => ({
        date: day.date,
        count: day.contributionCount,
        level: CONTRIBUTION_LEVEL_MAP[day.contributionLevel] ?? 0
      }))
    }))

    return {
      weeks,
      totalContributions: calendar.totalContributions
    }
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return generateMockContributions()
  }
}

const generateMockContributions = (): GitHubContributionsResponse => {
  const weeks: ContributionWeek[] = []
  const today = new Date()
  const startDate = new Date(today)
  startDate.setDate(startDate.getDate() - 364) // 52 weeks back

  // Align to Sunday
  const dayOfWeek = startDate.getDay()
  startDate.setDate(startDate.getDate() - dayOfWeek)

  let totalContributions = 0
  const currentDate = new Date(startDate)

  for (let week = 0; week < 53; week++) {
    const contributionDays: ContributionDay[] = []

    for (let day = 0; day < 7; day++) {
      const rand = Math.random()
      let level = 0
      let count = 0

      if (rand > 0.7) {
        if (rand > 0.95) {
          level = 4
          count = Math.floor(Math.random() * 15) + 10
        } else if (rand > 0.88) {
          level = 3
          count = Math.floor(Math.random() * 8) + 6
        } else if (rand > 0.8) {
          level = 2
          count = Math.floor(Math.random() * 4) + 3
        } else {
          level = 1
          count = Math.floor(Math.random() * 2) + 1
        }
      }

      totalContributions += count

      contributionDays.push({
        date: currentDate.toISOString().split("T")[0],
        count,
        level,
      })

      currentDate.setDate(currentDate.getDate() + 1)
    }

    weeks.push({ contributionDays })
  }

  return { weeks, totalContributions }
}
