import { IconProps } from 'react-feather';

import { Tooltip } from '@/components/Tooltip';

import styles from './styles.module.scss';

interface Props {
  name: string;
  href: string;
  icon: React.ElementType<IconProps>;
}

export function SocialButton(props: Props) {
  const { name, href, icon: Icon } = props;

  return (
    <Tooltip content={name}>
      <a className={styles.container} href={href} target="_blank">
        <Icon className={styles.icon} size={24} />
        <div className={styles.bar} />
      </a>
    </Tooltip>
  );
}
