"use client";

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";

import { Container, Content, AboutWrapper } from "@/styles/styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <About id="about" />

        <Experience id="experience" />
      </Content>
    </Container>
  );
}
