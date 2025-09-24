import { Star, GitFork } from "lucide-react"
import Link from "next/link"

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

interface RepositoryCardProps {
  repo: GitHubRepo
  index: number
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

export const RepositoryCard = ({ repo, index }: RepositoryCardProps) => {
  return (
    <Link
      key={repo.name}
      href={repo.html_url}
      target="_blank"
      className="block"
    >
      <div 
        className="p-4 border border-gray-800 rounded-lg animate-fade-in hover:shadow-lg hover:shadow-white/5 transition-all duration-300 hover:border-gray-700 cursor-pointer"
        style={{ animationDelay: `${0.5 + index * 0.2}s`, animationFillMode: 'both' }}
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <span className="font-medium hover:text-white transition-colors duration-200">
              {repo.name}
            </span>
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
    </Link>
  )
}
