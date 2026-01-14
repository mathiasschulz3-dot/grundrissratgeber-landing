import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrundrissRatgeber.de - Dein Traumhaus. Digital geplant. Real gebaut.',
  description: 'Plane dein Traumhaus mit unserem interaktiven 2D/3D Hausplaner. Küchen-/Möbel-Katalog und Bauträger-Vermittlung - alles an einem Ort.',
  keywords: 'Hausplanung, Grundriss, 3D Planer, Küchen, Möbel, Bauträger, Musterhaus',
  authors: [{ name: 'GrundrissRatgeber.de' }],
  openGraph: {
    title: 'GrundrissRatgeber.de - Dein Traumhaus. Digital geplant. Real gebaut.',
    description: 'Plane dein Traumhaus mit unserem interaktiven 2D/3D Hausplaner',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
