import { Linkedin, GitHub, Instagram } from 'react-feather';

import { SocialButton } from '@/components/Buttons/SocialButton';
import { Button } from '@/components/Buttons/Button';
import { ScrollDownButton } from '@/components/Buttons/ScrollDownButton';

import { robotoMono } from '@/styles/fonts';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function About(props: Props) {
  const { ...rest } = props;

  return (
    <section className={styles.container} {...rest}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <SocialButton
            href="https://www.linkedin.com/in/hlom/"
            icon={Linkedin}
          />

          <SocialButton href="https://github.com/HMDarkFir3" icon={GitHub} />

          <SocialButton
            href="https://www.instagram.com/hrq_marques/"
            icon={Instagram}
          />
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

      <ScrollDownButton to="experience" />
    </section>
  );
}
