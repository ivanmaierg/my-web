import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0c1116',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {/* Main Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '24px',
              letterSpacing: '-0.01em',
            }}
          >
            ivan
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 28,
              color: '#9ca3af',
              marginBottom: '48px',
              fontWeight: '400',
            }}
          >
            Frontend Engineer
          </div>
          
          {/* Skills - Simple list */}
          <div
            style={{
              fontSize: 20,
              color: '#9ca3af',
              marginBottom: '48px',
              lineHeight: 1.6,
            }}
          >
            React - TypeScript - JavaScript - Next.js - Node.js - Redux
          </div>
          
          {/* Location & Company */}
          <div
            style={{
              fontSize: 18,
              color: '#6b7280',
              display: 'flex',
              flexDirection: 'row',
              gap: '48px',
            }}
          >
            <span>Buenos Aires, Argentina</span>
            <span>MercadoLibre</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for 1 year
        'CDN-Cache-Control': 'max-age=31536000',
        'Vercel-CDN-Cache-Control': 'max-age=31536000',
      },
    }
  )
}
