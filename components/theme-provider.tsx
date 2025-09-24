"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ComponentProps } from "react"

interface ThemeProviderProps extends ComponentProps<typeof NextThemesProvider> {
  children: React.ReactNode
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
