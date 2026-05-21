import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const cardgitArial = localFont({
  src: '../public/Arial.ttf',
  variable: '--font-cardgit-arial',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: {
    default: 'CardGit | Interactive Identity for Modern Networking',
    template: '%s | CardGit',
  },
  description: 'Create interactive digital business cards for professionals, teams, and businesses. Share contacts, showcase services, book appointments, and track engagement from one CardGit profile.',
  applicationName: 'cardgit-website',
  generator: 'cardgit-website',
  keywords: [
    'CardGit',
    'digital business card',
    'interactive business card',
    'networking',
    'team digital cards',
    'business profile',
  ],
  authors: [{ name: 'CardGit' }],
  creator: 'CardGit',
  publisher: 'CardGit',
  openGraph: {
    title: 'CardGit | Interactive Identity for Modern Networking',
    description: 'Create interactive digital business cards that help people remember you, contact you instantly, and follow up.',
    siteName: 'CardGit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CardGit | Interactive Identity for Modern Networking',
    description: 'Create interactive digital business cards for professionals, teams, and businesses.',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cardgitArial.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className={`${cardgitArial.className} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
