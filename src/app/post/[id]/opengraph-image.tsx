import { ImageResponse } from 'next/og'
import { getPostById } from '@/lib/posts'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string } }) {
  // Destructure and use the id directly
  const { id } = params
  const post = await getPostById(id)

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
          {post?.title || 'Post not found'}
        </div>
        <div style={{ fontSize: 32, color: '#666' }}>
          Wild Traff Blog
        </div>
      </div>
    ),
    size,
  )
}
