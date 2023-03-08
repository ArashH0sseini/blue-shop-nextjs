import '../styles/globals.css'
import React from 'react'
import { Providers } from './provider'

export const metadata = {
  title: 'Blue Shop',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
