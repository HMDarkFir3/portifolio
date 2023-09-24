import { useNavbar } from '@/contexts/NavbarContext';

import { useWindowDimensions } from '@/hooks/useWindowDimensions';

import { Navbar } from '@/components/Navbar';
import { Overlay } from '@/components/Overlay';

import styles from './styles.module.css';

interface Props {
  isScrolled: boolean;
}

export function Header(props: Props) {
  const { isScrolled } = props;

  const { isOpenMenu, onToggleMenu } = useNavbar();
  const { width } = useWindowDimensions();

  const containerClassName = isScrolled
    ? `${styles.container} ${styles.isScrolled}`
    : `${styles.container} ${styles.isNotScrolled}`;

  const barClassName = isOpenMenu
    ? `${styles.bar} ${styles.barActive}`
    : styles.bar;

  const menuClassName = isOpenMenu
    ? `${styles.menu} ${styles.menuActive}`
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

        {width > 796 && <Navbar />}
      </div>

      <div className={menuClassName}>
        <Navbar />
      </div>

      <Overlay />
    </header>
  );
}
