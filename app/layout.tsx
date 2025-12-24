import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Poppins, Inter } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Lummus Technology | Sustainable Energy Solutions',
  description: 'Global leader in technology solutions for sustainable energy and industrial transformation',
  metadataBase: new URL('https://lummustechnology.com'),
  openGraph: {
    title: 'Lummus Technology',
    description: 'Sustainable Energy Technology Solutions',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}