"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitCommit, GitFork, Star, Calendar } from "lucide-react"
import Link from "next/link"

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

export function GitHubActivity({ username }: GitHubActivityProps) {
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)

        // Fetch recent events
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=5`)
        if (!eventsResponse.ok) throw new Error("Failed to fetch events")
        const eventsData = await eventsResponse.json()

        // Fetch recent repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`)
        if (!reposResponse.ok) throw new Error("Failed to fetch repositories")
        const reposData = await reposResponse.json()

        setEvents(eventsData)
        setRepos(reposData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchGitHubData()
    }
  }, [username])

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

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-muted-foreground text-sm">Unable to load GitHub activity. Please check the username.</div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Recent Activity */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Recent Activity</h3>
        <div className="space-y-2">
          {events.slice(0, 5).map((event) => (
            <div key={event.id} className="flex items-start gap-3 text-sm">
              <div className="mt-0.5 text-muted-foreground">{getEventIcon(event.type)}</div>
              <div className="flex-1 min-w-0">
                <span className="text-muted-foreground">{getEventDescription(event)} </span>
                <Link
                  href={`https://github.com/${event.repo.name}`}
                  target="_blank"
                  className="font-medium hover:text-muted-foreground transition-colors"
                >
                  {event.repo.name}
                </Link>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {formatDate(event.created_at)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Repositories */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Recent Repositories</h3>
        <div className="space-y-3">
          {repos.slice(0, 3).map((repo) => (
            <Card key={repo.name} className="p-4">
              <CardContent className="p-0 space-y-2">
                <div className="flex items-start justify-between">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    className="font-medium hover:text-muted-foreground transition-colors"
                  >
                    {repo.name}
                  </Link>
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
                    <Badge variant="secondary" className="text-xs">
                      {repo.language}
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground">Updated {formatDate(repo.updated_at)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
