import { JetBrains_Mono } from "next/font/google"
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from "@/components/theme-provider"
import { LayoutHead } from "@/components/layout-head"
import { metadata } from "@/components/metadata"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
  preload: true,
})

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-momentum" suppressHydrationWarning>
      <head>
        <LayoutHead />
      </head>
      <body
        className={`${jetbrainsMono.className} antialiased scroll-smooth scroll-optimized bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
          >
            Skip to main content
          </a>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
