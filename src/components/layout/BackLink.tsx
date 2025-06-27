import React from 'react'
import Link from 'next/link'

interface BackLinkProps {
    href: string
    label?: string
}

/**
 * A component for navigating back to a previous page
 */
export function BackLink({ href, label = 'Back' }: BackLinkProps) {
    return (
        <div className="mb-6">
            <Link
                href={href}
                className="text-blue-600 hover:text-blue-800 underline"
            >
                {label}
            </Link>
        </div>
    )
}
