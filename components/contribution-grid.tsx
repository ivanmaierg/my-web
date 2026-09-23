"use client"

import { type KeyboardEvent, useId, useRef, useState } from "react"
import { cn } from "@/lib/utils"

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
  const days = weeks.flat().filter((day): day is ContributionDay => day !== null)
  const [selectedDate, setSelectedDate] = useState(days[days.length - 1]?.date)
  const selectedDay = days.find(day => day.date === selectedDate)
  const gridRef = useRef<HTMLDivElement>(null)
  const instructionsId = useId()

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, date: string) => {
    const index = days.findIndex(day => day.date === date)
    const offsets: Record<string, number> = { ArrowLeft: -7, ArrowRight: 7, ArrowUp: -1, ArrowDown: 1 }
    let nextIndex: number

    if (event.key === "Home") nextIndex = 0
    else if (event.key === "End") nextIndex = days.length - 1
    else if (event.key in offsets) nextIndex = Math.max(0, Math.min(days.length - 1, index + offsets[event.key]))
    else return

    event.preventDefault()
    gridRef.current?.querySelector<HTMLButtonElement>(`[data-date="${days[nextIndex].date}"]`)?.focus()
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        <div aria-hidden="true" className="w-8 flex flex-col gap-1 pt-1 text-xs text-muted-foreground flex-shrink-0">
          <div className="h-6 mobile:h-3"></div>
          <div className="h-6 mobile:h-3">Mon</div>
          <div className="h-6 mobile:h-3"></div>
          <div className="h-6 mobile:h-3">Wed</div>
          <div className="h-6 mobile:h-3"></div>
          <div className="h-6 mobile:h-3">Fri</div>
          <div className="h-6 mobile:h-3"></div>
        </div>

        <div ref={gridRef} role="group" aria-label="Daily GitHub contributions" aria-describedby={instructionsId} className="overflow-x-auto scroll-right-initial p-1">
          <div className="min-w-max scroll-right-content">
            <div aria-hidden="true" className="flex items-start gap-1 text-xs text-muted-foreground mb-2">
              <div className="flex gap-1">
                {monthLabels.map((label, i) => (
                  <div key={`ml-${i}`} className="w-6 mobile:w-3 text-center flex-shrink-0">
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-1 min-w-max">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex + 1} className="flex flex-col gap-1 flex-shrink-0">
                  {week.map((day, dayIndex) => (
                    day ? (
                      <button
                        key={day.date}
                        type="button"
                        data-date={day.date}
                        aria-label={`${day.count} contributions on ${day.date}`}
                        aria-pressed={day.date === selectedDate}
                        tabIndex={day.date === selectedDate ? 0 : -1}
                        onFocus={() => setSelectedDate(day.date)}
                        onClick={() => setSelectedDate(day.date)}
                        onKeyDown={event => handleKeyDown(event, day.date)}
                        className={cn("w-6 h-6 mobile:w-3 mobile:h-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground", getContributionColor(day.level))}
                      />
                    ) : <div key={`empty-${dayIndex}`} className="w-6 h-6 mobile:w-3 mobile:h-3" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p data-contribution-details aria-live="polite" aria-atomic="true" className="text-xs text-muted-foreground tabular-nums">
        {selectedDay ? `${selectedDay.count} contributions on ${selectedDay.date}` : "No contribution data available."}
      </p>
      <p id={instructionsId} className="text-xs text-muted-foreground">
        Select a day for details. Use arrow keys to browse, or Home and End to jump.
      </p>
    </div>
  )
}
