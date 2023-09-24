import type { Metadata } from 'next';

import { NavbarProvider } from '@/contexts/NavbarContext';

import { nunitoSans } from '@/styles/fonts';

import '@/styles/global.css';

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
        <NavbarProvider>{children}</NavbarProvider>
      </body>
    </html>
  );
}
