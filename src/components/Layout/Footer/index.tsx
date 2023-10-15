import { Linkedin, GitHub, Instagram } from 'react-feather';

import { SocialButton } from '@/components/Buttons/SocialButton';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <span className={styles.name}>Henrique Marques</span>

      <div className={styles.social}>
        <SocialButton
          href="https://www.linkedin.com/in/hlom/"
          icon={Linkedin}
        />

        <SocialButton href="https://github.com/HMDarkFir3" icon={GitHub} />

        <SocialButton
          href="https://www.instagram.com/hrq_marques/"
          icon={Instagram}
        />
      </div>

      <span className={styles.copyright}>&copy; 2023 all rights reserved</span>
    </footer>
  );
}
