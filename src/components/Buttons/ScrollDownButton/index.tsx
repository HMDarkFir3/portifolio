import { ArrowDown } from 'react-feather';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export function ScrollDownButton(props: Props) {
  const { ...rest } = props;

  return (
    <button
      className={styles.container}
      onClick={() => {
        const element = document.getElementById('experience');

        element?.scrollIntoView({ behavior: 'smooth' });
      }}
      {...rest}
    >
      <div className={styles.scroll}>
        <div className={styles.scrollBar} />
      </div>
      <span>Scroll Down</span>

      <ArrowDown className={styles.scrollIcon} size={16} />
    </button>
  );
}
