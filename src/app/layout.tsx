import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { NavbarProvider } from '@/contexts/NavbarContext';

import { nunitoSans } from '@/styles/fonts';
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: 'Henrique Marques - Front-End and Mobile Developer',
  description: 'Personal Portfolio of Henrique Marques',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <NavbarProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </NavbarProvider>
      </body>
    </html>
  );
}
