"use client";

import { About } from "@/components/About";

import { Container, Content } from "@/styles/styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <About id="about" />
        <About id="experience" />
        <About id="projects" />
        <About id="contact" />
      </Content>
    </Container>
  );
}
