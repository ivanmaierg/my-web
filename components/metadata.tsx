import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://ivanmaierg.dev'),
  title: "Ivan Maier Gallardo - Software Engineer | React & TypeScript",
  description: "Software engineer, frontend-leaning full-stack. 4+ years building B2B platforms. Currently at Nauto (Series C, AI fleet safety) shipping the customer platform used across 500k+ drivers. Previously Mercado Libre.",
  other: {
    'Content-Language': 'en',
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon-32x32.png",
  },
  keywords: [
    "Ivan Maier Gallardo",
    "Ivan Maier",
    "Ivan Gallardo",
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Microfrontends",
    "Tailwind",
    "React Query",
    "Nauto",
    "Mercado Libre",
    "Fleet Safety",
    "AI Startup",
    "Buenos Aires",
    "Argentina",
    "Software Engineer",
    "Web Development",
    "Developer Experience",
    "Performance Optimization",
    "Portfolio",
    "Personal Website"
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
    title: "Ivan Maier Gallardo - Software Engineer | React & TypeScript",
    description: "Software engineer, frontend-leaning full-stack. 4+ years building B2B platforms. Currently at Nauto (AI fleet safety, 500k+ drivers). Previously Mercado Libre.",
    siteName: "Ivan Maier Gallardo Portfolio",
    images: [
      {
        url: "/api/og?caption=Shipping%20fleet%20safety%20at%20Nauto%20%C2%B7%20500k%2B%20drivers&v=2",
        width: 1200,
        height: 630,
        alt: "Ivan Maier Gallardo - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Maier Gallardo - Software Engineer | React & TypeScript",
    description: "Software engineer, frontend-leaning full-stack. 4+ years building B2B platforms. Currently at Nauto (AI fleet safety, 500k+ drivers). Previously Mercado Libre.",
    images: [
      "/api/og?caption=Shipping%20fleet%20safety%20at%20Nauto%20%C2%B7%20500k%2B%20drivers&v=2",
    ],
    creator: "@ivanmaierg",
  },
  alternates: {
    canonical: "https://ivanmaierg.dev",
  },
  category: "technology",
}
