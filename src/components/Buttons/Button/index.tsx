import styles from './styles.module.css';

export function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.container}>{children}</button>;
}
