'use client';

import { useEffect } from 'react';

import { useWindowScroll } from '@/hooks/useWindowScroll';

import { Header } from '@/components/Layout/Header';
import { About } from '@/components/Sections/About';
import { Experience } from '@/components/Sections/Experience';
import { Projects } from '@/components/Sections/Projects';
import { Footer } from '@/components/Layout/Footer';

import { HEADER_HEIGHT } from '@/utils/constants';

import styles from '@/styles/styles.module.scss';
import variables from '@/styles/variables.module.scss';

export default function Page() {
  const { isScrolled } = useWindowScroll(HEADER_HEIGHT);

  useEffect(() => {
    const cssVariables = `
    :root {
      --background: ${variables.background};
      --primary900: ${variables.primary900};
      --primary800: ${variables.primary800};
      --primary600: ${variables.primary600};

      --text600: ${variables.text600};
      --text400: ${variables.text400};
      --text100: ${variables.text100};

      --overlay: ${variables.overlay};
      --boxShadow: ${variables.boxShadow};
    }
  `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = cssVariables;
    document.head.appendChild(styleSheet);
  }, []);

  return (
    <div className={styles.container}>
      <Header isScrolled={isScrolled} />
      <main className={styles.main}>
        <About id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
      </main>
      <Footer />
    </div>
  );
}
