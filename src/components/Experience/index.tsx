import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Experience(props: Props) {
  const { ...rest } = props;

  return <section className={styles.container} {...rest}></section>;
}
