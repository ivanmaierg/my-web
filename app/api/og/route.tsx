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
          backgroundImage: 'linear-gradient(45deg, #0c1116 0%, #1a1a1a 100%)',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '20px',
              fontFamily: 'monospace',
            }}
          >
            Ivan Maier Gallardo
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 32,
              color: '#22c55e',
              marginBottom: '30px',
              fontFamily: 'monospace',
            }}
          >
            Frontend Engineer
          </div>
          
          {/* Skills */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              marginBottom: '30px',
            }}
          >
            {['React', 'TypeScript', 'Next.js', 'Node.js'].map((skill) => (
              <div
                key={skill}
                style={{
                  backgroundColor: '#1f2937',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontFamily: 'monospace',
                }}
              >
                {skill}
              </div>
            ))}
          </div>
          
          {/* Location & Company */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '40px',
              fontSize: '20px',
              color: '#9ca3af',
              fontFamily: 'monospace',
            }}
          >
            <span>📍 Buenos Aires, Argentina</span>
            <span>🏢 MercadoLibre</span>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '100px',
            height: '100px',
            backgroundColor: '#22c55e',
            borderRadius: '50%',
            opacity: '0.1',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '60px',
            height: '60px',
            backgroundColor: '#22c55e',
            borderRadius: '50%',
            opacity: '0.1',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
