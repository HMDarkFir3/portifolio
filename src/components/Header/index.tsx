import { useNavbar } from '@/contexts/NavbarContext';

import { Navbar } from '@/components/Navbar';
import { Overlay } from '@/components/Overlay';

import styles from './styles.module.css';

interface Props {
  isScrolled: boolean;
}

export function Header(props: Props) {
  const { isScrolled } = props;

  const { isOpenMenu, onToggleMenu } = useNavbar();

  return (
    <header
      className={
        isScrolled
          ? `${styles.container} ${styles.isScrolled}`
          : `${styles.container} ${styles.isNotScrolled}`
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <span className={styles.name}>
            <a href="/">HM</a>
          </span>
        </div>

        <button className={styles.buttonMenu} onClick={onToggleMenu}>
          <div
            className={
              isOpenMenu ? `${styles.bar} ${styles.barActive}` : styles.bar
            }
          />
          <div
            className={
              isOpenMenu ? `${styles.bar} ${styles.barActive}` : styles.bar
            }
          />
          <div
            className={
              isOpenMenu ? `${styles.bar} ${styles.barActive}` : styles.bar
            }
          />
        </button>

        <Navbar isVisible={false} />
      </div>

      <div
        className={
          isOpenMenu ? `${styles.menu} ${styles.menuActive}` : styles.menu
        }
      >
        <Navbar />
      </div>

      <Overlay />
    </header>
  );
}
