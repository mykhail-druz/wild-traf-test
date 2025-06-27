import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  showMessage?: boolean;
}

/**
 * A minimalistic and symmetrical loading spinner component
 */
export function LoadingSpinner({ 
  message = 'Loading...', 
  size = 'medium',
  showMessage = true 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'h-4 w-4 border-2',
    medium: 'h-8 w-8 border-2',
    large: 'h-12 w-12 border-3'
  };

  return (
    <div className={`text-center ${showMessage ? 'py-8' : ''}`}>
      <div 
        className={`inline-block animate-spin rounded-full ${sizeClasses[size]} border-blue-600 border-t-transparent`}
        aria-hidden="true"
      ></div>
      {showMessage && <p className="text-gray-600 mt-2">{message}</p>}
    </div>
  );
}
