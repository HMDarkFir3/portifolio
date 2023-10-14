import { experiences } from '@/utils/experiences';

import styles from './styles.module.scss';

interface Props {
  data: (typeof experiences)[0];
  contentStyle?: React.CSSProperties;
}

export function ExperienceCard(props: Props) {
  const { title, description, company, period } = props.data;
  const { contentStyle } = props;

  return (
    <div className={styles.container}>
      <div className={styles.dotWrapper}>
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>

      <div className={styles.content} style={contentStyle}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.title}>{company}</h4>
            <span className={styles.period}>{period}</span>
          </div>

          <span className={styles.subtitle}>{title}</span>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
