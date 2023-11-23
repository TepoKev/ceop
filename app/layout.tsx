import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Centro de Estudios de Opinión Pública - CEOP',
  description: '¡Descubre el CEOP! Este centro destaca por investigar y entender las opiniones de la sociedad salvadoreña en educación, economía, agricultura y política. Su enfoque participativo integra investigación, docencia y proyección social para formar integralmente a la comunidad educativa. Establece mecanismos sólidos de comunicación para generar información y buscar soluciones a las problemáticas identificadas. ¡Únete a construir el futuro de tu comunidad con el CEOP!',
  icons:{
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
