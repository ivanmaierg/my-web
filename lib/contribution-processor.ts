import { ContributionDay } from './github-api'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const processContributions = (contributions: ContributionDay[]) => {
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)

  const weeks: (ContributionDay | null)[][] = []
  let currentWeek: (ContributionDay | null)[] = []

  contributions.forEach((day, index) => {
    const date = new Date(day.date)
    const dayOfWeek = date.getDay()

    if (index === 0) {
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push(null)
      }
    }

    currentWeek.push(day)

    if (currentWeek.length === 7) {
      weeks.push([...currentWeek])
      currentWeek = []
    } else if (index === contributions.length - 1) {
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }
      weeks.push([...currentWeek])
    }
  })

  const monthLabels: string[] = weeks.map((week) => {
    const firstOfMonth = week.find((d) => d && new Date(d.date).getDate() === 1)
    if (!firstOfMonth) return ""
    const m = new Date(firstOfMonth.date).getMonth()
    return months[m]
  })

  return {
    weeks,
    monthLabels,
    totalContributions
  }
}
