import { RepositoryCard } from './repository-card'
import { GitHubRepo } from '@/lib/types'

interface GitHubActivityProps {
  username: string
}

async function fetchGitHubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 7200 }
    })

    if (!response.ok) {
      throw new Error("Failed to fetch repositories")
    }

    return { repos: await response.json() }
  } catch (error) {
    return { repos: [], error: error instanceof Error ? error.message : "An error occurred" }
  }
}

export async function GitHubActivity({ username }: GitHubActivityProps) {
  const { repos, error } = await fetchGitHubRepos(username)

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
