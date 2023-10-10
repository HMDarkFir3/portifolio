import { Link as ScrollLink } from 'react-scroll';

import { useNavbar } from '@/hooks/useNavbar';

import { links } from '@/utils/links';

import { robotoMono } from '@/styles/fonts';

import styles from './styles.module.scss';

export function Navbar() {
  const { onToggleMenu } = useNavbar();

  return (
    <nav className={`${styles.container} ${styles.isMobile}`}>
      <ul className={styles.list}>
        {links.map((link) => (
          <ScrollLink
            key={link.id}
            to={link.slug}
            smooth={true}
            offset={-88}
            duration={500}
          >
            <li className={styles.item} onClick={onToggleMenu}>
              <div className={styles.itemWrapper}>
                <span className={`${robotoMono.className} ${styles.index}`}>
                  0{link.id}.
                </span>
                <span className={`${robotoMono.className} ${styles.label}`}>
                  {link.label}
                </span>
              </div>

              <div className={styles.bar} />
            </li>
          </ScrollLink>
        ))}
      </ul>
    </nav>
  );
}
