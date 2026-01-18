import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-mono p-4">
      <div className="max-w-md text-center space-y-6">
        <div className="text-muted-foreground">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-medium text-balance">Page not found</h1>
          <p className="text-sm text-muted-foreground text-pretty">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
