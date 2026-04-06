import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Balathanusan Jeyarasan | Freelance Softwareentwickler',
  description: 'Freelance Softwareentwickler in der Schweiz — Webentwicklung, Mobile Apps, UI/UX Design und mehr.',
  keywords: 'Balathanusan Jeyarasan, Freelance, Softwareentwickler, Webentwicklung, Schweiz',
  authors: [{ name: 'Balathanusan Jeyarasan' }],
  openGraph: {
    locale: 'de',
    siteName: 'Balathanusan Jeyarasan | Freelance Softwareentwickler',
    url: 'https://balathanusan.github.io/',
    title: 'Balathanusan Jeyarasan | Freelance Softwareentwickler',
    description: 'Freelance Softwareentwickler in der Schweiz — Webentwicklung, Mobile Apps, UI/UX Design und mehr.',
    images: [
      {
        url: 'https://balathanusan.github.io/assets/cover.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://balathanusan.github.io/',
    title: 'Balathanusan Jeyarasan | Freelance Softwareentwickler',
    description: 'Freelance Softwareentwickler in der Schweiz — Webentwicklung, Mobile Apps, UI/UX Design und mehr.',
    images: ['https://balathanusan.github.io/assets/cover.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link type="image/x-icon" rel="shortcut icon" href="/assets/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-123857994-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P9TRY4Q37Z');
          `}
        </Script>
      </body>
    </html>
  )
}

