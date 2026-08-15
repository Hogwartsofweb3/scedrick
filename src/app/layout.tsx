import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'A Gift of Faith & Truth | Jonathan & Charisma',
  description: 'A curated collection of Christian resources gifted at the wedding of Jonathan Fredrick & Charisma Standley.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A2744',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        className="antialiased bg-[#FAF9F6] text-[#1A202C]"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
