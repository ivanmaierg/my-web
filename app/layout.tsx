import { JetBrains_Mono } from "next/font/google"
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from "@/components/theme-provider"
import { LayoutHead } from "@/components/layout-head"
import { AIInstructions } from "@/components/ai-instructions"
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
          disableTransitionOnChange={true}
        >
          <AIInstructions />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
