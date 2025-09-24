import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ivan Maier Gallardo - Frontend Engineer | React & TypeScript Specialist",
  description: "Frontend Engineer with 4+ years of experience building scalable web applications. Currently at MercadoLibre, specializing in React, TypeScript, microfrontends, and developer tooling. Based in Buenos Aires, Argentina.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon-32x32.png",
  },
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Microfrontends",
    "MercadoLibre",
    "Buenos Aires",
    "Argentina",
    "Software Engineer",
    "Web Development",
    "Developer Experience",
    "Performance Optimization"
  ],
  authors: [{ name: "Ivan Maier Gallardo" }],
  creator: "Ivan Maier Gallardo",
  publisher: "Ivan Maier Gallardo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ivanmaierg.dev",
    title: "Ivan Maier Gallardo - Frontend Engineer",
    description: "Frontend Engineer with 4+ years of experience building scalable web applications. Currently at MercadoLibre, specializing in React, TypeScript, and microfrontends.",
    siteName: "Ivan Maier Gallardo Portfolio",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Ivan Maier Gallardo - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Maier Gallardo - Frontend Engineer",
    description: "Frontend Engineer with 4+ years of experience building scalable web applications. Currently at MercadoLibre.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "https://ivanmaierg.dev",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-momentum" style={{ backgroundColor: '#0c1116' }}>
      <body 
        className={`${jetbrainsMono.className} antialiased scroll-smooth scroll-optimized`} 
        style={{ backgroundColor: '#0c1116' }}
      >
        {children}
      </body>
    </html>
  )
}
