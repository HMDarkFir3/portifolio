import { Link as ScrollLink } from "react-scroll";

import { useNavbar } from "@/contexts/NavbarContext";

import { robotoMono } from "@/styles/fonts";

import { Container } from "./styles";

interface Props {
  isVisible?: boolean;
}

export function Navbar(props: Props) {
  const { isVisible = true } = props;

  const { onToggleMenu } = useNavbar();

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
    <Container isVisible={isVisible}>
      <ul className="list">
        {links.map((link) => (
          <ScrollLink
            key={link.id}
            to={link.slug}
            smooth={true}
            offset={-88}
            duration={500}
          >
            <li className="item" onClick={onToggleMenu}>
              <div className="listItemWrapper">
                <span className={`${robotoMono.className} index`}>
                  0{link.id}.
                </span>
                <span className={`${robotoMono.className} label`}>
                  {link.label}
                </span>
              </div>

              <div className="bar" />
            </li>
          </ScrollLink>
        ))}
      </ul>
    </Container>
  );
}
