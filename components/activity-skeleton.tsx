import { Section } from "./section"

export const ActivitySkeleton = () => {
  return (
    <Section title="Activity">
      <div className="border-b border-border pb-6 mobile:pb-8 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-4 w-32 bg-muted-foreground/10 rounded animate-pulse" />
            <div className="h-4 w-24 bg-muted-foreground/10 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-[repeat(53,1fr)] gap-1">
            {Array.from({ length: 371 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm bg-muted-foreground/10 animate-pulse"
                style={{ animationDelay: `${(i % 53) * 20}ms` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 border border-border rounded-lg">
              <div className="h-4 w-48 bg-muted-foreground/10 rounded animate-pulse mb-2" />
              <div className="h-3 w-full bg-muted-foreground/10 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
