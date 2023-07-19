import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "styled-components";
import { Linkedin, GitHub, Instagram, ArrowDown } from "react-feather";

import { Button } from "@/components/Button";

import { robotoMono } from "@/styles/fonts";

import {
  Container,
  IconWrapper,
  Content,
  Presentation,
  ScrollDown,
} from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Experience(props: Props) {
  const { ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <div className="wrapper">
        <IconWrapper>
          <a className="iconLink" href="https://www.linkedin.com/in/hlom/">
            <Linkedin size={24} color={colors.primary600} />
          </a>

          <a className="iconLink" href="https://github.com/HMDarkFir3">
            <GitHub size={24} color={colors.primary600} />
          </a>

          <a className="iconLink" href="https://www.instagram.com/hrq_marques/">
            <Instagram size={24} color={colors.primary600} />
          </a>
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

          <div>
            <Button>Get in touch</Button>
          </div>
        </Content>
      </div>

      <ScrollDown>
        <ScrollLink
          className="scrollLink"
          to="experience"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          <div className="scroll" />
          <span>Scroll Down</span>
          <ArrowDown size={16} color={colors.primary600} />
        </ScrollLink>
      </ScrollDown>
    </Container>
  );
}
