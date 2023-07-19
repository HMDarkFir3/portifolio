import Link from "next/link";
import { useTheme } from "styled-components";
import { Linkedin, GitHub, Instagram } from "react-feather";

import { Button } from "@/components/Button";

import { robotoMono } from "@/styles/fonts";

import { Container, IconWrapper, Content, Presentation } from "./styles";

export function About() {
  const { colors } = useTheme();

  return (
    <Container>
      <IconWrapper>
        <Link className="iconLink" href="https://www.linkedin.com/in/hlom/">
          <Linkedin size={24} color={colors.primary600} />
        </Link>

        <Link className="iconLink" href="https://github.com/HMDarkFir3">
          <GitHub size={24} color={colors.primary600} />
        </Link>

        <Link
          className="iconLink"
          href="https://www.instagram.com/hrq_marques/"
        >
          <Instagram size={24} color={colors.primary600} />
        </Link>
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
          with a focus on mobile app development using React Native. Proficient
          in website development using ReactJS and NextJS.
        </p>

        <div>
          <Button>Get in touch</Button>
        </div>
      </Content>
    </Container>
  );
}
