import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { AdminShortcut } from '@/components/admin-shortcut'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
})

export const viewport: Viewport = {
  themeColor: '#FAFAFA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: "Yaak'art Studio | Œil pour œil",
    template: "%s | Yaak'art Studio"
  },
  description: "Studio de photographie artistique haut de gamme à Dakar. Mariage, Portrait, Mode, Événementiel. Capturer l'essence de chaque instant avec authenticité et élégance.",
  keywords: [
    "photographe Dakar",
    "photographie artistique",
    "studio photo Sénégal",
    "photographe mariage Dakar",
    "portrait professionnel",
    "photographie de mode",
    "photographe événementiel",
    "Yaak'art Studio",
    "Al Amine photographe"
  ],
  authors: [{ name: "Al Amine", url: "https://yaakart.com" }],
  creator: "Al Amine",
  publisher: "Yaak'art Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yaakart.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Yaak'art Studio | Œil pour œil",
    description: "Studio de photographie artistique haut de gamme. Capturer l'essence de chaque instant.",
    url: 'https://yaakart.com',
    siteName: "Yaak'art Studio",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Yaak'art Studio - Photographie Artistique",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yaak'art Studio | Œil pour œil",
    description: "Studio de photographie artistique haut de gamme à Dakar.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Yaak'art Studio",
  },
}

// JSON-LD Schema for Photography Studio
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PhotographyBusiness',
  name: "Yaak'art Studio",
  description: "Studio de photographie artistique haut de gamme à Dakar, Sénégal.",
  slogan: "Œil pour œil",
  url: 'https://yaakart.com',
  logo: 'https://yaakart.com/logo.png',
  image: 'https://yaakart.com/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dakar',
    addressCountry: 'SN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 14.6937,
    longitude: -17.4441,
  },
  priceRange: '$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/yaakart_studio',
    'https://www.tiktok.com/@yaakart_studio',
    'https://snapchat.com/t/ss7zvtm7',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Photography Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Photography',
          description: 'Capturer les moments magiques de votre mariage',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Portrait Photography',
          description: 'Portraits artistiques professionnels',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fashion Photography',
          description: 'Photographie de mode et éditoriale',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <AdminShortcut />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
