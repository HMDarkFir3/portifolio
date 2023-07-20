"use client";

import { About } from "@/components/About";

import { Container, Content, AboutWrapper } from "@/styles/styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <About id="about" />
      </Content>
    </Container>
  );
}
