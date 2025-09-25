export const GitHubError = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-muted/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-2xl">
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-3 text-muted-foreground">
          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h4 className="mb-1 text-sm font-medium text-foreground">
          GitHub data unavailable
        </h4>
        <p className="text-xs text-muted-foreground">
          Unable to load GitHub information at this time.
        </p>
      </div>
    </div>
  )
}
