import React from 'react';

/**
 * A skeleton loader component for post cards during loading state
 */
export function PostCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 animate-pulse">
      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      
      {/* Content skeleton - multiple lines */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
      
      {/* Date skeleton */}
      <div className="h-3 bg-gray-200 rounded w-1/3 mt-3"></div>
    </div>
  );
}