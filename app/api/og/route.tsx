import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const caption = searchParams.get('caption') || ''

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
          
          <div
            style={{
              fontSize: 20,
              color: '#9ca3af',
              marginBottom: '48px',
              lineHeight: 1.6,
            }}
          >
            React - TypeScript - JavaScript - Next.js - Node.js
          </div>

          {caption && (
            <div
              style={{
                fontSize: 28,
                color: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '16px 24px',
                borderRadius: 8,
                marginBottom: '40px',
                maxWidth: '950px',
                whiteSpace: 'pre-wrap',
              }}
            >
              {caption}
            </div>
          )}
          
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
        'Cache-Control': 'public, max-age=31536000, immutable',
        'CDN-Cache-Control': 'max-age=31536000',
        'Vercel-CDN-Cache-Control': 'max-age=31536000',
      },
    }
  )
}
