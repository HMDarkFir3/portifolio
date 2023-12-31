import { IconProps } from 'react-feather';

import styles from './styles.module.scss';

interface Props {
  href: string;
  icon: React.ElementType<IconProps>;
}

export function SocialButton(props: Props) {
  const { href, icon: Icon } = props;

  return (
    <a className={styles.container} href={href} target="_blank">
      <Icon className={styles.icon} size={24} />
      <div className={styles.bar} />
    </a>
  );
}
