import React from 'react'
import Link from 'next/link'

interface ErrorMessageProps {
    message: string
    action?: {
        href: string
        label: string
    }
}

/**
 * A component for displaying error messages
 */
export function ErrorMessage({ message, action }: ErrorMessageProps) {
    return (
        <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-red-600 mb-4">{message}</h2>
            {action && (
                <Link
                    href={action.href}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {action.label}
                </Link>
            )}
        </div>
    )
}
