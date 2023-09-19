import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { Provider } from '@/components/Providers'

import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, 'antialiased min-h-screen pt-16')}>
        <Provider>
          <Navbar />
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}