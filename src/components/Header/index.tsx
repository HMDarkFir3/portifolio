import { useNavbar } from '@/contexts/NavbarContext';

import { Navbar } from '@/components/Navbar';
import { Overlay } from '@/components/Overlay';

import { Container, Logo, ButtonMenu } from './styles';

interface Props {
  isScrolled: boolean;
}

export function Header(props: Props) {
  const { isScrolled } = props;

  const { isOpenMenu, onToggleMenu } = useNavbar();

  return (
    <Container isScrolled={isScrolled}>
      <div className="wrapper">
        <Logo>
          <span className="name">
            <a href="/">HM</a>
          </span>
        </Logo>

        <ButtonMenu className="menuIcon" onClick={onToggleMenu}>
          <div className={isOpenMenu ? 'bar barActive' : 'bar'} />
          <div className={isOpenMenu ? 'bar barActive' : 'bar'} />
          <div className={isOpenMenu ? 'bar barActive' : 'bar'} />
        </ButtonMenu>

        <Navbar isVisible={false} />
      </div>

      <div className={isOpenMenu ? 'menu menuActive' : 'menu'}>
        <Navbar />
      </div>

      <Overlay />
    </Container>
  );
}
