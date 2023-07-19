import {} from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "styled-components";

import { useMenu } from "@/contexts/MenuContext";

import { robotoMono } from "@/styles/fonts";

import {
  Container,
  Logo,
  ButtonMenu,
  ListWrapper,
  List,
  ListItem,
} from "./styles";

export function Navbar() {
  const { isOpenMenu, onToggleMenu } = useMenu();
  const { colors } = useTheme();

  const links = [
    {
      id: "1",
      label: "About",
      slug: "about",
    },
    {
      id: "2",
      label: "Experience",
      slug: "experience",
    },
    {
      id: "3",
      label: "Projects",
      slug: "projects",
    },
    {
      id: "4",
      label: "Contact",
      slug: "contact",
    },
  ];

  return (
    <Container>
      <div className="wrapper">
        <Logo>
          <span className="name">
            <a href="/">HM</a>
          </span>
        </Logo>

        <ButtonMenu className="menuIcon" onClick={onToggleMenu}>
          <div className={isOpenMenu ? "bar barActive" : "bar"} />
          <div className={isOpenMenu ? "bar barActive" : "bar"} />
          <div className={isOpenMenu ? "bar barActive" : "bar"} />
        </ButtonMenu>

        <ListWrapper>
          <List>
            {links.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.slug}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <ListItem>
                  <span className={`${robotoMono.className} index`}>
                    0{link.id}.
                  </span>
                  <span className={`${robotoMono.className} label`}>
                    {link.label}
                  </span>
                </ListItem>
              </ScrollLink>
            ))}
          </List>
        </ListWrapper>
      </div>

      <div className={isOpenMenu ? "menu menuActive" : "menu"}>
        <List>
          {links.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.slug}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <ListItem key={link.id} onClick={onToggleMenu}>
                <span className={`${robotoMono.className} index`}>
                  0{link.id}.
                </span>
                <span className={`${robotoMono.className} label`}>
                  {link.label}
                </span>
              </ListItem>
            </ScrollLink>
          ))}
        </List>
      </div>

      <div
        className={isOpenMenu ? "overlay overlayActive" : "overlay"}
        onClick={onToggleMenu}
      />
    </Container>
  );
}
