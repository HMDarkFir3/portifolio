import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

export function InlineButton(props: Props) {
  const { children, isActive, ...rest } = props;

  const containerClassName = isActive
    ? `${styles.button} ${styles.isActive}`
    : `${styles.button} ${styles.isNotActive}`;

  return (
    <div className={styles.container}>
      <button className={containerClassName} {...rest}>
        {children}
      </button>
      <div className={styles.bar} />
    </div>
  );
}
