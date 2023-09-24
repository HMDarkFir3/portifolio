'use client';

import { useWindowScroll } from '@/hooks/useWindowScroll';

import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';

import { HEADER_HEIGHT } from '@/utils/constants';

import { Container, Main } from '@/styles/styles';

export default function Page() {
  const { isScrolled } = useWindowScroll(HEADER_HEIGHT);

  return (
    <Container>
      <Header isScrolled={isScrolled} />
      <Main>
        <About id="about" />
        <About id="experience" />
        {/* <Experience id="experience" /> */}
      </Main>
      <Footer />
    </Container>
  );
}
