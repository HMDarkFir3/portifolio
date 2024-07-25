import { useNavbar } from '@/contexts/NavbarContext';

import { Navbar } from '@/components/Layout/Navbar';
import { Overlay } from '@/components/Overlay';

import styles from './styles.module.scss';

interface Props {
  isScrolled: boolean;
}

export function Header(props: Props) {
  const { isScrolled } = props;

  const { isOpenMenu, onToggleMenu } = useNavbar();

  const containerClassName = isScrolled
    ? `${styles.container} ${styles.isScrolled}`
    : `${styles.container} ${styles.isNotScrolled}`;

  const barClassName = isOpenMenu
    ? `${styles.bar} ${styles.barIsActive}`
    : styles.bar;

  const menuClassName = isOpenMenu
    ? `${styles.menu} ${styles.menuIsActive}`
    : styles.menu;

  return (
    <header className={containerClassName}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <span className={styles.name}>
            <a href="/">HM</a>
          </span>
        </div>

        <button className={styles.buttonMenu} onClick={onToggleMenu}>
          <div className={barClassName} />
          <div className={barClassName} />
          <div className={barClassName} />
        </button>

        <div className={styles.menuIsNotActive}>
          <Navbar />
        </div>
      </div>

      <div className={menuClassName}>
        <Navbar />
      </div>

      <Overlay />
    </header>
  );
}
