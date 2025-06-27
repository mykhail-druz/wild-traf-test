import React from 'react'
import Link from 'next/link'

interface BackLinkProps {
    href: string
    label?: string
    variant?: 'default' | 'minimal' | 'button'
    showIcon?: boolean
}

/**
 * A component for navigating back to a previous page
 */
export function BackLink({
    href,
    label = 'Back',
    variant = 'default',
    showIcon = true,
}: BackLinkProps) {
    const baseClasses =
        'inline-flex items-center gap-2 transition-all duration-200 font-medium'

    const variantClasses = {
        default: 'text-gray-600 hover:text-gray-900 hover:gap-3',
        minimal: 'text-blue-600 hover:text-blue-800 hover:gap-3',
        button: 'bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg border hover:border-gray-300',
    }

    const ArrowIcon = () => (
        <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
        </svg>
    )

    return (
        <div className="mb-6">
            <Link
                href={href}
                className={`${baseClasses} ${variantClasses[variant]} group`}
            >
                {showIcon && <ArrowIcon />}
                <span>{label}</span>
            </Link>
        </div>
    )
}
