'use client';

import { useState, useEffect } from 'react';

import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

import { Container, Main } from '@/styles/styles';

export default function Page() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const windowScroll = () => {
      const isScrollAtTop = window.scrollY < 88;

      setIsScrolled(!isScrollAtTop);
    };

    window.addEventListener('scroll', windowScroll);

    return () => {
      window.removeEventListener('scroll', windowScroll);
    };
  }, []);

  return (
    <Container>
      <Header isScrolled={isScrolled} />
      <Main>
        <About id="about" />
      </Main>
      <Footer />
    </Container>
  );
}
