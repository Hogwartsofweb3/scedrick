import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "A Gift of Faith & Truth | Coming Soon",
  description: "Curated Christian resources, devotionals, and sermons. A gift for Jonathan's wedding celebration.",
  openGraph: {
    title: "A Gift of Faith & Truth | Coming Soon",
    description: "Curated Christian resources, devotionals, and sermons. A gift for Jonathan's wedding celebration.",
    url: "https://scedrick.vercel.app/",
    siteName: "A Gift of Faith & Truth",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A Gift of Faith & Truth - Coming Soon",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6", // warm cream color
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen bg-[#FAF9F6] text-[#1A202C] font-sans selection:bg-[#D4AF37] selection:text-white">
        {children}
      </body>
    </html>
  );
}
