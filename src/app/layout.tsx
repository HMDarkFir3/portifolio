"use client";

import type { Metadata } from "next";
import { ThemeProvider } from "styled-components";

import { MenuProvider } from "@/contexts/MenuContext";

import StyledComponentsRegistry from "@/lib/registry";

import { Navbar } from "@/components/Navbar";

import { light } from "@/themes/light";

import { nunitoSans } from "@/styles/fonts";
import { GlobalStyle } from "@/styles/globals";

export const metadata: Metadata = {
  title: "Henrique Marques - Front-End and Mobile Developer",
  description: "Personal Portfolio of Henrique Marques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <StyledComponentsRegistry>
          <MenuProvider>
            <ThemeProvider theme={light}>
              <GlobalStyle />

              <Navbar />

              {children}
            </ThemeProvider>
          </MenuProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
