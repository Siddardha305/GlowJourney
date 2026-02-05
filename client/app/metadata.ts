import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Glow Journey - Professional Makeup Artistry Platform",
  description: "Learn professional makeup artistry with Glow Journey. Master bridal, editorial, and daily makeup techniques.",
  keywords: "makeup, beauty, artistry, online courses, Glow Journey, bridal makeup, skincare",
  authors: [{ name: "Glow Journey" }],
  icons: {
    icon: [
      { url: '/images/anil-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/anil-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/anil-logo.png',
  },
  openGraph: {
    title: "Glow Journey - Professional Makeup Courses",
    description: "Learn professional makeup artistry with expert instructors",
    url: "https://glowjourney.in",
    siteName: "Glow Journey",
    images: [
      {
        url: '/images/anil-logo.png',
        width: 1200,
        height: 630,
        alt: 'Glow Journey Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Glow Journey - Professional Makeup Courses",
    description: "Learn professional makeup artistry with expert instructors",
    images: ['/images/anil-logo.png'],
  },
};
