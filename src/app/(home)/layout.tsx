import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Wild Traff Blog',
  description: 'Browse all blog posts on Wild Traff Blog',
  openGraph: {
    title: 'Home - Wild Traff Blog',
    description: 'Browse all blog posts on Wild Traff Blog',
    type: 'website',
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}