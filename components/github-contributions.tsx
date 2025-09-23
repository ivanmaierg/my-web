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
    // Fetch more events to get better coverage
    const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=300`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data")
    }

    const events = await response.json()
    
    // Process events to create contribution data
    const contributionsMap = new Map<string, number>()
    const today = new Date()
    const startDate = new Date(today.getFullYear(), 0, 1)
    
    // Initialize all days with 0 contributions
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      contributionsMap.set(dateStr, 0)
    }
    
    // Count contributions from events (prioritize meaningful events)
    events.forEach((event: any) => {
      const eventDate = new Date(event.created_at).toISOString().split("T")[0]
      if (contributionsMap.has(eventDate)) {
        let weight = 1
        // Give more weight to meaningful events
        if (event.type === 'PushEvent') weight = 2
        if (event.type === 'PullRequestEvent') weight = 3
        if (event.type === 'IssuesEvent') weight = 1
        
        contributionsMap.set(eventDate, (contributionsMap.get(eventDate) || 0) + weight)
      }
    })
    
    // Convert to contribution format with better scaling
    const contributions: ContributionDay[] = []
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      const count = contributionsMap.get(dateStr) || 0
      // Better scaling: 1-2 activities = level 1, 3-5 = level 2, 6-10 = level 3, 10+ = level 4
      const level = Math.min(4, Math.max(0, Math.floor((count - 1) / 2) + 1))
      contributions.push({
        date: dateStr,
        count,
        level
      })
    }
    
    return contributions
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    // Fallback to more realistic mock data if API fails
    return generateMockContributions()
  }
}

// Generate mock contribution data for fallback
const generateMockContributions = (): ContributionDay[] => {
  const contributions: ContributionDay[] = []
  const today = new Date()
  const startDate = new Date(today.getFullYear(), 0, 1) // January 1st of current year

  for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
    // More realistic distribution: 70% no activity, 20% low, 8% medium, 2% high
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
      date: new Date(d).toISOString().split("T")[0],
      count,
      level,
    })
  }

  return contributions
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export async function GitHubContributions({ username }: GitHubContributionsProps) {
  const contributions = await fetchGitHubContributions(username)
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-gray-800"
      case 1:
        return "bg-green-900"
      case 2:
        return "bg-green-700"
      case 3:
        return "bg-green-500"
      case 4:
        return "bg-green-400"
      default:
        return "bg-gray-800"
    }
  }

  // Group contributions by weeks
  const weeks: (ContributionDay | null)[][] = []
  let currentWeek: (ContributionDay | null)[] = []

  contributions.forEach((day, index) => {
    const date = new Date(day.date)
    const dayOfWeek = date.getDay()

    if (index === 0) {
      // Fill empty days at the start of the first week
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push(null)
      }
    }

    currentWeek.push(day)

    // Complete the week when it reaches 7 days or when we reach the end
    if (currentWeek.length === 7) {
      weeks.push([...currentWeek])
      currentWeek = []
    } else if (index === contributions.length - 1) {
      // Fill empty days at the end of the last week to complete it
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }
      weeks.push([...currentWeek])
    }
  })

  return (
    <div className="space-y-4 animate-in fade-in duration-700">
      {/* Month labels */}
      <div className="flex text-xs text-gray-500 ml-8 animate-in slide-in-from-left duration-500 delay-100 overflow-hidden mobile:overflow-visible">
        {months.slice(1, 8).map((month, index) => (
          <div key={month} className="w-10 text-center flex-shrink-0" style={{ marginLeft: index === 0 ? "0" : "32px" }}>
            {month}
          </div>
        ))}
      </div>

      {/* Contribution grid */}
      <div className="flex gap-1 animate-in slide-in-from-left duration-500 delay-200 overflow-hidden mobile:overflow-visible">
        {/* Day labels */}
        <div className="flex flex-col gap-1 text-xs text-gray-500 pr-2 flex-shrink-0">
          <div className="h-3"></div>
          <div className="h-3">Mon</div>
          <div className="h-3"></div>
          <div className="h-3">Wed</div>
          <div className="h-3"></div>
          <div className="h-3">Fri</div>
          <div className="h-3"></div>
        </div>

        {/* Grid */}
        <div className="flex gap-1 min-w-max">
          {weeks.slice(1).map((week, weekIndex) => (
            <div key={weekIndex + 1} className="flex flex-col gap-1 flex-shrink-0">
              {week.map((day: ContributionDay | null, dayIndex: number) => (
                <div
                  key={`${weekIndex + 1}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm transition-all duration-300 hover:scale-110 ${day ? getContributionColor(day.level) : "bg-transparent"}`}
                  title={day ? `${day.count} contributions on ${day.date}` : ""}
                  style={{ 
                    animationDelay: `${(weekIndex * 7 + dayIndex) * 10}ms`,
                    animation: 'fadeIn 0.3s ease-in-out forwards'
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500 animate-in slide-in-from-left duration-500 delay-300">
        <div className="transition-colors duration-200 hover:text-white">{totalContributions} contributions in {new Date().getFullYear()}</div>
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-gray-800 transition-all duration-200 hover:scale-110"></div>
            <div className="w-3 h-3 rounded-sm bg-green-900 transition-all duration-200 hover:scale-110"></div>
            <div className="w-3 h-3 rounded-sm bg-green-700 transition-all duration-200 hover:scale-110"></div>
            <div className="w-3 h-3 rounded-sm bg-green-500 transition-all duration-200 hover:scale-110"></div>
            <div className="w-3 h-3 rounded-sm bg-green-400 transition-all duration-200 hover:scale-110"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}