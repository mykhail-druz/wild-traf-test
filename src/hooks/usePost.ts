import { useState, useEffect } from 'react';
import { Post } from '@/types/post';
import { getPostById } from '@/lib/posts';

/**
 * Custom hook for fetching a single post by ID
 * @param id The ID of the post to fetch
 * @returns Object containing post, loading state, and error state
 */
export function usePost(id: string) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!id) {
        setLoading(false);
        setError('Post ID is required');
        return;
      }

      try {
        const fetchedPost = await getPostById(id);
        setPost(fetchedPost);
        if (!fetchedPost) {
          setError('Post not found');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_err) {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  return { post, loading, error };
}
