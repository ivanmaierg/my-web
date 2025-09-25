export const LayoutHead = () => {
  return (
    <>
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
      
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
      <style dangerouslySetInnerHTML={{
        __html: `
          :root{--background:0 0% 100%;--foreground:222.2 84% 4.9%;--muted-foreground:215.4 16.3% 46.9%;--border:214.3 31.8% 91.4%;--radius:0.75rem;--contribution-0:240 5% 95%;--contribution-1:214 95% 85%;--contribution-2:214 95% 75%;--contribution-3:214 95% 65%;--contribution-4:214 95% 55%}
          .dark{--background:210 29.41% 6.67%;--foreground:210 40% 98%;--muted-foreground:215 20.2% 65.1%;--border:217.2 32.6% 17.5%;--contribution-0:215 27.91% 16.86%;--contribution-1:142 76% 26%;--contribution-2:142 76% 36%;--contribution-3:142 76% 46%;--contribution-4:142 76% 56%}
          html{scroll-behavior:smooth;scroll-padding-top:2rem;background-color:hsl(var(--background));min-height:100vh}
          body{color:hsl(var(--foreground));scroll-behavior:smooth;-webkit-overflow-scrolling:touch;background-color:hsl(var(--background));min-height:100vh}
          @media (prefers-reduced-motion:no-preference){html,body{scroll-behavior:smooth;scroll-snap-type:y proximity}}
          @media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
          /* Critical Tailwind base styles */
          *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
          html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}
          body{margin:0;line-height:inherit}
          h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
          a{color:inherit;text-decoration:inherit}
          b,strong{font-weight:bolder}
          code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,"SF Mono",Consolas,"Liberation Mono",Menlo,monospace;font-feature-settings:normal;font-variation-settings:normal}
          small{font-size:80%}
          sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
          sub{bottom:-.25em}sup{top:-.5em}
          table{text-indent:0;border-color:inherit;border-collapse:collapse}
          button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}
          button,select{text-transform:none}
          button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}
          :-moz-focusring{outline:auto}
          :-moz-ui-invalid{box-shadow:none}
          progress{vertical-align:baseline}
          ::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}
          [type=search]{-webkit-appearance:textfield;outline-offset:-2px}
          ::-webkit-search-decoration{-webkit-appearance:none}
          ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
          summary{display:list-item}
          blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}
          fieldset{margin:0;padding:0}
          legend{padding:0}
          ol,ul,menu{list-style:none;margin:0;padding:0}
          dialog{padding:0}
          textarea{resize:vertical}
          input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}
          button,[role=button]{cursor:pointer}
          disabled{cursor:default}
          img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}
          img,video{max-width:100%;height:auto}
          [hidden]{display:none}
        `
      }} />
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
