import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
    title: 'Wild Traff - Simple Blog',
    description:
        'A simple blog built with Next.js and Firebase for creating and sharing posts',
    keywords: ['blog', 'nextjs', 'firebase', 'react'],
    authors: [{ name: 'Wild Traff Team' }],
    openGraph: {
        title: 'Wild Traff - Simple Blog',
        description:
            'A simple blog built with Next.js and Firebase for creating and sharing posts',
        url: 'https://wild-traf-blog.example.com',
        siteName: 'Wild Traff Blog',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wild Traff - Simple Blog',
        description:
            'A simple blog built with Next.js and Firebase for creating and sharing posts',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <Toaster position="bottom-right" />
                {children}
            </body>
        </html>
    )
}
