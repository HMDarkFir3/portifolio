import { Link as ScrollLink } from 'react-scroll';
import { ArrowDown } from 'react-feather';

import { HEADER_HEIGHT } from '@/utils/constants';

import styles from './styles.module.css';

interface Props {
  to: string;
}

export function ScrollDownButton(props: Props) {
  const { to } = props;

  return (
    <button className={styles.container}>
      <ScrollLink
        className={styles.scrollLink}
        to={to}
        spy={true}
        smooth={true}
        offset={-HEADER_HEIGHT}
        duration={500}
      >
        <div className={styles.scroll}>
          <div className={styles.scrollBar} />
        </div>
        <span>Scroll Down</span>
        <ArrowDown className={styles.scrollIcon} size={16} />
      </ScrollLink>
    </button>
  );
}
