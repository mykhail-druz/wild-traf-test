import { ImageResponse } from 'next/og'
 
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: '20px' }}>
          Wild Traff Blog
        </div>
        <div style={{ fontSize: 32, color: '#666' }}>
          A simple blog built with Next.js and Firebase
        </div>
      </div>
    ),
    size,
  )
}