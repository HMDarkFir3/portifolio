import { useNavbar } from '@/hooks/useNavbar';

import styles from './styles.module.scss';

export function Overlay() {
  const { isOpenMenu, onToggleMenu } = useNavbar();

  const containerClassName = isOpenMenu
    ? `${styles.container} ${styles.active}`
    : styles.container;

  return <div className={containerClassName} onClick={onToggleMenu} />;
}
