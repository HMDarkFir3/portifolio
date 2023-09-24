'use client';

import { useState, useEffect } from 'react';

import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

import { HEADER_HEIGHT } from '@/utils/constants';

import { Container, Main } from '@/styles/styles';

export default function Page() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onWindowScroll = () => {
      const isScrollAtTop = window.scrollY < HEADER_HEIGHT;

      setIsScrolled(!isScrollAtTop);
    };

    window.addEventListener('scroll', onWindowScroll);

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  return (
    <Container>
      <Header isScrolled={isScrolled} />
      <Main>
        <About id="about" />
        <About id="experience" />
        <About id="projects" />
        <About id="contact" />
      </Main>
      <Footer />
    </Container>
  );
}
