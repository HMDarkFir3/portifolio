import { useTheme } from 'styled-components';

import styles from './styles.module.css';

interface Props {
  href: string;
  icon: React.ElementType;
}

export function SocialButton(props: Props) {
  const { href, icon: Icon } = props;

  const { colors } = useTheme();

  return (
    <a className={styles.container} href={href}>
      <Icon size={24} color={colors.primary600} />
      <div className={styles.bar} />
    </a>
  );
}
