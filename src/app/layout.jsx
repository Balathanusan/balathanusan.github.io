import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Balathanusan Jeyarasan | Portfolio',
  description: 'Discover the creative front-end development portfolio of Balathanusan Jeyarasan.',
  keywords: 'Balathanusan Jeyarasan, Portfolio',
  authors: [{ name: 'Balathanusan Jeyarasan' }],
  openGraph: {
    locale: 'en',
    siteName: 'Balathanusan Jeyarasan | Portfolio',
    url: 'https://balathanusan.github.io/',
    title: 'Balathanusan Jeyarasan | Portfolio',
    description: 'Discover the creative front-end development portfolio of Balathanusan Jeyarasan.',
    images: [
      {
        url: 'https://balathanusan.github.io/assets/cover.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://balathanusan.github.io/',
    title: 'Balathanusan Jeyarasan | Portfolio',
    description: 'Discover the creative front-end development portfolio of Balathanusan Jeyarasan.',
    images: ['https://balathanusan.github.io/assets/cover.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

