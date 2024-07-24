import Head from 'next/head';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { NavbarProvider } from '@/contexts/NavbarContext';

import { nunitoSans } from '@/styles/fonts';
import '@/styles/global.scss';
import '@/styles/embla.css';

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
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </Head>

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
