import { useTheme } from "styled-components";
import { Linkedin, GitHub, Instagram } from "react-feather";

import { SocialButton } from "@/components/Buttons/SocialButton";
import { Button } from "@/components/Buttons/Button";
import { ScrollDownButton } from "@/components/Buttons/ScrollDownButton";

import { robotoMono } from "@/styles/fonts";

import { Container, IconWrapper, Content, Presentation } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function About(props: Props) {
  const { ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <div className="wrapper">
        <IconWrapper>
          <SocialButton
            href="https://www.linkedin.com/in/hlom/"
            icon={Linkedin}
          />

          <SocialButton href="https://github.com/HMDarkFir3" icon={GitHub} />

          <SocialButton
            href="https://www.instagram.com/hrq_marques/"
            icon={Instagram}
          />
        </IconWrapper>

        <Content>
          <span className={`${robotoMono.className} grettings`}>
            Hi, my name is
          </span>

          <Presentation>
            <span className="name">Henrique Marques.</span>
            <span className="role">Front-End and Mobile Developer.</span>
          </Presentation>

          <p className="resume">
            I{`'`}m Henrique, a Systems Development technician from ETEC Doutora
            Ruth Cardoso, currently studying Analysis and Systems Development at
            Fatec Rubens Lara. Experienced in logistics and e-commerce projects,
            with a focus on mobile app development using React Native.
            Proficient in website development using ReactJS and NextJS.
          </p>

          <Button>Get in touch</Button>
        </Content>
      </div>

      <ScrollDownButton to="experience" />
    </Container>
  );
}
