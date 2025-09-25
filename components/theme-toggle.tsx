"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isPressed, setIsPressed] = React.useState(false)
  const [isRotating, setIsRotating] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50 border border-border bg-background shadow-sm hover:bg-muted-foreground/10 hover:text-foreground h-9 w-9 transition-all duration-150 ease-in-out fixed right-4 top-4 mobile:static mobile:right-auto mobile:top-auto`}
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  const handleToggle = () => {
    setIsPressed(true)
    setIsRotating(true)
    setTheme(theme === "light" ? "dark" : "light")
    
    setTimeout(() => {
      setIsPressed(false)
    }, 150)
    
    setTimeout(() => {
      setIsRotating(false)
    }, 300)
  }

  return (
    <button
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleToggle()
        }
      }}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50 border border-border bg-background shadow-sm hover:bg-muted-foreground/10 hover:text-foreground h-9 w-9 transition-all duration-150 ease-in-out ${
        isPressed ? "scale-95" : "scale-100"
      } ${isRotating ? "rotate-180" : ""} fixed right-4 top-4 mobile:static mobile:right-auto mobile:top-auto`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      tabIndex={0}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-transform duration-200 ease-in-out" />
      ) : (
        <Sun className="h-4 w-4 transition-transform duration-200 ease-in-out" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
