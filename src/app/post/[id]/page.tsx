'use client'

import { useParams } from 'next/navigation'
import { PageContainer } from '@/components/layout/PageContainer'
import { BackLink } from '@/components/layout/BackLink'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ErrorMessage } from '@/components/ui/ErrorMessage'
import { PostContent } from '@/components/posts/PostContent'
import { usePost } from '@/hooks/usePost'

export default function PostDetailPage() {
    const params = useParams()
    const id = params.id as string
    const { post, loading, error } = usePost(id)

    if (loading) {
        return (
            <PageContainer>
                <LoadingSpinner message="Loading post..." />
            </PageContainer>
        )
    }

    if (error || !post) {
        return (
            <PageContainer>
                <ErrorMessage
                    message={error || 'Post not found'}
                    action={{
                        href: '/',
                        label: 'Back to Home',
                    }}
                />
            </PageContainer>
        )
    }

    return (
        <PageContainer>
            <BackLink href="/" label="Back to Posts" />
            <PostContent post={post} />
        </PageContainer>
    )
}
