import { useState, useCallback } from 'react';

import { InlineButton } from '@/components/Buttons/InlineButton';
import { ExperienceCard } from '@/components/Cards/ExperienceCard';

import { experiences } from '@/utils/experiences';
import { educations } from '@/utils/educations';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

type ExperienceType = 'Experience' | 'Education';

export function Experience(props: Props) {
  const { ...rest } = props;

  const [isActive, setIsActive] = useState<ExperienceType>('Experience');

  const onToggleExperience = useCallback(
    (type: ExperienceType) => setIsActive(type),
    [setIsActive],
  );

  return (
    <section className={styles.container} {...rest}>
      <div className={styles.typeWrapper}>
        <InlineButton
          onClick={() => onToggleExperience('Experience')}
          isActive={isActive === 'Experience'}
        >
          Experience
        </InlineButton>

        <div className={styles.bar} />

        <InlineButton
          onClick={() => onToggleExperience('Education')}
          isActive={isActive === 'Education'}
        >
          Education
        </InlineButton>
      </div>

      {isActive === 'Experience' && (
        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              data={experience}
              {...(index !== experiences.length - 1 && {
                contentStyle: { marginBottom: 80 },
              })}
            />
          ))}
        </div>
      )}

      {isActive === 'Education' && (
        <div>
          {educations.map((education, index) => (
            <ExperienceCard
              key={education.id}
              data={education}
              {...(index !== educations.length - 1 && {
                contentStyle: { marginBottom: 80 },
              })}
            />
          ))}
        </div>
      )}
    </section>
  );
}
