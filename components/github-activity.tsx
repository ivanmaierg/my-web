import { RepositoryCard } from './repository-card'

interface GitHubEvent {
  id: string
  type: string
  actor: {
    login: string
    avatar_url: string
  }
  repo: {
    name: string
    url: string
  }
  payload: any
  created_at: string
}

interface GitHubRepo {
  name: string
  full_name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string
  updated_at: string
}

interface GitHubActivityProps {
  username: string
}

async function fetchGitHubData(username: string) {
  try {
    const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=5`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 7200 } as any
    })
    
    if (!eventsResponse.ok) {
      throw new Error("Failed to fetch events")
    }
    const eventsData = await eventsResponse.json()

    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 7200 } as any
    })
    
    if (!reposResponse.ok) {
      throw new Error("Failed to fetch repositories")
    }
    const reposData = await reposResponse.json()

    return { events: eventsData, repos: reposData }
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    return { events: [], repos: [], error: error instanceof Error ? error.message : "An error occurred" }
  }
}

export async function GitHubActivity({ username }: GitHubActivityProps) {
  const { repos, error } = await fetchGitHubData(username)

  if (error) {
    return (
      <div className="text-muted-foreground text-sm">Unable to load GitHub activity. Please check the username.</div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        {repos.slice(0, 4).map((repo: GitHubRepo, index: number) => (
          <RepositoryCard key={repo.name} repo={repo} index={index} />
        ))}
      </div>
    </div>
  )
}
