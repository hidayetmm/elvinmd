import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Elvin Hasanli — Neurologist',
  description: 'Board-certified neurologist specializing in headache disorders, epilepsy, and neurodegenerative diseases. Compassionate, evidence-based neurological care.',
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
