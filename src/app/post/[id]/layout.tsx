import { Metadata } from 'next'
import { getPostById } from '@/lib/posts'
import React from 'react'

type Props = {
    params: Promise<{ id: string }>
    children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // Await params before destructuring
    const { id } = await params
    const post = await getPostById(id)

    if (!post) {
        return {
            title: 'Post Not Found - Wild Traff Blog',
            description: 'The requested post could not be found.',
        }
    }

    // Create a description from the first 160 characters of content
    const description =
        post.content.length > 160
            ? `${post.content.substring(0, 157)}...`
            : post.content

    return {
        title: `${post.title} - Wild Traff Blog`,
        description,
        openGraph: {
            title: post.title,
            description,
            type: 'article',
            publishedTime: post.createdAt.toISOString(),
        },
    }
}

export default function PostLayout({ children }: Props) {
    return children
}
