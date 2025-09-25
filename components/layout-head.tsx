export const LayoutHead = () => {
  return (
    <>
      <meta httpEquiv="Content-Language" content="en" />
      {/* Removed unnecessary dns-prefetch and favicon preload to avoid render-blocking and warnings */}
      
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="geo.region" content="AR-C" />
      <meta name="geo.placename" content="Buenos Aires" />
      <meta name="geo.position" content="-34.6037;-58.3816" />
      <meta name="ICBM" content="-34.6037, -58.3816" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      {/* Removed duplicated critical CSS. Tailwind base and variables are already in app/globals.css */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ivan Maier Gallardo",
            "alternateName": ["Ivan Maier", "Ivan Gallardo"],
            "jobTitle": "Frontend Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "MercadoLibre"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Buenos Aires",
              "addressCountry": "Argentina"
            },
            "email": "ivanmaiergallardo@gmail.com",
            "url": "https://ivanmaierg.dev",
            "sameAs": [
              "https://github.com/ivanmaierg",
              "https://linkedin.com/in/ivanmaiergallardo"
            ],
            "knowsAbout": [
              "React",
              "TypeScript",
              "JavaScript",
              "Next.js",
              "Microfrontends",
              "Web Development",
              "Frontend Engineering",
              "Performance Optimization"
            ],
            "description": "Frontend Engineer with 4+ years of experience building scalable web applications. Currently at MercadoLibre, specializing in React, TypeScript, microfrontends, and developer tooling.",
            "image": "https://ivanmaierg.dev/api/og"
          })
        }}
      />
    </>
  )
}
