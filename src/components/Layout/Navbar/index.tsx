import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import { useNavbar } from '@/contexts/NavbarContext';

import { links } from '@/utils/links';
import { HEADER_HEIGHT } from '@/utils/constants';

import { robotoMono } from '@/styles/fonts';

import styles from './styles.module.scss';

export function Navbar() {
  const { onScrollTo } = useSmoothScroll();
  const { onToggleMenu } = useNavbar();

  return (
    <nav className={`${styles.container} ${styles.isMobile}`}>
      <ul className={styles.list}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onScrollTo(link.slug, HEADER_HEIGHT)}
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
          </button>
        ))}
      </ul>
    </nav>
  );
}
