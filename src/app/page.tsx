"use client";

import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

import { Container, Content } from "@/styles/styles";

export default function Page() {
  return (
    <Container>
      <Content>
        <About id="about" />
      </Content>

      <Footer />
    </Container>
  );
}
