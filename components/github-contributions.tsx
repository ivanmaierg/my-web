"use client"

import { useState, useEffect } from "react"

interface GitHubContributionsProps {
  username: string
}

// Generate mock contribution data for demonstration
const generateMockContributions = () => {
  const contributions = []
  const today = new Date()
  const startDate = new Date(today.getFullYear(), 0, 1) // January 1st of current year

  for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
    const level = Math.floor(Math.random() * 5) // 0-4 contribution levels
    contributions.push({
      date: new Date(d).toISOString().split("T")[0],
      count: level === 0 ? 0 : Math.floor(Math.random() * (level * 3)) + 1,
      level,
    })
  }

  return contributions
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function GitHubContributions({ username }: GitHubContributionsProps) {
  const [contributions] = useState(generateMockContributions())
  const [totalContributions, setTotalContributions] = useState(0)

  useEffect(() => {
    const total = contributions.reduce((sum, day) => sum + day.count, 0)
    setTotalContributions(total)
  }, [contributions])

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-gray-800"
      case 1:
        return "bg-green-900"
      case 2:
        return "bg-green-700"
      case 3:
        return "bg-green-500"
      case 4:
        return "bg-green-400"
      default:
        return "bg-gray-800"
    }
  }

  // Group contributions by weeks
  const weeks = []
  let currentWeek = []

  contributions.forEach((day, index) => {
    const date = new Date(day.date)
    const dayOfWeek = date.getDay()

    if (index === 0) {
      // Fill empty days at the start of the first week
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push(null)
      }
    }

    currentWeek.push(day)

    if (currentWeek.length === 7 || index === contributions.length - 1) {
      // Fill empty days at the end of the last week
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }
      weeks.push([...currentWeek])
      currentWeek = []
    }
  })

  return (
    <div className="space-y-4">
      {/* Month labels */}
      <div className="flex text-xs text-gray-500 ml-8">
        {months.slice(0, 8).map((month, index) => (
          <div key={month} className="w-10 text-center" style={{ marginLeft: index === 0 ? "0" : "32px" }}>
            {month}
          </div>
        ))}
      </div>

      {/* Contribution grid */}
      <div className="flex gap-1">
        {/* Day labels */}
        <div className="flex flex-col gap-1 text-xs text-gray-500 pr-2">
          <div className="h-3"></div>
          <div className="h-3">Mon</div>
          <div className="h-3"></div>
          <div className="h-3">Wed</div>
          <div className="h-3"></div>
          <div className="h-3">Fri</div>
          <div className="h-3"></div>
        </div>

        {/* Grid */}
        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm ${day ? getContributionColor(day.level) : "bg-transparent"}`}
                  title={day ? `${day.count} contributions on ${day.date}` : ""}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div>{totalContributions} activities in 2024</div>
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-gray-800"></div>
            <div className="w-3 h-3 rounded-sm bg-green-900"></div>
            <div className="w-3 h-3 rounded-sm bg-green-700"></div>
            <div className="w-3 h-3 rounded-sm bg-green-500"></div>
            <div className="w-3 h-3 rounded-sm bg-green-400"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
