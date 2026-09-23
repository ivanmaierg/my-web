interface ContributionLegendProps {
  totalContributions: number
}

export const ContributionLegend = ({ totalContributions }: ContributionLegendProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
      <div className="tabular-nums">{totalContributions} contributions in {new Date().getFullYear()}</div>
      <div className="flex items-center gap-2">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-contribution-0"></div>
          <div className="w-3 h-3 rounded-sm bg-contribution-1"></div>
          <div className="w-3 h-3 rounded-sm bg-contribution-2"></div>
          <div className="w-3 h-3 rounded-sm bg-contribution-3"></div>
          <div className="w-3 h-3 rounded-sm bg-contribution-4"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  )
}
