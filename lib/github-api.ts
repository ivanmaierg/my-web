export interface ContributionDay {
  date: string
  count: number
  level: number
}

export const fetchGitHubContributions = async (username: string): Promise<ContributionDay[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=300`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 1800 }
    } as RequestInit)

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
  const startDate = new Date(today.getFullYear(), 0, 1)

  for (let d = new Date(startDate); d <= today; d = new Date(d.getTime() + 24 * 60 * 60 * 1000)) {
    const rand = Math.random()
    let level = 0
    let count = 0
    
    if (rand > 0.7) {
      if (rand > 0.92) {
        level = 3
        count = Math.floor(Math.random() * 8) + 6
      } else if (rand > 0.98) {
        level = 4
        count = Math.floor(Math.random() * 15) + 10
      } else {
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
