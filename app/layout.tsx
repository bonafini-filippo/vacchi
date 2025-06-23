import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import { LoadingScreen } from '@/components/LoadingScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marco Vacchi - Full-Stack Developer',
  description:
    'Portfolio of Marco Vacchi, a junior full-stack developer passionate about creating innovative web applications with React, Node.js, and modern technologies.',
  keywords: [
    'Marco Vacchi',
    'Full-Stack Developer',
    'React',
    'Node.js',
    'JavaScript',
    'Web Development',
    'Portfolio',
  ],
  authors: [{ name: 'Marco Vacchi' }],
  openGraph: {
    title: 'Marco Vacchi - Full-Stack Developer',
    description:
      'Portfolio of Marco Vacchi, a junior full-stack developer passionate about creating innovative web applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marco Vacchi - Full-Stack Developer',
    description:
      'Portfolio of Marco Vacchi, a junior full-stack developer passionate about creating innovative web applications.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden`}
      >
        <LoadingScreen />
        <CustomCursor />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
