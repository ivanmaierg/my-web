"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const currentTheme = resolvedTheme ?? theme

  return (
    <button
      type="button"
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      data-theme-toggle
      className="theme-toggle inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground fixed z-10 mobile:static"
      aria-label="Toggle color theme"
    >
      <span className="inline-flex items-center justify-center" aria-hidden>
        <Sun
          className="h-4 w-4 inline dark:hidden"
          data-icon="sun"
        />
        <Moon
          className="h-4 w-4 hidden dark:inline"
          data-icon="moon"
        />
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
