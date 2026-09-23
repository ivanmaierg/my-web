import { GitFork, Star } from "lucide-react"
import { GitHubRepo } from '@/lib/types'

interface RepositoryCardProps {
  repo: GitHubRepo
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return "Just now"
  if (diffInHours < 24) return `${diffInHours}h ago`
  if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
  return date.toLocaleDateString()
}

export const RepositoryCard = ({ repo }: RepositoryCardProps) => {
  return (
    <a
      key={repo.name}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="repository-card block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div 
        className="p-4 border border-border rounded-lg"
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <span className="font-medium">
              {repo.name}
            </span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3" />
                {repo.stargazers_count}
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="h-3 w-3" />
                {repo.forks_count}
              </div>
            </div>
          </div>
          {repo.description && <p className="text-sm text-muted-foreground">{repo.description}</p>}
          <div className="flex items-center gap-2">
            {repo.language && (
              <span className="px-2 py-1 text-xs bg-muted-foreground/10 text-muted-foreground rounded">
                {repo.language}
              </span>
            )}
            <span className="text-xs text-muted-foreground">Updated {formatDate(repo.updated_at)}</span>
          </div>
        </div>
      </div>
    </a>
  )
}
