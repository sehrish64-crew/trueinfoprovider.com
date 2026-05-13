import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://trueinfoprovider.co'),
  title: 'True Info Provider - AI Health Analysis',
  description: 'AI-powered health analysis system. Get instant full AI reports with intelligent damage detection, condition scoring, and repair insights.',
  openGraph: {
    title: 'True Info Provider - AI Health Analysis',
    description: 'AI-powered health analysis with intelligent damage detection and condition scoring.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-foreground antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
