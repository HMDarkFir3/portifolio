import { SocialButton } from '@/components/Buttons/SocialButton';

import { socialMedia } from '@/utils/socialMedia';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <span className={styles.name}>Henrique Marques</span>

      <div className={styles.social}>
        {socialMedia.map((social) => (
          <SocialButton
            key={social.id}
            name={social.name}
            href={social.href}
            icon={social.icon}
          />
        ))}
      </div>

      <span className={styles.copyright}>&copy; 2024 all rights reserved</span>
    </footer>
  );
}
