import { useState } from "react";
import { useTheme } from "styled-components";
import { Menu } from "react-feather";

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
    },
    {
      id: "2",
      label: "Experience",
    },
    {
      id: "3",
      label: "Projects",
    },
    {
      id: "4",
      label: "Contact",
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
          <Menu size={24} color={colors.primary600} />
        </ButtonMenu>

        <ListWrapper>
          <List>
            {links.map((link) => (
              <ListItem key={link.id}>
                <span className={`${robotoMono.className} index`}>
                  0{link.id}.
                </span>
                <span className={`${robotoMono.className} label`}>
                  {link.label}
                </span>
              </ListItem>
            ))}
          </List>
        </ListWrapper>
      </div>

      <div className={isOpenMenu ? "menu menuActive" : "menu"}>
        <List>
          {links.map((link) => (
            <ListItem key={link.id}>
              <span className={`${robotoMono.className} index`}>
                0{link.id}.
              </span>
              <span className={`${robotoMono.className} label`}>
                {link.label}
              </span>
            </ListItem>
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
