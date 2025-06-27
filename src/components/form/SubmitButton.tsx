import React from 'react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

interface SubmitButtonProps {
  label: string;
  loadingLabel?: string;
  isSubmitting?: boolean;
  className?: string;
}

/**
 * A reusable submit button component with loading state and spinner
 */
export function SubmitButton({
  label,
  loadingLabel = 'Submitting...',
  isSubmitting = false,
  className = ''
}: SubmitButtonProps) {
  const baseClasses = 'px-6 py-2 rounded-lg text-white font-medium transition-colors flex items-center justify-center';
  const activeClasses = 'bg-blue-600 hover:bg-blue-700';
  const disabledClasses = 'bg-gray-400 cursor-not-allowed';

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`${baseClasses} ${isSubmitting ? disabledClasses : activeClasses} ${className}`}
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <LoadingSpinner size="small" showMessage={false} />
          <span className="ml-2">{loadingLabel}</span>
        </span>
      ) : (
        label
      )}
    </button>
  );
}
