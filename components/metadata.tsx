import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://ivanmaierg.dev'),
  title: "Ivan Maier Gallardo - Software Engineer | React & TypeScript",
  description: "Full-stack Software Engineer (frontend lean) with 4+ years of experience. Building systems that scale. Currently at Nauto working on web apps for AI and real-time systems.",
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
    "Nauto",
    "MercadoLibre",
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
    description: "Full-stack Software Engineer (frontend lean) with 4+ years of experience. Building systems that scale. Currently at Nauto.",
    siteName: "Ivan Maier Gallardo Portfolio",
    images: [
      {
        url: "/api/og?caption=Software%20Engineer%20%7C%20React%20%2B%20TypeScript",
        width: 1200,
        height: 630,
        alt: "Ivan Maier Gallardo - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Maier Gallardo - Software Engineer | React & TypeScript",
    description: "Full-stack Software Engineer (frontend lean) with 4+ years of experience. Building systems that scale. Currently at Nauto.",
    images: [
      "/api/og?caption=Software%20Engineer%20%7C%20React%20%2B%20TypeScript",
    ],
    creator: "@ivanmaierg",
  },
  alternates: {
    canonical: "https://ivanmaierg.dev",
  },
  category: "technology",
}
