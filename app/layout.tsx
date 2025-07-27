import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Curran Advani - Product-focused Information Science Professional',
  description: 'Product-focused Information Science senior with experience in AI-driven products and entrepreneurship. Based in San Jose, CA.',
  keywords: 'Curran Advani, Information Science, Product Development, AI, Entrepreneurship, UC Santa Cruz',
  authors: [{ name: 'Curran Advani' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 