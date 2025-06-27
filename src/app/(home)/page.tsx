'use client'

import Link from 'next/link'
import { PageContainer } from '@/components/layout/PageContainer'
import { ErrorMessage } from '@/components/ui/ErrorMessage'
import { PostCard } from '@/components/posts/PostCard'
import { PostCardSkeleton } from '@/components/posts/PostCardSkeleton'
import { usePosts } from '@/hooks/usePosts'

export default function HomePage() {
    const { posts, loading, error } = usePosts()

    if (loading) {
        return (
            <PageContainer>
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Simple Blog
                    </h1>
                    <div className="bg-gray-200 h-10 w-32 rounded-lg animate-pulse"></div>
                </div>
                <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                        <PostCardSkeleton key={index} />
                    ))}
                </div>
            </PageContainer>
        )
    }

    if (error) {
        return (
            <PageContainer>
                <ErrorMessage
                    message={error}
                    action={{
                        href: '/add-post',
                        label: 'Try creating a post instead',
                    }}
                />
            </PageContainer>
        )
    }

    return (
        <PageContainer>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Simple Blog
                </h1>
                <Link
                    href="/add-post"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Add New Post
                </Link>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">
                        No posts yet. Create your first post!
                    </p>
                    <Link
                        href="/add-post"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Create First Post
                    </Link>
                </div>
            ) : (
                <div className="space-y-6">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </PageContainer>
    )
}
