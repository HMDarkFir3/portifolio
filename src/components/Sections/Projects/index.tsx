import { Carousel } from '@/components/Carousel';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Projects(props: Props) {
  const { ...rest } = props;

  return (
    <section className={styles.container} {...rest}>
      <h3 className={styles.heading}>Projects</h3>

      <Carousel />
    </section>
  );
}
