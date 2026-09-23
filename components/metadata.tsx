import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://ivanmaierg.dev'),
  title: "Ivan Maier Gallardo - Senior Software Engineer | Product Engineering",
  description: "Senior Software Engineer at Empiric Earth. 5 years building B2B products with TypeScript, React, and Node.js. Previously Mercado Libre. Based in Buenos Aires.",
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
    "Product Engineer",
    "Full-stack Engineer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Microfrontends",
    "Tailwind",
    "React Query",
    "Empiric Earth",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "AI-assisted development",
    "Mercado Libre",
    "Fleet Safety",
    "AI Startup",
    "Buenos Aires",
    "Argentina",
    "Senior Software Engineer",
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
    title: "Ivan Maier Gallardo - Senior Software Engineer | Product Engineering",
    description: "Senior Software Engineer at Empiric Earth. 5 years building B2B products with TypeScript, React, and Node.js. Previously Mercado Libre. Based in Buenos Aires.",
    siteName: "Ivan Maier Gallardo Portfolio",
    images: [
      {
        url: "/api/og?caption=Building%20products%20for%201%2C000%2B%20fleets&v=3",
        width: 1200,
        height: 630,
        alt: "Ivan Maier Gallardo - Senior Software Engineer at Empiric Earth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Maier Gallardo - Senior Software Engineer | Product Engineering",
    description: "Senior Software Engineer at Empiric Earth. 5 years building B2B products with TypeScript, React, and Node.js. Previously Mercado Libre. Based in Buenos Aires.",
    images: [
      "/api/og?caption=Building%20products%20for%201%2C000%2B%20fleets&v=3",
    ],
    creator: "@ivanmaierg",
  },
  alternates: {
    canonical: "https://ivanmaierg.dev",
    types: { "text/markdown": "https://ivanmaierg.dev/page.md" },
  },
  category: "technology",
}
