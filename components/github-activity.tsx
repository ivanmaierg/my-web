import { GitCommit, GitFork, Star, Calendar } from "lucide-react"
import Link from "next/link"
import { GitHubErrorBoundary } from './error-boundary'

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
    // Fetch recent events
    const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=5`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 7200 } // Cache for 2 hours
    })
    
    if (!eventsResponse.ok) {
      throw new Error("Failed to fetch events")
    }
    const eventsData = await eventsResponse.json()

    // Fetch recent repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 7200 } // Cache for 2 hours
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
  try {
    const { events, repos, error } = await fetchGitHubData(username)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return date.toLocaleDateString()
  }

  const getEventDescription = (event: GitHubEvent) => {
    switch (event.type) {
      case "PushEvent":
        const commitCount = event.payload.commits?.length || 0
        return `Pushed ${commitCount} commit${commitCount !== 1 ? "s" : ""} to`
      case "CreateEvent":
        return event.payload.ref_type === "repository" ? "Created repository" : "Created branch in"
      case "ForkEvent":
        return "Forked"
      case "WatchEvent":
        return "Starred"
      case "IssuesEvent":
        return `${event.payload.action} issue in`
      case "PullRequestEvent":
        return `${event.payload.action} pull request in`
      default:
        return "Activity in"
    }
  }

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case "PushEvent":
        return <GitCommit className="h-4 w-4" />
      case "ForkEvent":
        return <GitFork className="h-4 w-4" />
      case "WatchEvent":
        return <Star className="h-4 w-4" />
      default:
        return <GitCommit className="h-4 w-4" />
    }
  }

  if (error) {
    return (
      <div className="text-muted-foreground text-sm">Unable to load GitHub activity. Please check the username.</div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Recent Repositories */}
      <div className="space-y-3">
        <div className="space-y-3">
          {repos.slice(0, 3).map((repo: GitHubRepo, index: number) => (
            <div 
              key={repo.name} 
              className="p-4 border border-gray-800 rounded-lg animate-fade-in hover:shadow-lg hover:shadow-white/5 transition-all duration-300 hover:border-gray-700"
              style={{ animationDelay: `${0.5 + index * 0.2}s`, animationFillMode: 'both' }}
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    className="font-medium hover:text-white transition-colors duration-200"
                  >
                    {repo.name}
                  </Link>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1 transition-colors duration-200 hover:text-white">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1 transition-colors duration-200 hover:text-white">
                      <GitFork className="h-3 w-3" />
                      {repo.forks_count}
                    </div>
                  </div>
                </div>
                {repo.description && <p className="text-sm text-muted-foreground">{repo.description}</p>}
                <div className="flex items-center gap-2">
                  {repo.language && (
                    <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded transition-colors duration-200 hover:bg-gray-700">
                      {repo.language}
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">Updated {formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  } catch (error) {
    console.error('Error in GitHubActivity:', error)
    return (
      <GitHubErrorBoundary>
        <div className="w-full max-w-4xl mx-auto p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-2xl">
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-3 text-gray-400">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h4 className="mb-1 text-sm font-medium text-gray-200">
              GitHub data unavailable
            </h4>
            <p className="text-xs text-gray-400">
              Unable to load GitHub information at this time.
            </p>
          </div>
        </div>
      </GitHubErrorBoundary>
    )
  }
}
