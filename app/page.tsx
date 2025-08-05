"use client"
import { ExternalLink, Github, Twitter, BookOpen } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { GitHubActivity } from "@/components/github-activity"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-mono">
      {/* Fixed Header with Theme Toggle */}
      <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-2xl px-4 py-16">
        <div className="space-y-12">
          {/* Intro */}
          <section className="space-y-2">
            <h1 className="text-2xl font-medium">Hey! I'm John</h1>
            <p className="text-lg text-muted-foreground">I'm a software engineer</p>
          </section>

          {/* About */}
          <section className="space-y-4">
            <h2 className="text-xl font-medium">About</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>- I live in Buenos Aires, Argentina</li>
              <li>- I work at TechCorp as a founding engineer</li>
              <li>- I'm passionate about frontend development and user experience</li>
              <li>- I do weird things with React components and state management</li>
              <li>- I'm obsessed with performance optimization</li>
              <li>- I love doing reverse engineering</li>
            </ul>
          </section>

          {/* Links */}
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-4 w-4" />X
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  My Reading List
                </Link>
              </li>
            </ul>
          </section>

          {/* Projects */}
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Projects</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Link
                  href="#"
                  target="_blank"
                  className="inline-flex items-center gap-2 font-medium hover:text-muted-foreground transition-colors"
                >
                  TaskFlow SDK
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <p className="text-muted-foreground">SDKs, APIs, Reverse Engineering, Frontend</p>
              </div>

              <div className="space-y-2">
                <Link
                  href="#"
                  target="_blank"
                  className="inline-flex items-center gap-2 font-medium hover:text-muted-foreground transition-colors"
                >
                  React Performance Toolkit
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <p className="text-muted-foreground">Performance optimization, React internals, Developer tools</p>
              </div>

              <div className="space-y-2">
                <Link
                  href="#"
                  target="_blank"
                  className="inline-flex items-center gap-2 font-medium hover:text-muted-foreground transition-colors"
                >
                  API Reverse Engineering Tool
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <p className="text-muted-foreground">Reverse engineering, Network analysis, Security research</p>
              </div>

              <div className="space-y-2">
                <Link
                  href="#"
                  target="_blank"
                  className="inline-flex items-center gap-2 font-medium hover:text-muted-foreground transition-colors"
                >
                  Component Library
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <p className="text-muted-foreground">React components, TypeScript, Design systems</p>
              </div>
            </div>
          </section>

          {/* GitHub Activity */}
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Latest GitHub Activity</h2>
            <GitHubActivity username="your-github-username" />
          </section>
        </div>
      </main>
    </div>
  )
}
