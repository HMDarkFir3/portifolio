import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import { SocialButton } from '@/components/Buttons/SocialButton';
import { Button } from '@/components/Buttons/Button';
import { ScrollDownButton } from '@/components/Buttons/ScrollDownButton';

import { HEADER_HEIGHT } from '@/utils/constants';
import { socialMedia } from '@/utils/socialMedia';

import { robotoMono } from '@/styles/fonts';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function About(props: Props) {
  const { ...rest } = props;

  const { onScrollTo } = useSmoothScroll();

  return (
    <section className={styles.container} {...rest}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          {socialMedia.map((social) => (
            <SocialButton
              key={social.id}
              name={social.name}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>

        <div className={styles.content}>
          <span className={`${robotoMono.className} ${styles.grettings}`}>
            Hi, my name is
          </span>

          <div className={styles.presentation}>
            <span className={styles.name}>Henrique Marques.</span>
            <span className={styles.role}>Front-End and Mobile Developer.</span>
          </div>

          <p className={styles.resume}>
            I{`'`}m Henrique, a Systems Development technician from ETEC Doutora
            Ruth Cardoso, currently studying Analysis and Systems Development at
            Fatec Rubens Lara. Experienced in logistics and e-commerce projects,
            with a focus on mobile app development using React Native.
            Proficient in website development using ReactJS and NextJS.
          </p>

          <Button>Get in touch</Button>
        </div>
      </div>

      <ScrollDownButton
        onClick={() => onScrollTo('experience', HEADER_HEIGHT)}
      />
    </section>
  );
}
