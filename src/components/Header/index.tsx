import { Link as ScrollLink } from "react-scroll";

import { useNavbar } from "@/contexts/NavbarContext";

import { Navbar } from "@/components/Navbar";
import { Overlay } from "@/components/Overlay";

import { robotoMono } from "@/styles/fonts";

import {
  Container,
  Logo,
  ButtonMenu,
  ListWrapper,
  List,
  ListItem,
} from "./styles";

export function Header() {
  const { isOpenMenu, onToggleMenu } = useNavbar();

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

        <Navbar isVisible={false} />
      </div>

      <div className={isOpenMenu ? "menu menuActive" : "menu"}>
        <Navbar />
      </div>

      <Overlay />
    </Container>
  );
}
