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
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />

          <main className="px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
