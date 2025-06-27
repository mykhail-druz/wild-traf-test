import React, { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * A container component that provides consistent layout and styling for pages
 */
export function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className={`max-w-4xl mx-auto px-4 ${className}`}>
        {children}
      </div>
    </div>
  );
}