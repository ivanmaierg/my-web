interface ContributionLegendProps {
  totalContributions: number
}

export const ContributionLegend = ({ totalContributions }: ContributionLegendProps) => {
  return (
    <div className="flex items-center justify-between text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
      <div className="transition-colors duration-200 hover:text-white">{totalContributions} contributions in {new Date().getFullYear()}</div>
      <div className="flex items-center gap-2">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-800 transition-all duration-200 hover:scale-110"></div>
          <div className="w-3 h-3 rounded-sm bg-green-900 transition-all duration-200 hover:scale-110"></div>
          <div className="w-3 h-3 rounded-sm bg-green-700 transition-all duration-200 hover:scale-110"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500 transition-all duration-200 hover:scale-110"></div>
          <div className="w-3 h-3 rounded-sm bg-green-400 transition-all duration-200 hover:scale-110"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  )
}
