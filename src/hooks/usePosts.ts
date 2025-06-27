import { useState, useEffect } from 'react'
import { Post } from '@/types/post'
import { getAllPosts } from '@/lib/posts'

/**
 * Custom hook for fetching all posts
 * @returns Object containing posts, loading state, and error state
 */
export function usePosts() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchPosts() {
            try {
                const fetchedPosts = await getAllPosts()
                setPosts(fetchedPosts)
            } catch (err) {
                setError(
                    `Failed to load posts: ${err instanceof Error ? err.message : 'Unknown error'}`
                )
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return { posts, loading, error }
}
