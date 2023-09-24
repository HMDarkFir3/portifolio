import { Linkedin, GitHub, Instagram } from 'react-feather';

import { SocialButton } from '@/components/Buttons/SocialButton';

import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <span className="name">Henrique Marques</span>

      <div className="social">
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

      <span className="copyright">&copy; 2023 all rights reserved</span>
    </Container>
  );
}
