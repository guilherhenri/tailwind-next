import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { Sidebar } from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'Tailwind Next',
  description: 'Tailwind Next App',
}

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="min-h-screen lg:grid lg:grid-cols-app">
          <Sidebar />

          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
