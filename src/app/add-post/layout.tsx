import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create New Post - Wild Traff Blog',
  description: 'Create a new blog post with title and content.',
  openGraph: {
    title: 'Create New Post - Wild Traff Blog',
    description: 'Create a new blog post with title and content.',
    type: 'website',
  },
}

export default function AddPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}