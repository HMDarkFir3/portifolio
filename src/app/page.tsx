'use client';

import { useWindowScroll } from '@/hooks/useWindowScroll';

import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';

import { HEADER_HEIGHT } from '@/utils/constants';

import styles from '@/styles/styles.module.css';

export default function Page() {
  const { isScrolled } = useWindowScroll(HEADER_HEIGHT);

  return (
    <div className={styles.container}>
      <Header isScrolled={isScrolled} />
      <main className={styles.main}>
        <About id="about" />
        <About id="experience" />
        {/* <Experience id="experience" /> */}
      </main>
      <Footer />
    </div>
  );
}
