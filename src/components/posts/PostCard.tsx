import React from 'react';
import Link from 'next/link';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

/**
 * A component for displaying a post preview card
 */
export function PostCard({ post }: PostCardProps) {
  const truncatedContent = post.content.length > 200
    ? `${post.content.substring(0, 200)}...`
    : post.content;

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <Link href={`/post/${post.id}`}>
        <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer mb-2">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 mb-3">
        {truncatedContent}
      </p>
      <p className="text-sm text-gray-500">
        Published on {post.createdAt.toLocaleDateString()}
      </p>
    </div>
  );
}