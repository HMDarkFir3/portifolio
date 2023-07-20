"use client";

import type { Metadata } from "next";
import { ThemeProvider } from "styled-components";

import { NavbarProvider } from "@/contexts/NavbarContext";

import StyledComponentsRegistry from "@/lib/registry";

import { light } from "@/themes/light";

import { nunitoSans } from "@/styles/fonts";
import { GlobalStyle } from "@/styles/globals";

const metadata: Metadata = {
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
          <NavbarProvider>
            <ThemeProvider theme={light}>
              <GlobalStyle />

              {children}
            </ThemeProvider>
          </NavbarProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
