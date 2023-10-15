'use client';

import { useWindowScroll } from '@/hooks/useWindowScroll';

import { Header } from '@/components/Layout/Header';
import { About } from '@/components/Sections/About';
import { Experience } from '@/components/Sections/Experience';
import { Footer } from '@/components/Layout/Footer';

import { HEADER_HEIGHT } from '@/utils/constants';

import styles from '@/styles/styles.module.scss';

export default function Page() {
  const { isScrolled } = useWindowScroll(HEADER_HEIGHT);

  return (
    <div className={styles.container}>
      <Header isScrolled={isScrolled} />
      <main className={styles.main}>
        <About id="about" />
        <Experience id="experience" />
      </main>
      <Footer />
    </div>
  );
}
