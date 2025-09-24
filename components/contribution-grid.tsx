interface ContributionDay {
  date: string
  count: number
  level: number
}

interface ContributionGridProps {
  weeks: (ContributionDay | null)[][]
  monthLabels: string[]
}

const getContributionColor = (level: number) => {
  switch (level) {
    case 0:
      return "bg-contribution-0"
    case 1:
      return "bg-contribution-1"
    case 2:
      return "bg-contribution-2"
    case 3:
      return "bg-contribution-3"
    case 4:
      return "bg-contribution-4"
    default:
      return "bg-contribution-0"
  }
}

export const ContributionGrid = ({ weeks, monthLabels }: ContributionGridProps) => {
  return (
    <div className="overflow-x-auto scrollbar-none scroll-right-initial">
      <div className="min-w-max scroll-right-content">
        {/* Month labels aligned with week columns */}
        <div className="flex items-start gap-1 text-xs text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <div className="w-8 flex-shrink-0" />
          <div className="flex gap-1">
            {monthLabels.map((label, i) => (
              <div key={`ml-${i}`} className="w-3 text-center flex-shrink-0">
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Contribution grid */}
        <div className="flex gap-1 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          {/* Day labels */}
          <div className="w-8 flex flex-col gap-1 text-xs text-muted-foreground flex-shrink-0">
            <div className="h-3"></div>
            <div className="h-3">Mon</div>
            <div className="h-3"></div>
            <div className="h-3">Wed</div>
            <div className="h-3"></div>
            <div className="h-3">Fri</div>
            <div className="h-3"></div>
          </div>

          {/* Grid */}
          <div className="flex gap-1 min-w-max">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex + 1} className={`flex flex-col gap-1 flex-shrink-0`}>
                {week.map((day: ContributionDay | null, dayIndex: number) => (
                  <div
                    key={`${weekIndex + 1}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm transition-all duration-300 hover:scale-110 animate-fade-in ${day ? getContributionColor(day.level) : "bg-transparent"}`}
                    title={day ? `${day.count} contributions on ${day.date}` : ""}
                    style={{ 
                      animationDelay: `${0.3 + (weekIndex * 7 + dayIndex) * 0.005}s`,
                      animationFillMode: 'both'
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
