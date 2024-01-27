import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  content: string;
}

export function Tooltip(props: Props) {
  const { children, content } = props;

  return (
    <div className={styles.container}>
      <div className={styles.tooltip}>
        <span>{content}</span>
      </div>

      {children}
    </div>
  );
}
