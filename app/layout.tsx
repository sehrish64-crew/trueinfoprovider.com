import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://trueinfoprovider.com'),
  title: 'True Info Provider - AI Health Analysis',
  description:
    'AI-powered health analysis system. Get instant full AI reports with intelligent damage detection, condition scoring, and repair insights.',
  openGraph: {
    title: 'True Info Provider - AI Health Analysis',
    description:
      'AI-powered health analysis with intelligent damage detection and condition scoring.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-foreground antialiased font-sans" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}