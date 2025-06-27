import React from 'react';
import { Post } from '@/types/post';

interface PostContentProps {
  post: Post;
}

/**
 * A component for displaying the full content of a post
 */
export function PostContent({ post }: PostContentProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {post.title}
        </h1>
        <p className="text-gray-500">
          Published on {post.createdAt.toLocaleDateString()}
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
          {post.content}
        </div>
      </div>
    </article>
  );
}