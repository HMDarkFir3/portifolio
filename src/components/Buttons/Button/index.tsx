import styles from './styles.module.scss';

export function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.container}>{children}</button>;
}
