"use client";

import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

import { Container, Main } from "@/styles/styles";

export default function Page() {
  return (
    <Container>
      <Header />
      <Main>
        <About id="about" />
      </Main>
      <Footer />
    </Container>
  );
}
