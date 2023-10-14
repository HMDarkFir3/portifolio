import styles from './styles.module.scss';

interface Props {
  title: string;
}

export function TagCard(props: Props) {
  const { title } = props;

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
