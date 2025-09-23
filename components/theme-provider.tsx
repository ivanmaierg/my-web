"use client"
import { useTheme } from "next-themes"

export function ThemeProvider({
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
  children,
}) {
  const { theme, setTheme } = useTheme({
    attribute,
    defaultTheme,
    enableSystem,
    disableTransitionOnChange,
  })

  return <div className={theme}>{children}</div>
}
