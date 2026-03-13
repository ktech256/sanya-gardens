import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { PageTransition } from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Sanya Gardens',
  description:
    'Outdoor activities, nature experiences, and group-friendly programs at Sanya Gardens.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/apple-touch-icon.png' }]
  },
  openGraph: {
    title: 'Sanya Gardens',
    description: 'Outdoor activities and memorable nature experiences for families, schools, and groups.',
    url: 'https://www.sanyagardens.co.ug',
    siteName: 'Sanya Gardens',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-8">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
