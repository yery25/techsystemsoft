import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Techsystem Soft | El Código Que Impulsa',
  description: 'Tecsystemsof is a premium software engineering agency specializing in high-performance management platforms, POS systems, and bespoke AI integrations that scale businesses.',
  keywords: ['Techsystem Soft', 'Tecsystemsof', 'Software Agency', 'Salon Management', 'POS Systems', 'AI Integrations', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Techsystem Soft' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
