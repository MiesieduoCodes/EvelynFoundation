import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer";
import { SkipToContent } from "@/components/skip-to-content"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Evelyn Oweibo Foundation - Caring for the Elderly",
    template: "%s | Evelyn Oweibo Foundation"
  },
  description: "Supporting elderly care and wellbeing through community initiatives and compassionate services in Nigeria.",
  keywords: [
    "elderly care",
    "senior support",
    "Nigeria elderly",
    "geriatric care",
    "Evelyn Oweibo",
    "nonprofit",
    "aged care foundation"
  ],
  generator: 'Next.js',
  applicationName: "Evelyn Oweibo Foundation",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Evelyn Oweibo Foundation", url: "https://evelynoweibofoundation.org" }],
  creator: "Evelyn Oweibo Foundation",
  publisher: "Evelyn Oweibo Foundation",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://evelynoweibofoundation.org'),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Evelyn Oweibo Foundation",
    description: "Compassionate elderly care services and community support",
    url: "https://evelynoweibofoundation.org",
    siteName: "Evelyn Oweibo Foundation",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Evelyn Oweibo Foundation - Caring for Elders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evelyn Oweibo Foundation",
    description: "Compassionate elderly care services and community support",
    creator: "@EvelynOweiboFdn",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      new URL('/favicon.ico', 'https://evelynoweibofoundation.org'),
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
 
  }

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Bayelsa State" />
        <meta name="geo.position" content="4.9261;6.2677" />
        <meta name="ICBM" content="4.9261, 6.2677" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Evelyn Oweibo Foundation",
              "description": "Supporting elderly care and wellbeing through community initiatives",
              "url": "https://evelynoweibofoundation.org",
              "logo": "https://evelynoweibofoundation.org/logo.png",
              "sameAs": [
                "https://facebook.com/yourpage",
                "https://twitter.com/yourhandle"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SkipToContent />
          <div id="main-content" tabIndex={-1} className="flex flex-col min-h-screen">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}