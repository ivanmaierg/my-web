import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://ivanmaierg.dev'),
  title: "Ivan Maier Gallardo - Frontend Engineer | React & TypeScript Specialist",
  description: "Ivan Maier Gallardo is a Frontend Engineer with 4+ years of experience building scalable web applications. Currently at MercadoLibre, specializing in React, TypeScript, microfrontends, and developer tooling. Based in Buenos Aires, Argentina.",
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
    title: "Ivan Maier Gallardo - Frontend Engineer | React & TypeScript Specialist",
    description: "Ivan Maier Gallardo is a Frontend Engineer with 4+ years of experience building scalable web applications. Currently at MercadoLibre, specializing in React, TypeScript, and microfrontends.",
    siteName: "Ivan Maier Gallardo Portfolio",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Ivan Maier Gallardo - Frontend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Maier Gallardo - Frontend Engineer | React & TypeScript Specialist",
    description: "Ivan Maier Gallardo is a Frontend Engineer with 4+ years of experience building scalable web applications. Currently at MercadoLibre.",
    images: ["/api/og"],
    creator: "@ivanmaierg",
  },
  alternates: {
    canonical: "https://ivanmaierg.dev",
  },
  category: "technology",
}
