import { useState } from 'react';

import { ExperienceCard } from '@/components/ExperienceCard';
import { InlineButton } from '@/components/Buttons/InlineButton';

import { experiences } from '@/utils/experiences';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Experience(props: Props) {
  const { ...rest } = props;

  const [isActive, setIsActive] = useState<'Experience' | 'Education'>(
    'Experience'
  );

  function onToggleExperience(type: 'Experience' | 'Education') {
    setIsActive(type);
  }

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
    </section>
  );
}
