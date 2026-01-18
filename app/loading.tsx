export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <header className="max-w-4xl mx-auto p-6 border-b border-border">
        <div className="flex flex-col mobile:flex-row mobile:items-center mobile:justify-between gap-4">
          <div className="flex flex-col mobile:flex-row mobile:items-center gap-4 mobile:gap-8">
            <div className="h-6 w-12 bg-muted-foreground/10 rounded animate-pulse" />
            <div className="flex items-center gap-4 mobile:gap-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-16 bg-muted-foreground/10 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-32 bg-muted-foreground/10 rounded animate-pulse" />
            <div className="size-8 bg-muted-foreground/10 rounded animate-pulse" />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 mobile:p-6 space-y-8 mobile:space-y-12 mt-8 mb-8">
        {Array.from({ length: 4 }).map((_, sectionIndex) => (
          <section key={sectionIndex} className="space-y-4">
            <div className="h-5 w-24 bg-muted-foreground/10 rounded animate-pulse" />
            <div className="space-y-3 border-b border-border pb-6 mobile:pb-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-muted-foreground/10 rounded animate-pulse"
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
