import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lummus Technology - Leading Process Technology Licensor',
  description: 'Lummus Technology is a leading licensor of proprietary petrochemicals, refining, and gas processing technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
