import { ExperienceCard } from '@/components/ExperienceCard';

import { experiences } from '@/utils/experiences';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Experience(props: Props) {
  const { ...rest } = props;

  return (
    <section className={styles.container} {...rest}>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          data={experience}
          {...(index !== experiences.length - 1 && {
            contentStyle: { marginBottom: 80 },
          })}
        />
      ))}
    </section>
  );
}
